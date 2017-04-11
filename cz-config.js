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
 * A list of commit types
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
  name: 'test:     Adding missing tests'
}, {
  value: 'chore',
  name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation'
}, {
  value: 'revert',
  name: 'revert:    Revert to a commit'
}, {
  value: 'WIP',
  name: 'WIP:      Work in progress'
}];

/**
 * Default scopes
 * @type {array}
 */
var scopes = [{ name: 'new' }, { name: 'change' }, { name: 'addition' }];

/**
 * Custom overrides for types
 * @type {object}
 */
var scopeOverrides = {
  fix: [{ name: 'windows' }, { name: 'osx' }, { name: 'linux' }],
  docs: [{ name: 'new' }, { name: 'change' }, { name: 'readme' }],
  style: [{ name: 'format' }, { name: 'whitespace' }, { name: 'lint-happy' }, { name: 'indents' }]
};

/**
 * Allow custom scopes?
 * @type {boolean}
 */
var allowCustomScopes = true;

/**
 * List of types that allow breaking changes
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jei1jb25maWcuZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInZhbHVlIiwibmFtZSIsInNjb3BlcyIsInNjb3BlT3ZlcnJpZGVzIiwiZml4IiwiZG9jcyIsInN0eWxlIiwiYWxsb3dDdXN0b21TY29wZXMiLCJhbGxvd0JyZWFraW5nQ2hhbmdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7O0FBTUE7Ozs7QUFJQSxJQUFNQSxRQUFRLENBQ1o7QUFDRUMsU0FBTyxNQURUO0FBRUVDO0FBRkYsQ0FEWSxFQUtaO0FBQ0VELFNBQU8sS0FEVDtBQUVFQztBQUZGLENBTFksRUFTWjtBQUNFRCxTQUFPLE1BRFQ7QUFFRUM7QUFGRixDQVRZLEVBYVo7QUFDRUQsU0FBTyxPQURUO0FBRUVDO0FBRkYsQ0FiWSxFQWtCWjtBQUNFRCxTQUFPLFVBRFQ7QUFFRUMsUUFBTTtBQUZSLENBbEJZLEVBc0JaO0FBQ0VELFNBQU8sTUFEVDtBQUVFQztBQUZGLENBdEJZLEVBMEJaO0FBQ0VELFNBQU8sTUFEVDtBQUVFQztBQUZGLENBMUJZLEVBOEJaO0FBQ0VELFNBQU8sT0FEVDtBQUVFQztBQUZGLENBOUJZLEVBbUNaO0FBQ0VELFNBQU8sUUFEVDtBQUVFQztBQUZGLENBbkNZLEVBdUNaO0FBQ0VELFNBQU8sS0FEVDtBQUVFQztBQUZGLENBdkNZLENBQWQ7O0FBNkNBOzs7O0FBSUEsSUFBTUMsU0FBUyxDQUNiLEVBQUNELE1BQU0sS0FBUCxFQURhLEVBRWIsRUFBQ0EsTUFBTSxRQUFQLEVBRmEsRUFHYixFQUFDQSxNQUFNLFVBQVAsRUFIYSxDQUFmOztBQU1BOzs7O0FBSUEsSUFBTUUsaUJBQWlCO0FBQ3JCQyxPQUFLLENBQ0gsRUFBQ0gsTUFBTSxTQUFQLEVBREcsRUFFSCxFQUFDQSxNQUFNLEtBQVAsRUFGRyxFQUdILEVBQUNBLE1BQU0sT0FBUCxFQUhHLENBRGdCO0FBTXJCSSxRQUFNLENBQ0osRUFBQ0osTUFBTSxLQUFQLEVBREksRUFFSixFQUFDQSxNQUFNLFFBQVAsRUFGSSxFQUdKLEVBQUNBLE1BQU0sUUFBUCxFQUhJLENBTmU7QUFXckJLLFNBQU8sQ0FDTCxFQUFDTCxNQUFNLFFBQVAsRUFESyxFQUVMLEVBQUNBLE1BQU0sWUFBUCxFQUZLLEVBR0wsRUFBQ0EsTUFBTSxZQUFQLEVBSEssRUFJTCxFQUFDQSxNQUFNLFNBQVAsRUFKSztBQVhjLENBQXZCOztBQW1CQTs7OztBQUlBLElBQU1NLG9CQUFvQixJQUExQjs7QUFFQTs7OztBQUlBLElBQU1DLHVCQUF1QixDQUFDLE1BQUQsRUFBUyxLQUFULENBQTdCOztRQUdFVCxLLEdBQUFBLEs7UUFDQUcsTSxHQUFBQSxNO1FBQ0FLLGlCLEdBQUFBLGlCO1FBQ0FDLG9CLEdBQUFBLG9CO1FBQ0FMLGMsR0FBQUEsYztrQkFHYTtBQUNiSixjQURhO0FBRWJHLGdCQUZhO0FBR2JLLHNDQUhhO0FBSWJDLDRDQUphO0FBS2JMO0FBTGEsQyIsImZpbGUiOiJjei1jb25maWcuZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgc3JjL2N6LWNvbmZpZy5leGFtcGxlLmpzXG4gKiBAbW9kdWxlIGN6LWNvbmZpZy5leGFtcGxlXG4gKiBAYXV0aG9yIEdyZWdvciBBZGFtcyA8Z3JlZ0BwaXhlbGFzcy5jb20+XG4gKi9cblxuLyoqXG4gKiBBIGxpc3Qgb2YgY29tbWl0IHR5cGVzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKi9cbmNvbnN0IHR5cGVzID0gW1xuICB7XG4gICAgdmFsdWU6ICdmZWF0JyxcbiAgICBuYW1lOiBgZmVhdDogICAgIEEgbmV3IGZlYXR1cmVgXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ2ZpeCcsXG4gICAgbmFtZTogYGZpeDogICAgICBBIGJ1ZyBmaXhgXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ2RvY3MnLFxuICAgIG5hbWU6IGBkb2NzOiAgICAgRG9jdW1lbnRhdGlvbiBvbmx5IGNoYW5nZXNgXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ3N0eWxlJyxcbiAgICBuYW1lOiBgc3R5bGU6ICAgIENoYW5nZXMgdGhhdCBkbyBub3QgYWZmZWN0IHRoZSBtZWFuaW5nIG9mIHRoZSBjb2RlXG4gICAgICAgICAgICAod2hpdGUtc3BhY2UsIGZvcm1hdHRpbmcsIG1pc3Npbmcgc2VtaS1jb2xvbnMsIGV0YylgXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ3JlZmFjdG9yJyxcbiAgICBuYW1lOiAncmVmYWN0b3I6IEEgY29kZSBjaGFuZ2UgdGhhdCBuZWl0aGVyIGZpeGVzIGEgYnVnIG5vciBhZGRzIGEgZmVhdHVyZSdcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAncGVyZicsXG4gICAgbmFtZTogYHBlcmY6ICAgICBBIGNvZGUgY2hhbmdlIHRoYXQgaW1wcm92ZXMgcGVyZm9ybWFuY2VgXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ3Rlc3QnLFxuICAgIG5hbWU6IGB0ZXN0OiAgICAgQWRkaW5nIG1pc3NpbmcgdGVzdHNgXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ2Nob3JlJyxcbiAgICBuYW1lOiBgY2hvcmU6ICAgIENoYW5nZXMgdG8gdGhlIGJ1aWxkIHByb2Nlc3Mgb3IgYXV4aWxpYXJ5IHRvb2xzXG4gICAgICAgICAgICBhbmQgbGlicmFyaWVzIHN1Y2ggYXMgZG9jdW1lbnRhdGlvbiBnZW5lcmF0aW9uYFxuICB9LFxuICB7XG4gICAgdmFsdWU6ICdyZXZlcnQnLFxuICAgIG5hbWU6IGByZXZlcnQ6ICAgIFJldmVydCB0byBhIGNvbW1pdGBcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnV0lQJyxcbiAgICBuYW1lOiBgV0lQOiAgICAgIFdvcmsgaW4gcHJvZ3Jlc3NgXG4gIH1cbl1cblxuLyoqXG4gKiBEZWZhdWx0IHNjb3Blc1xuICogQHR5cGUge2FycmF5fVxuICovXG5jb25zdCBzY29wZXMgPSBbXG4gIHtuYW1lOiAnbmV3J30sXG4gIHtuYW1lOiAnY2hhbmdlJ30sXG4gIHtuYW1lOiAnYWRkaXRpb24nfVxuXVxuXG4vKipcbiAqIEN1c3RvbSBvdmVycmlkZXMgZm9yIHR5cGVzXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5jb25zdCBzY29wZU92ZXJyaWRlcyA9IHtcbiAgZml4OiBbXG4gICAge25hbWU6ICd3aW5kb3dzJ30sXG4gICAge25hbWU6ICdvc3gnfSxcbiAgICB7bmFtZTogJ2xpbnV4J31cbiAgXSxcbiAgZG9jczogW1xuICAgIHtuYW1lOiAnbmV3J30sXG4gICAge25hbWU6ICdjaGFuZ2UnfSxcbiAgICB7bmFtZTogJ3JlYWRtZSd9XG4gIF0sXG4gIHN0eWxlOiBbXG4gICAge25hbWU6ICdmb3JtYXQnfSxcbiAgICB7bmFtZTogJ3doaXRlc3BhY2UnfSxcbiAgICB7bmFtZTogJ2xpbnQtaGFwcHknfSxcbiAgICB7bmFtZTogJ2luZGVudHMnfVxuICBdXG59XG5cbi8qKlxuICogQWxsb3cgY3VzdG9tIHNjb3Blcz9cbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5jb25zdCBhbGxvd0N1c3RvbVNjb3BlcyA9IHRydWVcblxuLyoqXG4gKiBMaXN0IG9mIHR5cGVzIHRoYXQgYWxsb3cgYnJlYWtpbmcgY2hhbmdlc1xuICogQHR5cGUge2FycmF5fVxuICovXG5jb25zdCBhbGxvd0JyZWFraW5nQ2hhbmdlcyA9IFsnZmVhdCcsICdmaXgnXVxuXG5leHBvcnQge1xuICB0eXBlcyxcbiAgc2NvcGVzLFxuICBhbGxvd0N1c3RvbVNjb3BlcyxcbiAgYWxsb3dCcmVha2luZ0NoYW5nZXMsXG4gIHNjb3BlT3ZlcnJpZGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZXMsXG4gIHNjb3BlcyxcbiAgYWxsb3dDdXN0b21TY29wZXMsXG4gIGFsbG93QnJlYWtpbmdDaGFuZ2VzLFxuICBzY29wZU92ZXJyaWRlc1xufVxuIl19