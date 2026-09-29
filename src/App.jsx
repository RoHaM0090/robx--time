import {useState,useRef,useEffect,lazy,Suspense} from 'react';
import Background from './components/Background.jsx';import Navbar from './components/Navbar.jsx';import SearchCard from './components/SearchCard.jsx';
import Footer from './components/Footer.jsx';import HelpModal from './components/HelpModal.jsx';
import {Features,How,FAQ,About} from './pages.jsx';import {LangProvider} from './i18n.jsx';
import {fetchAccount} from './services/roblox.js';import {calcAge} from './utils/age.js';
const Profile=lazy(()=>import('./components/Profile.jsx'));const Timeline=lazy(()=>import('./components/Timeline.jsx'));const Playtime=lazy(()=>import('./components/Playtime.jsx'));
const g=()=>location.hash.replace(/^#\/?/,'')||'home';
function Home(){
 const[st,setSt]=useState('idle');const[step,setStep]=useState(0);const[err,setErr]=useState('');const[data,setData]=useState(null);const[help,setHelp]=useState(false);const t=useRef();
 async function run(u){
  setSt('loading');setErr('');setStep(0);
  t.current=setInterval(()=>setStep(s=>Math.min(s+1,3)),500);
  try{const d=await fetchAccount(u);setData(d);setSt('done');setTimeout(()=>document.getElementById('results')?.scrollIntoView({behavior:'smooth'}),150)}
  catch(e){setErr(e.message);setSt('error')}finally{clearInterval(t.current)}
 }
 const age=data&&calcAge(data.created);
 return(<><SearchCard status={st} step={step} error={err} onSubmit={run} onHelp={()=>setHelp(true)}/>
  {st==='done'&&data&&<div id="results" className="pt-6"><Suspense fallback={null}><Profile d={data} age={age}/><Timeline created={data.created} age={age}/><Playtime age={age}/></Suspense></div>}
  <Features/>{help&&<HelpModal onClose={()=>setHelp(false)}/>}</>)}
const R={home:Home,how:How,faq:FAQ,about:About};
export default function App(){
 const[r,setR]=useState(g);
 useEffect(()=>{const f=()=>{setR(g());scrollTo(0,0)};addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);
 const P=R[r]||Home;
 return(<LangProvider><Background/><Navbar route={R[r]?r:'home'}/><main key={r}><P/></main><Footer/></LangProvider>)}
