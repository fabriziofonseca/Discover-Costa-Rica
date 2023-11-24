import React from 'react'
import { Link } from 'react-router-dom';

function HeroPlaces() {
  return (
    <>
      <section className="h-[80vh] w-full bg-places bg-cover ">
        <div className='h-full px-6 flex w-full flex-col justify-items items-center pt-36'>
          <h1 className='font-sans text-5xl text-white font-bold'>Places</h1>
          <h2 className='hidden sm:block font-sans text-4xl mt-2 text-white'>Plan your next adventure</h2>
          <div className='flex gap-4'>
          <Link to="/"  className='text-black bg-white hover:bg-gray-300 font-bold my-8 px-4 py-4 rounded-full '>Home</Link>
          <Link to="/favorites"  className='text-black bg-white hover:bg-gray-300 font-bold my-8 px-4 py-4 rounded-full '>Favorites</Link>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default HeroPlaces