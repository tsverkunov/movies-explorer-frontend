import React, { useContext, useEffect } from 'react';
import './Profile.css';
import { useFormWithValidation } from '../../utils/hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';

function Profile({ updateProfile, onSignOut }) {
  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();

  useEffect(() => {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
  }, [currentUser, location]);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false);
    }
  }, [values]);

  const onSubmit = (e) => {
    e.preventDefault();
    updateProfile(values);
  };

  const SignOut = () => {
    onSignOut(values.email);
  };

  return (
    <section className="profile">
      <h2 className="profile__greetings">{`Привет, ${currentUser.name}!`}</h2>
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
            type="email"
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
        <button
          type="submit"
          className="profile__editing-button"
          disabled={!isValid}
        >
          Редактировать
        </button>
      </form>
      <button
        type="button"
        className="profile__sign-out"
        onClick={SignOut}
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
