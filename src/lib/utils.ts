// Convert brand name to URL slug
export function brandNameToSlug(brandName: string): string {
  return brandName.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and');
}

// Convert slug back to brand name
export function slugToBrandName(slug: string): string {
  const slugToNameMap: { [key: string]: string } = {
    'aman': 'Aman',
    'anantara': 'Anantara',
    'auberge-resorts': 'Auberge Resorts',
    'banyan-tree-hotels': 'Banyan Tree Hotels',
    'andbeyond': '&Beyond',
    'como-hotel-and-resorts': 'COMO Hotel and Resorts',
    'fairmont-hotels': 'Fairmont Hotels',
    'four-seasons': 'Four Seasons',
    'kempinski-hotels': 'Kempinski Hotels',
    'marriott': 'Marriott',
    'mandarin-oriental': 'Mandarin Oriental',
    'oberoi-hotels': 'Oberoi Hotels',
    'raffles-hotels-and-resorts': 'Raffles Hotels & Resorts',
    'relais-and-chateau': 'Relais and Chateau',
    'ritz-carlton': 'Ritz Carlton',
    'rosewood': 'Rosewood',
    'shangri-la-hotels': 'Shangri La Hotels',
    'singita-hotels': 'Singita Hotels',
    'six-senses-hotels': 'Six Senses Hotels',
    'sofitel': 'Sofitel',
    'soneva': 'Soneva',
    'saint-regis-hotels': 'Saint Regis Hotels',
    'taj-hotels': 'Taj Hotels',
    'waldorf-astoria': 'Waldorf Astoria'
  };
  return slugToNameMap[slug] || slug;
} 