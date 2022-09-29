import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

function SearchForm({
                      onFilterMovies,
                      shortMovie,
                      setShortMovie,
                      savedSearchWord,
                      savedShortMovie,
}) {
  const { pathname } = useLocation();
  const [value, setValue] = useState('')
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setValue( savedSearchWord );
      setShortMovie(savedShortMovie);
    }
  }, []);

  useEffect(() => {
    if (pathname === '/movies'&& value || pathname === '/saved-movies') {
      onFilterMovies(value);
    }
  }, [shortMovie]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setError('Нужно ввести ключевое слово.')
    } else {
      setError('')
      onFilterMovies(value);
    }
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
            value={value}
            placeholder="Фильм"
            className="searchForm__input"
            required
          />
          <button
            className="searchForm__button"
            aria-label="Искать"
            type="submit"
          ></button>
        </div>
        <span className="searchForm__error">{error}</span>
      </fieldset>
      <FilterCheckbox shortMovie={shortMovie} setShortMovie={setShortMovie}/>
    </form>
  );
}

export default SearchForm;
