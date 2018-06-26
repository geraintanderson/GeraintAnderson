(function () {
  window.onload = function () {
    console.log('---- loaded')
    demo2()
    demo3()
    demo4()
    demo5()
  }
})();

// There is no JS required for demo 1

const demo2 = function () {
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

const demo3 = function () {
  const tabComponent = document.getElementById('tab-component-three')
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

const demo4 = function () {
  const tabComponent = document.getElementById('tab-component-four')
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

const demo5 = function () {
  const tabComponent = document.getElementById('tab-component-five')
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
