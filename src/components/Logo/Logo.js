import React from 'react';
import './logo.scss';
import logo from '../../images/logo-sz.png';

const Logo = () => {
  return (
    <div className='logo'>
      <img className='image' src={logo} alt='Shir Zada' />
    </div>
  );
};

export default Logo;
