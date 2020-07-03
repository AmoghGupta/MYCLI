CLI
===



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/CLI.svg)](https://npmjs.org/package/CLI)
[![CircleCI](https://circleci.com/gh/amogh/ag-oclif/tree/master.svg?style=shield)](https://circleci.com/gh/amogh/ag-oclif/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/amogh/ag-oclif?branch=master&svg=true)](https://ci.appveyor.com/project/amogh/ag-oclif/branch/master)
[![Codecov](https://codecov.io/gh/amogh/ag-oclif/branch/master/graph/badge.svg)](https://codecov.io/gh/amogh/ag-oclif)
[![Downloads/week](https://img.shields.io/npm/dw/CLI.svg)](https://npmjs.org/package/CLI)
[![License](https://img.shields.io/npm/l/CLI.svg)](https://github.com/amogh/ag-oclif/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g CLI
$ ag-oclif COMMAND
running command...
$ ag-oclif (-v|--version|version)
CLI/1.0.0 darwin-x64 node-v12.18.0
$ ag-oclif --help [COMMAND]
USAGE
  $ ag-oclif COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ag-oclif add [FILE]`](#ag-oclif-add-file)
* [`ag-oclif hello [FILE]`](#ag-oclif-hello-file)
* [`ag-oclif help [COMMAND]`](#ag-oclif-help-command)

## `ag-oclif add [FILE]`

describe the command here

```
USAGE
  $ ag-oclif add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add.ts](https://github.com/amogh/ag-oclif/blob/v1.0.0/src/commands/add.ts)_

## `ag-oclif hello [FILE]`

describe the command here

```
USAGE
  $ ag-oclif hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ag-oclif hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/amogh/ag-oclif/blob/v1.0.0/src/commands/hello.ts)_

## `ag-oclif help [COMMAND]`

display help for ag-oclif

```
USAGE
  $ ag-oclif help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->
