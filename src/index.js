import Vue from 'vue'
import app from './app'

Vue.config.debug = true

new Vue({
  el: 'body',
  components: {
    app
  }
})
