import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="group bg-white rounded-[40px] border border-gray-50 overflow-hidden hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] transition-all duration-700 transform hover:-translate-y-4">
      <div 
        className="relative aspect-square bg-slate-50 flex items-center justify-center overflow-hidden cursor-pointer p-6"
        onClick={() => onViewDetails && onViewDetails(product)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-[2s] ease-out"
        />
        <div className="absolute top-10 right-10">
          <span className="px-6 py-2 bg-white/90 backdrop-blur-md text-[9px] font-black tracking-[0.3em] rounded-full text-black shadow-xl uppercase border border-white/50">
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
      </div>
      
      <div className="p-12">
        <div className="mb-6">
          <h3 
            className="text-3xl font-black text-[#41137e] leading-none mb-3 cursor-pointer hover:text-[#d90082] transition-colors tracking-tighter"
            onClick={() => onViewDetails && onViewDetails(product)}
          >
            {product.name}
          </h3>
          <p className="text-gray-400 font-medium text-sm">Museum-Grade Experience</p>
        </div>
        
        <p className="text-gray-400 font-medium text-sm line-clamp-2 mb-10 leading-relaxed italic">
          "{product.description}"
        </p>
        
        <div className="flex items-center justify-between pt-8 border-t border-gray-50">
           <div className="flex flex-col">
              <span className="text-[9px] font-black text-gray-300 tracking-[0.4em] uppercase mb-1">Starting From</span>
              <span className="text-3xl font-black text-[#00bff3] tracking-tighter">${(product.price || (product.variants?.[0]?.price || 0)).toFixed(0)}</span>
           </div>
           <button 
            onClick={() => onAddToCart && onAddToCart(product)}
            className="px-8 py-5 bg-[#41137e] text-white rounded-full font-black text-[10px] tracking-widest hover:bg-[#d90082] transition-all active:scale-95 duration-500 shadow-xl"
          >
            ADD TO QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
