import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import * as MainApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';
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
import {
  FOR_FULL_SIZE_COUNT,
  FOR_LAPTOP_COUNT,
  FOR_MOBILE_COUNT,
  FULL_SIZE,
  FULL_SIZE_COUNT,
  LAPTOP,
  LAPTOP_COUNT,
  MOBILE,
  MOBILE_COUNT,
  TABLET,
  TABLET_COUNT,
  URL_REGEX,
} from '../../utils/constants/config';

const App = () => {

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [hiddenButton, setHiddenButton] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    setAllMovies,
    savedFilteredMovies,
    shortMovie,
    setShortMovie,
    searchWord,
    setSearchWord,
    isFetching,
    error,
    setError,
    isModalErrorOpen,
    setIsModalErrorOpen,
    savedMoviesList,
    setSavedMoviesList,
    showedMovies,
    setShowedMovies,
    savedSearchWord,
    setSavedSearchWord,
    setSavedShortMovie,
    setSavedFilteredMovies,
    savedShortMovie,
    handleFilterMovies,
    handleGetInSaveMovies,
  } = useMovieSearch();

  useEffect(() => {
    MainApi.getProfile()
      .then((user) => {
        setCurrentUser(user.user);
        setLoggedIn(true);
        checkPath();
      })
      .catch(() => {
        setLoggedIn(false);
        localStorage.clear();
      });
  }, []);

  const validateCard = (movies) => {
    return movies.filter((movie) => URL_REGEX.test(movie.trailerLink));
  };

  useEffect(() => {
    if (loggedIn) {
      Promise.all([MoviesApi.getMovies(), MainApi.getSavedMovies()])
        .then(([movies, savedMovies]) => {
          setAllMovies(validateCard(movies));
          setSavedMoviesList(savedMovies.movies);
          setShowedMovies(savedMoviesList);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (pathname === '/saved-movies') {
      setShowedMovies(savedMoviesList);
    }
  }, [pathname, savedMoviesList]);

  useEffect(() => {
    if (width >= FULL_SIZE) {
      setCount(FULL_SIZE_COUNT);
    } else if (FULL_SIZE > width && width > LAPTOP) {
      setCount(LAPTOP_COUNT);
    } else if (LAPTOP >= width && width > TABLET) {
      setCount(TABLET_COUNT);
    } else {
      setCount(MOBILE_COUNT);
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
    setMovies(savedFilteredMovies.slice(0, count));
  }, [count, savedFilteredMovies]);

  useEffect(() => {
    if (movies.length === savedFilteredMovies.length) {
      setHiddenButton(true);
    } else {
      setHiddenButton(false);
    }
  }, [movies.length, savedFilteredMovies.length]);

  const handleAddCards = () => {
    let moreCards;
    if (window.innerWidth >= MOBILE && window.innerWidth < LAPTOP) {
      moreCards = savedFilteredMovies.slice(movies.length, movies.length + FOR_MOBILE_COUNT);
    }
    if (window.innerWidth >= LAPTOP && window.innerWidth < FULL_SIZE) {
      moreCards = savedFilteredMovies.slice(movies.length, movies.length + FOR_LAPTOP_COUNT);
    }
    if (window.innerWidth >= FULL_SIZE) {
      moreCards = savedFilteredMovies.slice(movies.length, movies.length + FOR_FULL_SIZE_COUNT);
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

  function checkPath() {
    pathname === '/signin' || pathname === '/signup'
      ? navigate('/')
      : navigate(pathname);
  }

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

  const handleRegister = (formValues) => {
    MainApi.register(formValues)
      .then((data) => {
        setCurrentUser(data);
        handleLogin(formValues);
        setError('Вы успешно зарегистрировались!');
        setIsModalErrorOpen(true);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
        setIsModalErrorOpen(true);
      });
  };

  const handleLogin = (formValues) => {
    MainApi.authorized({
      email: formValues.email,
      password: formValues.password,
    })
      .then(() => {
          setLoggedIn(true);
          navigate('/movies');
        },
      )
      .catch(error => {
        signOut(formValues.email);
        setError(error.message);
        setIsModalErrorOpen(true);
      });
  };
  const signOut = (email) => {
    MainApi.logout(email)
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
        setAllMovies([]);
        setSavedFilteredMovies([]);
        setMovies([]);
        setSavedMoviesList([]);
        setSearchWord('');
        setSavedShortMovie('');
        setSavedSearchWord('');
        setShortMovie(false);
        navigate('/');
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
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/sign-up" element={<Register onRegister={handleRegister}/>}/>
            <Route path="/sign-in" element={<Login onLogin={handleLogin}/>}/>
            <Route element={<ProtectedRout loggedIn={loggedIn}/>}>
              <Route path="/movies" element={
                <Movies
                  movies={movies}
                  onFilterMovies={handleFilterMovies}
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
                  savedSearchWord={savedSearchWord}
                  savedShortMovie={savedShortMovie}
                />
              }/>
              <Route path="/saved-movies" element={
                <SavedMovies
                  movies={showedMovies}
                  onFilterMovies={handleGetInSaveMovies}
                  isFetching={isFetching}
                  shortMovie={shortMovie}
                  setShortMovie={setShortMovie}
                  removeMovies={handleRemoveMovies}
                  savedMoviesList={savedMoviesList}
                />
              }/>
              <Route path="/profile" element={
                <Profile
                  onOpenMenu={openMobileMenu}
                  onCloseMenu={closeMobileMenu}
                  isMenuActive={isMobileMenuActive}
                  updateProfile={updateProfile}
                  onSignOut={signOut}
                  loggedIn={loggedIn}
                />
              }/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </div>
        <ModalError
          isOpen={isModalErrorOpen}
          title={error}
          onClose={closeModalError}
        />
      </div>
    </CurrentUserContext.Provider>
  )
    ;
};

export default App;
