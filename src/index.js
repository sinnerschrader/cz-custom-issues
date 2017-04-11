/**
 * @file src/index.js
 * @module index
 * @author Gregor Adams <greg@pixelass.com>
 */

import fs from 'fs'
import log from 'winston'
import editor from 'editor'
import {track} from 'temp'

import buildCommit from './build-commit'
import getQuestions from './questions'
import {configFile} from './read-config'
import {maxWidth} from './helpers'

const temp = track()

/**
 * Builds a commit message from prompt answers
 * @param   {object} cz
 * @param   {function} commit
 * @returns {string} returns the commit message
 */
const prompter = (cz, commit) => {
  const questions = getQuestions(configFile, cz)
  log.info(`Line 1 will be cropped at ${maxWidth} characters. All other lines will be wrapped after ${maxWidth} characters.`)
  cz.prompt(questions).then(answers => {
    const {confirmCommit} = answers
    const commitMessage = buildCommit(answers)
    if (confirmCommit === 'edit') {
      temp.open(null, (err, info) => {
        if (!err) {
          fs.write(info.fd, commitMessage)
          fs.close(info.fd, err => {
            if (err) {
              throw err
            }
            editor(info.path, code => {
              if (code === 0) {
                commit(fs.readFileSync(info.path, {encoding: 'utf8'}))
              } else {
                log.info('Editor returned non zero value. Commit message was:\n', commitMessage)
              }
            })
          })
        }
      })
    } else if (confirmCommit === 'yes') {
      commit(commitMessage)
    } else {
      log.info('Commit has been canceled.')
    }
  })
}

export {prompter}
export default {prompter}
