import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";

function App() {
  return (
    <div className="App App-container">
      <div className="floating-menu">
        <Link to="/">About</Link>
        <Link to="/work">Work</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
