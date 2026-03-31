const { createClient } = require('@supabase/supabase-js');

// Create a single supabase client for interacting with your database
const supabase = createClient('https://kwymuavqzpvesanxahyv.supabase.co', 'sb_publishable_fCieoDTSmH5m8t26p8e1Pw_-N6AuH9O');

const INITIAL_CATEGORIZED_PRODUCTS = {
  photoBoards: {
    title: "Premium Photo Boards & Panels",
    description: "Museum-grade rigid substrates for high-impact backdrops and displays.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        id: "standard-photo-board",
        name: "Standard Photo Board",
        category: "photoBoards",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
        description: "Museum-grade foam board or Sintra material with scratch-resistant matte finish.",
        themes: ["wedding", "birthday", "corporate", "graduation"],
        variants: [
          { size: "5ft Height", price: 180.00 },
          { size: "6ft Height", price: 220.00 },
          { size: "7ft Height", price: 280.00 },
          { size: "8ft Height", price: 350.00 },
          { size: "7ft x 7ft Square", price: 450.00 },
          { size: "8ft x 8ft Standard", price: 550.00 },
          { size: "8ft x 20ft Giant", price: 1200.00 },
        ]
      },
      {
        id: "backdrop-panel",
        name: "Backdrop Rigid Panel",
        category: "photoBoards",
        image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
        description: "Perfect for vinyl decals or custom painting. Seamless high-density boards.",
        themes: ["safari", "barbie", "birthday"],
        variants: [
          { size: "6ft x 4ft Panel", price: 100.00 },
          { size: "7ft x 4ft Panel", price: 140.00 },
          { size: "8ft x 4ft Panel", price: 180.00 },
        ]
      }
    ]
  },
  props: {
    title: "Foam Board Props & Cut-outs",
    description: "Life-size figures and character props for immersive event themes.",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2069&auto=format&fit=crop",
    items: [
      {
        id: "themed-props",
        name: "Themed Character Props",
        category: "props",
        image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2069&auto=format&fit=crop",
        description: "Custom cut-outs on thick double-walled foam board. High-resolution print with easel backs.",
        themes: ["kids birthday", "barbie", "safari", "superhero"],
        variants: [
          { size: "1ft Prop (Mini)", price: 28.00 },
          { size: "2ft Prop (Small)", price: 38.00 },
          { size: "3ft Prop (Medium)", price: 55.00 },
          { size: "4ft Prop (Growth)", price: 85.00 },
          { size: "5ft Prop (Life-size)", price: 110.00 },
          { size: "6ft Prop (Grand)", price: 135.00 },
        ]
      }
    ]
  },
  floorWraps: {
    title: "Luxury Floor Wraps",
    description: "Turn your event floor into a canvas with high-density non-slip vinyl.",
    image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2072&auto=format&fit=crop",
    items: [
      {
        id: "custom-floor-wrap",
        name: "Custom Vinyl Floor Wrap",
        category: "floorWraps",
        image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2072&auto=format&fit=crop",
        description: "Heavy-duty, removable floor vinyl. Scratch-resistant and safe for high-traffic dance floors.",
        themes: ["wedding", "corporate", "party", "dance"],
        variants: [
          { size: "4ft x 3ft Mat", price: 95.00 },
          { size: "8ft x 8ft Standard", price: 380.00 },
          { size: "12ft x 12ft Large", price: 850.00 },
          { size: "20ft x 20ft Grand", price: 2400.00 },
        ]
      }
    ]
  },
  backdrops: {
    title: "Themed Backdrops (Grid View)",
    description: "Stunning themed backdrops for high-impact photography.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop",
    items: [
      {
        id: "birthday-backdrop-1",
        name: "Birthday Magic Backdrop",
        category: "backdrops",
        image: "https://images.unsplash.com/photo-1530103862676-de88d672eaab?q=80&w=2069&auto=format&fit=crop",
        description: "Premium backdrop perfect for children's birthdays.",
        themes: ["kids birthday", "birthday"],
        variants: [
          { size: "6ft x 6ft", price: 280.00 },
          { size: "8ft x 8ft", price: 450.00 }
        ]
      },
      {
        id: "barbie-backdrop",
        name: "Dreamhouse Backdrop",
        category: "backdrops",
        image: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=2074&auto=format&fit=crop",
        description: "Iconic pink dreamhouse theme for fashion and party events.",
        themes: ["barbie", "kids birthday"],
        variants: [
          { size: "8ft x 8ft", price: 500.00 }
        ]
      },
      {
        id: "safari-backdrop",
        name: "Wild Safari Backdrop",
        category: "backdrops",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop",
        description: "Lush jungle and safari animals for adventurous parties.",
        themes: ["safari", "kids birthday"],
        variants: [
          { size: "7ft x 7ft", price: 400.00 }
        ]
      },
      {
        id: "dinosaur-backdrop",
        name: "Jurassic Dino Backdrop",
        category: "backdrops",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop",
        description: "Prehistoric dinosaur theme for epic parties.",
        themes: ["dinosaurs", "kids birthday"],
        variants: [
          { size: "8ft x 8ft", price: 450.00 }
        ]
      },
      {
        id: "wedding-backdrop",
        name: "Elegant Wedding Arch Backdrop",
        category: "backdrops",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
        description: "Classic white archway perfect for modern weddings.",
        themes: ["wedding", "corporate"],
        variants: [
          { size: "8ft x 10ft", price: 650.00 }
        ]
      }
    ]
  },
  themedKits: {
    title: "Signature Event Packages",
    description: "Curated kits with everything you need for a professional themed setup.",
    image: "https://images.unsplash.com/photo-1511578334221-d302cd91636d?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        id: "essential-kit",
        name: "Essential Event Kit",
        category: "themedKits",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
        description: "The perfect starting point for any small-to-medium event.",
        price: 320.00,
        includes: ["1 Rigid Backdrop Panel", "1 Custom Floor Mat (4x3)", "1 Life-size 2ft Prop"],
        themes: ["birthday", "baby shower", "kids party"]
      },
      {
        id: "deluxe-party-suite",
        name: "Deluxe Party Suite",
        category: "themedKits",
        image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=2069&auto=format&fit=crop",
        description: "Our most popular package for high-impact birthdays and celebrations.",
        price: 550.00,
        includes: ["1 Large Backdrop (8x8)", "2 Character Props (3ft)", "1 Custom Name Decal"],
        themes: ["barbie", "safari", "graduation"]
      },
      {
        id: "grand-production-kit",
        name: "Grand Production Kit",
        category: "themedKits",
        image: "https://images.unsplash.com/photo-1511578334221-d302cd91636d?q=80&w=2070&auto=format&fit=crop",
        description: "A full museum-grade production for elite corporate and social events.",
        price: 850.00,
        includes: ["2 Giant Backdrop Panels", "3 Props of any size", "1 Large Floor Wrap (8x8)"],
        themes: ["corporate", "wedding", "luxury party"]
      }
    ]
  },
  b2bSigns: {
    title: "B2B Trade Show & Corporate Displays",
    description: "Professional signage and marketing materials for corporate and retail.",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1973&auto=format&fit=crop",
    items: [
      {
        id: "trade-show-booth",
        name: "Trade Show Pop Up Display",
        category: "b2bSigns",
        image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1973&auto=format&fit=crop",
        description: "10ft Tension Fabric Display for Trade Shows. Includes LED lights and carry case.",
        variants: [
          { size: "8ft x 8ft Display", price: 650.00 },
          { size: "10ft x 8ft Display", price: 850.00 }
        ]
      },
      {
        id: "step-repeat-8x8",
        name: "Step Repeat Backdrop",
        category: "b2bSigns",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop",
        description: "Telescopic backdrop banner stand. Premium non-glare fabric, perfect for red carpets.",
        variants: [
          { size: "8ft x 8ft Step & Repeat", price: 250.00 },
          { size: "10ft x 8ft Step & Repeat", price: 320.00 }
        ]
      },
      {
        id: "retractable-banner-stand",
        name: "Premium Retractable Banner Stand",
        category: "b2bSigns",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
        description: "High-quality block-out vinyl display with an elegant aluminum base. Easy setup.",
        variants: [
          { size: "33inx81in Standard", price: 135.00 },
          { size: "47inx81in Wide", price: 210.00 }
        ]
      }
    ]
  }
};

async function seed() {
  console.log("Starting seed process to Supabase...");
  
  for (const [key, categoryData] of Object.entries(INITIAL_CATEGORIZED_PRODUCTS)) {
    // Upsert Category
    const { error: catErr } = await supabase.from('categories').upsert({
      id: key,
      title: categoryData.title,
      description: categoryData.description,
      image: categoryData.image
    });

    if (catErr) {
      console.error(`Error inserting category ${key}:`, catErr);
      continue;
    }
    
    console.log(`Successfully seeded category: ${key}`);

    // Upsert Products
    for (const item of categoryData.items) {
      const { error: prodErr } = await supabase.from('products').upsert({
        id: item.id,
        category_id: key,
        name: item.name,
        description: item.description,
        price: item.price || null,
        image: item.image,
        themes: item.themes || [],
        variants: item.variants || [],
        includes: item.includes || []
      });

      if (prodErr) {
        console.error(`Error inserting product ${item.id}:`, prodErr);
      } else {
        console.log(`  Seeded product: ${item.name}`);
      }
    }
  }

  console.log("Seed process finished!");
}

seed();
