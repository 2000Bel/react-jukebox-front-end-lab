// src/pages/Home.jsx
import TrackList from '../components/TrackList';

const Home = ({ setNowPlaying }) => {
  return (
    <div>
      <h1>Reactville Jukebox</h1>
      <TrackList setNowPlaying={setNowPlaying} />
    </div>
  );
};

export default Home;