import React from 'react';
import './../App.css';

const project = [
    {
      name: 'Sleysin',
      url: 'http://sleysin.com',
      type: 'game',
    },
    {
      name: 'Event Bites',
      url: 'https://adamdrag.github.io/EventBites/',
      type: 'utility',
    },
    {
      name: 'Gif Search',
      url: 'https://pxgraham.github.io/GiphySearch/',
      type: 'utility',
    },
    {
      name: 'Train Scheduler',
      url: 'https://pxgraham.github.io/Train-Scheduler/',
      type: 'utility',
    },
    {
      name: 'Crystal Collector',
      url: 'https://pxgraham.github.io/unit-4-game/',
      type: 'game',
    },
    {
      name: 'Hangman',
      url: 'https://pxgraham.github.io/Word-Guess-Game/',
      type: 'game',
    },
    {
      name: 'Camp Link',
      url: 'https://camplink.herokuapp.com/',
      type: 'utility',
    },
    {
      name: 'Trivia Game',
      url: 'https://pxgraham.github.io/TriviaGame/',
      type: 'game',
    },
    {
      name: 'Friend Finder',
      url: 'https://px-friend-finder.herokuapp.com/',
      type: 'utility',
    },
    {
      name: 'Web Article Scraper',
      url: 'https://scraper-hw-01.herokuapp.com/',
      type: 'utility',
    }
  ];

  function filter(by) {

  }

function Projects() {
  return (
    <div>
        <div className="project-anchor" id="projects"></div>
        <div className="project-container" id="project-container">
          {/* <div className="project-header">
            <span>All</span> | <span>Games</span> | <span>Utilities</span>
          </div> */}
            {
                project.map((p) => {
                return (
                    <div className="project">
                          <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-a">{p.name}</a>
                    </div>
                    ) 
                })
            }
        </div>
    </div>
  );
}

export default Projects;
