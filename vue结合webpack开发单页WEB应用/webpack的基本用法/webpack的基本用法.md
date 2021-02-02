*******************
## webpack的安装
*******************
#### 在安装webpack之前的工作
1. 首先需要在计算机中安装node.js的最新版本。(node.js的安装在这里就不说了)
2. 阅读了上一个文件夹下的*[npm使用注意事项.md](..\npm使用注意事项.md)
#### 具体安装步骤如下：
1. 打开命令提示符窗口，对webpack和webpack-cil进行全局安装
```
npm install webpack webpack-cil -g
```
>webpack-cil工具用于在命令行中运行webpack。
2. 在指定路径“E:\MR\ym\12”（不一定要用这个）下创建项目文件夹app,然后在命令提示符窗口中将当前路径切换到“E:\MR\ym\12\app”，接下来使用npm命令初始化项目
```
npm init
```
3. 对webpack进行本地安装
```
npm install webpack --save-dev
```
*******************
## 基本使用
*******************

下面通过一个简单应用了解通过webpack命令实现打包的过程。在app文件夹下创建entry.js文件和index.html文件。entry.js文件为项目的入口文件，代码如下：
```
document.write("Hello webpack");
```
index.html文件的代码如下：
```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
	</head>
	<body>
		<script type="text/javascript" src="bundle.js"></script>
	</body>
</html>
```
接下来使用webpack命令进行打包处理,在命令提示行中输入命令如下：
```
webpack entry.js -o bundle.js --mode=development
```
输入命令后，单击enter键，这时会编译entry.js文件并生成bundle.js文件。在浏览器中打开index.html文件即可看到结果。
#### 已经写好的js模块的引入
下面在app文件夹下面创建另一个javascript文件module.js,代码如下：
```
var hello = "欢迎访问本网站！";
module.exports = hello //指定对外接口
```
对entry.js文件进行修改，基于CommonJS规范引用module.js文件，代码如下：
```
var str = require("./module.js"); //引入module.js文件，或者使用ES6语法引入
import hello from "./module.js" //这个是ES6语法，必须经过webpack编译后才可以使用
document.write(str);
```
做完上述步骤后，再次使用webpack命令进行打包处理。
>**webpack的作用：**
>1. 能够处理JS文件的相互依赖关系。
>2. 能够处理JS的兼容问题，把高级的、浏览器不识别的语法，转换为低级的、浏览器能正常识别的语法。
#### webpack配置文件
>在应用webpack进行打包操作时，除了在命令行传入参数之外，还可以通过指定的配置文件来执行。在项目根目录下不传入参数，直接调用webpack命令，webpack会默认调用项目根目录下的配置文件webpack.config.js。

该文件中的配置选项需要通过module.exports导出，格式如下：
```
module.exports = {
	// 配置选项
}
```
**这里介绍几个常用的配置选项的含义及其使用方法。**
1. mode
[点击查看mode选项使用说明](https://v4.webpack.docschina.org/concepts/mode/)
2. entry
[点击查看entry选项使用说明](https://v4.webpack.docschina.org/concepts/entry-points/)
3. output
[点击查看output选项使用说明](https://v4.webpack.docschina.org/concepts/output/)
4. module
该选用用于对加载的模块进行配置。通过module.rules指定规则数组。这些规则可以对模块应用加载器。规则是一个对象，该对象有以下几个常用的属性。
>* **test**
该属性值是一个正则表达式。webpack通过它去匹配相应的文件，通常用来匹配文件的后缀名。
>* **exclude**
该属性用于指定不被加载器处理的文件。
>* **include**
该属性值通常是一个路径数组，这些路径会被加载器处理。
>* **loader**
loader是基于webpack的加载器。webpack本身只能处理js模块，如果要处理其他类型的模块（文件），就需要使用loader（加载器）进行转换。
该属性用于指定应用test属性匹配到的文件对应的加载器，多个加载器之间使用“！”分隔。

使用示例代码：
```
module:{
	rules:[
		{
			test:/\.css$/, //匹配css文件
			loader:'style-loader!css-loader'或者use:['style-loader','css-loader']
			
			
		}
	]
}
```
5. plugins
[点击查看plugins选项使用说明](https://v4.webpack.docschina.org/concepts/plugins/)

**webpack加载图片文件**
在应用中加载图片文件需要使用file-loader加载器。在命令提示符窗口中对file-loader进行安装，输入命令如下：
```
npm install file-loader --save-dev
```
自行向要修改的.css文件中引入图片后，修改配置文件webpack.config.js,修改后的代码如下：
```
var HtmlWebpackPlugin = require('html-webpack-plugin');//引入插件（这个插件需要从npm下载，
//用于生成最后的html自动引用了打包后的js文件，而不需要手动向html添加生成文件。）
module.exports = {
	mode:'development',//指定开发模式
	//入口文件配置
	entry:'./entry.js',id
	//输出配置
	output:{
		path:__dirname + '/dist',// __dirname用于获取当前文件的绝对路径
		filename:'bundle.js'// 设置输出文件名
	},
	//加载器配置
	module:{
		rules:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.(jpg|png|gif)$/,//匹配指定格式的图片文件
				loader:'file-loader',
				options:{
					name:'[path][name].[ext]'//生成的路径和文件名
				}
			}
		]
	},
	//插件配置
	plugins:[
		new HtmlWebpackPlugin()//使用插件
	]
}
```

