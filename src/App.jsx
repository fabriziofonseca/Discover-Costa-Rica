import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './components/Heros/favoritecontext';
import Navigation from './components/Navigation';
import HomePage from "./components/pages/HomePage";
import PlacesPage from "./components/pages/PlacesPage";
import FavoritePage from "./components/pages/FavoritePage";
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <FavoritesProvider> 
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/places" element={<PlacesPage />} /> 
          <Route path="/favorites" element={<FavoritePage />} /> 
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
