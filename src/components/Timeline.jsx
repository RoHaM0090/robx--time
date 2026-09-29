import {fmtDate,num} from '../utils/age.js';import {useT} from '../i18n.jsx';
export default function Timeline({created,age}){const{t}=useT();const c=new Date(created);
 const items=[{t:t('tl0'),d:fmtDate(c)},...Array.from({length:age.years},(_,i)=>{const x=new Date(c);x.setFullYear(c.getFullYear()+i+1);return{t:t('tlN',{n:num(i+1)}),d:fmtDate(x)}}),{t:t('tlT'),d:fmtDate(new Date())}];
 return(<section className="px-4 max-w-2xl mx-auto mt-12" aria-label="Timeline"><h2 className="text-2xl font-extrabold mb-4 text-center">{t('tl')}</h2>
  <ol className="glass p-5 sm:p-7">{items.map((it,i)=><li key={i} className="relative ps-7 pb-5 last:pb-0 fade" style={{animationDelay:Math.min(i*60,600)+'ms'}}>
   {i<items.length-1&&<span className="absolute start-[5px] top-4 bottom-0 w-px bg-cyan-400/30"/>}
   <span className="absolute start-0 top-1.5 w-3 h-3 rounded-full" style={{background:'var(--c)',boxShadow:'0 0 12px var(--c)'}}/><div className="font-semibold">{it.t}</div><div className="lbl">{it.d}</div></li>)}</ol></section>)}
