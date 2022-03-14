import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import About from "../About/About";
import Interests from "../Interests/Interests";
import Work from "../Work/Work";

import "./Home.scss";

const Home = () => {
  const workRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const arrowRef = useRef<null | HTMLAnchorElement>(null);

  const [isVisible, setVisible] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  const scrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useScrollSnap({ ref: aboutRef, duration: 100, delay: 0 });

  // const bindScrollSnap = () => {
  //   const element = aboutRef.current as HTMLDivElement;
  //   if (!element) {
  //     return;
  //   }
  //   console.log(element);
  //   createScrollSnap(
  //     element,
  //     {
  //       snapDestinationX: "0%",
  //       snapDestinationY: "90%",
  //       timeout: 100,
  //       duration: 300,
  //       threshold: 0.2,
  //       // easing: easeInOutQuad,
  //     },
  //     () => console.log("element snapped")
  //   );
  // };

  // useEffect(() => {
  //   bindScrollSnap();
  // }, []);

  return (
    <div className="home-container">
      <div className="scroll" />
      <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Home">
        <h1 className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          hi, i'm{" "}
          <span className="glitch hover" data-text="edmund." onClick={scrollToAbout}>
            edmund.
          </span>
        </h1>
        <h1 className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          welcome to my{" "}
          <span className="glitch hover" data-text="website." onClick={scrollToWork}>
            website.
          </span>
        </h1>
        <a
          className={`arrow bounce fade-in-section ${isVisible ? "is-visible" : ""}`}
          onClick={scrollToAbout}
          ref={arrowRef}
        >
          <FontAwesomeIcon icon={faArrowDown} size="3x" />
        </a>
      </motion.div>
      <div className="scroll" ref={aboutRef} />
      <About />
      <div className="scroll" ref={workRef} />
      <Work />
      <div className="scroll" />
      <Interests />
    </div>
  );
};

export default Home;
