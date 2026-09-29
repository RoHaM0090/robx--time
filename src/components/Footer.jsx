import {useT} from '../i18n.jsx';
export default function Footer(){const{t}=useT();return(<footer className="mt-24 px-4 py-10 text-center border-t border-white/10"><p className="font-extrabold tracking-wider">{t('brand')}</p><p className="lbl">{t('tag')}</p>
<a href="https://instagram.com/lil_rohi" target="_blank" rel="noopener noreferrer" className="ig mt-5" dir="ltr"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>@lil_rohi</a>
<p className="lbl mt-4 !text-xs">{t('made')}</p><p className="lbl mt-3 !text-xs max-w-xl mx-auto">{t('disc')}</p></footer>)}
