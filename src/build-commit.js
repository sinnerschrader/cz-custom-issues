/**
 * @file src/build-commit.js
 * @module build-commit
 * @author Gregor Adams <greg@pixelass.com>
 */

import {issueSettings} from './issue-settings'
import {
  firstLine,
  wrapContent,
  addLabel,
  addNewlines,
  toParagraph,
  createIssueBlock,
  escapeSpecialChars
} from './helpers'

/**
 * builds the commit message
 * @param   {object} answers an object containing answers from the prompt
 * @param   {string} answers.type type of commit
 * @param   {string} answers.subject short info about commit
 * @param   {string} answers.scope optional scope
 * @param   {string} answers.body long info about commit
 * @param   {string} answers.issuesClosed liust of issues closed by this commit
 * @param   {string} answers.breaking list of breaking changes due to this commit
 *
 * @returns {string} returns full commit message
 */
const buildCommit = answers => {
  const head = firstLine(answers.type, answers.subject, answers.scope)
  const body = toParagraph(addNewlines(wrapContent(answers.body)))
  const breaking = toParagraph(addLabel('BREAKING CHANGE', wrapContent(answers.breaking)))
  const issuesClosed = createIssueBlock(answers.issuesClosed, issueSettings.prefix)
  const promptQueue = [
    head,
    body,
    issuesClosed,
    breaking
  ]
  const result = promptQueue.map(x => x || '').join('')

  return escapeSpecialChars(result)
}

export default buildCommit
