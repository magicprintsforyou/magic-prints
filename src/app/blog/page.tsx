"use client";
import React from 'react';
import Link from 'next/link';
import { Sparkles, ChevronRight, Calendar, User, Clock, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '@/context/ProductContext';

export default function BlogPage() {
  const { language } = useLanguage();

  const blogPosts = [
    {
      title: language === 'en' ? "5 Luxury Balloon Decor Trends for 2026" : "5 Tendencias de Decoración de Globos de Lujo para 2026",
      excerpt: language === 'en' ? "From pastel chrome colors to organic double-stuffed arches, explore the next big things in balloon design." : "Desde colores cromo pastel hasta arcos orgánicos de doble capa, explora lo último en diseño con globos.",
      image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=600",
      date: "Aug 03, 2026",
      author: "Yndira P.",
      readTime: "4 min read"
    },
    {
      title: language === 'en' ? "The Complete Corporate Event Printing Checklist" : "La Guía Completa de Impresión para Eventos Corporativos",
      excerpt: language === 'en' ? "A seamless checklist detailing banners, flyers, giant photo boards, and custom table wraps." : "Una lista detallada que incluye banners, flyers, photo boards gigantes y personalización de mesas.",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=600",
      date: "Jul 28, 2026",
      author: "Yndira P.",
      readTime: "6 min read"
    },
    {
      title: language === 'en' ? "Why Dance Floor Wraps Will Elevate Your Wedding" : "Por Qué los Floor Wraps Elevarán por Completo tu Boda",
      excerpt: language === 'en' ? "How custom high-density vinyl wraps transform ordinary ballroom spaces into premium branded moments." : "Cómo los vinilos personalizados de alta densidad transforman salones comunes en espacios premium.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600",
      date: "Jul 20, 2026",
      author: "Yndira P.",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0212] text-white pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#d90082]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d90082]/10 text-[#d90082] font-black text-xs tracking-widest uppercase mb-6 border border-[#d90082]/20">
            <Sparkles size={14} className="animate-pulse" /> {language === 'en' ? 'Trends & Inspiration' : 'Tendencias e Inspiración'}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic leading-none">
            {language === 'en' ? 'Magic Blog' : 'Blog Mágico'}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light italic leading-relaxed">
            {language === 'en' 
              ? 'Stay updated with the latest event production trends, print tips, and designer showcases.' 
              : 'Mantente al día con las últimas tendencias de producción de eventos, consejos de impresión y muestras de diseño.'}
          </p>
          
          {/* AI Banner */}
          <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-2xl max-w-md mx-auto text-xs text-gray-400 italic">
            {language === 'en'
              ? "✨ Our AI Event Planner is preparing automatic weekly trend posts. Stay tuned!"
              : "✨ Nuestra Inteligencia Artificial está preparando artículos de tendencias semanales de forma automática. ¡Muy pronto!"}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="group bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl hover:bg-white/10 hover:border-[#d90082]/20 transition-all duration-500 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt={post.title} />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase text-[#ffcc00]">
                  {language === 'en' ? 'Trend' : 'Tendencia'}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-[#ffcc00] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed italic mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <User size={12} /> {post.author}
                  </span>
                  <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#d90082] uppercase group-hover:gap-3 transition-all">
                    {language === 'en' ? 'Read More' : 'Leer Más'} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
