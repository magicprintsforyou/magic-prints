"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { translations, Language } from '../constants/translations';

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
  uploadImage: (file: File) => Promise<string>;
  isContentConfigured: boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [catalog, setCatalog] = useState<CategorizedProducts>({});
  const [siteContent, setSiteContent] = useState<SiteContent>(translations.en);
  const [language, setLanguage] = useState<Language>('es');
  const [isLoading, setIsLoading] = useState(true);
  const [isContentConfigured, setIsContentConfigured] = useState(false);

  const fetchSiteContent = useCallback(async (currentLang: Language) => {
    try {
      const { data, error } = await supabase.from('site_content').select('*');
      
      // If table doesn't exist or error, we stick with local translations
      if (error || !data || data.length === 0) {
        setSiteContent(translations[currentLang] as any);
        setIsContentConfigured(false);
        return;
      }

      setIsContentConfigured(true);

      // Merge DB content into the translation structure
      const baseContent = JSON.parse(JSON.stringify(translations[currentLang]));
      data.forEach((item : any) => {
        const value = currentLang === 'en' ? item.en_value : item.es_value;
        const section = item.section as keyof SiteContent;
        if (baseContent[section] && typeof baseContent[section] === 'object') {
           (baseContent[section] as any)[item.key] = value;
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

      const newCatalog: CategorizedProducts = {};
      catData.forEach((cat: any) => {
        newCatalog[cat.id] = {
          title: cat.title,
          description: cat.description,
          image: cat.image,
          items: []
        };
      });

      prodData.forEach((prod: any) => {
        if (newCatalog[prod.category_id]) {
          newCatalog[prod.category_id].items.push({
            id: prod.id,
            category: prod.category_id,
            name: prod.name,
            description: prod.description,
            price: prod.price ? parseFloat(prod.price) : undefined,
            image: prod.image,
            themes: prod.themes || [],
            variants: prod.variants || [],
            includes: prod.includes || []
          });
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
      const { error } = await supabase
        .from('site_content')
        .upsert({ section, key, en_value: en, es_value: es }, { onConflict: 'key' });

      if (error) throw error;
      await fetchSiteContent(language);
    } catch (err) {
      console.error("Failed to update site content:", err);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('catalog')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('catalog')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (err) {
      console.error("Storage Error:", err);
      throw err;
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
          themes: product.themes || []
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
        .update({
          title: categoryData.title,
          description: categoryData.description,
          image: categoryData.image
        })
        .eq('id', categoryId);

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
