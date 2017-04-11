/**
 * @file src/issue-settings.js
 * @module issue-settings
 * @author Gregor Adams <greg@pixelass.com>
 */

import findConfig from 'find-config'
import log from 'winston'

import {pluginName} from './helpers'

/**
 * Reads the issue configurtion from config block in `package.json`
 * @param  {object} [fallback={}] fallbcak object in case no config was found
 * @returns {issueConfig} returns an object containing the config
 */
const readIssueSettings = (fallback = {}) => {
  const pkg = findConfig.require('package.json', {home: false})
  // istanbul ignore if
  if (pkg) {
    const {config} = pkg
    if (config && pluginName in config) {
      const czConfig = config[pluginName]
      if (typeof czConfig === 'object') {
        return czConfig.issues || fallback
      }
    }
    return fallback
  }
  log.warn(`Unable to find a configuration file. Please refer to documentation to learn how to set up: https://github.com/sinnerschrader/${pluginName}"`)
}
/**
 * @typedef issueConfig
 * @prop {string} [type] defines the type of platform (jirs | git)
 *                     currently not used
 * @prop {string|null} [prefix] when set issues will be prefixed by this identifier
 */
const issueSettings = readIssueSettings()

export {
  issueSettings,
  readIssueSettings
}

export default {
  issueSettings,
  readIssueSettings
}
