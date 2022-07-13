import React from 'react';
import "./Testimonials.css";
import Testimony from '../../components/testimony/Testimony';


const Testimonials = () => {
  return ( 
    <div className="testimonials" id='testimonials'>
      <div className="header">
        <h2 id='secColor' >Testimonials</h2>
        <p>Here are some comments from people I've worked with.</p>
      </div>
      <div className="content">
        <Testimony testimony={"We re-did our website twice within 12 months. There was no comparison between the first guy we used and Joseph. Professional, Creative, Attentive to Detail, Excellent Communication. If I was lucky enough to give Joseph the job the first time, I definitely wouldn't have had to do it twice."} name={"Mr. Damilola Adekola "} position="RSD Chemicals"/>

        <Testimony testimony={"This was the first time I developed a web site so I couldn’t have asked for a better or easier person to work with. The entire process was timely and extremely efficient. Above all, He took the project like it was his personal project. A fantastic experience all around! I would definitely recommend him to anyone I know who wants a website."} name={"Mrs. Jennifer Ojonu"} position="Best Cakes"/>
      </div>
    </div>
   );
}
 
export default Testimonials;