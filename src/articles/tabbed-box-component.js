// There is no JS required for demo 1

// Demo 2
(function () {
  window.onload = function () {

    const tabComponent = document.getElementById('tab-component-two')
    const tabItems = Array.from(tabComponent.children)

    const clearSelectedClasses = function () {
      tabItems.forEach(elem => {
        elem.className = elem.className.replace(/\bselected\b/g, '')
      })
    }

    tabItems
    .forEach(elem => elem.onclick = function () {
      clearSelectedClasses()
      elem.classList.add('selected')
    })

  }
})()
