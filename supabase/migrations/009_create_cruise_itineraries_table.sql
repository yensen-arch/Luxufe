-- Create Cruise Itineraries table
CREATE TABLE IF NOT EXISTS cruise_itineraries (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    brand_id INTEGER NOT NULL REFERENCES cruise_brands(id) ON DELETE CASCADE,
    status VARCHAR(50) DEFAULT 'live',
    name VARCHAR(255) NOT NULL,
    description TEXT,
    short_description TEXT,
    header_subtitle TEXT,
    seo_meta_description TEXT,
    journey_summary TEXT,
    itinerary_highlights TEXT,
    extra TEXT,
    inclusions TEXT,
    exclusions TEXT,
    rivers TEXT[], -- Array of river IDs
    travel_styles TEXT[], -- Array of travel style IDs
    thumbnail_image TEXT,
    map_image TEXT,
    external_id VARCHAR(255),
    mc_tags TEXT[], -- Array of marketing tags
    mc_booked_tags TEXT[], -- Array of booked marketing tags
    lowest_price VARCHAR(50),
    earliest_departure_date DATE,
    latest_departure_date DATE,
    booked_clients INTEGER DEFAULT 0,
    widgety_api_href TEXT,
    sanity_id VARCHAR(255),
    sanity_slug VARCHAR(255),
    hero_image TEXT,
    countries TEXT[], -- Array of country IDs
    destinations TEXT[], -- Array of destination IDs
    is_special VARCHAR(50),
    associated_itineraries TEXT,
    gallery TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_name ON cruise_itineraries(name);
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_brand_id ON cruise_itineraries(brand_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_status ON cruise_itineraries(status);
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_external_id ON cruise_itineraries(external_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_sanity_id ON cruise_itineraries(sanity_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_sanity_slug ON cruise_itineraries(sanity_slug);
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_earliest_departure ON cruise_itineraries(earliest_departure_date);
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_latest_departure ON cruise_itineraries(latest_departure_date);
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_travel_styles ON cruise_itineraries USING GIN(travel_styles);
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_destinations ON cruise_itineraries USING GIN(destinations);
CREATE INDEX IF NOT EXISTS idx_cruise_itineraries_countries ON cruise_itineraries USING GIN(countries);

-- Enable Row Level Security (RLS)
ALTER TABLE cruise_itineraries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on cruise_itineraries" ON cruise_itineraries
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_cruise_itineraries_updated_at 
    BEFORE UPDATE ON cruise_itineraries 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
