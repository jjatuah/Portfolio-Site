import React from 'react';
import "./About.css";
import img1 from "../../assets/img1.jpg"

const About = () => {
  return ( 
  <div className="about" id='about'>
    <div className="header">
      <h2 id='secColor'>About Me</h2>
    </div>
    <div className="aboutContent">
      <div className="contentBx w50">
        <h3>I'm a Front-end Web Developer</h3>
        <p> I'm a talented and experienced front-end developer with 2+ years of experience. I take responsiveness very important as billions of people now access the internet through their mobile phones. I'm currently focused on JavaScript and JavaScript libraries and frameworks. I have a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high quality results under strict deadlines. I'm also very analytical, proactive, detailed and innovative.<br /> <br />I'm very passionate about going the extra mile to ensure customers are unquestionably satisfied with the product or service I provide. You definitely won't regret working with me.</p>
      </div>
      <div className="w50">
        <img src={img1} alt="" className='img' />
      </div>
    </div>
  </div>
   );
}
 
export default About;