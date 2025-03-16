// src/services/trackService.js
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

//All tracks 
const index = async () => {
  try {
    const res = await fetch(BASE_URL); 
    if (!res.ok) throw new Error('Failed to fetch tracks'); 
    return await res.json();
  } catch (err) {
    console.error('Error', err.message);
    return [];
  }
};

// Get track by ID 
export const getTrack = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error('Failed to fetch track');
    return await res.json();
  } catch (err) {
    console.error('Error en getTrack():', err.message);
    return null;
  }
};

// Add new track 
export const addTrack = async (track) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(track),
    });
    if (!res.ok) throw new Error('Failed to add track');
    return await res.json();
  } catch (err) {
    console.error('Error en addTrack():', err.message);
    return null;
  }
};

//Update track
export const updateTrack = async (id, track) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(track),
    });
    if (!res.ok) throw new Error('Failed to update track');
    return await res.json();
  } catch (err) {
    console.error('Error en updateTrack():', err.message);
    return null;
  }
};

//Delete track 
export const deleteTrack = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete track');
    return await res.json();
  } catch (err) {
    console.error('Error en deleteTrack():', err.message);
    return null;
  }
};

export { index };