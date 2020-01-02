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
            <a href="https://linkedin.com/in/peyton-graham-0b268b167" target="_blank">            
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.reddit.com/user/Sleysin" target="_blank">            
              <i className="fab fa-reddit"></i>
            </a>
            <a href="https://discord.gg/TfvvVb" target="_blank">              
              <i className="fab fa-discord"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCYY7OFCBCAAWb7QOHnQ776w" target="_blank">              
              <i className="fab fa-youtube"></i>
            </a>
            <a href="mailto:pxgraham@gmail.com" target="_blank">              
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:9283586658">              
              <i className="fas fa-phone-square-alt"></i>
            </a>
          </nav>     
        </div>
    )
  }
}

export default Navbar;