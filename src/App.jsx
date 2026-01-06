import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PetGallery from './pages/PetGallery';
import OtherPetsGallery from './pages/OtherPetsGallery';
import PetPage from './pages/PetPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<PetGallery />} />
          <Route path="/otras-mascotas" element={<OtherPetsGallery />} />
          <Route path="/pet/:id" element={<PetPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
