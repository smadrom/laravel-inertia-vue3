const path = require('path')

module.exports = {
    output: {chunkFilename: "js/[name].js[hash]"},
    resolve: {
        alias: {
            "@": path.resolve("resources/js"),
        },
    },
}
