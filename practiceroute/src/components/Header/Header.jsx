import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/Theme'

const Header = () => {

    const {theme,toggleChange} = useTheme()
    console.log(theme);
  return (
    <div>
     <ul>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'about'}>About</Link>
        </li>
        <li>
            <Link to={'contact'}>Contact</Link>
        </li>
     </ul>
     <div className='theme-switcher'>
            <input type="checkbox"
            onChange={toggleChange}
            checked= {theme === 'dark'} />

     </div>
    </div>
  )
}

export default Header
