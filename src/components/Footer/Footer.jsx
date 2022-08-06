import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <span className="footer__line"></span>
      <nav>
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <a href="https://practicum.yandex.ru" className="footer__nav-link">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="https://github.com/tsverkunov" className="footer__nav-link">
              Github
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="https://facebook.com" className="footer__nav-link">
              Facebook
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">&copy; 2022</p>
    </footer>
  );
}

export default Footer;