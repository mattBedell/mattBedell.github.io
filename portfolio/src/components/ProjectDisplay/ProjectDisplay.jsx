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
    body: '',
    links: [],
    tech: ['Javascript', 'HTML', 'CSS']
  },
  asteroid: {
    name: 'Asteroid Tracker',
    img: [asteroidImg1, asteroidImg2],
    headline: 'Displays the relative distances of Near Earth Asteroids in of the current day and in 2016.',
    body: 'Utilizes Nasa\'s NEO API to collect data.  Uses an Express server and a postgreSQL database to store and serve historical data to a React front-end.',
    links: [],
    tech: ['React', 'Node', 'Express', 'postgreSQL', 'Javascript', 'HTML', 'CSS']
  },
  blink: {
    name: 'Blink',
    img: [blink1, blink2],
    headline: 'A collaborative group project.  Search for places and attractions and save them to your bucket list.',
    body: 'Utilizes Google\'s places API to allow the user to search for attractions.  Features Google User Auth to allow the user to sign in with their Gmail account. Express server and postgreSQL to manage user accounts and data, served to a React front-end.',
    links: [],
    tech: ['React', 'Node', 'Express', 'postgreSQL', 'Javascript', 'HTML', 'CSS']
  },
  twitter: {
    name: 'Twitter Search',
    img: [twitter1, twitter2],
    headline: 'Search for tweets and analyze them for emotional content, sentiment, and key concepts.',
    body: 'Utilizes Twitter\'s API and Watson\'s text analysis API. Allows the user to do a general search of all tweets, and to choose which tweets to analyze. The user can then save tweets to their account. Express server and EJS for server-side rendering. PostgreSQL for managing user profiles and saved data.',
    links: [],
    tech: ['Node', 'Express', 'postgreSQL', 'Javascript', 'HTML', 'CSS']
  }
}
function generateProjImgs(props) {
  return(content[props.selected].img.map((imgSrc, i) => {
    return (<img className="header-img" src={imgSrc} alt={props.selected} key={`projectImg${i}`} alt={props.selected}></img>)
  })
  )
}
const ProjectDisplay = (props) =>
  <div className="project-display">
    <div className="projImgContainer">
      {generateProjImgs(props)}
    </div>
    <div className="project-header">
      <h3>{content[props.selected].name}</h3>
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
