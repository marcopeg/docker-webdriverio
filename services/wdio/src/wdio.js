const webdriverio = require('webdriverio');
let options = {
    host: 'selenium',
    port: 4444,
    desiredCapabilities: {
        browserName: 'chrome'
    },
    screenshotPath: '/usr/src/screenshot'
};
let browser = webdriverio.remote(options);

module.exports.Browser = browser;
