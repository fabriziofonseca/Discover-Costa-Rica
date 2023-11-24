import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './favoritecontext.jsx';

export function HeroFavorite() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const handleRemoveFavorite = (favoriteId) => {
    removeFavorite(favoriteId);
  };

  const starIcon = (isFavorite) => (
    <svg
      className={`h-6 w-6 ${isFavorite ? 'text-yellow-500' : 'text-gray-300'}`}
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

  const emptyFavoritesMessage = (
    <div className='h-[80vh] w-full flex items-center justify-center'>
      <div className="flex flex-col items-center justify-center">
        <p className="text-black text-xl md:text-2xl mb-10">You haven't added any favorites yet.</p>
        <Link to="/" className='text-black bg-gray-300 hover:bg-gray-500 font-bold my-8 px-4 py-4 rounded-full'>Explore Places</Link>
      </div>
    </div>
  );

  return (
    <>
      <section className="h-[80vh] w-full bg-favorites bg-cover ">
        <div className='h-full px-4 md:px-6 flex w-full flex-col justify-items items-center pt-20 md:pt-36'>
          <h1 className='font-sans text-3xl md:text-5xl text-white font-bold mt-16'>Your favorites</h1>
          <h2 className='font-sans text-2xl md:text-4xl mt-2 text-white hidden'>Here you will find the pages you marked as favorites</h2>
          <Link to="/" className='text-black bg-white hover:bg-gray-300 font-bold my-8 px-4 py-4 rounded-full '>Go home</Link>
        </div>
      </section>

      <div className="mt-4 w-full px-4 md:px-6 flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favorites.length > 0 ? (
            favorites.map((favorite, index) => (
              <div key={index} className="bg-white p-4 m-2 rounded-lg shadow-lg flex flex-col items-center mb-10">
                <img src={favorite.img} alt={favorite.title} className="w-full h-40 rounded-t-lg object-cover" />
                <div className="px-3 flex-grow m-auto mt-4 flex flex-col items-center">
                  <h3 className="text-gray-800 text-lg md:text-xl font-semibold">{favorite.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{favorite.description}</p>
                </div>
                <button
                  onClick={() => handleRemoveFavorite(favorite.id)}
                  className="mt-2 p-2 rounded-full hover:bg-gray-100 transition-all"
                >
                  {starIcon(true)}
                </button>
              </div>
            ))
          ) : (
            emptyFavoritesMessage
          )}
        </div>
      </div>
    </>
  );
}

export default HeroFavorite