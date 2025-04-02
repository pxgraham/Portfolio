import React, {Component} from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark text-light">
        <div style={{ margin: '0 auto', width: '300px' }}>
          <a className="navbar-brand text-primary" href="https://github.com/pxgraham">
            https://github.com/pxgraham
          </a>
        </div>
      </nav>
    );
  }
}

export default Footer;