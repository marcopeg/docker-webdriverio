# Docker for Webdriver.io

Quick start to execute [webdriver.io](http://webdriver.io/) apps within [Docker](https://www.docker.com/).

## Run the Project

In order to run the project you need `docker-compose` and [`humble-cli`](https://github.com/marcopeg/humble-cli) on your machine.

```
humble boot
```

The `/data` is being used for all volatile files such `node_modules` and test results (screenshot or similar), it should be gitignored.

**NOTE:** If you don't have `humble-cli` (aka: if you use Windows) you may try to run:

```
docker-compose -f docker-compose.yml -f docker-compose.development.yml up
```

## Write Tests

You should write your tests in:

```
./services/wdio/src/tests
```

**NOTE:** Every javascript file in this directory will be sourced as test.

Each test file should export a test handler which will be given a reverence to a new `browser` instance:

```
/* perfectly viable test */
module.exports = browser => browser.url('http://google.com').end()
```

Each test should return a promise.

## Install NPM Modules

1. run the project
2. open a new terminal session
3. `humble exec wdio bash`
4. `npm install --save xxx`

