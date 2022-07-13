import React from 'react';
import "./Job.css";


const Job = ({img, head, desc}) => {
  return ( 
    <div className="job">
      <img src={img} alt="" />
      <h2>{head}</h2>
      <p>{desc}</p>
    </div>
  );
}
 
export default Job;