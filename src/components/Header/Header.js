import React from 'react';
import './Header.css';

function Header(props) {

  return (
    <header className="App-header">
      <div className="nav-btns">
        <div className="nav-left">
        <a className="nav-btn" href="/">Home</a>
        </div>
        <div className="nav-right">
          <a className="nav-btn" href='/fav'>Favourite</a>
        </div>
      </div>
  </header>
  );
}

export default Header;
