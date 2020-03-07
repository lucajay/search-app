import React, { useState } from 'react';
import './Search.css';

function Search(props) {
  const [ title, setTitle ] = useState('');
  const [ type, setType ] = useState('all');

  let handleSearch = function (e) {
    props.onSearchMovie({title: title, type: type});
    e.preventDefault();
  }
  return (
    <div className="search-panel">
      <form onSubmit={handleSearch}>
        <input type="title" name="title" onChange={(e) => setTitle(e.target.value)}/>
        <select id="type" name="type" onChange={(e) => setType(e.target.value)}>
          <option value="all" defaultChecked>All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
        <input type="submit" value="Search"/>
      </form>
    </div>
  );
}

export default Search;
