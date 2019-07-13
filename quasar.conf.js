// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
const path = require('path')

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'components'
    ],

    css: [
      'app.styl'
    ],

    extras: [
      'roboto-font',
      'material-icons',
      'fontawesome-v5'
    ],

    supportIE: true,
    preFetch: true,

    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // showProgress: false,
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      chainWebpack (chain, { isClient }) {
        chain.resolve.alias
          .merge({
            examples: path.resolve(__dirname, 'src/examples'),
            markup: path.resolve(__dirname, 'src/markup')
          })

        chain.module.rule('pug')
          .test(/\.pug$/)
          .use('pug-loader').loader('pug-plain-loader')

        const rule = chain.module.rule('md')
          .test(/\.md$/)

        rule.use('v-loader')
          .loader('vue-loader')
          .options({
            productionMode: ctx.prod,
            compilerOptions: {
              preserveWhitespace: false
            },
            transformAssetUrls: {
              video: 'src',
              source: 'src',
              img: 'src',
              image: 'xlink:href'
            }
          })

        rule.use('md-loader')
          .loader(require.resolve('./build/md-loader'))

        if (isClient) {
          chain.module.rule('eslint')
            .enforce('pre')
            .test(/\.(js|vue)$/)
            .exclude.add(/node_modules|\.md\.js/).end()
            .use('eslint-loader').loader('eslint-loader')
        }
      }
    },

    devServer: {
      https: ctx.mode.pwa === true,
      port: 9090,
      open: true // opens browser window automatically
    },

    framework: {
      all: true,

      config: {
        loadingBar: {
          color: 'amber'
        }
      }
    },

    animations: ['fadeIn', 'fadeOut'],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true
      },
      manifest: {
        name: 'Zod Quasar Documentation',
        short_name: 'Zod-Quasar-Docs',
        description: 'Quasar Framework Documentation bundled by zod',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      },
      metaVariables: {
        appleTouchIcon120: 'statics/icons/apple-icon-120x120.png',
        appleTouchIcon180: 'statics/icons/apple-icon-180x180.png',
        appleTouchIcon152: 'statics/icons/apple-icon-152x152.png',
        appleTouchIcon167: 'statics/icons/apple-icon-167x167.png',
        appleSafariPinnedTab: 'statics/icons/safari-pinned-tab.svg',
        msapplicationTileImage: 'statics/icons/ms-icon-144x144.png'
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app.docs.zod',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'zod-quasar-docs'
      }
    }
  }
}
