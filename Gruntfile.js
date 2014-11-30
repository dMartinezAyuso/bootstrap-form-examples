var LIVERELOAD_PORT = 35729;
var SERVER_CONNECT_PORT = 9000;

var SEPARATOR_TYPE = ';';

var COMPASS_CONFIG_FILE_NAME = 'config.rb';
var JSHINT_CONFIG_FILE_NAME = '.jshintrc';
var NODE_CONFIG_FILE_NAME = 'package.json';

var SRC_BASE_BUILD = 'build';
var SRC_BASE_COMPASS_FOLDERS_CSS = 'app/assets/css';
var SRC_BASE_COMPASS_SCSS = 'app/assets/scss/**/*.scss';
var SRC_BASE_COMPASS_FOLDERS_SCSS = 'app/assets/scss';
var SRC_BASE_HTML_COMPONENTS_FILES = 'app/components/**/*.html';
var SRC_BASE_HTML_INDEX_FILE = 'app/index.html';
var SRC_BASE_HTML_VIEWS_FILES = 'app/views/**/*.html';
var SRC_BASE_JS_APP = 'app/app.js';
var SRC_BASE_JS_COMPONENTS_FILES = 'app/components/**/*.js';
var SRC_BASE_JS_MOCKSERVER_FILES = 'app/mock_server/**/*.js';
var SRC_BASE_JS_VIEWS_FILES = 'app/views/**/*.js';
var SRC_BASE_PROJECT = '/home/diego/Dev/frontend-angular-bootstrap-seed';
var SRC_BASE_PROJECT_APP = '/home/diego/Dev/frontend-angular-bootstrap-seed/app';


var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {    
    
    grunt.initConfig({
        pkg: grunt.file.readJSON(NODE_CONFIG_FILE_NAME),
        compass: {
            dev: {
                options: {
                    sassDir:SRC_BASE_COMPASS_FOLDERS_SCSS,
                    cssDir: SRC_BASE_COMPASS_FOLDERS_CSS,
                    environment: 'development'
                }
            },
            prod: {
                options: {              
                    sassDir: SRC_BASE_COMPASS_FOLDERS_SCSS,
                    cssDir: SRC_BASE_COMPASS_FOLDERS_CSS,
                    environment: 'production'
                }
            }
        },
        concat: {
            options: { 
                separator: SEPARATOR_TYPE
            },
            dist: {
                src: [ 
                    SRC_BASE_JS_VIEWS_FILES, 
                    SRC_BASE_JS_COMPONENTS_FILES,
                    SRC_BASE_JS_APP 
                ],
                dest: SRC_BASE_BUILD.concat('/<%= pkg.name %>.js') 
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    base: 'app',
                    port: 9000
                }
            }
        },
        jshint: {
            options: {
                jshintrc: JSHINT_CONFIG_FILE_NAME
            },
            all: [
                SRC_BASE_JS_COMPONENTS_FILES,
                SRC_BASE_JS_VIEWS_FILES,
                SRC_BASE_JS_APP,
                SRC_BASE_JS_MOCKSERVER_FILES
            ]
        },        
        open: {
            dev: {
                path: 'http://localhost:<%= connect.server.options.port %>' //la direccion que abriremos
            }
        },
        uglify: {
            options: { 
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' 
            },
            files: { 
                'build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']  // en este caso, coge el directorio de salida del task de concatenado y lo minifica cambiándole el nombre
            } 
            /*build: { 
                src: 'src/<%= pkg.name %>.js', 
                dest: 'build/<%= pkg.name %>.min.js' 
            } */
        },
        watch: {            
            compass: {
                files: [SRC_BASE_COMPASS_SCSS],
                tasks: ['compass:dev'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: [SRC_BASE_HTML_INDEX_FILE, SRC_BASE_HTML_VIEWS_FILES, SRC_BASE_HTML_COMPONENTS_FILES],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    SRC_BASE_JS_VIEWS_FILES,
                    SRC_BASE_JS_COMPONENTS_FILES
                ],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Load the plugin that provides the tasks.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    // Default task(s).
    grunt.registerTask('default', 'watch');
    grunt.registerTask('server', ['compass:dev','jshint','open:dev','connect:server','watch'])
    grunt.registerTask('build', ['jshint','concat','uglify'])

};