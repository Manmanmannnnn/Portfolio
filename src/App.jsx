import React, { useState } from "react";
import Heading from "./sections/Heading";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function toggleDisplay() {
    setIsDisplayed((previous) => !previous);
  }
  return (
    <div className="relative w-full">
      <Contact isDisplayed={isDisplayed} />
      <div onClick={isDisplayed ? toggleDisplay : undefined}>
        <Heading toggleDisplay={toggleDisplay} isDisplayed={isDisplayed} />
        <Projects />
      </div>
    </div>
  );
};

export default App;
