import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as MoviesApi from '../../utils/MoviesApi';
import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import ModalError from '../ModalInfo/ModalInfo';

const App = () => {

  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [allCards, setAllCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [hiddenButton, setHiddenButton] = useState(false);
  const [requestValue, setRequestValue] = useState('');
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

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

  useEffect(() => {
    if (cards.length === filterCards.length) {
      setHiddenButton(true);
    } else {
      setHiddenButton(false);
    }
  }, [cards.length, filterCards.length]);

  useEffect(() => {
    setFilterCards([]);
    const filter = allCards.filter((card) => card.nameRU.toLowerCase().includes(requestValue.toLowerCase()));
    setFilterCards(filter);
  }, [allCards, requestValue]);


  useEffect(() => {
    window.addEventListener('resize', resizeThrottler, false);
  }, []);

  const actualResizeHandler = () => {
    if (window.screen.width < 480) {
      setCards(filterCards.slice(0, 5));
    }
    if (window.screen.width >= 480 && window.screen.width < 1280) {
      setCards(filterCards.slice(0, 8));
    }
    if (window.screen.width > 1280) {
      setCards(filterCards.slice(0, 12));
    }
  };

  let resizeTimeout;

  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        console.log(resizeTimeout);
        resizeTimeout = null;
        console.log('after null :', resizeTimeout);
        actualResizeHandler();
      }, 500);
    }
  }


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
  const handleSaveMovies = (card) => { // вызвать в postMovies
    setSavedMoviesList([...savedMoviesList, card]);
  };
  const handleRemoveMovies = (card) => {
    setSavedMoviesList(savedMoviesList.filter((item) => item.id !== card.id));
  };

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

  // const checkToken = () => {
  //   let id = localStorage.getItem('id')
  //   if (id) {
  //     auth.getUserData().then((res) => {
  //       setLoggedIn(true)
  //       setOwnerEmail(res.user.email)
  //     })
  //       .catch(console.log)
  //   }
  // }

  // const handleLogin = (formValue) => {
  //   MainApi.authorized(formValue)
  //     .then(res => {
  //       if (res.user._id) {
  //         localStorage.setItem('id', res.user._id);
  //       }
  //       checkToken();
  //     })
  //     .catch(error => {
  //       // setErrorMessage(error.message);
  //       // setIsSuccess(false);
  //       // setIsInfoTooltipPopupOpen(true);
  //     });
  // };

  const handleRegister = (values) => {
    MainApi.register(values)
      .then(registerData => {
        // handleLogin(registerData);
      })
      .catch(err => {
          setRegisterError(err);
        },
      );
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
  const handleSaveMoviesInDB = (card) => {
    MainApi.postMovies(card)
      .then()
      .catch();
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Switch>
            <Route path="/sign-up">
              <Register
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
                saveMovies={handleSaveMovies}
                removeMovies={handleRemoveMovies}
                savedMoviesList={savedMoviesList}
              />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies
                onOpenMenu={openMobileMenu}
                onCloseMenu={closeMobileMenu}
                isMenuActive={isMobileMenuActive}
                cards={savedMoviesList}
                isFetching={isFetching}
                onGetMovies={handleGetMovies}
                isChecked={isChecked}
                onChangeCheckbox={handleOnChangeCheckbox}
                removeMovies={handleRemoveMovies}
                savedMoviesList={savedMoviesList}
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
    </CurrentUserContext.Provider>
  );
};

export default App;
