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
    this.components.content.forEach((item) => {
      if(item.type === navComponent.name) {
        fadeCounter++;
        item.fadeIn(1, fadeCounter/20);
      } else if(item.type === this.navSelect) {
        item.fadeOut(.5, 0);
      }
    })
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
class Component {
  constructor(elmnt) {
    this.name = elmnt.split('-')[1]
    this.type = elmnt.split('-')[0]
    this.elmnt = $(`.${elmnt}`);
    this.visible = true; // ***** set to false in production
  }
  fadeIn(speed, delay) {
    this.elmnt.css({'transition': `${speed}s ${delay}s`, 'opacity': 1})

    //this.elmnt.removeClass('project-fade')
  }
  fadeOut(speed, delay) {
    this.elmnt.css({'transition': `${speed}s ${delay}s`,'opacity': 0})
    //this.elmnt.addClass('project-fade')
  }
}
const pacman = new Component('project-pacman');
const asteroid = new Component('project-asteroid-tracker')
const blink = new Component('project-blink')
const twitterSearch = new Component('project-twitterSearch')
const about = new Component('nav-about')
const projects = new Component('nav-project')
const contact = new Component('nav-contact')
const aboutMain = new Component('about-main')
const aboutAside = new Component('about-aside')

let components = {
  content: [pacman, asteroid, blink, twitterSearch, aboutMain, aboutAside],
  nav: [about, projects, contact]
}
const controller = new UIController(components)
$(() => {
  $('.title-fade').removeClass('title-fade');
  $('.navBox').removeClass('navBox-fade');
})
