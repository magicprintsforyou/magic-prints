"use client";
import React from 'react';
import Link from 'next/link';
import { Calendar, Sparkles, ChevronRight, Gift, PartyPopper, Heart, Award, MapPin, Briefcase, Clock } from 'lucide-react';
import { useLanguage } from '@/context/ProductContext';

export default function EventsPage() {
  const { t, language } = useLanguage();

  const occasions = [
    { title: language === 'en' ? "Children's Birthdays" : "Cumpleaños Infantiles", image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=600", count: "12 products", icon: <Gift className="text-white" size={20} /> },
    { title: language === 'en' ? "Adult Birthdays" : "Cumpleaños de Adultos", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600", count: "8 products", icon: <PartyPopper className="text-white" size={20} /> },
    { title: language === 'en' ? "Baby Showers" : "Baby Showers", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600", count: "10 products", icon: <Heart className="text-white" size={20} /> },
    { title: language === 'en' ? "Weddings" : "Bodas", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600", count: "15 products", icon: <Sparkles className="text-white" size={20} /> },
    { title: language === 'en' ? "Graduations" : "Graduaciones", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600", count: "9 products", icon: <Award className="text-white" size={20} /> },
    { title: language === 'en' ? "Churches" : "Iglesias", image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=600", count: "7 products", icon: <MapPin className="text-white" size={20} /> },
    { title: language === 'en' ? "Corporate & Schools" : "Corporativos y Escuelas", image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=600", count: "14 products", icon: <Briefcase className="text-white" size={20} /> },
    { title: language === 'en' ? "Celebrations of Life" : "Memoriales / Vida", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600", count: "6 products", icon: <Clock className="text-white" size={20} /> }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0212] text-white pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#d90082]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d90082]/10 text-[#d90082] font-black text-xs tracking-widest uppercase mb-6 border border-[#d90082]/20">
            <Sparkles size={14} /> {language === 'en' ? 'Visual Shopping' : 'Compra Visual'}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic leading-none">
            {language === 'en' ? 'Shop by Occasion' : 'Comprar por Ocasión'}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light italic leading-relaxed">
            {language === 'en' 
              ? 'Select your event type below. We will customize backdrops, floor wraps, and decorations matching your exact theme.' 
              : 'Selecciona tu tipo de evento a continuación. Personalizaremos backdrops, floor wraps y decoraciones combinadas con tu temática exacta.'}
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {occasions.map((occ, idx) => (
            <div key={idx} className="group relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl border border-white/5 bg-black/20 hover:-translate-y-2 transition-all duration-500 hover:border-[#d90082]/30">
              <img src={occ.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={occ.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#cc004e] flex items-center justify-center shrink-0">
                    {occ.icon}
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{occ.count}</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-[#ffcc00] transition-colors">{occ.title}</h3>
                
                <Link href="/products" className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#d90082] uppercase group-hover:gap-3 transition-all">
                  {language === 'en' ? 'Browse Theme Collection' : 'Explorar Colección'} <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
