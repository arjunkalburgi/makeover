		// Compile scss (source dir) into css file (../Themes dir)
// Add css file to Themes folder
// Add css file to Reveal\ Files/css/theme folder 
// Add link to index.html for presentation view

module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
  		pkg: grunt.file.readJSON("package.json"),

		sass: {
			dist: {
				files: [{
					expand: true, 
					cwd: 'source', 
					src: ['*.scss'], 

					dest: '../Themes', 
					ext: '.css'
				}]
			}
		}
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.registerTask("default", ['sass']);
};