import React from 'react';
import Register from '../Register/Register';

function Login() {
  return (
    <Register
      hiddenInput="register__fieldset_hidden"
      greetingText="Рады видеть!"
      buttonText="Войти"
      signInText="Ещё не зарегистрированы?"
      link="/sign-up"
      linkText="Регистрация"
    />
  );
}

export default Login;