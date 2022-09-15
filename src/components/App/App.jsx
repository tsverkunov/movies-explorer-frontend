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
  const [registerError, setRegisterError] = useState('');
  const [hiddenButton, setHiddenButton] = useState(false);
  const [requestValue, setRequestValue] = useState('');
  const [savedMoviesList, setSavedMoviesList] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const history = useHistory()

  // const a = {
  //   "id": 2,
  //   "nameRU": "All Tomorrow's Parties",
  //   "nameEN": "All Tomorrow's Parties",
  //   "director": " Джонатан Кауэтт",
  //   "country": "Великобритания",
  //   "year": "2009",
  //   "duration": 82,
  //   "description": "Хроники британского",
  //   "trailerLink": "https://www.youtube.com/watch?v=D5fBhbEJxEU",
  //   "created_at": "2020-11-23T14:15:19.238Z",
  //   "updated_at": "2020-11-23T14:15:19.238Z",
  //   "image": {
  //     "id": 2,
  //     "name": "all-tommoros-parties",
  //     "alternativeText": "",
  //     "caption": "",
  //     "width": 699,
  //     "height": 266,
  //     "formats": {
  //       "thumbnail": {
  //         "hash": "thumbnail_all_tommoros_parties_33a125248d",
  //         "ext": ".jpeg",
  //         "mime": "image/jpeg",
  //         "width": 245,
  //         "height": 93,
  //         "size": 10.33,
  //         "path": null,
  //         "url": "/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg"
  //       },
  //       "small": {
  //         "hash": "small_all_tommoros_parties_33a125248d",
  //         "ext": ".jpeg",
  //         "mime": "image/jpeg",
  //         "width": 500,
  //         "height": 190,
  //         "size": 35.24,
  //         "path": null,
  //         "url": "/uploads/small_all_tommoros_parties_33a125248d.jpeg"
  //       }
  //     },
  //     "hash": "all_tommoros_parties_33a125248d",
  //     "ext": ".jpeg",
  //     "mime": "image/jpeg",
  //     "size": 67.06,
  //     "url": "/uploads/all_tommoros_parties_33a125248d.jpeg",
  //     "previewUrl": null,
  //     "provider": "local",
  //     "provider_metadata": null,
  //     "created_at": "2020-11-23T14:14:08.595Z",
  //     "updated_at": "2020-11-23T14:14:08.595Z"
  //   }
  // }

  // useEffect(() => {
  //   MainApi.getSavedMovies()
  //     .then(cards => {
  //       console.log(cards);
  //       // setSavedMoviesList([...savedMoviesList, cards])
  //     })
  //     .catch()
  // }, [])

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
    const filter = allCards.filter((card) => card.nameRU.toLowerCase().includes(requestValue.toLowerCase()),
    );
    setFilterCards(filter);
  }, [allCards, requestValue]);


  useEffect(() => {
    window.addEventListener('resize', resizeThrottler, false);
  }, [])

  const actualResizeHandler = () => {
    if (window.screen.width < 480 ) {
      setCards(filterCards.slice(0, 5));
    }
    if (window.screen.width >= 480 && window.screen.width < 1280 ) {
      setCards(filterCards.slice(0, 8));
    }
    if (window.screen.width > 1280 ) {
      setCards(filterCards.slice(0, 12));
    }
  };

  let resizeTimeout;

  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        console.log(resizeTimeout);
        resizeTimeout = null;
        console.log("after null :", resizeTimeout);
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
    MainApi.postMovies(card)
      .then(() => {
        setSavedMoviesList([...savedMoviesList, card])
      })
      .catch()
  }
  const handleRemoveMovies = (card) => {
    setSavedMoviesList(savedMoviesList.filter((item) => item.id !== card.id))
  }

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

  // const objectConversion = (card) => {
  //   // if (card) {
  //     return {
  //       id: card.id !== undefined ? card.id : 'default',
  //       nameRU: card.nameRU !== undefined ? card.nameRU : 'default',
  //       nameEN: card.nameEN !== undefined ? card.nameEN : 'default',
  //       director: card.director !== undefined ? card.director : 'default',
  //       country: card.country !== undefined ? card.country : 'default',
  //       year: card.year !== undefined ? card.year : 'default',
  //       duration: card.duration !== undefined ? card.duration : 0,
  //       description: card.year !== undefined ? card.year : 'default',
  //       trailerLink: "https://www.youtube.com/watch?v=D5fBhbEJxEU",
  //       created_at: card.year !== undefined ? card.year : 'default',
  //       updated_at: card.year !== undefined ? card.year : 'default',
  //       image: {
  //         id: 2,
  //         name: card.year !== undefined ? card.year : 'default',
  //         alternativeText: card.year !== undefined ? card.year : 'default',
  //         caption: card.year !== undefined ? card.year : 'default',
  //         width: 699,
  //         height: 266,
  //         formats: {
  //           thumbnail: {
  //             hash: "thumbnail_all_tommoros_parties_33a125248d",
  //             ext: ".jpeg",
  //             mime: "image/jpeg",
  //             width: 245,
  //             height: 93,
  //             size: 10.33,
  //             path: null,
  //             url: "/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg"
  //           },
  //           small: {
  //             hash: "small_all_tommoros_parties_33a125248d",
  //             ext: ".jpeg",
  //             mime: "image/jpeg",
  //             width: 500,
  //             height: 190,
  //             size: 35.24,
  //             path: null,
  //             url: "/uploads/small_all_tommoros_parties_33a125248d.jpeg"
  //           }
  //         },
  //         hash: "all_tommoros_parties_33a125248d",
  //         ext: ".jpeg",
  //         mime: "image/jpeg",
  //         size: 67.06,
  //         url: "/uploads/all_tommoros_parties_33a125248d.jpeg",
  //         previewUrl: null,
  //         provider: "local",
  //         provider_metadata: null,
  //         created_at: "2020-11-23T14:14:08.595Z",
  //         updated_at: "2020-11-23T14:14:08.595Z"
  //       }
  //     }
  //   // }
  // }
  // console.log(objectConversion({
  //   country: "США",
  //   created_at: "2020-11-23T14:12:21.376Z",
  //   description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
  //   director: "Стивен Кайак ",
  //   duration: 61,
  //   id: 1,
  //   image: {
  //     alternativeText: "",
  //     caption: "",
  //     created_at: "2020-11-23T14:11:57.313Z",
  //     ext: ".jpeg",
  //     formats: {
  //       small:{
  //         ext: ".jpeg",
  //         hash: "small_stones_in_exile_b2f1b8f4b7",
  //         height: 272,
  //         mime: "image/jpeg",
  //         path: null,
  //         size: 25.68,
  //         url: "/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
  //         width: 500
  //       },
  //       thumbnail: {
  //         ext: ".jpeg",
  //         hash: "thumbnail_stones_in_exile_b2f1b8f4b7",
  //         height: 134,
  //         mime: "image/jpeg",
  //         path: null,
  //         size: 8.79,
  //         url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg",
  //         width: 245
  //       },
  //       hash: "stones_in_exile_b2f1b8f4b7",
  //       height: 279,
  //       id: 1,
  //       mime: "image/jpeg",
  //       name: "stones-in-exile",
  //       previewUrl: null,
  //       provider: "local",
  //       provider_metadata: null,
  //       size: 25.53,
  //       updated_at: "2020-11-23T14:11:57.313Z",
  //       url: "/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
  //       width: 512,
  //     },
  //     nameEN: "Stones in Exile",
  //     nameRU: "«Роллинг Стоунз» в изгнании",
  //     trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
  //     updated_at: "2020-11-23T14:12:21.376Z",
  //     year: "2010",
  //   }
  // }).id)

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
  // const handleSaveMoviesInDB = (card) => {
  //   MainApi.postMovies(card)
  //     .then(() => {
  //       setSavedMoviesList([...savedMoviesList, card])
  //     })
  //     .catch()
  // }

  const handleRegister = (formValues) => {
    console.log('formValues:', formValues)
    MainApi.register(formValues)
      .then((data) => {
        console.log('data :', data);
        setCurrentUser(data)
        console.log(currentUser);

        // MainApi.authorized({email: formValues.email, password: formValues.password})
        //   .then((data) => {
        //     history.push('/movies')
        //   })
        //   .catch(console.log)
      })
      .catch(error => {
        console.log('error :', error)
        setError(error.message)
        setIsModalErrorOpen(true)
      })
  }

  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route path="/sign-up">
            <Register
              onRegister={handleRegister}
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
        title={error}
        onClose={closeModalError}
      />
    </div>
  );
};

export default App;
