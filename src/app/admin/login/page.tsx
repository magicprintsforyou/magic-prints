"use client";
import React, { useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { useRouter } from 'next/navigation';
import { Sparkles, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Magic Bypass for quick CTO access
    if ((email === 'admin' || email === 'admin@magicprints.com') && password === 'magic2026') {
      localStorage.setItem('magic_bypass', 'true');
      router.push('/admin');
      router.refresh();
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/admin');
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d90082]/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00bff3]/10 rounded-full blur-[100px] -z-10" />

      <div className="w-full max-w-md space-y-12 animate-in fade-in zoom-in duration-700">
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.3em] mb-8">
            <ArrowRight className="rotate-180" size={14} /> Back to Site
          </Link>
          <div className="w-20 h-20 bg-gradient-to-tr from-[#d90082] to-[#ff2a70] rounded-[2rem] mx-auto flex items-center justify-center shadow-2xl shadow-[#d90082]/20 mb-8 rotate-3">
            <ShieldCheck className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">
            Admin <span className="text-[#d90082]">Portal</span>
          </h1>
          <p className="text-white/40 font-medium tracking-wide">Enter your magic credentials to continue.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3 px-2">Email Address</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d90082] transition-colors"
                placeholder="admin@magicprints.com"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3 px-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d90082] transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 text-xs font-bold animate-magic-float">
              <AlertCircle size={18} /> {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#d90082] to-[#ff2a70] text-white font-black tracking-widest uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(217,0,130,0.4)] transition-all hover:scale-[1.02] active:scale-95 shadow-xl disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In Now'} <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.2em] pt-12">
          Protected by <span className="text-[#00bff3] font-bold">Supabase Security</span>
        </p>
      </div>
    </div>
  );
}
