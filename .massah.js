module.exports = function(yargs) {
    
    yargs.string('browserstack-user')
    yargs.string('browserstack-key')
    yargs.string('browserstack-local')
    yargs.string('runner')
    yargs.string('browser')
    yargs.string('os')
    yargs.string('os-version')
    yargs.string('browser-version')
    yargs.string('resolution')

    return {
        runner: yargs.argv.runner || process.env.MASSAH_RUNNER || 'vanilla',
        headless: false,
        match: {
            grep: '@dontRun',
            invert: true
        },
        bail: true,
        split: {
            runner: yargs.argv['split-runner'] || process.env.MASSAH_SPLIT_RUNNER || 0,
            total: yargs.argv['split-total'] || process.env.MASSAH_SPLIT_TOTAL || 0,
        },
        browserstack: { 
            user: yargs.argv['browserstack-user'] || process.env.BROWSERSTACK_USER,
            key: yargs.argv['browserstack-key'] || process.env.BROWSERSTACK_KEY,
            localBinaryWait: yargs.argv['browserstack-local-wait'] || process.env.BROWSERSTACK_LOCAL_WAIT,
            useLocalBinary: (yargs.argv['browserstack-use-local'] || process.env.BROWSERSTACK_USE_LOCAL || 'true') === 'true'
        },
        capabilities: {
            browser: yargs.argv.browser || process.env.MASSAH_BROWSER || 'firefox',
            os: yargs.argv.os || process.env.MASSAH_OS,
            os_version: yargs.argv['os-version'] || process.env.MASSAH_OS_VERSION,
            browser_version : yargs.argv['browser-version'] || process.env.MASSAH_BROWSER_VERSION,
            resolution: yargs.argv.resolution || process.env.BROWSERSTACK_RESOLUTION,
            project: yargs.argv['project'] || process.env.MASSAH_PROJECT,
            build: yargs.argv['build'] || process.env.MASSAH_BUILD
        }
            
    }

}
