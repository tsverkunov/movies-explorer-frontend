import './FilterCheckbox.css';

function FilterCheckbox({ shortMovie, setShortMovie }) {

  const onChangeCheckbox = (e) => {
    e.target.checked
      ? setShortMovie(true)
      : setShortMovie(false);
  };

  return (
    <fieldset className="filter__fieldset-checkbox">
      <label className="filter__checkbox-label">
        <span className="filter__label-text">Короткометражки</span>
        <input
          type="checkbox"
          className="filter__checkbox"
          name="checkbox"
          checked={shortMovie}
          onChange={onChangeCheckbox}
        />
        <span className="filter__checkbox-visible"></span>
      </label>
    </fieldset>
  );
}

export default FilterCheckbox;