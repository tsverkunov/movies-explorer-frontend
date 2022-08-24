import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({onGetMovies, isChecked, onChangeCheckbox}) {
  const [formValues, setFormValues] = useState({search: ''})
  const [formErrors, setFormErrors] = useState({search: ''})
  const [isValid, setValidity] = useState(false);
  const [isButtonDisabled , setIsButtonDisabled] = useState(true)

  const handleChange = (e) => {
    const {name, value, validationMessage} = e.target
    const input = e.target
    setFormValues({...formValues, [name]: value})

    setValidity(input.validity.valid);
    if (!isValid) {
      setFormErrors({...formErrors, [name]: validationMessage})
    } else {
      setFormErrors({...formErrors, [name]: ''})
    }
  }

  useEffect(() => {
    const isFormValidValue = Object.keys(formErrors).every(key => !formErrors[key])
    setIsButtonDisabled(!isFormValidValue)
  },[formErrors])

  const onSubmit = (e) => {
    e.preventDefault()
    onGetMovies(formValues)
  }

  return (
    <form className="searchForm" onSubmit={onSubmit}>
      <fieldset className="searchForm__fieldset">
        <div className="searchForm__container">
          <input
            name="search"
            type="text"
            onChange={handleChange}
            value={formValues.search}
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
            disabled={isButtonDisabled}
          ></button>
        </div>
        <span className="searchForm__error">{formErrors.search}</span>
      </fieldset>
      <FilterCheckbox isChecked={isChecked} onChangeCheckbox={onChangeCheckbox}/>
    </form>
  );
}

export default SearchForm;