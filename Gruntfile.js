module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        'dart-sass': {
            target: {
              files: [{
                expand: true,
                cwd: 'sass/',
                src: ['*.scss'],
                dest: ['css'],
                ext: '.css'
              }]
            }
          },

        watch: {
            grunt: {
                options: {
                    reload: true
                },
                files: ['Gruntfile.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-dart-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};