import React, { useState, useEffect } from 'react';
import './FavList.css';
import Chip from '../Chip/Chip';

function FavList(props) {

  const [ data, setData ] = useState([]);
  useEffect(() => {
    const listArray = localStorage.getItem('list') ? localStorage.getItem('list').split(',') : [];
    const favArray = []
    listArray.map((listItem) => {
      favArray.push(JSON.parse(localStorage.getItem(listItem)));
    })
    setData(favArray)
  }, []);

  return (
    <div className="container">
      <div className="chip-container">
        {data.map((item)=>
          <Chip data={item} key={item.imdbID}/>
        )}
    </div>
    </div>
  );
}

export default FavList;
