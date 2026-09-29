import {useEffect,useRef} from 'react';import {useT} from '../i18n.jsx';
export default function HelpModal({onClose}){const{t}=useT();const r=useRef();
 useEffect(()=>{r.current?.focus();const k=e=>e.key==='Escape'&&onClose();addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[onClose]);
 return(<div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/70" onClick={onClose}>
  <div role="dialog" aria-modal="true" className="glass fade w-full max-w-lg max-h-[85vh] overflow-auto p-5" onClick={e=>e.stopPropagation()}>
   <div className="flex justify-between items-center mb-2"><h2 className="font-extrabold text-xl">{t('helpT')}</h2><button ref={r} className="btn-ghost" onClick={onClose}>{t('close')}</button></div>
   {t('help').map(([q,a])=><details key={q} className="border-t border-white/10 py-1"><summary className="font-semibold">{q}</summary><p className="lbl leading-relaxed pb-3">{a}</p></details>)}
  </div></div>)}
