import React, {Component} from 'react';
import './index.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Resume from '../../files/resume.pdf';


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
                <p>Need a copy of my resume? Download one below.</p>
                {/* <form method="get" action={Resume}> */}
                  <button type="submit" className="btn btn-dark text-light" onClick={() => {window.open(Resume)}}>
                    Resume&nbsp;&nbsp;<i className="fas fa-download"></i>
                  </button>     
                {/* </form> */}
                
              </div>  

              <div className="col-4">
                <div className="gif-container">
                  <div className="gif"></div>
                </div>
              </div>

              <div className="col-4 text-right">
                <p>Producing the highest quality</p>
                <div className="text-primary">
                  <h2><a href="/">Games</a>, Tools, <span className="text-light">and</span> Projects</h2>
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
                  I am a Developer exploring the world of technology in an attempt to create new, exciting, and impactful systems.  
                  I started all of this from scratch. Originally I was coding websites in my free time at work because I thought it was fun.
                  Eventually I started learning different uses of web development. I learned iMacro coding which I integrated with HTML pages 
                  to nearly entirely automate my current job(at the time). I found that the impact on myself and my work performance was worth it 
                  to continue the climb of this mountain of education.
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
                <br />
                <a href="tel:9283586658">928.358.6658</a>
              </div>

            </div>
          </div>    
          <Footer />
        </div>
    )
  }
}

export default Home;