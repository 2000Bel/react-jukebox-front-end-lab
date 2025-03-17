// src/components/NowPlaying.jsx
import React from 'react';

const NowPlaying = ({ selected }) => {
  if (!selected) return <p>No song playing</p>;

  return (
    <div>
      <h2>Now Playing</h2>
      <h3>{selected.title} - {selected.artist}</h3>
    </div>
  );
};

export default NowPlaying;