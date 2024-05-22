const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackCommon = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(webpackCommon, {
	name: 'server',
	target: 'node',
	entry: {
		server: path.resolve(__dirname, 'src/server/index.js'),
	},
	mode: 'production',
	externals: [nodeExternals()],
	output: {
		path: path.join(__dirname, 'build'), // Output directory
		filename: '[name].js', // Output file name
	},
	devtool: 'eval-source-map',
});
