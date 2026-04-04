"use client";

import React from 'react';
import { INITIAL_CONFIG } from '@/constants';
import { useLanguage } from '../../context/ProductContext';

export default function OurStoryPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">

      {/* About Me Section from V2 */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="rounded-[80px] overflow-hidden shadow-2xl border-8 border-gray-50 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
              <img src={t?.about?.image || ''} className="w-full h-auto" alt="Yndira" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#ffcc00] rounded-full mix-blend-multiply filter blur-[30px] opacity-70 animate-pulse"></div>
          </div>
          <div className="space-y-10">
            <h2 className="text-6xl md:text-7xl font-black text-[#41137e] tracking-tighter">{t?.about?.history || 'Our History'}</h2>
            <p className="text-2xl text-[#d90082] font-black italic">{t?.about?.slogan || 'Bespoke event productions.'}</p>
            <div className="space-y-6 text-xl text-gray-500 leading-relaxed italic">
              {(Array.isArray(t?.about?.bio) ? t.about.bio : []).map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision Section from V2 */}
      <section className="py-32 bg-[#F9F6FF] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-16 rounded-[60px] shadow-xl border border-purple-50 transform hover:-translate-y-2 transition-transform duration-500 group">
              <div className="w-20 h-20 bg-[#d90082] rounded-3xl flex items-center justify-center text-white text-4xl mb-10 group-hover:rotate-12 transition-transform shadow-[0_10px_30px_rgba(217,0,130,0.3)]">
                {t?.about?.mission_icon || '🚀'}
              </div>
              <h3 className="text-4xl font-black text-[#41137e] mb-6 tracking-tighter uppercase">{t?.about?.mission_title || 'Mission'}</h3>
              <p className="text-xl text-gray-500 leading-relaxed italic">"{t?.about?.mission_desc || 'To produce the extraordinary.'}"</p>
            </div>
            <div className="bg-white p-16 rounded-[60px] shadow-xl border border-purple-50 transform hover:-translate-y-2 transition-transform duration-500 group">
              <div className="w-20 h-20 bg-[#00bff3] rounded-3xl flex items-center justify-center text-white text-4xl mb-10 group-hover:rotate-12 transition-transform shadow-[0_10px_30px_rgba(0,191,243,0.3)]">
                {t?.about?.vision_icon || '👁️'}
              </div>
              <h3 className="text-4xl font-black text-[#41137e] mb-6 tracking-tighter uppercase">{t?.about?.vision_title || 'Vision'}</h3>
              <p className="text-xl text-gray-500 leading-relaxed italic">"{t?.about?.vision_desc || 'To be the standard of excellence.'}"</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
