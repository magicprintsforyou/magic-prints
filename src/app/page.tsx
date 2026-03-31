"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { INITIAL_CONFIG } from '@/constants';
import { useProducts } from '@/context/ProductContext';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import Logo from '@/components/Logo';
import BespokeForm from '@/components/BespokeForm';
import { useLanguage } from '@/context/ProductContext';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const { catalog } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showHeroLogo, setShowHeroLogo] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShowHeroLogo(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % INITIAL_CONFIG.hero.backgroundImages.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  const bestSellers = useMemo(() => {
    if (!catalog) return [];
    // Get the first item from a few categories to feature on the homepage
    const items = Object.entries(catalog)
      .filter(([key]) => key !== "b2bSigns")
      .map(([_, cat]) => cat.items && cat.items[0])
      .filter(Boolean);
    return items.slice(0, 3);
  }, [catalog]);

  // Process steps localized and improved
  const processSteps = [
    { num: '01', t: t.process.step1_title, d: t.process.step1_desc, icon: '🛍️' },
    { num: '02', t: t.process.step2_title, d: t.process.step2_desc, icon: '🎨' },
    { num: '03', t: t.process.step3_title, d: t.process.step3_desc, icon: '✨' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] -mt-8">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0A0212] overflow-hidden py-32">
        <div className="absolute inset-0">
          {INITIAL_CONFIG.hero.backgroundImages.map((img, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-40' : 'opacity-0'}`}>
              <img src={img} className="w-full h-full object-cover scale-105" alt={`Hero Slide ${idx}`} />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0212] via-[#0A0212]/30 to-[#0A0212]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
          <div className={`inline-block mb-10 pointer-events-none transition-all duration-1000 ${showHeroLogo ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden mb-0'}`}>
            <div className={showHeroLogo ? 'animate-magic-float' : 'animate-magic-exit'}>
              <Logo className="w-48" customLogo={INITIAL_CONFIG.logo} />
            </div>
          </div>
          <div className={`mb-10 transition-all duration-1000 delay-300 ${!showHeroLogo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 h-0 overflow-hidden'}`}>
            <p className="font-script text-[40px] md:text-[60px] text-[#ffcc00] -rotate-2 drop-shadow-[0_0_15px_rgba(255,204,0,0.6)] leading-none mb-4">{t.hero.welcome}</p>
          </div>
          <h1 className="text-5xl md:text-[100px] font-black text-white mb-8 tracking-tight leading-[0.8] uppercase italic drop-shadow-2xl">
            {t.hero.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cc004e] via-[#d90082] to-[#ffcc00] drop-shadow-[0_2px_10px_rgba(217,0,130,0.3)]">
              {t.hero.title_highlight}
            </span>
          </h1>
          <p className="text-[#a0a0a0] text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light italic leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12">
            <Link href="/corporate" className="px-16 py-7 bg-white text-black rounded-full font-black text-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] text-center">
              {t.hero.cta_secondary}
            </Link>
            <Link href="/quote" className="px-16 py-7 bg-[#d90082] text-white rounded-full font-black text-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(217,0,130,0.4)] text-center">
              {t.hero.cta_primary}
            </Link>
          </div>
        </div>
      </section>

      {/* The Magic Process */}
      <section className="py-32 bg-[#0A0212] px-6 rounded-t-[50px] md:rounded-t-[100px] rounded-b-[100px] relative overflow-hidden shadow-2xl z-20 border-t border-b border-white/5">
        <div className="absolute top-0 right-0 p-20 opacity-5 text-[200px] select-none pointer-events-none">✨</div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase drop-shadow-lg">
              {t.process.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d90082] to-transparent mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="grid md:grid-cols-3 gap-16">
              {processSteps.map((step, idx) => (
                <div key={step.num} className="space-y-6 group relative">
                  <div className="w-20 h-20 bg-white/5 rounded-[30px] flex items-center justify-center text-3xl group-hover:bg-[#d90082] transition-all duration-500 border border-white/10 shadow-xl group-hover:shadow-[0_0_40px_rgba(217,0,130,0.5)] relative z-10 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-[#d90082] font-black text-xs tracking-[0.3em]">{step.num}</span>
                      <div className="h-[1px] flex-grow bg-white/5 md:hidden"></div>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#ffcc00] transition-colors">
                      {step.t}
                    </h3>
                    <p className="text-gray-400 italic leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                      {step.d}
                    </p>
                  </div>
                  {/* Step Number Background Overlay */}
                  <div className="absolute -top-10 -left-6 text-9xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#d90082]/[0.05] transition-colors">
                    {step.num}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-32 bg-[#FDFDFD] px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-black text-[#41137e] tracking-tighter leading-none mb-6">{INITIAL_CONFIG.bestSellers.title}</h2>
            <p className="text-gray-400 font-bold tracking-[0.4em] uppercase text-xs">{INITIAL_CONFIG.bestSellers.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {bestSellers.map(product => (
              <ProductCard
                key={product.id}
                  product={product} 
                  onViewDetails={setSelectedProduct}
                />
            ))}
          </div>
          <div className="mt-24 text-center">
            <Link href="/corporate" className="inline-block px-16 py-7 bg-[#41137e] text-white rounded-full font-black text-xl hover:bg-[#d90082] transition-all shadow-[0_20px_50px_rgba(65,19,126,0.3)] hover:shadow-[0_20px_50px_rgba(217,0,130,0.4)]">{INITIAL_CONFIG.bestSellers.btnText}</Link>
          </div>
        </div>
      </section>

      {/* Materials & Substrates Teaser */}
      <section className="py-32 bg-[#F9F6FF] px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-100 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#d90082] font-black text-xs tracking-[0.3em] uppercase mb-4 block">{t.products.badge}</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#41137e] tracking-tighter mb-8 leading-none uppercase italic">
                {t.products.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d90082] to-[#7e22ce]">{t.products.title_highlight}</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium italic mb-10 leading-relaxed">
                "{t.products.subtitle}"
              </p>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-5xl font-black text-[#41137e] leading-tight uppercase">
                  Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d90082] to-[#7319c7]">Product Catalog</span>
                </h3>
                <p className="text-slate-500 text-lg font-medium">
                  Browse our complete range of premium event productions, from large-format photo boards to luxury floor wraps and curated themed kits.
                </p>
                <Link 
                  href="/products"
                  className="inline-flex items-center gap-4 bg-[#41137e] text-white px-10 py-5 rounded-full font-black text-xs tracking-widest uppercase hover:bg-[#d90082] transition-all duration-300 shadow-xl"
                >
                  Explore the Catalog
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[60px] overflow-hidden shadow-2xl bg-[#41137e] p-2 aspect-[4/5]">
                 <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop" className="w-full h-full object-cover rounded-[55px] opacity-80" alt="Material Lab" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 p-10 bg-white rounded-full shadow-2xl border border-purple-50 animate-soft-float">
                <div className="text-center">
                  <span className="block text-3xl font-black text-[#41137e]">100%</span>
                  <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest">Premium Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-[#41137e] text-center mb-24 tracking-tighter uppercase whitespace-pre-line">
            {t.testimonials.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: t.testimonials.author1, role: t.testimonials.role1, text: t.testimonials.text1 },
              { name: t.testimonials.author2, role: t.testimonials.role2, text: t.testimonials.text2 },
              { name: t.testimonials.author3, role: t.testimonials.role3, text: t.testimonials.text3 }
            ].map((test, i) => (
              <div key={i} className="bg-white p-12 rounded-[50px] shadow-xl border border-slate-50 space-y-6 relative group hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl">
                <div className="flex text-[#ffcc00] text-xl">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-500 italic text-lg leading-relaxed">{test.text}</p>
                <div>
                  <h4 className="font-black text-[#41137e] uppercase text-sm tracking-wide">{test.name}</h4>
                  <p className="text-[#d90082] font-bold text-[10px] uppercase tracking-[0.3em]">{test.role}</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#41137e] rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">✨</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Form Section */}
      <div id="bespoke" className="bg-[#0A0212] rounded-t-[100px] mt-10 p-4 border-t border-purple-900/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-spiral-float opacity-5 -z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen"></div>
        <BespokeForm />
      </div>
    </div>
  );
}
