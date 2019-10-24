import React from "react";
import { Provider } from "react-redux";
import { Log } from "./components/log/log.js";
import { Header } from "./components/header/header.js";
import "./App.css";

function App() {
  return (
    <div>
      <Log></Log>
      <Header></Header>
    </div>
  );
}

export default App;
