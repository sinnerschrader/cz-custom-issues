/*
 * if you want to use css-modules or cssnext
 * please follow the comments in this file.
 *
 * css-modules
 * (1): import css-modulesify (requires `yarn add css-modulesify`)
 * (2): remove css files from copy batch (comment or delete)
 * (3): load css-modulsify into browserify
 *
 * cssnext
 * (4): import cssnext (requires `yarn add postcss-cssnext`)
 * (5): run cssnext in the "after" batch
 */

const exec = require('child_process').exec
const fs = require('fs')
const path = require('path')
const log = require('winston')
const browserify = require('browserify')
const watchify = require('watchify')
const errorify = require('errorify')
// (1) Uncomment the following line if you want to use css-modules
// const cssModulesify = require('css-modulesify')
// (4) Uncomment the following line if you want to use cssnext
// const cssNext = require('postcss-cssnext')

const demoFolder = path.join(__dirname, '../demo')
const buildFolder = path.join(__dirname, '../docs')

// add or remove files from this list
// key: input file
// value: output name (used for css and js)
const fileMap = {
  'index.js': 'main'
}
// these files will be copied from the demoFolder to the buildFolder
const demoFiles = [
  'index.html',
  'favico.png'
]
const inputFiles = Object.keys(fileMap)

// (2) Comment or delete the following block if you want to use css-modules
inputFiles.forEach(file => {
  demoFiles.push(`${fileMap[file]}.css`)
})

const outFiles = inputFiles.map(file => {
  return path.join(buildFolder, `${fileMap[file]}.js`)
})

// bash command to remove files
const removeFiles = `rm -rf ${path.join(buildFolder, '*.{js,css,png,html}')}`

module.exports = watch => {
  exec(removeFiles, err => {
    if (err) {
      throw err
    }
    // bash command to copy files
    const copyFiles = demoFiles.map(file => `cp ${path.join(demoFolder, file)} ${path.join(buildFolder, file)}`).join(';')
    exec(copyFiles, err => {
      if (err) {
        throw err
      }
    })

    // dreate a bundler for each file
    inputFiles.forEach(file => {
      const inFile = path.join(demoFolder, file)
      const outFile = path.join(buildFolder, fileMap[file])
      const plugin = [errorify]

      if (watch) {
        plugin.push(watchify)
      }

      const b = browserify({
        entries: [inFile],
        plugin
      })

      const bundle = () => {
        b.bundle().pipe(fs.createWriteStream(`${outFile}.js`))
      }

      // either uglify or watch
      if (watch) {
        b.on('update', bundle)
      } else {
        b.transform({
          global: true
        }, 'uglifyify')
      }

      b.on('log', message => log.info(message))
      b.on('error', message => log.error(message))

      // (3) Uncomment the following block if you want to use css-modules
      // b.plugin(cssModulesify, {
      //   // (5) Uncomment the following line if you want to use cssnext
      //   // after: [cssNext()],
      //   output: `${outFile}.css`,
      //   generateScopedName: cssModulesify.generateScopedName,
      //   global: true
      // })

      bundle()
    })
  })
}
