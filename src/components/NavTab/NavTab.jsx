import React from 'react';
import './NavTab.css';
import { Route } from 'react-router-dom';

function NavTab({onHiddenRef}) {

  return (
    <div className="navTab">
      <Route>
        <button className="navTab__button" onClick={onHiddenRef} aria-label="Узнать больше" type="button">
          Узнать больше
        </button>
      </Route>
    </div>
  );
}

export default NavTab;