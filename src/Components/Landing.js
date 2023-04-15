import React, { useRef, useEffect } from 'react';
import '../css/Landing.scss';
import { gsap } from 'gsap';
import metmorph from '../images/Logowhite.png';
import Loader from './Loader';
import { NavLink } from 'react-router-dom';

// import Footer from './Footer';

function Landing() {
  let imageRef = useRef(null);

  useEffect(() => {
    let currentMask = 1;

    function swapMask() {
      if (currentMask === 3) currentMask = 1;
      else currentMask++;
      gsap.set('.m', { attr: { 'href': '../images/Logowhite.png' } });
    }

    gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true })
      .to('.m', { duration: (i) => [0.8, 1.3][i], y: -10266, ease: 'steps(29)', stagger: -0.3 }, 0)
      .to(imageRef, { duration: 2, scale: 1.1, transformOrigin: '50% 50%', ease: 'power2', onComplete: swapMask }, 0);

  }, []);

  return (
    <div className="one">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 Hero">
            <div className="row">
              <h1 className="col-md-12 text-center  hero1">
                Team Meta Morph<span id="hero2"> Facilitating.</span>.
              </h1>
              <p className="col-md-12 text-center hero3">Technology Beyond Science</p>
              <NavLink className="gallery" to="/Project" style={{ fontWeight: 'bold' }}>
                Exhibitions
              </NavLink>
            </div>
          </div>
          <div className="col-md-8 Robot">
            <object
              type="image/png"
              data={metmorph}
              className="Robo"
              ref={(el) => (imageRef = el)}
            ></object>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Landing;

