import Link from "next/link";
import Image from "next/image";
import React, { useState,useEffect } from "react";
// import Logo from "./Logo";
import { useAuth0 } from '@auth0/auth0-react'
import {IoIosClose} from "react-icons/io"

import NavItem from "./NavItem";


const Navbar = () => {
  // Hook
  const { isAuthenticated,user ,loginWithPopup} = useAuth0()
  const size = useWindowSize();
  let firstName=user?.name.split(" ")
  const MENU_LIST = [
    { text: `${isAuthenticated? firstName[0] : 'Login'}`},

  ];
  

  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

const login=()=>{
    
  setNavActive(false)

  loginWithPopup()
}
  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          {/* <a> */}
            <h1 className="logo">Marish</h1>
          {/* </a> */}
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive && size.width<769 ? "active" : ""} nav__menu-list`}>
              <Link className="nav__link_text" href="/"   onClick={() => {
                // setActiveIdx(idx);
                setNavActive(false);
              }} >
               Home 
             </Link>
             <Link className="nav__link_text" href="/blogs"    onClick={() => {
                // setActiveIdx(idx);
                setNavActive(false);
              }} >
               Blogs
             </Link>
             <Link className="nav__link_text" href="/faq"   onClick={() => {
                // setActiveIdx(idx);
                setNavActive(false);
              }} >
               FAQ
             </Link>
          {MENU_LIST.map((menu, idx) => (
            <div
              // onClick={() => {
                // setActiveIdx(idx);
                // setNavActive(false);
                onClick={() =>{
                  console.log("check click or nt ")
                  return isAuthenticated?   setNavActive(false) : login()
                    
                }}
              // }}
              key={menu.text}
            
              className={`${navActive ? "nav__link_btn_active" : ""} nav_link_btn`}
            >
              <NavItem active={activeIdx === idx} {...menu} />
           
            </div>
        
          ))}
            
              <div className={`${navActive && size.width<769 ? "showCloseIcon" : "hideIcon"}`}  
              onClick={() => {
                // setActiveIdx(idx);
                setNavActive(false);
              }} ><IoIosClose /></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}