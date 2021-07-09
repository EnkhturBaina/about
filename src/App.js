import "./App.css";
import Typewriter from "typewriter-effect";

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
    </div>
  );
}

export default App;
