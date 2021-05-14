import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./container/Landing/Landing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
};

export default App;
