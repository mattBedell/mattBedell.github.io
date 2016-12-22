class UIController {
  constructor(componentsToRegister) {
    //this.components = {}
    this.registerComponents(componentsToRegister)
    this.navSelect = 'project'
    this.registerNavClickEvents()
  }
  // register all components to controller
  registerComponents(componentsObj) {
    // for(let componentType in componentsObj) {
    //   this.components[componentType] = Object.assign({}, componentsObj[componentType])
    // }
    this.components = componentsObj;

  }
  // Click handler, sets currently selected navButton, hides all other content
  focusSelect(navComponent) {
    let fadeCounter = 0;
    this.components.content.forEach((item) => {
      if(item.type === navComponent.name) {
        item.fadeIn(fadeCounter/10);
        fadeCounter++;
      } else if(item.type === this.navSelect) {
        item.fadeOut(0);
      }
    })
    //this.components[]
    // Inform controller of currently clicked navButton
    // For all other content, hide it
    // for(let content in this.components[navSelect])
    //   this.components[navSelect]
    this.navSelect = navComponent.name
    console.log(this.navSelect);
  }
  registerNavClickEvents() {
    // for(let navItem in this.components.nav) {
    //   this.components.nav[navItem].elmnt.on('click', () => {
    //     this.focusSelect(this.components.nav[navItem])
    //     console.log(this.navSelect);
    //   })
    // }
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
  fadeIn(delay) {
    this.elmnt.css('transition-delay', `${delay}s`)
    this.elmnt.removeClass('project-fade')
    console.log('fade in');
  }
  fadeOut(delay) {
    this.elmnt.css('transition-delay', `${delay}s`)
    this.elmnt.addClass('project-fade')
    console.log('fade out');
  }
  toggleFade(delay) {
    this.elmnt.css('transition-delay', `${delay}s`)
    this.elmnt.toggleClass('project-fade')
  }
}
const pacman = new Component('project-pacman');
const asteroid = new Component('project-asteroid-tracker')
const blink = new Component('project-blink')
const twitterSearch = new Component('project-twitterSearch')
const about = new Component('nav-about')
const projects = new Component('nav-project')
const contact = new Component('nav-contact')

let components = {
  content: [pacman, asteroid, blink, twitterSearch],
  nav: [about, projects, contact]
}
// let components = {
//   projects: {
//     asteroid,
//     pacman
//   },
//   nav: {
//     about,
//     projects,
//     contact
//   }
// }
const controller = new UIController(components)
$(() => {
  $('.title-fade').removeClass('title-fade');
  $('.navBox').removeClass('navBox-fade');
})
