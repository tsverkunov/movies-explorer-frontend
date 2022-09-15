import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useFormWithValidation } from '../../utils/hooks/useFormWithValidation';

const owner = {
  name: 'Иван',
};

function Profile({ isMenuActive, onCloseMenu, onOpenMenu }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const onSubmit = (e) => {
    e.preventDefault()
    resetForm()
  }

  return (
    <section className="profile">
      <Header
        onOpenMenu={onOpenMenu}
        onCloseMenu={onCloseMenu}
        isMenuActive={isMenuActive}
      />
      <h2 className="profile__greetings">{`Привет, ${owner.name}!`}</h2>
      <form className="profile__form" onSubmit={onSubmit}>
        <fieldset className="profile__fieldset">
          <label className="profile__label" htmlFor="name">Имя</label>
          <input
            type="text"
            className="profile__input"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            required
            minLength="2"
            maxLength="30"
          />
        </fieldset>
        <span className="profile__error">{errors.name}</span>
        <span className="profile__line"></span>
        <fieldset className="profile__fieldset">
          <label className="profile__label" htmlFor="email">E-mail</label>
          <input
            type="text"
            className="profile__input"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </fieldset>
        <span className="profile__error">{errors.email}</span>
        <div className="profile__helper"></div>
        <button type="submit" className="profile__editing-button" disabled={!isValid}>Редактировать</button>
      </form>
      <Link to="/sign-up" className="profile__sign-out">Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;