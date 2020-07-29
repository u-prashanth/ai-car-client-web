const withSass = require('@zeit/next-sass')

module.exports = {
    poweredByHeader: false,
    target: 'serverless',
    distDir: 'dist/release'
}

// module.exports = withSass()