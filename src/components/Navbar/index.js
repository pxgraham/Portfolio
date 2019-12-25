import React, {Component} from 'react';
import './index.css';

class Navbar extends Component {
  render() {
    return (
        <div className="navbar">
            <span className="nav-title">Peyton Graham</span>
            <div>
                <i className="fab fa-github"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-reddit"></i>
                <i className="fab fa-discord"></i>
                <i className="fab fa-youtube"></i>
                <i className="fas fa-envelope"></i>
                <i className="fas fa-phone-square-alt"></i>     
            </div>
        </div>
    )
  }
}

export default Navbar;