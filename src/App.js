import "./App.css";
import Typewriter from "typewriter-effect";
import github from "./github.png";
import instagram from "./instagram.png";

function App() {
  var exp = new Date().getFullYear() - 2018;
  var age = new Date().getFullYear() - 1997;
  return (
    <div className="App App-container">
      <img src="https://sauravmh.com/images/rotatingChair.gif" className="App-logo" alt="logo" />
      <div className="Typewriter-div">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.pauseFor(1500).typeString("Enkhtur E<br/>").pauseFor(300).typeString("<strong>Software Developer🚀.</strong>").pauseFor(1000).start();
          }}
        />
      </div>
      <div className="About-container">
        <span>
          I am currently {age}, and I have been developing for almost {exp} years. My current focus is on Mobile Develoment with <span className="custom-lang">JavaScript</span> / <span className="custom-lang">Reactjs</span> / <span className="custom-lang">Nodejs</span> / <span className="custom-lang">React Native</span> / <span className="custom-lang">Angularjs</span> and some other cool libraries and frameworks.
        </span>
      </div>
      <div className="Contact">
        <a href="https://github.com/EnkhturBaina" target="_blank">
          <img src={github} alt="logo" className="Contact-icon Github-icon" />
        </a>
        <a href="https://www.instagram.com/_enkhtur/" target="_blank">
          <img src={instagram} alt="logo" className="Contact-icon" />
        </a>
      </div>
    </div>
  );
}

export default App;
