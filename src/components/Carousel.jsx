import { useEffect, useState } from "react";

const Carousel = ({ imageInbox }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  function next() {
    setSlideIndex((curr) => (curr === imageInbox.length - 1 ? 0 : curr + 1));
  }

  function previous() {
    setSlideIndex((curr) => (curr === 0 ? imageInbox.length - 1 : curr - 1));
  }

  return (
    <div className="overflow-hidden relative flex gap-3 w-full p-2">
      {imageInbox.map((el, index) => (
        <img className="w-1/3 rounded-2xl " src={el.url} key={index} alt="" />
      ))}

      <div
        onMouseEnter={previous}
        className={` bg-transparent absolute h-full w-1/6 animateSlideLeft`}
      ></div>
      <div
        onMouseEnter={next}
        className={`bg-transparent absolute h-full w-1/6 right-0`}
      ></div>
    </div>
  );
};

export default Carousel;
