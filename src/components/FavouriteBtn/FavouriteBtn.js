import React, { useState, useEffect } from 'react';
import './FavouriteBtn.css'
import { connect } from "react-redux";
import { saveInRedux, removeFromRedux , saveInList, removeFromList } from '../../redux/action';


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
        props.saveInList(item);
        props.saveInRedux(props.data);
        props.addLocal();
      }else{
        props.removeFromList(item);
        props.removeFromRedux(id);
        localStorage.removeItem(id);
      }
      e.preventDefault();
  }
  return (
    <button className="btn" value={id} onClick={clickHandlder}>{fav === 1 ? 'Added as favourite' : 'Add as favourite'}</button>
  );
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => ({
  saveInRedux: (data) => dispatch(saveInRedux(data)),
  removeFromRedux: (id) => dispatch(removeFromRedux(id)),
  saveInList: (id) => dispatch(saveInList(id)),
  removeFromList: (id) => dispatch(removeFromList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteBtn);
