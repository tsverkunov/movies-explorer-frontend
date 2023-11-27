import React from 'react';
import './Promo.css';
import webWorld from '../../images/web_world-min.svg';
import NavTab from '../NavTab/NavTab';

function Promo({onHiddenRef}) {
  return (
    <div className="promo__wrap">
      <div className="promo__container">
        <section className="promo">
          <img src={webWorld} alt="веб-мир" className="promo__image" />
          <div className="promo__title-container">
            <h1 className="promo__title">Учебный проект студента факультета <br/>Веб-разработки.</h1>
            <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <NavTab onHiddenRef={onHiddenRef}/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Promo;
