import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrackForm from "./components/TrackForm";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track-form" element={<TrackForm />} />
    </Routes>
  </Router>
);

export default App;