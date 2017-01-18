
const jsonfile = require('jsonfile')

const runTests = require('./lib/run-tests')
const clearLog = require('./lib/clear-log')

runTests('/usr/src/app/tests', (tests, results) => {
    let reportsPath = '/usr/src/reports/'
    if (results.hasErrors) {
        let reportPath = reportsPath + Date.now() + '.failed.json'
        jsonfile.writeFileSync(reportPath, results, {spaces: 2})
        clearLog('SHIT HAPPENS :-(', reportPath)
    } else {
        let reportPath = reportsPath + Date.now() + '.json'
        jsonfile.writeFileSync(reportPath, results, {spaces: 2})
        clearLog('Everything was good today!', reportPath)
    }
})
