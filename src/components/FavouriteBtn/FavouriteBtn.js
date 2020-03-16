import React, { useState, useEffect } from 'react';
import './FavouriteBtn.css'

function FavouriteBtn(props) {

  const [ fav, setFav ] = useState(0);
  const [ id, setId ] = useState(props.data.imdbID);

  useEffect(() => {
    setId(props.data.imdbID);
    let initialList = '';
    let initialValue = 0;
    
    if(localStorage.getItem('list')) {
        initialList = localStorage.getItem('list').split(',');
        initialValue = initialList.indexOf(props.data.imdbID) > -1 ? 1: 0;
        setFav(initialValue);
    }
  }, [props.data.imdbID]);

  const clickHandlder = (e) => {
      const item = e.target.value;

      const favValue = 1 - fav;
      setFav(favValue);

      if(favValue === 1){
        // For adding as favourite
        if(!localStorage.getItem('list')) {
          localStorage.setItem('list', id);
        } else{ 
          let listOfFav = localStorage.getItem('list').split(',');
          let indexOfFav = listOfFav.indexOf(item);
          if(indexOfFav < 0) {
            let newListOfFav = `${localStorage.getItem('list')},${item}`;
            localStorage.setItem('list', newListOfFav );
          }
        }
        props.addLocal();
      }else{
        // For removing from favourite
        let listOfFav = localStorage.getItem('list').split(',')
        let indexOfFav = listOfFav.indexOf(item);
        listOfFav.splice(indexOfFav, indexOfFav + 1);
        let newListOfFav = listOfFav;
        localStorage.setItem('list', newListOfFav.join(',') )
        localStorage.removeItem(id);
      }

      e.preventDefault();
  }
  return (
  <button className="btn" value={id} onClick={clickHandlder}>{fav === 1 ? 'Added as favourite' : 'Add as favourite'}</button>
  );
}

export default FavouriteBtn;
