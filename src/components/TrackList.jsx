// src/components/TrackList.jsx
importTrackDetail from './components/TrackDetail';

const TrackList = ({ track = [] }) => {
return (
  <div>
    <h1>track List</h1>
    <div>
      {!props.tracks.length ? (
        <h2>No tracks Yet!</h2>
      ) : (
        <ul>
          {props.tracks.map((track) => 
            <li 
              key={track._id}
              style={{ cursor: 'pointer', color: "#646CFF" }}
              onClick={() => props.handleSelect(track)}
            >
              {track._id}
            </li>
          )}
        </ul>
      )}
    </div>
    {/* Our new button! */}
    <button onClick={props.handleFormView}>
      {props.isFormOpen ? 'Close Form' : 'New track'}
    </button>
  </div>
);

  
  export default TrackList;