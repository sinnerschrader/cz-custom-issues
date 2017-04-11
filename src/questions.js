/**
 * @file src/questions.js
 * @module questions
 * @author Gregor Adams <greg@pixelass.com>
 */

import log from 'winston'
import buildCommit from './build-commit'

/**
 * Check for WIP commits
 * @param   {string} options.type
 * @returns {boolean} returns `true` if the type is `WIP`
 */
const isWIP = ({type}) => type.toLowerCase() === 'wip'

/**
 * Negated check for WIP commits
 * @param   {string} options.type
 * @returns {boolean} returns `false` if the type is `WIP`
 */
const isNotWIP = answers => !isWIP(answers)

/**
 * Gt questions for prompt
 * @param   {object}  scopeOverrides
 * @param   {array}   types
 * @param   {array}   scopes
 * @param   {array}   allowBreakingChanges
 * @param   {boolean} allowCustomScopes
 * @param   {object}  cz
 * @returns {object}  returns questions
 */
const getQuestions = ({scopeOverrides = {}, types, scopes, allowBreakingChanges, allowCustomScopes}, cz) => {
  const questions = [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of change that you’re committing:',
      choices: types
    },
    {
      type: 'list',
      name: 'scope',
      message: '\nDenote the SCOPE of this change (optional):',
      choices(answers) {
        let customScopes = []
        if (scopeOverrides[answers.type]) {
          customScopes = customScopes.concat(scopeOverrides[answers.type])
        } else {
          customScopes = customScopes.concat(scopes)
        }
        if (allowCustomScopes || customScopes.length === 0) {
          customScopes = customScopes.concat([
            new cz.Separator(),
            {name: 'empty', value: false},
            {name: 'custom', value: 'custom'}
          ])
        }
        return customScopes
      },
      when(answers) {
        let hasScope = false
        if (scopeOverrides[answers.type]) {
          hasScope = scopeOverrides[answers.type].length > 0
        } else {
          hasScope = scopes && (scopes.length > 0)
        }
        if (hasScope) {
          return isNotWIP(answers)
        }
        answers.scope = 'custom'
        return false
      }
    },
    {
      type: 'input',
      name: 'scope',
      message: 'Denote the SCOPE of this change:',
      when(answers) {
        return answers.scope === 'custom'
      }
    },
    {
      type: 'input',
      name: 'subject',
      message: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      validate(value) {
        return Boolean(value)
      },
      filter(value) {
        return value.charAt(0).toLowerCase() + value.slice(1)
      }
    },
    {
      type: 'input',
      name: 'body',
      message: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n'
    },
    {
      type: 'input',
      name: 'breaking',
      message: 'List any BREAKING CHANGES (optional):\n',
      when(answers) {
        if (allowBreakingChanges && allowBreakingChanges.indexOf(answers.type.toLowerCase()) >= 0) {
          return true
        }
        return false
      }
    },
    {
      type: 'input',
      name: 'issuesClosed',
      message: 'List any TICKETS CLOSED by this change (optional). (e.g.: 31: button alignment, 33: firefox buttons)\n',
      when: isNotWIP
    },
    {
      type: 'expand',
      name: 'confirmCommit',
      choices: [
        {key: 'y', name: 'Yes', value: 'yes'},
        {key: 'n', name: 'Abort commit', value: 'no'},
        {key: 'e', name: 'Edit message', value: 'edit'}
      ],
      message(answers) {
        const sep = '\n###--------------------------------------------------------###\n'
        log.info(`${sep}${buildCommit(answers)}${sep}`)
        return 'Are you sure you want to proceed with the commit above?'
      }
    }
  ]

  return questions
}

export default getQuestions
