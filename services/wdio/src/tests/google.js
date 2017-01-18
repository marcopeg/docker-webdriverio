
module.exports = browser => browser.url('http://google.com')
    .waitForVisible('body', 5000)
    .saveScreenshot('/usr/src/screenshots/google.com.png')
    .then(() => 'yoho!')
