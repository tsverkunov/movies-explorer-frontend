import './FilterCheckbox.css';

function FilterCheckbox({isChecked, onChangeCheckbox}) {

  return (
    <fieldset className="filter__fieldset-checkbox">
      <label className="filter__checkbox-label">
        <span className="filter__label-text">Короткометражки</span>
        <input
          type="checkbox"
          className="filter__checkbox"
          name="checkbox"
          checked={isChecked}
          onChange={onChangeCheckbox}
        />
        <span className="filter__checkbox-visible"></span>
      </label>
    </fieldset>
  );
}

export default FilterCheckbox;