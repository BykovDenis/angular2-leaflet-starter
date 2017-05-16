var webpack = require('webpack');
var path = require('path');
// Установка режима работы сборщика
const NODE_ENV = process.env.NODE_ENV || 'development';
// Режим очистки старых файлов билда при каждой сборке
const REFRESH = process.env.REFRESH;
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeJsPlugin = require("optimize-js-plugin");
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin'); // чистить бтлд перед пересборкой
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // для плагина по минификации и оптимизации css
var CopyWebpackPlugin = require('copy-webpack-plugin'); // копирование файлов
const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

var srcDir = 'assets';
var outputDir = 'build/themes/owm/assets/vendor/owm';
//var outputDir = 'build';

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000
    },
    devtool: 'inline-source-map',
    context: __dirname + '/assets',
    debug: true,
    entry: {
        teampage_libs: path.resolve(srcDir, 'libs.ts'),
        teampage_app: path.resolve(srcDir, 'bootstrap.ts')
    },
    output: {
        path: outputDir,
        publicPath: '/',
        filename: 'js/[name].[hash].bundle.js',
        sourceMapFilename: 'js/[name].[hash].map',
        chunkFilename: 'js/[id].[hash].chunk.js'
    },
    resolve: {
        extensions: ['', '.ts', '.component.ts', '.service.ts', '.js', '.component.html', '.component.less', '.less', '.css', '.jade']
    },
    module: {
        preLoaders: [
            { test: /\.ts$/, loader: 'tslint' }
        ],
        loaders: [
            { test: /\.jade$/, loader: "jade-loader", query: {pretty: true} },
            { test: /(\.component|\.service|)\.ts$/, loader: 'ts-loader'},
            { test: /\.component\.html$/, loader: 'raw' },
            { test: /(\.component|)\.less$/, loader: ExtractTextPlugin.extract('to-string!css!less')}, // loaders to preprocess CSS
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.(svg|png|gif|jpg)$/, loader: "file?name=themes/owm/assets/vendor/owm/img/[name].[ext]" },
            // For font-awesome, created by Turbo87:
            // https://gist.github.com/Turbo87/e8e941e68308d3b40ef6
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=themes/owm/assets/vendor/owm/fonts/[name].[ext]" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=themes/owm/assets/vendor/owm/fonts/[name].[ext]" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=themes/owm/assets/vendor/owm/fonts/[name].[ext]" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=themes/owm/assets/vendor/owm/fonts/[name].[ext]" }
        ],
        noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].[contenthash].css", {allChunks: true}),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: path.resolve(srcDir+'/jade/', 'index.jade'),
            title: 'title',
            minify:{
              collapseWhitespace: false // Переносить теги на новую строку
            }
        }),
        new ScriptExtHtmlWebpackPlugin({
          defaultAttribute: 'defer'
        }),
        new OptimizeCssAssetsPlugin({ // Оптимизация и минификация сгенерированного css кода
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(srcDir+'/data/', 'team.json'), to: 'themes/owm/assets/vendor/owm/data/'
        }]),
    ]
};

if(NODE_ENV == 'development') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: false
    }),
    new OptimizeJsPlugin({
      sourceMap: true
    })
  );
}

if(NODE_ENV == 'production') {
  module.exports.plugins.push(
    //uncomment this code for production
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: true
    }),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

if(REFRESH == 'refresh') {
  module.exports.plugins.push(
    // Чистить папку с билдом перед каждой сборкой
    new CleanWebpackPlugin('build/', {
      root: __dirname,
      verbose: true,
      dry: false,
    })
  );

}
