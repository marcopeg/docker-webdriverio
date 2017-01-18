# Docker Webdriver.io

Quick start to execute [webdriver.io](http://webdriver.io/) apps within [Docker](https://www.docker.com/).

## Run the project

In order to run the project you need `docker-compose` and [`humble-cli`](https://github.com/marcopeg/humble-cli) on your machine.

```
humble up
```

The `/data` is being used for all volatile files such `node_modules` and test results (screenshot or similar), it should be gitignored.

**NOTE:** If you don't have `humble-cli` (aka: if you use Windows) you may try to run:

```
HUMBLE_DATA="$PWD/data" docker-compose -f docker-compose.yml -f docker-compose.development.yml up
```
