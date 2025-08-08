-- Create HotelGallery table
CREATE TABLE IF NOT EXISTS hotelgallery (
    id SERIAL PRIMARY KEY,
    hotel_name VARCHAR(255) NOT NULL,
    hotel_image TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_hotelgallery_hotel_name ON hotelgallery(hotel_name);

-- Enable Row Level Security (RLS)
ALTER TABLE hotelgallery ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on hotelgallery" ON hotelgallery
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_hotelgallery_updated_at 
    BEFORE UPDATE ON hotelgallery 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
