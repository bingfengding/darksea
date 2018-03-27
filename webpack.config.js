const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin")
const cleanWebpackPlugin = require("clean-webpack-plugin")
const config = {
  target: 'web',
  entry: {
    index:["./src/app.js"]
  }
}
