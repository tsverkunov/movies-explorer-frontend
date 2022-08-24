import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

function Movies() {
  return (
    <div className="movies">
      <SearchForm/>
      <MoviesCardList/>
      <MoreButton/>
    </div>
  );
}

export default Movies;