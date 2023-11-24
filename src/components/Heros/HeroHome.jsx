import React from 'react'
import { Link } from 'react-router-dom';


function HeroHome() {
  return (
    <>
      <section className="h-[80vh] w-full bg-banner bg-cover">
        <div className='h-full px-6 flex w-full flex-col justify-items items-center pt-36'>
          <h1 className='font-sans text-5xl text-white font-bold'>Discover Costa Rica</h1>
          <h2 className='hidden sm:block font-sans text-4xl mt-5 text-white'>Explore, Discover, Live</h2>
          <Link to="/places" className='text-black bg-white hover:bg-gray-300 font-bold my-8 px-4 py-4 rounded-full '>See all the Places</Link>
        </div>
      </section>
    </>
  );
}

export default HeroHome