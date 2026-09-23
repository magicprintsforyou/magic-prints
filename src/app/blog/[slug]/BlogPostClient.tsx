"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, ExternalLink, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/context/ProductContext';
import { BlogLanguage, BlogPost } from '@/constants/blogPosts';

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const { language } = useLanguage();
  const activeLanguage: BlogLanguage = language === 'es' ? 'es' : 'en';
  const content = post.content[activeLanguage];

  return (
    <main className="min-h-screen bg-white pb-24 pt-24 sm:pt-28">
      <article>
        <header className="bg-gradient-to-b from-[#f5effc] to-white px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#41137e] hover:text-[#d90082]"><ArrowLeft aria-hidden="true" size={17} /> {activeLanguage === 'en' ? 'Back to the blog' : 'Volver al blog'}</Link>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-wider">
              <span className="rounded-full bg-[#d90082] px-3 py-1.5 text-white">{content.tag}</span>
              <span className="flex items-center gap-1.5 text-slate-500"><Clock aria-hidden="true" size={14} />{content.readTime}</span>
              <span className="text-slate-500">{post.author}</span>
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-[#41137e] sm:text-6xl">{content.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{content.description}</p>
            <a href={post.inspirationUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#d90082] hover:text-[#41137e]">
              {activeLanguage === 'en' ? 'View the original inspiration post' : 'Ver la publicación original de inspiración'} <ExternalLink aria-hidden="true" size={15} />
            </a>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <figure className="mb-12 overflow-hidden rounded-[28px] bg-[#f3eff8] shadow-[0_20px_60px_rgba(65,19,126,0.12)] sm:mb-16">
            <img src={post.image} alt={post.imageAlt[activeLanguage]} className="max-h-[720px] w-full object-contain" />
          </figure>
          <div className="mx-auto max-w-3xl text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
            {content.intro.map((paragraph) => <p key={paragraph} className="mb-6">{paragraph}</p>)}
            {content.sections.map((section) => (
              <section key={section.heading} className="my-10">
                <h2 className="mb-4 text-2xl font-black tracking-tight text-[#41137e] sm:text-3xl">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mb-5">{paragraph}</p>)}
                {section.bullets && <ul className="space-y-3 pl-1">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d90082]" /><span>{bullet}</span></li>)}</ul>}
              </section>
            ))}
            <p className="mt-10 border-l-4 border-[#d90082] bg-[#faf6ff] px-6 py-5 font-semibold text-[#41137e]">{content.conclusion}</p>
          </div>

          <aside className="mx-auto mt-16 max-w-4xl rounded-[30px] bg-[#41137e] p-7 text-white sm:p-10">
            <h2 className="text-2xl font-black sm:text-3xl">{activeLanguage === 'en' ? 'Plan your printed piece' : 'Planifica tu pieza impresa'}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">{activeLanguage === 'en' ? 'Explore products and sizes, then add the configuration to your quote cart. After the request arrives by email and the details are confirmed, you receive a Square link for the exact approved amount.' : 'Explora productos y tamaños, y agrega la configuración al carrito de cotización. Después de recibir la solicitud por email y confirmar los detalles, recibirás un enlace de Square por el importe exacto aprobado.'}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d90082] px-6 py-3 text-sm font-black uppercase tracking-wider hover:bg-[#ff2a70]"><ShoppingBag aria-hidden="true" size={17} />{activeLanguage === 'en' ? 'Explore products' : 'Explorar productos'}</Link>
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-black uppercase tracking-wider hover:bg-white/10">{activeLanguage === 'en' ? 'Request a quote' : 'Pedir cotización'}<ArrowRight aria-hidden="true" size={17} /></Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
