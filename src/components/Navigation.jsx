import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full h-16 px-4 md:px-8 lg:px-12 absolute top-0 z-50 bg-transparent">
      <ul className="hidden md:flex gap-6">
        <li><Link to="/" className="nav-link text-white font-bold">Home</Link></li>
        <li><Link to="/places" className="nav-link text-white font-bold">All the Places</Link></li>
      </ul>

      <div className="flex items-center justify-center">
        <Link to="/">
          <img src="images/CR.png" alt="DiscoverCR Logo" className="w-12 h-12" />
        </Link>
      </div>

      <ul className="hidden md:flex gap-6">
        <li><Link to="/favorites" className="nav-link text-white font-bold">My Favorites</Link></li>
        <li><Link to="/contact" className="nav-link text-white font-bold">Contact</Link></li>
      </ul>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="outline-none focus:outline-none">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div className={`bg-white absolute top-16 left-0 right-0 md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} flex-col gap-6 py-4 items-center`}>
        <Link to="/" className="nav-link text-black font-bold text-center" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/places" className="nav-link text-black font-bold text-center" onClick={() => setIsOpen(false)}>All the Places</Link>
        <Link to="/favorites" className="nav-link text-black font-bold text-center" onClick={() => setIsOpen(false)}>My Favorites</Link>
        <Link to="/contact" className="nav-link text-black font-bold text-center" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;
