import { images } from "./../components/content.jsx";
import SlideShow from "../components/SlideShow";
import { TypeAnimation } from "react-type-animation";

const Heading = ({ toggleDisplay, isDisplayed }) => {
  return (
    <div
      id="home"
      className="overflow-hidden h-screen w-full max-container cursor-default"
    >
      <header className="flex justify-between p-3 mt-10">
        <p className="font-medium text-3xl  font-mono">Norman</p>
        <p
          className="cursor-pointer font-medium animate-bounce"
          onClick={!isDisplayed ? toggleDisplay : undefined}
        >
          Connect with me
        </p>
      </header>

      <div className="w-full h-0.5 bg-black animate-slide"></div>

      <div className="flex flex-col items-center mt-20 ">
        <h1 className="font-[1000] text-9xl mb-20 animate-in slide-in-from-top duration-1000 font-heading max-xl:text-8xl max-xl:mb-3    ">
          Work-in{" "}
          <span className="text-blue-950 animate-in fade-in-25 delay-1000 duration-1000   ">
            Progress
          </span>
        </h1>

        <div className="flex w-full items-center max-xl:flex-col-reverse max-xl:w-4/5 m-auto justify-center  ">
          <div className="flex-1 text-7xl font-semibold animate-in slide-in-from-bottom  duration-1000 max-xl:text-6xl max-xl:mt-3  ">
            Web Developer based in Philippines
            <a
              href="#about"
              className="text-xl block  mt-10 max-xl:mt-2 animate-pulse   w-32 rounded-2xl p-3 underline "
            >
              <TypeAnimation
                sequence={[2000, "Show more"]}
                speed={50}
                repeat={1}
                cursor={false}
              />
            </a>
          </div>
          <div className="flex-1 pl-40 relative animate-in fade-in-30 duration-500 max-xl:w-full max-xl:pl-0">
            <SlideShow imageInbox={images} autoslideTimer={1000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
