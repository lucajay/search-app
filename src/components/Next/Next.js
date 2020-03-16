import React, { useState } from 'react';
import './Next.css';

function Next(props) {
  const [ page, setPage ] = useState(0);

  let handleNext = function (e) {
    props.onNext();
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleNext}>
        <input type="submit" disabled={props.disable} className="next-button" value="Next Page"/>
      </form>
    </div>
  );
}

export default Next;
