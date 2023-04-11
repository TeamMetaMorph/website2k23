import React, { useEffect, useRef, useState } from "react";
import "../css/Navbar.scss";
import LogoM from "../images/LogoM.png";
import { gsap } from "gsap";


import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(true);
  const menuClickHandler = () => {
    setClick(!click);
  }
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const titleRef=useRef(null);

  useEffect(() => {
    gsap.from(".navbar-brand", { y: -50, ease: "elastic", duration: 1 });
    gsap.to(".navbar-brand", { y: 0, ease: "elastic", duration: 1 });
    gsap.from(".logo", { y: -50, ease: "elastic", duration: 1 });
    gsap.to(".logo", { y: 0, ease: "elastic", duration: 1 });
    gsap.from(".navbar-nav", { y: -50, ease: "elastic", duration: 1 });
    gsap.to(".navbar-nav", { y: 0, ease: "elastic", duration: 1 });
  

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const handleMouseOver = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      titleRef.current.innerText = titleRef.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return titleRef.current.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= titleRef.current.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  titleRef.current.addEventListener("mouseover", handleMouseOver);

  return () => {
    clearInterval(interval);
    titleRef.current.removeEventListener("mouseover", handleMouseOver);
  }, []});


  return (
    <div>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent fu">
          <Link className="navbar-brand" to="/">
            <b ref={titleRef} data-value="META MORPH" >META MORPH</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="logo" to="/">
            <img src={LogoM} />
          </Link>

          <div
            className={`collapse navbar-collapse ${isOpen ? " " : "hide"}`}
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item  ">
                <NavLink
                  className="nav-link"
                  onClick={onClickHandler}
                  to="/AboutUs"
                >
                  About Us <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  onClick={onClickHandler}
                  to="/OurTeam"
                >
                  Our Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link" id="gal"
                  onClick={onClickHandler}
                  to="/Gallery"
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  onClick={onClickHandler}
                  to="/Project"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  onClick={onClickHandler}
                  to="/Events"
                >
                  Events
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  onClick={onClickHandler}
                  to="/FAQ"
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
  }

export default Navbar;



