-- Create Cruise Ships table
CREATE TABLE IF NOT EXISTS cruise_ships (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    brand_id INTEGER NOT NULL REFERENCES cruise_brands(id) ON DELETE CASCADE,
    capacity VARCHAR(50),
    title VARCHAR(255),
    description TEXT,
    seo_meta_description TEXT,
    ship_cover TEXT,
    ship_thumbnail TEXT,
    built VARCHAR(50),
    refurbished VARCHAR(50),
    external_id VARCHAR(255),
    widgety_api_href TEXT,
    is_active BOOLEAN DEFAULT true,
    sanity_id VARCHAR(255),
    sanity_slug VARCHAR(255),
    ship_type VARCHAR(100),
    deck_plan TEXT,
    length VARCHAR(50),
    width DECIMAL(8,2),
    cruising_speed DECIMAL(5,2),
    crew_size INTEGER,
    number_cabins INTEGER,
    has_us_plugs BOOLEAN,
    dining_options TEXT,
    dining_description TEXT,
    enrichment_description TEXT,
    enrichment_types TEXT,
    entertainment_description TEXT,
    entertainment_types TEXT,
    health_fitness_description TEXT,
    health_fitness_types TEXT,
    useful_types TEXT,
    deck_images TEXT,
    travel_styles TEXT,
    gallery TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_cruise_ships_name ON cruise_ships(name);
CREATE INDEX IF NOT EXISTS idx_cruise_ships_brand_id ON cruise_ships(brand_id);
CREATE INDEX IF NOT EXISTS idx_cruise_ships_external_id ON cruise_ships(external_id);
CREATE INDEX IF NOT EXISTS idx_cruise_ships_sanity_id ON cruise_ships(sanity_id);
CREATE INDEX IF NOT EXISTS idx_cruise_ships_sanity_slug ON cruise_ships(sanity_slug);
CREATE INDEX IF NOT EXISTS idx_cruise_ships_is_active ON cruise_ships(is_active);
CREATE INDEX IF NOT EXISTS idx_cruise_ships_ship_type ON cruise_ships(ship_type);

-- Enable Row Level Security (RLS)
ALTER TABLE cruise_ships ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on cruise_ships" ON cruise_ships
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_cruise_ships_updated_at 
    BEFORE UPDATE ON cruise_ships 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
