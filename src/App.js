import React, { Component, Fragment, Suspense } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Page1 from "./Components/Page1";

const Page2Component = React.lazy(() => import("./Components/Page2"));
const Page3Component = React.lazy(() => import("./Components/Page3"));

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
    };
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    // Part 1 - No code splitting
    if (this.state.route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "page2") {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2Component onRouteChange={this.onRouteChange} />;
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3Component onRouteChange={this.onRouteChange} />;
        </Suspense>
      );
    }
  }
}

export default App;
