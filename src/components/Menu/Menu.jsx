import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css';
import closeButton from '../../images/menu_close_button.svg';

function Menu({ isMenuActive, onCloseMenu }) {
  return (
    <div className={`menu ${isMenuActive && 'menu_active'}`}>
      <div className="menu__container">
        <img
          src={closeButton}
          className="menu__close-button"
          alt="Закрыть"
          onClick={onCloseMenu}
        ></img>
        <NavLink
          exact to="/"
          className="menu__link-movies"
          activeClassName="menu__link-movies_selected"
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className="menu__link-movies"
          activeClassName="menu__link-movies_selected"
          onClick={onCloseMenu}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="menu__link-movies"
          activeClassName="menu__link-movies_selected"
          onClick={onCloseMenu}
        >
          Сохранённые фильмы
        </NavLink>
      </div>
      <Link className="menu__account" to="/profile" onClick={onCloseMenu}>Аккаунт</Link>
    </div>
  );
}

export default Menu;
