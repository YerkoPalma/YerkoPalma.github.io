var Vue = require('vue');
var NavLink = require('./components/navlink.vue');
var Nav = require('./components/navigation.vue');
var Cover = require('./components/cover.vue');
var Services = require('./components/services.vue');
var Skills = require('./components/skills.vue');
var Projects = require('./components/project.vue');
var Experience = require('./components/experience.vue');
var Contact = require('./components/contact.vue');

new Vue({
  el: 'body',
  components: {
    navigation: Nav,
    cover: Cover,
    services: Services,
    skills: Skills,
    projects: Projects,
    experience: Experience,
    contact: Contact,
    navLink: NavLink
  }
});
