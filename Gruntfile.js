module.exports = function (grunt) {
    grunt.initConfig({
    less: {
        development: {
            files: {
                'dist/style.css': 'src/styles/main.less'
            }
        }
    },
    uglify: {
        build: {
            src: 'src/scripts/soma.js',
            dest: 'dist/scripts/soma.min.js'
        }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};