const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css',],
    alias: {
      '@': path.join(__dirname, '..', 'src'),
    },
  },
  module: {
    // loaders: [
    //   {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
    //   {loader: 'style-loader!css-loader', test: /\.css$/},
    //   {loader: 'url-loader', test: /\.gif$/},
    //   {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
    // ],
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },{
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader",  "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
