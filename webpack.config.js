const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
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
