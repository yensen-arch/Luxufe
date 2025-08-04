import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for your database tables
export interface Brand {
  id: string
  brand_name: string
  hotel_name: string
  created_at: string
  updated_at: string
}

export interface Hotel {
  id: string
  hotel_name: string
  room_type: string
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
}

export interface Room {
  id: string
  room_type: string
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
} 