import React, {Component} from 'react';
import './index.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

class Home extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <div className="body-pane">
            <div className="body-pane-info">
              <h1>Full Stack Developer</h1>
              <p>Building high quality responsive websites and providing an exceptional user experience.</p>
              <button className="btn btn-primary text-primary body-pane-btn">Projects</button>
              <button className="btn btn-light text-light body-pane-btn">Download Resume</button>
            </div>              
          </div> 
          <div className="footer-pane">
            <div className="footer-container">
              <div className="footer-pane-info">
                <h1>Technologies</h1>
                <div className="flex">
                  <div>
                    <p>React</p>
                    <p>Bootstrap</p>
                    <p>Jquery</p>
                    <p>SEO</p>
                    <p>JSON</p>
                    <p>AJAX</p>
                  </div>
                  <div>
                    <p>Mongo</p>
                    <p>MySql</p>
                    <p>Firebase</p>
                    <p>Express</p>
                    <p>PHP</p>    
                    <p>Wordpress</p>
                  </div>
                </div>
              </div>
              <div className="footer-pane-info text-center">
                <h1>Practice</h1>
                <div className="flex text-center">
                  <div>
                    <p className="hasSubText">University of Arizona Coding Bootcamp 2018-2019</p>
                    <p className="subtext">Certification in Full Stack web development</p>
                    <p>5 years coding experience</p>
                    <p>Many hours of work on personal and group projects</p>
                  </div>
                </div>
              </div>
              <div className="footer-pane-info">
                <h1>Contact</h1>
                <div className="flex">
                  <div>
                    <p>pxgraham@gmail.com</p>
                    <p>928.358.6658</p>
                  </div>
                </div>
              </div>
            </div>
          </div>      
          <Footer />   
        </div>
    )
  }
}

export default Home;