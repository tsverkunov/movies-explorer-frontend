import React from 'react';
import './MoviesCard.css';

const IMAGE_URL = ' https://api.nomoreparties.co';

function MoviesCard({ card, savedMovies, saveMovies, removeMovies, savedMoviesList }) {
  let isActive = savedMoviesList.find(item => item.id === card.id);

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  const duration = getTimeFromMins(card.duration);

  const onSaveCardsId = () => {
    saveMovies(card);
  };

  const onRemoveCardId = () => {
    removeMovies(card);
  };

  return (
    <div className="moviesCard">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="moviesCard__image" src={IMAGE_URL + card.image.url} alt="Превью фильма"/>
      </a>
      <div className="moviesCard__title-container">
        <h3 className="moviesCard__title">{card.nameRU}</h3>
        {
          savedMovies
            ? <button
              type="button"
              className="moviesCard__button moviesCard__button_close"
              onClick={onRemoveCardId}
              aria-label="Удалить из любимых"
            ></button>
            : isActive
              ? <button
                type="button"
                className="moviesCard__button moviesCard__button_like-active"
                onClick={onRemoveCardId}
                aria-label="Нравится"
              ></button>
              : <button
                type="button"
                className="moviesCard__button moviesCard__button_like-deactivated"
                onClick={onSaveCardsId}
                aria-label="Не нравится"
              ></button>
        }
      </div>
      <span className="moviesCard__duration">{duration}</span>
    </div>
  );
}

export default MoviesCard;