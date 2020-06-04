const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (env, options) => {
	const isDevelopment = options.mode == 'development';

	// For our css modules these will be locally scoped
	const CSSModuleLoader = {
		loader: 'css-loader',
		options: {
			modules: true,
			modules: {
				localIdentName: '[name]__[local]___[hash:base64:5]',
			},
			importLoaders: 2,

			sourceMap: isDevelopment,
		},
	};
	// For our normal CSS files we would like them globally scoped
	const CSSLoader = {
		loader: 'css-loader',
		options: {
			modules: 'global',
			importLoaders: 2,
			sourceMap: isDevelopment,
		},
	};
	// Our PostCSSLoader

	const PostCSSLoader = {
		loader: 'postcss-loader',
		options: {
			ident: 'postcss',
			sourceMap: isDevelopment,
		},
	};
	// Standard style loader (prod and dev covered here)

	const styleLoader = isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader;

	return {
		watch: true,
		watchOptions: {
			ignored: /node_modules/,
		},
		entry: {
			popup: './src/Popup/popup.js',
			background: './src/Background/background.js',
			content: './src/Content/index.js',
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'build'),
		},
		devtool: 'cheap-module-source-map', //required
		module: {
			rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					exclude: /\.module\.(sa|sc|c)ss$/,
					use: [styleLoader, CSSLoader, PostCSSLoader, 'sass-loader'],
				},
				{
					test: /\.module\.(sa|sc|c)ss$/,
					use: [styleLoader, CSSModuleLoader, PostCSSLoader, 'sass-loader'],
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: 'html-loader',
						},
					],
				},
			],
		},
		resolve: {
			extensions: ['.js', '.jsx', '.scss'],
		},
		plugins: [
			new CleanWebpackPlugin({
				cleanStaleWebpackAssets: false,
			}),
			new MiniCssExtractPlugin(),
			new HTMLWebpackPlugin({
				template: './src/Popup/index.html',
				filename: 'popup.html',
				chunks: ['popup'],
			}),
			new CopyPlugin({
				patterns: [{ from: './src/static' }],
			}),
		],
	};
};
