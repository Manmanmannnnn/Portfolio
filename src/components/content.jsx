import calc from "../assets/projectImages/calculator.png";
import rps from "../assets/projectImages/pokemon-rps.png";
import pokedeck from "../assets/projectImages/pokedeck.png";
import clock from "../assets/projectImages/clock.png";
import task from "../assets/projectImages/taskManager.png";
import weather from "../assets/projectImages/weather.png";

import engineer from "../assets/kendall-ruth-AijuW-HlE30-unsplash.jpg";
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
    description: "Engineer x Web Developer",
  },
  {
    author: "unknown",
    url: coder,
    description: "Coding for Fun",
  },
  {
    author: "unknown",
    url: chess1,
    description: "Chess fan",
  },

  {
    author: "unknown",
    url: darts,
    description: "Darts Fanatic",
  },
];

const skills = [
  { name: "HTML", url: <FaHtml5 size={35} /> },
  { name: "CSS", url: <FaCss3Alt size={35} /> },
  { name: "JS", url: <FaJsSquare size={35} /> },
  { name: "SASS", url: <FaSass size={35} /> },
  {
    name: "PRETTIER",
    url: <SiPrettier size={35} />,
  },
  { name: "ESLINT", url: <SiEslint size={35} /> },
  { name: "REACT", url: <FaReact size={35} /> },
  { name: "REACT", url: <RiTailwindCssFill size={35} /> },
];

const projects = [
  {
    name: "⚡ Poke-Deck App ⚡",
    image: pokedeck,
    demo: "https://zingy-flan-72d304.netlify.app/",
    github: "https://github.com/Manmanmannnnn/Pokedeck_App",
    description:
      "This website allows you to explore a collection of Pokémon and view their information.",
  },
  {
    name: "Pokemon Rock-Paper-Scissor 🎮 ",
    image: rps,
    demo: "https://super-blini-8bfade.netlify.app/",
    github: "https://github.com/Manmanmannnnn/Rock-Paper-Scissor",
    description:
      "This is a fun twist on the classic game, featuring Pokémon types instead of traditional rock, paper, and scissors. The game is played between three types of Pokémon: Water 🌊, Fire 🔥, and Grass 🌱.",
  },
  {
    name: "Weather App 🌤️🌏",
    image: weather,
    demo: "https://chic-parfait-eaa487.netlify.app/",
    github: "https://github.com/Manmanmannnnn/Odin-Project_WeatherApp",
    description:
      "This Weather App 🌤️🌍 allows users to quickly check the weather conditions and the current time for any location worldwide.",
  },
  {
    name: "Task Manager 📝",
    image: task,
    demo: "https://ubiquitous-syrniki-75181d.netlify.app/",
    github: "https://github.com/Manmanmannnnn/TaskManager_App",
    description:
      "A simple to-do app built to help you manage tasks. You can add tasks, mark them as completed, delete them, and sort them according to their status (completed, not completed, or all tasks).",
  },
  {
    name: "Clock App 🕰️",
    image: clock,
    demo: "https://iridescent-starburst-c12be6.netlify.app/",
    github: "https://github.com/Manmanmannnnn/my-clock-app",
    description:
      "This app displays the current time and includes a simple Stopwatch feature for timing tasks and events. 🚀",
  },
  {
    name: "Calculator 🧮",
    image: calc,
    demo: "https://splendorous-nasturtium-7df5a1.netlify.app/",
    github: "https://github.com/Manmanmannnnn/Odin-Project_Calculator",
    description:
      "This simple web-based calculator, supporting basic mathematical operations such as addition, subtraction, multiplication, and division.",
  },
];

export { images, skills, projects };
