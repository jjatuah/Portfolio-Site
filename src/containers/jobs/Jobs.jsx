import React from 'react';
import "./Jobs.css";
import Job from '../../components/job/Job';
import  netflixImg from "../../assets/netflix1.png";
import  spotifyImg from "../../assets/spotify.png";
import  diceImg from "../../assets/dice.png";
import  figmaImg from "../../assets/figma.png";
import  teslaImg from "../../assets/tesla.png";
import  fitnessImg from "../../assets/fitness.png";



const Jobs = () => {
  return ( 
    <div className="jobs" id='previous'>
      <div className="header white">
        <h2 id='secColor'>Previous Jobs</h2>
        <p>You can view any of my previous projects below by clicking on them.</p>
      </div>
      <div className="content">

        <Job img={diceImg} head={"The Pig Game"} desc={"I developed the popular pig game for laptops and ipads using HTML, CSS and JavaScript."} />

        <Job img={fitnessImg} head={"Fitness Website"} desc={"This is the frontend of a fitness website I developed using React Js."} />

        <Job img={netflixImg} head={"Simple Netflix Clone"} desc={"I developed a simple Netflix Clone to play the trailer of movies it can find using an API. I developed it using React Js."} />

        <Job img={teslaImg} head={"Tesla Frontend Clone"} desc={"I developed the frontend of the Tesla website at the time using React js."} />

        <Job img={spotifyImg} head={"Spotify Frontend Clone"} desc={"I developed a simple spotify frontend clone. I developed this to solidify my design skills at that time. It doesn't play music."} />

        <Job img={figmaImg} head={"Figma GPT3 Webpage"} desc={"I developed this landing page based on the exact same GPT3 figma design."} />

      </div>
    </div>
   );
}
 
export default Jobs;