/**
 * @file src/cz-config.example.js
 * @module cz-config.example
 * @author Gregor Adams <greg@pixelass.com>
 */

/**
 * A list of commit types
 * @type {array}
 */
const types = [
  {
    value: 'feat',
    name: `feat:     A new feature`
  },
  {
    value: 'fix',
    name: `fix:      A bug fix`
  },
  {
    value: 'docs',
    name: `docs:     Documentation only changes`
  },
  {
    value: 'style',
    name: `style:    Changes that do not affect the meaning of the code
            (white-space, formatting, missing semi-colons, etc)`
  },
  {
    value: 'refactor',
    name: 'refactor: A code change that neither fixes a bug nor adds a feature'
  },
  {
    value: 'perf',
    name: `perf:     A code change that improves performance`
  },
  {
    value: 'test',
    name: `test:     Adding missing tests`
  },
  {
    value: 'chore',
    name: `chore:    Changes to the build process or auxiliary tools
            and libraries such as documentation generation`
  },
  {
    value: 'revert',
    name: `revert:    Revert to a commit`
  },
  {
    value: 'WIP',
    name: `WIP:      Work in progress`
  }
]

/**
 * Default scopes
 * @type {array}
 */
const scopes = [
  {name: 'new'},
  {name: 'change'},
  {name: 'addition'}
]

/**
 * Custom overrides for types
 * @type {object}
 */
const scopeOverrides = {
  fix: [
    {name: 'windows'},
    {name: 'osx'},
    {name: 'linux'}
  ],
  docs: [
    {name: 'new'},
    {name: 'change'},
    {name: 'readme'}
  ],
  style: [
    {name: 'format'},
    {name: 'whitespace'},
    {name: 'lint-happy'},
    {name: 'indents'}
  ]
}

/**
 * Allow custom scopes?
 * @type {boolean}
 */
const allowCustomScopes = true

/**
 * List of types that allow breaking changes
 * @type {array}
 */
const allowBreakingChanges = ['feat', 'fix']

export {
  types,
  scopes,
  allowCustomScopes,
  allowBreakingChanges,
  scopeOverrides
}

export default {
  types,
  scopes,
  allowCustomScopes,
  allowBreakingChanges,
  scopeOverrides
}
