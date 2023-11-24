import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
   
    <div className='relative w-full overflow-hidden bg-gray-200 mt-4'>
      <span className='absolute top-1/2 left-4 z-20 cursor-pointer select-none text-white text-2xl lg:text-3xl bg-black bg-opacity-50 px-2 lg:px-4 py-2 rounded-full transform -translate-y-1/2' onClick={prevSlide}>&lt;</span>
      <span className='absolute top-1/2 right-4 z-20 cursor-pointer select-none text-white text-2xl lg:text-3xl bg-black bg-opacity-50 px-2 lg:px-4 py-2 rounded-full transform -translate-y-1/2' onClick={nextSlide}>&gt;</span>
      <Link to="/places" >
      {images.map((image, index) => (
        <div className={index === current ? 'opacity-100' : 'opacity-0 absolute inset-0 transition-opacity duration-500 ease-in-out'} key={index}>
          {index === current && (
            <div className='relative w-full h-[50vh] md:h-[70vh] lg:h-[90vh]'>
              <img src={image.src} alt={'Slide ' + index} className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black bg-opacity-30'></div> 
              <p className='absolute bottom-10 left-10 text-white text-sm md:text-lg lg:text-6xl font-bold'>{image.text}</p> 
            </div>
          )}
        </div>
      ))}
              </Link>

    </div>

  );
};

export default Carousel;
