import React from 'react';
import './Profile.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const owner = {
  name: 'Иван'
}

function Profile({isMenuActive, onCloseMenu, onOpenMenu}) {
  return (
    <div className="profile">
      <Header
        onOpenMenu={onOpenMenu}
        onCloseMenu={onCloseMenu}
        isMenuActive={isMenuActive}
      />
      <h2 className="profile__greetings">{`Привет, ${owner.name}!`}</h2>
      <div className="profile__fields-wrapper">
        <div className="profile__field-container">
          <span className="profile__field">Имя</span>
          <span className="profile__field-value">Иван</span>
        </div>
        <span className="profile__line"></span>
        <div className="profile__field-container">
          <span className="profile__field">E-mail</span>
          <span className="profile__field-value">11@22.ru</span>
        </div>
      </div>
      <Link to="/" className="profile_editing">Редактировать</Link>
      <Link to="/sign-up" className="profile__sign-out">Выйти из аккаунта</Link>
    </div>
  );
}

export default Profile;