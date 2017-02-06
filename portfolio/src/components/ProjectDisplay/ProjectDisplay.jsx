import React from 'react'
import './ProjectDisplay.css'
import TechList from './../TechList/TechList.jsx'
import pacmanImg1 from './../../assets/pacman.png'
import pacmanImg2 from './../../assets/pacman2.png'
import asteroidImg1 from './../../assets/asteroid1.png'
import asteroidImg2 from './../../assets/asteroid2.png'
import blink1 from './../../assets/blink1.png'
import blink2 from './../../assets/blink2.png'
import twitter1 from './../../assets/twitter1.png'
import twitter2 from './../../assets/twitter2.png'

const content = {
  pacman: {
    name: 'Pacman',
    img: [pacmanImg1, pacmanImg2],
    headline: 'Pacman clone. Eat all the dots to win and avoid the ghosts!',
    body: `A Pacman-like game made with Javascript, HTML and CSS. Very rudimentary AI and win/loss conditions. Collision detection is buggy due to sprites swapping
    places on the grid without occupying the same space at once.  Still pretty fun to play though! Use the arrow keys to move Pacman.`,
    links: ['https://github.com/mattBedell/Pacman', 'https://mattbedell.github.io/Pacman/'],
    tech: ['Javascript', 'HTML', 'CSS'],
    font: "'Press Start 2P', cursive"
  },
  asteroid: {
    name: 'Asteroid Tracker',
    img: [asteroidImg1, asteroidImg2],
    headline: 'Displays the relative distances of Near Earth Asteroids for today\'s current NEOs and for the months of 2016.',
    body: 'Utilizes Nasa\'s NEO API to collect data.  Uses an Express server and a postgreSQL database to store and serve historical data to a React front-end. All visual displays and animations done in HTML and CSS',
    links: ['https://github.com/mattBedell/Asteroid-Tracker', 'https://asteroid-tracker.herokuapp.com/'],
    tech: ['React', 'Node', 'Express', 'postgreSQL', 'Javascript', 'HTML', 'CSS'],
    font: "'Orbitron', sans-serif"
  },
  blink: {
    name: 'Blink',
    img: [blink1, blink2],
    headline: 'Search for places and attractions and save them to your bucket list.',
    body: `A collaborative group project. Utilizes Google's places API to allow the user to search for attractions.  Features Google User Auth to allow the user
    to sign in with their Gmail account. Express server and postgreSQL to manage user accounts and data, served to a React front-end.`,
    links: ['https://github.com/mattBedell/Blink', 'https://wid-blink.herokuapp.com/'],
    tech: ['React', 'Node', 'Express', 'postgreSQL', 'Javascript', 'HTML', 'CSS'],
    font: "'Baloo Bhaina', cursive"
  },
  twitter: {
    name: 'Twitter Search',
    img: [twitter1, twitter2],
    headline: 'Search for tweets and analyze them for emotional content, sentiment, and key concepts.',
    body: `Utilizes Twitter's API and Watson's text analysis API. Allows the user to do a general search of all tweets, and to choose which tweets to analyze.
    The user can then save tweets to their account. Express server and EJS for server-side rendering. PostgreSQL for managing user profiles and saved data.`,
    links: ['https://github.com/mattBedell/TwitterSearch', 'https://ts-wdi.herokuapp.com/'],
    tech: ['Node', 'Express', 'postgreSQL', 'Javascript', 'HTML', 'CSS'],
    font: "'Bitter', serif"
  }
}
function generateProjImgs(props) {
  return(content[props.selected].img.map((imgSrc, i) => {
    return (<img className="header-img" src={imgSrc} alt={props.selected} key={`projectImg${i}`}></img>)
  })
  )
}
const ProjectDisplay = (props) =>
  <div className="project-display">
    <div className="projImgContainer">
      {generateProjImgs(props)}
    </div>
    <div className="project-header">
      <h3 style={{'fontFamily': content[props.selected].font}}>{content[props.selected].name}</h3>
      <div className="linkBar">
        <div className="linkContainer">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"/></svg>
          <a href={content[props.selected].links[0]} target="_blank">Github</a>
        </div>
        <div className="linkContainer">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M13.74 0H2.26C1.46 0 .82.64.82 1.44v13.12c0 .8.64 1.44 1.44 1.44h11.48c.8 0 1.44-.64 1.44-1.44V1.44c0-.8-.64-1.44-1.44-1.44zm.64 14.56c0 .36-.28.64-.64.64H2.26c-.36 0-.64-.28-.64-.64V1.44c0-.36.28-.64.64-.64h11.48c.36 0 .64.28.64.64v13.12zm-9.96-.96l1.8-1.6-1.8-1.6v3.2zm6.48-6.48c-.32-.32-.92-.72-1.92-.72-1.08 0-2.2.28-3 .56V2.4h-1.6v6.92L5.5 8.8s1.84-.84 3.44-.84c.8 0 1 .44 1 .84v4.8h1.6V8.8c.04-.12.04-1-.64-1.68zM8.78 5h1.6c.72-.84 1.08-1.68 1.2-2.6h-1.6c-.16.92-.56 1.76-1.2 2.6z"/></svg>
          <a href={content[props.selected].links[1]} target="_blank">Heroku</a>

        </div>
      </div>
    </div>
    <div className="project-content">
      {content[props.selected].headline}
      <br></br>
      <br></br>
      {content[props.selected].body}
    </div>
    <div className="tech-container">
      <TechList
        techList={content[props.selected].tech}
      />
    </div>
  </div>

export default ProjectDisplay
