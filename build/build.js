// Run as follows
//  node build.js
const fs = require('fs').promises
const path = require('path')
const handlebars = require('handlebars')
const _ = require('underscore')
const buildDir = 'public_html'
const srcDir = 'src'

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

  // XXX Before doing anything, delete the old public_html folder (buildDir)
  return new Promise ((resolve, reject) => {
    Promise.all(
      config.styles.map(file => {
        fs.copyFile(file, path.join(config.destDir, path.basename(file)))
      })
    )
    .then(() => Promise.all(
      config.scripts.map(file => {
        fs.copyFile(file, path.join(config.destDir, path.basename(file)))
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
      context.scripts = context.scripts.map(script => path.basename(script))
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
  fs.copyFile(path.join(srcDir, 'index.js'), path.join(buildDir, 'index.js'))
  fs.copyFile(path.join(srcDir, 'index.css'), path.join(buildDir, 'index.css'))
  fs.copyFile(path.join(srcDir, 'favicon.ico'), path.join(buildDir, 'favicon.ico'))
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
  styles: [],
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
  html: path.join(srcDir, 'articles', 'tabbed-box-component.html'),
  outFile: 'tabbed-box-component.html',
  styles: [path.join(srcDir, 'articles', 'tabbed-box-component.css')],
  scripts: [path.join(srcDir, 'articles', 'tabbed-box-component.js')],
  destDir: path.join(buildDir, 'articles')
}))
.then(() => buildPage({
  html: path.join(srcDir, 'articles', 'caesar-cipher.html'),
  outFile: 'caesar-cipher.html',
  styles: [path.join(srcDir, 'articles', 'caesar-cipher.css')],
  scripts: [path.join(srcDir, 'articles', 'caesar-cipher.js')],
  destDir: path.join(buildDir, 'articles')
}))

.catch(console.log)
