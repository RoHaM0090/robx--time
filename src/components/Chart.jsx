import {num} from '../utils/age.js';import {useT} from '../i18n.jsx';
export default function Chart({age,perYear}){const{t}=useT();
 const yrs=age.totalDays/365.25;const n=Math.max(1,Math.ceil(yrs));
 const pts=Array.from({length:n+1},(_,i)=>Math.min(i,yrs)*perYear);
 const max=Math.max(1,pts[n]);const W=300,H=150;
 const P=pts.map((y,i)=>`${(i/n*W).toFixed(1)},${(H-y/max*H).toFixed(1)}`);
 return(<div className="glass p-5"><h3 className="font-extrabold mb-2">{t('ch')}</h3>
  <svg dir="ltr" viewBox={`-6 -6 ${W+12} ${H+22}`} className="w-full h-auto" role="img" aria-label={t('chn')}>
   <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#22d3ee" stopOpacity=".45"/><stop offset="1" stopColor="#22d3ee" stopOpacity="0"/></linearGradient></defs>
   <polygon points={`0,${H} ${P.join(' ')} ${W},${H}`} fill="url(#g)"/>
   <polyline points={P.join(' ')} fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinejoin="round"/>
   <text x="0" y={H+14} fill="#8fa3c7" fontSize="10">{t('chs')}</text><text x={W} y={H+14} textAnchor="end" fill="#8fa3c7" fontSize="10">{t('cht')}: {num(max)}</text></svg>
  <p className="lbl mt-1">{t('chn')}</p></div>)}
