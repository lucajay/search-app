import React from 'react';
import './FavList.css';
import Chip from '../Chip/Chip';
import { connect } from "react-redux";

function FavList(props) {
  return (
      <div className="container">
        <div className="chip-container">
          {props.favList.map((item)=>
            <Chip data={item} key={item.imdbID}/>
          )}
        </div>
      </div>
  );
}
const mapStateToProps = state => {
  return {
    favList: state.favList
  };
};

export default connect(mapStateToProps)(FavList);
