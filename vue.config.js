module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-strict')
            .loader('vue-strict');
    },

    baseUrl: undefined,
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: true,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
}