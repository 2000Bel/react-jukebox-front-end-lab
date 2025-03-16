// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import * as trackService from './services/trackService';
import Home from './pages/Home';
import TrackForm from './components/TrackForm';
import NowPlaying from './components/NowPlaying';
import './App.css';

const App = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  useEffect(() => {
    const fetchTracks = async () => {
      const tracks = await trackService.index();
      setNowPlaying(tracks[0] || null);
    };
    fetchTracks();
  }, []);

  return (
    <div>
      <header>
        <h1>Track Manager</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-track">Add New Track</Link>
        </nav>
      </header>
      {nowPlaying && <NowPlaying track={nowPlaying} />}
      <Routes>
        <Route path="/" element={<Home setNowPlaying={setNowPlaying} />} />
        <Route path="/add-track" element={<TrackForm />} />
        <Route path="/edit-track/:trackId" element={<TrackForm />} />
      </Routes>
    </div>
  );
};

export default App;