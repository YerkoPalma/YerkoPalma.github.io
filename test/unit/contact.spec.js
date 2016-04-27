/* global describe, it, expect, beforeAll, afterAll */

var Vue = require('vue')
var contact = require('../../src/components/contact.vue')

describe('contact.vue', function () {
  var vm = {}

  beforeAll(function () {
    vm = new Vue({
      template: '<div><contact></contact></div>',
      components: { contact: contact }
    }).$mount()
  })

  afterAll(function () {
    vm.$destroy(true)
  })

  it('should render correct contents', function () {
    expect(vm.$el.querySelector('#contact h1').textContent).toBe('Contacto')
    expect(vm.$el.querySelectorAll('form').length).toBe(1)
    expect(vm.$el.querySelector('button[type="submit"]').textContent).toBe('Enviar mensaje')
  })

  it('should have all inputs with name', function () {
    expect(vm.$el.querySelectorAll('input, textarea').length).toBe(4)
    var inputs = vm.$el.querySelectorAll('input, textarea')
    for (var i = 0; i < inputs.length; i++) {
      expect(inputs[i].getAttribute('name')).toBeTruthy()
    }
  })

  it('should make an ajax call when form submitted')
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
