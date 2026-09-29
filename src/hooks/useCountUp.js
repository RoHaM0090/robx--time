import {useEffect,useState} from 'react';
export default function useCountUp(to,ms=900){
 const[v,setV]=useState(0);
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){setV(to);return}
  let s,r;const f=t=>{s??=t;const p=Math.min((t-s)/ms,1);setV(to*(1-Math.pow(1-p,3)));if(p<1)r=requestAnimationFrame(f)};
  r=requestAnimationFrame(f);return()=>cancelAnimationFrame(r);
 },[to,ms]);
 return v;
}
