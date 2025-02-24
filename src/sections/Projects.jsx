import React from "react";
import { skills, projects } from "../components/content.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
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
        <div className=" w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {projects.map((el) => (
              <SwiperSlide>
                <div className="flex">
                  <img
                    key={el.name}
                    src={el.image}
                    className="object-fill  h-[23rem] rounded-3xl flex-1"
                    alt={el.name}
                  />
                  <div className="flex-1 relative ">
                    <h2 className="font-serif text-3xl font-bold p-5 text-center">
                      {el.name}
                    </h2>
                    <p className="w-4/5 m-auto text-lg font-sans font-medium">
                      {el.description}
                    </p>
                    <div className=" absolute bottom-0 left-3/4 text-2xl font-serif  font-semibold flex justify-center gap-7 cursor-pointer">
                      <a
                        href={el.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                      <a
                        href={el.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="z-0 mt-5 h-[28%] cursor-progress">
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
