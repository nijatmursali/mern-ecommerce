import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Content from "./Components/Content";
import NewArrivals from "./Components/NewArrivals";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <NewArrivals />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
