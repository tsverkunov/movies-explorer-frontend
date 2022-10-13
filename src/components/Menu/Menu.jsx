import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css';
import closeButton from '../../images/menu_close_button.svg';

function Menu({ isMenuActive, onCloseMenu }) {

  return (
    <div className={`menu ${isMenuActive && 'menu_active'}`}>
      <img
        src={closeButton}
        className="menu__close-button"
        alt="Закрыть"
        onClick={onCloseMenu}
      ></img>
      <nav className="menu__container">
        <NavLink
          exact to="/"
          className={({ isActive }) => isActive ? 'menu__link-movies menu__link-movies_selected' : 'menu__link-movies'}
          onClick={onCloseMenu}
          end
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => isActive ? 'menu__link-movies menu__link-movies_selected' : 'menu__link-movies'}
          onClick={onCloseMenu}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) => isActive ? 'menu__link-movies menu__link-movies_selected' : 'menu__link-movies'}
          onClick={onCloseMenu}
        >
          Сохранённые фильмы
        </NavLink>
      </nav>
      <Link className="menu__account" to="/profile" onClick={onCloseMenu}>Аккаунт</Link>
    </div>
  );
}

export default Menu;
