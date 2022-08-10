import React,{useState} from 'react';
import "./Navbar.css";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";



const NavMenu = () => {

  
  const [list, setList] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setList(true);
    } else {
      setList(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (<>
    <ul className={list ? "active2" : "list"} >
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#previous">Previous Jobs</a></li>
      <li><a href="#edu">Education</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </>
)}

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [buttonColor, setButtonColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setLogo(true);
      setButtonColor(true);
    } else {
      setNavbar(false);
      setLogo(false);
      setButtonColor(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return ( 
  <div className={navbar ? "navbar active" : "navbar"}>
    <a href="#" className={logo ? "active1" : "logo"}> <span className='span'>Port</span>folio</a>

    <div className="firstMenu">
      <NavMenu />
    </div>

    <div className="mobileMenu">
      {toggleMenu ?
       <RiCloseLine style={{cursor: "pointer"}} color={buttonColor ? "#111" : "#fff"} size={27} onClick={() => setToggleMenu(false)} />
       :
       <RiMenu3Line style={{cursor: "pointer"}} color={buttonColor ? "#111" : "#fff"} size={27} onClick={() => setToggleMenu(true)} />}

       {
         toggleMenu && (
           <div className="mobileMenuList">
              <NavMenu />
           </div>
         )
       }
    </div>
  </div>
   );
}
 
export default Navbar;