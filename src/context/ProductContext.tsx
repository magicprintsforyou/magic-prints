"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { translations, Language } from '../constants/translations';
import { CATEGORIZED_PRODUCTS } from '../constants/products';

export type ProductVariant = {
  size: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  category: string; // The category key, e.g., 'photoBoards'
  image: string;
  description: string;
  themes?: string[];
  variants?: ProductVariant[];
  materials?: string[];
  rush_price?: number;
  price?: number;
  includes?: string[];
};

export type CategoryData = {
  title: string;
  description: string;
  image?: string;
  items: Product[];
};

export type CategorizedProducts = {
  [key: string]: CategoryData;
};

export type SiteContent = typeof translations.en;

type AppContextType = {
  // Catalog
  catalog: CategorizedProducts;
  addProduct: (categoryId: string, product: Product) => Promise<void>;
  updateProduct: (categoryId: string, product: Product) => Promise<void>;
  deleteProduct: (categoryId: string, productId: string) => Promise<void>;
  addCategory: (categoryId: string, categoryData: CategoryData) => Promise<void>;
  updateCategory: (categoryId: string, categoryData: CategoryData) => Promise<void>;
  deleteCategory: (categoryId: string) => Promise<void>;
  isLoading: boolean;

  // Language & Content
  t: SiteContent;
  language: Language;
  setLanguage: (lang: Language) => void;
  updateContentValue: (section: string, key: string, en: string, es: string) => Promise<void>;
  uploadImage: (file: File, bucket?: string) => Promise<string>;
  isContentConfigured: boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [catalog, setCatalog] = useState<CategorizedProducts>(CATEGORIZED_PRODUCTS as any);
  const [siteContent, setSiteContent] = useState<SiteContent>(translations.en);
  const [language, setLanguage] = useState<Language>('es');
  const [isLoading, setIsLoading] = useState(true);
  const [isContentConfigured, setIsContentConfigured] = useState(false);

  const fetchSiteContent = useCallback(async (currentLang: Language) => {
    try {
      const { data, error } = await supabase.from('site_content').select('*');
      
      // If error (table doesn't exist), we stick with local translations
      if (error) {
        setSiteContent(translations[currentLang] as any);
        setIsContentConfigured(false);
        return;
      }

      setIsContentConfigured(true);

      if (!data || data.length === 0) {
        // Table exists but is empty, keep local but allow editing
        setSiteContent(translations[currentLang] as any);
        return;
      }

      // Merge DB content into the translation structure
      const baseContent = JSON.parse(JSON.stringify(translations[currentLang] || translations.en));
      data.forEach((item: any) => {
        // Defensive: Ensure item has required fields
        if (!item || !item.section || !item.key) return;

        const value = currentLang === 'en' ? item.en_value : item.es_value;
        const section = item.section as keyof SiteContent;

        // Defensive: Check if section exists and is an object, and value is valid
        if (
          baseContent[section] && 
          typeof baseContent[section] === 'object' && 
          baseContent[section] !== null && 
          value !== null && 
          value !== undefined
        ) {
          // Defensive: Check if key exists in local translations
          const sectionRef = baseContent[section] as any;
          if (Object.prototype.hasOwnProperty.call(sectionRef, item.key)) {
            // If the original field is an array (like about.bio), we split the DB string by newlines
            if (Array.isArray(sectionRef[item.key])) {
              sectionRef[item.key] = typeof value === 'string' 
                ? value.split('\n').filter((p: string) => p.trim() !== '')
                : [];
            } else {
              sectionRef[item.key] = value;
            }
          }
        }
      });

      setSiteContent(baseContent);
    } catch (err) {
      console.warn("Site content table not ready, using local translations");
      setSiteContent(translations[currentLang] as any);
    }
  }, []);

  const fetchCatalog = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data: catData, error: catError } = await supabase.from('categories').select('*');
      if (catError) throw catError;

      const { data: prodData, error: prodError } = await supabase.from('products').select('*');
      if (prodError) throw prodError;

      // Always initialize with placeholder catalog to preserve aesthetics, 
      // then let database categories override or append to it
      const newCatalog: CategorizedProducts = JSON.parse(JSON.stringify(CATEGORIZED_PRODUCTS));
      catData.forEach((cat: any) => {
        if (!newCatalog[cat.id]) {
          newCatalog[cat.id] = {
            title: cat.title,
            description: cat.description,
            image: cat.image,
            items: []
          };
        } else {
          // Update properties from DB but preserve default items
          newCatalog[cat.id].title = cat.title || newCatalog[cat.id].title;
          newCatalog[cat.id].description = cat.description || newCatalog[cat.id].description;
          if (cat.image) newCatalog[cat.id].image = cat.image;
        }
      });

      prodData.forEach((prod: any) => {
        if (newCatalog[prod.category_id]) {
          const formattedProd = {
            id: prod.id,
            category: prod.category_id,
            name: prod.name,
            description: prod.description,
            price: prod.price ? parseFloat(prod.price) : undefined,
            image: prod.image,
            themes: prod.themes || [],
            variants: prod.variants || [],
            materials: prod.materials || [],
            rush_price: prod.rush_price ? parseFloat(prod.rush_price) : undefined,
            includes: prod.includes || []
          };
          
          const existingIdx = newCatalog[prod.category_id].items.findIndex(i => i.id === prod.id);
          if (existingIdx >= 0) {
            newCatalog[prod.category_id].items[existingIdx] = formattedProd;
          } else {
            newCatalog[prod.category_id].items.push(formattedProd);
          }
        }
      });

      setCatalog(newCatalog);
    } catch (err) {
      console.error("Failed to fetch catalog from Supabase:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCatalog();
    fetchSiteContent(language);
  }, [fetchCatalog, fetchSiteContent, language]);

  const updateContentValue = async (section: string, key: string, en: string, es: string) => {
    try {
      // Clean up values (if they were arrays converted to strings with newlines)
      // The DB just stores the string, fetchSiteContent handles the split.
      const { error } = await supabase
        .from('site_content')
        .upsert({ section, key, en_value: en, es_value: es }, { onConflict: 'key' });

      if (error) throw error;
      await fetchSiteContent(language);
    } catch (err) {
      console.error("Failed to update site content:", err);
    }
  };

  const uploadImage = async (file: File, bucket: string = 'catalog'): Promise<string> => {
    try {
      console.log(`Starting upload process for: ${file.name} to bucket: ${bucket}`);
      
      let uploadPayload: Blob | File = file;
      let contentType = file.type;

      // Try compression for images but don't let it block the upload if it fails
      if (file.type.startsWith('image/')) {
        try {
          const compressed = await new Promise<Blob | null>((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
              const img = new Image();
              img.src = e.target?.result as string;
              img.onload = () => {
                const canvas = document.createElement('canvas');
                let { width, height } = img;
                const maxDim = 1200;
                if (width > maxDim) { height *= maxDim / width; width = maxDim; }
                if (height > maxDim) { width *= maxDim / height; height = maxDim; }
                canvas.width = width; canvas.height = height;
                const ctx = canvas.getContext('2d');
                if (!ctx) return resolve(null);
                ctx.drawImage(img, 0, 0, width, height);
                canvas.toBlob(b => resolve(b), 'image/webp', 0.8);
              };
              img.onerror = () => resolve(null);
            };
            reader.onerror = () => resolve(null);
          });

          if (compressed) {
            uploadPayload = compressed;
            contentType = 'image/webp';
            console.log("Compression successful:", compressed.size);
          }
        } catch (compressionErr) {
          console.warn("Compression failed, falling back to original file:", compressionErr);
        }
      }

      const fileExt = contentType.split('/').pop() || 'file';
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = bucket === 'catalog' ? `uploads/${fileName}` : `requests/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, uploadPayload, { 
          contentType,
          cacheControl: '3600',
          upsert: false 
        });

      if (uploadError) {
        console.error("Supabase Upload Error:", uploadError);
        // If it's a 404, the bucket likely doesn't exist
        if ((uploadError as any).status === 404 || uploadError.message?.includes('not found')) {
          throw new Error(`Bucket '${bucket}' not found. Please create it in Supabase Storage and set it to Public.`);
        }
        // If it's a 403, it's likely a policy issue
        if ((uploadError as any).status === 403 || uploadError.message?.includes('Permission denied')) {
          throw new Error(`Permission denied. Ensure your '${bucket}' bucket has Public 'Insert' policies enabled.`);
        }
        throw uploadError;
      }

      const { data } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (err: any) {
      console.error("Critical Storage Error:", err);
      // Ensure we throw a friendly error message
      const msg = err?.message || err?.error_description || "Upload failed. Check your connection or Supabase policies.";
      throw new Error(msg);
    }
  };

  const addProduct = async (categoryId: string, product: Product) => {
    try {
      const { error } = await supabase.from('products').insert({
        id: product.id,
        category_id: categoryId,
        name: product.name,
        description: product.description,
        price: product.price || null,
        image: product.image,
        themes: product.themes || [],
        variants: product.variants || [],
        materials: product.materials || [],
        rush_price: product.rush_price || null,
        includes: product.includes || []
      });

      if (error) throw error;
      
      // Automatically refresh the state globally
      await fetchCatalog();
    } catch (err) {
      console.error("Failed to add product to Supabase:", err);
    }
  };

  const updateProduct = async (categoryId: string, product: Product) => {
    try {
      const { error } = await supabase
        .from('products')
        .update({
          name: product.name,
          description: product.description,
          price: product.price || null,
          image: product.image,
          themes: product.themes || [],
          variants: product.variants || [],
          materials: product.materials || [],
          rush_price: product.rush_price || null
        })
        .eq('id', product.id);

      if (error) throw error;
      await fetchCatalog();
    } catch (err) {
      console.error("Failed to update product in Supabase:", err);
    }
  };

  const deleteProduct = async (categoryId: string, productId: string) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);

      if (error) throw error;
      await fetchCatalog();
    } catch (err) {
      console.error("Failed to delete product from Supabase:", err);
    }
  };

  const addCategory = async (categoryId: string, categoryData: CategoryData) => {
    try {
      const { error } = await supabase.from('categories').insert({
        id: categoryId,
        title: categoryData.title,
        description: categoryData.description,
        image: categoryData.image
      });

      if (error) throw error;
      await fetchCatalog();
    } catch (err) {
      console.error("Failed to add category to Supabase:", err);
    }
  };

  const updateCategory = async (categoryId: string, categoryData: CategoryData) => {
    try {
      const { error } = await supabase
        .from('categories')
        .upsert({
          id: categoryId,
          title: categoryData.title,
          description: categoryData.description,
          image: categoryData.image
        });

      if (error) throw error;
      await fetchCatalog();
    } catch (err) {
      console.error("Failed to update category in Supabase:", err);
    }
  };

  const deleteCategory = async (categoryId: string) => {
    // Note: 'products' table has ON DELETE CASCADE on category_id
    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', categoryId);

      if (error) throw error;
      await fetchCatalog();
    } catch (err) {
      console.error("Failed to delete category from Supabase:", err);
    }
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('magic_language', lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('magic_language') as Language;
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  return (
    <AppContext.Provider value={{ 
      catalog, 
      t: siteContent,
      language,
      setLanguage: handleSetLanguage,
      addProduct, 
      updateProduct,
      deleteProduct,
      addCategory, 
      updateCategory,
      deleteCategory,
      updateContentValue,
      uploadImage,
      isLoading,
      isContentConfigured
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

// Compatibility hook for existing components
export const useLanguage = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a ProductProvider');
  }
  return {
    t: context.t,
    language: context.language,
    setLanguage: context.setLanguage
  };
};
