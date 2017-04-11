/**
 * @file src/helpers.js
 * @module helpers
 * @author Gregor Adams <greg@pixelass.com>
 */

import wrap from 'word-wrap'

/**
 * Plugin namespace
 * @type {String}
 */
const pluginName = 'cz-custom-issues'

/**
 * Max number of characters in one line
 * @type {Number}
 */
const maxWidth = 100

/**
 * Configuration for word-wrap
 * @type {Object}
 * @prop {boolean} trim
 * @prop {string}  newline
 * @prop {string}  indent
 * @prop {number}  width
 */
const wrapOptions = {
  trim: true,
  newline: '\n',
  indent: '',
  width: maxWidth
}

/**
 * Wrap content or return an empty string
 * @param   {string} content
 *
 * @returns {string} returns the wrapped content or an empty string
 */
const wrapContent = content => content ? wrap(content, wrapOptions) || '' : ''

/**
 * Trims the content and returns
 * @param   {string} content
 *
 * @returns {string} returns a trimmed version of the input
 */
const trim = content => content ? content.trim() : ''

/**
 * Clips the content and returns
 * @param   {string} content
 *
 * @returns {string} returns a trimmed version of the input
 */
const clipLine = (content, width = maxWidth) => content ? content.slice(0, width) : ''

/**
 * Escape some special characters
 * @param  {string} content
 *
 * @returns {string} returns the input with escaped special characters
 */
const escapeSpecialChars = content => content ? content.replace(/\`/g, '\\\\`') : ''// eslint-disable-line no-useless-escape

/**
 * Pushes content in to a new paragraph by adding newlines
 * @param   {string} content
 *
 * @returns {string} returns the input with two leading newlines
 */
const toParagraph = content => content ? `\n\n${trim(content)}` : ''

/**
 * Converts pipes to newlines
 * @param   {string} content
 *
 * @returns {string} returns the input with pieps converted to newlines
 */
const addNewlines = content => content ? content.split('|').join('\n') : ''

/**
 * Converts comma separated lists into hyphen lists
 * @param   {string} content
 *
 * @returns {string} returns the input coverted to a list
 */
const toList = content => content ? content.split(',').map(x => `\n - ${trim(x)}`).join('') : ''

/**
 * Prefix issues with a project key/prefix
 * @param  {string} issue  issue name (usually a number e.g. 1)
 * @param  {string|null} [prefix=null] peefix for issue (e.g. for Jira: ABC)
 *
 * @returns {string} returns the prefixed issue (e.g. #ABC-1 or #1)
 */
const prefixIssue = (issue, prefix = null) => issue ? `${(prefix ? `#${prefix}-` : `#`)}${issue}` : ''

/**
 * Converts comma separated lists into hyphen lists with an optional prefix
 * @param   {string} content
 *
 * @returns {string} returns the input coverted to a list with prefixed labels
 */
const toIssueList = (content, prefix = null) => content ? content.split(',').map(x => `\n - ${prefixIssue(trim(x), prefix)}`).join('') : ''

/**
 * Add scope and wrap in parenthses (optional)
 * @param   {string} [content=null] the name of the scope
 *
 * @returns {string} returns the scope wrapped in parentheses or an empty string
 *
 * @example
 * const hasScope = addScope('foo') // => '(foo)'
 * const hasNoScope = addScope() // => ''
 */
const addScope = (scope = null) => scope ? `(${trim(scope)})` : ''

/**
 * Adds a label in front of a line
 * @param   {string} label the name of the label
 * @param   {string} content
 *
 * @returns {string} returns the content prefixed by a label
 */
const addLabel = (label, content) => content ? `${trim(label)}: ${content}` : ''

/**
 * Hard limit the first line of a commit message
 * @param   {string} type       type of commit
 * @param   {string} subject    subject of commit (includes body, footer, etc.)
 * @param   {string} [scope=''] optional scope of feature
 *
 * @returns {string} returns the first line of the commit clipped at defined maxLength
 */
const firstLine = (type, subject, scope = null) => type ? clipLine(`${type}${addScope(scope)}:  ${trim(subject)}`) : ''

/**
 * Creates an issue block respecting the issue settings
 * @param   {string}      issues
 * @param   {object}      issueSettings
 * @param   {string}      issueSettings.type
 * @param   {string|null} [ssueSettings.pefix=null]
 *
 * @returns {string}
 */
const createIssueBlock = (issues, prefix) => issues ? toParagraph(addLabel('ISSUES CLOSED', toIssueList(wrapContent(issues), prefix))) : ''

/**
 * Create a breaking changes block
 * @param  {string} options.type
 * @param  {string} options.breaking
 * @return {string}
 */
const createBreakingBlock = ({type, breaking}) => (trim(type) === 'fix' || trim(type) === 'feat') ? toParagraph(addLabel('BREAKING CHANGE', wrapContent(breaking))) : ''

export {
  pluginName,
  maxWidth,
  wrapOptions,
  wrapContent,
  trim,
  clipLine,
  escapeSpecialChars,
  toParagraph,
  addNewlines,
  toList,
  prefixIssue,
  toIssueList,
  addScope,
  addLabel,
  firstLine,
  createIssueBlock,
  createBreakingBlock
}

export default {
  pluginName,
  maxWidth,
  wrapOptions,
  wrapContent,
  trim,
  clipLine,
  escapeSpecialChars,
  toParagraph,
  addNewlines,
  toList,
  prefixIssue,
  toIssueList,
  addScope,
  addLabel,
  firstLine,
  createIssueBlock,
  createBreakingBlock
}
