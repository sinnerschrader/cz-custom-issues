import test from 'ava'
import {
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
  firstLine
} from '../helpers'

const longString = 'Quasi dolorem eveniet doloribus quia non est asperiores. Doloremque occaecati dolore quia ipsam non vero eveniet. Perspiciatis autem omnis suscipit. Et et dolor rerum. Cupiditate suscipit iure ea dicta.'

test('pluginName is a string', t => {
  t.true(typeof pluginName === 'string')
})

test('maxWidth is a number', t => {
  t.true(typeof maxWidth === 'number')
})

test('wrapOptions is an object', t => {
  t.true(typeof wrapOptions === 'object')
})

test('trim() removes surrounding spaces', t => {
  t.true(trim('  foo  ') === 'foo')
})

test(`clipLine() clips at ${maxWidth} chars length`, t => {
  t.true(clipLine(longString).length <= maxWidth)
})

test('escapeSpecialChars() escapes backticks', t => {
  t.true(escapeSpecialChars('`BACKTICKED`') === '\\\\`BACKTICKED\\\\`')
})

test('wrapContent() wraps lines', t => {
  t.true(wrapContent(longString + longString).length > 1)
})

test('toParagraph() creates a new paragraph', t => {
  t.true(toParagraph('foo') === '\n\nfoo')
})

test('addNewlines() converts `|` to newlines', t => {
  t.true(addNewlines('1|2|3|4').trim().split('\n').length === 4)
})

test('toList() converts `,` to list-items', t => {
  const list = toList('1,2,3,4').trim().split('\n - ')
  t.true(list.length === 4)
})

test('toIssueList() converts `,` to issue-items', t => {
  const list = toIssueList('1,2,3,4').trim().split('\n - #')
  t.true(list.length === 4)
})

test('prefixIssue() prefixes issues with a hash', t => {
  t.true(prefixIssue('12') === '#12')
})

test('prefixIssue() prefixes issues with a hash and prefix', t => {
  t.true(prefixIssue('12', 'ABC') === '#ABC-12')
})

test('addScope() adds a scope if defined', t => {
  t.true(addScope('foo') === '(foo)')
})

test('addScope() does not add a scope unless defined', t => {
  t.true(addScope() === '')
})

test('addLabel() prefixes a line with a label', t => {
  t.true(addLabel('LABEL', 'foo') === 'LABEL: foo')
})

test('firstLine() transforms the first line', t => {
  t.true(firstLine('feat', 'foo') === 'feat:  foo')
  t.true(firstLine('feat', 'foo', 'bar') === 'feat(bar):  foo')
  t.true(firstLine('feat', longString).length <= maxWidth)
})
