import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
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
import ProtectedRout from '../ProtectedRout/ProtectedRout';
import useMovieSearch from '../../utils/hooks/useMovieSearch';

const App = () => {
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [hiddenButton, setHiddenButton] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const history = useHistory();
  const { pathname } = useLocation();

  const {
    setAllMovies,
    filterMovies,
    setFilterMovies,
    shortMovie,
    setShortMovie,
    searchWord,
    setSearchWord,
    isFetching,
    error,
    setError,
    savedMoviesList,
    setSavedMoviesList,
    showedMovies,
    setShowedMovies,
    handleGetMovies,
    handleGetInSaveMovies,
  } = useMovieSearch();

  useEffect(() => {
    if (loggedIn) {
      MainApi.getProfile()
        .then((userData) => {
          setCurrentUser(userData.user);
        })
        .catch(console.log);
    }
  }, [loggedIn]);

  useEffect(() => {
    if (pathname === '/saved-movies') {
      setShowedMovies(savedMoviesList);
    }
  }, [pathname, savedMoviesList]);

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      history.push('/movies');
    }
  }, [history, loggedIn]);

  useEffect(() => {
    MainApi.getSavedMovies()
      .then(movies => {
        setSavedMoviesList(movies.movies);
        setShowedMovies(savedMoviesList);
      })
      .catch(console.log);
  }, [loggedIn]);

  useEffect(() => {
    if (width >= 1670) {
      setCount(16);
    } else if (1670 > width && width > 768) {
      setCount(12);
    } else if (768 >= width && width > 500) {
      setCount(8);
    } else {
      setCount(5);
    }
  }, [width]);

  function handleResize() {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  useEffect(() => {
    setMovies(filterMovies.slice(0, count));
  }, [count, filterMovies]);

  useEffect(() => {
    if (movies.length === filterMovies.length) {
      setHiddenButton(true);
    } else {
      setHiddenButton(false);
    }
  }, [movies.length, filterMovies.length]);

  const handleAddCards = () => {
    let moreCards;
    if (window.innerWidth >= 320 && window.innerWidth < 1280) {
      moreCards = filterMovies.slice(movies.length, movies.length + 2);
    }
    if (window.innerWidth >= 1280) {
      moreCards = filterMovies.slice(movies.length, movies.length + 3);
    }
    setMovies(movies.concat(moreCards));
  };

  const handleSaveMovies = (card) => {
    if (!savedMoviesList.some((item) => item.movieId === card.movieId)) {
      MainApi.postMovies(card)
        .then((cardFromBase) => {
          setSavedMoviesList([...savedMoviesList, cardFromBase.movie]);
        })
        .catch(console.log);
    }
  };
  const handleRemoveMovies = (card) => {
    if (card._id) {
      MainApi.deleteMovie(card._id)
        .then(() => {
          setSavedMoviesList(showedMovies.filter((item) => item._id !== card._id));
        })
        .catch(console.log);
    }
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

  const checkToken = () => {
    let jwt = localStorage.getItem('jwt');
    if (jwt) {
      setLoggedIn(true);
    }
  };
  const handleLogin = (formValues) => {
    MainApi.authorized({ email: formValues.email, password: formValues.password })
      .then((res) => {
          if (res.token) {
            localStorage.setItem('jwt', res.token);
          }
          checkToken();
          history.push('/movies');
        },
      )
      .catch(error => {
        setError(error.message);
        setIsModalErrorOpen(true);
      });
  };
  const signOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({});
    setAllMovies([]);
    setFilterMovies([]);
    setMovies([]);
    setSavedMoviesList([]);
    setSearchWord('');
    setShortMovie(false);
    history.push('/');
  };
  const handleRegister = (formValues) => {
    MainApi.register(formValues)
      .then((data) => {
        setCurrentUser(data);
        handleLogin(formValues);
        setError('Вы успешно зарегистрировались!');
        setIsModalErrorOpen(true);
      })
      .catch(error => {
        console.log('error :', error);
        setError(error.message);
        setIsModalErrorOpen(true);
      });
  };
  const updateProfile = (formValues) => {
    MainApi.updateProfile(formValues)
      .then((data) => {
        setCurrentUser(data.user);
        setError('Данные профиля обновлены.');
        setIsModalErrorOpen(true);
      })
      .catch(error => {
        setError(error.message);
        setIsModalErrorOpen(true);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header
            loggedIn={loggedIn}
            onOpenMenu={openMobileMenu}
            onCloseMenu={closeMobileMenu}
            isMenuActive={isMobileMenuActive}
          />
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route path="/sign-up">
              <Register
                onRegister={handleRegister}
              />
            </Route>
            <Route path="/sign-in">
              <Login
                onLogin={handleLogin}
              />
            </Route>
            <ProtectedRout path="/movies" loggedIn={loggedIn}>
              <Movies
                onGetMovies={handleGetMovies}
                movies={movies}
                isFetching={isFetching}
                setShortMovie={setShortMovie}
                shortMovie={shortMovie}
                error={error}
                addCards={handleAddCards}
                hiddenButton={hiddenButton}
                saveMovies={handleSaveMovies}
                removeMovies={handleRemoveMovies}
                savedMoviesList={savedMoviesList}
                searchWord={searchWord}
              />
            </ProtectedRout>
            <ProtectedRout path="/saved-movies" loggedIn={loggedIn}>
              <SavedMovies
                movies={showedMovies}
                isFetching={isFetching}
                onGetMovies={handleGetInSaveMovies}
                shortMovie={shortMovie}
                setShortMovie={setShortMovie}
                removeMovies={handleRemoveMovies}
                savedMoviesList={savedMoviesList}
              />
            </ProtectedRout>
            <ProtectedRout path="/profile" loggedIn={loggedIn}>
              <Profile
                onOpenMenu={openMobileMenu}
                onCloseMenu={closeMobileMenu}
                isMenuActive={isMobileMenuActive}
                updateProfile={updateProfile}
                onSignOut={signOut}
              />
            </ProtectedRout>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </div>
        <ModalError
          isOpen={isModalErrorOpen}
          title={error}
          onClose={closeModalError}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
