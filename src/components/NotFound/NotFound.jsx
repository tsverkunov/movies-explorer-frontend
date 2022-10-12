import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__description">Страница не найдена</p>
      <button
        onClick={() => navigate(-2)}
        className="notFound__back-link"
        type="button"
      >
        Назад
      </button>
    </div>
  );
}

export default NotFound;
