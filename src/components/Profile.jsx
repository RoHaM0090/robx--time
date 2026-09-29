import useCountUp from '../hooks/useCountUp.js';import {fmtDate,num} from '../utils/age.js';import {useT} from '../i18n.jsx';
function Stat({to,label}){const v=useCountUp(to);return<div className="glass p-4 text-center lift"><div className="big text-4xl sm:text-6xl">{num(Math.round(v))}</div><div className="lbl mt-2">{label}</div></div>}
export default function Profile({d,age}){const{t}=useT();
 return(<section className="px-4 max-w-4xl mx-auto fade" aria-label="Profile">
  <div className="glass p-5 sm:p-8 grid sm:grid-cols-[220px_1fr] gap-6 items-center">
   <div className="float mx-auto rounded-3xl p-2 glass" style={{boxShadow:'0 0 60px -10px rgba(34,211,238,.45)'}}>
    {d.avatar?<img src={d.avatar} alt={t('avalt',{n:d.name})} width="196" height="196" loading="lazy" className="rounded-2xl w-44 h-44 sm:w-52 sm:h-52 object-cover"/>:<div className="w-44 h-44 grid place-items-center lbl">{t('noav')}</div>}</div>
   <div className="text-center sm:text-start">
    <h2 className="text-3xl sm:text-4xl font-extrabold break-words">{d.displayName}</h2><p className="text-cyan-300" dir="ltr">@{d.name}</p>
    <dl className="grid grid-cols-2 gap-4 mt-5 text-start"><div><dt className="lbl">{t('pcreated')}</dt><dd className="font-semibold">{fmtDate(d.created)}</dd></div>
     <div><dt className="lbl">{t('page')}</dt><dd className="font-semibold">{num(age.years)} {t('y')}، {num(age.months)} {t('m')}</dd></div>
     <div><dt className="lbl">{t('pid')}</dt><dd className="font-semibold">{d.id}</dd></div></dl>
    <a className="btn-ghost inline-block mt-5" href={`https://www.roblox.com/users/${d.id}/profile`} target="_blank" rel="noopener noreferrer">{t('view')}</a></div></div>
  <h2 className="text-2xl font-extrabold mt-12 mb-4 text-center">{t('hage')}</h2>
  <div className="grid grid-cols-3 gap-3"><Stat to={age.years} label={t('y')}/><Stat to={age.months} label={t('m')}/><Stat to={age.days} label={t('d')}/></div>
  <p className="lbl text-center mt-4">{t('createdOn',{d:fmtDate(d.created)})}</p>
 </section>)}
