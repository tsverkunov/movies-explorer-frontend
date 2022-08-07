import React from 'react';
import './Footer.css';
import Navigation from '../Navigation/Navigation';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <span className="footer__line"></span>
      <Navigation/>
      <p className="footer__copyright">&copy; 2022</p>
    </footer>
  );
}

export default Footer;