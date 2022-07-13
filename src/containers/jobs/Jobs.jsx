import React from 'react';
import "./Jobs.css";
import Job from '../../components/job/Job';
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";


const Jobs = () => {
  return ( 
    <div className="jobs" id='previous'>
      <div className="header white">
        <h2 id='secColor'>Previous Jobs</h2>
        <p>You can view any of my previous projects below by clicking on them.</p>
      </div>
      <div className="content">

        <Job img={"https://img.freepik.com/premium-vector/two-white-falling-dice-white-casino-gambling-template-concept_149267-753.jpg?w=2000"} head={"The Pig Game"} desc={"I developed the popular pig game for laptops and ipads using HTML, CSS and JavaScript."} />

        <Job img={"https://qph.cf2.quoracdn.net/main-qimg-29e135ce3b14f2fc5775bdd0c048df2d"} head={"Fitness Website"} desc={"This is the frontend of a fitness website I developed using React Js."} />

        <Job img={"https://p.kindpng.com/picc/s/29-297023_netflix-logo-png-black-banner-black-and-white.png"} head={"Simple Netflix Clone"} desc={"I developed a simple Netflix Clone to play the trailer of movies it can find using an API. I developed it using React Js."} />

        <Job img={"https://icon-library.com/images/tesla-icon/tesla-icon-13.jpg"} head={"Tesla Frontend Clone"} desc={"I developed the frontend of the Tesla website at the time using React js."} />

        <Job img={"http://assets.stickpng.com/thumbs/5ece4ff9123d6d0004ce5f89.png"} head={"Spotify Frontend Clone"} desc={"I developed a simple spotify frontend clone. I developed this to solidify my design skills at that time. It doesn't play music."} />

        <Job img={"https://cdn.icon-icons.com/icons2/2716/PNG/512/figma_logo_icon_173157.png"} head={"Figma GPT3 Webpage"} desc={"I developed this landing page based on the exact same GPT3 figma design."} />

      </div>
    </div>
   );
}
 
export default Jobs;