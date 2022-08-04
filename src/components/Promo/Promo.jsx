import React from 'react';
import './Promo.css';
import webWorld from '../../images/web_world.svg';

function Promo() {
  return (
    <div className="promo">
      <img src={webWorld} alt="веб-мир" className="promo__image"/>
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
    </div>
  );
}

export default Promo;