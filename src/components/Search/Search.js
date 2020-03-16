import React, { useState } from 'react';
import './Search.css';

function Search(props) {
  const [ text, setText ] = useState('');
  const [ type, setType ] = useState('all');

  let handleSearch = function (e) {
    if(text) {
      props.onSearchMovie({text: text, type: type});
    }
    e.preventDefault();
  }
  return (
    <div className="search-panel">
      <form onSubmit={handleSearch}>
        <input type="text" name="text" onChange={(e) => setText(e.target.value)}/>
        <select id="type" name="type" onChange={(e) => setType(e.target.value)}>
          <option value="all" defaultChecked>All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
        <input type="submit" className="search-button" value="Search"/>
      </form>
    </div>
  );
}

export default Search;
