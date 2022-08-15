import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
  return (
    <div className="notFound">
      {/*<div className="notFound__container">*/}
        <h2 className="notFound__title">404</h2>
        <p className="notFound__description">Страница не найдена</p>
        <Link to="/" className="notFound__back-link">Назад</Link>
      {/*</div>*/}
    </div>
  );
}

export default NotFound;