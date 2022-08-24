import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({
                  onGetMovies,
                  cards,
                  isFetching,
                  onChangeCheckbox,
                  isChecked,
                  isMenuActive,
                  onCloseMenu,
                  onOpenMenu,
                  error,
                  addCards,
                  hiddenButton,
                }) {
  return (
    <div className="movies">
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
        cards={cards}
        isFetching={isFetching}
        error={error}
      />
      <MoreButton
        addCards={addCards}
        hiddenButton={hiddenButton}
      />
      <Footer/>
    </div>
  );
}

export default Movies;