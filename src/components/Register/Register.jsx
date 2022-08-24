import React from 'react';
import logo from '../../images/logo.svg';
import './Register.css';
import { Link } from 'react-router-dom';

function Register({
  hiddenInput,
  greetingText,
  buttonText,
  signInText,
  link,
  linkText,
  }) {
  return (
    <div className="register">
      <div className="register__greeting-container">
        <Link to="/">
          <img className="register__logo" src={logo} alt="Логотип"/>
        </Link>

        <h2 className="register__greeting">{greetingText}</h2>
      </div>
      <form action="" className="register__form">
        <div className="register__form-container">
          <fieldset className={`register__fieldset ${hiddenInput}`}>
            <label className="register__label" htmlFor="name">Имя</label>
            <input type="text" className="register__input" id="name" required/>
            <span className="register__error"></span>
          </fieldset>
          <fieldset className="register__fieldset">
            <label className="register__label" htmlFor="email">E-mail</label>
            <input type="email" className="register__input" id="email" required/>
            <span className="register__error"></span>
          </fieldset>
          <fieldset className="register__fieldset">
            <label className="register__label" htmlFor="password">Пароль</label>
            <input type="password" className="register__input register__input_password" id="password" required/>
            <span className="register__error"></span>
          </fieldset>
        </div>
        <button className="register__button" type="submit">{buttonText}</button>
      </form>
      <div className="register__sign-in-container">
        <span className="register__sign-up">
         {signInText}
          <Link to={link} className="register__sign-in-link"> {linkText}</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;