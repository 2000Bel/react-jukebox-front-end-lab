// src/components/Tracks.jsx
import React from 'react';

const TrackDetails = (props) => {
  if (!props.selected) {
    return (
      <div>
        <h1>No Details</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{props.selected.title}</h1>
      <h2>Artist: {props.selected.artist}</h2>
      <div>
        <button onClick={() => props.handleFormView(props.selected)}>
          Edit Track
        </button>
        <button onClick={() => props.handleDeleteTrack(props.selected._id)}>
          Delete Track
        </button>
      </div>
    </div>
  );
};

export default TrackDetails;
  