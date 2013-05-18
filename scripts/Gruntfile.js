module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib');
    grunt.initConfig({
        concat: {
            js: {
                src: ["global.js", './js/*.js', './classes/*.js', "models.js", "views.js", "controllers.js"],
                dest: 'gpeb.js'
            }
        },
        uglify: {
            build: {
                src: 'gpeb.js',
                dest: 'gpeb.min.js'
            }
        },
        watch: {
            js: {
                files: ['./global.js', './script.js', './classes/*.js'],
                tasks: ["concat", "uglify"]
            }
        }
    });
    grunt.registerTask('default', ["concat", "uglify"]);
};