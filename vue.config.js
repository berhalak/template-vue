module.exports = {
	chainWebpack: config => {
		config.module
			.rule('vue')
			.use('vue-strict')
			.loader('vue-strict');
	},
	runtimeCompiler: true,
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/style/global.scss";`
			}
		}
	}
}