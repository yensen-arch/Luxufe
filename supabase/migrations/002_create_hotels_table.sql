-- Create Hotels table
CREATE TABLE IF NOT EXISTS hotels (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    hotel_name VARCHAR(255) NOT NULL,
    room_type VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    map_link TEXT,
    hotel_link TEXT,
    country VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    address TEXT,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_hotels_hotel_name ON hotels(hotel_name);
CREATE INDEX IF NOT EXISTS idx_hotels_room_type ON hotels(room_type);
CREATE INDEX IF NOT EXISTS idx_hotels_country ON hotels(country);
CREATE INDEX IF NOT EXISTS idx_hotels_city ON hotels(city);
CREATE INDEX IF NOT EXISTS idx_hotels_location ON hotels(latitude, longitude);

-- Enable Row Level Security (RLS)
ALTER TABLE hotels ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on hotels" ON hotels
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_hotels_updated_at 
    BEFORE UPDATE ON hotels 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column(); 