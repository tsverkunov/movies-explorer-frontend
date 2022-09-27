import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Menu from '../Menu/Menu';
import logo from '../../images/logo.svg';
import menuButton from '../../images/menu_burger_button.svg';

function Header({ loggedIn, onOpenMenu, isMenuActive, onCloseMenu }) {
  const { pathname } = useLocation();
  const main = pathname === '/';
  const show = pathname === !'/sign-up'
    || pathname === !'/sign-in'
    || pathname === '/'
    || pathname === '/movies'
    || pathname === '/saved-movies'
    || pathname === '/profile';
  return (
    <header className={`header ${main && 'header_main'} ${show && 'header_show'}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип"/>
      </Link>

      {loggedIn
        ?
        <>
          <img src={menuButton} className="header__menu-button" alt="Меню" onClick={onOpenMenu}></img>
          <Menu onCloseMenu={onCloseMenu} isMenuActive={isMenuActive}/>
          <div className="header__container">
            <NavLink to="/movies" className="header__link-movies" activeClassName="header__link-movies_selected">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="header__link-movies" activeClassName="header__link-movies_selected">
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link className="header__account" to="/profile">Аккаунт</Link>
        </>
        :
        <div className="header__button-container">
          <Link className="header__register" to="/sign-up">Регистрация</Link>
          <Link className="header__button-login" to="/sign-in">Войти</Link>
        </div>
      }


    </header>
  );
}

export default Header;