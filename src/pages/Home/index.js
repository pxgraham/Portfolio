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

              <div className="col-4">
                <h2>Full Stack Developer</h2>
                <p>Building high quality responsive websites and providing an exceptional user experience.</p>                
              </div>  

              <div className="col-4">
                <div className="gif-container">
                  
                </div>
              </div>

              <div className="col-4 text-right">
                <p>Producing the highest quality</p>
                <div>
                  <h2>Games, Tools, <span className="text-light">and</span> Projects</h2>
                </div>
                <br />
                <a href="#/Projects" className="btn btn-primary">View All</a>
              </div>

            </div>
            <br /><br /><br /><br />
            <div className="row bg-fade">
              <div className="col">
                <h1>Hello 👋</h1>
                <h2> My name is Peyton.</h2>
                <p>
                  I’m a developer passionate about harnessing technology to build innovative, impactful systems. 
                  What started as a hobby—coding websites during downtime at work—evolved into a pursuit of mastery. 
                  From automating my job with iMacros and HTML to diving deep into web development, I’ve embraced the challenge of continuous learning to create solutions that make a difference.


                  {/* <a href="/#/blog">read more</a> */}
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
                <a href="mailto:pxgraham@gmail.com">pxgraham@gmail.com</a>
              </div>

            </div>
          </div>    
          <Footer />
        </div>
    )
  }
}

export default Home;
