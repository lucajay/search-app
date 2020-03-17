import React from 'react';
import './Previous.css';

function Previous(props) {

  let handlePrevious = function (e) {
    props.onPrevious();
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handlePrevious}>
        <input type="submit" disabled={props.disable} className="previous-button" value="Previous Page"/>
      </form>
    </div>
  );
}

export default Previous;
