import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../uitilities/ScreenHeading/screenHeading";
import ScrollService from "../../uitilities/ScrollService";
import Animations from "../../uitilities/Animations";

// importing images of projects
import SimonGame from "../../../src/img/ProjectsIntroduction/Animation1.gif";
import DrumKit from "../../../src/img/ProjectsIntroduction/Animation2.gif";
import DocumentationApp from "../../../src/img/ProjectsIntroduction/Animation3.gif";
import FunAge from "../../../src/img/ProjectsIntroduction/Animation4.gif";
import PassWordG from "../../../src/img/ProjectsIntroduction/Animation5.gif";
import chCounter from "../../../src/img/ProjectsIntroduction/Animation6.gif";

// import footer shape
import shape from "../../../src/img/ProjectsIntroduction/shape-bg.png";
import "./ProjectsIntroduction.css";
export default function ProjectsIntroduction(props) {
  // Function to handle fading in screen
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // Subscribe to the fadeInScreenHandler using ScrollService

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  // Configuration options for OwlCarousel
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },

      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  };

  return (
    <div className="ProjectsIntroduction-section fade-in" id={props.id || ""}>
      <ScreenHeading
        title={"Projects Preview"}
        subHeading={"A preview to some of my projects."}
      />
      <section>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="ProjectsIntroduction-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a
                        href="https://starsofchance.github.io/50-HTML-CSS-JS-Project-14/"
                        target="_blank"
                      >
                        Simon Game
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={SimonGame} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a
                        href="https://starsofchance.github.io/50-HTML-CSS-JS-Project-7/"
                        target="_blank"
                      >
                        Real-time Character Counter
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={chCounter} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a
                        href="https://starsofchance.github.io/50-HTML-CSS-JS-Project-13/"
                        target="_blank"
                      >
                        Drum Kit
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={DrumKit} alt="no internet connection"></img>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a
                        href="https://starsofchance.github.io/50-HTML-CSS-JS-Project-10/"
                        target="_blank"
                      >
                        Funny Age Calculator
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={FunAge} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a
                        href="https://github.com/starsofchance/My-Documentation-Project"
                        target="_blank"
                      >
                        Documentation App
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img
                      src={DocumentationApp}
                      alt="no internet connection"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a
                        href="https://starsofchance.github.io/50-HTML-CSS-JS-Project-9/"
                        target="_blank"
                      >
                        Random Password Generator
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={PassWordG} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="footer-image">
          <img src={shape} alt=" shape with white color" />
        </div>
      </section>
    </div>
  );
}
