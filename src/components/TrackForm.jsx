// src/components/TrackForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as trackService from '../services/trackService';

const TrackForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const { trackId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (trackId) {
      trackService.getTrack(trackId).then((track) => {
        setTitle(track.title);
        setArtist(track.artist);
      });
    }
  }, [trackId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const track = { title, artist };
    if (trackId) {
      await trackService.updateTrack(trackId, track);
    } else {
      await trackService.addTrack(track);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{trackId ? 'Edit Track' : 'Add New Track'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />
      <button type="submit">{trackId ? 'Save Changes' : 'Add Track'}</button>
    </form>
  );
};

export default TrackForm;