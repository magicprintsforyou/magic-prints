"use client";

import React, { useEffect, useRef } from 'react';

interface ShopifyBuyButtonProps {
  productId: string;
  storeDomain?: string;
  storefrontAccessToken?: string;
}

const ShopifyBuyButton: React.FC<ShopifyBuyButtonProps> = ({ 
  productId,
  storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || '',
  storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_TOKEN || ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !storeDomain || !storefrontAccessToken) return;

    const loadShopify = () => {
      // @ts-ignore
      const client = window.ShopifyBuy.buildClient({
        domain: storeDomain,
        storefrontAccessToken,
      });

      // @ts-ignore
      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: productId,
          node: containerRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                button: {
                  "font-family": "Inter, sans-serif",
                  "font-weight": "bold",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "color": "#fff",
                  ":hover": {
                    "background-color": "#a1005b"
                  },
                  "background-color": "#D10074",
                  ":focus": {
                    "background-color": "#a1005b"
                  },
                  "border-radius": "16px",
                }
              },
              contents: {
                img: false,
                title: false,
                price: false
              },
              text: {
                button: 'Add to Cart'
              }
            },
            cart: {
              styles: {
                button: {
                  "font-family": "Inter, sans-serif",
                  "font-weight": "bold",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "color": "#fff",
                  ":hover": {
                    "background-color": "#a1005b"
                  },
                  "background-color": "#D10074",
                  ":focus": {
                    "background-color": "#a1005b"
                  },
                  "border-radius": "16px"
                }
              }
            }
          }
        });
      });
    };

    if (!(window as any).ShopifyBuy) {
      const script = document.createElement('script');
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      script.async = true;
      script.onload = loadShopify;
      document.head.appendChild(script);
    } else {
      loadShopify();
    }
  }, [productId, storeDomain, storefrontAccessToken]);

  if (!storeDomain || !storefrontAccessToken) {
    return <div className="p-4 border border-dashed rounded-lg border-red-300 text-red-500 text-sm">⚠️ Configuración de Shopify Faltante (Requiere Store Domain y Token)</div>;
  }

  return <div ref={containerRef} className="shopify-custom-button w-full" />;
};

export default ShopifyBuyButton;
