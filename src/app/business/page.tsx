"use client";
import React from 'react';
import Link from 'next/link';
import { Briefcase, Sparkles, ChevronRight, Award, MapPin, Building2, Utensils, Scissors, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '@/context/ProductContext';
import BespokeForm from '@/components/BespokeForm';

export default function BusinessPage() {
  const { t, language } = useLanguage();

  const businessSectors = [
    {
      title: language === 'en' ? "Restaurants & Food" : "Restaurantes y Alimentos",
      desc: language === 'en' ? "Menus, storefront window graphics, logo stickers, table covers, and custom food packaging." : "Menús, vinilos para escaparates, stickers con logo, manteles y empaques personalizados.",
      icon: <Utensils className="text-[#cc004e]" size={24} />
    },
    {
      title: language === 'en' ? "Beauty & Wellness" : "Salones de Belleza y Clínicas",
      desc: language === 'en' ? "Wall graphics, service catalogs, window decals, apparel uniforms, and promo flyers." : "Gráficos de pared, menús de servicios, calcomanías para ventanas, uniformes y flyers promocionales.",
      icon: <Scissors className="text-[#d90082]" size={24} />
    },
    {
      title: language === 'en' ? "Schools & Churches" : "Escuelas e Iglesias",
      desc: language === 'en' ? "Banners, event backdrops, programs, lawn signs, directional graphics, and staff t-shirts." : "Banners, backdrops para eventos, programas impresos, señales de patio y camisetas para el staff.",
      icon: <GraduationCap className="text-[#7e22ce]" size={24} />
    },
    {
      title: language === 'en' ? "Event Planners" : "Organizadores de Eventos",
      desc: language === 'en' ? "Special partner pricing, fast turnaround, white-label packaging, and direct venue delivery." : "Precios especiales de partner, entrega rápida en venue, soporte marca blanca y prioridad express.",
      icon: <Sparkles className="text-[#f9a826]" size={24} />
    },
    {
      title: language === 'en' ? "Corporate & Trade Shows" : "Corporativos y Ferias",
      desc: language === 'en' ? "Retractable banners, step-and-repeat walls, custom flags, matching merchandise, and setup." : "Banners retráctiles, muros de prensa, banderas personalizadas, merchandising y montaje técnico.",
      icon: <Building2 className="text-[#00f2fe]" size={24} />
    },
    {
      title: language === 'en' ? "Small Businesses" : "Pequeñas Empresas",
      desc: language === 'en' ? "Logo stickers, premium business cards, brand flyers, storefront signage, and launch packages." : "Stickers con logo, tarjetas de presentación de lujo, flyers de marca y señalética exterior.",
      icon: <Users className="text-[#ffcc00]" size={24} />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0212] text-white pt-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00f2fe]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe]/10 text-[#00f2fe] font-black text-xs tracking-widest uppercase mb-6 border border-[#00f2fe]/20">
            <Briefcase size={14} /> {language === 'en' ? 'B2B Printing Hub' : 'Impresión B2B'}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic leading-none">
            {language === 'en' ? 'Business Printing' : 'Impresión Comercial'}
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl font-light italic leading-relaxed max-w-3xl mx-auto">
            "{language === 'en' 
              ? 'Everything Your Business Needs to Stand Out - custom printing, signs, apparel, packaging, and promotional materials for businesses throughout DFW.' 
              : 'Todo lo que tu Negocio Necesita para Destacar: impresiones personalizadas, letreros, ropa, empaques y material promocional en todo DFW.'}"
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {businessSectors.map((sector, i) => (
            <div key={i} className="group bg-white/5 border border-white/10 rounded-[35px] p-8 hover:bg-white/10 hover:border-[#00f2fe]/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {sector.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3">{sector.title}</h3>
              <p className="text-gray-400 text-sm font-medium italic leading-relaxed">{sector.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Inquiry Form */}
      <div id="inquire" className="bg-[#0A0212] py-20 border-t border-purple-900/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-spiral-float opacity-5 -z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen"></div>
        <BespokeForm />
      </div>

    </div>
  );
}
