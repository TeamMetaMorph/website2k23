import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dataFaq from "../dataAll/dataFaq.json";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "./FAQ";

function FaqDisplay() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (window.innerWidth > 400) {
      gsap.fromTo(
        "#question1",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question1",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question1",
          },
        }
      );

      gsap.fromTo(
        "#answer1",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer1",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer1",
          },
        }
      );

      gsap.fromTo(
        "#question2",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question2",
          },
        }
      );
      gsap.fromTo(
        "#answer2",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer2",
          },
        }
      );

      gsap.fromTo(
        "#question2",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question2",
          },
        }
      );
      gsap.fromTo(
        "#answer2",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer2",
          },
        }
      );

      gsap.fromTo(
        "#question2",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question2",
          },
        }
      );
      gsap.fromTo(
        "#answer2",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer2",
          },
        }
      );

      gsap.fromTo(
        "#question2",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question2",
          },
        }
      );
      gsap.fromTo(
        "#answer2",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer2",
          },
        }
      );

      gsap.fromTo(
        "#question2",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question2",
          },
        }
      );
      gsap.fromTo(
        "#answer2",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer2",
          },
        }
      );

      gsap.fromTo(
        "#question2",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question2",
          },
        }
      );
      gsap.fromTo(
        "#answer2",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer2",
          },
        }
      );

      gsap.fromTo(
        "#question2",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          // repeat:-1,
          scrollTrigger: {
            trigger: "#question2",
            // start: 'top top',
            end: 'bottom top',

          },
        }
      );
      gsap.to(
        "#question2",
        {
          x: 0,
          opacity: 1,

          duration: 2,
          ease: "bounce",
          delay: 1.8,
          scrollTrigger: {
            trigger: "#question2",
          }
        });
      gsap.fromTo(
        "#answer2",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer2",
          },
        }
      );

      gsap.fromTo(
        "#question2",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question2",
          },
        }
      );
      gsap.fromTo(
        "#answer2",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer2",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer2",
          },
        }
      );

      gsap.fromTo(
        "#question3",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question3",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question2",
          },
        }
      );
      gsap.fromTo(
        "#answer2",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer3",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer2",
          },
        }
      );

      gsap.fromTo(
        "#question3",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question3",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question3",
          },
        }
      );
      gsap.fromTo(
        "#answer3",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer3",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer3",
          },
        }
      );

      gsap.fromTo(
        "#question4",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question4",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question4",
          },
        }
      );
      gsap.fromTo(
        "#answer4",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer4",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer4",
          },
        }
      );

      gsap.fromTo(
        "#question5",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question5",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question5",
          },
        }
      );
      gsap.fromTo(
        "#answer5",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer5",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer5",
          },
        }
      );

      gsap.fromTo(
        "#question6",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question6",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question6",
          },
        }
      );
      gsap.fromTo(
        "#answer6",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer6",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer6",
          },
        }
      );

      gsap.fromTo(
        "#question7",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question7",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question7",
          },
        }
      );
      gsap.fromTo(
        "#answer7",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer7",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer7",
          },
        }
      );

      gsap.fromTo(
        "#question8",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question8",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question8",
          },
        }
      );
      gsap.fromTo(
        "#answer8",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer8",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer8",
          },
        }
      );

      gsap.fromTo(
        "#question9",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question9",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question9",
          },
        }
      );
      gsap.fromTo(
        "#answer9",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer9",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer9",
          },
        }
      );

      gsap.fromTo(
        "#question10",
        {
          x: -100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#question10",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#question10",
          },
        }
      );
      gsap.fromTo(
        "#answer10",
        {
          x: 100,

          duration: 2,
          ease: "bounce",
          delay: 0.8, opacity: 0,
          scrollTrigger: {
            trigger: "#answer10",
          },
        },
        {
          x: 0,

          duration: 2,
          ease: "bounce",
          delay: 1, opacity: 1,
          scrollTrigger: {
            trigger: "#answer10",
          },
        }
      );
    }
  }, []);

  const faqList = dataFaq.map((frequent, index) => (
    <div className="col-md-12">
      <FAQ key={index} id={`myques${index}`} frequent={frequent} />
    </div>
  ));

  return (
    <div>
      <h1 class="firsth text-capitalize font-weight-bold" style={{ marginTop: "15px" }}>
        Frequently Asked <span style={{ color: "#9B5DE5" }}>Questions</span>
      </h1>

      <div>{faqList}</div>
    </div>
  );
}

export default FaqDisplay
