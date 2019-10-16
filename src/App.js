import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    // <Router>
      <div className="background">
        <div className="background-img"></div>
        <Navbar />
        <div className="container">
          <Portfolio />
          <Contact />
        {/* <Switch> */}
          {/* <Route exact path="/" component={Portfolio} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
          {/* <Route component={Portfolio} /> */}
        {/* </Switch> */}
        {/* <Footer /> */}
        </div>
      </div>
    // </Router>
  );
}

export default App;
