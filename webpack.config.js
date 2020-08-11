const webpack = require('webpack'); //to access built-in plugins
const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require("html-webpack-plugin");

//const path = require('path');
const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            }
          }
        ],
        include: /\.module\.css$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          { 
            loader: 'postcss-loader',
            options: {
                importLoaders: 2,
                ident: 'postcss',
                plugins: () => [
                    autoprefixer({})
                ]
            }
          }
        ],
        exclude: [/node_modules/, /\.module\.css$/]
      },
    ]
  },
  
    plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};