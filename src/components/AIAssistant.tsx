"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { useLanguage } from '../context/ProductContext';

const AIAssistant: React.FC = () => {
  const { t } = useLanguage();
  
  // Defensive check to identify the source of "t is not a function"
  if (typeof t === 'function') {
    console.error('AIAssistant: t is incorrectly a function! Path: src/components/AIAssistant.tsx');
  }

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Initialize messages in useEffect to avoid issues with t being undefined/wrong type during first render
  useEffect(() => {
    if (t && typeof t !== 'function') {
      const intro = t?.ai?.sparkle_intro || "Hi! I'm Sparkle ✨. Ready to define the visual language of your next production?";
      setMessages([{ role: 'model', text: intro }]);
    }
  }, [t]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    const history = [...messages];
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, history })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'model', text: data.reply || t?.ai?.error_interrupt || "Connection interrupted." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: t?.ai?.error_sparkle || "Sparkle had a flicker." }]);
    }

    setIsTyping(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-tr from-[#4B208C] to-[#D10074] text-white rounded-[24px] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 z-50 transition-all duration-300 group"
      >
        {isOpen ? (
          <span className="text-2xl font-black">×</span>
        ) : (
          <span className="text-3xl group-hover:rotate-12 transition-transform">✨</span>
        )}
        <span className="absolute -top-2 -left-2 w-5 h-5 bg-cyan-400 rounded-full animate-ping opacity-75"></span>
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 w-[90vw] md:w-[400px] h-[600px] bg-white rounded-[40px] shadow-[0_20px_60px_rgba(48,5,95,0.2)] border border-purple-50 flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="p-8 bg-[#30055F] text-white relative">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl">✨</div>
            <h3 className="font-black text-2xl tracking-tighter">{t?.ai?.assistant_title || 'Sparkle AI'}</h3>
            <p className="text-[10px] font-black tracking-widest text-cyan-300 opacity-80 uppercase">{t?.ai?.assistant_subtitle || 'Consultant Designer'}</p>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50 scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-[28px] text-sm font-medium leading-relaxed ${msg.role === 'user'
                    ? 'bg-[#4B208C] text-white rounded-tr-none'
                    : 'bg-white text-slate-700 border border-slate-100 shadow-sm rounded-tl-none'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-[28px] rounded-tl-none border border-slate-100 shadow-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-purple-200 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-50 flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t?.ai?.placeholder || "How can we assist your vision?"}
              className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-purple-200 outline-none"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-12 h-12 bg-[#D10074] text-white rounded-2xl flex items-center justify-center disabled:opacity-20 hover:scale-105 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
