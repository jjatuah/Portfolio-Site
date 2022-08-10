import React from 'react';
import "./Edu.css";


const Edu = () => {
  return ( 
    <div className="edu" id='edu'>
        <h2 id='secColor' >My Education</h2>

        <div className="eduContainerGrid">
          <div className="eduContent">
            <div>
              <h3 className="eduYear">2015-2020</h3>
              <span className="eduUni">Federal University of Technology Minna</span>
            </div>

            <div className="eduTime">
              <span className="eduRounder"></span>
              <span className="eduLine"></span>
            </div>

            <div>
              <h3 className="eduDegree">Bachelor of Engineering</h3>
              <span className="eduCourse">Mechanical Engineering</span>
            </div>
          </div>

          <div className="eduContent">
            <div>
              <h3 className="eduYear">2020</h3>
              <span className="eduUni">Google Digital Skills For Africa</span>
            </div>

            <div className="eduTime">
              <span className="eduRounder"></span>
              <span className="eduLine"></span>
            </div>

            <div>
              <h3 className="eduDegree">Fundamentals of Digital Marketing</h3>
              <span className="eduCourse">Web Analytics, SEO, SEM</span>
            </div>
          </div>

          <div className="eduContent">
            <div>
              <h3 className="eduYear">2021</h3>
              <span className="eduUni">Jobberman</span>
            </div>

            <div className="eduTime">
              <span className="eduRounder"></span>
              <span className="eduLine"></span>
            </div>

            <div>
              <h3 className="eduDegree">Jobberman Soft skills Certification</h3>
              <span className="eduCourse">Team Work, Workplace Ethics, Idea Generation</span>
            </div>
          </div>

          <div className="eduContent">
            <div>
              <h3 className="eduYear">2021</h3>
              <span className="eduUni">Side Hustle Internship Cohort 4</span>
            </div>

            <div className="eduTime">
              <span className="eduRounder"></span>
              <span className="eduLine"></span>
            </div>

            <div>
              <h3 className="eduDegree">Frontend Web Development</h3>
              <span className="eduCourse">React Js</span>
            </div>
          </div>

          <div className="eduContent">
            <div>
              <h3 className="eduYear">2022</h3>
              <span className="eduUni">AltSchool Africa</span>
            </div>

            <div className="eduTime">
              <span className="eduRounder"></span>
              <span className="eduLine"></span>
            </div>

            <div>
              <h3 className="eduDegree">Backend Web Development</h3>
              <span className="eduCourse">Node Js</span>
            </div>
          </div>

        </div>
      </div>
   );
}
 
export default Edu;