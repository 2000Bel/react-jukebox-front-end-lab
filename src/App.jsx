import { useState, useEffect } from 'react';
import * as trackService from './services/trackService';
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';
import TrackDetails from './components/TrackDetails.jsx';
import NowPlaying from './components/NowPlaying';
import './App.css';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchTracks = async () => {
      const fetchedTracks = await trackService.index();
      setTracks(fetchedTracks);
    };
    fetchTracks();
  }, []);

  const handlePlay = (track) => {
    setSelected(track);
    setIsFormOpen(false);
  };

  const handleAddTrack = async (formData) => {
    const newTrack = await trackService.create(formData);
    setTracks([newTrack, ...tracks]);
    setIsFormOpen(false);
  };

  const handleUpdateTrack = async (formData, trackId) => {
    const updatedTrack = await trackService.update(formData, trackId);
    const updatedTracks = tracks.map((track) =>
      track._id === trackId ? updatedTrack : track
    );
    setTracks(updatedTracks);
    setSelected(updatedTrack);
    setIsFormOpen(false);
  };

  const handleFormView = () => {
    setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div>
      <h1>Track Manager</h1>
      <TrackList
        tracks={tracks}
        handleSelect={handlePlay}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen && (
        <TrackForm
          handleAddTrack={handleAddTrack}
          selected={selected}
          handleUpdateTrack={handleUpdateTrack}
        />
      )}
      {selected && (
        <TrackDetails
          selected={selected}
          handleFormView={handleFormView}
        />
      )}
      <NowPlaying tracks={tracks} handlePlay={handlePlay} />
    </div>
  );
};

export default App;