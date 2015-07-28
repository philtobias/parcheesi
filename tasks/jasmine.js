module.exports = {
  unit: {
    src: '<%= pkg.config.buildDir %>/**/*.js',
    options: {
      specs: 'tests/unit/**/*.spec.js',
      outfile: 'tests/_SpecRunner.html',
      vendor: ['node_modules/jasmine-ajax/lib/mock-ajax.js']
    }
  }
};