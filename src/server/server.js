const fs = require('fs')
const readYamlFile = require('read-yaml-file')
const { startServer } = require('./getServer')

const indexHtml = './dist/index.html'
const config = './config/local.yaml'
const jsBundle = '/bundle.js'

readYamlFile(config).then((config) => {
    console.log(config)
    const link = `${config.protocol}://${config.serverName}:${config.port}${jsBundle}`

    fs.readFile(indexHtml, 'utf8', function (err, data) {
        if (err) {
            return console.log(err)
        }
        const result = data.replace(/{TO_REPLACE_WITH_LINK}/g, link)

        fs.writeFile(indexHtml, result, 'utf8', function (err) {
            if (err) return console.log(err)
        })
    })

    startServer(config.port, config.pagesUrl, config.bundleUrl)
})
