"use client";

import { useLanguage } from "../context/ProductContext";

export default function ClientFooter() {
    const { t, language } = useLanguage();
    return (
        <footer className="bg-[#05010A] py-24 text-white rounded-t-[100px] border-t border-white/5 relative z-50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                <div className="space-y-8">
                    <span className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a70] via-[#f9a826] to-[#00f2fe]">
                        Magic Prints
                    </span>
                    <p className="text-gray-500 text-sm italic leading-relaxed">
                        {language === 'es'
                            ? 'Transformando espacios ordinarios en experiencias de grado museo.'
                            : 'Transforming ordinary spaces into museum-grade experiences.'}
                    </p>
                </div>
                <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#ffcc00]">{t.footer.quickLinks}</h4>
                    <ul className="space-y-4 text-sm font-bold text-gray-400">
                        <li><a href="/historia" className="hover:text-white transition-colors">{t.nav.history}</a></li>
                        <li><a href="/" className="hover:text-white transition-colors">{t.nav.home}</a></li>
                        <li><a href="/corporativo" className="hover:text-white transition-colors">{t.nav.corporate}</a></li>
                        <li><a href="/cotizacion" className="hover:text-white transition-colors">{t.nav.quote}</a></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#ffcc00]">{t.footer.contact}</h4>
                    <ul className="space-y-4 text-sm font-bold text-gray-400">
                        <li>✉️ sales@magicprintsforyou.com</li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                                <i className="fa-brands fa-whatsapp text-emerald-400"></i> {t.common.whatsapp}
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-400">📍</span>
                            <a href="#" className="hover:text-white transition-colors">1600 Industrial Ct, <br />Arlington, TX 76011</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#ffcc00]">{t.footer.hours}</h4>
                    <div className="text-sm font-bold text-gray-400 space-y-2">
                        <p>{language === 'es' ? 'Lun - Sáb' : 'Mon - Sat'}: 9:00 AM - 6:00 PM</p>
                        <p className="text-[#d90082]">{language === 'es' ? 'Domingo: Solo Instalaciones Programadas' : 'Sunday: Scheduled Installations Only'}</p>
                    </div>
                    <div className="mt-8 h-10 w-full opacity-0 pointer-events-none">
                        {/* Admin access hidden in logo interaction */}
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-700 font-black text-[10px] uppercase tracking-[0.5em]">{t.footer.rights}</p>
                <p className="text-gray-800 font-black text-[8px] uppercase tracking-widest">{t.footer.designed}</p>
            </div>
        </footer>
    );
}
