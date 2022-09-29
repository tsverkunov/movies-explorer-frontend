import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  return (
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__description">Страница не найдена</p>
      <button
        onClick={() => history.go(-2)}
        className="notFound__back-link"
        type="button"
      >
        Назад
      </button>
    </div>
  );
}

export default NotFound;
