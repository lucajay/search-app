import React from 'react';
import './List.css';
import Chip from '../Chip/Chip';

function List(props) {

  return (
    <div className="chip-container">
        {props.data.map((item)=>
          <Chip data={item} key={item.imdbID}/>
        )}
    </div>
  );
}

export default List;
