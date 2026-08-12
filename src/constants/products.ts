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
        description: "Premium polyester fabric or heavy-duty vinyl media wall with repeating logos. Matte finish prevents photo reflections. Includes free 5-7 day shipping. / Muro de prensa premium de tela poliéster o vinilo resistente con logos repetidos. Acabado mate antirreflejos. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "wedding", "quinceanera", "birthday", "expo"],
        materials: ["Premium Polyester Fabric", "Heavy-Duty 13oz Matte Vinyl"],
        variants: [
          { size: "8ft x 8ft (Banner Only)", price: 264.00 },
          { size: "8ft x 8ft (Banner + Stand)", price: 464.75 },
          { size: "10ft x 8ft (Banner Only)", price: 330.00 },
          { size: "10ft x 8ft (Banner + Stand)", price: 492.25 },
          { size: "10ft x 10ft (Banner Only)", price: 387.50 },
          { size: "10ft x 10ft (Banner + Stand)", price: 550.00 }
        ],
        rush_price: 60.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "non-lit-seg-display",
        name: "Non-Lit SEG Fabric Display",
        category: "Backdrop",
        image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=2069&auto=format&fit=crop",
        description: "Slim profile aluminum frame with silicone edge fabric graphics (SEG). Easy slide-in installation, wrinkle-free tension fabric. Standard 5-7 day shipping included. / Estructura de aluminio de perfil delgado con tela de borde de silicona (SEG). Instalación sin arrugas. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "retail"],
        materials: ["9oz Tension Fabric"],
        variants: [
          { size: "3ft (Non-Lit Slim Frame)", price: 219.80 },
          { size: "10ft (Non-Lit Slim Frame)", price: 659.80 },
          { size: "20ft (Non-Lit Slim Frame)", price: 1295.80 }
        ],
        rush_price: 150.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "slim-backlit-seg",
        name: "Slim Backlit SEG LED Display",
        category: "Backdrop",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
        description: "Ultra-thin aluminum light box with internal LED illumination. Seamless silicone edge fabric graphics (SEG) glow beautifully. Standard 5-7 day shipping included. / Caja de luz de aluminio ultra delgada con iluminación LED interna. Gráficos de tela SEG con brillo espectacular. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "retail"],
        materials: ["LED Backlit Tension Fabric"],
        variants: [
          { size: "10ft (Backlit Slim Frame)", price: 1799.80 }
        ],
        rush_price: 250.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "backlit-seg-popup",
        name: "Backlit SEG LED Popup Display",
        category: "Backdrop",
        image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=2070&auto=format&fit=crop",
        description: "Illuminated popup frame with graphics extending to the edges. Tool-free assembly with quick-connect LED bars. Standard 5-7 day shipping included. / Estructura popup retroiluminada con LEDs de conexión rápida. Gráficos de tela que cubren los bordes. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "retail"],
        materials: ["LED Backlit Tension Fabric"],
        variants: [
          { size: "8ft SEG Backlit Popup", price: 1735.58 },
          { size: "10ft SEG Backlit Popup", price: 2199.78 }
        ],
        rush_price: 300.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "curved-tension-fabric",
        name: "Curved Tension Fabric Display",
        category: "Backdrop",
        image: "/images/products/curved_tension_fabric.png",
        description: "Premium curved aluminum tube frame with a pillowcase stretch fabric graphic. Easy tool-free assembly, travel bag included. Standard 5-7 day shipping included. / Estructura curva premium de tubos de aluminio con gráfico de tela elástica tipo funda. Armado rápido sin herramientas y bolsa de viaje incluida. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "wedding"],
        materials: ["8.8 oz. Tension Fabric"],
        variants: [
          { size: "6ft Curved Display (Frame + Graphic)", price: 482.60 },
          { size: "8ft Curved Display (Frame + Graphic)", price: 627.00 },
          { size: "10ft Curved Display (Frame + Graphic)", price: 652.60 }
        ],
        rush_price: 90.00,
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
    description: "Professional banner displays, retractable stands, custom advertising flags, and premium signage. Standard 5-7 day shipping included.",
    image: "https://images.unsplash.com/photo-1558227038-0051a6d3f284?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        id: "standard-retractable",
        name: "Standard Retractable Banner",
        category: "Essentials",
        image: "/images/products/standard_retractable.png",
        description: "Economic and compact retractable banner stand. Easy assembly, perfect for exhibitions and store entryways. Includes free 5-7 day shipping. / Banner roll-up estándar económico y compacto. Fácil armado, ideal para ferias y entradas comerciales. Envío estándar gratis (5-7 días).",
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
        description: "Upgraded heavy-duty retractable banner hardware with a stylish wide base. Available in single or double-sided print. Includes free 5-7 day shipping. / Banner roll-up de lujo con base de aluminio pesada y elegante. Impresión a una o doble cara. Envío estándar gratis (5-7 días).",
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
        description: "Premium heavy-duty stand with a stretch fabric sleeve. Washable, dye-sublimated double-sided graphics for a seamless look. Includes free 5-7 day shipping. / Estructura premium de alta resistencia con funda de tela elástica. Gráfico lavable de doble cara sin costuras. Envío estándar gratis (5-7 días).",
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
        description: "Ultra lightweight and economical banner stand. Features a flexible tripod mechanism for easy graphic changes. Includes free 5-7 day shipping. / Banner económico con estructura de trípode en X ligera. Sistema flexible para cambiar de gráfico de forma rápida. Envío estándar gratis (5-7 días).",
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
        description: "Mini retractable banner stand, perfect for registration desks, POS checkouts, restaurant menus, and table displays. Includes free 5-7 day shipping. / Mini banner roll-up para mesa, ideal para recepciones, cajas registradoras, menús y mostradores. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "retail", "wedding"],
        materials: ["13oz Matte Vinyl"],
        variants: [
          { size: "11.5 in. x 17.5 in. (Mini)", price: 55.00 }
        ],
        rush_price: 15.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "feather-angled-flag",
        name: "Feather Angled Flag",
        category: "Flags",
        image: "/images/products/feather_angled_flag.png",
        description: "Premium angled feather flag for high visibility indoor and outdoor branding. Includes ground spike or cross base options. Standard 5-7 day shipping included. / Bandera pluma angular premium para publicidad de alto impacto en interiores y exteriores. Incluye estaca para tierra o base en cruz. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "retail"],
        materials: ["Premium Polyester Fabric"],
        variants: [
          { size: "Small 9 ft.", price: 164.00 },
          { size: "Medium 10.5 ft.", price: 164.00 },
          { size: "Large 14 ft. (Popular)", price: 175.00 },
          { size: "X-Large 18 ft.", price: 220.00 }
        ],
        rush_price: 35.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "feather-convex-flag",
        name: "Feather Convex Flag",
        category: "Flags",
        image: "/images/products/feather_convex_flag.png",
        description: "Sleek convex bottom feather flag designed to stand out. Ideal for retail stores and outdoor corporate events. Standard 5-7 day shipping included. / Bandera pluma convexa elegante diseñada para destacar. Ideal para tiendas y eventos corporativos al aire libre. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "retail"],
        materials: ["Premium Polyester Fabric"],
        variants: [
          { size: "Small 9 ft.", price: 164.00 },
          { size: "Medium 10.5 ft.", price: 164.00 },
          { size: "Large 14 ft.", price: 175.00 },
          { size: "X-Large 18 ft.", price: 220.00 }
        ],
        rush_price: 35.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "teardrop-flag",
        name: "Teardrop Advertising Flag",
        category: "Flags",
        image: "/images/products/teardrop_flag.png",
        description: "Distinctive teardrop shape keeps the flag taut even in light wind. High-impact visibility for festivals, markets, and shopfronts. Standard 5-7 day shipping included. / Bandera de gota publicitaria de alta resistencia. Mantiene la tela tensada con el viento. Ideal para festivales y fachadas. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "retail"],
        materials: ["Premium Polyester Fabric"],
        variants: [
          { size: "Small 7 ft.", price: 164.00 },
          { size: "Medium 9 ft.", price: 164.00 },
          { size: "Large 11.2 ft.", price: 175.00 },
          { size: "X-Large 13.5 ft.", price: 220.00 }
        ],
        rush_price: 35.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "rectangle-flag",
        name: "Rectangle Advertising Flag",
        category: "Flags",
        image: "/images/products/rectangle_flag.png",
        description: "Large rectangular fabric flag offering maximum print space for company logos and messaging. Complete with hardware and stand. Standard 5-7 day shipping included. / Bandera rectangular de gran formato para máxima área de impresión de logos corporativos. Incluye estructura y base. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "retail"],
        materials: ["Premium Polyester Fabric"],
        variants: [
          { size: "Small 8.5 ft.", price: 257.00 },
          { size: "Medium 11.8 ft.", price: 286.00 },
          { size: "Large 15 ft.", price: 315.00 }
        ],
        rush_price: 45.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "econo-feather-flag",
        name: "Econo Feather Flag (16ft)",
        category: "Flags",
        image: "/images/products/econo_feather_flag.png",
        description: "Economical outdoor feather flag. Single-sided print that flutters gracefully in the wind. Includes ground spike stand. Standard 5-7 day shipping included. / Bandera pluma económica para exteriores. Impresión a una cara que ondea con el viento. Incluye estaca para tierra. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "retail"],
        materials: ["Premium Polyester Fabric"],
        variants: [
          { size: "One Size 16 ft.", price: 190.00 }
        ],
        rush_price: 30.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      },
      {
        id: "custom-pole-flag",
        name: "Custom Pole Flag",
        category: "Flags",
        image: "/images/products/custom_pole_flag.png",
        description: "Double-sided or single-sided custom flag with grommet strips for standard flagpole installations. Full color high-definition prints. Standard 5-7 day shipping included. / Bandera clásica para mástil con ojales metálicos. Impresión en alta definición a una o doble cara. Envío estándar gratis (5-7 días).",
        themes: ["corporate", "expo", "retail", "wedding"],
        materials: ["Premium Polyester Fabric"],
        variants: [
          { size: "3ft x 2ft", price: 49.50 },
          { size: "5ft x 3ft", price: 124.00 },
          { size: "6ft x 4ft", price: 198.00 }
        ],
        rush_price: 15.00,
        rush_label: "Express 2-Day Shipping",
        rush_desc: "Deliver in 2 business days instead of standard 5-7 days."
      }
    ]
  }
};
