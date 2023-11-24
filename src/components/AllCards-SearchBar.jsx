import React, { useState, useContext } from 'react';
import places from './index.js'; 
import { FavoritesContext } from './Heros/favoritecontext.jsx'; 
import Modal from './modal.jsx'; 

const CardGrid = () => {
  const [search, setSearch] = useState("");
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const openModal = (place) => {
    setSelectedPlace(place);
  };

  const closeModal = () => {
    setSelectedPlace(null);
  };

  const isFavorite = (place) => favorites.some(favorite => favorite.id === place.id);

  const handleFavoriteToggle = (place, event) => {
    event.stopPropagation(); 
    if (isFavorite(place)) {
      removeFavorite(place.id);
    } else {
      addFavorite(place);
    }
  };

  const starIcon = (isFav) => (
    <svg 
      className={`h-6 w-6 ${isFav ? 'text-yellow-500' : 'text-gray-300'}`} 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path d="M11.049 2.927c-.396-.802-1.702-.802-2.098 0L5.658 6.342l-3.612.525c-.845.123-1.184 1.158-.571 1.752l2.614 2.549-0.615 3.592c-.113.66.585 1.165 1.196 0.855l3.226-1.696 3.225 1.696c.611.31 1.309-.195 1.196-0.855l-0.615-3.592 2.614-2.549c.613-.594.274-1.629-.571-1.752l-3.612-.525L11.049 2.927z"></path>
    </svg>
  );

  return (
    <div>
      <div className='w-full h-16 flex items-center justify-center mt-3'>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder='Search for something..'
          className="border-solid border-2 border-green-700 active:border-none p-3 rounded-full"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {places
          .filter((place) => {
            return search.toLowerCase() === "" || place.title.toLowerCase().includes(search.toLowerCase()); 
          })
          .map((place, index) => (
            <div
              key={index}
              className="card mx-4 w-56 rounded-lg shadow-lg flex flex-col mt-2 mb-4 h-[23rem] hover:mt-1"
              onClick={() => openModal(place)} 
            >
              <img
                className="w-full h-40 rounded-t-lg"
                src={place.img}
                alt="Place"
              />
              <div className="px-3 flex-grow m-auto mt-4 flex flex-col items-center">
                <p className="text-gray-950 font-semibold mb-1">{place.title}</p>
                <p className="text-gray-600">{place.description}</p>
              </div>
              <div className="flex items-center h-14 p-5 justify-center gap-3 mb-4">
                <button
                  onClick={(e) => handleFavoriteToggle(place, e)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all"
                >
                  {starIcon(isFavorite(place))}
                </button>
              </div>
            </div>
          ))}
      </div>
{selectedPlace && (
  <Modal 
    isOpen={!!selectedPlace} 
    onClose={closeModal} 
    place={selectedPlace}
    onFavoriteToggle={handleFavoriteToggle}
    isFavorite={isFavorite(selectedPlace)}
  />
)}

    
    </div>
  );
};

export default CardGrid;
