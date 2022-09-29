import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({
                          movies,
                          savedMovies,
                          isFetching,
                          error,
                          saveMovies,
                          removeMovies,
                          savedMoviesList
}) => (
  <div className="cardList">
    {
      isFetching
        ? <Preloader/>
        : !movies.length
          ? <span className="cardList__not-found">Ничего не найдено</span>
          : error
            ?
            <span className="cardList__not-found">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
            : movies.map(movie => (
              <MoviesCard
                movie={movie}
                key={movie.id || movie.movieId}
                savedMovies={savedMovies}
                saveMovies={saveMovies}
                savedMoviesList={savedMoviesList}
                removeMovies={removeMovies}
              />
            ))
    }
  </div>
);

export default MoviesCardList;