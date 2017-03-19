var React = require('react')

var router = require('../router.js')


module.exports = function App (props) {
  var name = props.name
  var currentPath = props.path
  var MainComponent = router(currentPath)

  return (
    <div>

      <div id='navbar'>
        <a href='/'>HOME</a> |
        <a href='/blog'>BLOG</a> |
        <a href='/gallery'>GALLERY</a>
      </div>

      {MainComponent(props)}
    </div>
  )
}
