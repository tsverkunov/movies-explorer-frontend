import React from 'react';
import './MoviesCard.css';

const IMAGE_URL = 'https://api.nomoreparties.co';

function MoviesCard({ movie, savedMovies, saveMovies, removeMovies, savedMoviesList }) {

  let isActive = savedMoviesList.some((item) => item.movieId === movie.id);

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  const duration = getTimeFromMins(movie.duration);

  const onSaveCardsId = () => {
    saveMovies({
      movieId: movie._id ? movie.movieId : movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      director: movie.director,
      country: movie.country,
      year: movie.year,
      duration: movie.duration,
      description: movie.description,
      trailerLink: movie.trailerLink,
      thumbnail:
        movie._id
          ? movie.thumbnail
          : IMAGE_URL + movie.image.formats.thumbnail.url,
      image:
        movie._id
          ? movie.image
          : IMAGE_URL + movie.image.url,
    });
  };

  const onRemoveCardId = () => {
    removeMovies(movie);
  };

  const onRemoveCardIdOfMovies = () => {
    if (isActive) {
      removeMovies(savedMoviesList.find((item) => item.movieId === movie.id));
    }
  };

  return (
    <div className="moviesCard">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="moviesCard__image"
          src={movie._id ? movie.image : IMAGE_URL + movie.image.url}
          alt="Превью фильма"
        />
      </a>
      <div className="moviesCard__title-container">
        <h3 className="moviesCard__title">{movie.nameRU}</h3>
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
                onClick={onRemoveCardIdOfMovies}
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