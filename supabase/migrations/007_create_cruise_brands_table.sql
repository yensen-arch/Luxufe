-- Create Cruise Brands table
CREATE TABLE IF NOT EXISTS cruise_brands (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    logo_horizontal TEXT,
    cover TEXT,
    year_founded VARCHAR(10),
    external_id VARCHAR(255),
    brand_video_url TEXT,
    widgety_api_href TEXT,
    is_active BOOLEAN DEFAULT true,
    widgety_uses_cruises_and_tours_api BOOLEAN DEFAULT false,
    sanity_id VARCHAR(255),
    sanity_slug VARCHAR(255),
    type VARCHAR(50) DEFAULT 'ocean',
    sync_source VARCHAR(100),
    ship_count INTEGER DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_cruise_brands_name ON cruise_brands(name);
CREATE INDEX IF NOT EXISTS idx_cruise_brands_external_id ON cruise_brands(external_id);
CREATE INDEX IF NOT EXISTS idx_cruise_brands_sanity_id ON cruise_brands(sanity_id);
CREATE INDEX IF NOT EXISTS idx_cruise_brands_sanity_slug ON cruise_brands(sanity_slug);
CREATE INDEX IF NOT EXISTS idx_cruise_brands_type ON cruise_brands(type);
CREATE INDEX IF NOT EXISTS idx_cruise_brands_is_active ON cruise_brands(is_active);

-- Enable Row Level Security (RLS)
ALTER TABLE cruise_brands ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on cruise_brands" ON cruise_brands
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_cruise_brands_updated_at 
    BEFORE UPDATE ON cruise_brands 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
