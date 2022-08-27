import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({
                       isMenuActive,
                       onCloseMenu,
                       onOpenMenu,
                       cards,
                       isFetching,
                       onGetMovies,
                       isChecked,
                       onChangeCheckbox,
                       removeMovies,
                       savedMoviesList,
}) {
  return (
    <div className="savedMovies">
      <Header
        onOpenMenu={onOpenMenu}
        onCloseMenu={onCloseMenu}
        isMenuActive={isMenuActive}
      />
      <SearchForm
        onGetMovies={onGetMovies}
        onChangeCheckbox={onChangeCheckbox}
        isChecked={isChecked}
      />
      <MoviesCardList
        savedMovies={true}
        cards={cards}
        isFetching={isFetching}
        removeMovies={removeMovies}
        savedMoviesList={savedMoviesList}
      />
      <Footer/>
    </div>
  );
}

export default SavedMovies;