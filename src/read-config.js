/**
 * @file src/read-config.js
 * @module read-config
 * @author Gregor Adams <greg@pixelass.com>
 */

import path from 'path'
import findConfig from 'find-config'
import log from 'winston'

import {pluginName} from './helpers'

/**
 * reads the config file and offers as export
 * @returns {object} returns the imported file as a module
 */
const readConfigFile = () => {
  const pkg = findConfig.require('package.json', {home: false})
  if (pkg) {
    const {config} = pkg
    if (config && pluginName in config) {
      const czConfig = config[pluginName]
      if (typeof czConfig === 'object') {
        const pkgPath = path.resolve(czConfig.config)
        log.info(`>>> Using ${pluginName} config specified in your package.json: `, pkgPath)
        return require(pkgPath) // eslint-disable-line import/no-dynamic-require
      }
    }
  }
  log.warn(`Unable to find a configuration file. Please refer to documentation to learn how to set up: https://github.com/sinnerschrader/${pluginName}"`)
}

const configFile = readConfigFile()

export {
  configFile,
  readConfigFile
}

export default {
  configFile,
  readConfigFile
}
