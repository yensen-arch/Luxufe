import { supabase } from './supabase';

export interface Brand {
  id: number;
  name: string;
  logo?: string;
  brand_image?: string;
  created_at: string;
}

export interface BrandResponse {
  data: Brand[];
  count: number;
  error: any;
}

export const fetchBrands = async (
  page: number = 1,
  pageSize: number = 8,
  searchTerm?: string
): Promise<BrandResponse> => {
  try {
    let query = supabase
      .from('brands')
      .select('id, name, logo, brand_image, created_at', { count: 'exact' });

    // Add search filter if provided
    if (searchTerm) {
      query = query.or(`name.ilike.%${searchTerm}%`);
    }

    // Add pagination
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    
    const { data, error, count } = await query
      .range(from, to)
      .order('name', { ascending: true });

    return {
      data: data || [],
      count: count || 0,
      error
    };
  } catch (error) {
    console.error('Error fetching brands:', error);
    return {
      data: [],
      count: 0,
      error
    };
  }
};

// Fetch hotel counts for brands
export const fetchHotelCounts = async (brandNames: string[]): Promise<Record<string, number>> => {
  try {
    if (brandNames.length === 0) return {};

    // Get all hotels from the database
    const { data, error } = await supabase
      .from('hotels')
      .select('hotel_name');

    if (error) {
      console.error('Error fetching hotel counts:', error);
      return {};
    }

    // Count hotels by brand name
    const hotelCounts: Record<string, number> = {};
    brandNames.forEach(brandName => {
      hotelCounts[brandName] = 0;
    });

    data?.forEach(hotel => {
      // Find which brand this hotel belongs to by checking if hotel name contains brand name
      const brandName = brandNames.find(brand => 
        hotel.hotel_name.toLowerCase().includes(brand.toLowerCase())
      );
      if (brandName) {
        hotelCounts[brandName] = (hotelCounts[brandName] || 0) + 1;
      }
    });

    return hotelCounts;
  } catch (error) {
    console.error('Error fetching hotel counts:', error);
    return {};
  }
};

// Dummy data for cruises and private jets
export const dummyCruiseBrands = [
  {
    id: 1,
    name: 'Silversea Cruises',
    hotel_name: 'Silver Nova',
    brand_image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg',
    suites: 50,
    itineraries: 12,
  },
  {
    id: 2,
    name: 'Regent Seven Seas',
    hotel_name: 'Seven Seas Splendor',
    brand_image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg',
    suites: 45,
    itineraries: 15,
  },
  {
    id: 3,
    name: 'Crystal Cruises',
    hotel_name: 'Crystal Serenity',
    brand_image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg',
    suites: 60,
    itineraries: 18,
  },
  {
    id: 4,
    name: 'Seabourn',
    hotel_name: 'Seabourn Ovation',
    brand_image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg',
    suites: 40,
    itineraries: 10,
  },
];

export const dummyPrivateJetBrands = [
  {
    id: 1,
    name: 'NetJets',
    hotel_name: 'Citation X',
    brand_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg',
    aircraft: 25,
    destinations: 200,
  },
  {
    id: 2,
    name: 'Wheels Up',
    hotel_name: 'King Air 350i',
    brand_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg',
    aircraft: 30,
    destinations: 150,
  },
  {
    id: 3,
    name: 'VistaJet',
    hotel_name: 'Global 7500',
    brand_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg',
    aircraft: 20,
    destinations: 180,
  },
  {
    id: 4,
    name: 'Flexjet',
    hotel_name: 'Gulfstream G650',
    brand_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg',
    aircraft: 35,
    destinations: 220,
  },
];

