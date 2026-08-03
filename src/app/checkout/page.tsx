"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBag, ChevronRight, User, Mail, Phone, Calendar, MapPin, Truck, Clock, Tag, Sparkles } from 'lucide-react';
import { useLanguage, useProducts } from '@/context/ProductContext';

export default function CheckoutPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const { cart, cartTotal, clearCart } = useProducts();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [shippingAddress, setShippingAddress] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [notes, setNotes] = useState('');

  // Promo Code validation
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountValue, setDiscountValue] = useState(0);

  const applyPromo = () => {
    if (promoCode.trim().length > 2) {
      setPromoApplied(true);
    } else {
      alert(language === 'en' ? 'Please enter a valid code' : 'Por favor introduce un código válido');
    }
  };

  const finalDiscount = useMemo(() => {
    return promoApplied ? (cartTotal * 0.05) : 0;
  }, [promoApplied, cartTotal]);

  const finalTotal = useMemo(() => {
    return cartTotal - finalDiscount;
  }, [cartTotal, finalDiscount]);

  // Redirect to catalog if cart is empty and not in success state
  useEffect(() => {
    if (cart.length === 0 && !success) {
      router.push('/products');
    }
  }, [cart, success, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name,
      email,
      phone,
      eventDate,
      deliveryMethod,
      shippingAddress: (deliveryMethod === 'delivery' || deliveryMethod === 'shipping') ? shippingAddress : 'Store Pickup / Arlington DFW',
      promoCode: promoApplied ? promoCode : 'None',
      notes,
      cart,
      cartTotal,
      discountApplied: finalDiscount,
      finalTotal,
      needs: cart.map(item => item.product.name), // standard compatibility fallback
    };

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to send order');
      
      setSuccess(true);
      clearCart();
    } catch (err: any) {
      alert(language === 'en' 
        ? 'There was an error sending your order. Please try again.' 
        : 'Hubo un error al enviar tu orden. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col min-h-screen bg-[#0A0212] text-white pt-32 pb-24 px-6 justify-center items-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#d90082]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-2xl text-center relative z-10 p-10 bg-white/5 border border-white/10 rounded-[40px] shadow-2xl backdrop-blur-md">
          <div className="w-24 h-24 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-8 text-green-400">
            <Sparkles size={40} className="animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-none text-[#ffcc00]">
            {language === 'en' ? 'Order Submitted!' : '¡Orden Recibida!'}
          </h1>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
            {language === 'en' 
              ? 'Thank you for choosing Magic Prints. We will confirm item availability and send your custom payment link within less than 24 hours via email or WhatsApp.'
              : 'Gracias por elegir Magic Prints. Confirmaremos la disponibilidad de tus productos e instalación, y te enviaremos tu enlace de pago personalizado en menos de 24 horas por correo o WhatsApp.'}
          </p>
          <button 
            onClick={() => router.push('/')}
            className="px-12 py-5 bg-[#d90082] text-white rounded-full font-black text-sm tracking-widest uppercase hover:bg-[#ff2a70] transition-all shadow-lg"
          >
            {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0212] text-white pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#d90082]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Checkout Form */}
        <div className="bg-black/40 rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative overflow-hidden backdrop-blur-md shadow-2xl">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-[#ffcc00] border-b border-white/10 pb-4">
            {language === 'en' ? 'Checkout & Booking' : 'Información del Cliente'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Contact Details */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/80 flex items-center gap-2"><User size={14}/> {language === 'en' ? 'Full Name' : 'Nombre Completo'}</label>
              <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#d90082]/50 focus:bg-[#0f172a] transition-all" placeholder="Ej. Yndira P." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 flex items-center gap-2"><Mail size={14}/> {language === 'en' ? 'Email Address' : 'Correo Electrónico'}</label>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#d90082]/50 focus:bg-[#0f172a] transition-all" placeholder="hello@empresa.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 flex items-center gap-2"><Phone size={14}/> {language === 'en' ? 'WhatsApp / Phone' : 'Teléfono (WhatsApp)'}</label>
                <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#d90082]/50 focus:bg-[#0f172a] transition-all" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 flex items-center gap-2"><Calendar size={14}/> {language === 'en' ? 'Event Date' : 'Fecha del Evento'}</label>
                <input required type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white/60 focus:outline-none focus:ring-2 focus:ring-[#d90082]/50 focus:bg-[#0f172a] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 flex items-center gap-2"><Truck size={14}/> {language === 'en' ? 'Fulfillment Method' : 'Método de Entrega'}</label>
                <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#d90082]/50 focus:bg-[#0f172a] transition-all cursor-pointer">
                  <option value="pickup">{language === 'en' ? 'Store Pickup (Arlington DFW)' : 'Pickup en Tienda (Arlington DFW)'}</option>
                  <option value="delivery">{language === 'en' ? 'Local Delivery (by mileage)' : 'Delivery Local (por millaje)'}</option>
                  <option value="shipping">{language === 'en' ? 'UPS Shipping (Flexible products)' : 'Envío UPS (Productos flexibles)'}</option>
                  <option value="express">{language === 'en' ? 'Fast Print (24-48h setup)' : 'Fast Print Exprés (24-48h)'}</option>
                </select>
              </div>
            </div>

            {/* Conditionally Render Address Input */}
            {(deliveryMethod === 'delivery' || deliveryMethod === 'shipping') && (
              <div className="space-y-2 animate-in slide-in-from-top duration-300">
                <label className="text-sm font-bold text-white/80 flex items-center gap-2"><MapPin size={14}/> {language === 'en' ? 'Delivery or Shipping Address' : 'Dirección Completa de Envío / Entrega'}</label>
                <textarea required value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} rows={3} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#d90082]/50 focus:bg-[#0f172a] transition-all" placeholder="123 Main St, Apt 4B, Arlington, TX 76011" />
              </div>
            )}

            {/* Promo Code Validation */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/80 flex items-center gap-2"><Tag size={14}/> {language === 'en' ? 'Vendor or Planner Code' : 'Código de Vendedor o Planner (Opcional - 5%)'}</label>
              <div className="flex gap-4">
                <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} disabled={promoApplied} className="flex-grow bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#d90082]/50 focus:bg-[#0f172a] transition-all" placeholder="Ej. PLANNER5" />
                <button type="button" onClick={applyPromo} disabled={promoApplied} className="px-6 bg-[#d90082]/10 border border-[#d90082]/20 hover:bg-[#d90082]/20 text-[#d90082] rounded-xl font-black text-xs uppercase tracking-widest transition-all">
                  {promoApplied ? (language === 'en' ? 'Applied!' : '¡Aplicado!') : (language === 'en' ? 'Validate' : 'Validar')}
                </button>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/80 flex items-center gap-2"><Clock size={14}/> {language === 'en' ? 'Special Instructions / Notes' : 'Instrucciones Especiales / Notas'}</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#d90082]/50 focus:bg-[#0f172a] transition-all" placeholder="Opcional - Detalles sobre el acceso al venue o solicitudes específicas." />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gradient-to-r from-[#cc004e] via-[#d90082] to-[#41137e] text-white rounded-full font-black text-sm tracking-widest uppercase hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_40px_rgba(217,0,130,0.3)] mt-8"
            >
              {isSubmitting ? (language === 'en' ? 'Processing...' : 'Procesando...') : (language === 'en' ? 'Confirm Order & Request Link' : 'Confirmar Orden y Solicitar Pago')}
            </button>

          </form>
        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-md shadow-2xl">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-[#ffcc00] border-b border-white/10 pb-4 flex items-center gap-3">
            <ShoppingBag className="text-[#ffcc00]" /> {language === 'en' ? 'Order Summary' : 'Resumen de Orden'}
          </h2>

          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center justify-between border-b border-white/5 pb-6">
                <div className="flex items-center gap-4">
                  <img src={item.product.image} className="w-16 h-16 rounded-2xl object-cover border border-white/5" alt={item.product.name} />
                  <div>
                    <h4 className="font-bold text-white text-base leading-tight">{item.product.name}</h4>
                    <p className="text-xs text-white/40 mt-1 uppercase tracking-wider font-semibold">
                      Size: {item.config?.variant?.size || 'Default'} | Mat: {item.config?.material}
                    </p>
                    {item.config?.isRushOrder && (
                      <span className="inline-block mt-2 text-[8px] bg-red-950 text-red-400 font-bold uppercase px-2 py-0.5 rounded border border-red-800/30">
                        Rush Order (+24-48h)
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-white/40 block mb-1">Qty: {item.quantity}</span>
                  <span className="font-black text-[#00bff3] text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}

            <div className="space-y-3 pt-6 text-sm">
              <div className="flex justify-between items-center text-gray-400">
                <span>{language === 'en' ? 'Subtotal:' : 'Subtotal:'}</span>
                <span className="font-bold text-white">${cartTotal.toFixed(2)}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between items-center text-green-400 font-bold">
                  <span>{language === 'en' ? 'Referred Discount (5%):' : 'Descuento de Referido (5%):'}</span>
                  <span>-${finalDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-6 text-xl font-black uppercase text-[#d90082] border-t border-white/10">
                <span>Total Estimado / Estimated Total:</span>
                <span className="text-2xl">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-4 bg-[#ffcc00]/10 border border-[#ffcc00]/20 rounded-2xl text-xs text-[#ffcc00] leading-relaxed italic mt-8">
              {language === 'en'
                ? "✨ Note: We will verify logistics, event scheduling, and shipping. A secure payment link will follow once verified."
                : "✨ Nota: Verificaremos disponibilidad, logística de envío y fecha del evento. El enlace de pago seguro se enviará una vez verificado."}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
