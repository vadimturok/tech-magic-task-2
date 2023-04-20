const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = (envVariables) => {
    const {env} = envVariables
    const envConfig = require(`./webpack.${env}.js`)
    return merge(commonConfig, envConfig)
}