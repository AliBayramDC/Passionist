import React from 'react';
import './Footer.css'; // Import your footer styles

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#000' }}>
    <footer className="footer" id='footer-section'>
      <div className="footer-left">
        <h2>Passionist</h2>
        <p> Passionist is your destination for elegant furniture solutions that transform your home into a space of comfort and style. With a wide range of meticulously crafted pieces, we bring you quality and sophistication that speaks to your taste.</p>
      </div>
      <div className="footer-right">
        <h3>Contact Us</h3>
        <p>Email: info@passionist.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Address: 1234 Elm Street, Baku, Azerbaijan</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
