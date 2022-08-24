import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

const cards = [
  {
    id: 1,
    image: 'https://img5.goodfon.ru/wallpaper/big/4/72/tsvety-polevye-romashki-risunok-romashki-polevye.jpg',
    title: '33 слова о дизайне',
    like: false,
    duration: 61,
  },
  {
    id: 2,
    image: 'https://img5.goodfon.ru/wallpaper/big/4/72/tsvety-polevye-romashki-risunok-romashki-polevye.jpg',
    title: '33 слова о дизайне',
    like: true,
    duration: 81,
  },
  {
    id: 3,
    image: 'https://img5.goodfon.ru/wallpaper/big/4/72/tsvety-polevye-romashki-risunok-romashki-polevye.jpg',
    title: '33 слова о дизайне',
    like: false,
    duration: 61,
  },
  {
    id: 4,
    image: 'https://img5.goodfon.ru/wallpaper/big/4/72/tsvety-polevye-romashki-risunok-romashki-polevye.jpg',
    title: '33 слова о дизайне',
    like: true,
    duration: 81,
  },
];


const MoviesCardList = ({savedMovies}) => (
  <div className="cardList">
    {
      !cards
        ? <Preloader/>
        : cards.map(card => (
        <MoviesCard card={card} key={card.id} savedMovies={savedMovies}/>
      ))
    }
  </div>
);

export default MoviesCardList;