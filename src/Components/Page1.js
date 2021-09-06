import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Page1 = ({ onRouteChange }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Page 1</h1>
    </header>

    <button className="disabled">
      <Link to="Page1">Page 1</Link>
    </button>
    <button>
      <Link to="Page2">Page 2</Link>
    </button>
    <button>
      <Link to="Page3">Page 3</Link>
    </button>
  </div>
);

export default Page1;
