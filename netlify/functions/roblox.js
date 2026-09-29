// Server-side proxy for public Roblox APIs (avoids browser CORS). No secrets needed.
const H={'Content-Type':'application/json','Cache-Control':'public, max-age=60'};
const out=(s,b)=>({statusCode:s,headers:H,body:JSON.stringify(b)});
async function rb(url,opt={}){const c=new AbortController();const t=setTimeout(()=>c.abort(),8000);
 try{return await fetch(url,{...opt,signal:c.signal})}finally{clearTimeout(t)}}
export const handler=async(event)=>{
 const username=(event.queryStringParameters?.username||'').trim();
 if(!/^[A-Za-z0-9_]{3,20}$/.test(username))return out(400,{error:'invalid'});
 try{
  const r1=await rb('https://users.roblox.com/v1/usernames/users',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({usernames:[username],excludeBannedUsers:false})});
  if(r1.status===429)return out(429,{error:'rate'});
  if(!r1.ok)return out(502,{error:'unavailable'});
  const u=(await r1.json()).data?.[0];
  if(!u)return out(404,{error:'notfound'});
  const [r2,r3]=await Promise.all([
   rb(`https://users.roblox.com/v1/users/${u.id}`),
   rb(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${u.id}&size=420x420&format=Png&isCircular=false`)]);
  if(r2.status===429)return out(429,{error:'rate'});
  if(!r2.ok)return out(502,{error:'unavailable'});
  const p=await r2.json();let avatar=null;
  if(r3.ok){const t=(await r3.json()).data?.[0];if(t?.state==='Completed')avatar=t.imageUrl}
  return out(200,{id:p.id,name:p.name,displayName:p.displayName,created:p.created,avatar});
 }catch(e){return out(502,{error:e.name==='AbortError'?'timeout':'unavailable'})}
};
