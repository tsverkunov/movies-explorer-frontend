import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

function Movies({
                  onGetMovies,
                  movies,
                  isFetching,
                  shortMovie,
                  setShortMovie,
                  error,
                  addCards,
                  hiddenButton,
                  saveMovies,
                  removeMovies,
                  savedMoviesList,
                  searchWord,
                }) {
  return (
    <div className="movies">
      <SearchForm
        onGetMovies={onGetMovies}
        setShortMovie={setShortMovie}
        shortMovie={shortMovie}
        searchWord={searchWord}
      />
      <MoviesCardList
        movies={movies}
        isFetching={isFetching}
        error={error}
        saveMovies={saveMovies}
        savedMoviesList={savedMoviesList}
        removeMovies={removeMovies}
      />
      <MoreButton
        error={error}
        addCards={addCards}
        hiddenButton={hiddenButton}
      />
    </div>
  );
}

export default Movies;