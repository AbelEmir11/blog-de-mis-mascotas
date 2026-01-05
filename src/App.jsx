import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetGallery from './pages/PetGallery';
import PetPage from './pages/PetPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<PetGallery />} />
          <Route path="/pet/:id" element={<PetPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
