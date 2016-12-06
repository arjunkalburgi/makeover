// Add link to index.html for presentation view

module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
  		pkg: grunt.file.readJSON("package.json"),

  		// Compile scss (source dir)
  		// Place in '../Themes dir' and 'Reveal\ Files/css/theme'
		sass: {
			options: {
				compress: false,
				sourcemap: 'none'
			},
			dist: {
				files: [{
					expand: true, 
					cwd: 'source', 
					src: ['*.scss'], 

					dest: '../Themes', 
					ext: '.css'
				},{
					expand: true, 
					cwd: 'source', 
					src: ['*.scss'], 

					dest: '../Reveal\ Files/css/theme', 
					ext: '.css'
				}]
			}
		}
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.registerTask("default", ['sass']);
};