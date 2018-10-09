window.addEventListener('load', function () {
  // Style the navbar according to the current route
  parts = window.location.pathname.split('/')
  var page = parts[parts.length - 1]
  // Remove the file extension
  var elemId = 'nav-' + page.split('.')[0]

  var elem = document.getElementById(elemId)
  if (elem) {
    elem.classList.add('selected')
  }

  // Add functionality to the social buttons
  const twitterButtons = document.getElementsByClassName('twitter-button')
  for (let i = 0; i < twitterButtons.length; i++) {
    twitterButtons[i].href='https://twitter.com/share?url=' + escape(window.location.href) + '&text=%40Geraint_TJ_A'
  }
  const linkedinButtons = document.getElementsByClassName('linkedin-button')
  for (let i = 0; i < linkedinButtons.length; i++) {
    linkedinButtons[i].href='https://www.linkedin.com/shareArticle?url=' + escape(window.location.href) + '&text=%40Geraint_TJ_A'
  }
})
