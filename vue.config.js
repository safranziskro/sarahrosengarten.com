module.exports = {
    lintOnSave: true,
    configureWebpack: {
        output: {
            path: __dirname + "/dist"
        }
    },
    devServer: {
        disableHostCheck: true
    }
};