import test from 'ava'
import buildCommit from '../build-commit'

test('transforms object to string', t => {
  const message = buildCommit({})
  t.true(typeof message === 'string')
})

test('escapes backticks', t => {
  const message = buildCommit({body: '`BACKTICKED`'})
  const match = message.trim().match('\\\\`')
  if (match) {
    t.true(match.input === '\\\\`BACKTICKED\\\\`')
  } else {
    t.fail()
  }
})

test('lists issues', t => {
  const message = buildCommit({issuesClosed: '123: foo, 124: bar'})
  const match = message.trim().match('\n - #123:')
  if (match) {
    const listed = match.input === 'ISSUES CLOSED: \n - #123: foo\n - #124: bar'
    t.true(listed)
  } else {
    t.fail()
  }
})

test('prefixes issues', t => {
  const message = buildCommit({issuesClosed: '123: foo, 124: bar'}, 'ABC')
  const match = message.trim().match('\n - #ABC-123:')
  if (match) {
    const prefixed = match.input === 'ISSUES CLOSED: \n - #ABC-123: foo\n - #ABC-124: bar'
    t.true(prefixed)
  } else {
    t.fail()
  }
})

test('does not need a scope', t => {
  const message = buildCommit({type: 'fix'})
  const match = message.trim().match('fix:')
  if (match) {
    const prefixed = match.input === 'fix:'
    t.true(prefixed)
  } else {
    t.fail()
  }
})

test('allows a scope', t => {
  const message = buildCommit({type: 'fix', scope: 'firefox'})
  const match = message.trim().match('fix\\(firefox\\)')
  if (match) {
    const prefixed = match.input === 'fix(firefox):'
    t.true(prefixed)
  } else {
    t.fail()
  }
})

test('allows breaking changes for fix and feature', t => {
  const fixMessage = buildCommit({type: 'fix', breaking: 'foo'})
  const fixMatch = fixMessage.trim().match('BREAKING CHANGE:')
  if (fixMatch) {
    const prefixed = fixMatch.input === 'fix:  \n\nBREAKING CHANGE: foo'
    t.true(prefixed)
  } else {
    t.fail()
  }
  const featMessage = buildCommit({type: 'feat', breaking: 'foo'})
  const featMatch = featMessage.trim().match('BREAKING CHANGE:')
  if (featMatch) {
    const prefixed = featMatch.input === 'feat:  \n\nBREAKING CHANGE: foo'
    t.true(prefixed)
  } else {
    t.fail()
  }
})

test('does not allow breaking changes for types besides fix and feature', t => {
  const message = buildCommit({type: 'docs', breaking: 'foo'})
  const match = message.trim().match('BREAKING CHANGE:')
  if (match) {
    t.fail()
  } else {
    t.pass()
  }
})

