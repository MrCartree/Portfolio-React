import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// components
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

// pages
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";


import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />     
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
        <Footer />
      </div>
    </Router>
  );
}
export default App;