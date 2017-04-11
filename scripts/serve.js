const exec = require('child_process').exec
const log = require('winston')
const pkg = require('../package.json')

log.info(`starting server on http://localhost:${pkg.devPort}`)
module.exports = () => {
  exec(`cd docs && http-server -p ${pkg.devPort}`, err => {
    if (err) {
      throw err
    }
  })
}
