var Vue = require('vue');
var NavLink = require('./components/navlink.vue');
var Service = require('./components/service.vue');
var Nav = require('./components/navigation.vue');
var Cover = require('./components/cover.vue');
var Services = require('./components/services.vue');
var Skills = require('./components/skills.vue');
var Projects = require('./components/projects.vue');
var Experience = require('./components/experience.vue');
var Contact = require('./components/contact.vue');

Vue.config.debug = true;

new Vue({
  el: 'body',
  components: {
    navigation: Nav,
    cover: Cover,
    services: Services,
    service: Service,
    skills: Skills,
    projects: Projects,
    experience: Experience,
    contact: Contact,
    navLink: NavLink
  }
});
