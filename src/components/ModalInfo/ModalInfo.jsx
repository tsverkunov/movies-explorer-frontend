import React, { useEffect, useRef } from 'react';
import './ModalInfo.css';

function PopupWithForm({
                         title,
                         isOpen,
                         onClose,
                       }) {
  const modalRef = useRef();

  useEffect(() => {
    window.addEventListener('keydown', closeWithEscape);
    return () => window.removeEventListener('keydown', closeWithEscape);
  }, []);

  const closeWithEscape = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const closeWithoutButton = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
      ref={modalRef}
      onClick={closeWithoutButton}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          id="popup__close-button-profile"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
      </div>
    </div>
  );
}

export default PopupWithForm;