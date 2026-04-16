-- ==========================================
-- MAGIC PRINTS - PRODUCTION FIX SCRIPT
-- ==========================================

-- 1. Create all mandatory buckets
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('catalog', 'catalog', true),
  ('designs', 'designs', true),
  ('client-assets', 'client-assets', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 2. Clean and Reset Catalog Policies
DROP POLICY IF EXISTS "Public access to catalog" ON storage.objects;
DROP POLICY IF EXISTS "Admin upload to catalog" ON storage.objects;

CREATE POLICY "Public access to catalog"
ON storage.objects FOR SELECT
TO public
USING ( bucket_id = 'catalog' );

CREATE POLICY "Admin upload to catalog"
ON storage.objects FOR INSERT
TO public -- Temporary open for setup, restrict to authenticated in prod later
WITH CHECK ( bucket_id = 'catalog' );

-- 3. Clean and Reset Client Asset Policies
DROP POLICY IF EXISTS "Public access to assets" ON storage.objects;
DROP POLICY IF EXISTS "Public upload to assets" ON storage.objects;

CREATE POLICY "Public access to assets"
ON storage.objects FOR SELECT
TO public
USING ( bucket_id IN ('client-assets', 'designs') );

CREATE POLICY "Public upload to assets"
ON storage.objects FOR INSERT
TO public
WITH CHECK ( bucket_id IN ('client-assets', 'designs') );

-- 4. Ensure Table Integrity
-- (Safety check for missing columns)
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='products' AND column_name='rush_price') THEN
        ALTER TABLE public.products ADD COLUMN rush_price numeric;
    END IF;
END $$;
