import { Product } from '../types';

export const CATEGORIZED_PRODUCTS = {
  photoBoards: {
    title: "Premium Photo Boards & Panels",
    description: "Museum-grade rigid substrates for high-impact backdrops and displays.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        id: "luxury-welcome-sign",
        name: "Luxury Event Welcome Sign",
        category: "Signage",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000",
        description: "Bespoke acrylic or foam board welcome board with UV print and custom vinyl lettering.",
        themes: ["wedding", "corporate", "quinceanera", "birthday"],
        variants: [
          { size: "24 in. x 36 in.", price: 120.00 },
          { size: "30 in. x 40 in.", price: 160.00 },
          { size: "36 in. x 48 in.", price: 210.00 },
        ]
      },
      {
        id: "standard-photo-board",
        name: "Standard Photo Board",
        category: "Photo",
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
        category: "Photo",
        image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
        description: "Perfect for vinyl decals or custom painting. Seamless high-density boards.",
        themes: ["safari", "barbie", "birthday"],
        variants: [
          { size: "6ft x 4ft Panel", price: 100.00 },
          { size: "7ft x 4ft Panel", price: 140.00 },
          { size: "8ft x 4ft Panel", price: 180.00 },
        ]
      },
      {
        id: "step-repeat-backdrop",
        name: "Step & Repeat Backdrop (Media Wall)",
        category: "Backdrop",
        image: "/images/products/step_repeat_backdrop.png",
        description: "Premium polyester fabric or heavy-duty vinyl media wall with repeating logos. Matte finish prevents photo reflections. Includes free 5-7 day shipping.",
        themes: ["corporate", "wedding", "quinceanera", "birthday", "expo"],
        materials: ["Premium Polyester Fabric", "Heavy-Duty 13oz Matte Vinyl"],
        variants: [
          { size: "8ft x 8ft (Banner Only)", price: 195.00 },
          { size: "8ft x 8ft (Banner + Stand)", price: 295.00 },
          { size: "10ft x 8ft (Banner Only)", price: 245.00 },
          { size: "10ft x 8ft (Banner + Stand)", price: 345.00 },
          { size: "10ft x 10ft (Banner Only)", price: 295.00 },
          { size: "10ft x 10ft (Banner + Stand)", price: 415.00 }
        ],
        rush_price: 60.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      }
    ]
  },
  props: {
    title: "Foam Board Props & Cut-outs",
    description: "Life-size figures and character props for immersive event themes.",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2069&auto=format&fit=crop",
    items: [
      {
        id: "luxury-welcome-sign",
        name: "Luxury Event Welcome Sign",
        category: "Signage",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000",
        description: "Bespoke acrylic or foam board welcome board with UV print and custom vinyl lettering.",
        themes: ["wedding", "corporate", "quinceanera", "birthday"],
        variants: [
          { size: "24 in. x 36 in.", price: 120.00 },
          { size: "30 in. x 40 in.", price: 160.00 },
          { size: "36 in. x 48 in.", price: 210.00 },
        ]
      },
      {
        id: "themed-props",
        name: "Themed Character Props",
        category: "Props",
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
    image: "https://images.unsplash.com/photo-1535124406821-d242453e99d3?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        id: "luxury-welcome-sign",
        name: "Luxury Event Welcome Sign",
        category: "Signage",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000",
        description: "Bespoke acrylic or foam board welcome board with UV print and custom vinyl lettering.",
        themes: ["wedding", "corporate", "quinceanera", "birthday"],
        variants: [
          { size: "24 in. x 36 in.", price: 120.00 },
          { size: "30 in. x 40 in.", price: 160.00 },
          { size: "36 in. x 48 in.", price: 210.00 },
        ]
      },
      {
        id: "custom-floor-wrap",
        name: "Custom Vinyl Floor Wrap",
        category: "Floor",
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
  themedKits: {
    title: "Signature Event Packages",
    description: "Curated kits with everything you need for a professional themed setup.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    items: [
      {
        id: "luxury-welcome-sign",
        name: "Luxury Event Welcome Sign",
        category: "Signage",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000",
        description: "Bespoke acrylic or foam board welcome board with UV print and custom vinyl lettering.",
        themes: ["wedding", "corporate", "quinceanera", "birthday"],
        variants: [
          { size: "24 in. x 36 in.", price: 120.00 },
          { size: "30 in. x 40 in.", price: 160.00 },
          { size: "36 in. x 48 in.", price: 210.00 },
        ]
      },
      {
        id: "essential-kit",
        name: "Essential Event Kit",
        category: "Signature",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
        description: "The perfect starting point for any small-to-medium event.",
        price: 320.00,
        includes: ["1 Rigid Backdrop Panel", "1 Custom Floor Mat (4x3)", "1 Life-size 2ft Prop"],
        themes: ["birthday", "baby shower", "kids party"]
      },
      {
        id: "deluxe-party-suite",
        name: "Deluxe Party Suite",
        category: "Signature",
        image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=2069&auto=format&fit=crop",
        description: "Our most popular package for high-impact birthdays and celebrations.",
        price: 550.00,
        includes: ["1 Large Backdrop (8x8)", "2 Character Props (3ft)", "1 Custom Name Decal"],
        themes: ["barbie", "safari", "graduation"]
      },
      {
        id: "grand-production-kit",
        name: "Grand Production Kit",
        category: "Signature",
        image: "https://images.unsplash.com/photo-1511578334221-d302cd91636d?q=80&w=2070&auto=format&fit=crop",
        description: "A full museum-grade production for elite corporate and social events.",
        price: 850.00,
        includes: ["2 Giant Backdrop Panels", "3 Props of any size", "1 Large Floor Wrap (8x8)"],
        themes: ["corporate", "wedding", "luxury party"]
      }
    ]
  },
  essentials: {
    title: "Event Essentials & Banner Stands",
    description: "Professional banner displays, retractable stands, and premium signage. Standard 5-7 day shipping included.",
    image: "https://images.unsplash.com/photo-1558227038-0051a6d3f284?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        id: "standard-retractable",
        name: "Standard Retractable Banner",
        category: "Essentials",
        image: "/images/products/standard_retractable.png",
        description: "Economic and compact retractable banner stand. Easy assembly, perfect for exhibitions and store entryways. Includes free 5-7 day shipping.",
        themes: ["corporate", "expo", "retail", "wedding"],
        materials: ["13oz Matte Vinyl", "Premium Block-out Fabric"],
        variants: [
          { size: "33 in. x 81 in. (Standard)", price: 137.50 },
          { size: "47 in. x 81 in. (Grand)", price: 280.00 }
        ],
        rush_price: 45.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "deluxe-retractable",
        name: "Deluxe Retractable Banner",
        category: "Essentials",
        image: "/images/products/deluxe_retractable.png",
        description: "Upgraded heavy-duty retractable banner hardware with a stylish wide base. Available in single or double-sided print. Includes free 5-7 day shipping.",
        themes: ["corporate", "expo", "retail"],
        materials: ["13oz Matte Vinyl", "Premium Block-out Fabric"],
        variants: [
          { size: "33 in. x 81 in. (Single Sided)", price: 206.00 },
          { size: "33 in. x 81 in. (Double Sided)", price: 509.00 }
        ],
        rush_price: 55.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "tension-fabric-stand",
        name: "Tension Fabric Banner Stand",
        category: "Essentials",
        image: "/images/products/tension_fabric_stand.png",
        description: "Premium heavy-duty stand with a stretch fabric sleeve. Washable, dye-sublimated double-sided graphics for a seamless look. Includes free 5-7 day shipping.",
        themes: ["corporate", "expo", "retail"],
        materials: ["Stretch Fabric Sleeve"],
        variants: [
          { size: "36 in. x 90 in.", price: 357.50 },
          { size: "48 in. x 90 in.", price: 412.50 }
        ],
        rush_price: 70.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "x-stand-banner",
        name: "X-Frame Banner Stand",
        category: "Essentials",
        image: "/images/products/x_stand.png",
        description: "Ultra lightweight and economical banner stand. Features a flexible tripod mechanism for easy graphic changes. Includes free 5-7 day shipping.",
        themes: ["corporate", "expo", "retail", "birthday"],
        materials: ["13oz Matte Vinyl"],
        variants: [
          { size: "24 in. x 63 in. (Standard)", price: 75.50 },
          { size: "32 in. x 71 in. (Large)", price: 103.00 }
        ],
        rush_price: 25.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "table-top-banner",
        name: "Table-Top Banner Stand (Mini)",
        category: "Essentials",
        image: "/images/products/table_top_banner.png",
        description: "Mini retractable banner stand, perfect for registration desks, POS checkouts, restaurant menus, and table displays. Includes free 5-7 day shipping.",
        themes: ["corporate", "expo", "retail", "wedding"],
        materials: ["13oz Matte Vinyl"],
        variants: [
          { size: "11.5 in. x 17.5 in. (Mini)", price: 55.00 }
        ],
        rush_price: 15.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      }
    ]
  }
};
