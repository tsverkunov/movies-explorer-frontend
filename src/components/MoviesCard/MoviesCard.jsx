import React from 'react';
import likeActive from '../../images/icon__color_like.svg'
import dislike from '../../images/dislike-icon.svg'
import closeButton from '../../images/card_close_button.svg'
import './MoviesCard.css'

function MoviesCard({ card, savedMovies }) {

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }
  const duration = getTimeFromMins(card.duration)

  return (
    <div className="moviesCard">
      <img className="moviesCard__image" src={card.image} alt="Превью фильма"/>
      <div className="moviesCard__title-container">
        <h3 className="moviesCard__title">{card.title}</h3>
        <img className="moviesCard__like-image" src={savedMovies? closeButton : card.like ? likeActive : dislike} alt="Лайк"/>
      </div>
      <span className="moviesCard__duration">{duration}</span>
    </div>
  );
}

export default MoviesCard;