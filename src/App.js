import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Page1 from "./Components/Page1";

const Page2Component = React.lazy(() => import("./Components/Page2"));
const Page3Component = React.lazy(() => import("./Components/Page3"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/Page2">
            <Page2Component />
          </Route>
          <Route path="/Page3">
            <Page3Component />
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
