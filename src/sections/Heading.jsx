import { images } from "./../components/content.jsx";
import SlideShow from "../components/SlideShow";
const Heading = () => {
  return (
    <div
      id="home"
      className="overflow-hidden h-screen w-full max-container cursor-default"
    >
      <header className="flex justify-between p-3 mt-10">
        <p>Norman Gomez</p>
        <p>Connect with me</p>
      </header>

      <div className="w-full h-0.5 bg-black"></div>

      <div className="flex flex-col items-center mt-20">
        <h1 className="font-[1000] text-9xl mb-20 ">
          Work-in <span className="text-blue-950">Progress</span>
        </h1>

        <div className="flex w-full items-center ">
          <div className="flex-1 text-7xl font-semibold">
            Web Developer based in Philippines
            <a href="#about" className="text-xl block underline mt-10">
              Show me more!
            </a>
          </div>
          <div className="flex-1 pl-40  relative">
            <SlideShow imageInbox={images} autoslideTimer={3000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
