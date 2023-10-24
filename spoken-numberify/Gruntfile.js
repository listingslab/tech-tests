module.exports = function(grunt) {
  
	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js', 'public/js/main.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		uglify: {
			my_target: {
				files: {
					'public/js/spokenNumberify.min.js': 
					[
						'src/main.js',
						'src/validate.js',
						'src/convertNumber.js',
						'src/createWords.js'
					]
				}
			}
		},
		watch: {
			files: ['Gruntfile.js', 'src/**/*.js'],
			tasks: ['jshint', 'uglify']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint']);

};