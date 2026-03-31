const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:uRRfBbVni40K3Tj7@db.kwymuavqzpvesanxahyv.supabase.co:5432/postgres'
});

async function main() {
  try {
    await client.connect();
    
    // Add variants and includes columns if they don't exist
    await client.query(`
      ALTER TABLE products ADD COLUMN IF NOT EXISTS variants JSONB;
      ALTER TABLE products ADD COLUMN IF NOT EXISTS includes JSONB;
    `);
    
    console.log("Products table successfully updated with variants and includes column!");
  } catch (err) {
    console.error("Failed: ", err);
  } finally {
    await client.end();
  }
}

main();
