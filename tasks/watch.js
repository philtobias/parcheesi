module.exports = {
  options: {
    interrupt: false,
    spawn: false
  },
  js: {
    files: [
      '<%= pkg.config.buildDir %>/**/*.js'
    ],
    tasks: [
      'jshint'/*,
      'jasmine:unit'*/
    ]
  },
  sass: {
    files: [
      '<%= pkg.config.buildDir %>/**/*.scss'
    ],
    tasks: [
      'sass:dist'
    ]
  },
  unit: {
    files: [
      'tests/unit/**/*.spec.js'
    ],
    tasks: [
      'jshint'/*,
      'jasmine:unit'*/
    ]
  }
};