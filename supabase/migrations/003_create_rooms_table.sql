-- Create Rooms table
CREATE TABLE IF NOT EXISTS rooms (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    room_type VARCHAR(255) NOT NULL,
    accommodation_type VARCHAR(255) NOT NULL,
    amenities TEXT[], -- Array of amenities
    room_url TEXT,
    room_name VARCHAR(255) NOT NULL,
    room_size VARCHAR(100),
    occupancy INTEGER,
    bed VARCHAR(255),
    bath VARCHAR(255),
    view VARCHAR(255),
    floors VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_rooms_room_type ON rooms(room_type);
CREATE INDEX IF NOT EXISTS idx_rooms_accommodation_type ON rooms(accommodation_type);
CREATE INDEX IF NOT EXISTS idx_rooms_room_name ON rooms(room_name);
CREATE INDEX IF NOT EXISTS idx_rooms_occupancy ON rooms(occupancy);

-- Enable Row Level Security (RLS)
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on rooms" ON rooms
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_rooms_updated_at 
    BEFORE UPDATE ON rooms 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column(); 