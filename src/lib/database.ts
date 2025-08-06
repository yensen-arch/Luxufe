import { supabase } from './supabase';

export interface Brand {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  brand_image?: string;
  created_at: string;
}

export interface BrandResponse {
  data: Brand[];
  count: number;
  error: any;
}

export interface Hotel {
  id: string;
  hotel_name: string;
  brand: string;
  room_type: string;
  latitude?: number;
  longitude?: number;
  map_link?: string;
  hotel_link?: string;
  country: string;
  city: string;
  address?: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export const fetchBrands = async (
  page: number = 1,
  pageSize: number = 8,
  searchTerm?: string
): Promise<BrandResponse> => {
  try {
    let query = supabase
      .from('brands')
      .select('id, name, description, logo, brand_image, created_at', { count: 'exact' });

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

// Get all brands (for brand listing)
export const getBrands = async (): Promise<Brand[]> => {
  try {
    const { data, error } = await supabase
      .from('brands')
      .select('id, name, description, logo, brand_image, created_at')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching brands:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching brands:', error);
    return [];
  }
};

// Get a single brand by name
export const getBrandByName = async (brandName: string): Promise<Brand | null> => {
  try {
    const { data, error } = await supabase
      .from('brands')
      .select('id, name, description, logo, brand_image, created_at')
      .eq('name', brandName)
      .single();

    if (error) {
      console.error('Error fetching brand:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching brand:', error);
    return null;
  }
};

// Fetch hotel counts for brands
export const fetchHotelCounts = async (brandNames: string[]): Promise<Record<string, number>> => {
  try {
    if (brandNames.length === 0) return {};

    // Get hotel counts for each brand using exact name matching
    const hotelCounts: Record<string, number> = {};
    
    for (const brandName of brandNames) {
      const { count, error } = await supabase
        .from('hotels')
        .select('*', { count: 'exact', head: true })
        .eq('brand', brandName);

      if (error) {
        console.error(`Error fetching hotel count for ${brandName}:`, error);
        hotelCounts[brandName] = 0;
      } else {
        hotelCounts[brandName] = count || 0;
      }
    }

    return hotelCounts;
  } catch (error) {
    console.error('Error fetching hotel counts:', error);
    return {};
  }
};

// Get hotels with filters and gallery
export const getHotelsWithFiltersAndGallery = async (filters: {
  brand?: string;
  search?: string;
  countries?: string[];
  typeOfTravel?: string[];
}): Promise<Hotel[]> => {
  try {
    let query = supabase
      .from('hotels')
      .select('*');

    // Apply brand filter
    if (filters.brand) {
      query = query.eq('brand', filters.brand);
    }

    // Apply search filter
    if (filters.search) {
      query = query.or(`hotel_name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
    }

    // Apply country filter
    if (filters.countries && filters.countries.length > 0) {
      query = query.in('country', filters.countries);
    }

    // Apply room type filter (typeOfTravel)
    if (filters.typeOfTravel && filters.typeOfTravel.length > 0) {
      query = query.in('room_type', filters.typeOfTravel);
    }

    const { data, error } = await query.order('hotel_name', { ascending: true });

    if (error) {
      console.error('Error fetching hotels:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching hotels:', error);
    return [];
  }
};

// Get unique countries for a specific brand
export const getBrandCountries = async (brandName: string): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('hotels')
      .select('country')
      .eq('brand', brandName)
      .not('country', 'is', null);

    if (error) {
      console.error('Error fetching brand countries:', error);
      return [];
    }

    // Get unique countries and sort them
    const uniqueCountries = [...new Set(data?.map(hotel => hotel.country) || [])];
    return uniqueCountries.sort();
  } catch (error) {
    console.error('Error fetching brand countries:', error);
    return [];
  }
};

// Get unique countries
export const getUniqueCountries = async (): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('hotels')
      .select('country')
      .not('country', 'is', null);

    if (error) {
      console.error('Error fetching countries:', error);
      return [];
    }

    // Get unique countries and sort them
    const uniqueCountries = [...new Set(data?.map(hotel => hotel.country) || [])];
    return uniqueCountries.sort();
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};

// Get a single hotel by name
export const getHotelByName = async (hotelName: string): Promise<Hotel | null> => {
  try {
    const { data, error } = await supabase
      .from('hotels')
      .select('*')
      .eq('hotel_name', hotelName)
      .single();

    if (error) {
      console.error('Error fetching hotel:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching hotel:', error);
    return null;
  }
};

// Get hotel gallery by hotel name
export const getHotelGallery = async (hotelName: string): Promise<string[]> => {
  try {
    // Normalize the hotel name for better matching
    const normalizedHotelName = hotelName
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, ' ') // Normalize spaces
      .trim();

    // Try exact match first
    let { data, error } = await supabase
      .from('hotelgallery')
      .select('hotel_image')
      .eq('hotel_name', hotelName)
      .maybeSingle();

    // If no exact match, try case-insensitive exact match
    if (!data && !error) {
      const { data: caseInsensitiveData, error: caseError } = await supabase
        .from('hotelgallery')
        .select('hotel_image')
        .ilike('hotel_name', hotelName)
        .maybeSingle();
      
      if (caseError) {
        console.error('Error fetching hotel gallery (case-insensitive):', caseError);
      } else {
        data = caseInsensitiveData;
      }
    }

    // If still no match, try partial matching with normalized names
    if (!data && !error) {
      // Get all gallery entries and find the best match
      const { data: allGalleryData, error: allError } = await supabase
        .from('hotelgallery')
        .select('hotel_name, hotel_image');
      
      if (!allError && allGalleryData) {
        // Find the best matching hotel name
        const bestMatch = allGalleryData.find(gallery => {
          const galleryName = gallery.hotel_name
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
          
          // Check for exact normalized match
          if (galleryName === normalizedHotelName) return true;
          
          // Check if hotel name contains the gallery name or vice versa
          if (galleryName.includes(normalizedHotelName) || normalizedHotelName.includes(galleryName)) return true;
          
          // Check for common variations (e.g., "al-baleed" vs "al baleed")
          const hotelWords = normalizedHotelName.split(' ');
          const galleryWords = galleryName.split(' ');
          
          // If at least 2 words match, consider it a match
          const matchingWords = hotelWords.filter(word => 
            galleryWords.some((galleryWord: string) => 
              galleryWord.includes(word) || word.includes(galleryWord)
            )
          );
          
          return matchingWords.length >= Math.min(2, hotelWords.length, galleryWords.length);
        });
        
        if (bestMatch) {
          data = bestMatch;
        }
      }
    }

    if (error) {
      console.error('Error fetching hotel gallery:', error);
      return [];
    }

    if (!data || !data.hotel_image) {
      console.log(`No gallery found for hotel: ${hotelName} (normalized: ${normalizedHotelName})`);
      return [];
    }

    // Parse the Python-style string array and extract URLs
    try {
      // The data is stored as a Python-style string, not JSON
      // Remove the outer quotes and split by ', ' to get individual URLs
      const imageString = data.hotel_image;
      
      // Remove the outer brackets and quotes
      const cleanString = imageString.slice(2, -2); // Remove "['" and "']"
      
      // Split by "', '" to get individual URLs
      const imageUrls = cleanString.split("', '");
      
      // Clean up each URL (remove any remaining quotes)
      const cleanedUrls = imageUrls.map((url: string) => url.replace(/['"]/g, ''));
      
      return cleanedUrls;
    } catch (parseError) {
      console.error('Error parsing hotel image string:', parseError);
      return [];
    }
  } catch (error) {
    console.error('Error fetching hotel gallery:', error);
    return [];
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

