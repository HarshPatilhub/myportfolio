import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTheme from '../contexts/Theme';

const Header = () => {
  const { themeMode, lightMode, darkMode } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 w-full ${themeMode === "bg-black" ? "bg-gray-800 text-white" : "bg-white text-black" } shadow-md z-10  `}>
      <div className='mx-4 sm:mx-10 md:mx-20 lg:mx-40 py-3 sm:py-4 md:py-5 text-lg sm:text-xl md:text-2xl'>
        <div className='list'>
          <button onClick={toggleMenu} className="block focus:outline-none">
            <i className="fas fa-bars text-xl"></i>
          </button>
          <ul className={`flex flex-col sm:flex-row  items-center justify-center header ${isMenuOpen ? 'hidden' : 'block'}`}>
            <li className='mx-2 sm:mx-4 lg:mx-6  text-xl hover:text-violet-700 tracking-widest'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='mx-2 sm:mx-4 lg:mx-6 text-xl hover:text-violet-700 tracking-widest'>
              <Link to={'/about'}>About</Link>
            </li>
            <li className='mx-2 sm:mx-4 lg:mx-6 text-xl hover:text-violet-700 tracking-widest'>
              <Link to={'/stack'}>Stack</Link>
            </li>
            <li className='mx-2 sm:mx-4 lg:mx-6 text-xl hover:text-violet-700 tracking-widest'>
              <Link to={'/project'}>Projects</Link>
            </li>
            <li className='mx-2 sm:mx-4 lg:mx-6 text-xl hover:text-violet-700 tracking-widest'>
              <Link to={'/experience'}>Experience</Link>
            </li>
            <li className='mx-2 sm:mx-4 lg:mx-6 text-xl hover:text-violet-700 tracking-widest'>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <button onClick={themeMode === "bg-white" ? darkMode : lightMode} className="mx-6 sm:mx-4 lg:mx-6 focus:outline-none"><i className="fa-solid fa-toggle-on text-xl"></i></button>
            <li>
              <Link to={'https://github.com/HarshPatilhub'}><i className="fa-brands fa-github mx-1 rounded-full px-1 text-2xl bg-white text-black"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
