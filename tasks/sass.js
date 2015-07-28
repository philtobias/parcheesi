module.exports = {
  options: {
    style: 'expanded'
  },
  dist: {
    files: {
      '<%= pkg.config.buildDir %>/css/style.css': '<%= pkg.config.buildDir %>/css/sass/style.scss'
    }
  }
};
