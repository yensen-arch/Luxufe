import { supabase, Brand, Hotel, Room } from './supabase'

// Brand operations
export const getBrands = async () => {
  const { data, error } = await supabase
    .from('brands')
    .select('*')
    .order('brand_name')
  
  if (error) throw error
  return data as Brand[]
}

export const getBrandById = async (id: string) => {
  const { data, error } = await supabase
    .from('brands')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data as Brand
}

// Hotel operations
export const getHotels = async () => {
  const { data, error } = await supabase
    .from('hotels')
    .select('*')
    .order('hotel_name')
  
  if (error) throw error
  return data as Hotel[]
}

export const getHotelsByCountry = async (country: string) => {
  const { data, error } = await supabase
    .from('hotels')
    .select('*')
    .eq('country', country)
    .order('hotel_name')
  
  if (error) throw error
  return data as Hotel[]
}

export const getHotelsByCity = async (city: string) => {
  const { data, error } = await supabase
    .from('hotels')
    .select('*')
    .eq('city', city)
    .order('hotel_name')
  
  if (error) throw error
  return data as Hotel[]
}

export const getHotelById = async (id: string) => {
  const { data, error } = await supabase
    .from('hotels')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data as Hotel
}

// Room operations
export const getRooms = async () => {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .order('room_name')
  
  if (error) throw error
  return data as Room[]
}

export const getRoomsByType = async (roomType: string) => {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .eq('room_type', roomType)
    .order('room_name')
  
  if (error) throw error
  return data as Room[]
}

export const getRoomById = async (id: string) => {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data as Room
}

