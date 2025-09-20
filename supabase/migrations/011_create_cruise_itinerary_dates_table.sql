-- Create Cruise Itinerary Dates table
CREATE TABLE IF NOT EXISTS cruise_itinerary_dates (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    itinerary_id INTEGER NOT NULL REFERENCES cruise_itineraries(id) ON DELETE CASCADE,
    embark_port_name VARCHAR(255),
    debark_port_name VARCHAR(255),
    date DATE NOT NULL,
    name VARCHAR(255),
    ship_id INTEGER REFERENCES cruise_ships(id),
    schedule JSONB, -- Store the detailed schedule as JSON
    extensions JSONB, -- Store extensions as JSON array
    external_id VARCHAR(255),
    additional_ship_ids TEXT,
    end_date DATE,
    brand_id INTEGER REFERENCES cruise_brands(id),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_dates_itinerary_id ON cruise_itinerary_dates(itinerary_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_dates_date ON cruise_itinerary_dates(date);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_dates_ship_id ON cruise_itinerary_dates(ship_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_dates_brand_id ON cruise_itinerary_dates(brand_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_dates_external_id ON cruise_itinerary_dates(external_id);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_dates_embark_port ON cruise_itinerary_dates(embark_port_name);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_dates_debark_port ON cruise_itinerary_dates(debark_port_name);
CREATE INDEX IF NOT EXISTS idx_cruise_itinerary_dates_schedule ON cruise_itinerary_dates USING GIN(schedule);

-- Enable Row Level Security (RLS)
ALTER TABLE cruise_itinerary_dates ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can modify this based on your security requirements)
CREATE POLICY "Allow all operations on cruise_itinerary_dates" ON cruise_itinerary_dates
    FOR ALL USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_cruise_itinerary_dates_updated_at 
    BEFORE UPDATE ON cruise_itinerary_dates 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
