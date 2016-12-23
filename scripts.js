class UIController {
  constructor(componentsToRegister) {
    //this.components = {}
    this.components = componentsToRegister; // register all components to controller
    this.navSelect = 'project'
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
    this.visible = true; // ***** set to false in production
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
const pacman = new ContentComponent('project-pacman');
const asteroid = new ContentComponent('project-asteroid-tracker')
const blink = new ContentComponent('project-blink')
const twitterSearch = new ContentComponent('project-twitterSearch')
const aboutMain = new ContentComponent('about-main')
const aboutAside = new ContentComponent('about-aside')

const about = new NavComponent('nav-about')
const projects = new NavComponent('nav-project')
const contact = new NavComponent('nav-contact')

let components = {
  content: {
    project: [pacman, asteroid, blink, twitterSearch],
    about: [aboutMain, aboutAside],
    contact: []
  },
  nav: [about, projects, contact]
}
const controller = new UIController(components)
$(() => {
  $('.title-fade').removeClass('title-fade');
  $('.navBox').removeClass('navBox-fade');
})
