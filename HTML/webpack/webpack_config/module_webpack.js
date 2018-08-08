//模块：例如解读css，图片如何转换，压缩
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const module_webpack ={
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
    ]};
module.exports = module_webpack;