import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <Navbar />     
        <Header />   
          {/* <Route exact path="/" component={} />
          <Route exact path="/" component={} />
          <Route exact path="/" component={} />
          <Route exact path="/" component={} />         */}
        <Footer />
      </div>
    </Router>
  );
}
export default App;