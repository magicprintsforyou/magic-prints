'use client';

import { useState } from 'react';
import { Upload, Sparkles, Calendar, MapPin, Building2, User, Mail, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { useLanguage } from '../../context/ProductContext';

export default function QuotePage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left Side: Sales Pitch & Trust Signals */}
        <div className="lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#cc004e]/10 text-[#cc004e] font-black text-xs tracking-widest uppercase mb-6 border border-[#cc004e]/20">
            <Sparkles size={14} /> Bespoke & Volume Productions
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter text-[#0f172a]">
            {t.quote.dream}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a70] to-[#f9a826]">
              {t.quote.print}
            </span>
          </h1>
          <p className="text-slate-600 text-xl font-light leading-relaxed mb-10 max-w-lg">
            {t.quote.desc}
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                <Calendar className="text-[#ff2a70]" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0f172a]">{t.quote.express}</h3>
                <p className="text-slate-500 font-light">{t.quote.expressDesc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Dynamic Form */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-slate-100 relative overflow-hidden">

          {/* Decorative Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-[#ff2a70]/20 to-[#00f2fe]/20 rounded-full blur-[80px] pointer-events-none"></div>

          {success ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                <Sparkles size={40} />
              </div>
              <h2 className="text-3xl font-black text-[#0f172a] mb-4">Magic is on its way!</h2>
              <p className="text-slate-600 font-light text-lg mb-8">We have received your request. Our VIP production team will craft your bespoke quote and contact you shortly.</p>
              <button
                onClick={() => setSuccess(false)}
                className="text-[#ff2a70] font-bold hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <h2 className="text-2xl font-black text-[#0f172a] mb-2">
                Tell us about your Vision
              </h2>

              {/* Row 1: Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <User size={14} /> Full Name
                  </label>
                  <input required type="text" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-white transition-all" placeholder="e.g. Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Building2 size={14} /> Company / Agency
                  </label>
                  <input type="text" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-white transition-all" placeholder="Optional" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Mail size={14} /> Email Address
                  </label>
                  <input required type="email" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-white transition-all" placeholder="hello@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Phone size={14} /> Phone (WhatsApp)
                  </label>
                  <input required type="tel" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-white transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              {/* Row 2: Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Calendar size={14} /> Event Date
                  </label>
                  <input required type="date" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MapPin size={14} /> Zip Code / Event Location
                  </label>
                  <input required type="text" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-white transition-all" placeholder="For shipping or installation" />
                </div>
              </div>

              {/* What do they need? */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <label className="text-sm font-bold text-slate-700 block">
                  What do you need printed? (Select multiples)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Dance Floors', 'Backdrops', 'Cylinder Wraps', 'Pedestals', 'Round Signs', 'Banners', 'Corporate Merch', 'Other'].map(item => (
                    <label key={item} className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                      <input type="checkbox" className="w-4 h-4 text-[#ff2a70] border-slate-300 rounded focus:ring-[#ff2a70]" />
                      <span className="text-sm text-slate-700 font-medium">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* File Upload Zone */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <label className="text-sm font-bold text-slate-700 block">
                  Attach Files / Inspiration
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:bg-slate-50 hover:border-[#ff2a70]/50 transition-all cursor-pointer group bg-white">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff2a70]/10 transition-colors">
                    <Upload size={20} className="text-slate-400 group-hover:text-[#ff2a70]" />
                  </div>
                  <p className="text-[#0f172a] font-medium mb-1">
                    Click or drag files here
                  </p>
                  <p className="text-slate-500 text-sm font-light">
                    Inspiration photos, final art (PDF, AI, PNG). Max 50MB.
                  </p>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block">
                  Additional Details / Measurements
                </label>
                <textarea rows={4} className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-white transition-all resize-none" placeholder="Enter exact measurements if known, special requirements, etc..."></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-[#0f172a] text-white font-black text-lg flex items-center justify-center gap-3 hover:bg-[#ff2a70] transition-all shadow-[0_10px_30px_rgba(15,23,42,0.2)] hover:shadow-[0_10px_30px_rgba(255,42,112,0.3)] disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting
                  ? 'Processing Magic...'
                  : 'Request VIP Quote'}
                {!isSubmitting && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
              <p className="text-xs text-center text-slate-500 font-medium">
                Your data is secure. Response in less than 24 business hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
