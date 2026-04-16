-- 1. Crear el bucket 'designs' y hacerlo público
INSERT INTO storage.buckets (id, name, public)
VALUES ('designs', 'designs', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Permitir que cualquier persona pueda VER los archivos (necesario para el correo)
CREATE POLICY "Permitir lectura publica"
ON storage.objects FOR SELECT
TO public
USING ( bucket_id = 'designs' );

-- 3. Permitir que cualquier persona pueda SUBIR archivos (necesario para el formulario)
CREATE POLICY "Permitir subida publica"
ON storage.objects FOR INSERT
TO public
WITH CHECK ( bucket_id = 'designs' );
