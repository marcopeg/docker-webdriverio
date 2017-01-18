// 
// module.exports = browser => new Promise((resolve, reject) => {
//     console.log('Google Test');
//     browser.url('http://google.com')
//         .waitForVisible('input[name="btnK"]', 5000)
//         .saveScreenshot('/usr/src/screenshot/google1.png')
//
//         .end()
//         .then(resolve)
//         .catch(reject)
// })

module.exports = browser => browser.url('http://google.com')
    .waitForVisible('input[name="btnK"]', 5000)
    .saveScreenshot('/usr/src/screenshot/google1.png')
    .end()
