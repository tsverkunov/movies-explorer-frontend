import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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

  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false)
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

  const closeModalError = () => {
    setIsModalErrorOpen(false)
  }
  const openMobileMenu = () => {
    setIsMobileMenuActive(true)
  }
  const closeMobileMenu = () => {
    setIsMobileMenuActive(false)
  }

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
            <Header onOpenMenu={openMobileMenu} onCloseMenu={closeMobileMenu} isMenuActive={isMobileMenuActive}/>
            <Movies/>
            <Footer/>
          </Route>
          <Route path="/saved-movies">
            <Header onOpenMenu={openMobileMenu} onCloseMenu={closeMobileMenu} isMenuActive={isMobileMenuActive}/>
            <SavedMovies/>
            <Footer/>
          </Route>
          <Route path="/profile">
            <Header/>
            <Profile/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
      <ModalError isOpen={isModalErrorOpen} title="Error" onClose={closeModalError}/>
      {/*<Menu/>*/}
    </div>
  );
};

export default App;
