import React, { useRef, useEffect } from "react";
import "../css/AboutUs.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Snowfall from "react-snowfall";


function AboutUs() {

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    if (window.innerWidth > 400) {
      gsap.fromTo(
        ".content4",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content4",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content4",
          },
        }
      );


      gsap.fromTo(
        ".content5",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content5",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content5",
          },
        }
      );

      gsap.fromTo(
        ".content1",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content1",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content1",
          },
        }
      );

      gsap.fromTo(
        ".content2",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content2",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content2",
          },
        }
      );

      gsap.fromTo(
        ".content3",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content3",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content3",
          },
        }
      );


      gsap.fromTo(
        ".content6",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content6",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content6",
          },
        }
      );


      gsap.fromTo(
        ".content7",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content7",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content7",
          },
        }
      );


      gsap.fromTo(
        ".content8",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content8",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content8",
          },
        }
      );


      gsap.fromTo(
        ".content9",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content9",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content9",
          },
        }
      );

      gsap.fromTo(
        ".content9",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content9",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content9",
          },
        }
      );

      gsap.fromTo(
        ".content10",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content10",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content10",
          },
        }
      );
      gsap.fromTo(
        ".content11",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content11",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content11",
          },
        }
      );
      gsap.fromTo(
        ".content12",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content12",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content12",
          },
        }
      );
    }
  }, []);

  return (
    <div className="journey">
      <h1 id="timetop" style={{ paddingTop: "12vh" }}>
        Journey of Our Team
      </h1>
      <div class="timeline">
        <ul>
          <li>
            <div class="content1">
              <h3>How was Meta Morph Established?</h3>
              <p id="paratime">
                <br />The B. Tech. Programme in Materials Science and Engineering (MSE) started in the year 2017. Following this, Team Meta Morph was established by the first batch of B.Tech. MSE with the primary motive to facilitate novel interdisciplinary developments in the field of Materials Engineering and Materials Science both within the institute and beyond its walls. The name of the Team has its roots in the wonderful class of novel materials known as Metamaterials – materials that showcase properties deviating from conventional standards. Our team had a distinct perception and vision. The desire to be unique in our endeavours has always been a natural disposition of the members of our team, and we proved the same during our first debut in NIMBUS 2019.


                {" "}
              </p>
            </div>
            <div class="time">
              <h4>December 2018</h4>
            </div>
          </li>

          <li>
            <div class="content2">
              <h3>NIMBUS 2K19 and Our Projects</h3>
              <p id="paratime">
                We made Several Projects that year like:
                <br />

                <i class="fa fa-star" aria-hidden="true"></i> Piezo-Electric Pathway<br />
                Magnetic Ink <i class="fa fa-star" aria-hidden="true"></i>  <br />
                <i class="fa fa-star" aria-hidden="true"></i> Ferro-Fluid  <br />
                Super Capacitor <i class="fa fa-star" aria-hidden="true"></i>  <br />

                <i class="fa fa-star" aria-hidden="true"></i> Zirconia  <br />
                Hydrophobic surface <i class="fa fa-star" aria-hidden="true"></i > <br />

                {" "}
              </p>
            </div>
            <div class="time">
              <h4>April 2019</h4>
            </div>
          </li>

          <li>
            <div class="content3">
              <h3>Our Achievements in NIMBUS 2K19</h3>
              <p id="paratime">
                We achieved a Lot in NIMBUS 2019. We gained a lot of new experiences that we have never experienced in Life. We learned several New Technology, Software, and new skills that helped us in our lives. We got the award for the BEST DEBUT TEAM IN NIMBUS 2019. Getting an award in the Very first year was an amazing experience for our Team. Also, our 3 Research Projects got shortlisted for MSRI.              </p>
            </div>
            <div class="time">
              <h4>February 2019</h4>
            </div>
          </li>

          <li>
            <div class="content4">
              <h3><i class="fa fa-bomb " aria-hidden="true"></i> CORONA <i class="fa fa-bomb" aria-hidden="true"></i> </h3>
              <p id="paratime">
                It was on March 15th 2020, when the college released the official notice for immediate vacancy of the hostels. The unprecedented vacation was informed to be of 15 days, which kept extending every month. It was in April when we finally had to face the reality and depth of the situation and NIMBUS 2020 Was cancelled.              </p>
            </div>
            <div class="time">
              <h4>17 March 2020</h4>
            </div>
          </li>

          

          <li>
            <div class="content8">
              <h3>NIMBUS 2K21</h3>
              <p id="paratime">
                Short video series on Instagram page on "Advancement in food packaging technology".
                In this we see how innovative food packaging techniques help us to prolong shelf life and maintain the quality and to regulate freshness of food products.
                <br />" <br />  {" "}
              </p>
            </div>
            <div class="time">
              <h4>May 2021</h4>
            </div>
          </li>

          <div style={{ clear: "both" }}></div>

          <div style={{ clear: "both" }}></div>

          <li>
            <div class="content9">
              <h3>Conclusion 2K21</h3>
              <p id="paratime">
                We acquired a lot of informative knowledge this year. We learn how to combine different disciplines of science to help mankind in different ways. We perform various simulation based projects, and new technology.

              </p>
            </div>
            <div class="time">
              <h4>April 2021</h4>
            </div>
          </li>

          <div style={{ clear: "both" }}></div>
          <div style={{ clear: "both" }}></div>

          <li>
            <div class="content10">
              <h3>Announcement of Nimbus 2K22</h3>
              <p id="paratime">
                As the flagship of Meta Morph reaced Nimbus 2k22 we were ready to conquer unseen heights. New members and a new leadership with limitless dreams as guide came to ground to break the already set limits. <br />

              </p>
            </div>
            <div class="time">
              <h4>January 2022</h4>
            </div>
          </li>

          <li>
            <div class="content11">
              <h3>Prepartion of Nimbus 2K22</h3>
              <p id="paratime">
                Again to begin with the freshly selected volunteers the executive members were assigned the task to polish them and to provide them in hand experience to work with. So, they can understand the details and working of the team. These new minds came with new ideas and fresh energy in them.
              </p>
            </div>
            <div class="time">
              <h4>February 2022</h4>
            </div>
          </li>

          <li>
            <div class="content12">
              <h3>Projects we planned for Nimbus 2K22</h3>
              <p id="paratime">
                <i class="fa fa-star" aria-hidden="true"></i> Anti Tremor Gloves
                Using Piezoelectric Material<i class="fa fa-star" aria-hidden="true"></i>  <br />
                <i class="fa fa-star" aria-hidden="true"></i> Bandgap Prediction Using
                Machine Learning<i class="fa fa-star" aria-hidden="true"></i>  <br />
                <i class="fa fa-star" aria-hidden="true"></i> Bone Replacement<i class="fa fa-star" aria-hidden="true"></i>  <br />
                <i class="fa fa-star" aria-hidden="true"></i> Thermistor Fire Alarm<i class="fa fa-star" aria-hidden="true"></i>  <br />
                <i class="fa fa-star" aria-hidden="true"></i> Railway Track Cracks
                Detection System<i class="fa fa-star" aria-hidden="true"></i>  <br />
                <i class="fa fa-star" aria-hidden="true"></i> Composite Failure
                Detector For Aircraft<i class="fa fa-star" aria-hidden="true"></i>  <br />

              </p>
            </div>
            <div class="time">
              <h4>March 2022</h4>
            </div>
          </li>

          <div style={{ clear: "both" }}></div>
          <div style={{ clear: "both" }}></div>

          <li>
            <div class="content12">
              <h3><i class="fa fa-bomb " aria-hidden="true"></i>The Unfortunate Event<i class="fa fa-bomb " aria-hidden="true"></i></h3>
              <p id="paratime">
                That year NIMBUS was hit by a black day were due to outbroke of a vicious event shook the campus. Due to the underlined incident the admistration took the harsh step to cancel the NIMBUS 2K22. Hardwork and dreams for that year broke into peices as well with the same.
              </p>
            </div>
            <div class="time">
              <h4>February 2022</h4>
            </div>
          </li>

          <li>
            <div class="content12">
              <h3>Wait is Over</h3>
              <p id="paratime">
                With the announcement of the NIMBUS 2K23 woke a series of opportunities. There were new challenges to be faced and another year full of fun and technologies in the atmosphere of NITH
              </p>
            </div>
            <div class="time">
              <h4>April 2021</h4>
            </div>
          </li>

          <div style={{ clear: "both" }}></div>
          <li>
            <div class="content12">
              <h3>NIMBUS 2K23</h3>
              <p id="paratime">
                Team Meta Morph is Ready for NIMBUS 2K23.<br />" <i class="fa fa-snowflake" aria-hidden="true"></i> Stay Connected-----Stay Safe"  <i class="fa fa-snowflake" aria-hidden="true"></i> <br /> <i class="fa fa-quote-left" aria-hidden="true"></i> TEAM META MORPH <i class="fa fa-quote-right" aria-hidden="true"></i> {" "}
              </p>
            </div>
            <div class="time">
              <h4>April 2021</h4>
            </div>
          </li>


        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
