import React, {Component} from 'react';
import './index.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


class Home extends Component {
  render() {
    return (
        <div>
          <Navbar />          
          <br /><br />
          <div className="container text-light">          
            <div className="row">

              <div className="col-5">
                <h2>Full Stack Developer</h2>
                <p>Building high quality responsive websites and providing an exceptional user experience.</p>
                <button className="btn btn-dark text-light">Download Resume</button>
              </div>  

              <div className="col-2">
                <div className="gif-container">
                  <div className="gif"></div>
                </div>
              </div>

              <div class="col-5 text-right">
                <p>Producing the highest quality</p>
                <div className="text-primary">
                  <h2><a href="/">Games</a>, Tools, <span class="text-light">and</span> Projects</h2>
                </div>
                <br />
                <button className="btn btn-primary">View All</button>
              </div>

            </div>
            <br /><br /><br /><br />
            <div className="row">
              <div className="col">
                <h1>Hello 👋</h1>
                <h2> My name is Peyton.</h2>
                <p>
                  I am a Developer with a few things in mind on how developing should handled. 
                  Not just developing websites and applications, but developing ourselves as well... 
                  <a href="/#/blog">read more</a>
                </p>
              </div>
            </div>

            <br /><br /><br /><br />

            <div className="row text-light text-center">

              <div className="col">
                <h1>Technologies</h1>
                <div className="row">
                  <div className="col">
                    <p>React</p>
                    <p>Bootstrap</p>
                    <p>Jquery</p>
                    <p>SEO</p>
                    <p>JSON</p>
                    <p>AJAX</p>
                  </div>
                  <div className="col">
                    <p>Mongo</p>
                    <p>MySql</p>
                    <p>Firebase</p>
                    <p>Express</p>
                    <p>PHP</p>    
                    <p>Wordpress</p>
                  </div>
                </div>
              </div>

              <div className="col text-center">
                <h1>Practice</h1>
                <div>
                  <p className="hasSubText">University of Arizona Coding Bootcamp 2018-2019</p>
                  <p className="subtext">Certification in Full Stack web development</p>
                  <p>5 years coding experience</p>
                  <p>Many hours of work on personal and group projects</p>
                </div>
              </div>


              <div className="col text-center">
                <h1>Contact</h1>
                <p>pxgraham@gmail.com</p>
                <p>928.358.6658</p>
              </div>

            </div>
          </div>    
          <nav className="navbar navbar-light bg-light text-center">
            <span>Sponsored in part by</span>
            <a className="navbar-brand" href="#">Sleysin Games</a>
            <a className="navbar-brand" href="#">The Hidden Blue Shop</a>
            <a className="navbar-brand" href="#">But Why Pod</a>
            <a className="navbar-brand" href="#">💻</a>
          </nav>
        </div>
    )
  }
}

export default Home;