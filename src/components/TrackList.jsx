// src/components/TrackList.jsx
const TrackList = ({ track = [] }) => {
    return (
      <div>
        {track.length === 0 ? (
          <p>No tracks available. Please add some!</p>
        ) : (
            track.map((track) => (
            <div key={track._id} className="track-item">
              <h3>{track.title}</h3>
              <p>Artist: {track.artist}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default TrackList;