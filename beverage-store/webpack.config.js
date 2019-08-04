var config = {
    mode: 'development',
    entry: './main.js',

    output: {
        path: '/',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 7777
    },

    module: {
        rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /nodeModulesPath/
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader'
      },
      {
        test: /\.(ttf|woff2|eot|woff|png|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModulesPath/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
    }
}

module.exports = config;