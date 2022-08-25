import React from 'react';
import './MoviesCard.css';

const IMAGE_URL = ' https://api.nomoreparties.co';

function MoviesCard({ card, savedMovies, saveCardsId }) {
  console.log(card);

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  const duration = getTimeFromMins(card.duration);

  const onSaveCardsId = () => {
    saveCardsId(card.id);
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
              onClick={onSaveCardsId}
              aria-label="Удалить из любимых"
            ></button>
            : card.like
              ? <button
                type="button"
                className="moviesCard__button moviesCard__button_like-active"
                aria-label="Нравится"
              ></button>
              : <button
                type="button"
                className="moviesCard__button moviesCard__button_like-deactivated"

                aria-label="Не нравится"
              ></button>
        }
      </div>
      <span className="moviesCard__duration">{duration}</span>
    </div>
  );
}

export default MoviesCard;