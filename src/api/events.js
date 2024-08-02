// api/events.js

import { fetchEvents } from '../../lib/fetchEvents';

export default async function handler(req, res) {
  try {
    const events = await fetchEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
}
