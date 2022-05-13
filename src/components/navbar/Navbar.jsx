import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import logo1 from '../../assets/logo1.png'; 



function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='logo1'>
          <img src={logo1} alt='logo'/>
        </div>
        <div className='navbar-links_container'>
          <p> <a href='#home'> Home </a></p>
          <p> <a href='#whatisRHGAN' > What is RhGan? </a></p>
          <p> <a href='#documentation'> Documentation </a></p>
          <p> <a href='#code'> Code </a></p>
          <p> <a href='#team' > Team </a></p>
        </div>
      </div>

    </div>
  )
}

export default Navbar