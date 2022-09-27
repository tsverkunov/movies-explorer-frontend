import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({
                       movies,
                       onFilterMovies,

                       isFetching,
                       shortMovie,
                       setShortMovie,
                       removeMovies,
                       savedMoviesList,
                     }) {
  return (
    <div className="savedMovies">
      <SearchForm
        onFilterMovies={onFilterMovies}
        setShortMovie={setShortMovie}
        shortMovie={shortMovie}
        savedMoviesList={savedMoviesList}
      />
      <MoviesCardList
        savedMovies={true}
        movies={movies}
        isFetching={isFetching}
        removeMovies={removeMovies}
        savedMoviesList={savedMoviesList}
      />
    </div>
  );
}

export default SavedMovies;
