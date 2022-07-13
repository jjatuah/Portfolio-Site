import React from 'react';
import "./Testimony.css";

const Testimony = ({testimony, name, position}) => {
  return ( 
    <div className="testimony">
      <p>{testimony}</p>
      <h3>{name} <br /> <span>{position}</span></h3>
    </div>
   );
}
 
export default Testimony;