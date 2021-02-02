var VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode:'development',
	entry:'./src/main.js',
	output:{
		path:__dirname + '/dist',
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin(),
		new VueLoaderPlugin()
	]
}