import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="group bg-white rounded-[28px] border border-purple-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <button
        type="button"
        aria-label={`View ${product.name}`}
        className="relative w-full aspect-square bg-[#f6f3f8] flex items-center justify-center overflow-hidden cursor-pointer p-3 focus-visible:outline-4 focus-visible:outline-[#d90082] focus-visible:outline-offset-[-4px]"
        onClick={() => onViewDetails && onViewDetails(product)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain rounded-2xl"
        />
        <div className="absolute top-5 left-5">
          <span className="px-3 py-1.5 bg-white/95 text-[10px] font-bold tracking-wide rounded-full text-[#41137e] shadow-sm uppercase border border-purple-100">
            {product.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-12">
           <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
              <span className="text-white font-black text-xl tracking-tighter flex items-center gap-3">
                VIEW DETAILS <span className="text-2xl animate-sparkle">✨</span>
              </span>
           </div>
        </div>
      </button>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 
            className="text-xl font-black text-[#41137e] leading-tight mb-2 cursor-pointer hover:text-[#d90082] transition-colors tracking-tight min-h-[2.5em]"
            onClick={() => onViewDetails && onViewDetails(product)}
          >
            {product.name}
          </h3>
          <p className="text-slate-500 font-semibold text-xs">Custom printed for your event</p>
        </div>
        
        <p className="text-slate-600 font-medium text-sm line-clamp-2 mb-6 leading-relaxed">
          "{product.description}"
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
           <div className="flex flex-col">
              <span className="text-[8px] font-black text-gray-300 tracking-[0.3em] uppercase mb-0.5">Starting From</span>
              <span className="text-2xl font-black text-[#00bff3] tracking-tighter">${(product.price || (product.variants?.[0]?.price || 0)).toFixed(0)}</span>
           </div>
           <button 
            onClick={() => onAddToCart && onAddToCart(product)}
            className="px-5 py-3.5 bg-[#41137e] text-white rounded-full font-black text-[9px] tracking-widest hover:bg-[#d90082] transition-all active:scale-95 duration-500 shadow-lg"
          >
            ADD TO QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
