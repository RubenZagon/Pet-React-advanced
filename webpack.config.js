const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const path = require('path');

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      short_name: 'Petgram 😺',
      description: 'Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('Icons'),
          ios: true,
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          // Dirección desde donde está sacando las imagenes
          urlPattern: new RegExp('https://(res.cloudinary.com | images.unplash.com)'),
          // Primero mirará si el recurso está en al caché, antes que en la red
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          // Dirección desde donde está desplegado el servidor
          urlPattern: new RegExp('https://petgram-server-ruben.now.sh'),
          handler: 'NetworkFirstconst HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n' +
            'const WebpackPwaManifestPlugin = require(\'webpack-pwa-manifest\');\n' +
            'const WorkboxWebpackPlugin = require(\'workbox-webpack-plugin\');\n' +
            '\n' +
            'const path = require(\'path\');\n' +
            '\n' +
            'module.exports = {\n' +
            '  output: {\n' +
            '    filename: \'app.bundle.js\',\n' +
            '    publicPath: \'/\'\n' +
            '  },\n' +
            '  plugins: [\n' +
            '    new HtmlWebpackPlugin({\n' +
            '      template: \'src/index.html\'\n' +
            '    }),\n' +
            '    new WebpackPwaManifestPlugin({\n' +
            '      name: \'Petgram - Tu app de fotos de mascotas\',\n' +
            '      short_name: \'Petgram 😺\',\n' +
            '      description: \'Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente\',\n' +
            '      background_color: \'#fff\',\n' +
            '      theme_color: \'#b1a\',\n' +
            '      icons: [\n' +
            '        {\n' +
            '          src: path.resolve(\'src/assets/icon.png\'),\n' +
            '          sizes: [96, 128, 192, 256, 384, 512],\n' +
            '          destination: path.join(\'Icons\'),\n' +
            '          ios: true,\n' +
            '        }\n' +
            '      ]\n' +
            '    }),\n' +
            '    new WorkboxWebpackPlugin.GenerateSW({\n' +
            '      runtimeCaching: [\n' +
            '        {\n' +
            '          // Dirección desde donde está sacando las imagenes\n' +
            '          urlPattern: new RegExp(\'https://(res.cloudinary.com | images.unplash.com)\'),\n' +
            '          // Primero mirará si el recurso está en al caché, antes que en la red\n' +
            '          handler: \'CacheFirst\',\n' +
            '          options: {\n' +
            '            cacheName: \'images\'\n' +
            '          }\n' +
            '        },\n' +
            '        {\n' +
            '          // Dirección desde donde está desplegado el servidor\n' +
            '          urlPattern: new RegExp(\'https://petgram-server-ruben.now.sh\'),\n' +
            '          handler: \'NetworkFirst\',\n' +
            '          options: {\n' +
            '            cacheName: \'api\'\n' +
            '          }\n' +
            '        }\n' +
            '      ]\n' +
            '    })\n' +
            '  ],\n' +
            '  module: {\n' +
            '    rules: [\n' +
            '      {\n' +
            '        test: /\\.js$/,\n' +
            '        exclude: /node_modules/,\n' +
            '        use: {\n' +
            '          loader: \'babel-loader\',\n' +
            '          options: {\n' +
            '            presets: [\n' +
            '              \'@babel/preset-env\',\n' +
            '              \'@babel/preset-react\'\n' +
            '            ]\n' +
            '          }\n' +
            '        }\n' +
            '      }\n' +
            '    ]\n' +
            '  }\n' +
            '};\n',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
};
