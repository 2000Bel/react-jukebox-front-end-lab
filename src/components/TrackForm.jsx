// src/components/TrackForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TrackForm = () => {
  const [track, setTrack] = useState({ title: '', artist: '' });
  const navigate = useNavigate();
  const { trackId } = useParams();

  useEffect(() => {
    if (trackId) {
      fetch(`${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks/${trackId}`)
        .then((res) => res.json())
        .then((data) => setTrack(data))
        .catch((err) => console.error(err));
    }
  }, [trackId]);

  const handleChange = (e) => {
    setTrack({ ...track, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = trackId ? 'PUT' : 'POST';
    const url = trackId
      ? `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks/${trackId}`
      : `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(track),
    })
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{trackId ? 'Edit Track' : 'Add New Track'}</h2>
      <label>
        Title:
        <input name="title" value={track.title} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Artist:
        <input name="artist" value={track.artist} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default TrackForm;