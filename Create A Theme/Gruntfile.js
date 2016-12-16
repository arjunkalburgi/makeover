/* 
Add link to index.html for presentation view
<a href="#" onclick="document.getElementById('theme').setAttribute('href','themes/solarized.css'); return false;">Solarized</a>
*/

module.exports = function(grunt) {
  
  var themename = grunt.option('theme'); 

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
					src: [themename + '.scss'],
					dest: '../Themes',
					ext: '.css'
				},{
					expand: true,
					cwd: 'source',
					src: [themename + '.scss'],
					dest: '../Reveal\ Files/css/theme',
					ext: '.css'
				}]
			}
		}
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.registerTask("default", ['sass']);
};