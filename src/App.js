import React from "react";
// STYLES
import "./styles/App.scss";
// ROUTER
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Nav from "./components/navigation/Nav";
// PAGES
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
