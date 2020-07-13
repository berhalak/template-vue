const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const DedupPlugin = require('@berhalak/dedup-resolve-webpack-plugin');

module.exports = {
	runtimeCompiler: true,
	devServer: {
		disableHostCheck: true,
		port: 80,
		// proxy: {
		// 	'^/api': {
		// 		target: 'http://localhost:5001/api',
		// 		ws: true,
		// 		changeOrigin: true
		// 	}
		// },
	},
	chainWebpack: config => {
		config.module
			.rule('vue')
			.use('vue-strict')
			.loader('vue-strict');
	},
	// keep class names doesn't work, so remove for now
	configureWebpack: {
		resolve: {
			symlinks: false,
			plugins: [new DedupPlugin({ path: path.resolve(__dirname, "node_modules") })],
			alias: {
				// "domain": path.resolve(__dirname, '../domain/src/index.ts')
			}
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						keep_classnames: true,
						keep_fnames: true,
					},
				}),
			]
		}
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/style/global.scss";`
			}
		}
	}
}