import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/">
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Portfolio} />
        </Switch>
     </Router>
  );
}

export default App;
