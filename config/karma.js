module.exports = function(config){
  config.set({

    basePath : '../',
    autoWatch : true,
    frameworks: ['jasmine'],
    // logLevel: 'debug',
    browsers : ['Chrome'],

    files : [
      'app/vendor/angular/angular.js',
      'app/vendor/angular-route/angular-route.js',
      'app/vendor/angular-resource/angular-resource.js',
      'app/vendor/angular-animate/angular-animate.js',
      'app/vendor/angular-mocks/angular-mocks.js',
      'app/**/app.js',
      'app/components/**/*.js',
      'app/states/**/*.js'
    ],
    
    plugins : [
            'karma-chrome-launcher',
            // 'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};