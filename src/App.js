import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import image from "./836 [Converted].svg";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">ReactReduxHooks</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/tech">Tech</Link>
          </li>
        </ul>
      </nav>
      <header>
        <h1>React Redux Hooks</h1>
        <img src={image}></img>
      </header>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
