import React from 'react';
import './Footer.css';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function Footer() {
  const { pathname } = useLocation()
  // let hide
  // pathname === '/profile' ? hide = true: hide = false
  const show = pathname === !'/sign-up'
    || pathname === !'/sign-in'
    || pathname === !'*'
    || pathname === '/movies'
    || pathname === '/saved-movies'
    || pathname === '/'


  // const show = pathname === !'/sign-up' || pathname === !'/sign-in' || pathname === '/'
  return (
    <footer className={`footer ${show && 'footer_show'}`}>
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <span className="footer__line"></span>
      <div className="footer__social-container">
        <Navigation/>
        <p className="footer__copyright">&copy; 2022</p>
      </div>
    </footer>
  );
}

export default Footer;