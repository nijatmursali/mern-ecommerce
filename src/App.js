import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import ShopScreen from "./Screens/ShopScreen";

//import routers
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/shop" component={ShopScreen} />
      <Footer />
    </Router>
  );
}

export default App;
