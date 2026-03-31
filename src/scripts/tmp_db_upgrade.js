const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres.kwymuavqzpvesanxahyv:uRRfBbVni40K3Tj7@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
});

async function main() {
  try {
    console.log("Connecting to Supabase...");
    await client.connect();

    console.log("Creating site_content table...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS site_content (
        id BIGSERIAL PRIMARY KEY,
        section TEXT NOT NULL,
        key TEXT NOT NULL UNIQUE,
        en_value TEXT NOT NULL,
        es_value TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
      );

      ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

      DROP POLICY IF EXISTS "Allow public read on site_content" ON site_content;
      DROP POLICY IF EXISTS "Allow public insert on site_content" ON site_content;
      DROP POLICY IF EXISTS "Allow public update on site_content" ON site_content;
      DROP POLICY IF EXISTS "Allow public delete on site_content" ON site_content;

      CREATE POLICY "Allow public read on site_content" ON site_content FOR SELECT USING (true);
      CREATE POLICY "Allow public insert on site_content" ON site_content FOR INSERT WITH CHECK (true);
      CREATE POLICY "Allow public update on site_content" ON site_content FOR UPDATE USING (true);
      CREATE POLICY "Allow public delete on site_content" ON site_content FOR DELETE USING (true);
    `);
    
    console.log("Site content table successfully created and policies configured.");

  } catch (err) {
    console.error("Database upgrade failed: ", err);
  } finally {
    await client.end();
  }
}

main();
