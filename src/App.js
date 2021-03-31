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
import Product from "./pages/Product";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route
          path={[
            "/collections/:collectionName/:productSku",
            "/products/:productSku",
          ]}
          exact
        >
          <Product />
        </Route>
        <Route path="/collections/:collectionName">
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
