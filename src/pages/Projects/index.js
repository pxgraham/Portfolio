import React, { Component } from 'react';
import './index.css';
import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';


class Projects extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <br />
                <div className="container bg-fade">
                    <div className="row">
                        <div className="col text-left text-light">
                            <h1 className="text-silt bg-fade">Projects</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Sleysin</h1>
                                <p className="lead">
                                    Sleysin Games is a brand I created to house my game that I've been developing.
                                    The game is a real time multiplayer-online 1v1 shooter. The game itself revovles around the HTML Canvas.
                                    Using socket-io for real time communication between the client and server, this game is a true test of
                                    skill and willpower.
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Express</span> 
                                <span class="badge badge-info mr-1 ml-1">Socket-io</span>
                                <span class="badge badge-danger mr-1 ml-1">HTML</span>
                                <span class="badge badge-secondary mr-1 ml-1">CSS</span>
                                <span class="badge badge-warning mr-1 ml-1">Vanilla JS</span>
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="https://sleysin.com" role="button">Learn more</a>
                            </div>

                            <br />

                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Hidden Blue Shop</h1>
                                <p className="lead">
                                    Hidden Blue Shop was created as a project of mine to build a website with a custom payment processor from scratch.
                                    Everything on the website has $0.00 upkeep aside from the cost of the domain name. I integrated Stripe's payment processor into the website
                                    due to the many laws involved with processing credit cards. The website is turned on test-mode, so don't worry about it actually taking your money.                                    
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Express</span> 
                                <span class="badge badge-info mr-1 ml-1">React</span>
                                <span class="badge badge-danger mr-1 ml-1">HTML</span>
                                <span class="badge badge-secondary mr-1 ml-1">CSS</span>
                                <span class="badge badge-warning mr-1 ml-1">Stripe API</span>
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="https://hiddenblueinside.com" role="button">Learn more</a>
                            </div>

                            <br />

                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Autoscraper</h1>
                                <p className="lead">
                                    Autoscraper is a side project I built to scrape relevent news stories from the web. Currently it only scrapes stories from Reddit's /r/webdev page. 
                                    The scraped Articles get sent to a Mongo database which then render on the page. 
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Express</span> 
                                <span class="badge badge-info mr-1 ml-1">React</span>
                                <span class="badge badge-danger mr-1 ml-1">HTML</span>
                                <span class="badge badge-secondary mr-1 ml-1">CSS</span>
                                <span class="badge badge-warning mr-1 ml-1">Mongo</span>
                                <span class="badge badge-secondary mr-1 ml-1">Axios</span>
                                <span class="badge badge-secondary mr-1 ml-1">Cheerio</span>
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="http://px-autoscraper.herokuapp.com" role="button">Learn more</a>
                            </div>

                            <br />

                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Friend Finder</h1>
                                <p className="lead">
                                    Friend Finder is a survey that once completed will compare your results with everyone else who completed the survey.
                                    When you finish, you will be matched with the person whose survey answers matched yours the closest. 
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Express</span> 
                                <span class="badge badge-danger mr-1 ml-1">HTML</span>
                                <span class="badge badge-secondary mr-1 ml-1">CSS</span>
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="http://px-friend-finder.herokuapp.com/" role="button">Learn more</a>
                            </div>

                            <br />

                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Event Bites</h1>
                                <p className="lead">
                                    Event Bites is a one stop shop for your entertainment and hunger needs. This application allows you to search for events and find restraunts close by the events
                                    for a higher method of convenience. 
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Express</span> 
                                <span class="badge badge-danger mr-1 ml-1">HTML</span>
                                <span class="badge badge-secondary mr-1 ml-1">CSS</span>
                                <span class="badge badge-warning mr-1 ml-1">Firebase</span>
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="https://adamdrag.github.io/EventBites/" role="button">Learn more</a>
                            </div>

                            <br />
                            
                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Giphy Search</h1>
                                <p className="lead">
                                    A website that allows you to dynamically create buttons that generate gifs, pulled straight from giphy. 
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-danger mr-1 ml-1">HTML</span>
                                <span class="badge badge-secondary mr-1 ml-1">CSS</span>
                                <span class="badge badge-warning mr-1 ml-1">Giphy API</span>
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="https://pxgraham.github.io/GiphySearch/" role="button">Learn more</a>
                            </div>

                            <br />
                            
                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Trivia Game</h1>
                                <p className="lead">
                                    A timed Trivia game. Answer all of the questions as best as you can before it's too late!
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-danger mr-1 ml-1">HTML</span>
                                <span class="badge badge-secondary mr-1 ml-1">CSS</span>                                
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="https://pxgraham.github.io/TriviaGame" role="button">Learn more</a>
                            </div>
                            <br />
                            
                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Camp Link</h1>
                                <p className="lead">
                                    A social media website built for coding bootcamp graduates as a place to connect and further our developing.
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Express</span> 
                                <span class="badge badge-info mr-1 ml-1">Handlebars</span>
                                <span class="badge badge-success mr-1 ml-1">Sequelize</span> 
                                <span class="badge badge-success mr-1 ml-1">MySQL</span> 
                                <span class="badge badge-danger mr-1 ml-1">HTML</span>
                                <span class="badge badge-secondary mr-1 ml-1">CSS</span>
                                <span class="badge badge-warning mr-1 ml-1">Vanilla JS</span>                                
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="http://camplink.herokuapp.com" role="button">Learn more</a>
                            </div>

                        </div>                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;