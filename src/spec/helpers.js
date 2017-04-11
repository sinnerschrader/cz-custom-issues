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
  firstLine,
  createIssueBlock,
  createBreakingBlock
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

test('clipLine() returns an epmty string as fallback', t => {
  const clip = clipLine('')
  t.true(typeof clip === 'string')
  t.true(clip === '')
})

test('escapeSpecialChars() escapes backticks', t => {
  t.true(escapeSpecialChars('`BACKTICKED`') === '\\\\`BACKTICKED\\\\`')
})

test('wrapContent() wraps lines', t => {
  t.true(wrapContent(longString + longString).length > 1)
})

test('wrapContent() returns an epmty string as fallback', t => {
  const wrap = wrapContent('')
  t.true(typeof wrap === 'string')
  t.true(wrap === '')
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

test('toList() returns an epmty string as fallback', t => {
  const list = toList('')
  t.true(typeof list === 'string')
  t.true(list === '')
})

test('toIssueList() converts `,` to issue-items', t => {
  const list = toIssueList('1,2,3,4').trim().split('\n - #')
  t.true(list.length === 4)
})

test('toIssueList() returns an epmty string as fallback', t => {
  const list = toIssueList('')
  t.true(typeof list === 'string')
  t.true(list === '')
})

test('prefixIssue() prefixes issues with a hash', t => {
  t.true(prefixIssue('12') === '#12')
})

test('prefixIssue() prefixes issues with a hash and prefix', t => {
  t.true(prefixIssue('12', 'ABC') === '#ABC-12')
})

test('prefixIssue() returns an epmty string as fallback', t => {
  const issue = prefixIssue(null, 'ABC')
  t.true(typeof issue === 'string')
  t.true(issue === '')
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

test('createIssueBlock() creates an issue block', t => {
  const block = createIssueBlock('123: foo, 124: bar')
  t.true(typeof block === 'string')
  t.true(block !== '')
  t.true(Boolean(block.match('ISSUES CLOSED:')))
})

test('createIssueBlock() returns an empty string if empty', t => {
  t.true(createIssueBlock() === '')
})

test('createBreakingBlock() creates a breaking block', t => {
  const block = createBreakingBlock({type: 'fix', breaking: 'foo'})
  t.true(typeof block === 'string')
  t.true(block !== '')
  t.true(Boolean(block.match('BREAKING CHANGE:')))
})

test('createBreakingBlock() returns an empty string if not fix or feat', t => {
  t.true(createBreakingBlock({type: 'docs', breaking: 'foo'}) === '')
})

test('createBreakingBlock() returns an filled string if fix or feat', t => {
  const fix = createBreakingBlock({type: 'fix', breaking: 'foo'})
  const feat = createBreakingBlock({type: 'feat', breaking: 'foo'})
  t.true(typeof fix === 'string')
  t.true(fix !== '')
  t.true(typeof feat === 'string')
  t.true(feat !== '')
})
