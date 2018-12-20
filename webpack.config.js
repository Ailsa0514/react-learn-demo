
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


const htmlPlugin = new HtmlWebPackPlugin({
	template : path.join(__dirname,"index.html"),
	filename : "index.html"
})

module.exports = {
	 mode: "development",
	 plugins: [
       htmlPlugin
	 ],
	 module: {
		//  配置可以解析打包的文件
	 	rules: [
            { 
            	test: /\.js|jsx$/,          //规则
            	use:['babel-loader'],			//使用babel-loader
            	exclude: /node_modules/     //一定要添加排除项目
			},

			{
				test: /\.css$/,          //规则是以$/结尾的
				use:['style-loader',"css-loader"],			//执行顺序，是从右往左
				// css-loader ? modules    ?后面为追加的参数  modules  表示为普通的css样式表启用模块化 
				// localIdentName=[path][name]-[local]-[hash:5] 本地样式表模块化后的名称
			},
			{
				test: /\.scss$/,          //规则是以$/结尾的
				use:['style-loader',"css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]","sass-loader"],			
				//执行顺序，是从右往左
				// css-loader ? modules    ?后面为追加的参数  modules  表示为普通的css样式表启用模块化 
				// localIdentName=[path][name]-[local]-[hash:5] 本地样式表模块化后的名称
			}
	 	]
	 },
	 resolve:{
		//  resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀  
		extensions:[".js",".jsx",".json"] ,  //默认补全以这些结尾的文件
		alias:{
			"@" : path.join(__dirname,"./src")  //配置"@"表示当前的项目根目录src
		}
	}
}