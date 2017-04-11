'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file src/cz-config.example.js
 * @module cz-config.example
 * @author Gregor Adams <greg@pixelass.com>
 */

/**
 * a list of commit types
 * @type {array}
 */
var types = [{
  value: 'feat',
  name: 'feat:     A new feature'
}, {
  value: 'fix',
  name: 'fix:      A bug fix'
}, {
  value: 'docs',
  name: 'docs:     Documentation only changes'
}, {
  value: 'style',
  name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)'
}, {
  value: 'refactor',
  name: 'refactor: A code change that neither fixes a bug nor adds a feature'
}, {
  value: 'perf',
  name: 'perf:     A code change that improves performance'
}, {
  value: 'test',
  name: 'test:\n     Adding missing tests'
}, {
  value: 'chore',
  name: 'chore:    Changes to the build process or auxiliary tools\n     and libraries such as documentation generation'
}, {
  value: 'revert',
  name: 'revert:    Revert to a commit'
}, {
  value: 'WIP',
  name: 'WIP:      Work in progress'
}];

/**
 * default scopes
 * @type {array}
 */
var scopes = [{ name: 'new' }, { name: 'change' }, { name: 'addition' }];

/**
 * custom overrides for types
 * @type {object}
 */
var scopeOverrides = {
  // fix: [{ name: 'windows' }, { name: 'osx' }, { name: 'linux' }],
  // docs: [{ name: 'new' }, { name: 'change' }, { name: 'readme' }],
  // style: [{ name: 'format' }, { name: 'whitespace' }, { name: 'lint-happy' }, { name: 'indents' }]
};

/**
 * allow custom scopes?
 * @type {boolean}
 */
var allowCustomScopes = true;

/**
 * list of types that allow breaking changes
 * @type {array}
 */
var allowBreakingChanges = ['feat', 'fix'];

exports.types = types;
exports.scopes = scopes;
exports.allowCustomScopes = allowCustomScopes;
exports.allowBreakingChanges = allowBreakingChanges;
exports.scopeOverrides = scopeOverrides;
exports.default = {
  types: types,
  scopes: scopes,
  allowCustomScopes: allowCustomScopes,
  allowBreakingChanges: allowBreakingChanges,
  scopeOverrides: scopeOverrides
};
