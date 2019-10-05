import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}></Provider>
    </div>
  );
}

export default App;
