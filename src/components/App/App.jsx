import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as MoviesApi from '../../utils/MoviesApi';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import ModalError from '../ModalError/ModalError';

const App = () => {

  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [allCards, setAllCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const [hiddenButton, setHiddenButton] = useState(false);
  const [requestValue, setRequestValue] = useState('');

  useEffect(() => {
    if (filterCards.length && window.screen.width >= 320 && window.screen.width < 480) {
      setCards(filterCards.slice(0, 5));
    }
    if (filterCards.length && window.screen.width >= 480 && window.screen.width < 1280) {
      setCards(filterCards.slice(0, 8));
    }
    if (filterCards.length && window.screen.width >= 1280) {
      setCards(filterCards.slice(0, 12));
    }
  }, [filterCards]);

  // window.addEventListener('resize', resizeThrottler, false);
  //
  // const actualResizeHandler = () => {
  //   if (window.innerWidth < 480 && cards.length < 5) {
  //     setCards(cards.concat(filterCards.slice(cards.length, 5)));
  //   }
  //   if (window.innerWidth >= 480 && window.screen.width < 1280 && cards.length < 8) {
  //     setCards(cards.concat(filterCards.slice(cards.length, 8)));
  //   }
  //   if (window.innerWidth > 1280 && cards.length < 12) {
  //     setCards(cards.concat(filterCards.slice(cards.length, 12)));
  //   }
  //   console.log(window.innerWidth)
  // };
  //
  // let resizeTimeout;
  //
  // function resizeThrottler() {
  //   if (!resizeTimeout) {
  //
  //     resizeTimeout = setTimeout(() => {
  //       resizeTimeout = null;
  //       actualResizeHandler();
  //     }, 66);
  //   }
  // }

  useEffect(() => {
    if (cards.length === filterCards.length) {
      setHiddenButton(true);
    } else {
      setHiddenButton(false);
    }
  }, [cards.length, filterCards.length]);

  const handleAddCards = () => {
    let moreCards;
    if (window.screen.width >= 320 && window.screen.width < 1280) {
      moreCards = filterCards.slice(cards.length, cards.length + 2);
    }
    if (window.screen.width >= 1280) {
      moreCards = filterCards.slice(cards.length, cards.length + 3);
    }
    setCards(cards.concat(moreCards));
  };

  useEffect(() => {
    setFilterCards([]);
    const filter = allCards.filter((card) => card.nameRU.toLowerCase().includes(requestValue.toLowerCase()),
    );
    setFilterCards(filter);
  }, [allCards, requestValue]);

  const handleOnChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const closeModalError = () => {
    setIsModalErrorOpen(false);
  };
  const openMobileMenu = () => {
    setIsMobileMenuActive(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  const handleGetMovies = (searchValue) => {
    setRequestValue(searchValue.search);
    setIsFetching(true);
    MoviesApi.getMovies()
      .then(cards => {
        setAllCards(cards);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setIsFetching(false));
  };

  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route path="/sign-up">
            <Register
              hiddenInput=""
              greetingText="Добро пожаловать!"
              buttonText="Зарегистрироваться"
              signInText="Уже зарегистрированы?"
              link="/sign-in"
              linkText="Войти"
            />
          </Route>
          <Route path="/sign-in">
            <Login/>
          </Route>
          <Route exact path="/">
            <Header main={true}/>
            <Main/>
            <Footer/>
          </Route>
          <Route path="/movies">
            <Movies
              onOpenMenu={openMobileMenu}
              onCloseMenu={closeMobileMenu}
              isMenuActive={isMobileMenuActive}
              onGetMovies={handleGetMovies}
              cards={cards}
              isFetching={isFetching}
              onChangeCheckbox={handleOnChangeCheckbox}
              isChecked={isChecked}
              error={error}
              addCards={handleAddCards}
              hiddenButton={hiddenButton}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies
              onOpenMenu={openMobileMenu}
              onCloseMenu={closeMobileMenu}
              isMenuActive={isMobileMenuActive}
              cards={cards}
              isFetching={isFetching}
              onGetMovies={handleGetMovies}
              isChecked={isChecked}
              onChangeCheckbox={handleOnChangeCheckbox}
            />

          </Route>
          <Route path="/profile">
            <Profile
              onOpenMenu={openMobileMenu}
              onCloseMenu={closeMobileMenu}
              isMenuActive={isMobileMenuActive}
            />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
      <ModalError
        isOpen={isModalErrorOpen}
        title="Error"
        onClose={closeModalError}
      />
    </div>
  );
};

export default App;
