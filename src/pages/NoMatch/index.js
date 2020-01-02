import React, {Component} from 'react';
import './index.css';
import Navbar from '../../components/Navbar';
import Gif from '../../images/gif.gif';

class NoMatch extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <div className="container">
              <div className="row">
                <div className="col text-light text-center">                
                  <h1 style={{zIndex: '4', color: 'red'}}>How did you get here? You let my bunnies out idiot.<br /> <a href="/">Go Home Now before I turn you into bunnie stew</a></h1>
                </div>
              </div>
            </div>

                  <img src={Gif} style=
                  {
                    {
                      position: 'fixed',
                      width: '100%',
                      height: '100%',
                      left: '0px',
                      bottom: '0px',
                      zIndex: '-1'
                    }
                  }/>
        </div>
    )
  }
}

export default NoMatch;