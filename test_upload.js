const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

async function testUpload() {
  const supabaseUrl = 'https://nyaiqwxdmfaiyrtdvoqj.supabase.co';
  const supabaseAnonKey = 'sb_publishable_fCieoDTSmH5m8t26p8e1Pw_-N6AuH9O';
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  console.log("--- FETCHING BUCKETS ---");
  const { data: buckets, error: bErr } = await supabase.storage.listBuckets();
  if (bErr) {
    console.error("Bucket fetch error:", bErr);
  } else {
    console.log("Buckets found:", buckets.map(b => b.name));
  }

  console.log("\n--- TESTING UPLOAD TO client-assets ---");
  // Create dummy file
  fs.writeFileSync('dummy.txt', 'hello world');
  
  const fileBuffer = fs.readFileSync('dummy.txt');
  const { data, error } = await supabase.storage
    .from('client-assets')
    .upload('test/dummy.txt', fileBuffer, { contentType: 'text/plain', upsert: true });

  if (error) {
    console.error("UPLOAD ERROR:", JSON.stringify(error, null, 2));
    console.error("Status:", error.status);
    console.error("Message:", error.message);
  } else {
    console.log("UPLOAD SUCCESS:", data);
  }
}

testUpload();
