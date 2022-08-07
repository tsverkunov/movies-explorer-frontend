import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const cards = [
  {
    image: 'https://img5.goodfon.ru/wallpaper/big/4/72/tsvety-polevye-romashki-risunok-romashki-polevye.jpg',
    title: '33 слова о дизайне',
    like: false,
    duration: 61,
  },
  {
    image: 'https://img5.goodfon.ru/wallpaper/big/4/72/tsvety-polevye-romashki-risunok-romashki-polevye.jpg',
    title: '33 слова о дизайне',
    like: true,
    duration: 81,
  },
];


const MoviesCardList = () => (
  <div className="cardList">
    {
      cards.map(card => (
        <MoviesCard card={card} key={card.duration}/>
      ))
    }
    <div className="cardList__add-container">
      <button className="cardList__add">Ещё</button>
    </div>
  </div>
);

export default MoviesCardList;