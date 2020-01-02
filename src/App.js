import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NoMatch from './pages/NoMatch';

function App() {
  return (         
      <HashRouter>
        <div className="background"></div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Projects" component={Projects} />
            <Route component={NoMatch} />
          </Switch>
      </HashRouter>
  );
}

export default App;
