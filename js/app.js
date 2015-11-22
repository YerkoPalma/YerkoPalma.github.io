var Vue = require('vue');
var Nav = require('./../components/navigation.vue');
var Cover = require('./../components/cover.vue');
var Services = require('./../components/services.vue');

new Vue({
  el: 'body',
  components: {
    navigation: Nav,
    cover: Cover,
    services: Services
  }
})
