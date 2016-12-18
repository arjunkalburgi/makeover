module.exports = function(grunt) {
  
  var themename = grunt.option('theme'); 
  var themelink = "<a href='#'' onclick=\"document.getElementById('theme').setAttribute('href','themes/"+themename+".css'); return false;\">"+themename.charAt(0).toUpperCase()+themename.slice(1)+"</a>, \n\
		<!-- build:template \n\
		<%= newTheme %> \n\
		/build -->"

  grunt.initConfig({
  		pkg: grunt.file.readJSON("package.json"),

  		// 1. Compile scss (given theme)
  		// 2. Place in '../Themes' and 'Reveal\ Files/css/theme' directories
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
		},

		// 3. Add link to index.html for presentation view
		processhtml: {
			options: {
				data: {
					newTheme: themelink
				}
			},
			dist: {
				files: {
					'../index.html': ['../index.html']
				}
			}
		}

  });

  grunt.registerTask('alldone', function() {
  	// 4. Tell user to PR!
  	grunt.log.write("You've made a new theme! Make sure to add "+themename.charAt(0).toUpperCase()+themename.slice(1)+" to the makeover💄 library by submitting a Pull Request at https://github.com/askalburgi/makeover\n")
  })
  grunt.loadNpmTasks("grunt-processhtml");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.registerTask("default", ['sass', 'processhtml', 'alldone']);
};