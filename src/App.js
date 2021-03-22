import React from "react";
// STYLES
import "./styles/App.scss";
// ROUTER
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/header/Header";
// PAGES
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
