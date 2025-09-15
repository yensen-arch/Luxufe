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
  latitude?: string;
  longitude?: string;
  map_link?: string;
  hotel_link?: string;
  country: string;
  city: string;
  address?: string;
  description?: string;
  continent?: string;
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
  page?: number;
  pageSize?: number;
}): Promise<{ data: Hotel[]; count: number }> => {
  try {
    let query = supabase
      .from('hotels')
      .select('*', { count: 'exact' });

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

    // Apply pagination
    if (filters.page && filters.pageSize) {
      const from = (filters.page - 1) * filters.pageSize;
      const to = from + filters.pageSize - 1;
      query = query.range(from, to);
    }

    const { data, error, count } = await query.order('hotel_name', { ascending: true });

    if (error) {
      console.error('Error fetching hotels:', error);
      return { data: [], count: 0 };
    }

    return { data: data || [], count: count || 0 };
  } catch (error) {
    console.error('Error fetching hotels:', error);
    return { data: [], count: 0 };
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

// Get hotel counts by continent - optimized query
export const getHotelCountsByContinent = async (): Promise<{[key: string]: number}> => {
  try {
    console.log('🔍 getHotelCountsByContinent: Fetching hotel counts by continent');
    
    // Optimized query: only select continent column and count
    const { data, error } = await supabase
      .from('hotels')
      .select('continent', { count: 'exact' })
      .not('continent', 'is', null);

    if (error) {
      console.error('Error fetching hotel counts by continent:', error);
      return {};
    }

    // Count hotels by continent using only the continent field
    const continentCounts: {[key: string]: number} = {};
    
    data?.forEach(row => {
      if (row.continent) {
        continentCounts[row.continent] = (continentCounts[row.continent] || 0) + 1;
      }
    });

    console.log('✅ getHotelCountsByContinent: Found counts:', continentCounts);
    return continentCounts;
  } catch (error) {
    console.error('Error fetching hotel counts by continent:', error);
    return {};
  }
};

// Get continent statistics (hotel counts and country counts) - optimized query
export const getContinentStatistics = async (): Promise<{
  [continent: string]: {
    hotelCount: number;
    countryCount: number;
  }
}> => {
  try {
    console.log('🔍 getContinentStatistics: Fetching continent statistics');
    
    // Optimized query: only select continent and country columns
    const { data, error } = await supabase
      .from('hotels')
      .select('continent, country')
      .not('continent', 'is', null)
      .not('country', 'is', null);

    if (error) {
      console.error('Error fetching continent statistics:', error);
      return {};
    }

    // Process data to get hotel counts and unique countries per continent
    const continentStats: {
      [continent: string]: {
        hotelCount: number;
        countryCount: number;
        countries: Set<string>;
      }
    } = {};
    
    data?.forEach(row => {
      if (row.continent && row.country) {
        if (!continentStats[row.continent]) {
          continentStats[row.continent] = {
            hotelCount: 0,
            countryCount: 0,
            countries: new Set()
          };
        }
        continentStats[row.continent].hotelCount++;
        continentStats[row.continent].countries.add(row.country);
      }
    });

    // Convert to final format
    const result: {
      [continent: string]: {
        hotelCount: number;
        countryCount: number;
      }
    } = {};

    Object.entries(continentStats).forEach(([continent, stats]) => {
      result[continent] = {
        hotelCount: stats.hotelCount,
        countryCount: stats.countries.size
      };
    });

    console.log('✅ getContinentStatistics: Found statistics:', result);
    return result;
  } catch (error) {
    console.error('Error fetching continent statistics:', error);
    return {};
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
    console.log('🔍 getHotelGallery: Searching for hotel:', hotelName);
    
    // Try exact match first
    let { data, error } = await supabase
      .from('hotelgallery')
      .select('hotel_image')
      .eq('hotel_name', hotelName)
      .maybeSingle();

    console.log('🔍 getHotelGallery: Exact match result:', { data: !!data, error: !!error, hotelName });

    // If no exact match, try case-insensitive exact match
    if (!data && !error) {
      console.log('🔍 getHotelGallery: Trying case-insensitive match for:', hotelName);
      const { data: caseInsensitiveData, error: caseError } = await supabase
        .from('hotelgallery')
        .select('hotel_image')
        .ilike('hotel_name', hotelName)
        .maybeSingle();
      
      if (caseError) {
        console.error('Error fetching hotel gallery (case-insensitive):', caseError);
      } else {
        data = caseInsensitiveData;
        console.log('🔍 getHotelGallery: Case-insensitive match result:', { data: !!data, hotelName });
      }
    }

    if (error) {
      console.error('Error fetching hotel gallery:', error);
      return [];
    }

    if (!data || !data.hotel_image) {
      console.log('❌ getHotelGallery: No data found for hotel:', hotelName);
      return [];
    }

    console.log('✅ getHotelGallery: Found data for hotel:', hotelName, 'Image string length:', data.hotel_image?.length);

    // Parse the Python-style string array and extract URLs
    try {
      console.log('🔍 getHotelGallery: Starting to parse image string');
      // The data is stored as a Python-style string, not JSON
      // Remove the outer quotes and split by ', ' to get individual URLs
      const imageString = data.hotel_image;
      console.log('🔍 getHotelGallery: Raw image string:', imageString.substring(0, 100) + '...');
      
      // Remove the outer brackets and quotes
      const cleanString = imageString.slice(2, -2); // Remove "['" and "']"
      console.log('🔍 getHotelGallery: Cleaned string length:', cleanString.length);
      console.log('🔍 getHotelGallery: Cleaned string preview:', cleanString.substring(0, 200));
      
      // Try different splitting strategies to handle both formats
      let imageUrls: string[] = [];
      
      // First try the current format: ", "
      imageUrls = cleanString.split(", ");
      console.log('🔍 getHotelGallery: Split by ", " - count:', imageUrls.length);
      
      // If only 1 URL found, try the original expected format: "', '"
      if (imageUrls.length <= 1) {
        imageUrls = cleanString.split("', '");
        console.log('🔍 getHotelGallery: Split by "', '" - count:', imageUrls.length);
      }
      
      // If still only 1 URL, try splitting by just comma
      if (imageUrls.length <= 1) {
        imageUrls = cleanString.split(",");
        console.log('🔍 getHotelGallery: Split by "," - count:', imageUrls.length);
      }
      
      // If still only 1 URL, try a more aggressive approach - split by "https://"
      if (imageUrls.length <= 1) {
        const httpsParts = cleanString.split("https://");
        if (httpsParts.length > 1) {
          imageUrls = httpsParts.slice(1).map((part: string) => "https://" + part);
          console.log('🔍 getHotelGallery: Split by "https://" - count:', imageUrls.length);
        }
      }
      
      // Clean up each URL (remove any remaining quotes and trim whitespace)
      const cleanedUrls = imageUrls.map((url: string) => url.replace(/['"]/g, '').trim()).filter(url => url.length > 0);
      console.log('🔍 getHotelGallery: Final cleaned URLs count:', cleanedUrls.length);
      console.log('🔍 getHotelGallery: First URL:', cleanedUrls[0]);
      
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

// Get hotel card images (the 3 selected images for brand card display)
export const getHotelCardImages = async (hotelName: string): Promise<{
  top: string | null;
  left: string | null;
  right: string | null;
} | null> => {
  try {
    console.log('🔍 getHotelCardImages: Searching for hotel:', hotelName);
    
    const { data, error } = await supabase
      .from('hotelgallery')
      .select('hotel_card_images')
      .eq('hotel_name', hotelName)
      .maybeSingle();

    if (error) {
      console.error('Error fetching hotel card images:', error);
      return null;
    }

    if (!data || !data.hotel_card_images) {
      console.log('❌ getHotelCardImages: No card images found for hotel:', hotelName);
      return null;
    }

    console.log('✅ getHotelCardImages: Found card images for hotel:', hotelName, data.hotel_card_images);
    return data.hotel_card_images;
  } catch (error) {
    console.error('Error fetching hotel card images:', error);
    return null;
  }
};

// Update hotel card images
export const updateHotelCardImages = async (
  hotelName: string, 
  cardImages: {
    top?: string | null;
    left?: string | null;
    right?: string | null;
  }
): Promise<boolean> => {
  try {
    console.log('🔍 updateHotelCardImages: Updating for hotel:', hotelName, cardImages);
    
    const { error } = await supabase
      .from('hotelgallery')
      .update({ hotel_card_images: cardImages })
      .eq('hotel_name', hotelName);

    if (error) {
      console.error('Error updating hotel card images:', error);
      return false;
    }

    console.log('✅ updateHotelCardImages: Successfully updated for hotel:', hotelName);
    return true;
  } catch (error) {
    console.error('Error updating hotel card images:', error);
    return false;
  }
};

// Delete images from hotel gallery
export const deleteHotelImages = async (hotelName: string, imageUrls: string[]): Promise<boolean> => {
  try {
    console.log('🔍 deleteHotelImages: Deleting images for hotel:', hotelName, imageUrls);
    
    // First, get the current gallery images
    const { data: currentData, error: fetchError } = await supabase
      .from('hotelgallery')
      .select('hotel_image')
      .eq('hotel_name', hotelName)
      .maybeSingle();

    if (fetchError) {
      console.error('Error fetching current images:', fetchError);
      return false;
    }

    if (!currentData || !currentData.hotel_image) {
      console.error('No current images found for hotel:', hotelName);
      return false;
    }

    // Parse the Python array string to get current images
    let currentImages: string[] = [];
    try {
      // Remove the outer quotes and parse the Python array
      const imageString = currentData.hotel_image.replace(/^'|'$/g, '');
      // Convert Python array string to JavaScript array
      currentImages = JSON.parse(imageString.replace(/'/g, '"'));
    } catch (parseError) {
      console.error('Error parsing hotel_image string:', parseError);
      return false;
    }

    // Filter out the images to be deleted
    const updatedImages = currentImages.filter((url: string) => !imageUrls.includes(url));

    console.log('🔍 deleteHotelImages: Original images:', currentImages.length, 'After deletion:', updatedImages.length);

    // Convert back to Python array string format
    const updatedImageString = `[${updatedImages.map(url => `'${url}'`).join(', ')}]`;

    // Update the database with the filtered images
    const { error: updateError } = await supabase
      .from('hotelgallery')
      .update({ hotel_image: updatedImageString })
      .eq('hotel_name', hotelName);

    if (updateError) {
      console.error('Error updating images after deletion:', updateError);
      return false;
    }

    console.log('✅ deleteHotelImages: Successfully deleted images for hotel:', hotelName);
    return true;
  } catch (error) {
    console.error('Error deleting hotel images:', error);
    return false;
  }
};

// Get hotel hero image
export const getHotelHeroImage = async (hotelName: string): Promise<string | null> => {
  try {
    console.log('🔍 getHotelHeroImage: Searching for hotel:', hotelName);
    
    // Try exact match first
    let { data, error } = await supabase
      .from('hotelgallery')
      .select('hotel_hero')
      .eq('hotel_name', hotelName)
      .maybeSingle();

    console.log('🔍 getHotelHeroImage: Exact match result:', { data: !!data, error: !!error, hotelName });

    // If no exact match, try case-insensitive exact match
    if (!data && !error) {
      console.log('🔍 getHotelHeroImage: Trying case-insensitive match for:', hotelName);
      const { data: caseInsensitiveData, error: caseError } = await supabase
        .from('hotelgallery')
        .select('hotel_hero')
        .ilike('hotel_name', hotelName)
        .maybeSingle();
      
      if (caseError) {
        console.error('Error fetching hotel hero image (case-insensitive):', caseError);
      } else {
        data = caseInsensitiveData;
        console.log('🔍 getHotelHeroImage: Case-insensitive match result:', { data: !!data, hotelName });
      }
    }

    if (error) {
      console.error('Error fetching hotel hero image:', error);
      return null;
    }

    if (!data || !data.hotel_hero) {
      console.log('❌ getHotelHeroImage: No hero image found for hotel:', hotelName);
      return null;
    }

    console.log('✅ getHotelHeroImage: Found hero image for hotel:', hotelName, data.hotel_hero);
    return data.hotel_hero;
  } catch (error) {
    console.error('Error fetching hotel hero image:', error);
    return null;
  }
};

// Update hotel hero image
export const updateHotelHeroImage = async (hotelName: string, heroImageUrl: string): Promise<boolean> => {
  try {
    console.log('🔍 updateHotelHeroImage: Updating for hotel:', hotelName, heroImageUrl);
    
    const { error } = await supabase
      .from('hotelgallery')
      .update({ hotel_hero: heroImageUrl })
      .eq('hotel_name', hotelName);

    if (error) {
      console.error('Error updating hotel hero image:', error);
      return false;
    }

    console.log('✅ updateHotelHeroImage: Successfully updated for hotel:', hotelName);
    return true;
  } catch (error) {
    console.error('Error updating hotel hero image:', error);
    return false;
  }
};

// Update hotel gallery image order
export const updateHotelGalleryOrder = async (hotelName: string, imageUrls: string[]): Promise<boolean> => {
  try {
    console.log('🔍 updateHotelGalleryOrder: Updating order for hotel:', hotelName, imageUrls);
    
    // Convert to Python array string format
    const updatedImageString = `[${imageUrls.map(url => `'${url}'`).join(', ')}]`;
    
    const { error } = await supabase
      .from('hotelgallery')
      .update({ hotel_image: updatedImageString })
      .eq('hotel_name', hotelName);

    if (error) {
      console.error('Error updating hotel gallery order:', error);
      return false;
    }

    console.log('✅ updateHotelGalleryOrder: Successfully updated for hotel:', hotelName);
    return true;
  } catch (error) {
    console.error('Error updating hotel gallery order:', error);
    return false;
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

// Get rooms by hotel name
export const getRoomsByHotel = async (hotelName: string): Promise<any[]> => {
  try {
    // Normalize the hotel name for better matching
    const normalizedHotelName = hotelName
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    // Try exact match first
    let { data, error: constError } = await supabase
      .from('rooms')
      .select('id, room_name, accommodation_type, bed, hotel_name')
      .eq('hotel_name', hotelName)
      .limit(9);

    // If no exact match, try case-insensitive search
    if (!data || data.length === 0) {
      const { data: caseInsensitiveData, error: caseError } = await supabase
        .from('rooms')
        .select('id, room_name, accommodation_type, bed, hotel_name')
        .ilike('hotel_name', `%${hotelName}%`)
        .limit(9);
      
      if (caseError) {
        console.error('Error fetching rooms (case-insensitive):', caseError);
      } else {
        data = caseInsensitiveData;
      }
    }

    // If still no match, try partial matching with normalized names
    if (!data || data.length === 0) {
      const { data: allRoomsData, error: allError } = await supabase
        .from('rooms')
        .select('id, room_name, accommodation_type, bed, hotel_name');
      
      if (!allError && allRoomsData) {
        // Find the best matching hotel name
        const bestMatches = allRoomsData.filter(room => {
          const roomHotelName = room.hotel_name
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
          
          // Check for exact normalized match
          if (roomHotelName === normalizedHotelName) return true;
          
          // Check if hotel name contains the room hotel name or vice versa
          if (roomHotelName.includes(normalizedHotelName) || normalizedHotelName.includes(roomHotelName)) return true;
          
          // Check for common variations
          const hotelWords = normalizedHotelName.split(' ');
          const roomWords = roomHotelName.split(' ');
          
          // If at least 2 words match, consider it a match
          const matchingWords = hotelWords.filter(word => 
            roomWords.some((roomWord: string) => 
              roomWord.includes(word) || word.includes(roomWord)
            )
          );
          
          return matchingWords.length >= Math.min(2, hotelWords.length, roomWords.length);
        });
        
        data = bestMatches.slice(0, 9);
      }
    }

    if (constError) {
      console.error('Error fetching rooms:', constError);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return [];
  }
};

// Get room gallery by room name and hotel name
export const getRoomGallery = async (roomName: string, hotelName: string): Promise<string[]> => {
  try {
    // Try exact match first
    let { data, error } = await supabase
      .from('roomgallery')
      .select('room_image')
      .eq('room_name', roomName)
      .eq('hotel_name', hotelName)
      .maybeSingle();

    // If no exact match, try case-insensitive search
    if (!data && !error) {
      const { data: caseInsensitiveData, error: caseError } = await supabase
        .from('roomgallery')
        .select('room_image')
        .ilike('room_name', roomName)
        .ilike('hotel_name', hotelName)
        .maybeSingle();
      
      if (caseError) {
        console.error('Error fetching room gallery (case-insensitive):', caseError);
      } else {
        data = caseInsensitiveData;
      }
    }

    if (error) {
      console.error('Error fetching room gallery:', error);
      return [];
    }

    if (!data || !data.room_image) {
      return [];
    }

    // Parse the Python-style string array and extract URLs
    try {
      const imageString = data.room_image;
      const cleanString = imageString.slice(2, -2); // Remove "['" and "']"
      const imageUrls = cleanString.split("', '");
      const cleanedUrls = imageUrls.map((url: string) => url.replace(/['"]/g, ''));
      
      return cleanedUrls;
    } catch (parseError) {
      console.error('Error parsing room image string:', parseError);
      return [];
    }
  } catch (error) {
    console.error('Error fetching room gallery:', error);
    return [];
  }
};

// Get rooms for a hotel with pagination
export const getRoomsForHotel = async (hotelName: string, page: number = 1, pageSize: number = 12): Promise<{ data: any[]; count: number }> => {
  try {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    let query = supabase
      .from('roomgallery')
      .select('id, room_name, room_image', { count: 'exact' })
      .eq('hotel_name', hotelName)
      .range(from, to)
      .order('room_name', { ascending: true });

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching rooms for hotel:', error);
      return { data: [], count: 0 };
    }

    // Parse room images and get first image for each room
    const roomsWithImages = (data || []).map(room => {
      let firstImage = '';
      try {
        if (room.room_image) {
          const imageString = room.room_image;
          const cleanString = imageString.slice(2, -2); // Remove "['" and "']"
          const imageUrls = cleanString.split("', '");
          const cleanedUrls = imageUrls.map((url: string) => url.replace(/['"]/g, ''));
          firstImage = cleanedUrls[0] || '';
        }
      } catch (parseError) {
        console.error('Error parsing room image string:', parseError);
      }
      
      return {
        id: room.id,
        room_name: room.room_name,
        first_image: firstImage
      };
    });

    return { data: roomsWithImages, count: count || 0 };
  } catch (error) {
    console.error('Error fetching rooms for hotel:', error);
    return { data: [], count: 0 };
  }
};

// Update room gallery order
export const updateRoomGalleryOrder = async (roomName: string, hotelName: string, imageUrls: string[]): Promise<boolean> => {
  try {
    console.log('🔍 updateRoomGalleryOrder: Updating for room:', roomName, 'hotel:', hotelName);
    
    // Convert array to Python-style string format
    const imageString = `[${imageUrls.map(url => `'${url}'`).join(', ')}]`;
    
    const { error } = await supabase
      .from('roomgallery')
      .update({ room_image: imageString })
      .eq('room_name', roomName)
      .eq('hotel_name', hotelName);

    if (error) {
      console.error('Error updating room gallery order:', error);
      return false;
    }

    console.log('✅ updateRoomGalleryOrder: Successfully updated for room:', roomName);
    return true;
  } catch (error) {
    console.error('Error updating room gallery order:', error);
    return false;
  }
};

// Delete images from room gallery
export const deleteRoomImages = async (roomName: string, hotelName: string, imageUrls: string[]): Promise<boolean> => {
  try {
    console.log('🔍 deleteRoomImages: Deleting images for room:', roomName, 'hotel:', hotelName, imageUrls);
    
    // First, get the current room gallery images
    const { data: currentData, error: fetchError } = await supabase
      .from('roomgallery')
      .select('room_image')
      .eq('room_name', roomName)
      .eq('hotel_name', hotelName)
      .maybeSingle();

    if (fetchError) {
      console.error('Error fetching current room images:', fetchError);
      return false;
    }

    if (!currentData || !currentData.room_image) {
      console.error('No current images found for room:', roomName);
      return false;
    }

    // Parse the Python array string to get current images
    let currentImages: string[] = [];
    try {
      const imageString = currentData.room_image;
      const cleanString = imageString.slice(2, -2); // Remove "['" and "']"
      const imageUrls = cleanString.split("', '");
      currentImages = imageUrls.map((url: string) => url.replace(/['"]/g, ''));
    } catch (parseError) {
      console.error('Error parsing room_image string:', parseError);
      return false;
    }

    // Filter out the images to be deleted
    const updatedImages = currentImages.filter((url: string) => !imageUrls.includes(url));

    console.log('🔍 deleteRoomImages: Original images:', currentImages.length, 'After deletion:', updatedImages.length);

    // Convert back to Python array string format
    const updatedImageString = `[${updatedImages.map(url => `'${url}'`).join(', ')}]`;

    // Update the database with the filtered images
    const { error: updateError } = await supabase
      .from('roomgallery')
      .update({ room_image: updatedImageString })
      .eq('room_name', roomName)
      .eq('hotel_name', hotelName);

    if (updateError) {
      console.error('Error updating room images after deletion:', updateError);
      return false;
    }

    console.log('✅ deleteRoomImages: Successfully deleted images for room:', roomName);
    return true;
  } catch (error) {
    console.error('Error deleting room images:', error);
    return false;
  }
};

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

// Land Itinerary Types
export interface LandItinerary {
  id: number;
  itinerary_name: string;
  hero: string;
  destinations: string;
  duration: string;
  overview: string;
  map: string | Array<{
    latitude: string;
    longitude: string;
    key_dates: string;
    day_number: number;
  }>;
  journey_highlights: string[];
  daily_itinerary: Array<{
    days?: string;
    title: string;
    description: string;
  }>;
  gallery: string;
  good_to_know: Array<{
    question: string;
    answer: string;
  }>;
  hotels_by_categories: {
    types: Array<{
      category: string;
      hotels: Array<{
        name: string;
        city: string;
        country: string;
        day?: string;
      }>;
    }>;
  };
}

export interface LandItineraryDate {
  id: number;
  linked_itinerary_id: number;
  date: string;
  adult_pricing: {
    [category: string]: number;
  };
  children_pricing: {
    [category: string]: number;
  };
}

// Fetch land itinerary by ID
export const getLandItinerary = async (id: number): Promise<LandItinerary | null> => {
  try {
    const { data, error } = await supabase
      .from('land_itineraries')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching land itinerary:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching land itinerary:', error);
    return null;
  }
};

// Fetch land itinerary by name
export const getLandItineraryByName = async (name: string): Promise<LandItinerary | null> => {
  try {
    const { data, error } = await supabase
      .from('land_itineraries')
      .select('*')
      .eq('itinerary_name', name)
      .single();

    if (error) {
      console.error('Error fetching land itinerary by name:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching land itinerary by name:', error);
    return null;
  }
};

// Fetch land itinerary dates by itinerary ID
export const getLandItineraryDates = async (itineraryId: number): Promise<LandItineraryDate[]> => {
  try {
    const { data, error } = await supabase
      .from('land_itineraries_dates')
      .select('*')
      .eq('linked_itinerary_id', itineraryId)
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching land itinerary dates:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching land itinerary dates:', error);
    return [];
  }
};

// Fetch all land itineraries
export const getAllLandItineraries = async (): Promise<LandItinerary[]> => {
  try {
    const { data, error } = await supabase
      .from('land_itineraries')
      .select('*')
      .order('itinerary_name', { ascending: true });

    if (error) {
      console.error('Error fetching land itineraries:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching land itineraries:', error);
    return [];
  }
};

// Get land itineraries with filters and pagination
export const getLandItinerariesWithFilters = async (filters: {
  search?: string;
  regions?: string[];
  durationRanges?: string[];
  journeyTypes?: string[];
  page?: number;
  pageSize?: number;
}): Promise<{ data: LandItinerary[]; count: number }> => {
  try {
    let query = supabase
      .from('land_itineraries')
      .select('*', { count: 'exact' });

    // Apply search filter
    if (filters.search) {
      query = query.or(`itinerary_name.ilike.%${filters.search}%,overview.ilike.%${filters.search}%,destinations.ilike.%${filters.search}%`);
    }

    // Apply region filter (based on destinations field)
    if (filters.regions && filters.regions.length > 0) {
      const regionConditions = filters.regions.map(region => `destinations.ilike.%${region}%`).join(',');
      query = query.or(regionConditions);
    }

    // Apply duration filter (based on duration field)
    if (filters.durationRanges && filters.durationRanges.length > 0) {
      const durationConditions = filters.durationRanges.map(range => {
        if (range === '3-5 Days') return `duration.ilike.%3%`;
        if (range === '6-8 Days') return `duration.ilike.%6%`;
        if (range === '9-12 Days') return `duration.ilike.%9%`;
        if (range === '13-16 Days') return `duration.ilike.%13%`;
        if (range === '17+ Days') return `duration.ilike.%17%`;
        return `duration.ilike.%${range}%`;
      }).join(',');
      query = query.or(durationConditions);
    }

    // Apply journey type filter (based on journey_highlights field)
    if (filters.journeyTypes && filters.journeyTypes.length > 0) {
      const journeyConditions = filters.journeyTypes.map(type => `journey_highlights.ilike.%${type}%`).join(',');
      query = query.or(journeyConditions);
    }

    // Apply pagination
    if (filters.page && filters.pageSize) {
      const from = (filters.page - 1) * filters.pageSize;
      const to = from + filters.pageSize - 1;
      query = query.range(from, to);
    }

    const { data, error, count } = await query.order('itinerary_name', { ascending: true });

    if (error) {
      console.error('Error fetching land itineraries with filters:', error);
      return { data: [], count: 0 };
    }

    return { data: data || [], count: count || 0 };
  } catch (error) {
    console.error('Error fetching land itineraries with filters:', error);
    return { data: [], count: 0 };
  }
};

// Get unique regions from land itineraries
export const getLandItineraryRegions = async (): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('land_itineraries')
      .select('destinations')
      .not('destinations', 'is', null);

    if (error) {
      console.error('Error fetching land itinerary regions:', error);
      return [];
    }

    // Extract unique regions from destinations
    const regions = new Set<string>();
    data?.forEach(itinerary => {
      if (itinerary.destinations) {
        // Split destinations and extract potential regions
        const destinations = itinerary.destinations.split(',').map((d: string) => d.trim());
        destinations.forEach((dest: string) => {
          // Try to extract region from destination
          if (dest.includes('Africa')) regions.add('Africa');
          if (dest.includes('Asia')) regions.add('Asia');
          if (dest.includes('Europe')) regions.add('Europe');
          if (dest.includes('North America')) regions.add('North America');
          if (dest.includes('South America')) regions.add('South America');
          if (dest.includes('Oceania')) regions.add('Oceania');
          if (dest.includes('Middle East')) regions.add('Middle East');
        });
      }
    });

    return Array.from(regions).sort();
  } catch (error) {
    console.error('Error fetching land itinerary regions:', error);
    return [];
  }
};

// Get unique duration ranges from land itineraries
export const getLandItineraryDurationRanges = async (): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('land_itineraries')
      .select('duration')
      .not('duration', 'is', null);

    if (error) {
      console.error('Error fetching land itinerary durations:', error);
      return [];
    }

    // Extract unique duration ranges
    const durations = new Set<string>();
    data?.forEach(itinerary => {
      if (itinerary.duration) {
        const duration = itinerary.duration.toLowerCase();
        if (duration.includes('3') || duration.includes('4') || duration.includes('5')) {
          durations.add('3-5 Days');
        } else if (duration.includes('6') || duration.includes('7') || duration.includes('8')) {
          durations.add('6-8 Days');
        } else if (duration.includes('9') || duration.includes('10') || duration.includes('11') || duration.includes('12')) {
          durations.add('9-12 Days');
        } else if (duration.includes('13') || duration.includes('14') || duration.includes('15') || duration.includes('16')) {
          durations.add('13-16 Days');
        } else if (duration.includes('17') || duration.includes('18') || duration.includes('19') || duration.includes('20') || duration.includes('21')) {
          durations.add('17+ Days');
        }
      }
    });

    return Array.from(durations).sort();
  } catch (error) {
    console.error('Error fetching land itinerary duration ranges:', error);
    return [];
  }
};

// Create a new land itinerary
export const createLandItinerary = async (itineraryData: Omit<LandItinerary, 'id'>): Promise<LandItinerary | null> => {
  try {
    console.log('🔍 createLandItinerary: Creating new itinerary:', itineraryData);
    
    const { data, error } = await supabase
      .from('land_itineraries')
      .insert([itineraryData])
      .select()
      .single();

    if (error) {
      console.error('Error creating land itinerary:', error);
      return null;
    }

    console.log('✅ createLandItinerary: Successfully created itinerary:', data);
    return data;
  } catch (error) {
    console.error('Error creating land itinerary:', error);
    return null;
  }
};

// Update an existing land itinerary
export const updateLandItinerary = async (id: number, itineraryData: Partial<LandItinerary>): Promise<LandItinerary | null> => {
  try {
    console.log('🔍 updateLandItinerary: Updating itinerary:', id, itineraryData);
    
    const { data, error } = await supabase
      .from('land_itineraries')
      .update(itineraryData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating land itinerary:', error);
      return null;
    }

    console.log('✅ updateLandItinerary: Successfully updated itinerary:', data);
    return data;
  } catch (error) {
    console.error('Error updating land itinerary:', error);
    return null;
  }
};

// Delete a land itinerary
export const deleteLandItinerary = async (id: number): Promise<boolean> => {
  try {
    console.log('🔍 deleteLandItinerary: Deleting itinerary:', id);
    
    const { error } = await supabase
      .from('land_itineraries')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting land itinerary:', error);
      return false;
    }

    console.log('✅ deleteLandItinerary: Successfully deleted itinerary:', id);
    return true;
  } catch (error) {
    console.error('Error deleting land itinerary:', error);
    return false;
  }
};

// Create land itinerary dates
export const createLandItineraryDates = async (dates: LandItineraryDate[]): Promise<LandItineraryDate[]> => {
  try {
    console.log('🔍 createLandItineraryDates: Creating dates:', dates);
    
    const { data, error } = await supabase
      .from('land_itineraries_dates')
      .insert(dates)
      .select();

    if (error) {
      console.error('Error creating land itinerary dates:', error);
      return [];
    }

    console.log('✅ createLandItineraryDates: Successfully created dates:', data);
    return data || [];
  } catch (error) {
    console.error('Error creating land itinerary dates:', error);
    return [];
  }
};

// Update land itinerary dates
export const updateLandItineraryDates = async (itineraryId: number, dates: LandItineraryDate[]): Promise<boolean> => {
  try {
    console.log('🔍 updateLandItineraryDates: Updating dates for itinerary:', itineraryId);
    
    // First, delete existing dates for this itinerary
    const { error: deleteError } = await supabase
      .from('land_itineraries_dates')
      .delete()
      .eq('linked_itinerary_id', itineraryId);

    if (deleteError) {
      console.error('Error deleting existing dates:', deleteError);
      return false;
    }

    // Then insert new dates
    if (dates.length > 0) {
      const { error: insertError } = await supabase
        .from('land_itineraries_dates')
        .insert(dates);

      if (insertError) {
        console.error('Error inserting new dates:', insertError);
        return false;
      }
    }

    console.log('✅ updateLandItineraryDates: Successfully updated dates for itinerary:', itineraryId);
    return true;
  } catch (error) {
    console.error('Error updating land itinerary dates:', error);
    return false;
  }
};

