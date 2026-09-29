import {useState,useMemo} from 'react';import useCountUp from '../hooks/useCountUp.js';import {calcPlaytime} from '../utils/playtime.js';import {num} from '../utils/age.js';
import Chart from './Chart.jsx';import {useT} from '../i18n.jsx';
function Big({to,d=0,cls}){const v=useCountUp(to);return<span className={cls}>{num(v,d)}</span>}
function Field({id,label,min,max,step,value,set}){return(<div><label htmlFor={id} className="lbl">{label}</label><div className="flex items-center gap-3">
 <input type="range" aria-label={label} min={min} max={max} step={step} value={value} onChange={e=>set(+e.target.value)}/>
 <input id={id} type="number" className="inp !w-24 text-center" min={min} max={max} step={step} value={value} onChange={e=>set(Math.min(max,Math.max(min,+e.target.value||0)))}/></div></div>)}
export default function Playtime({age}){const{t}=useT();
 const[h,setH]=useState(2.5);const[d,setD]=useState(5);
 const r=useMemo(()=>calcPlaytime(age.totalDays,h,d),[age.totalDays,h,d]);
 const C=2*Math.PI*52;
 const K=[r.hours,r.days,r.weeks,r.months,r.years,r.perWeek,r.perYear],D=[0,1,1,1,2,1,0];const rows=t('rows').map((k,i)=>[k,num(K[i],D[i])]);
 return(<section className="px-4 max-w-4xl mx-auto mt-12" aria-label={t('pt')}>
  <h2 className="text-2xl font-extrabold mb-4 text-center">{t('pt')}</h2>
  <div className="glass p-5 sm:p-7 grid gap-5"><Field id="hpd" label={t('q1')} min={0} max={24} step={0.5} value={h} set={setH}/><Field id="dpw" label={t('q2')} min={0} max={7} step={1} value={d} set={setD}/></div>
  <div className="glass p-6 sm:p-8 mt-5 text-center" style={{boxShadow:'0 0 70px -25px rgba(34,211,238,.5)'}}>
   <p className="lbl">{t('pt2')}</p><div className="mt-2"><Big to={r.hours} cls="big text-5xl sm:text-7xl"/><span className="text-xl font-extrabold text-cyan-300 ml-2">{t('hrs')}</span></div>
   <p className="mt-2 text-xl font-semibold"><Big to={r.days} d={1}/> {t('days')}</p>
   <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 text-left">{rows.map(([k,v])=><div key={k} className="rounded-xl bg-white/5 p-3"><dt className="lbl">{k}</dt><dd className="font-extrabold text-lg">{v}</dd></div>)}</dl>
   <p className="lbl mt-4">{t('ptn')}</p></div>
  <div className="grid sm:grid-cols-2 gap-5 mt-5">
   <div className="glass p-6 flex items-center gap-5"><svg width="120" height="120" viewBox="0 0 120 120" role="img" aria-label={`${num(r.pct,1)} percent`} className="shrink-0"><circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="10"/><circle cx="60" cy="60" r="52" fill="none" stroke="#22d3ee" strokeWidth="10" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C*(1-r.pct/100)} transform="rotate(-90 60 60)" style={{transition:'stroke-dashoffset .6s'}}/><text x="60" y="66" textAnchor="middle" fill="#fff" fontWeight="800" fontSize="20">{num(r.pct,1)}%</text></svg>
    <p className="lbl">{t('pctn')}</p></div>
   <Chart age={age} perYear={r.perYear}/></div>
 </section>)}
