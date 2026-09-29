import {useState,useEffect} from 'react';import {useT} from '../i18n.jsx';import {num} from '../utils/age.js';
// NOTE: decorative numbers/accounts only. Names are fictional, the live counter is simulated.
export function Live(){const{t}=useT();const[n,setN]=useState(()=>100000+Math.floor(Math.random()*7000));
 useEffect(()=>{const i=setInterval(()=>setN(v=>Math.max(98000,v+Math.floor(Math.random()*100)-42)),2200);return()=>clearInterval(i)},[]);
 return<div className="live glass" role="status"><span className="pulse"/><b className="big !text-2xl">{num(n)}</b><span className="lbl !text-sm">{t('live')}</span></div>}
const P=['xX_Blox_Xx','NoobMaster69','ItzLunaPlays','Dragon_Slayer','PixelKnight','ProGamer_2016','StarBuilder','CoolCat_Rblx','TurboFox','MegaBuilder7','Shadow_Ninja','RainbowSky','OofKing','AdoptMeFan'];
const Card=({n,i})=>{const h=(i*47)%360;return<div className="pcard" style={{'--h':h}}><div className="av"><i/><b/></div><div><div className="font-semibold text-sm">@{n}</div><div className="lbl !text-xs">{2+(i*3)%14} yrs</div></div></div>};
export function Marquee(){const{t}=useT();const row=(a,r)=><div className={'track '+(r?'rev':'')}>{[...a,...a].map((n,i)=><Card key={i} n={n} i={P.indexOf(n)}/>)}</div>;
 return<section className="mt-14" aria-label={t('recent')}><p className="lbl text-center mb-4">{t('recent')}</p><div className="marquee" dir="ltr">{row(P.slice(0,7),0)}{row(P.slice(7),1)}</div></section>}
