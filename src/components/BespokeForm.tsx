'use client';

import { useState } from 'react';
import { Upload, Sparkles, Calendar, MapPin, Building2, User, Mail, Phone, ArrowRight } from 'lucide-react';

import { useProducts } from '../context/ProductContext';

export default function BespokeForm() {
  const { uploadImage } = useProducts();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadProgress(0);

    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      // 1. Upload files first
      const fileUrls: string[] = [];
      for (let i = 0; i < selectedFiles.length; i++) {
        setUploadProgress(Math.round(((i + 1) / selectedFiles.length) * 100));
        const url = await uploadImage(selectedFiles[i], 'client-assets');
        fileUrls.push(url);
      }

      const data = {
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        eventDate: formData.get('eventDate'),
        location: formData.get('location'),
        needs: formData.getAll('needs'),
        notes: formData.get('notes'),
        fileUrls,
      };

      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send email');
      
      setSuccess(true);
      setSelectedFiles([]);
    } catch (error: any) {
      console.error('Submission error:', error);
      alert(error.message || 'Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  return (
    <section className="py-24 bg-[#0f172a]" id="bespoke-quote">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#cc004e]/10 text-[#cc004e] font-black text-xs tracking-widest uppercase mb-6 border border-[#cc004e]/20">
            <Sparkles size={14} /> Custom & Bulk Orders
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight tracking-tighter text-white">
            Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a70] to-[#f9a826]">Quote.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            ¿Planeando un evento monumental o necesitas impresiones recurrentes para tu agencia? Sube tu inspiración y nuestro equipo VIP te enviará una cotización exacta en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Trust Signals */}
          <div className="lg:sticky lg:top-32 space-y-12">

            <div className="bg-white/5 rounded-3xl p-8 shadow-sm border border-white/10 flex gap-6 items-start hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-shadow">
               <div className="w-16 h-16 rounded-2xl bg-[#ff2a70]/10 flex items-center justify-center shrink-0">
                <Calendar className="text-[#ff2a70]" size={32} />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-white mb-2">Tiempos Express (24-48h)</h3>
                 <p className="text-white/60 font-light leading-relaxed">Sabemos que en la industria de eventos los tiempos son críticos. Contamos con turnos de producción ininterrumpida para no fallarte nunca.</p>
               </div>
            </div>
          </div>

          {/* Right Side: Dynamic Form */}
          <div className="bg-black/40 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden backdrop-blur-md">
            
            {/* Decorative Glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-[#ff2a70]/20 to-[#00f2fe]/20 rounded-full blur-[80px] pointer-events-none"></div>

            {success ? (
              <div className="text-center py-20 relative z-10">
                <div className="w-24 h-24 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
                  <Sparkles size={40} />
                </div>
                <h2 className="text-3xl font-black text-white mb-4">¡Magia en camino!</h2>
                <p className="text-white/70 font-light text-lg mb-8">Hemos recibido tu solicitud. Nuestro equipo VIP elaborará tu cotización bespoke y te contactará en breve.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="text-[#ff2a70] font-bold hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <h2 className="text-2xl font-black text-white mb-2">1. Detalles del Cliente</h2>
                
                {/* Row 1: Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 flex items-center gap-2"><User size={14}/> Nombre Completo</label>
                    <input required name="name" type="text" className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-[#0f172a] transition-all" placeholder="Ej. Yndira P." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 flex items-center gap-2"><Building2 size={14}/> Empresa / Agency</label>
                    <input name="company" type="text" className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-[#0f172a] transition-all" placeholder="Opcional" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 flex items-center gap-2"><Mail size={14}/> Correo Electrónico</label>
                    <input required name="email" type="email" className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-[#0f172a] transition-all" placeholder="hello@empresa.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 flex items-center gap-2"><Phone size={14}/> Teléfono (WhatsApp)</label>
                    <input required name="phone" type="tel" className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-[#0f172a] transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <h2 className="text-2xl font-black text-white mb-2 pt-4 border-t border-white/10">2. Información del Evento</h2>

                {/* Row 2: Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 flex items-center gap-2"><Calendar size={14}/> Fecha del Evento</label>
                    <input required name="eventDate" type="date" className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white/60 focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-[#0f172a] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 flex items-center gap-2"><MapPin size={14}/> Zip Code / Venue</label>
                    <input required name="location" type="text" className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-[#0f172a] transition-all" placeholder="Para envío o pickup" />
                  </div>
                </div>

                <h2 className="text-2xl font-black text-white mb-2 pt-4 border-t border-white/10">3. Requerimientos B2B</h2>

                {/* What do they need? */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/80 block">¿Qué necesitas imprimir? (Selecciona múltiples)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Floor Wrap', 'Backdrop Boards', 'Cylinder Covers', 'Custom Cut-outs', 'Circle Signs', 'Banners', 'Corporate Merch', 'Otro'].map(item => (
                      <label key={item} className="flex items-center gap-2 p-3 border border-white/10 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                        <input type="checkbox" name="needs" value={item} className="w-4 h-4 text-[#ff2a70] border-slate-600 rounded bg-[#0f172a] focus:ring-[#ff2a70]" />
                        <span className="text-sm text-white/80 font-medium">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* File Upload Zone */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <label className="text-sm font-bold text-white/80 block">Adjuntar Archivos / Inspiración</label>
                  <div className="space-y-4">
                  <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:bg-white/5 hover:border-[#ff2a70]/50 transition-all cursor-pointer group bg-black/20 relative">
                    <input 
                      type="file" 
                      multiple 
                      onChange={handleFileChange}
                      accept="image/*,.pdf,.ai" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    />
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff2a70]/20 transition-colors">
                      <Upload size={20} className="text-white/40 group-hover:text-[#ff2a70]" />
                    </div>
                    <p className="text-white font-medium mb-1">
                      {selectedFiles.length > 0 ? `${selectedFiles.length} archivos seleccionados` : 'Haz clic o arrastra tus archivos aquí'}
                    </p>
                    <p className="text-white/40 text-sm font-light">Fotos de inspiración, artes finales (PDF, AI, PNG). Máx 50MB.</p>
                  </div>

                  {selectedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedFiles.map((file, i) => (
                        <div key={i} className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/60 flex items-center gap-2">
                          <span className="truncate max-w-[150px]">{file.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {isSubmitting && uploadProgress > 0 && (
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[#ff2a70] to-[#00f2fe] h-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  )}
                </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 block">Cuéntanos más sobre tu visión mágica...</label>
                  <textarea name="notes" rows={4} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff2a70]/50 focus:bg-[#0f172a] transition-all resize-none italic placeholder:text-white/30" placeholder="Ingresa las medidas exactas si las tienes, requerimientos especiales de instalación, etc..."></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#cc004e] to-[#8f2d56] text-white font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-[0_10px_30px_rgba(204,0,78,0.3)] disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? 'Procesando Magia...' : 'Solicitar Cotización VIP'}
                  {!isSubmitting && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                </button>
                <p className="text-xs text-center text-white/50 font-medium">Tus datos están seguros. Respuesta en menos de 24h laborables.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
