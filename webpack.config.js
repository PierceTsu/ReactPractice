/**
 * Created by DELL on 2017/2/15.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    //devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    //进出口文件配置
    entry: __dirname + '/src/js/main.js',//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    output: {//输出
        path: __dirname + '/build',//输出路径
        filename: 'bundle.js',//输出文件名
    },
    module: {//添加loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                // include:[
                //     /src/,
                //     '/node_modules/antd/dist/'
                // ],
                loader: 'style-loader!css-loader' //!在于使同一文件能够使用不同类型的loader
            },
            {
                test: /\.less$/,
                // include:[
                //     '/node_modules/antd/dist/'
                // ],
                loader: 'css-loader!less-loader'
            }

        ]
    },
    plugins: [
        //new插件的实例，并传入相关的参数
        new HtmlWebpackPlugin({
            template: __dirname + "/src/html/index.tmpl.html"
        }),
        // new uglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    //服务器依赖包配置
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        host:'0.0.0.0',
        port:8866,
        hot: true,
        inline: true//实时刷新
    }
};