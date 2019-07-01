const ManifestPlugin = require('webpack-manifest-plugin')
const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  mode: 'production',
  entry: {
    home: './src/Home/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'static/sunrise-hub-website/build'),
    publicPath: '/sunrise-hub-website/build/',
  },
  plugins: [
    new ManifestPlugin({
      fileName: path.resolve(__dirname, './data/theme/private/assets.json'),
    }),
  ],
}
