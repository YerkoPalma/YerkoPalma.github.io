import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

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
  postcss: ['postcss-import'],
  webpack(config, options) {
    config.resolve.devtool = 'source-map'
    addLess(config)
    config.resolve.plugins = [ new ExtractTextPlugin('styles.css') ]
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

function addLess(config) {
  config.resolve.module = {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'less?sourceMap'
        )
      }
    ]
  }
}
