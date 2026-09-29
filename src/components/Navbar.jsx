import {useState} from 'react';import {useT} from '../i18n.jsx';
const H=['#/','#/how','#/faq','#/about'];
export default function Navbar({route}){const{t,toggle}=useT();const[o,setO]=useState(false);
const L=t('nav').map((n,i)=>[n,H[i],['home','how','faq','about'][i]]);
return(<header className="fixed top-0 inset-x-0 z-40 glass !rounded-none !border-x-0 !border-t-0"><nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between" aria-label="Main">
 <a href="#/" className="font-extrabold tracking-wider text-lg">{t('brand').split(' ')[0]} <span style={{color:'var(--c)'}}>{t('brand').split(' ')[1]}</span></a>
 <div className="hidden md:flex items-center gap-7">{L.map(([n,h,k])=><a key={h} href={h} className={'nav-l '+(route===k?'on':'')}>{n}</a>)}
  <button className="btn-ghost !py-1 !min-h-0 text-sm" onClick={toggle}>{t('lang')}</button><a href="#/" className="btn !py-2 !min-h-0 text-sm">{t('cta')}</a></div>
 <div className="md:hidden flex gap-2"><button className="btn-ghost !py-1" onClick={toggle}>{t('lang')}</button><button className="btn-ghost !py-1" aria-expanded={o} onClick={()=>setO(!o)}>☰</button></div></nav>
 {o&&<div className="md:hidden px-4 pb-4 grid gap-2 fade">{L.map(([n,h])=><a key={h} href={h} onClick={()=>setO(false)} className="btn-ghost text-center">{n}</a>)}</div>}
</header>)}
