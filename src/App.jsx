import React from "react";
import "./App.css";
import Banner from "./containers/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import About from "./containers/about/About";
import Jobs from "./containers/jobs/Jobs";
import Testimonials from "./containers/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import CopyRight from "./components/copyright/CopyRight";
import Edu from "./containers/education/Edu";
import Skill from "./containers/skills/Skill";
 

const App = () => {
  return ( 
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Jobs />
      <Edu />
      <Testimonials />
      <Contact />
      <CopyRight />
    </div>
   );
}
 
export default App;