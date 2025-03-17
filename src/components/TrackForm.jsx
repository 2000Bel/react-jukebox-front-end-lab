// src/components/TrackForm.jsx
import { useState, } from 'react';

const TrackForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
  }
  const [formData, setFormData] = useState(props.selected ? props.selected : initialState)
);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.title]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.selected) {
    props.handleAddTrack(formData, props.selected._id);
  } else {
    props.handleAddTrack(formData);
  }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> title </label>
        <input
          id="title"
          title="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="artist"> artist </label>
        <input
          id="artist"
          title="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
        <button type="submit">
           {props.selected ? 'Update Track' : 'Add New Track'}</button>
      </form>
    </div>
  );
};

export default TrackForm;