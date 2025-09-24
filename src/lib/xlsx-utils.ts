import * as XLSX from 'xlsx';

export interface ItineraryTemplateRow {
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

export function generateSampleItineraryData(): ItineraryTemplateRow[] {
  return [
    {
      'Itinerary Name': 'Sample Morocco Adventure',
      'Destinations': 'Morocco, Marrakech, Atlas Mountains',
      'Duration': '8 days / 7 nights',
      'Overview': 'Experience the magic of Morocco with this unforgettable journey through ancient cities, stunning landscapes, and authentic cultural encounters.',
      'Map Data (JSON)': JSON.stringify([
        {
          latitude: '31.6295',
          longitude: '-7.9811',
          key_dates: '2024-10-15',
          day_number: 1
        },
        {
          latitude: '31.6295',
          longitude: '-7.9811',
          key_dates: '2024-10-16',
          day_number: 2
        }
      ]),
      'Journey Highlights (comma-separated)': 'Visit bustling Marrakech souks, Explore Atlas Mountains, Experience traditional Berber culture, Discover ancient medinas, Enjoy authentic Moroccan cuisine',
      'Daily Itinerary (JSON)': JSON.stringify([
        {
          days: 'Day 1',
          title: 'Arrival in Marrakech',
          description: 'Welcome to Morocco! Arrive in Marrakech and transfer to your luxury riad in the heart of the medina.'
        },
        {
          days: 'Day 2',
          title: 'Marrakech City Tour',
          description: 'Explore the vibrant souks, visit the Bahia Palace, and discover the hidden gems of the Red City.'
        },
        {
          days: 'Day 3',
          title: 'Atlas Mountains Excursion',
          description: 'Journey to the Atlas Mountains for a day of hiking and cultural encounters with Berber communities.'
        }
      ]),
      'Good to Know (JSON)': JSON.stringify([
        {
          question: 'What should I pack?',
          answer: 'Comfortable walking shoes, lightweight clothing, sun hat, and a warm layer for mountain excursions.'
        },
        {
          question: 'Is it safe to travel?',
          answer: 'Morocco is generally safe for tourists. We provide 24/7 support and experienced local guides.'
        },
        {
          question: 'What about dietary requirements?',
          answer: 'We can accommodate vegetarian, vegan, and other dietary requirements with advance notice.'
        }
      ]),
      'Hotels by Categories (JSON)': JSON.stringify({
        types: [
          {
            category: 'Luxury',
            hotels: [
              {
                name: 'Royal Mansour Marrakech',
                city: 'Marrakech',
                country: 'Morocco',
                day: 'Day 1-3'
              }
            ]
          },
          {
            category: 'Exclusive',
            hotels: [
              {
                name: 'La Mamounia',
                city: 'Marrakech',
                country: 'Morocco',
                day: 'Day 1-3'
              }
            ]
          },
          {
            category: 'Unforgettable',
            hotels: [
              {
                name: 'Kasbah Tamadot',
                city: 'Atlas Mountains',
                country: 'Morocco',
                day: 'Day 3-4'
              }
            ]
          }
        ]
      })
    },
    {
      'Itinerary Name': 'Safari Adventure Kenya',
      'Destinations': 'Kenya, Nairobi, Maasai Mara',
      'Duration': '6 days / 5 nights',
      'Overview': 'Embark on an unforgettable safari adventure in Kenya, home to the Big Five and spectacular wildlife.',
      'Map Data (JSON)': JSON.stringify([
        {
          latitude: '-1.2921',
          longitude: '36.8219',
          key_dates: '2024-11-01',
          day_number: 1
        },
        {
          latitude: '-1.4024',
          longitude: '35.0103',
          key_dates: '2024-11-02',
          day_number: 2
        }
      ]),
      'Journey Highlights (comma-separated)': 'Game drives in Maasai Mara, Visit to elephant orphanage, Cultural encounters with Maasai people, Witness the Great Migration, Luxury safari camp experience',
      'Daily Itinerary (JSON)': JSON.stringify([
        {
          days: 'Day 1',
          title: 'Arrival in Nairobi',
          description: 'Arrive in Nairobi and transfer to your hotel. Optional visit to the David Sheldrick Wildlife Trust.'
        },
        {
          days: 'Day 2',
          title: 'Flight to Maasai Mara',
          description: 'Take a scenic flight to the Maasai Mara and settle into your luxury safari camp.'
        },
        {
          days: 'Day 3',
          title: 'Full Day Safari',
          description: 'Early morning and afternoon game drives to spot the Big Five and other wildlife.'
        }
      ]),
      'Good to Know (JSON)': JSON.stringify([
        {
          question: 'What animals might I see?',
          answer: 'The Big Five (lion, leopard, elephant, buffalo, rhino), cheetahs, zebras, giraffes, and hundreds of bird species.'
        },
        {
          question: 'What is the best time to visit?',
          answer: 'July to October for the Great Migration, or December to March for excellent wildlife viewing.'
        }
      ]),
      'Hotels by Categories (JSON)': JSON.stringify({
        types: [
          {
            category: 'Luxury',
            hotels: [
              {
                name: 'Giraffe Manor',
                city: 'Nairobi',
                country: 'Kenya',
                day: 'Day 1'
              }
            ]
          },
          {
            category: 'Exclusive',
            hotels: [
              {
                name: 'Angama Mara',
                city: 'Maasai Mara',
                country: 'Kenya',
                day: 'Day 2-5'
              }
            ]
          },
          {
            category: 'Unforgettable',
            hotels: [
              {
                name: 'Mahali Mzuri',
                city: 'Maasai Mara',
                country: 'Kenya',
                day: 'Day 2-5'
              }
            ]
          }
        ]
      })
    }
  ];
}

export function downloadSampleXLSX(): void {
  const data = generateSampleItineraryData();
  
  // Create a new workbook
  const workbook = XLSX.utils.book_new();
  
  // Create a worksheet from the data
  const worksheet = XLSX.utils.json_to_sheet(data);
  
  // Set column widths for better readability
  const columnWidths = [
    { wch: 20 }, // Itinerary Name
    { wch: 30 }, // Destinations
    { wch: 15 }, // Duration
    { wch: 50 }, // Overview
    { wch: 40 }, // Map Data
    { wch: 60 }, // Journey Highlights
    { wch: 80 }, // Daily Itinerary
    { wch: 60 }, // Good to Know
    { wch: 80 }  // Hotels by Categories
  ];
  worksheet['!cols'] = columnWidths;
  
  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Land Itineraries');
  
  // Generate the file and download it
  XLSX.writeFile(workbook, 'land_itineraries_sample.xlsx');
}
