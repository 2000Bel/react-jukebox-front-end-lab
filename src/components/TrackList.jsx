// src/components/TrackList.jsx

const TrackList = ({ tracks = [], handleSelect, handleFormView, isFormOpen }) => {
  return (
    <div>
      <h1>Track List</h1>
      {!tracks.length ? (
        <h2>No tracks yet!</h2>
      ) : (
        <ul>
          {tracks.map((track) => (
            <li
              key={track._id}
              style={{ cursor: 'pointer', color: "#646CFF" }}
              onClick={() => handleSelect(track)}
            >
              {track.title}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleFormView}>
        {isFormOpen ? 'Close Form' : 'New Track'}
      </button>
    </div>
  );
};

export default TrackList;