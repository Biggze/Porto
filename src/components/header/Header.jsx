import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Adel Noval Al Farizi</h1>
        <h5 className="text-light">Front end Developer</h5>
        <HeaderSocials /> {/* Pindahkan HeaderSocials ke atas CTA */}
        <CTA />
      </div>
    </header>
  );
};

export default Header;