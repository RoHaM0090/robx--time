export let LOC='fa-IR';
export const setLoc=l=>{LOC=l==='fa'?'fa-IR':'en-US'};
export function calcAge(created,now=new Date()){
 const c=new Date(created);
 let years=now.getFullYear()-c.getFullYear(),months=now.getMonth()-c.getMonth(),days=now.getDate()-c.getDate();
 if(days<0){months--;days+=new Date(now.getFullYear(),now.getMonth(),0).getDate()}
 if(months<0){years--;months+=12}
 return{years,months,days,totalDays:Math.max(1,Math.floor((now-c)/864e5))};
}
export const fmtDate=d=>new Date(d).toLocaleDateString(LOC,{year:'numeric',month:'long',day:'numeric'});
export const num=(n,d=0)=>n.toLocaleString(LOC,{maximumFractionDigits:d,minimumFractionDigits:d});
