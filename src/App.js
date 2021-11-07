 import { useState } from "react";
import "./App.scss";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, bridge } = CV;


function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} /> 
      <hr className="line"/>
      <div className='container'>
      <button
        className="button"
        onClick={() => setShowEducation(true)}
      >
        Education
        <div className="button__horizontal"></div>
	      <div className="button__vertical"></div>
      </button>
      <button
        className="button"
        onClick={() => setShowEducation(false)}
      >
        Experience
        <div className="button__horizontal"></div>
	      <div className="button__vertical"></div>
      </button>
      </div>
      
      <hr className="line"/>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      {/* <Education education={education} />
      <Experience experience={experience} />  */}
      <More
      languages={languages}
      habilities={habilities}
      bridge={bridge}
      />
      
    </div>
  );
}

export default App;
