// (function () {
//   // Set the active class on the navbar
//   console.log('--- test')
//
//   console.log(window.location.pathname)
//
//   document.onload()
// })()
window.addEventListener('load', function () {
  console.log(window.location.pathname)
  parts = window.location.pathname.split('/')
  var page = parts[parts.length - 1]
  // Remove the file extension
  var elemId = 'nav-' + page.split('.')[0]
  console.log(elemId)

  document.getElementById(elemId).classList.add('selected')
})
