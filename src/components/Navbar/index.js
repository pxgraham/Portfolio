import React, {Component} from 'react';
import './index.css';

class Navbar extends Component {
  render() {
    return (
        <div>
          <nav class="navbar navbar-dark bg-dark text-light">
            <a class="navbar-brand">Peyton Graham</a>
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-reddit"></i>
            <i className="fab fa-discord"></i>
            <i className="fab fa-youtube"></i>
            <i className="fas fa-envelope"></i>
            <i className="fas fa-phone-square-alt"></i>
          </nav>     
        </div>
    )
  }
}

export default Navbar;