import React from 'react';
import logo from '../../images/logo.svg';
import './RegisterForm.css';
import { Link } from 'react-router-dom';

function RegisterForm({
                        children,
                        onSubmit,
                        isValid,
                        greetingText,
                        buttonText,
                        signInText,
                        link,
                        linkText,
                      }) {
  return (
    <div className="register-form">
      <div className="register-form__greeting-container">
        <Link to="/">
          <img className="register-form__logo" src={logo} alt="Логотип"/>
        </Link>

        <h2 className="register-form__greeting">{greetingText}</h2>
      </div>
      <form
        onSubmit={onSubmit}
        className="register-form__form"
        name="register-form"
        noValidate
      >
        <div className="register-form__form-container">
          {children}
        </div>
        <button className="register-form__button" type="submit" disabled={!isValid}>
          {buttonText}
        </button>
      </form>
      <div className="register-form__sign-in-container">
        <span className="register-form__sign-up">
         {signInText}
          <Link to={link} className="register-form__sign-in-link"> {linkText}</Link>
        </span>
      </div>
    </div>
  );
}

export default RegisterForm;