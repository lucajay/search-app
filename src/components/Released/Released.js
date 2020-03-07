import React from 'react';
import './Released.css';


function Released(props) {
  return (
  <label className="released" >Released - {props.date}</label>
  );
}

export default Released;
