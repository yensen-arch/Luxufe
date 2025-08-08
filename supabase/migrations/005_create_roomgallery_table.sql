-- Create RoomGallery table
CREATE TABLE IF NOT EXISTS roomgallery (
    id SERIAL PRIMARY KEY,
    room_name VARCHAR(255) NOT NULL,
    hotel_name VARCHAR(255) NOT NULL,
    room_image TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_roomgallery_room_name ON roomgallery(room_name);
CREATE INDEX IF NOT EXISTS idx_roomgallery_hotel_name ON roomgallery(hotel_name);
CREATE INDEX IF NOT EXISTS idx_roomgallery_room_hotel ON roomgallery(room_name, hotel_name);

-- Enable Row Level Security (RLS)
ALTER TABLE roomgallery ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on roomgallery" ON roomgallery
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_roomgallery_updated_at 
    BEFORE UPDATE ON roomgallery 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
