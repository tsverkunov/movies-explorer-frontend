import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

function SearchForm({ onGetMovies, searchWord, shortMovie, setShortMovie }) {
  const { pathname } = useLocation();

  const [values, setValues] = useState({ search: '' });
  const [errors, setErrors] = useState({ search: '' });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const { name, value, validationMessage } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  useEffect(() => {
    if (pathname === '/movies') {
      setValues({ search: searchWord });
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    onGetMovies(values);
  };

  return (
    <form
      className="searchForm"
      onSubmit={onSubmit}
      name="search-form"
      noValidate
    >
      <fieldset className="searchForm__fieldset">
        <div className="searchForm__container">
          <input
            name="search"
            type="search"
            onChange={handleChange}
            value={values.search}
            placeholder="Фильм"
            className="searchForm__input"
            minLength="2"
            maxLength="30"
            required
          />
          <button
            className="searchForm__button"
            aria-label="Искать"
            type="submit"
            disabled={!isValid}
          ></button>
        </div>
        <span className="searchForm__error">{errors.search}</span>
      </fieldset>
      <FilterCheckbox shortMovie={shortMovie} setShortMovie={setShortMovie}/>
    </form>
  );
}

export default SearchForm;
