import engineer from "../assets/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg";
import chess1 from "../assets/hassan-pasha-y49mXQouZRg-unsplash.jpg";
import darts from "../assets/adriaan-terblanche-7kvzAWoEKcY-unsplash.jpg";
import coder from "../assets/emile-perron-xrVDYZRGdw4-unsplash.jpg";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiEslint, SiPrettier } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const images = [
  {
    author: "unknown",
    url: engineer,
    description: "Electrical Engineer x Web Developer",
  },
  {
    author: "unknown",
    url: coder,
    description: "Coding for Fun",
  },
  {
    author: "unknown",
    url: chess1,
    description: "Chess Lover",
  },

  {
    author: "unknown",
    url: darts,
    description: "Darts Fanatic",
  },
];

const skills = [
  { name: "HTML", url: <FaHtml5 size={35} />, level: "Intermediate" },
  { name: "CSS", url: <FaCss3Alt size={35} />, level: "Basic" },
  { name: "JS", url: <FaJsSquare size={35} />, level: "Basic" },
  { name: "SASS", url: <FaSass size={35} />, level: "Basic" },
  {
    name: "PRETTIER",
    url: <SiPrettier size={35} />,
    level: "Basic",
  },
  { name: "ESLINT", url: <SiEslint size={35} />, level: "Basic" },
  { name: "REACT", url: <FaReact size={35} />, level: "Basic" },
  { name: "REACT", url: <RiTailwindCssFill size={35} />, level: "Basic" },
];

export { images, skills };
