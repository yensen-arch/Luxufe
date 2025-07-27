-- Create Brands table
CREATE TABLE IF NOT EXISTS brands (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    brand_name VARCHAR(255) NOT NULL,
    hotel_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on brand_name for better query performance
CREATE INDEX IF NOT EXISTS idx_brands_brand_name ON brands(brand_name);

-- Create index on hotel_name for better query performance
CREATE INDEX IF NOT EXISTS idx_brands_hotel_name ON brands(hotel_name);

-- Enable Row Level Security (RLS)
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on brands" ON brands
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_brands_updated_at 
    BEFORE UPDATE ON brands 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column(); 