import React, { useState, useEffect } from 'react';
import './FavouriteBtn.css'

function FavouriteBtn(props) {

  const [ fav, setFav ] = useState(0);
  const [ id, setId ] = useState(props.data.imdbID);

  useEffect(() => {
    setId(props.data.imdbID);
    let initialList = '';
    let initialValue = 0;
    
    if(localStorage.getItem('favourite')) {
        initialList = localStorage.getItem('favourite').split(',');
        initialValue = initialList.indexOf(props.data.imdbID) > -1 ? 1: 0;
        setFav(initialValue);
    }
  }, [props.data.imdbID]);

  const clickHandlder = (e) => {
    const item = e.target.value;
    const favValue = 1 - fav;
    setFav(favValue);
    if(favValue === 1){
      if(!localStorage.getItem('favourite')) {
        localStorage.setItem('favourite', item);
      } else{
        let listOfFav = localStorage.getItem('favourite').split(',')
        let indexOfFav = listOfFav.indexOf(item);
        let newListOfFav = `${localStorage.getItem('favourite')},${item}`;
        if(indexOfFav < 0) {
          localStorage.setItem('favourite', newListOfFav )
        }
      }
    }else{
      let listOfFav = localStorage.getItem('favourite').split(',')
      let indexOfFav = listOfFav.indexOf(item);
      listOfFav.splice(indexOfFav, indexOfFav + 1);
      let newListOfFav = listOfFav;
      localStorage.setItem('favourite', newListOfFav.join(',') )
    }
  }
  return (
  <button className="btn" value={id} onClick={clickHandlder}>{fav === 1 ? 'Added as Favourite' : 'Add as Favourite'}</button>
  );
}

export default FavouriteBtn;
