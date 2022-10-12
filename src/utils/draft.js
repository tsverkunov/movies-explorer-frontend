

///---searchForm---///

// const [values, setValues] = useState({ search: '' });
// const [errors, setErrors] = useState({ search: '' });
// const [isValid, setIsValid] = useState(false);
//
// const handleChange = (e) => {
//   const target = e.target;
//   const { name, value, validationMessage } = target;
//   setValues({ ...values, [name]: value });
//   setErrors({ ...errors, [name]: validationMessage });
//   setIsValid(target.closest('form').checkValidity());
// };

// useEffect(() => {
//   if (pathname === '/movies') {
//     // setShortMovie(localStorage.getItem(shortMovie))
//     // setValues({search: localStorage.getItem(searchWord)})
//
//     setValues({ search: savedSearchWord });
//     setShortMovie(savedShortMovie);
//   }
// }, []);

// useEffect(() => {
//   if (values.search) {
//     onGetMovies(values);
//   }
// }, [shortMovie]);

// const onSubmit = (e) => {
//   e.preventDefault();
//    onGetMovies(values);
// };


// app.js
// import './App.css';
// import React, { useEffect, useState } from 'react';
// import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
// import * as MainApi from '../../utils/MainApi';
// import * as MoviesApi from '../../utils/MoviesApi';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import Main from '../Main/Main';
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
// import Movies from '../Movies/Movies';
// import Profile from '../Profile/Profile';
// import Register from '../Register/Register';
// import Login from '../Login/Login';
// import NotFound from '../NotFound/NotFound';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import ModalError from '../ModalInfo/ModalInfo';
// import ProtectedRout from '../ProtectedRout/ProtectedRout';
// import useMovieSearch from '../../utils/hooks/useMovieSearch';
// import {
//   FOR_FULL_SIZE_COUNT,
//   FOR_LAPTOP_COUNT,
//   FOR_MOBILE_COUNT,
//   FULL_SIZE,
//   FULL_SIZE_COUNT,
//   LAPTOP,
//   LAPTOP_COUNT,
//   MOBILE,
//   MOBILE_COUNT,
//   TABLET,
//   TABLET_COUNT,
//   URL_REGEX,
// } from '../../utils/constants/config';
//
// const App = () => {
//
//   const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
//   const [movies, setMovies] = useState([]);
//   const [loggedIn, setLoggedIn] = useState(undefined);
//   const [hiddenButton, setHiddenButton] = useState(false);
//   const [currentUser, setCurrentUser] = useState({});
//   const [count, setCount] = useState(0);
//   const [width, setWidth] = useState(window.innerWidth);
//   const { pathname } = useLocation();
//   const history = useHistory();
//
//   const {
//     setAllMovies,
//     savedFilteredMovies,
//     shortMovie,
//     setShortMovie,
//     searchWord,
//     setSearchWord,
//     isFetching,
//     error,
//     setError,
//     isModalErrorOpen,
//     setIsModalErrorOpen,
//     savedMoviesList,
//     setSavedMoviesList,
//     showedMovies,
//     setShowedMovies,
//     savedSearchWord,
//     setSavedSearchWord,
//     setSavedShortMovie,
//     setSavedFilteredMovies,
//     savedShortMovie,
//     handleFilterMovies,
//     handleGetInSaveMovies,
//   } = useMovieSearch();
//
//   const validateCard = (movies) => {
//     return movies.filter((movie) => URL_REGEX.test(movie.trailerLink));
//   };
//
//   // useEffect(() => {
//   //   if (loggedIn) {
//   //     Promise.all([MainApi.getProfile(), MoviesApi.getMovies()])
//   //       .then(([userData, movies]) => {
//   //         setCurrentUser(userData.user);
//   //         setAllMovies(validateCard(movies));
//   //       })
//   //       .catch(error => {
//   //         setError(error.message);
//   //         setIsModalErrorOpen(true);
//   //       });
//   //   }
//   // }, [loggedIn]);
//
//
//   useEffect(() => {
//     MainApi.getProfile()
//       .then((user) => {
//         setCurrentUser(user.user);
//         setLoggedIn(true);
//         console.log(user);
//       })
//       .catch(() => {
//         setLoggedIn(false);
//       });
//   }, []);
//
//   useEffect(() => {
//     if (loggedIn) {
//       MoviesApi.getMovies()
//         .then((movies) => {
//           setAllMovies(validateCard(movies));
//         })
//         .catch(console.log);
//     }
//   }, [loggedIn]);
//
//   // useEffect(() => {
//   //   if (loggedIn) {
//   //     MainApi.getProfile()
//   //       .then(user => {
//   //         setCurrentUser(user.user);
//   //         checkPath();
//   //       })
//   //       .catch(error => {
//   //         setError(error.message);
//   //         setIsModalErrorOpen(true);
//   //       })
//   //   }
//   // }, [loggedIn]);
//
//
//   useEffect(() => {
//     if (pathname === '/saved-movies') {
//       setShowedMovies(savedMoviesList);
//     }
//   }, [pathname, savedMoviesList]);
//
//   // useEffect(() => {
//   //   checkAuth();
//   // }, []);
//
//   useEffect(() => {
//     MainApi.getSavedMovies()
//       .then(movies => {
//         setSavedMoviesList(movies.movies);
//         setShowedMovies(savedMoviesList);
//       })
//       .catch(console.log);
//   }, [loggedIn]);
//
//   useEffect(() => {
//     if (width >= FULL_SIZE) {
//       setCount(FULL_SIZE_COUNT);
//     } else if (FULL_SIZE > width && width > LAPTOP) {
//       setCount(LAPTOP_COUNT);
//     } else if (LAPTOP >= width && width > TABLET) {
//       setCount(TABLET_COUNT);
//     } else {
//       setCount(MOBILE_COUNT);
//     }
//   }, [width]);
//
//   function handleResize() {
//     setTimeout(() => {
//       setWidth(window.innerWidth);
//     }, 1000);
//   }
//
//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [width]);
//
//   useEffect(() => {
//     setMovies(savedFilteredMovies.slice(0, count));
//   }, [count, savedFilteredMovies]);
//
//   useEffect(() => {
//     if (movies.length === savedFilteredMovies.length) {
//       setHiddenButton(true);
//     } else {
//       setHiddenButton(false);
//     }
//   }, [movies.length, savedFilteredMovies.length]);
//
//   const handleAddCards = () => {
//     let moreCards;
//     if (window.innerWidth >= MOBILE && window.innerWidth < LAPTOP) {
//       moreCards = savedFilteredMovies.slice(movies.length, movies.length + FOR_MOBILE_COUNT);
//     }
//     if (window.innerWidth >= LAPTOP && window.innerWidth < FULL_SIZE) {
//       moreCards = savedFilteredMovies.slice(movies.length, movies.length + FOR_LAPTOP_COUNT);
//     }
//     if (window.innerWidth >= FULL_SIZE) {
//       moreCards = savedFilteredMovies.slice(movies.length, movies.length + FOR_FULL_SIZE_COUNT);
//     }
//     setMovies(movies.concat(moreCards));
//   };
//
//   const handleSaveMovies = (card) => {
//     if (!savedMoviesList.some((item) => item.movieId === card.movieId)) {
//       MainApi.postMovies(card)
//         .then((cardFromBase) => {
//           setSavedMoviesList([...savedMoviesList, cardFromBase.movie]);
//         })
//         .catch(console.log);
//     }
//   };
//   const handleRemoveMovies = (card) => {
//     if (card._id) {
//       MainApi.deleteMovie(card._id)
//         .then(() => {
//           setSavedMoviesList(showedMovies.filter((item) => item._id !== card._id));
//         })
//         .catch(console.log);
//     }
//   };
//
//   const closeModalError = () => {
//     setIsModalErrorOpen(false);
//   };
//   const openMobileMenu = () => {
//     setIsMobileMenuActive(true);
//   };
//   const closeMobileMenu = () => {
//     setIsMobileMenuActive(false);
//   };
//
//   // const checkAuth = () => {
//   //   if (localStorage.getItem('email')) {
//   //     setLoggedIn(true);
//   //     checkPath();
//   //   }
//   // };
//
//   function checkPath() {
//     if (pathname === '/signin' || pathname === '/signup') {
//       history.push('/');
//     }
//   }
//
//   // function checkPath() {
//   //   pathname === '/signin' || pathname === '/signup'
//   //     ? history.push('/')
//   //     : history.push(pathname);
//   // }
//
//   const updateProfile = (formValues) => {
//     MainApi.updateProfile(formValues)
//       .then((data) => {
//         setCurrentUser(data.user);
//         setError('Данные профиля обновлены.');
//         setIsModalErrorOpen(true);
//       })
//       .catch(error => {
//         setError(error.message);
//         setIsModalErrorOpen(true);
//       });
//   };
//
//   const handleRegister = (formValues) => {
//     MainApi.register(formValues)
//       .then((data) => {
//         setCurrentUser(data);
//         handleLogin(formValues);
//         setError('Вы успешно зарегистрировались!');
//         setIsModalErrorOpen(true);
//       })
//       .catch(error => {
//         setError(error.message);
//         setIsModalErrorOpen(true);
//       });
//   };
//
//   const handleLogin = (formValues) => {
//     MainApi.authorized({
//       email: formValues.email,
//       password: formValues.password,
//     })
//       .then((res) => {
//           // if (res.email) {
//           //   localStorage.setItem('email', res.email);
//           // }
//           // checkAuth();
//           history.push('/movies');
//         },
//       )
//       .catch(error => {
//         signOut(formValues.email);
//         setError(error.message);
//         setIsModalErrorOpen(true);
//       });
//   };
//   const signOut = (email) => {
//     MainApi.logout(email)
//       .then(() => {
//         localStorage.clear();
//         setLoggedIn(false);
//         setCurrentUser({});
//         setAllMovies([]);
//         setSavedFilteredMovies([]);
//         setMovies([]);
//         setSavedMoviesList([]);
//         setSearchWord('');
//         setSavedShortMovie('');
//         setSavedSearchWord('');
//         setShortMovie(false);
//         history.push('/');
//       })
//       .catch(error => {
//         setError(error.message);
//         setIsModalErrorOpen(true);
//       });
//   };
//
//   return (
//     <CurrentUserContext.Provider value={currentUser}>
//       <div className="page">
//         <div className="page__container">
//           <Header
//             loggedIn={loggedIn}
//             onOpenMenu={openMobileMenu}
//             onCloseMenu={closeMobileMenu}
//             isMenuActive={isMobileMenuActive}
//           />
//           <Switch>
//             <Route exact path="/">
//               <Main/>
//             </Route>
//             <Route path="/sign-up">
//               <Register
//                 onRegister={handleRegister}
//               />
//             </Route>
//             <Route path="/sign-in">
//               <Login
//                 onLogin={handleLogin}
//               />
//             </Route>
//             <ProtectedRout path="/movies" loggedIn={loggedIn}>
//               <Movies
//                 movies={movies}
//                 onFilterMovies={handleFilterMovies}
//                 isFetching={isFetching}
//                 setShortMovie={setShortMovie}
//                 shortMovie={shortMovie}
//                 error={error}
//                 addCards={handleAddCards}
//                 hiddenButton={hiddenButton}
//                 saveMovies={handleSaveMovies}
//                 removeMovies={handleRemoveMovies}
//                 savedMoviesList={savedMoviesList}
//                 searchWord={searchWord}
//                 savedSearchWord={savedSearchWord}
//                 savedShortMovie={savedShortMovie}
//               />
//             </ProtectedRout>
//             <ProtectedRout path="/saved-movies" loggedIn={loggedIn}>
//               <SavedMovies
//                 movies={showedMovies}
//                 onFilterMovies={handleGetInSaveMovies}
//                 isFetching={isFetching}
//                 shortMovie={shortMovie}
//                 setShortMovie={setShortMovie}
//                 removeMovies={handleRemoveMovies}
//                 savedMoviesList={savedMoviesList}
//               />
//             </ProtectedRout>
//             <ProtectedRout path="/profile" loggedIn={loggedIn}>
//               <Profile
//                 onOpenMenu={openMobileMenu}
//                 onCloseMenu={closeMobileMenu}
//                 isMenuActive={isMobileMenuActive}
//                 updateProfile={updateProfile}
//                 onSignOut={signOut}
//               />
//             </ProtectedRout>
//             <Route path="*">
//               <NotFound/>
//             </Route>
//           </Switch>
//           <Footer/>
//         </div>
//         <ModalError
//           isOpen={isModalErrorOpen}
//           title={error}
//           onClose={closeModalError}
//         />
//       </div>
//     </CurrentUserContext.Provider>
//   );
// };
//
// export default App;
