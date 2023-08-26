import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems }) => {
  const cartItemCount = cartItems.length;

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><a href='/' style={{ textDecoration: 'none !important' }}>Passionist</a></div>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><div className="scroll-link-wrapper">
            <ScrollLink
              to="products-section"
              smooth={true}
              duration={50}
            >
              Shop
            </ScrollLink>
          </div>
          </li>
        <li><div className="scroll-link-wrapper">
            <ScrollLink
              to="footer-section"
              smooth={true}
              duration={50}
            >
              About Us
            </ScrollLink>
          </div></li>
        <li><div className="scroll-link-wrapper">
            <ScrollLink
              to="footer-section"
              smooth={true}
              duration={50}
            >
              Contact
            </ScrollLink>
          </div></li>
        
        <li><Link to="/cart" class="material-symbols-outlined">
shopping_cart
 {cartItemCount >0 &&<span className="cart-badge">{cartItemCount}</span>}</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="joinUsPage">JOIN US</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className='hamburger123' color="#000" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <FaTimes fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to="/cart" onClick={() => setToggleMenu(false)}>Cart</Link></li>
              <li>
                <ScrollLink to="aboutUs-section" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact-section" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>
                  Contact
                </ScrollLink>
              </li>
              <li>
                <Link to="/joinUsPage" onClick={() => setToggleMenu(false)}>
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
