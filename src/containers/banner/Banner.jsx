import React from 'react';
import "./Banner.css";

const Banner = () => {
  return ( 
  <div className="banner" id='home'>
    <div className="textBx">
      <h2>Hello, I'm <br /> <span>Jatuah Joseph.</span></h2>
      <h3>A Front-end Web Developer.</h3>
      <a href="#about" class="btn">About Me</a>
    </div>
  </div> );
}
 
export default Banner;