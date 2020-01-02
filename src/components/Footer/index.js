import React, {Component} from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark text-center text-light">
        <span>Sponsored in part by</span>
        <a className="navbar-brand text-primary" href="https://sleysin.com">Sleysin Games</a>
        <a className="navbar-brand text-primary" href="https://hiddenblueinside.com">The Hidden Blue Shop</a>
        <a className="navbar-brand text-primary" href="https://pxgraham.github.io">But Why Pod</a>
      </nav>
    )
  }
}

export default Footer;