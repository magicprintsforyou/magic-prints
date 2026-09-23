"use client";

import Link from 'next/link';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/ProductContext';
import { BLOG_POSTS, BlogLanguage } from '@/constants/blogPosts';

export default function BlogPage() {
  const { language } = useLanguage();
  const activeLanguage: BlogLanguage = language === 'es' ? 'es' : 'en';

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f3ff] via-white to-white px-5 pb-24 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-18">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d90082]/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#d90082] shadow-sm">
            <Sparkles aria-hidden="true" size={14} />
            {activeLanguage === 'en' ? 'Practical event print ideas' : 'Ideas prácticas para impresión de eventos'}
          </span>
          <h1 className="text-4xl font-black tracking-tight text-[#41137e] sm:text-6xl">
            {activeLanguage === 'en' ? 'Ideas made for real spaces' : 'Ideas creadas para espacios reales'}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {activeLanguage === 'en' ? 'Useful guidance for planning photo boards, backdrops and print-ready event details.' : 'Guías útiles para planificar photo boards, backdrops y detalles de evento listos para imprimir.'}
          </p>
        </header>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => {
            const content = post.content[activeLanguage];
            return (
              <article key={post.slug} className="group flex overflow-hidden rounded-[28px] border border-[#41137e]/10 bg-white shadow-[0_18px_50px_rgba(65,19,126,0.08)] transition-transform duration-300 hover:-translate-y-1">
                <Link href={`/blog/${post.slug}`} className="flex w-full flex-col focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d90082]/30" aria-label={`${activeLanguage === 'en' ? 'Read' : 'Leer'}: ${content.title}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f3eff8]">
                    <img src={post.image} alt={post.imageAlt[activeLanguage]} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#d90082] shadow-sm">{content.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="mb-4 flex items-center gap-1.5 text-xs font-bold text-slate-400"><Clock aria-hidden="true" size={14} />{content.readTime}</span>
                    <h2 className="text-2xl font-black leading-tight tracking-tight text-[#41137e]">{content.title}</h2>
                    <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{content.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#d90082]">{activeLanguage === 'en' ? 'Read more' : 'Leer más'} <ArrowRight aria-hidden="true" size={15} /></span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
