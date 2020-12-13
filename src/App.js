import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Navbar from "./component/Navbar/Navbar";
// import Header from "./component/Header/Header";
// import Footer from "./component/Footer/Footer";

// pages
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio"


import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />     
        {/* <Header />    */}
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;