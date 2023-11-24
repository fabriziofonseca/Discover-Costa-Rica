import React from 'react'
import categories from "../categoriesindex"
import { Link } from 'react-router-dom';

const Categories = () => (
  <section className='w-full h-[170vh] flex justify-center flex-col pt-3 pb-3'>
    {categories.map((category, index) => (
      <div key={index} className='category-container my-3 flex w-full h-1/4 shadow-lg relative'>
        <Link to= "/places"> 
        <img className='rounded object-cover h-full w-full dark-image' src={category.img} alt="" />

        <div className='title-container'>
          <h2 className='text-white text-lg md:text-xl ml-4 lg:text-4xl	font-bold'>{category.title}</h2>
        </div>
        <div className='description hover-reveal'>
          <p className='text-white ml-4 md:text-2xl'>{category.description}</p>
        </div>
        </Link>
      </div>
      
     
    ))}
  </section>
)

export default Categories;
