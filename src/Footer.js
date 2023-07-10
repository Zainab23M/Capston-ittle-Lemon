import React from 'react';
import logof from './Assest/Logo2.png';

const Footer = () => {
  return (
    <footer>

      <div className="footer-content">
      <div className="footer-logo"><img src={logof} alt="Logo" />
      </div>
        <div className="navigation">
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>Phone Number</li>
            <li>Email</li>
            <li>Address</li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
    
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
