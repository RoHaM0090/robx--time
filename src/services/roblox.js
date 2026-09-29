export const USERNAME_RE=/^[A-Za-z0-9_]{3,20}$/;
export async function fetchAccount(username){
 const c=new AbortController();const t=setTimeout(()=>c.abort(),12000);
 try{
  const r=await fetch(`/.netlify/functions/roblox?username=${encodeURIComponent(username)}`,{signal:c.signal});
  const j=await r.json().catch(()=>({}));
  if(!r.ok)throw new Error(j.error||'unavailable');
  return j;
 }catch(e){
  if(e.name==='AbortError')throw new Error('timeout');
  if(e instanceof TypeError)throw new Error('network');
  throw e;
 }finally{clearTimeout(t)}
}
