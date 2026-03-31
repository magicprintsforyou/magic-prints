"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Logo from './Logo';
import { useLanguage } from '../context/ProductContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Admin secret access: 3 clicks within 2 seconds
  useEffect(() => {
    if (logoClicks === 3) {
      router.push('/admin');
      setLogoClicks(0);
    }
    const timer = setTimeout(() => setLogoClicks(0), 2000);
    return () => clearTimeout(timer);
  }, [logoClicks, router]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      setLogoClicks(prev => prev + 1);
    }
  };

  const isHome = pathname === '/';
  const showBackground = scrolled || !isHome || mobileMenuOpen;

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.history, href: '/our-story' },
    { label: t.nav.products, href: '/products' },
    { label: t.nav.corporate, href: '/corporate' },
    { label: t.nav.quote, href: '/quote' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${showBackground ? 'py-2 glass-effect shadow-xl border-b border-purple-50' : 'py-4 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center gap-4">
          {/* Logo Container */}
          <Link
            href="/"
            className="flex-shrink-0 cursor-pointer group"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleLogoClick(e);
            }}
          >
            <div className={`transition-all duration-500 flex items-center justify-center ${showBackground ? 'w-24 md:w-32 h-10 md:h-12' : 'w-32 md:w-44 h-16 md:h-20'
              }`}>
              <Logo className="scale-[0.6] md:scale-[0.8]" light={!showBackground} />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(nav => (
              <Link
                key={nav.href}
                href={nav.href}
                className={`text-[10px] font-black tracking-[0.2em] transition-all relative py-2 ${pathname === nav.href
                  ? 'text-[#d90082]'
                  : showBackground ? 'text-[#41137e] hover:text-[#d90082]' : 'text-white hover:text-[#ffcc00]'
                  }`}
              >
                {nav.label}
              </Link>
            ))}
          </div>

          {/* Icons, Language Toggle and Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className={`text-[10px] font-black tracking-[0.1em] px-3 py-1.5 rounded-full transition-all border ${
                showBackground 
                  ? 'border-[#41137e] text-[#41137e] hover:bg-[#41137e] hover:text-white' 
                  : 'border-white/50 text-white hover:bg-white hover:text-[#41137e]'
              }`}
            >
              {language === 'en' ? 'EN' : 'ES'}
            </button>

            <button
              className={`hidden md:flex relative w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center transition-all ${showBackground ? 'bg-[#41137e] text-white shadow-lg' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'
                } hover:scale-110`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all ${showBackground ? 'bg-[#41137e] text-white shadow-lg' : 'bg-white/10 text-white border border-white/20'
                }`}
            >
              {mobileMenuOpen ? (
                <span className="text-xl font-bold">×</span>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-purple-50 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map(nav => (
              <Link
                key={nav.href}
                href={nav.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left text-xs font-black tracking-[0.3em] py-4 border-b border-slate-50 ${pathname === nav.href ? 'text-[#d90082]' : 'text-[#41137e]'
                  }`}
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
