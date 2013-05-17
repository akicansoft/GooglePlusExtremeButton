module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib');
    grunt.initConfig({
        concat: {
            js: {
                src: ['./classes/*.js', "model."],
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
                files: ['./classes/*.js'],
                tasks: ["concat", "uglify"]
            }
        }
    });
    grunt.registerTask('default', ["concat", "uglify"]);
};