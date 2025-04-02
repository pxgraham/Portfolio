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
                                <h1 className="display-4 text-silt text-center">LMNT</h1>
                                <p className="lead">
                                    A multiplayer online survival arena game
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Express</span>                                                                                         
                                <span class="badge badge-danger mr-1 ml-1">Socket io</span>                                
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="https://github.com/pxgraham/lmnt" role="button">Learn more</a>
                            </div>

                            <br />

                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Element-Battle-Arena </h1>
                                <p className="lead">
                                    An elemental online 1v1 battle
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Express</span>                                                                                         
                                <span class="badge badge-danger mr-1 ml-1">Socket io</span>                                
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="https://github.com/pxgraham/Element-Battle-Arena" role="button">Learn more</a>
                            </div>

                            <br />

                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Chat-Room</h1>
                                <p className="lead">
                                    A Server set up to match pairs of people in a chatroom
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Express</span>                                                                                         
                                <span class="badge badge-danger mr-1 ml-1">Socket io</span>                                
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="https://github.com/pxgraham/Chat-Room" role="button">Learn more</a>
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
                                <h1 className="display-4 text-silt text-center">Movie-Concert-Lookup</h1>
                                <p className="lead">
                                    Use the Command line to search bands, movies, and songs!
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Liri</span>                                                                                                                         
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="https://github.com/pxgraham/Movie-Concert-Lookup" role="button">Learn more</a>
                            </div>

                            <br />

                            <div className="jumbotron bg-fade text-light border border-primary">
                                <h1 className="display-4 text-silt text-center">Scraper</h1>
                                <p className="lead">
                                    Fetches HTML from the EchoJS website
                                </p>
                                <span>Created With </span>
                                <span class="badge badge-primary mr-1 ml-1">NodeJS</span> 
                                <span class="badge badge-success mr-1 ml-1">Express</span> 
                                <span class="badge badge-info mr-1 ml-1">Mongoose</span>
                                <span class="badge badge-warning mr-1 ml-1">Axios</span> 
                                <span class="badge badge-success mr-1 ml-1">Cheerio</span>                                 
                                <br />
                                <br />
                                <a className="btn btn-primary bg-fade" href="https://github.com/pxgraham/Scraper" role="button">Learn more</a>
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
                                <a className="btn btn-primary bg-fade" href="https://github.com/pxgraham/camp-link-react" role="button">Learn more</a>
                            </div>

                        </div>                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;