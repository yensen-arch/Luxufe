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

// Get countries by continent with hotel counts
export const getCountriesByContinent = async (continentName: string): Promise<Array<{
  country: string;
  hotelCount: number;
  sampleImage?: string;
}>> => {
  try {
    console.log('🔍 getCountriesByContinent: Fetching countries for:', continentName);
    
    // Optimized query: only select country column
    const { data, error } = await supabase
      .from('hotels')
      .select('country')
      .eq('continent', continentName)
      .not('country', 'is', null);

    if (error) {
      console.error('Error fetching countries by continent:', error);
      return [];
    }

    // Count hotels by country
    const countryStats: { [country: string]: number } = {};
    
    data?.forEach(row => {
      if (row.country) {
        countryStats[row.country] = (countryStats[row.country] || 0) + 1;
      }
    });

    // Convert to array format
    const result = Object.entries(countryStats).map(([country, hotelCount]) => ({
      country,
      hotelCount
    }));

    console.log('✅ getCountriesByContinent: Found countries:', result);
    return result;
  } catch (error) {
    console.error('Error fetching countries by continent:', error);
    return [];
  }
};

// Get hotels by country
export const getHotelsByCountry = async (countryName: string): Promise<Hotel[]> => {
  try {
    console.log('🔍 getHotelsByCountry: Fetching hotels for:', countryName);
    
    const { data, error } = await supabase
      .from('hotels')
      .select('*')
      .eq('country', countryName)
      .order('hotel_name', { ascending: true });

    if (error) {
      console.error('Error fetching hotels by country:', error);
      return [];
    }

    console.log('✅ getHotelsByCountry: Found hotels:', data?.length || 0);
    return data || [];
  } catch (error) {
    console.error('Error fetching hotels by country:', error);
    return [];
  }
};

// Get country statistics
export const getCountryStatistics = async (countryName: string): Promise<{
  hotelCount: number;
  cityCount: number;
  brandCount: number;
} | null> => {
  try {
    console.log('🔍 getCountryStatistics: Fetching statistics for:', countryName);
    
    const { data, error } = await supabase
      .from('hotels')
      .select('city, brand')
      .eq('country', countryName);

    if (error) {
      console.error('Error fetching country statistics:', error);
      return null;
    }

    if (!data || data.length === 0) {
      console.log('❌ getCountryStatistics: No data found for country:', countryName);
      return null;
    }

    const uniqueCities = new Set(data.map(hotel => hotel.city)).size;
    const uniqueBrands = new Set(data.map(hotel => hotel.brand)).size;

    const stats = {
      hotelCount: data.length,
      cityCount: uniqueCities,
      brandCount: uniqueBrands
    };

    console.log('✅ getCountryStatistics: Found statistics:', stats);
    return stats;
  } catch (error) {
    console.error('Error fetching country statistics:', error);
    return null;
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
    
    // Try exact match first - get all rows and take the first onei
    let { data, error } = await supabase
      .from('hotelgallery')
      .select('hotel_image')
      .eq('hotel_name', hotelName)
      .limit(1);

    console.log('🔍 getHotelGallery: Exact match result:', { data: data?.length || 0, error: !!error, hotelName });

    // If no exact match, try case-insensitive match
    if ((!data || data.length === 0) && !error) {
      console.log('🔍 getHotelGallery: Trying case-insensitive match for:', hotelName);
      const { data: caseInsensitiveData, error: caseError } = await supabase
        .from('hotelgallery')
        .select('hotel_image')
        .ilike('hotel_name', hotelName)
        .limit(1);
      
      if (caseError) {
        console.error('Error fetching hotel gallery (case-insensitive):', caseError);
      } else {
        data = caseInsensitiveData;
        console.log('🔍 getHotelGallery: Case-insensitive match result:', { data: data?.length || 0, hotelName });
      }
    }

    if (error) {
      console.error('Error fetching hotel gallery:', error);
      return [];
    }

    if (!data || data.length === 0 || !data[0]?.hotel_image) {
      console.log('❌ getHotelGallery: No data found for hotel:', hotelName);
      return [];
    }

    console.log('✅ getHotelGallery: Found data for hotel:', hotelName, 'Image string length:', data[0].hotel_image?.length);

    // Parse the Python-style string array and extract URLs
    try {
      console.log('🔍 getHotelGallery: Starting to parse image string');
      // The data is stored as a Python-style string, not JSON
      // Remove the outer quotes and split by ', ' to get individual URLs
      const imageString = data[0].hotel_image;
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
      const cleanedUrls = imageUrls.map((url: string) => url.replace(/['"]/g, '').trim()).filter((url: string) => url.length > 0);
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
      console.log('📝 getHotelCardImages: No card images found for hotel:', hotelName);
      return { top: null, left: null, right: null };
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
    
    // First, check if there's already a record for this hotel
    const { data: existingData, error: fetchError } = await supabase
      .from('hotelgallery')
      .select('id, hotel_card_images')
      .eq('hotel_name', hotelName)
      .maybeSingle();

    if (fetchError) {
      console.error('Error fetching existing hotel data:', fetchError);
      return false;
    }

    if (existingData) {
      // Merge new card images with existing ones
      const existingCardImages = existingData.hotel_card_images || { top: null, left: null, right: null };
      const mergedCardImages = {
        ...existingCardImages,
        ...cardImages
      };
      
      // Update existing record
      const { error: updateError } = await supabase
        .from('hotelgallery')
        .update({ 
          hotel_card_images: mergedCardImages
        })
        .eq('hotel_name', hotelName);

      if (updateError) {
        console.error('Error updating hotel card images:', updateError);
        return false;
      }
    } else {
      // Create new record (we need at least one gallery image to create a record)
      // For now, we'll create a minimal record with just the card images
      const { error: insertError } = await supabase
        .from('hotelgallery')
        .insert({
          hotel_name: hotelName,
          hotel_image: '[]', // Empty array as placeholder
          hotel_card_images: cardImages
        });

      if (insertError) {
        console.error('Error creating hotel record with card images:', insertError);
        return false;
      }
    }

    console.log('✅ updateHotelCardImages: Successfully updated card images for hotel:', hotelName);
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
    
    const { data, error } = await supabase
      .from('hotelgallery')
      .select('hotel_hero')
      .eq('hotel_name', hotelName)
      .not('hotel_hero', 'is', null)
      .maybeSingle();

    if (error) {
      console.error('Error fetching hotel hero image:', error);
      return null;
    }

    if (!data || !data.hotel_hero) {
      console.log('📝 getHotelHeroImage: No hero image found for hotel:', hotelName);
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
    
    // First, check if there's already a record for this hotel
    const { data: existingData, error: fetchError } = await supabase
      .from('hotelgallery')
      .select('id, hotel_hero')
      .eq('hotel_name', hotelName)
      .maybeSingle();

    if (fetchError) {
      console.error('Error fetching existing hotel data:', fetchError);
      return false;
    }

    if (existingData) {
      // Update existing record
      const { error: updateError } = await supabase
        .from('hotelgallery')
        .update({ 
          hotel_hero: heroImageUrl
        })
        .eq('hotel_name', hotelName);

      if (updateError) {
        console.error('Error updating hotel hero image:', updateError);
        return false;
      }
    } else {
      // Create new record (we need at least one gallery image to create a record)
      // For now, we'll create a minimal record with just the hero image
      const { error: insertError } = await supabase
        .from('hotelgallery')
        .insert({
          hotel_name: hotelName,
          hotel_image: '[]', // Empty array as placeholder
          hotel_hero: heroImageUrl
        });

      if (insertError) {
        console.error('Error creating hotel record with hero image:', insertError);
        return false;
      }
    }

    console.log('✅ updateHotelHeroImage: Successfully updated hero image for hotel:', hotelName);
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



// Cruise Types and Interfaces
export interface CruiseBrand {
  id: number;
  created_at: string;
  name: string;
  description?: string;
  logo_horizontal?: string;
  cover?: string;
  year_founded?: string;
  external_id?: string;
  brand_video_url?: string;
  widgety_api_href?: string;
  is_active: boolean;
  widgety_uses_cruises_and_tours_api: boolean;
  sanity_id?: string;
  sanity_slug?: string;
  type: string;
  sync_source?: string;
  ship_count: number;
}

export interface CruiseShip {
  id: number;
  created_at: string;
  name: string;
  brand_id: number;
  capacity?: string;
  title?: string;
  description?: string;
  seo_meta_description?: string;
  ship_cover?: string;
  ship_thumbnail?: string;
  built?: string;
  refurbished?: string;
  external_id?: string;
  widgety_api_href?: string;
  is_active: boolean;
  sanity_id?: string;
  sanity_slug?: string;
  ship_type?: string;
  deck_plan?: string;
  length?: string;
  width?: number;
  cruising_speed?: number;
  crew_size?: number;
  number_cabins?: number;
  has_us_plugs?: boolean;
  dining_options?: string;
  dining_description?: string;
  enrichment_description?: string;
  enrichment_types?: string;
  entertainment_description?: string;
  entertainment_types?: string;
  health_fitness_description?: string;
  health_fitness_types?: string;
  useful_types?: string;
  deck_images?: string;
  travel_styles?: string;
  gallery?: string;
}

export interface CruiseItinerary {
  id: number;
  created_at: string;
  brand_id: number;
  status: string;
  name: string;
  description?: string;
  short_description?: string;
  header_subtitle?: string;
  seo_meta_description?: string;
  journey_summary?: string;
  itinerary_highlights?: string;
  extra?: string;
  inclusions?: string;
  exclusions?: string;
  rivers?: string[];
  travel_styles?: string[];
  thumbnail_image?: string;
  map_image?: string;
  external_id?: string;
  mc_tags?: string[];
  mc_booked_tags?: string[];
  lowest_price?: string;
  earliest_departure_date?: string;
  latest_departure_date?: string;
  booked_clients: number;
  widgety_api_href?: string;
  sanity_id?: string;
  sanity_slug?: string;
  hero_image?: string;
  countries?: string[];
  destinations?: string[];
  is_special?: string;
  associated_itineraries?: string;
  gallery?: string;
}

export interface CruiseItineraryDate {
  id: number;
  created_at: string;
  itinerary_id: number;
  embark_port_name?: string;
  debark_port_name?: string;
  date: string;
  name?: string;
  ship_id?: number;
  schedule?: any; // JSONB field
  extensions?: any; // JSONB field
  external_id?: string;
  additional_ship_ids?: string;
  end_date?: string;
  brand_id?: number;
}

export interface CruiseShipCabinType {
  id: number;
  created_at: string;
  name: string;
  description?: string;
  images?: string;
  square_feet?: string;
  cabin_amenities?: string;
  external_cabin_name?: string;
  ship_id: number;
  grade_codes?: string[];
  wheelchair_accessible?: string;
  max_occupancy?: string;
  room_layout_image?: string;
  capacity?: string;
}

export interface CruiseItineraryDateCabinType {
  id: number;
  created_at: string;
  name: string;
  room_type?: string;
  grade_code?: string;
  double_price_pp?: string;
  promo_double_price_pp?: string;
  single_price_pp?: string;
  promo_single_price_pp?: string;
  airfare_pp?: string;
  promo_airfare_pp?: string;
  ss_essential_double_price_pp?: string;
  ss_essential_single_price_pp?: string;
  onboard_credit?: string;
  availability?: string;
  ship_cabin_type_id?: string;
  itinerary_date_id?: string;
  ship_id?: string;
  brand_id?: string;
  internal_airfare?: string;
  request_only?: string;
  promo_text?: string;
  disclaimer?: string;
}

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
    console.log('🔍 getRoomGallery: Searching for room:', roomName, 'in hotel:', hotelName);
    
    // First, try to get all rows for this room (multiple rows case)
    let { data, error } = await supabase
      .from('roomgallery')
      .select('room_image')
      .eq('room_name', roomName)
      .eq('hotel_name', hotelName);

    // If no exact match, try case-insensitive search
    if ((!data || data.length === 0) && !error) {
      const { data: caseInsensitiveData, error: caseError } = await supabase
        .from('roomgallery')
        .select('room_image')
        .ilike('room_name', roomName)
        .ilike('hotel_name', hotelName);
      
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

    if (!data || data.length === 0) {
      console.log('📝 getRoomGallery: No images found for room:', roomName);
      return [];
    }

    // Handle multiple rows case (one image per row)
    if (data.length > 1) {
      console.log('✅ getRoomGallery: Found', data.length, 'individual image rows for room:', roomName);
      const urls = data.map(row => row.room_image).filter(url => url && url.trim() !== '');
      // Remove duplicates while preserving order
      const uniqueUrls = [...new Set(urls)];
      if (urls.length !== uniqueUrls.length) {
        console.log('📝 getRoomGallery: Removed', urls.length - uniqueUrls.length, 'duplicate URLs for room:', roomName);
      }
      return uniqueUrls;
    }

    // Handle single row case (multiple images in one string)
    const imageString = data[0].room_image;
    if (!imageString) {
      return [];
    }

    // Check if it's a string array format (like Python array)
    if (imageString.startsWith("['") && imageString.endsWith("']")) {
      try {
        console.log('✅ getRoomGallery: Parsing string array format for room:', roomName);
        const cleanString = imageString.slice(2, -2); // Remove "['" and "']"
        const imageUrls = cleanString.split("', '");
        const cleanedUrls = imageUrls.map((url: string) => url.replace(/['"]/g, ''));
        return cleanedUrls.filter((url: string) => url && url.trim() !== '');
      } catch (parseError) {
        console.error('Error parsing room image string array:', parseError);
        return [];
      }
    }

    // Handle single image case
    console.log('✅ getRoomGallery: Found single image for room:', roomName);
    return [imageString].filter(url => url && url.trim() !== '');
    
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

// CRUISE DATABASE FUNCTIONS

// Fetch cruise brands
export const getCruiseBrands = async (): Promise<CruiseBrand[]> => {
  try {
    const { data, error } = await supabase
      .from('cruise_brands')
      .select('*')
      .eq('is_active', true)
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching cruise brands:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching cruise brands:', error);
    return [];
  }
};

// Get a single cruise brand by ID
export const getCruiseBrandById = async (id: number): Promise<CruiseBrand | null> => {
  try {
    const { data, error } = await supabase
      .from('cruise_brands')
      .select('*')
      .eq('id', id)
      .eq('is_active', true)
      .single();

    if (error) {
      console.error('Error fetching cruise brand:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching cruise brand:', error);
    return null;
  }
};

// Fetch cruise ships by brand
export const getCruiseShipsByBrand = async (brandId: number): Promise<CruiseShip[]> => {
  try {
    const { data, error } = await supabase
      .from('cruise_ships')
      .select('*')
      .eq('brand_id', brandId)
      .eq('is_active', true)
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching cruise ships:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching cruise ships:', error);
    return [];
  }
};

// Fetch featured cruise itineraries (for CuratedForYou component)
export const getFeaturedCruiseItineraries = async (limit: number = 6): Promise<Array<{
  id: number;
  name: string;
  header_subtitle?: string;
  map_image?: string;
  hero_image?: string;
  thumbnail_image?: string;
  earliest_departure_date?: string;
  latest_departure_date?: string;
  brand_name: string;
  ship_name?: string;
  lowest_price?: string;
  embark_port?: string;
  debark_port?: string;
  duration_nights?: number;
}>> => {
  try {
    
    // Get itineraries with brand and ship information
    const { data, error } = await supabase
      .from('cruise_itineraries')
      .select(`
        id,
        name,
        header_subtitle,
        map_image,
        hero_image,
        thumbnail_image,
        earliest_departure_date,
        latest_departure_date,
        lowest_price,
        brand_id,
        cruise_brands!inner(name)
      `)
      .eq('status', 'live')
      .not('earliest_departure_date', 'is', null)
      .order('earliest_departure_date', { ascending: true })
      .limit(limit);

    if (error) {
      console.error('Error fetching featured cruise itineraries:', error);
      return [];
    }

    // Get the most recent itinerary date for each itinerary to get embark/debark ports
    const itineraryIds = data?.map(itinerary => itinerary.id) || [];
    
    if (itineraryIds.length === 0) {
      return [];
    }

    const { data: datesData, error: datesError } = await supabase
      .from('cruise_itinerary_dates')
      .select(`
        itinerary_id,
        embark_port_name,
        debark_port_name,
        date,
        end_date,
        ship_id,
        cruise_ships(name)
      `)
      .in('itinerary_id', itineraryIds)
      .order('date', { ascending: true });

    if (datesError) {
      console.error('Error fetching cruise itinerary dates:', datesError);
    }

    // Combine the data
    const result = data?.map(itinerary => {
      // Find the earliest date for this itinerary
      const itineraryDate = datesData?.find(date => date.itinerary_id === itinerary.id);
      
      // Calculate duration in nights if we have both dates
      let durationNights: number | undefined;
      if (itineraryDate?.date && itineraryDate?.end_date) {
        const startDate = new Date(itineraryDate.date);
        const endDate = new Date(itineraryDate.end_date);
        const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
        durationNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      }

      return {
        id: itinerary.id,
        name: itinerary.name,
        header_subtitle: itinerary.header_subtitle,
        map_image: itinerary.map_image || itinerary.hero_image || itinerary.thumbnail_image,
        hero_image: itinerary.hero_image,
        thumbnail_image: itinerary.thumbnail_image,
        earliest_departure_date: itinerary.earliest_departure_date,
        latest_departure_date: itinerary.latest_departure_date,
        brand_name: (itinerary.cruise_brands as any)?.name || 'Unknown Brand',
        ship_name: (itineraryDate?.cruise_ships as any)?.name,
        lowest_price: itinerary.lowest_price,
        embark_port: itineraryDate?.embark_port_name,
        debark_port: itineraryDate?.debark_port_name,
        duration_nights: durationNights
      };
    }) || [];

    return result;
  } catch (error) {
    console.error('Error fetching featured cruise itineraries:', error);
    return [];
  }
};

// Get cruise itineraries with filters and pagination
export const getCruiseItinerariesWithFilters = async (filters: {
  search?: string;
  brands?: string[];
  regions?: string[];
  durationRanges?: string[];
  travelStyles?: string[];
  page?: number;
  pageSize?: number;
}): Promise<{ data: CruiseItinerary[]; count: number }> => {
  try {
    let query = supabase
      .from('cruise_itineraries')
      .select('*', { count: 'exact' })
      .eq('status', 'live');

    // Apply search filter
    if (filters.search) {
      query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%,header_subtitle.ilike.%${filters.search}%`);
    }

    // Apply brand filter
    if (filters.brands && filters.brands.length > 0) {
      query = query.in('brand_id', filters.brands);
    }

    // Apply region filter (based on destinations field)
    if (filters.regions && filters.regions.length > 0) {
      const regionConditions = filters.regions.map(region => `destinations.ilike.%${region}%`).join(',');
      query = query.or(regionConditions);
    }

    // Apply travel style filter
    if (filters.travelStyles && filters.travelStyles.length > 0) {
      const travelStyleConditions = filters.travelStyles.map(style => `travel_styles.ilike.%${style}%`).join(',');
      query = query.or(travelStyleConditions);
    }

    // Apply pagination
    if (filters.page && filters.pageSize) {
      const from = (filters.page - 1) * filters.pageSize;
      const to = from + filters.pageSize - 1;
      query = query.range(from, to);
    }

    const { data, error, count } = await query.order('name', { ascending: true });

    if (error) {
      console.error('Error fetching cruise itineraries with filters:', error);
      return { data: [], count: 0 };
    }

    return { data: data || [], count: count || 0 };
  } catch (error) {
    console.error('Error fetching cruise itineraries with filters:', error);
    return { data: [], count: 0 };
  }
};

// Get cruise itinerary dates by itinerary ID
export const getCruiseItineraryDates = async (itineraryId: number): Promise<CruiseItineraryDate[]> => {
  try {
    const { data, error } = await supabase
      .from('cruise_itinerary_dates')
      .select('*')
      .eq('itinerary_id', itineraryId)
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching cruise itinerary dates:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching cruise itinerary dates:', error);
    return [];
  }
};

// Get cruise ship cabin types by ship ID
export const getCruiseShipCabinTypes = async (shipId: number): Promise<CruiseShipCabinType[]> => {
  try {
    const { data, error } = await supabase
      .from('cruise_ship_cabin_types')
      .select('*')
      .eq('ship_id', shipId)
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching cruise ship cabin types:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching cruise ship cabin types:', error);
    return [];
  }
};

// Get cruise itinerary date cabin types with pricing
export const getCruiseItineraryDateCabinTypes = async (itineraryDateId: number): Promise<CruiseItineraryDateCabinType[]> => {
  try {
    const { data, error } = await supabase
      .from('cruise_itinerary_date_cabin_types')
      .select('*')
      .eq('itinerary_date_id', itineraryDateId)
      .order('double_price_pp', { ascending: true });

    if (error) {
      console.error('Error fetching cruise itinerary date cabin types:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching cruise itinerary date cabin types:', error);
    return [];
  }
};

// Get featured cruise brands with statistics (for TrustedCruisePartners component)
export const getFeaturedCruiseBrands = async (limit: number = 3): Promise<Array<{
  id: number;
  name: string;
  cover?: string;
  logo_horizontal?: string;
  ship_count: number;
  itinerary_count: number;
}>> => {
  try {
    console.log('🔍 getFeaturedCruiseBrands: Fetching featured cruise brands');
    
    // Get cruise brands (without ship_count since it doesn't exist in the actual table)
    const { data: brandsData, error: brandsError } = await supabase
      .from('cruise_brands')
      .select(`
        id,
        name,
        cover,
        logo_horizontal
      `)
      .eq('is_active', true)
      .order('name', { ascending: true })
      .limit(limit);

    if (brandsError) {
      console.error('Error fetching cruise brands:', brandsError);
      return [];
    }

    if (!brandsData || brandsData.length === 0) {
      console.log('❌ getFeaturedCruiseBrands: No brands found');
      return [];
    }

    // Get ship counts and itinerary counts for each brand
    const brandIds = brandsData.map(brand => brand.id);
    
    // Get ship counts
    const { data: shipsData, error: shipsError } = await supabase
      .from('cruise_ships')
      .select('brand_id')
      .eq('is_active', true)
      .in('brand_id', brandIds);

    if (shipsError) {
      console.error('Error fetching cruise ship counts:', shipsError);
    }

    // Get itinerary counts
    const { data: itineraryData, error: itineraryError } = await supabase
      .from('cruise_itineraries')
      .select('brand_id')
      .eq('status', 'live')
      .in('brand_id', brandIds);

    if (itineraryError) {
      console.error('Error fetching cruise itinerary counts:', itineraryError);
    }

    // Count ships and itineraries per brand
    const shipCounts: { [key: number]: number } = {};
    const itineraryCounts: { [key: number]: number } = {};
    
    if (shipsData) {
      shipsData.forEach(ship => {
        shipCounts[ship.brand_id] = (shipCounts[ship.brand_id] || 0) + 1;
      });
    }
    
    if (itineraryData) {
      itineraryData.forEach(itinerary => {
        itineraryCounts[itinerary.brand_id] = (itineraryCounts[itinerary.brand_id] || 0) + 1;
      });
    }

    // Combine the data
    const result = brandsData.map(brand => ({
      id: brand.id,
      name: brand.name,
      cover: brand.cover,
      logo_horizontal: brand.logo_horizontal,
      ship_count: shipCounts[brand.id] || 0,
      itinerary_count: itineraryCounts[brand.id] || 0
    }));

    console.log('✅ getFeaturedCruiseBrands: Found', result.length, 'featured brands');
    return result;
  } catch (error) {
    console.error('Error fetching featured cruise brands:', error);
    return [];
  }
};

// Get single cruise itinerary by ID (for individual itinerary pages)
export const getCruiseItinerary = async (id: number): Promise<CruiseItinerary | null> => {
  try {
    const { data, error } = await supabase
      .from('cruise_itineraries')
      .select('*')
      .eq('id', id)
      .eq('status', 'live')
      .single();

    if (error) {
      console.error('Error fetching cruise itinerary:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching cruise itinerary:', error);
    return null;
  }
};

// Get single cruise itinerary by ID with brand and ship details (for individual itinerary pages)
export const getCruiseItineraryWithDetails = async (id: number): Promise<{
  itinerary: CruiseItinerary | null;
  brand: CruiseBrand | null;
  ship: CruiseShip | null;
  dates: CruiseItineraryDate[];
  cabinTypes: CruiseShipCabinType[];
}> => {
  try {
    console.log('🔍 getCruiseItineraryWithDetails: Fetching itinerary details for ID:', id);
    
    // Get itinerary with brand and ship information
    const { data: itineraryData, error: itineraryError } = await supabase
      .from('cruise_itineraries')
      .select(`
        *,
        cruise_brands!inner(*),
        cruise_itinerary_dates(
          *,
          cruise_ships(*)
        )
      `)
      .eq('id', id)
      .eq('status', 'live')
      .single();

    if (itineraryError) {
      console.error('Error fetching cruise itinerary with details:', itineraryError);
      return {
        itinerary: null,
        brand: null,
        ship: null,
        dates: [],
        cabinTypes: []
      };
    }

    if (!itineraryData) {
      console.log('❌ getCruiseItineraryWithDetails: No itinerary found for ID:', id);
      return {
        itinerary: null,
        brand: null,
        ship: null,
        dates: [],
        cabinTypes: []
      };
    }

    // Extract brand and ship information
    const brand = itineraryData.cruise_brands;
    const dates = itineraryData.cruise_itinerary_dates || [];
    
    // Get the first ship from the dates (assuming all dates use the same ship)
    const firstDate = dates[0];
    const ship = firstDate?.cruise_ships || null;

    // Get cabin types for the ship if available
    let cabinTypes: CruiseShipCabinType[] = [];
    if (ship?.id) {
      const { data: cabinData, error: cabinError } = await supabase
        .from('cruise_ship_cabin_types')
        .select('*')
        .eq('ship_id', ship.id)
        .order('name', { ascending: true });

      if (!cabinError && cabinData) {
        cabinTypes = cabinData;
      }
    }

    console.log('✅ getCruiseItineraryWithDetails: Found itinerary with details');
    return {
      itinerary: itineraryData,
      brand,
      ship,
      dates,
      cabinTypes
    };
  } catch (error) {
    console.error('Error fetching cruise itinerary with details:', error);
    return {
      itinerary: null,
      brand: null,
      ship: null,
      dates: [],
      cabinTypes: []
    };
  }
};

