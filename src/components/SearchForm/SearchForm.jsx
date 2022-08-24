import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className="searchForm">
      <fieldset className="searchForm__fieldset">
        <input
          type="text"
          placeholder="Фильм"
          className="searchForm__input"
        />
        <button className="searchForm__button" aria-label="Искать"></button>
      </fieldset>
      <FilterCheckbox/>
    </form>
  );
}

export default SearchForm;