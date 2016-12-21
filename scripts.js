class UIController {
  constructor(componentsToRegister) {
    this.components = {}
    this.registerComponents(componentsToRegister)
    this.registerMouseInOutHandlers(this.components)
  }
  registerComponents(componentsObj) {
    // save project components
    this.components.projects = componentsObj.projects
  }
  registerMouseInOutHandlers(components) {
    for(let key in components) {
      console.log(key)
    }
  }
}
class ProjectComponent {
  constructor(elmnt) {
    this.type = 'project'
    this.elmnt = $(`.${elmnt}`);
    this.visible = true; // ***** set to false in production
  }
  toggleFade() {
    this.elmnt.toggleClass('project-fade')
  }
}
const projectPacman = new ProjectComponent('project-pacman');
const projectAsteroid = new ProjectComponent('project-asteroid-tracker')
let components = {
  projects: {
    projectPacman,
    projectAsteroid
  }
}
const controller = new UIController(components)
$(() => {
  $('.title-fade').removeClass('title-fade');
  $('.navBox').removeClass('navBox-fade');
})
