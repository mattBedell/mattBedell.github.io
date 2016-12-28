import React from 'react'
import './ProjectDisplay.css'
import pacmanImg from './../../assets/pacman.png'
import asteroidImg from './../../assets/asteroid-tracker.png'
import blinkImg from './../../assets/blink.png'
import twitterImg from './../../assets/twitterSearch.png'

const content = {
  pacman: {
    img: pacmanImg,
    headline: 'Pacman clone. Eat all the dots to win and avoid the ghosts!',
    body: '',
    links: [],
    tech: []
  },
  asteroid: {
    img: asteroidImg,
    headline: 'Displays the relative distances of Near Earth Asteroids in of the current day and in 2016.',
    body: 'Utilizes Nasa\'s NEO API to collect data.  Uses an Express server and a postgreSQL database to store and serve historical data to a React front-end.',
    links: [],
    tech: []
  },
  blink: {
    img: blinkImg,
    headline: 'A collaborative group project.  Search for places and attractions and save them to your bucket list.',
    body: 'Utilizes Google\'s places API to allow the user to search for attractions.  Features Google User Auth to allow the user to sign in with their Gmail account. Express server and postgreSQL to manage user accounts and data, served to a React front-end.',
    links: [],
    tech: []
  },
  twitter: {
    img: twitterImg,
    headline: 'Search for tweets and analyze them for emotional content, sentiment, and key concepts.',
    body: 'Utilizes Twitter\'s API and Watson\'s text analysis API. Allows the user to do a general search of all tweets, and to choose which tweets to analyze. The user can then save tweets to their account. Express server and EJS for server-side rendering. PostgreSQL for managing user profiles and saved data.',
    links: [],
    tech: []
  }
}
const ProjectDisplay = (props) =>
  <div className="project-display">
    <img className="header-img" src={content[props.selected].img}alt={props.selected}></img>
    <div className="project-content">
      {content[props.selected].headline}
      <br></br>
      <br></br>
      {content[props.selected].body}

    </div>
  </div>

export default ProjectDisplay
