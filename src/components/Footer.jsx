import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-950 text-white h-[90vh]'>
      <div className='container mx-auto px-6 pt-10 pb-6'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/4 text-left md:text-left'>
            <h5 className='uppercase mb-10 font-bold text-3xl'>Discover Costa Rica</h5>
            <p>A guide to the most beautiful places in Costa Rica. Explore parks, beaches, and hidden gems.</p>
          </div>

          <div className='w-full md:w-1/4 text-left md:text-left'>
            <h5 className='uppercase mb-6 font-bold'>Quick Links</h5>
            <ul className='mb-4'>
            <li><Link to="/" className="nav-link text-white mt-4">Home</Link></li>
            <li><Link to="/places" className="nav-link text-white mt-4">All the Places</Link></li>
            <li><Link to="/favorites" className="nav-link text-white mt-4">My Favorites</Link></li>
            <li><Link to="/contact" className="nav-link text-white mt-4">Contact</Link></li>
            </ul>
          </div>

          <div className='w-full md:w-1/4 text-left md:text-left'>
            <h5 className='uppercase mb-6 font-bold'>Follow Me</h5>
            <div className='flex items-center'>
              <a href='https://github.com/fabriziofonseca' target='_blank' rel='noopener noreferrer' className='text-xl mr-6'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/fabrizio-fonseca-8741a5229/' target='_blank' rel='noopener noreferrer' className='text-xl'>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
