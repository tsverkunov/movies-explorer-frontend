import React from 'react';
import './MoreButton.css'

function MoreButton({addCards, hiddenButton, error}) {

  return (
    <div className={
      `add__container ${(hiddenButton && 'add__container_hidden') || (error && 'add__container_hidden')}`
    }>
      <button className="add" onClick={addCards} type="button">Ещё</button>
    </div>
  );
}

export default MoreButton;