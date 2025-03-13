// src/pages/Home.jsx
import React, { useState } from 'react';
import TrackList from '../components/TrackList';
import NowPlaying from '../components/NowPlaying';
import Weather from '../components/Weather'; 

const Home = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div>
      <h1>Reactville Jukebox</h1>
      <Weather />
      <TrackList setCurrentTrack={setCurrentTrack} />
      {currentTrack && <NowPlaying track={currentTrack} />}
    </div>
  );
};

export default Home;