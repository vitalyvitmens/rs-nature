const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.png'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
}

// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// module.exports = {
//   // указываем режим сборки, который будет зависеть от переменной окружения NODE_ENV
//   mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
//   // указываем входную точку приложения
//   entry: './src/index.js',
//   // указываем выходную точку и имя файла сборки
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   devServer: {
//     port: 3000,
//     open: true,
//     contentBase: path.join(__dirname, 'dist'),
//   },
//   // настраиваем плагины
//   plugins: [
//     // плагин для генерации HTML файла с подключенным скриптом
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//     }),
//     // плагин для извлечения CSS из JS и создания отдельного файла стилей
//     new MiniCssExtractPlugin({
//       filename: 'style.css',
//     }),
//   ],
//   // настраиваем загрузчики
//   module: {
//     rules: [
//       // правило для обработки CSS файлов
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//       // правило для обработки Sass файлов
//       {
//         test: /\.s[ac]ss$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf|ico|mp3|wav)$/i,
//         type: 'asset/resource',
//         generator: {
//           filename: 'assets/[name].[hash][ext]',
//         },
//       },
//     ],
//   },
// }
