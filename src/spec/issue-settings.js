import test from 'ava'
import {readIssueSettings, issueSettings} from '../issue-settings'

test('issueSettings is an object', t => {
  t.true(typeof issueSettings === 'object')
})

test('readIssueSettings() returns an object', t => {
  t.true(typeof readIssueSettings() === 'object')
})
