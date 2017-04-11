import test from 'ava'
import {readConfigFile, configFile} from '../read-config'

test('configFile is an object', t => {
  t.true(typeof configFile === 'object')
})

test('readConfigFile() returns an object', t => {
  t.true(typeof readConfigFile() === 'object')
})
