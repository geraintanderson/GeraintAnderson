// Run as follows
//  node build.js
const fs = require('fs').promises
const path = require('path')
const handlebars = require('handlebars')
const _ = require('underscore')
const buildDir = 'public_html'
const srcDir = 'src'
const nodeModulesDir = 'node_modules'

handlebars.registerHelper('scriptTag', function (scriptObj) {
  let scriptTag = '<script src="'

  if (scriptObj.copy) {
    // If the file is copied, it is put into the same directory as the HTML
    scriptTag += path.basename(scriptObj.src)
  } else {
    // If the file does not need copying, it is because it is in the front end depenencies directory
    scriptTag += '../scripts/' + path.basename(scriptObj.src)
  }

  if (scriptObj.type) {
    scriptTag += '" type="' + scriptObj.type
  }
  scriptTag += '"></script>'

  return new handlebars.SafeString(scriptTag)
})

function buildPage (config) {
  // Config: {
  //  destDir: string,
  //  styles: [string],
  //  scripts: [string],
  //  html: string,
  //  outFile: string
  // }

  function getNestingPrefix (homeDir, thisDir) {
    const relativePath = path.relative(homeDir, thisDir)
    const nestingLayers = relativePath.split(path.sep).filter(path => path !== '').map(() => '..').join(path.sep)
    const nestingPrefix = nestingLayers ? nestingLayers + '/' : ''
    return nestingPrefix
  }

  return new Promise ((resolve, reject) => {
    Promise.all(
      config.styles.map(file => {
        fs.copyFile(file, path.join(config.destDir, path.basename(file)))
      })
    )
    .then(() => Promise.all(
      config.scripts.map(script => {
        if (script.copy) {
          fs.copyFile(script.src, path.join(config.destDir, path.basename(script.src)))
        }
      })
    ))
    .then(() => Promise.all([
      fs.readFile(path.join(srcDir, 'page-frame.html'), 'utf-8'),
      fs.readFile(config.html, 'utf-8')
    ]))
    .then(sources => {
      const template = handlebars.compile(sources[0])
      const context = _.clone(config)
      context.styles = context.styles.map(style => path.basename(style))
      context.nestingPrefix = getNestingPrefix(buildDir, config.destDir)
      context.pageContent = sources[1]
      return template(context)
    })
    .then(rendered => fs.writeFile(path.join(config.destDir, config.outFile), rendered))

    .then(() => resolve(true))
    .catch(err => reject(err))
  })
}

fs.mkdir(buildDir)
// Create empty folders
.then(() => Promise.all([
  fs.mkdir(path.join(buildDir, 'images')),
  fs.mkdir(path.join(buildDir, 'assets')),
  fs.mkdir(path.join(buildDir, 'scripts')),
  fs.mkdir(path.join(buildDir, 'articles'))
]))
// Copy common static files
.then(() => fs.readdir(path.join(srcDir, 'images')))
.then((files) => {
  files.forEach(file => fs.copyFile(path.join(srcDir, 'images', file), path.join(buildDir, 'images', file)))
})
.then(() => fs.readdir(path.join(srcDir, 'assets')))
.then((files) => {
  files.forEach(file => fs.copyFile(path.join(srcDir, 'assets', file), path.join(buildDir, 'assets', file)))
})
.then(() => {
  [nodeModulesDir, 'grrypto', 'src', 'caesar-cipher', 'caesar-cipher.js']

  fs.copyFile(path.join(nodeModulesDir, 'grrypto', 'src', 'caesar-cipher', 'caesar-cipher.js'), path.join(buildDir, 'scripts', 'caesar-cipher.js'))
})
.then(() => {
  fs.copyFile(path.join(srcDir, '..', '.htaccess'), path.join(buildDir, '.htaccess'))
  fs.copyFile(path.join(srcDir, 'index.js'), path.join(buildDir, 'index.js'))
  fs.copyFile(path.join(srcDir, 'index.css'), path.join(buildDir, 'index.css'))
  fs.copyFile(path.join(srcDir, 'favicon.ico'), path.join(buildDir, 'favicon.ico'))
  fs.copyFile(path.join(nodeModulesDir, '@fortawesome', 'fontawesome-free', 'js', 'all.min.js'), path.join(buildDir, 'scripts', 'fontawesome.js'))
})
// Build the site pages
.then(() => buildPage({
  html: path.join(srcDir, 'index', 'homepage.html'),
  outFile: 'index.html',
  styles: [path.join(srcDir, 'index', 'homepage.css')],
  scripts: [],
  destDir: buildDir
}))
.then(() => buildPage({
  html: path.join(srcDir, 'profile', 'profile.html'),
  outFile: 'profile.html',
  styles: [path.join(srcDir, 'profile', 'profile.css')],
  scripts: [],
  destDir: buildDir
}))
.then(() => buildPage({
  html: path.join(srcDir, 'cv', 'cv.html'),
  outFile: 'cv.html',
  styles: [path.join(srcDir, 'cv', 'cv.css')],
  scripts: [],
  destDir: buildDir
}))
.then(() => buildPage({
  html: path.join(srcDir, 'portfolio', 'portfolio.html'),
  outFile: 'portfolio.html',
  styles: [path.join(srcDir, 'portfolio', 'portfolio.css')],
  scripts: [],
  destDir: buildDir
}))
.then(() => buildPage({
  html: path.join(srcDir, 'articles', 'articles.html'),
  outFile: 'articles.html',
  styles: [path.join(srcDir, 'articles', 'articles.css')],
  scripts: [],
  destDir: buildDir
}))
.then(() => buildPage({
  html: path.join(srcDir, 'articles', 'angularjs-notes-app.html'),
  outFile: 'angularjs-notes-app.html',
  styles: [path.join(srcDir, 'articles', 'angularjs-notes-app.css')],
  scripts: [
    { src: path.join(srcDir, 'articles', 'angularjs-notes-app.js'), copy: true }
  ],
  destDir: path.join(buildDir, 'articles')
}))
.then(() => buildPage({
  html: path.join(srcDir, 'articles', 'angular-ui-bootstrap.html'),
  outFile: 'angular-ui-bootstrap.html',
  styles: [],
  scripts: [],
  destDir: path.join(buildDir, 'articles')
}))
.then(() => buildPage({
  html: path.join(srcDir, 'articles', 'tabbed-box-component.html'),
  outFile: 'tabbed-box-component.html',
  styles: [path.join(srcDir, 'articles', 'tabbed-box-component.css')],
  scripts: [
    { src: path.join(srcDir, 'articles', 'tabbed-box-component.js'), copy: true }
  ],
  destDir: path.join(buildDir, 'articles')
}))
.then(() => buildPage({
  html: path.join(srcDir, 'articles', 'caesar-cipher.html'),
  outFile: 'caesar-cipher.html',
  styles: [path.join(srcDir, 'articles', 'caesar-cipher.css')],
  scripts: [
    { src: path.join(nodeModulesDir, 'grrypto', 'src', 'caesar-cipher', 'caesar-cipher.js'), type: 'module', copy: false }, // REVIEW The grrypto library comes with a barrel so I should be able to import the caesar-cipher from grrypto/src/index.js but I would need to make sure that both the index and the caesar-cipher module are copied accross here. I'd then need to change the way the CaesarCipher is imported because it will no longer be the default (wrapped in {})
    { src: path.join(srcDir, 'articles', 'caesar-cipher.js'), type: 'module', copy: true } // the copy:false means that I don't need to copy the file to a new directory. It's already available for the application and can be referenced straight from the src.
  ],
  destDir: path.join(buildDir, 'articles')
}))

.catch(console.log)
