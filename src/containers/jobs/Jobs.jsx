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
  const pigGameDesc = <p>I developed the popular pig game for <b>PC's</b>, <b>Laptops</b> and <b>iPads</b> using HTML, CSS and JavaScript.</p>
  return ( 
    <div className="jobs" id='previous'>
      <div className="header white">
        <h2 id='secColor'>Previous Jobs</h2>
        <p>You can view any of my previous projects below by clicking on them.</p>
      </div>
      <div className="content">

        <Job img={netflixImg} head={"Simple Netflix Clone"} desc={"I developed a simple Netflix Clone to play the trailer of movies it can find using an API. I developed it using React Js."} link="https://netflix-clone-demo-72ae2.web.app" />

        <Job img={diceImg} head={"The Pig Game"} desc={pigGameDesc} link="https://62fa72aff5c5fc7bbbc37cac--rococo-kleicha-792b25.netlify.app/" />

        <Job img={fitnessImg} head={"Fitness Website"} desc={"This is the frontend of a fitness website I developed using React Js."} link="https://62fa77879338417c5a8aaa3f--clinquant-pasca-d700f0.netlify.app/" />  

        <Job img={figmaImg} head={"Figma GPT3 Webpage"} desc={"I developed this landing page based on the exact same GPT3 figma design in the link below."} link="https://62fa7680fc1ab20556a08f80--chimerical-genie-c4eed8.netlify.app/" />

        <Job img={teslaImg} head={"Tesla Frontend Clone"} desc={"I started working on the frontend of the Tesla website at the time using React Js."} link="https://62fa78a06b267d7f8e98d4f8--moonlit-pie-df2709.netlify.app/" />

        <Job img={spotifyImg} head={"Spotify Frontend Clone"} desc={"I developed a simple spotify frontend clone. I developed this to solidify my design skills at that time and improve my use of API's. Data from your Spotify account is displayed after you sign-in. It doesn't play music."} link="https://62fa79669338417d428aaeaa--poetic-kelpie-6d3282.netlify.app/" />

      </div>
    </div>
   );
}
 
export default Jobs;