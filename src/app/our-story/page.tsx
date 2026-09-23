"use client";

import React from 'react';
import { useLanguage } from '../../context/ProductContext';
import { Eye, Target } from 'lucide-react';

export default function OurStoryPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">

      {/* About Me Section from V2 */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-xl border border-purple-100 bg-purple-50">
              <img src="/images/yndira-portrait.jpg" className="w-full h-auto object-contain" alt="Yndira with her custom event backdrops at Magic Prints For You" width={3024} height={2529} />
            </div>
          </div>
          <div className="space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#41137e] tracking-tight">{t?.about?.history || 'Our History'}</h1>
            <p className="text-2xl text-[#d90082] font-black italic">{t?.about?.slogan || 'Bespoke event productions.'}</p>
            <div className="space-y-6 text-xl text-gray-500 leading-relaxed italic">
              {(Array.isArray(t?.about?.bio) ? t?.about?.bio : []).map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision Section from V2 */}
      <section className="bg-[#F9F6FF] px-5 py-20 sm:px-6 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
            <article className="group relative overflow-hidden rounded-[32px] border border-[#41137e]/10 bg-white p-7 shadow-[0_18px_50px_rgba(65,19,126,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(65,19,126,0.14)] sm:p-10 lg:p-12">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#41137e] to-[#7437b8]" />
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#41137e] text-white shadow-[0_12px_28px_rgba(65,19,126,0.24)] sm:h-16 sm:w-16">
                <Target aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.25} />
              </div>
              <h3 className="mb-4 text-3xl font-black tracking-tight text-[#41137e] sm:text-4xl">
                {t?.about?.mission_title || 'Mission'}
              </h3>
              <p className="text-base font-medium leading-8 text-slate-600 sm:text-lg">
                {t?.about?.mission_desc || 'To produce the extraordinary.'}
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-[32px] border border-[#d90082]/10 bg-white p-7 shadow-[0_18px_50px_rgba(217,0,130,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(217,0,130,0.14)] sm:p-10 lg:p-12">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#d90082] to-[#ff4aac]" />
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d90082] text-white shadow-[0_12px_28px_rgba(217,0,130,0.24)] sm:h-16 sm:w-16">
                <Eye aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.25} />
              </div>
              <h3 className="mb-4 text-3xl font-black tracking-tight text-[#41137e] sm:text-4xl">
                {t?.about?.vision_title || 'Vision'}
              </h3>
              <p className="text-base font-medium leading-8 text-slate-600 sm:text-lg">
                {t?.about?.vision_desc || 'To be the standard of excellence.'}
              </p>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}
