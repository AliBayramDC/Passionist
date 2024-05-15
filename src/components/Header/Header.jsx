// Header.js
import React from 'react';
import './Header.css'; // Import your header styles
import { Link as ScrollLink } from 'react-scroll';
import backgroundImage from '../../assets/header_image.jpg'; 

const Header = () => {
  return (
    <div className="header" id='header-section'>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay"></div>
      </div>
      <div className="content">
        <h1>Welcome to BebisStyle</h1>
        <p>Transform Your Home with Elegant Furniture Solutions</p>
        <div className="shop-button">
          <button className="ctar">
            <span className="hover-underline-animation">
              <ScrollLink
                to="products-section"
                smooth={true}
                duration={50}
                className="scroll-link"
              >
                Shop
              </ScrollLink>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
