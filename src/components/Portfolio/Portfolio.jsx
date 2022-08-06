import React from 'react';
import './Portfolio.css'
import arrow from '../../images/arrow.svg'

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/tsverkunov" className="portfolio__link" target="_blank" rel="noreferrer">
            Статичный сайт
            <img src={arrow} alt="стрелка" className="portfolio__arrow"/>
          </a>
        </li>
        <span className="portfolio__line"></span>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/tsverkunov" target="_blank" rel="noreferrer">
            Адаптивный сайт
            <img src={arrow} alt="стрелка" className="portfolio__arrow"/>
          </a>
        </li>
        <span className="portfolio__line"></span>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/tsverkunov" target="_blank" rel="noreferrer">
            Одностраничное приложение
            <img src={arrow} alt="стрелка" className="portfolio__arrow"/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
