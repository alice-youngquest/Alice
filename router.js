var Router = require('sheet-router')

var Home = require('./components/home')
var Gallery = require('./components/gallery')
var Blog = require('./components/blog')
var App = require('./components/app')




var router = Router({ default: '/' }, [
  ['/', () => Home ],
  ['/gallery', () => Gallery],
  ['/blog', () => Blog]
])

module.exports = router
