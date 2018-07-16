// Run as follows
//  node build.js
const fs = require('fs').promises
const path = require('path')
const buildDir = 'public_html'
const srcDir = 'src'

fs.mkdir(buildDir)
// Create empty folders
.then(() => Promise.all([
  fs.mkdir(path.join(buildDir, 'images')),
  fs.mkdir(path.join(buildDir, 'assets')),
  fs.mkdir(path.join(buildDir, 'articles'))
]))
// Copy static files
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
// Build the homepage - XXX Should use handlebars
.catch(console.log)

// XXX TODO NEXT: Finish this builder...
