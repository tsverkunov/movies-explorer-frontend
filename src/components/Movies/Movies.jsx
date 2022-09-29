import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

function Movies({
                  onFilterMovies,
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
                  savedSearchWord,
                  savedShortMovie,
                }) {
  return (
    <div className="movies">
      <SearchForm
        onFilterMovies={onFilterMovies}
        setShortMovie={setShortMovie}
        shortMovie={shortMovie}
        searchWord={searchWord}
        savedSearchWord={savedSearchWord}
        savedShortMovie={savedShortMovie}
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