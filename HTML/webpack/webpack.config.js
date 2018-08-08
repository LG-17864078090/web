const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require("glob");
const PurifyCSSPlugin = require("purifycss-webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entry_webpack = require("./webpack_config/entry_webpack.js");
const output_webpack = require('./webpack_config/output_webpack.js');
const  module_webpack = require('./webpack_config/module_webpack.js');
const plugin_webpack  = require('./webpack_config/plugin_webpack.js');
const devServer_webpack = require('./webpack_config/decServer_webpack.js');

module.exports = {
    //mode两种样式：development开发模式和production产品模式
    mode: 'development',
    //入口文件配置
    entry: entry_webpack,
    //出口文件配置
    output: output_webpack,
    //模块：例如解读css，图片如何转换，压缩
    module: module_webpack,
    //插件：用于生产模块和各项功能
    plugins:plugin_webpack,
    //配置开发服务功能
    devServer:devServer_webpack
};