'use strict';

module.exports = function (grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: {
            dist: 'build/media',
            node: 'node_modules'
        },
        copy: {
            js: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/jquery/dist/',
                    src: '*.*',
                    dest: 'build/media/js/vendor/jquery/'
                }]
            },
			style: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/lesshat/build/',
					src: 'lesshat.less',
					dest: '<%= config.dist %>/style/vendor/'
                },
				{
                    expand: true,
                    cwd: 'node_modules/normalize.css/',
					src: 'normalize.css',
					dest: '<%= config.dist %>/style/vendor/'
                }]
            },
        },
		less: {
            dist: {
                options: {
                    compress: true,
                    cleancss: true
                },
                files: {
                    '<%= config.dist %>/style/css/main.css': '<%= config.dist %>/style/less/main.less'
                }
            }
        },
		watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['<%= config.dist %>/style/less/**/*.less'],
                tasks: ['less:dist']
            }
        }
    });
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//Default task(s).
	grunt.registerTask('default', [
        'copy',
        'less:dist',
        'watch'
    ]);
};