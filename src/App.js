import React from "react";
// STYLES
import "./styles/App.scss";
// ROUTER
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/header/Header";
import Footer from "./components/Footer";
// PAGES
import Category from "./pages/Category";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/collections/:collectionName" exact>
          <Category />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
