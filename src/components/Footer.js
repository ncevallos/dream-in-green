import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../images/dig-logo.png';

const Footer = () => {
  return (
    <footer className='footer text-center py-3'>
      <div className='container'>
        <Link to='/'>
          <img
            src={logoImg}
            alt='Dream in green logo'
            className='footer__logo'
          />
        </Link>
        <p>Made with 💚️ by SparkDev FIU</p>
      </div>
    </footer>
  );
};

export default Footer;
