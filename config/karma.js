module.exports = function(config){
  config.set({

    basePath : '../',
    autoWatch : true,
    frameworks: ['jasmine'],
    // logLevel: 'debug',
    browsers : ['Chrome'],

    files : [
      'bower_components/angular/angular.js',
      'bower_components/ui-router/release/angular-ui-router.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-mocks/angular-mocks.js',
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