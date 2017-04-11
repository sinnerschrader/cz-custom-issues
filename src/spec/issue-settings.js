import test from 'ava'
import {readIssueSettings, issueSettings} from '../issue-settings'

test('issueSettings is an object', t => {
  t.true(typeof issueSettings === 'object')
})

test('readIssueSettings() allows adding a fallback', t => {
  const settings = readIssueSettings({type: 'jira', prefix: 'ABC'})
  t.true('type' in settings)
  t.true('prefix' in settings)
  t.true(settings.type === 'jira')
  t.true(settings.prefix === 'ABC')
})
