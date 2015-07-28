module.exports = {
  options: '<%= pkg.jshintConfig %>',
  all: {
    src: [
      '<%= pkg.config.buildDir %>/**/*.js',
      'tests/unit/**/*.js'
    ]
  }
};
