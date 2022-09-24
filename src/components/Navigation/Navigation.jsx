import React from 'react';
import './Navigation.css'

function Navigation() {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="https://practicum.yandex.ru" className="nav__link" target="_blank">
            Яндекс.Практикум
          </a>
        </li>
        <li className="nav__item">
          <a href="https://github.com/tsverkunov" className="nav__link" target="_blank">
            Github
          </a>
        </li>
        <li className="nav__item">
          <a href="https://facebook.com" className="nav__link" target="_blank">
            Facebook
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;