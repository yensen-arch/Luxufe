import { supabase } from './supabase'

// Updated interfaces to match your actual schema
export interface Brand {
  id: string
  created_at: string
  name: string
  description?: string
  logo?: string
}

export interface Hotel {
  id: string
  hotel_name: string
  latitude?: number
  longitude?: number
  map_link?: string
  hotel_link?: string
  country: string
  city: string
  address?: string
  description?: string
  created_at: string
  updated_at: string
  brand?: string
  gallery?: string[]
}

export interface Room {
  id: string
  accommodation_type: string
  amenities?: string[]
  room_url?: string
  room_name: string
  room_size?: string
  occupancy?: number
  bed?: string
  bath?: string
  view?: string
  floors?: string
  created_at: string
  updated_at: string
  description?: string
  features?: string[]
  hotel_name?: string
}

export interface HotelGallery {
  id: string
  hotel_name: string
  hotel_image: string[]
}

export interface RoomGallery {
  id: string
  hotel_name: string
  room_name: string
  room_image: string[]
}

// Brand operations
export const getBrands = async () => {
  console.log('🔍 Fetching brands from Supabase...')
  
  const { data, error } = await supabase
    .from('brands')
    .select('*')
    .order('name')
  
  if (error) {
    console.error('❌ Error fetching brands:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched brands:', data?.length || 0, 'records')
  return data as Brand[]
}

export const getBrandById = async (id: string) => {
  console.log('🔍 Fetching brand by ID:', id)
  
  const { data, error } = await supabase
    .from('brands')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('❌ Error fetching brand by ID:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched brand:', data)
  return data as Brand
}

export const getBrandByName = async (name: string) => {
  console.log('🔍 Fetching brand by name:', name)
  
  const { data, error } = await supabase
    .from('brands')
    .select('*')
    .eq('name', name)
    .single()
  
  if (error) {
    console.error('❌ Error fetching brand by name:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched brand:', data)
  return data as Brand
}

// Hotel operations
export const getHotels = async () => {
  console.log('🔍 Fetching hotels from Supabase...')
  
  const { data, error } = await supabase
    .from('hotels')
    .select('*')
    .order('hotel_name')
  
  if (error) {
    console.error('❌ Error fetching hotels:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched hotels:', data?.length || 0, 'records')
  return data as Hotel[]
}

export const getHotelsByBrand = async (brand: string) => {
  console.log('🔍 Fetching hotels by brand:', brand)
  
  const { data, error } = await supabase
    .from('hotels')
    .select('*')
    .eq('brand', brand)
    .order('hotel_name')
  
  if (error) {
    console.error('❌ Error fetching hotels by brand:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched hotels by brand:', data?.length || 0, 'records')
  return data as Hotel[]
}

export const getHotelsByCountry = async (country: string) => {
  console.log('🔍 Fetching hotels by country:', country)
  
  const { data, error } = await supabase
    .from('hotels')
    .select('*')
    .eq('country', country)
    .order('hotel_name')
  
  if (error) {
    console.error('❌ Error fetching hotels by country:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched hotels by country:', data?.length || 0, 'records')
  return data as Hotel[]
}

export const getHotelsByCity = async (city: string) => {
  console.log('🔍 Fetching hotels by city:', city)
  
  const { data, error } = await supabase
    .from('hotels')
    .select('*')
    .eq('city', city)
    .order('hotel_name')
  
  if (error) {
    console.error('❌ Error fetching hotels by city:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched hotels by city:', data?.length || 0, 'records')
  return data as Hotel[]
}

export const getHotelById = async (id: string) => {
  console.log('🔍 Fetching hotel by ID:', id)
  
  const { data, error } = await supabase
    .from('hotels')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('❌ Error fetching hotel by ID:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched hotel:', data)
  return data as Hotel
}

// Room operations
export const getRooms = async () => {
  console.log('🔍 Fetching rooms from Supabase...')
  
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .order('room_name')
  
  if (error) {
    console.error('❌ Error fetching rooms:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched rooms:', data?.length || 0, 'records')
  return data as Room[]
}

export const getRoomsByHotel = async (hotelName: string) => {
  console.log('🔍 Fetching rooms by hotel:', hotelName)
  
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .eq('hotel_name', hotelName)
    .order('room_name')
  
  if (error) {
    console.error('❌ Error fetching rooms by hotel:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched rooms by hotel:', data?.length || 0, 'records')
  return data as Room[]
}

export const getRoomsByAccommodationType = async (accommodationType: string) => {
  console.log('🔍 Fetching rooms by accommodation type:', accommodationType)
  
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .eq('accommodation_type', accommodationType)
    .order('room_name')
  
  if (error) {
    console.error('❌ Error fetching rooms by accommodation type:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched rooms by accommodation type:', data?.length || 0, 'records')
  return data as Room[]
}

export const getRoomById = async (id: string) => {
  console.log('🔍 Fetching room by ID:', id)
  
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('❌ Error fetching room by ID:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched room:', data)
  return data as Room
}

// Gallery operations
export const getHotelGallery = async (hotelName: string) => {
  console.log('🔍 Fetching hotel gallery for:', hotelName)
  
  const { data, error } = await supabase
    .from('hotelgallery')
    .select('*')
    .eq('hotel_name', hotelName)
    .single()
  
  if (error) {
    console.error('❌ Error fetching hotel gallery:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched hotel gallery:', data)
  return data as HotelGallery
}

export const getRoomGallery = async (hotelName: string, roomName: string) => {
  console.log('🔍 Fetching room gallery for:', hotelName, roomName)
  
  const { data, error } = await supabase
    .from('roomgallery')
    .select('*')
    .eq('hotel_name', hotelName)
    .eq('room_name', roomName)
    .single()
  
  if (error) {
    console.error('❌ Error fetching room gallery:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched room gallery:', data)
  return data as RoomGallery
}

// Advanced filtering functions for brand pages
export const getHotelsWithFilters = async (filters: {
  brand?: string;
  search?: string;
  countries?: string[];
  typeOfTravel?: string[];
}) => {
  console.log('🔍 Fetching hotels with filters:', filters)
  
  let query = supabase
    .from('hotels')
    .select('*')
    .order('hotel_name')
  
  // Filter by brand
  if (filters.brand) {
    query = query.eq('brand', filters.brand)
  }
  
  // Filter by search term
  if (filters.search) {
    query = query.or(`hotel_name.ilike.%${filters.search}%,description.ilike.%${filters.search}%,city.ilike.%${filters.search}%`)
  }
  
  // Filter by countries
  if (filters.countries && filters.countries.length > 0) {
    query = query.in('country', filters.countries)
  }
  
  const { data, error } = await query
  
  if (error) {
    console.error('❌ Error fetching hotels with filters:', error)
    throw error
  }
  
  console.log('✅ Successfully fetched hotels with filters:', data?.length || 0, 'records')
  return data as Hotel[]
}

// Get unique countries for filtering
export const getUniqueCountries = async () => {
  console.log('🔍 Fetching unique countries...')
  
  const { data, error } = await supabase
    .from('hotels')
    .select('country')
    .order('country')
  
  if (error) {
    console.error('❌ Error fetching unique countries:', error)
    throw error
  }
  
  const uniqueCountries = [...new Set(data?.map(hotel => hotel.country) || [])]
  console.log('✅ Successfully fetched unique countries:', uniqueCountries.length, 'countries')
  return uniqueCountries
}

// Get hotels with gallery data for brand pages
export const getHotelsWithGallery = async (brand: string) => {
  console.log('🔍 Fetching hotels with gallery for brand:', brand)
  
  const { data: hotels, error: hotelsError } = await supabase
    .from('hotels')
    .select('*')
    .eq('brand', brand)
    .order('hotel_name')
  
  if (hotelsError) {
    console.error('❌ Error fetching hotels:', hotelsError)
    throw hotelsError
  }
  
  // Fetch gallery data for each hotel
  const hotelsWithGallery = await Promise.all(
    hotels.map(async (hotel) => {
      try {
        const { data: gallery } = await supabase
          .from('hotelgallery')
          .select('hotel_image')
          .eq('hotel_name', hotel.hotel_name)
          .single()
        
        return {
          ...hotel,
          gallery: gallery?.hotel_image || []
        }
      } catch (error) {
        console.warn(`⚠️ No gallery found for hotel: ${hotel.hotel_name}`)
        return {
          ...hotel,
          gallery: []
        }
      }
    })
  )
  
  console.log('✅ Successfully fetched hotels with gallery:', hotelsWithGallery.length, 'records')
  return hotelsWithGallery
}

// Optimized function to get hotels with filters and gallery data
export const getHotelsWithFiltersAndGallery = async (filters: {
  brand?: string;
  search?: string;
  countries?: string[];
  typeOfTravel?: string[];
}) => {
  console.log('🔍 Fetching hotels with filters and gallery:', filters)
  
  let query = supabase
    .from('hotels')
    .select('*')
    .order('hotel_name')
  
  // Filter by brand
  if (filters.brand) {
    query = query.eq('brand', filters.brand)
  }
  
  // Filter by search term
  if (filters.search) {
    query = query.or(`hotel_name.ilike.%${filters.search}%,description.ilike.%${filters.search}%,city.ilike.%${filters.search}%`)
  }
  
  // Filter by countries
  if (filters.countries && filters.countries.length > 0) {
    query = query.in('country', filters.countries)
  }
  
  const { data: hotels, error } = await query
  
  if (error) {
    console.error('❌ Error fetching hotels with filters:', error)
    throw error
  }
  
  // Fetch gallery data for each hotel
  const hotelsWithGallery = await Promise.all(
    (hotels || []).map(async (hotel) => {
      try {
        const { data: gallery } = await supabase
          .from('hotelgallery')
          .select('hotel_image')
          .eq('hotel_name', hotel.hotel_name)
          .single()
        
        return {
          ...hotel,
          gallery: gallery?.hotel_image || []
        }
      } catch (error) {
        console.warn(`⚠️ No gallery found for hotel: ${hotel.hotel_name}`)
        return {
          ...hotel,
          gallery: []
        }
      }
    })
  )
  
  console.log('✅ Successfully fetched hotels with filters and gallery:', hotelsWithGallery.length, 'records')
  return hotelsWithGallery
}

