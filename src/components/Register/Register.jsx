import React from 'react';
import './Register.css';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useFormWithValidation } from '../../utils/hooks/useFormWithValidation';

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const onSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
    resetForm();
  };

  return (
    <RegisterForm
      onSubmit={onSubmit}
      isValid={isValid}
      greetingText="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      signInText="Уже зарегистрированы?"
      link="/sign-in"
      linkText="Войти"
    >
      <fieldset className="register__fieldset">
        <label className="register__label" htmlFor="name">Имя</label>
        <input
          type="text"
          name="name"
          className="register__input"
          id="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <span className="register__error">{errors.name}</span>
      </fieldset>
      <fieldset className="register__fieldset">
        <label className="register__label" htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          className="register__input"
          id="email"
          minLength="2"
          maxLength="30"
          value={values.email}
          onChange={handleChange}
          required
        />
        <span className="register__error">{errors.email}</span>
      </fieldset>
      <fieldset className="register__fieldset">
        <label className="register__label" htmlFor="password">Пароль</label>
        <input
          type="password"
          name="password"
          className="register__input register__input_password"
          id="password"
          minLength="8"
          maxLength="30"
          value={values.password}
          onChange={handleChange}
          required
        />
        <span className="register__error">{errors.password}</span>
      </fieldset>
    </RegisterForm>
  );
}

export default Register;
