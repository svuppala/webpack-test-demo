// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    preprocessors: {
      'src/**/*.spec.js': ['webpack']
    },

    files: [
      'src/**/*.spec.js'
    ],

    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222',
        ]
      }
    },

    reporters: ['spec', 'kjhtml', 'coverage-istanbul', 'junit'],

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'text-summary' ],
      dir: 'dist/test/coverage',
      fixWebpackSourcePaths: true,
      thresholds: {
        global: {
          statements: 0,
          branches: 0,
          functions: 0,
          lines: 0
        }
      }
    },

    specReporter: {
      suppressSkipped: true,
      failFast: false
    },

    junitReporter: {
      outputDir: 'dist/test/reports/',
      useBrowserName: true
    },

    colors: true,
    autoWatch: false,
    singleRun: true,
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
