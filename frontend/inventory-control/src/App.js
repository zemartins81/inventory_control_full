import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/menu/Menu.jsx";
import Content from "./components/content/Content.jsx";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
};

export default App;
