const webdriverio = require('webdriverio')

const webdriverConf = {
    host: 'selenium',
    port: 4444,
    desiredCapabilities: {
        browserName: 'chrome'
    },
}


module.exports = testHandler => new Promise((resolve, reject) => {
    try {
        testHandler(webdriverio.remote(webdriverConf).init())
            .then(resolve)
            .catch(reject)
    } catch(e) {
        reject(e.message)
    }
})
