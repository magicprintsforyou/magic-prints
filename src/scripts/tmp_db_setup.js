const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:uRRfBbVni40K3Tj7@db.kwymuavqzpvesanxahyv.supabase.co:5432/postgres'
});

async function main() {
  try {
    console.log("Connecting to Supabase PostgreSQL database...");
    await client.connect();

    console.log("Executing Schema Creation...");
    
    // Create categories table
    await client.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
      );
    `);
    console.log("Categories table ensured.");

    // Create products table
    await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        category_id TEXT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC,
        image TEXT NOT NULL,
        themes TEXT[],
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
      );
    `);
    console.log("Products table ensured.");

    // Row Level Security
    console.log("Enabling Public RLS Policies for MVP...");
    
    // We ignore errors on policies incase they already exist
    try {
      await client.query(`
        ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
        ALTER TABLE products ENABLE ROW LEVEL SECURITY;
        
        DROP POLICY IF EXISTS "Allow public read on categories" ON categories;
        DROP POLICY IF EXISTS "Allow public insert on categories" ON categories;
        DROP POLICY IF EXISTS "Allow public update on categories" ON categories;
        DROP POLICY IF EXISTS "Allow public delete on categories" ON categories;

        DROP POLICY IF EXISTS "Allow public read on products" ON products;
        DROP POLICY IF EXISTS "Allow public insert on products" ON products;
        DROP POLICY IF EXISTS "Allow public update on products" ON products;
        DROP POLICY IF EXISTS "Allow public delete on products" ON products;

        CREATE POLICY "Allow public read on categories" ON categories FOR SELECT USING (true);
        CREATE POLICY "Allow public insert on categories" ON categories FOR INSERT WITH CHECK (true);
        CREATE POLICY "Allow public update on categories" ON categories FOR UPDATE USING (true);
        CREATE POLICY "Allow public delete on categories" ON categories FOR DELETE USING (true);

        CREATE POLICY "Allow public read on products" ON products FOR SELECT USING (true);
        CREATE POLICY "Allow public insert on products" ON products FOR INSERT WITH CHECK (true);
        CREATE POLICY "Allow public update on products" ON products FOR UPDATE USING (true);
        CREATE POLICY "Allow public delete on products" ON products FOR DELETE USING (true);
      `);
    } catch (err) {
      console.log("RLS setup warning (it might already exist): ", err.message);
    }
    
    console.log("Database successfully configured for Magic Prints!");

  } catch (err) {
    console.error("Database setup failed: ", err);
  } finally {
    await client.end();
  }
}

main();
