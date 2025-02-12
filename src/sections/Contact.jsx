import React from "react";
import copyTextToClipboard from "copy-text-to-clipboard";
import { FaGithub, FaLinkedin, FaRegCopy } from "react-icons/fa";
const Contact = ({ isDisplayed }) => {
  return (
    <div
      className={`${isDisplayed ? "fixed" : "hidden"}  animate-in slide-in-from-left-full duration-1000 w-[50rem] m-auto rounded-r-[7rem] h-2/5 bg-stone-800`}
    >
      <p className="p-5 text-gray-100 font-medium text-3xl">
        Looking forward to work with you
      </p>

      <div
        className="text-gray-100 flex items-center text-xl p-5 cursor-pointer w-1/2"
        onClick={() => copyTextToClipboard("normanbobgomez@gmail.com")}
      >
        <p>normanbobgomez@gmail.com</p>
        <FaRegCopy />
      </div>

      <div className="absolute right-20 bottom-8 flex text-4xl gap-2 text-gray-100">
        <a
          href="https://github.com/Manmanmannnnn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/norman-bob-gomez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
