import React from 'react';
import "./Edu.css";


const Edu = () => {
  return ( 
    <div class="edu" id='edu'>
        <h2 id='secColor' >My Education</h2>

        <div class="eduContainerGrid">
          <div class="eduContent">
            <div>
              <h3 class="eduYear">2015-2020</h3>
              <span class="eduUni">Federal University of Technology Minna</span>
            </div>

            <div class="eduTime">
              <span class="eduRounder"></span>
              <span class="eduLine"></span>
            </div>

            <div>
              <h3 class="eduDegree">Bachelor of Engineering</h3>
              <span class="eduCourse">Mechanical Engineering</span>
            </div>
          </div>

          <div class="eduContent">
            <div>
              <h3 class="eduYear">2020</h3>
              <span class="eduUni">Google Digital Skills For Africa</span>
            </div>

            <div class="eduTime">
              <span class="eduRounder"></span>
              <span class="eduLine"></span>
            </div>

            <div>
              <h3 class="eduDegree">Fundamentals of Digital Marketing</h3>
              <span class="eduCourse">Web Analytics, SEO, SEM</span>
            </div>
          </div>

          <div class="eduContent">
            <div>
              <h3 class="eduYear">2021</h3>
              <span class="eduUni">Jobberman</span>
            </div>

            <div class="eduTime">
              <span class="eduRounder"></span>
              <span class="eduLine"></span>
            </div>

            <div>
              <h3 class="eduDegree">Jobberman Soft skills Certification</h3>
              <span class="eduCourse">Team Work, Workplace Ethics, Idea Generation</span>
            </div>
          </div>

          <div class="eduContent">
            <div>
              <h3 class="eduYear">2021</h3>
              <span class="eduUni">Side Hustle Internship Cohort 4</span>
            </div>

            <div class="eduTime">
              <span class="eduRounder"></span>
              <span class="eduLine"></span>
            </div>

            <div>
              <h3 class="eduDegree">Frontend Web Development</h3>
              <span class="eduCourse">React Js</span>
            </div>
          </div>

          <div class="eduContent">
            <div>
              <h3 class="eduYear">2022</h3>
              <span class="eduUni">AltSchool Africa</span>
            </div>

            <div class="eduTime">
              <span class="eduRounder"></span>
              <span class="eduLine"></span>
            </div>

            <div>
              <h3 class="eduDegree">Backend Web Development</h3>
              <span class="eduCourse">Node Js</span>
            </div>
          </div>

        </div>
      </div>
   );
}
 
export default Edu;