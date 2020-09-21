import React from 'react';
import './SingleItem.css';
import Chip from '../Chip/Chip';
import { connect } from "react-redux";

function SingleItem(props) {
  console.log('inside SingleItem--->', props);
  
  return (
      <div className="container">
        <div className="chip-container">
          { props.item &&
            <Chip data={props.item} key={props.item.imdbID}/>
          }
        </div>
      </div>
  );
}
const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps)(SingleItem);
