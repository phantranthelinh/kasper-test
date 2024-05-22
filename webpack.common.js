module.exports = {
	resolve: {
		extensions: ['.js', '.jsx'], // File extensions to resolve
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					outputPath: 'assets',
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				use: [
				  {
					loader: path.resolve('path/to/loader.js'),
					options: {
					  /* ... */
					},
				  },
				],
			  },
		],
	},
	resolveLoader: {
		modules: ['node_modules', path.resolve(__dirname, 'loaders')],
	  },
};
