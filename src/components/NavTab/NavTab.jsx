import React from 'react';
import './NavTab.css';

function NavTab({ onHiddenRef }) {

  return (
    <div className="navTab">
      <button
        className="navTab__button"
        onClick={onHiddenRef}
        aria-label="Узнать больше"
        type="button"
      >
        Узнать больше
      </button>
    </div>
  );
}

export default NavTab;