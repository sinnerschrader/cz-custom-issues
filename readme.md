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

- [Links](#links)
- [Getting started](#getting-started)
- [Developing](#developing)
  * [Examples (serves docs-folder/gh-pages)](#examples-serves-docs-foldergh-pages)

<!-- tocstop -->

## Links
* [Documentation](https://sinnerschrader.github.io/cz-custom-issues/api/)
* [Homepage](https://sinnerschrader.github.io/cz-custom-issues/)

## Getting started

```shell
## use yarn
yarn add cz-custom-issues -D
## or npm
## npm i cz-custom-issues -D
```

## Developing

To start a dev server and start developing try the following commands

* `test`: runs test and lints files
* `run lint`: lints javascript files

### Examples (serves docs-folder/gh-pages)

**Starts a simple http-server**

```shell
npm start
```

**Starts a simple http-server and watches files**

```shell
npm run dev
```

### setup

to setup the plugin simply extend you config in your `package.json`

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

Take a look at the [example config file](https://github.com/sinnerschrader/cz-custom-issues/blob/master/cz-config.example.js) to see the available options.


