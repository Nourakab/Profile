import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import nouraLogo from "../assets/nouraLogo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center
    py-5 fixed top-0 z-20 bg-primary `}
    >
      <div
        className="w-full flex justify-between items-center
      max-w-7xl mx-auto"
      >
        <Link
          to="/" //top of the page
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); //to track where we are on the page
            window.scrollTo(0, 0); // to scroll to the top of the page
          }}
        >
          <img src={nouraLogo} alt="logo" className="w-9 h-6 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Noura &nbsp;
            <span className="sm:block hidden">|Noura Kabbara</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title
                  ? "text-white" /*if active render the text in white */
                  : "text-secondary" /*if not active render */
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}> {Link.title} </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} 
          p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title
                      ? "text-white" /*if active render the text in white */
                      : "text-secondary" /*if not active render */
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}> {Link.title} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
/* Visit tailiwind documentation
w: full width
top:0 to make it stay on the top
z-20 to make it appear above other elements
mx: margin x 

nbsp: unicode carracter for space*/
