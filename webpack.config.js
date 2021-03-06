const path = require(`path`);
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const baseUrl = '/six-cities';

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const optimization = () => {
  const config = {
    splitChunks: {
      name: 'all',
    },
  };

  if (isProd) {
    config.minimize = true;
    config.minimizer = [new TerserWebpackPlugin(), new OptimizeCssAssetsPlugin()];
  }

  return config;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: `./index.tsx`,
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, `dist`),
    publicPath: isDev ? '' : baseUrl,
  },
  devServer: {
    contentBase: path.resolve(__dirname, `dist`),
    compress: false,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new CopyPlugin({
      patterns: [{ from: './assets/img', to: path.resolve(__dirname, `dist/img`) }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          publicPath: isDev ? '' : '/six-cities/',
        },
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file-loader',

        options: {
          name: '[name].[ext]',
          publicPath: isDev ? '' : '/six-cities/',
        },
      },
    ],
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, `src/pages`),
      containers: path.resolve(__dirname, `src/containers`),
      components: path.resolve(__dirname, `src/components`),
      reducer: path.resolve(__dirname, `src/reducer`),
      hocs: path.resolve(__dirname, `src/hocs`),
      src: path.resolve(__dirname, `src/`),
    },
    extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],
  },
  optimization: optimization(),
  devtool: isDev ? `source-map` : '',
};
