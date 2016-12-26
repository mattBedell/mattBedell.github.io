class UIController {
  constructor(componentsToRegister) {
    //this.components = {}
    this.components = componentsToRegister; // register all components to controller
    this.navSelect = 'about'
    this.registerNavClickEvents()
  }
  // Updates controller to currently selected navButton, hides all other content
  focusSelect(navComponent) {
    let fadeCounter = 5;
    // hide curently selected content
    this.components.content[this.navSelect].forEach((item) => {
      item.fadeOut(.5, 0)
    })
    // reveal newly selected content
    this.components.content[navComponent.name].forEach((item) => {
      fadeCounter++
      item.fadeIn(1, fadeCounter/20)
    })
    // inform controller of currently selected content
    this.navSelect = navComponent.name
  }
  // Add click events to nav buttons
  registerNavClickEvents() {
    this.components.nav.forEach((button) => {
      button.elmnt.on('click', () => {
        this.focusSelect(button)
      })
    })
  }
}
class ContentComponent {
  constructor(elmnt) {
    this.name = elmnt.split('-')[1]
    this.type = elmnt.split('-')[0]
    this.elmnt = $(`.${elmnt}`);
    this.visible = false; // ***** set to false in production
    this.elmnt.on('transitionend', () => {
      if(!this.visible) {
        this.elmnt.css('visibility', 'hidden')
      }
    })
  }
  fadeIn(speed, delay) {
    this.visible = true;
    this.elmnt.css({'visibility': 'visible', 'transition': `${speed}s ${delay}s`, 'opacity': 1})
  }
  fadeOut(speed, delay) {
    this.visible = false;
    this.elmnt.css({'transition': `${speed}s ${delay}s`,'opacity': 0})
  }
}
class NavComponent {
  constructor(elmnt) {
    this.name = elmnt.split('-')[1]
    this.type = elmnt.split('-')[0]
    this.elmnt = $(`.${elmnt}`);
  }
}
// init project components
const pacman = new ContentComponent('project-pacman');
const asteroid = new ContentComponent('project-asteroid-tracker')
const blink = new ContentComponent('project-blink')
const twitterSearch = new ContentComponent('project-twitterSearch')

// init about components
const aboutHeader = new ContentComponent('about-header')
const aboutMe = new ContentComponent('about-me')
const aboutSkills = new ContentComponent('about-skills')
const aboutAside = new ContentComponent('about-aside')

// init nav components
const about = new NavComponent('nav-about')
const projects = new NavComponent('nav-project')
const contact = new NavComponent('nav-contact')

let components = {
  content: {
    project: [pacman, asteroid, blink, twitterSearch],
    about: [aboutHeader, aboutMe, aboutSkills, aboutAside],
    contact: []
  },
  nav: [about, projects, contact]
}
const controller = new UIController(components)
$(() => {
  // wait for twitter iFrame to load and resize to parent element's height
  let checkTwitterLoadAndResize = () => {
    if($('.about-aside').children().first().is('iframe')) {
      $('.about-aside').children().first().css('height', '60vh');
    } else {
      window.setTimeout(() => {
        checkTwitterLoadAndResize()
      }, 500)
    }
  }
  checkTwitterLoadAndResize()
})
