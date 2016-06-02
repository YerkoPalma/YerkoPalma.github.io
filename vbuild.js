import path from 'path'

const eslint = {
  globals: [
    'window',
    'location',
    'localStorage',
    'hljs'
  ]
}

export default {
  title: 'Yerko Palma',
  port: 3888,
  template: './src/template.hbs',
  eslint,
  postcss: [require('postcss-import'), require('postcss-simple-vars')],
  webpack(config, options) {
    setAlias(config)
  }
}

function cwd(...args) {
  return path.join(process.cwd(), ...args)
}

function setAlias(config) {
  config.resolve.alias = {
    components: cwd('src/components'),
    utils: cwd('src/utils'),
    helpers: cwd('src/helpers')
  }
}
