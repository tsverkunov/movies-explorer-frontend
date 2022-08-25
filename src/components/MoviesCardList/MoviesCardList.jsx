import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

// const cards = [
//   {
//     id: 1,
//     image: {
//       url: 'https://img5.goodfon.ru/wallpaper/big/4/72/tsvety-polevye-romashki-risunok-romashki-polevye.jpg',
//     },
//     title: '33 слова о дизайне',
//     like: false,
//     duration: 61,
//   },
//   {
//     id: 2,
//     image: {
//       url: 'https://img5.goodfon.ru/wallpaper/big/4/72/tsvety-polevye-romashki-risunok-romashki-polevye.jpg',
//     },
//     title: '33 слова о дизайне',
//     like: true,
//     duration: 81,
//   },
//   {
//     id: 3,
//     image: {
//       url: 'https://img5.goodfon.ru/wallpaper/big/4/72/tsvety-polevye-romashki-risunok-romashki-polevye.jpg',
//     },
//     title: '33 слова о дизайне',
//     like: false,
//     duration: 61,
//   },
//   {
//     id: 4,
//     image: {
//       url: 'https://img5.goodfon.ru/wallpaper/big/4/72/tsvety-polevye-romashki-risunok-romashki-polevye.jpg',
//     },
//     title: '33 слова о дизайне',
//     like: true,
//     duration: 81,
//   },
// ];


const MoviesCardList = ({cards, savedMovies, isFetching, error,saveCardsId }) => (
  <div className="cardList">
    {
      isFetching
        ? <Preloader/>
        : !cards.length
          ? <span className="cardList__not-found">Ничего не найдено</span>
          : error
            ?
            <span className="cardList__not-found">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
            : cards.map(card => (
              <MoviesCard
                card={card}
                key={card.id}
                savedMovies={savedMovies}
                saveCardsId={saveCardsId}
              />
            ))
    }
  </div>
);

export default MoviesCardList;