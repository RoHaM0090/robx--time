import {useState} from 'react';import {USERNAME_RE} from '../services/roblox.js';import {useT} from '../i18n.jsx';import {Live} from './Extras.jsx';
export default function SearchCard({status,step,error,onSubmit,onHelp}){
 const{t}=useT();const[v,setV]=useState('');const[e,setE]=useState('');const busy=status==='loading';
 const go=ev=>{ev.preventDefault();const u=v.trim().replace(/^@/,'');if(!USERNAME_RE.test(u)){setE('invalid');return}setE('');onSubmit(u)};
 const err=e||error;
 return(<section className="pt-28 pb-6 px-4 text-center max-w-2xl mx-auto">
  <div className="flex justify-center mb-6 fade"><Live/></div>
  <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight"><span className="big shine">{t('brand')}</span></h1>
  <p className="text-2xl sm:text-3xl font-bold mt-4">{t('title')}</p>
  <p className="lbl !text-base mt-3">{t('desc')}</p>
  <form onSubmit={go} className="glass p-4 sm:p-6 mt-8 text-start grid gap-3" noValidate>
   <label htmlFor="u" className="lbl">{t('ulabel')}</label>
   <div className="relative"><svg className="absolute start-4 top-1/2 -translate-y-1/2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="3" transform="rotate(12 12 12)"/><rect x="10" y="10" width="4" height="4" transform="rotate(12 12 12)"/></svg>
    <input id="u" dir="ltr" className="inp !ps-12 text-start" value={v} onChange={x=>setV(x.target.value)} placeholder={t('ph')} autoComplete="off" autoCapitalize="none" spellCheck="false" aria-invalid={!!err} aria-describedby="uerr" disabled={busy}/></div>
   <button className="btn" disabled={busy}>{busy?t('busy'):t('go')}</button>
   {busy&&<div className="fade" role="status"><p className="font-semibold">{t('analyzing')}</p><ul className="lbl mt-2 grid gap-1">{t('steps').map((s,i)=><li key={s}>{i<step?'✓ ':i===step?'● ':'○ '}{s}</li>)}</ul></div>}
   <p id="uerr" role="alert" className={err?'fade rounded-xl border border-red-400/40 bg-red-500/10 text-red-200 p-3 text-sm':'sr-only'}>{err&&t('e_'+err)}</p>
  </form>
  <button className="btn-ghost mt-4" onClick={onHelp}>{t('helpbtn')}</button>
 </section>)}
