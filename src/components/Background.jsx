const dots=Array.from({length:12},(_,i)=>({l:(i*83)%100,d:-(i*1.7),s:10+(i%5)*3}));
export default function Background(){return(<div className="bg" aria-hidden="true">
 <div className="grid-bg"/>
 <div className="orb" style={{width:420,height:420,background:'#2563eb',top:'-8%',left:'-10%'}}/>
 <div className="orb" style={{width:340,height:340,background:'#0891b2',bottom:'-5%',right:'-8%',animationDelay:'-6s'}}/>
 {dots.map((p,i)=><span key={i} className="dot" style={{left:p.l+'%',animationDelay:p.d+'s',animationDuration:p.s+'s'}}/>)}
 <div className="cube hidden md:block" style={{top:'22%',right:'8%'}}/><div className="cube hidden md:block" style={{top:'62%',left:'6%',animationDelay:'-3s'}}/>
</div>)}
