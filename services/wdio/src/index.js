let browser = require('./wdio').Browser;

console.log('Hello Webdriver1');

browser.init()
    .url('http://google.com')
    .waitForVisible('input[name="btnK"]', 10000)
    .saveScreenshot('/usr/src/screenshot/google.png')


setInterval(() => {}, 5000);
