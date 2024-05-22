const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
	name: 'client',
	target: 'web',
	entry: {
		client: path.resolve(__dirname, 'src/client/index.js'),
	},

	output: {
		path: path.resolve(__dirname, 'build'), // Output directory
		filename: '[name].js', // Output file name
		chunkFilename: '[name].js',
	},
	devServer: {
		port: 8080,
	},
	
	// plugins: [new HtmlWebpackPlugin({
	// 	template: ".public/index.html",
	// })],
	devtool: 'eval-source-map',
});
