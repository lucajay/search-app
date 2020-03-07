import React from 'react';
import './Header.css';

function Header(props) {
  const showFavHandler = (e, value) => {
    e.preventDefault();
    const showFav = 1 - value;
    props.showFavCallback(showFav);
  }
  return (
    <header className="App-header">
      <div className="nav-btns">
        <div className="nav-left">
        <a className="nav-btn" href="/">Home</a>
        </div>
        <div className="nav-right">
          <a className="nav-btn" onClick={(e) => showFavHandler(e, props.showFav)}>Favourite</a>
        </div>
      </div>
  </header>
  );
}

export default Header;
