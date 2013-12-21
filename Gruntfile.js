'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> built on <%= grunt.template.today("yyyy-mm-dd") %> : Based on https://github.com/simsalabim/sisyphus */\n'
      },
      build: {
        src: 'js/sisyphus.js',
        dest: 'js/sisyphus.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};