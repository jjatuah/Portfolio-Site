import React from 'react';
import "./Job.css";


const Job = ({img, head, desc, link}) => {
  return ( 
    <a href={link} className="job">
      <img src={img} alt="" />
      <h2>{head}</h2>
      <p>{desc}</p>
    </a> 
  );
}
 
export default Job;