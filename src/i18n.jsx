import {createContext,useContext,useState,useEffect} from 'react';
import {setLoc} from './utils/age.js';
const D={
fa:{
brand:'ربکس تایم',nav:['خانه','نحوه کار','سوالات متداول','درباره ما'],cta:'تحلیل اکانت',lang:'English',
title:'سفر روبلاکسی‌ات را کشف کن',desc:'نام کاربری روبلاکست را وارد کن و ببین ماجراجویی‌ات از کِی شروع شد.',
ulabel:'نام کاربری روبلاکس',ph:'نام کاربری روبلاکس را وارد کن',go:'تحلیل اکانت',busy:'در حال تحلیل…',analyzing:'در حال تحلیل اکانت روبلاکس...',
steps:['پیدا کردن اکانت','بارگذاری پروفایل','بارگذاری آواتار','محاسبه سن اکانت'],helpbtn:'نام کاربری‌ام را از کجا پیدا کنم؟',
e_invalid:'نام کاربری معتبر وارد کن: ۳ تا ۲۰ حرف انگلیسی، عدد یا زیرخط.',e_notfound:'اکانت روبلاکسی پیدا نشد.',e_rate:'درخواست‌ها زیاد است؛ کمی صبر کن و دوباره تلاش کن.',e_unavailable:'سرویس روبلاکس موقتاً در دسترس نیست. دوباره تلاش کن.',e_timeout:'سرویس روبلاکس موقتاً در دسترس نیست. دوباره تلاش کن.',e_network:'مشکلی پیش آمد. اتصال اینترنتت را بررسی کن و دوباره تلاش کن.',
live:'نفر همین حالا در حال استفاده از ابزار هستند',recent:'اکانت‌هایی که همین الان تحلیل می‌شوند',yrs:'سال',
feat:[['⚡','سریع و رایگان','در چند ثانیه سن اکانت و زمان بازی‌ات را ببین.'],['🔒','بدون ورود و رمز','هیچ‌وقت رمز یا کوکی‌ات را نمی‌خواهیم.'],['📈','نمودار و خط زمان','مسیر روبلاکسی‌ات را به‌صورت تصویری ببین.']],
pcreated:'تاریخ ساخت اکانت',page:'سن اکانت',pid:'شناسه کاربری روبلاکس',view:'مشاهده پروفایل روبلاکس',noav:'آواتار در دسترس نیست',avalt:'آواتار روبلاکس {n}',
y:'سال',m:'ماه',d:'روز',hage:'سن روبلاکسی تو',createdOn:'اکانت روبلاکس تو در {d} ساخته شده است.',
tl:'خط زمان اکانت',tl0:'ساخت اکانت',tlN:'سال {n}',tlT:'امروز',
pt:'زمان بازی تخمینی',q1:'معمولاً روزی چند ساعت بازی می‌کنی؟',q2:'هفته‌ای چند روز بازی می‌کنی؟',pt2:'زمان بازی تخمینی تو',hrs:'ساعت',days:'روز',
rows:['کل ساعت‌ها','کل روزها','کل هفته‌ها','کل ماه‌ها','کل سال‌ها','میانگین ساعت در هفته','ساعت تخمینی در سال'],
ptn:'تخمین بر اساس عادت‌هایی که وارد کردی؛ آمار رسمی روبلاکس نیست.',pctn:'درصد تخمینی از عمر اکانتت که صرف بازی شده است.',
ch:'مسیر روبلاکسی تو',chs:'شروع',cht:'امروز',chn:'ساعت‌های تجمعی تخمینی.',
howT:'نحوه کار',how:[['۰۱','نام کاربری را وارد کن','@نام‌کاربری را از پروفایلت بنویس.'],['۰۲','اکانت را تحلیل کن','پروفایل عمومی روبلاکست را می‌خوانیم.'],['۰۳','سفرت را کشف کن','سن، خط زمان و زمان بازی تخمینی‌ات را ببین.']],
faqT:'سوالات متداول',faq:[['آیا ربکس تایم به روبلاکس وابسته است؟','نه. ربکس تایم یک سرویس مستقل ساخته‌ی طرفداران است و وابسته به شرکت Roblox نیست.'],['آیا باید وارد روبلاکس شوم؟','نه. حساب کاربری یا ورود وجود ندارد و فقط از اطلاعات عمومی استفاده می‌شود.'],['آیا رمز روبلاکس لازم است؟','هرگز. ربکس تایم رمز، کوکی یا هیچ اطلاعات ورودی نمی‌خواهد.'],['سن اکانت چطور محاسبه می‌شود؟','از تاریخ ساخت عمومی اکانت تا امروز، بر حسب سال، ماه و روز.'],['آیا زمان بازی دقیق است؟','نه. بر اساس ساعت و روزهایی که وارد می‌کنی محاسبه می‌شود و فقط یک تخمین است.'],['چرا زمان بازی دقیق نمایش داده نمی‌شود؟','چون روبلاکس API عمومی برای کل زمان بازی ندارد.'],['اطلاعات پروفایل از کجا می‌آید؟','از APIهای عمومی روبلاکس: نام کاربری، نام نمایشی، شناسه، تاریخ ساخت و آواتار.']],
helpT:'راهنمای سریع',close:'بستن',help:[['نام کاربری روبلاکسم را از کجا پیدا کنم؟','پروفایلت را در روبلاکس باز کن. نام نمایشی بزرگ است و @نام‌کاربری کوچک‌تر و با @ نوشته شده. آن را بدون @ وارد کن.'],['تاریخ ساخت اکانت را کجا ببینم؟','در پروفایل روبلاکس، بخش About تاریخ عضویت را نشان می‌دهد. ما همان تاریخ عمومی را می‌خوانیم.'],['سن اکانت چطور محاسبه می‌شود؟','سال، ماه و روز کامل بین تاریخ ساخت و امروز شمرده می‌شود.'],['زمان بازی چطور تخمین زده می‌شود؟','ساعت در روز × روز در هفته × تعداد هفته‌ها از زمان ساخت اکانت.']],
aboutT:'درباره ربکس تایم',about:['ربکس تایم را با عشق برای بازیکن‌های روبلاکس ساخته‌ایم تا بتوانند ببینند از کِی وارد این دنیا شده‌اند و چقدر در آن وقت گذرانده‌اند.','ما فقط از اطلاعات عمومی پروفایل استفاده می‌کنیم و هیچ‌چیز از تو ذخیره نمی‌کنیم.'],
igT:'پیشنهاد یا مشکلی داری؟ در اینستاگرام پیام بده',made:'ساخته‌شده با ♥ توسط روهام',disc:'ربکس تایم یک سرویس مستقل ساخته‌ی طرفداران است و به شرکت Roblox وابسته نیست و از سوی آن تأیید یا حمایت نشده است. زمان بازی فقط یک تخمین است.',tag:'سفر روبلاکسی‌ات را کشف کن.'},
en:{
brand:'ROBX TIME',nav:['Home','How It Works','FAQ','About'],cta:'Analyze Account',lang:'فارسی',
title:'Discover Your Roblox Journey',desc:'Enter your Roblox username and discover when your journey began.',
ulabel:'Roblox username',ph:'Enter Roblox Username',go:'ANALYZE ACCOUNT',busy:'ANALYZING…',analyzing:'Analyzing Roblox account...',
steps:['Finding account','Loading profile','Loading avatar','Calculating account age'],helpbtn:'How do I find my Roblox username?',
e_invalid:'Enter a valid username: 3–20 letters, numbers or underscores.',e_notfound:'Roblox account not found.',e_rate:'Too many requests right now. Please wait a moment and try again.',e_unavailable:'Roblox services are temporarily unavailable. Please try again.',e_timeout:'Roblox services are temporarily unavailable. Please try again.',e_network:'Something went wrong. Please check your connection and try again.',
live:'people are using the tool right now',recent:'Accounts being analyzed right now',yrs:'yrs',
feat:[['⚡','Fast & free','See your account age and playtime in seconds.'],['🔒','No login, no password','We never ask for your password or cookies.'],['📈','Charts & timeline','See your Roblox journey visually.']],
pcreated:'Account created',page:'Account age',pid:'Roblox user ID',view:'View Roblox profile',noav:'Avatar unavailable',avalt:'Roblox avatar of {n}',
y:'Years',m:'Months',d:'Days',hage:'Your Roblox age',createdOn:'Your Roblox account was created on {d}.',
tl:'Account timeline',tl0:'Account created',tlN:'Year {n}',tlT:'Today',
pt:'Estimated playtime',q1:'How many hours do you usually play per day?',q2:'How many days do you usually play per week?',pt2:'Your estimated playtime',hrs:'HOURS',days:'days',
rows:['Total hours','Total days','Total weeks','Total months','Total years','Avg hours / week','Est. hours / year'],
ptn:'Estimated from the habits you entered. Not official Roblox statistics.',pctn:'Estimated share of your account lifetime spent playing.',
ch:'Your Roblox journey',chs:'Start',cht:'Today',chn:'Cumulative estimated hours.',
howT:'How it works',how:[['01','Enter your Roblox username','Type the @username from your profile.'],['02','Analyze your account','We read your public Roblox profile.'],['03','Discover your journey','See your age, timeline and estimated playtime.']],
faqT:'FAQ',faq:[['Is ROBX TIME affiliated with Roblox?','No. It is an independent fan-made service, not affiliated with Roblox Corporation.'],['Do I need to log in to Roblox?','No. There are no accounts or logins; only public info is used.'],['Is my Roblox password required?','Never. We never ask for passwords, cookies or credentials.'],['How is my account age calculated?','From the public creation date to today, in years, months and days.'],['Is estimated playtime exact?','No. It uses the hours and days you enter, so it is only an estimate.'],["Why can't you show exact lifetime playtime?",'Roblox has no public API for total lifetime playtime.'],['Where does the profile info come from?','Roblox public APIs: username, display name, ID, creation date and avatar.']],
helpT:'Quick help',close:'Close',help:[['How do I find my Roblox username?','Open your Roblox profile. Your display name is large and your @username is smaller. Enter it without the @.'],['Where can I see my creation date?','In your Roblox profile About section. We read the same public date.'],['How is account age calculated?','Full years, months and days between the creation date and today.'],['How is playtime estimated?','Hours per day × days per week × weeks since creation.']],
aboutT:'About ROBX TIME',about:['ROBX TIME is made with love for Roblox players who want to see when their journey began and how much time they have spent.','We only use public profile info and store nothing about you.'],
igT:'Have feedback or an issue? Message me on Instagram',made:'Made with ♥ by Roham',disc:'ROBX TIME is an independent fan-made service and is not affiliated with, endorsed by, or sponsored by Roblox Corporation. Playtime figures are estimates.',tag:'Discover your Roblox journey.'}};
const Ctx=createContext();
export function LangProvider({children}){
 const[lang,setLang]=useState(()=>localStorage.getItem('lang')||'fa');
 setLoc(lang);
 useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='fa'?'rtl':'ltr';localStorage.setItem('lang',lang)},[lang]);
 const t=(k,v)=>{const x=D[lang][k];return typeof x==='string'&&v?x.replace(/\{(\w+)\}/g,(_,a)=>v[a]):x};
 return<Ctx.Provider value={{lang,t,toggle:()=>setLang(lang==='fa'?'en':'fa')}}>{children}</Ctx.Provider>}
export const useT=()=>useContext(Ctx);
