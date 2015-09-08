  module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/b4dashboard.css': 'src/dashboard.scss'
        },
        options: {
          sourceMap: false,
        },
      }
    },
    clean: {
      dist: ['dist/','examples/dist'],
    },
    copy: {
      examples: {
        src: 'dist/*.css',
        dest: 'examples/',
      },
    },
    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        sourceMap: true,
        noAdvanced: true
      },
      core: {
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/',
            ext: '.min.css'
          }
        ]
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.scss'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'sass',
    'cssmin',
    'copy:examples'
  ]);

};