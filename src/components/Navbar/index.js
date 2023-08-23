import React, {Component} from 'react';
import './index.css';

class Navbar extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-dark bg-dark text-light">
            <a href="/" className="navbar-brand text-primary text-silt">
              <span style={{color: 'cyan'}}>P</span><span>eyton </span>
              <span style={{color: 'cyan'}}>G</span><span>raham</span>
            </a>
            <a href="https://github.com/pxgraham" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </nav>     
        </div>
    )
  }
}

export default Navbar;
