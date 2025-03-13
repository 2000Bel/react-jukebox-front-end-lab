// src/components/TrackList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TrackList = ({ setCurrentTrack }) => {
const [tracks, setTracks] = useState([]);

useEffect(() => {
fetch(`${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`)
.then((res) => res.json())
.then((data) => setTracks(data))
.catch((err) => console.error(err));
}, []);

const handleDelete = (id) => {
fetch(`${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks/${id}`, { method: 'DELETE' })
.then(() => setTracks(tracks.filter((track) => track.id !== id)))
.catch((err) => console.error(err));
};

return (
<div>
<h2>Tracks</h2>
<Link className="button" to="/add-track">Add New Track</Link>
<ul className="track-list">
{tracks.map((track) => (
<li key={track.id} className="track-item">
<div>
<strong>{track.title}</strong> - {track.artist}
</div>
<div>
<button className="button" onClick={() => setCurrentTrack(track)}>Play</button>
<Link className="button" to={`/edit-track/${track.id}`}>Edit</Link>
<button className="button" onClick={() => handleDelete(track.id)}>Delete</button>
</div>
</li>
))}
</ul>
</div>
);
};

export default TrackList;