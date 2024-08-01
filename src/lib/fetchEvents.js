import dotenv from 'dotenv';
dotenv.config();

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const API_KEY = process.env.GOOGLE_API_KEY;

export async function fetchEvents() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.values) {
      throw new Error('No data found in Google Sheet.');
    }
    
    const rows = data.values.slice(1); // Skip header row
    return rows.map(row => ({
      name: row[0],
      date: row[1],
      endDate: row[2],
      location: row[3],
      status: row[4],
      description: row[5],
      url: row[6]
    }));
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}
