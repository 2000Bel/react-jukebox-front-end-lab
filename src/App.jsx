// src/App.jsx
import { useState, useEffect } from 'react';
import * as trackService from './services/trackService';
import Home from './pages/Home';
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';
import TrackDetails from './components/TrackDetail';
import NowPlaying from './components/NowPlaying';
import './App.css';

const App = () => {
  const [tracks, setTracks] = useState([])
  const [nowPlaying, setNowPlaying] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackService.index();

        if (fetchedTracks.err) {
          throw new Error(fetchedTracks.err);
        }

        setTracks(fetchedTracks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTracks();
  }, []);

  const handlePlay = (track) => {
    setNowPlaying(track);
    setIsFormOpen(false);
  }

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);
      if (newTrack.err) {
        throw new Error(newTrack.err);
      }
      setTracks([newTrack, ...tracks]);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };


const handleFormView = () => {
  if (!track._id) setSelected(null);
  setIsFormOpen(!isFormOpen);
};


const handleUpdateTrack = async (formData, trackId) => {
  try {
    const updatedTrack = await trackService.update(formData, trackId);
    if (updatedTrack.err) {
      throw new Error(updatedTrack.err);
    }

    const updatedTrackList = tracks.map((track) => (
      track._id !== updatedTrack._id ? track : updatedTrack
    ));
    setTracks(updatedTrackList);
    setSelected(updatedTrack);
    setIsFormOpen(false);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div>
        <h1>Track Manager</h1>
        <>
      <Tracklist 
      tracks={tracks}
       handleSelect={handlePlay}
       handleFormView={handleFormView}
       isFormOpen={isFormOpen}
       />
       {/* Pass handleUpdateTrack to TravckForm */}
       {isFormOpen ? (
             <TrackForm 
             handleAddTrack={handleAddTrack}
             selected={selected}
             handleUpdateTrack={handleUpdateTrack}
             />
       ):(
             <TrackDetail 
             selected={selected} 
             handleFormView={handleFormView}
             />
       )}
    </>
    </div>
  );
};
const handleFormView = () => {
  setIsFormOpen(!isFormOpen);
};

export default App;