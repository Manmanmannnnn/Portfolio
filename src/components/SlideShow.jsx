import { useEffect, useState } from "react";

const SlideShow = ({ imageInbox, autoslideTimer }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((previous) =>
        previous >= imageInbox.length - 1 ? 0 : previous + 1
      );
    }, autoslideTimer);

    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <div>
      {imageInbox.map((el, index) => (
        <div className="relative">
          <img
            key={index}
            src={el.url}
            className={`animationFade rounded-3xl object-cover h-[23rem] w-full  ${index === slideIndex ? "block" : "hidden"}`}
            alt=""
          />
          <p
            className={`animateText ${index === slideIndex ? "block" : "hidden"} font-semibold absolute z-10 bottom-1 w-full text-center text-3xl text-slate-300`}
          >
            {el.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
