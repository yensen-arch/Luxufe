import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { createLandItinerary, createLandItineraryDates } from '@/lib/database';

interface ItineraryRow {
  'Itinerary Name': string;
  'Destinations': string;
  'Duration': string;
  'Overview': string;
  'Map Data (JSON)': string;
  'Journey Highlights (comma-separated)': string;
  'Daily Itinerary (JSON)': string;
  'Good to Know (JSON)': string;
  'Hotels by Categories (JSON)': string;
}

interface ProcessedItinerary {
  itinerary_name: string;
  destinations: string;
  duration: string;
  overview: string;
  map: string;
  journey_highlights: string[];
  daily_itinerary: any[];
  good_to_know: any[];
  hotels_by_categories: any;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({
        success: false,
        message: 'No file provided',
        processedCount: 0,
        errorCount: 1,
      }, { status: 400 });
    }

    // Read the Excel file
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json<ItineraryRow>(worksheet);

    if (data.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'No data found in the Excel file',
        processedCount: 0,
        errorCount: 1,
      }, { status: 400 });
    }

    let processedCount = 0;
    let errorCount = 0;
    const errors: string[] = [];

    // Process each row
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      
      try {
        // Validate required fields
        if (!row['Itinerary Name'] || row['Itinerary Name'].trim() === '') {
          errors.push(`Row ${i + 2}: Itinerary Name is required`);
          errorCount++;
          continue;
        }

        // Parse and clean the data
        const processedItinerary: ProcessedItinerary = {
          itinerary_name: row['Itinerary Name']?.trim() || '',
          destinations: row['Destinations']?.trim() || '',
          duration: row['Duration']?.trim() || '',
          overview: row['Overview']?.trim() || '',
          map: row['Map Data (JSON)']?.trim() || '[]',
          journey_highlights: [],
          daily_itinerary: [],
          good_to_know: [],
          hotels_by_categories: {
            types: [
              { category: 'Luxury', hotels: [] },
              { category: 'Exclusive', hotels: [] },
              { category: 'Unforgettable', hotels: [] }
            ]
          }
        };

        // Parse journey highlights
        if (row['Journey Highlights (comma-separated)']) {
          processedItinerary.journey_highlights = row['Journey Highlights (comma-separated)']
            .split(',')
            .map(h => h.trim())
            .filter(h => h !== '');
        }

        // Parse daily itinerary JSON
        if (row['Daily Itinerary (JSON)']) {
          try {
            const dailyItinerary = JSON.parse(row['Daily Itinerary (JSON)']);
            if (Array.isArray(dailyItinerary)) {
              processedItinerary.daily_itinerary = dailyItinerary;
            }
          } catch (e) {
            console.warn(`Row ${i + 2}: Invalid Daily Itinerary JSON`);
          }
        }

        // Parse good to know JSON
        if (row['Good to Know (JSON)']) {
          try {
            const goodToKnow = JSON.parse(row['Good to Know (JSON)']);
            if (Array.isArray(goodToKnow)) {
              processedItinerary.good_to_know = goodToKnow;
            }
          } catch (e) {
            console.warn(`Row ${i + 2}: Invalid Good to Know JSON`);
          }
        }

        // Parse hotels by categories JSON
        if (row['Hotels by Categories (JSON)']) {
          try {
            const hotelsByCategories = JSON.parse(row['Hotels by Categories (JSON)']);
            if (hotelsByCategories && hotelsByCategories.types) {
              processedItinerary.hotels_by_categories = hotelsByCategories;
            }
          } catch (e) {
            console.warn(`Row ${i + 2}: Invalid Hotels by Categories JSON`);
          }
        }

        // Create the itinerary
        const createdItinerary = await createLandItinerary(processedItinerary);
        
        if (createdItinerary) {
          processedCount++;
          console.log(`Successfully created itinerary: ${processedItinerary.itinerary_name}`);
        } else {
          errors.push(`Row ${i + 2}: Failed to create itinerary "${processedItinerary.itinerary_name}"`);
          errorCount++;
        }

      } catch (error: any) {
        console.error(`Error processing row ${i + 2}:`, error);
        errors.push(`Row ${i + 2}: ${error.message || 'Unknown error'}`);
        errorCount++;
      }
    }

    const success = processedCount > 0;
    const message = success 
      ? `Successfully processed ${processedCount} itineraries${errorCount > 0 ? ` with ${errorCount} errors` : ''}`
      : 'Failed to process any itineraries';

    return NextResponse.json({
      success,
      message,
      processedCount,
      errorCount,
      errors: errors.length > 0 ? errors : undefined,
    });

  } catch (error: any) {
    console.error('Bulk upload error:', error);
    return NextResponse.json({
      success: false,
      message: error.message || 'Internal server error',
      processedCount: 0,
      errorCount: 1,
    }, { status: 500 });
  }
}
