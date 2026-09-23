// Replace only the original placeholder imagery and height-only board options.
// Custom photos and later edits from the catalog editor retain priority.
const legacyCovers: Record<string, string> = {
  "standard-photo-board": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
  "luxury-welcome-sign": "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000",
  "backdrop-panel": "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
  "custom-floor-wrap": "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2072&auto=format&fit=crop",
  "step-repeat-backdrop": "/images/products/step_repeat_backdrop.png",
  "non-lit-seg-display": "/images/products/non_lit_seg_display.jpg",
  "slim-backlit-seg": "/images/products/slim_backlit_seg.jpg",
  "backlit-seg-popup": "/images/products/backlit_seg_popup.jpg",
  "curved-tension-fabric": "/images/products/curved_tension_fabric.jpg",
  "themed-props": "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2069&auto=format&fit=crop",
  "essential-kit": "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
  "deluxe-party-suite": "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=2069&auto=format&fit=crop",
  "grand-production-kit": "https://images.unsplash.com/photo-1511578334221-d302cd91636d?q=80&w=2070&auto=format&fit=crop",
  "standard-retractable": "/images/products/standard_retractable.png",
  "deluxe-retractable": "/images/products/deluxe_retractable.png",
  "tension-fabric-stand": "/images/products/tension_fabric_stand.png",
  "x-stand-banner": "/images/products/x_stand.png",
  "table-top-banner": "/images/products/table_top_banner.png",
  "feather-angled-flag": "/images/products/feather_angled_flag.png",
  "feather-convex-flag": "/images/products/feather_convex_flag.png",
  "teardrop-flag": "/images/products/teardrop_flag.png",
  "rectangle-flag": "/images/products/rectangle_flag.png",
  "econo-feather-flag": "/images/products/econo_feather_flag.png",
  "custom-pole-flag": "/images/products/custom_pole_flag.png"
};

const covers: Record<string, string> = {
  'step-repeat-backdrop': '/images/covers/step-repeat-backdrop.jpg',
  'non-lit-seg-display': '/images/covers/non-lit-seg-display.jpg',
  'slim-backlit-seg': '/images/covers/slim-backlit-seg.jpg',
  'backlit-seg-popup': '/images/covers/backlit-seg-popup.jpg',
  'curved-tension-fabric': '/images/covers/curved-tension-fabric.jpg',
  'themed-props': '/images/covers/themed-props.jpg',
  'essential-kit': '/images/covers/essential-kit.jpg',
  'deluxe-party-suite': '/images/covers/deluxe-party-suite.jpg',
  'grand-production-kit': '/images/covers/grand-production-kit.jpg',
  'standard-retractable': '/images/covers/standard-retractable.jpg',
  'deluxe-retractable': '/images/covers/deluxe-retractable.jpg',
  'tension-fabric-stand': '/images/covers/tension-fabric-stand.jpg',
  'x-stand-banner': '/images/covers/x-stand-banner.jpg',
  'table-top-banner': '/images/covers/table-top-banner.jpg',
  'feather-angled-flag': '/images/covers/feather-angled-flag.jpg',
  'feather-convex-flag': '/images/covers/feather-convex-flag.jpg',
  'teardrop-flag': '/images/covers/teardrop-flag.jpg',
  'rectangle-flag': '/images/covers/rectangle-flag.jpg',
  'econo-feather-flag': '/images/covers/econo-feather-flag.jpg',
  'custom-pole-flag': '/images/covers/custom-pole-flag.jpg',
  'standard-photo-board': '/images/photo-board-9856.jpg',
  'luxury-welcome-sign': '/images/welcome-sign-easel.jpg',
  'backdrop-panel': '/images/backdrop-6x4-size-reference.jpg',
  'custom-floor-wrap': '/images/floor-wrap-wedding.jpg',
};

export function catalogCover(id: string, image?: string): string {
  return covers[id] && (!image || image === legacyCovers[id])
    ? covers[id]
    : image || '';
}

export function boardVariant<T extends { size: string; price: number }>(id: string, variant: T): T {
  if (id !== 'standard-photo-board') return variant;
  const match = /^(5|6|7|8)ft Height$/i.exec(variant.size);
  if (!match) return variant;
  const height = Number(match[1]);
  const prices: Record<number, number> = { 5: 120, 6: 130, 7: 150, 8: 160 };
  return { ...variant, size: `${height} ft H x ${height === 5 ? 3 : 4} ft W`, price: prices[height] };
}

export function isDesignPreview(image?: string): boolean {
  return Boolean(image?.startsWith('/images/covers/') || image === '/images/welcome-sign-easel.jpg');
}

const legacyCategoryCovers: Record<string, string> = {
  photoBoards: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
  floorWraps: 'https://images.unsplash.com/photo-1535124406821-d242453e99d3?q=80&w=2070&auto=format&fit=crop',
  props: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2069&auto=format&fit=crop',
  themedKits: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
  essentials: 'https://images.unsplash.com/photo-1558227038-0051a6d3f284?q=80&w=2070&auto=format&fit=crop',
};

export function isLegacyCategoryCover(id: string, image: string): boolean {
  return image === legacyCategoryCovers[id];
}
