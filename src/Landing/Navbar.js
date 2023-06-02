import '../CSS/landing.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SignUp from '../components/SignUp';
import logoImage from '../assets/landing/logo.svg';
import searchImage from '../assets/landing/search.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar_container">
      <Link to='/' className='navbar_logo'>
        <img src={logoImage}/>
        <p>Altcoin&nbsp;Picker</p>
      </Link>
      <div className='navbar_search'>
        <img src={searchImage} />
        <input type='text' placeholder='Search for Tokens'/>
      </div>
      <div className='navbar_main'>
        <Link to="/presaleExplorer"><p>Presale</p></Link>
        <Link to="/tokenExplorer"><p>Token&nbsp;Explorer</p></Link>
        <p>Pricing</p>
      </div>
      <button className='connect_button' onClick={() => setIsOpen(true)}>Connect</button>
      {isOpen && <SignUp setIsOpen={setIsOpen} /> }
    </div>
  )
}

export default Navbar;