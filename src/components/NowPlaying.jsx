// src/components/NowPlaying.jsx
import React from 'react';

const NowPlaying = (props) => {
  console.log(props);
  return (
    <div>
       {!props.tracks.length ? (
      <h2>Now Playing</h2>
       ):(
        <ul>
          {props.traks.map((track) => (
            <li 
            key={track._id}     
            style={{ cursor: 'pointer', color: "#646CFF" }}
            onClick={() => props.handlePlay(track)}
          >
            {track.artist}
            </li>
          ))}
        </ul>
       )}
    </div>
  );
};

export default NowPlaying;