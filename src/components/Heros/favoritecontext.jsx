
import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (place) => {
    setFavorites((prevFavorites) => [...prevFavorites, place]);
  };

  const removeFavorite = (placeId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(place => place.id !== placeId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
