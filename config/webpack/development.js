process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('webpack')
const environment = require('./environment')

module.exports = environment.toWebpackConfig()
