-- SQL Script to update Magic Prints Database Schema
-- Paste this into your Supabase SQL Editor (https://supabase.com/dashboard/project/kwymuavqzpvesanxahyv/sql/new)

-- 1. Add materials column (Array of text)
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS materials text[] DEFAULT '{"Foamboard", "Coroplast"}';

-- 2. Add rush_price column (Numeric)
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS rush_price numeric DEFAULT 30;

-- 3. Ensure variants column exists (JSONB for legacy support)
-- (It should already exist if you used the previous version)
-- ALTER TABLE products ADD COLUMN IF NOT EXISTS variants jsonb DEFAULT '[]'::jsonb;

-- 4. Update existing products to have default materials and rush price
UPDATE products SET materials = '{"Foamboard", "Coroplast"}' WHERE materials IS NULL;
UPDATE products SET rush_price = 30 WHERE rush_price IS NULL;

-- 5. Verification
SELECT id, name, materials, rush_price FROM products LIMIT 5;
