/* global describe, it, expect */

var Vue = require('vue')
var contact = require('../../src/components/contact.vue')

describe('Hello.vue', function () {
  it('should render correct contents', function () {
    const vm = new Vue({
      template: '<div><contact></contact></div>',
      components: { contact: contact }
    }).$mount()
    expect(vm.$el.querySelector('#contact h1').textContent).toBe('Contacto')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
