import React, {Component} from 'react';
import './index.css';
import Navbar from '../../components/Navbar';

class NoMatch extends Component {
  render() {
    return (
        <div>
            <Navbar />
            No Match
        </div>
    )
  }
}

export default NoMatch;