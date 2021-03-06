// To make coverage work add browserify-istanbul and browserify section of config.
var istanbul = require("browserify-istanbul");

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jquery-3.2.1', 'jasmine', 'browserify'],
    files: [
      'js/*.js',
      'spec/*-spec.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'js/*.js': [ 'browserify'],
      'spec/*.js': ['browserify'],
      './build/js/*.js': ['coverage']
    },
    plugins: [
      'karma-jquery',
      'karma-browserify',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-coverage'
    ],
    browserify: {
      transform: [
        [
          istanbul({
          ignore: ["node_modules/**", "**/*.spec.js", "**/*-interface.js"],
          includeUntested: false,
          defaultIgnore: true
          }),
          { global: true }
        ]
      ]
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
