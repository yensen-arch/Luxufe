-- Create Cruise Ship Cabin Types table
CREATE TABLE IF NOT EXISTS cruise_ship_cabin_types (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    images TEXT,
    square_feet VARCHAR(50),
    cabin_amenities TEXT,
    external_cabin_name VARCHAR(255),
    ship_id INTEGER NOT NULL REFERENCES cruise_ships(id) ON DELETE CASCADE,
    grade_codes TEXT[], -- Array of grade codes like ["DX"]
    wheelchair_accessible VARCHAR(50),
    max_occupancy VARCHAR(50),
    room_layout_image TEXT,
    capacity VARCHAR(50),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_cruise_ship_cabin_types_name ON cruise_ship_cabin_types(name);
CREATE INDEX IF NOT EXISTS idx_cruise_ship_cabin_types_ship_id ON cruise_ship_cabin_types(ship_id);
CREATE INDEX IF NOT EXISTS idx_cruise_ship_cabin_types_external_cabin_name ON cruise_ship_cabin_types(external_cabin_name);
CREATE INDEX IF NOT EXISTS idx_cruise_ship_cabin_types_grade_codes ON cruise_ship_cabin_types USING GIN(grade_codes);
CREATE INDEX IF NOT EXISTS idx_cruise_ship_cabin_types_wheelchair_accessible ON cruise_ship_cabin_types(wheelchair_accessible);
CREATE INDEX IF NOT EXISTS idx_cruise_ship_cabin_types_max_occupancy ON cruise_ship_cabin_types(max_occupancy);

-- Enable Row Level Security (RLS)
ALTER TABLE cruise_ship_cabin_types ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on cruise_ship_cabin_types" ON cruise_ship_cabin_types
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_cruise_ship_cabin_types_updated_at 
    BEFORE UPDATE ON cruise_ship_cabin_types 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
