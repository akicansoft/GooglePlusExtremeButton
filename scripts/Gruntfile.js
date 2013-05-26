module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib');
    grunt.initConfig({
        concat: {
            js: {
                src: ["global.js", './js/*.js', './classes/*.js', "models.js", "views.js", "controllers.js", "script.js"],
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
                files: ['./global.js', './classes/*.js', './models.js', './views.js', './controllers.js', "./script.js"],
                tasks: ["concat", "uglify"]
            }
        }
    });
    grunt.registerTask('default', ["concat", "uglify"]);
};