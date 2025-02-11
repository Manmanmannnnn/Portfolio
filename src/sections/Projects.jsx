import React from "react";
import { images, skills } from "../components/content.jsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";
import { FaArrowCircleUp } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      id="about"
      className="overflow-hidden h-screen w-full max-container cursor-default"
    >
      <div className="h-1/2">
        <h2 className="text-3xl">Projects</h2>
        <div className="w-full h-0.5 bg-black mb-10"></div>
        <div className=" w-full  ">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            autoFocus={false}
            transitionTime={700}
            animationHandler={"fade"}
          >
            {images.map((el, index) => (
              <div className="flex">
                <img
                  src={el.url}
                  className="object-cover  h-[23rem] rounded-3xl flex-1   "
                  alt=""
                />
                <p className="flex-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quidem minima quasi similique doloribus a, cumque
                  iste omnis inventore doloremque.
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="mt-5 h-[28%]">
        <div className="w-full h-0.5 bg-black my-10"></div>
        <h2 className="text-3xl text-center">Work Experience</h2>
        <div className="text-2xl">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              "Currently in progress", // initially rendered starting point
              ,
              "Currently in progress.......",
              4000,
            ]}
            speed={10}
            repeat={Infinity}
            cursor={false}
          />
        </div>
        <div className="w-full animate-pulse ">
          <div className="w-1/5 h-3 rounded-2xl bg-slate-200 mb-3"></div>
          <div className="w-3/5 h-3 rounded-2xl bg-slate-200 mb-3"></div>
          <div className="w-2/5 h-3 rounded-2xl bg-slate-200 mb-3"></div>

          <div></div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl text-center mb-3">Skills</h2>
        <div className="w-1/2 m-auto">
          <Marquee gradient={true}>
            {skills.map((skill, index) => (
              <div className="mr-20">{skill.url}</div>
            ))}
          </Marquee>
        </div>

        <a href="#home">
          <FaArrowCircleUp
            size={30}
            className="animate-bounce absolute right-28 bottom-12"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
