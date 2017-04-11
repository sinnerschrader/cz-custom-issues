# CZ CUSTOM ISSUES

A commititizen helper with advanced issue config.

[![npm](https://img.shields.io/npm/v/cz-custom-issues.svg?style=flat-square)](https://www.npmjs.com/package/cz-custom-issues)
[![Travis branch](https://img.shields.io/travis/sinnerschrader/cz-custom-issues/master.svg?style=flat-square)](https://travis-ci.org/sinnerschrader/cz-custom-issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/sinnerschrader/cz-custom-issues/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/sinnerschrader/cz-custom-issues.svg?style=flat-square)](https://github.com/sinnerschrader/cz-custom-issues/issues)
[![Coveralls](https://img.shields.io/coveralls/sinnerschrader/cz-custom-issues.svg?style=flat-square)](https://coveralls.io/github/sinnerschrader/cz-custom-issues)
[![bitHound](https://img.shields.io/bithound/code/github/sinnerschrader/cz-custom-issues.svg?style=flat-square)](https://www.bithound.io/github/sinnerschrader/cz-custom-issues)
[![bitHound](https://img.shields.io/bithound/devDependencies/github/sinnerschrader/cz-custom-issues.svg?style=flat-square)](https://www.bithound.io/github/sinnerschrader/cz-custom-issues)

[![Babel](https://img.shields.io/badge/babel-stage--2-f5da55.svg?style=flat-square)](http://babeljs.io/docs/plugins/preset-stage-2/)
[![code style xo](https://img.shields.io/badge/code_style-XO-64d8c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-44aa44.svg?style=flat-square)](https://github.com/conventional-changelog/standard-version)
[![test ava](https://img.shields.io/badge/test-🚀_AVA-0e1d5c.svg?style=flat-square)](https://github.com/avajs/ava)

[![yarn](https://img.shields.io/badge/yarn-friendly-2c8ebb.svg?style=flat-square)](https://yarnpkg.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-44aa44.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

<!-- toc -->

- [Example output](#example-output)
- [Links](#links)
- [Getting started](#getting-started)
- [Setup](#setup)
- [Config](#config)
  * [types](#types)
  * [scopes](#scopes)
  * [scopeOverrides](#scopeoverrides)
  * [allowCustomScopes](#allowcustomscopes)
  * [allowBreakingChanges](#allowbreakingchanges)
- [Developing](#developing)
- [Similar projects / inspiration](#similar-projects--inspiration)

<!-- tocstop -->

![example gif](https://raw.githubusercontent.com/sinnerschrader/cz-custom-issues/master/cz.gif)

## Example output

The output follow the [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
and is easy to read for reviewers or project managers.

```shell
feat(new):  added config

options can now be changed

ISSUES CLOSED:
 - #12: add options
 - #14: configuration

BREAKING CHANGE: new options
```


## Links
* [Documentation](https://sinnerschrader.github.io/cz-custom-issues/api/)
* [Homepage](https://sinnerschrader.github.io/cz-custom-issues/)

## Getting started

```
## use yarn
yarn add cz-custom-issues -D
## or npm
## npm i cz-custom-issues -D
```

## Setup

to setup the plugin simply extend you config in your `package.json`.

* The "type" is currently optional and simply serves as an indicator. Keep this setting to make future updates easier.
* The "prefix" can be used to add a project prefix to issue (e.g. jira issues): `ABC // => #ABC-123`

This allows easy listing of issues. The prefix will be added automatically.

`23: server crashes, 27: server slows down, 21: page not available`

```
ISSUES CLOSED:
 - #ABC-23: server crashes
 - #ABC-27: server slows down
 - #ABC-21: page not available
```

![example gif](https://raw.githubusercontent.com/sinnerschrader/cz-custom-issues/master/cz2.gif)

```json
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-custom-issues"
    },
    "cz-custom-issues": {
      "issues": {
        "type": "jira",
        "prefix": "ABC"
      },
      "config": "./cz-config.js"
    }
  }
}
```

## Config

You can add your own flow to comitizen. See [cz-customizable](https://github.com/leonardoanalista/cz-customizable) for the original implementation.

### types

Custom commit types

- types
  - [type]
    - name (used in prompt as info, use whitespaces and newlines for alignment)
    - value (used for commit message/prefix)

```js
{
  types: [
    {
      value: 'feat',
      name: 'feature: Adds a new feature'
    },
    {
      value: 'fix',
      name: 'bugfix:  Fixes a bug'
    }
    // ...
  ]
}
```

### scopes

Custom default scopes

- scopes
  - [type]
    - name (used in prompt and commit message)

```js
{
  scopes: [
    { name: 'client' },
    { name: 'server' }
    // ...
  ]
}
```

### scopeOverrides

Override scopes per type

- scopeOverrides
  - [type]
    - name (used in prompt and commit message)

```js
{
  scopeOverrides: {
    fix: [{ name: 'windows' }, { name: 'osx' }, { name: 'linux' }],
    docs: [{ name: 'new' }, { name: 'change' }, { name: 'readme' }],
    style: [{ name: 'format' }, { name: 'whitespace' }, { name: 'fix' }]
  }
}
```

### allowCustomScopes

Toggle custom scopes

- allowCustomScopes
  - Boolean

```js
{
  allowCustomScopes: true
}
```

### allowBreakingChanges

Limit breaking chages to types

- allowBreakingChanges
  - [...types]

```js
{
  allowBreakingChanges: ['feat', 'fix']
}
```

Take a look at the [example config file](https://github.com/sinnerschrader/cz-custom-issues/blob/master/cz-config.example.js)

## Developing

To contribute make sure all test pass and the coding style is consistent

* `test`: runs test and lints files
* `run lint`: lints javascript files

## Similar projects / inspiration

- [cz-customizable](https://github.com/leonardoanalista/cz-customizable) + credits (forked from this project)
- [cz-jira-simple-changelog](https://github.com/jalopez/cz-jira-simple-changelog) (limited to jira issues)
- ...probably several others


