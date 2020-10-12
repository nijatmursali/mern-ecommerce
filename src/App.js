import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import NewArrivals from "./Components/NewArrivals";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Featured />
      <NewArrivals />
      <Footer />
    </div>
  );
}

export default App;
