// src/services/trackService.js
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Failed to fetch tracks');
    return res.json();
  } catch (err) {
    console.log('Error fetching tracks:', err.message);
  }
};

const create = async (formData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Failed to create track');
    return res.json();
  } catch (err) {
    console.log('Error creating track:', err.message);
  }
};

const update = async (formData, trackId) => {
  try {
    const res = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Failed to update track');
    return res.json();
  } catch (err) {
    console.log('Error updating track:', err.message);
  }
};

const deleteTrack = async (trackId) => {
  try {
    const res = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete track');
    return res.json();
  } catch (err) {
    console.log('Error deleting track:', err.message);
  }
};

export {
  index,
  create,
  update,
  deleteTrack,
};
