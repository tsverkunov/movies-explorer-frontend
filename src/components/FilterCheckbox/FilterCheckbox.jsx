import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <fieldset className="filter__fieldset-checkbox">
      <label className="filter__checkbox-label" htmlFor="smallFilms">
        <span className="filter__label-text">Короткометражки</span>
        <input type="checkbox" className="filter__checkbox" id="smallFilms"/>
        <span className="filter__checkbox-visible"></span>
      </label>
    </fieldset>
  );
}

export default FilterCheckbox;