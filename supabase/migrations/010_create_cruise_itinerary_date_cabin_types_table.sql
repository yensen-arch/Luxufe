-- Create Cruise Itinerary Date Cabin Types table
CREATE TABLE IF NOT EXISTS cruise_itinerary_date_cabin_types (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    room_type VARCHAR(100),
    grade_code VARCHAR(50),
    double_price_pp VARCHAR(50),
    promo_double_price_pp VARCHAR(50),
    single_price_pp VARCHAR(50),
    promo_single_price_pp VARCHAR(50),
    airfare_pp VARCHAR(50),
    promo_airfare_pp VARCHAR(50),
    ss_essential_double_price_pp VARCHAR(50),
    ss_essential_single_price_pp VARCHAR(50),
    onboard_credit VARCHAR(50),
    availability VARCHAR(50),
    ship_cabin_type_id VARCHAR(50),
    itinerary_date_id VARCHAR(50),
    ship_id VARCHAR(50),
    brand_id VARCHAR(50),
    internal_airfare VARCHAR(50),
    request_only VARCHAR(50),
    promo_text TEXT,
    disclaimer TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_date_cabin_types_name ON cruise_itinerary_date_cabin_types(name);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_date_cabin_types_room_type ON cruise_itinerary_date_cabin_types(room_type);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_date_cabin_types_grade_code ON cruise_itinerary_date_cabin_types(grade_code);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_date_cabin_types_ship_cabin_type_id ON cruise_itinerary_date_cabin_types(ship_cabin_type_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_date_cabin_types_itinerary_date_id ON cruise_itinerary_date_cabin_types(itinerary_date_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_date_cabin_types_ship_id ON cruise_itinerary_date_cabin_types(ship_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_date_cabin_types_brand_id ON cruise_itinerary_date_cabin_types(brand_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_date_cabin_types_availability ON cruise_itinerary_date_cabin_types(availability);

-- Enable Row Level Security (RLS)
ALTER TABLE cruise_itinerary_date_cabin_types ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on cruise_itinerary_date_cabin_types" ON cruise_itinerary_date_cabin_types
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_cruise_itinerary_date_cabin_types_updated_at 
    BEFORE UPDATE ON cruise_itinerary_date_cabin_types 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
