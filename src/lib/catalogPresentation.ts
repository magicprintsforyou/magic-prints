// Replace only the original placeholder imagery and height-only board options.
// Custom photos and later edits from the catalog editor retain priority.
const covers: Record<string, string> = {
  'standard-photo-board': '/images/photo-board-9856.jpg',
  'luxury-welcome-sign': '/images/welcome-sign-easel.jpg',
  'backdrop-panel': '/images/backdrop-6x4-size-reference.jpg',
  'custom-floor-wrap': '/images/floor-wrap-wedding.jpg',
};

export function catalogCover(id: string, image?: string): string {
  return covers[id] && (!image || image.includes('images.unsplash.com/'))
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
