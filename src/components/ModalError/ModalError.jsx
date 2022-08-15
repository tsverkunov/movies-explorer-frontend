import React from 'react';
import './ModalError.css';

function PopupWithForm({
                         title,
                         name,
                         textButton,
                         children,
                         isOpen,
                         onClose,
                         onSubmit,
                         preloader,
                         formErrors = {},
                       }) {

  // const [isButtonDisabled , setIsButtonDisabled] = useState(true)
  //
  // useEffect(() => {
  //   const isFormValidValue = Object.keys(formErrors).every(key => !formErrors[key])
  //   setIsButtonDisabled(!isFormValidValue)
  // },[formErrors])

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          id="popup__close-button-profile"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        {/*<form*/}
        {/*  onSubmit={onSubmit}*/}
        {/*  className="popup__form"*/}
        {/*  name={name}*/}
        {/*  noValidate*/}
        {/*>*/}
        {/*  <button*/}
        {/*    type="submit"*/}
        {/*    className="popup__button-submit"*/}
        {/*    id={`popup__button-submit-${name}`}*/}
        {/*    disabled={isButtonDisabled}*/}
        {/*  >*/}
        {/*    {preloader ? 'Сохранение...' : textButton}*/}
        {/*  </button>*/}
        {/*</form>*/}
      </div>
    </div>
  )
}

export default PopupWithForm