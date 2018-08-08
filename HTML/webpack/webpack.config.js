const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require("glob");
const PurifyCSSPlugin = require("purifycss-webpack");
const entry = require("./webpack_config/entry_webpack.js");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const output = require('./webpack_config/output_webpack.js');
// const devServer = require('./webpack_config/output_webpack');
// const plugin = require('./webpack_config/plugin_webpack');
// const  module = require('./webpack_config/module_webpack');
module.exports = {
    //mode两种样式：development开发模式和production产品模式
    mode: 'development',
    //入口文件配置
    entry: entry,
    //出口文件配置
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        publicPath:'http://localhost:8080/'
    },
    //模块：例如解读css，图片如何转换，压缩
    module: {
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader'] //css合并
                use:ExtractTextPlugin.extract({           //css 分离
                    fallback: "style-loader",
                    use:[{
                        loader: "css-loader",
                        options: {importLoader:1}    //css加前缀
                    },'postcss-loader']
                })
            },{                     //背景图片打包
                test:/\.(png|jpg|gif|jpeg)$/i,//加i合并大小写
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,//图片小于500B将会生成BASE64字符串，大于500B将会生成图片于指定文件夹
                        outputPath:'images/'//图片导出文件夹
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.scss/,
                use:[           //scss打包到js
                    {
                        loader:'style-loader'
                    },{
                        loader:'css-loader'
                    },{
                        loader:'sass-loader'
                    }]
                // use:ExtractTextPlugin.extract({      //scss分离到css
                //     use:[{
                //         loader:'css-loader'
                //     },{
                //         loader:'sass-loader'
                //     }],
                //     fallback:'style-loader'
                // })
            }, {                     //es6转es5
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["es2015"]
                    }
                }
            }
            ]
    },
    //插件：用于生产模块和各项功能
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({  //网页打包
            filename:'index1.html',//打包后的html文件名
            chunks:['index'],//选择该页面所需要引入的js文件，与entry对应
            minify:{
                removeAttributeQuotes:true//去双引号
            },
            hash:true,
            template:'./src/index.html'   //html源文件路径
        }),
        //多个页面
        // new HtmlPlugin({      //网页打包
        //     filename:'index2.html',
        //     chunks:['index2'],
        //     minify:{
        //         removeAttributeQuotes:true
        //     },
        //     hash:true,
        //     template:'./src/index2.html' //html路径
        // })
        new ExtractTextPlugin("css/style.css"),
        new PurifyCSSPlugin  ({    //清除为使用的css  （css选择器带有标签的样式无法清除）
            paths: glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin('LG专属'), //打包注释
        new webpack.ProvidePlugin({    //引入JQuery
            $: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from : __dirname + '/src/public',
            to:'public'
        }])
    ],
    //配置开发服务功能
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8080',
        compress:true,
        hot:true,
        open:true  //自动打开网页
    }
};