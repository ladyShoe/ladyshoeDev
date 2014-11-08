module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    timestamp: (new Date()).getTime(),
    clean: ["public/dist/"],
    uglify: {
      options: {},
      dist: {
        files: {
          'public/dist/app-<%= pkg.version %>-<%= timestamp %>.js': [
            'public/js/*/*.js'
          ],
          'public/dist/shopping-<%= pkg.version %>-<%= timestamp %>.js': [
            'public/shopping/*.js'
          ],
          'public/dist/rule-<%= pkg.version %>-<%= timestamp %>.js': [
            'public/rule/*.js'
          ],
          'public/dist/hongbao-<%= pkg.version %>-<%= timestamp %>.js': [
            'public/hongbao/*.js'
          ],
          'public/dist/pointBill-<%= pkg.version %>-<%= timestamp %>.js': [
            'public/pointBill/*.js'
          ],
          'public/dist/inject-<%= pkg.version %>-<%= timestamp %>.js': [
            'public/inject/inject.js'
          ],
          'public/dist/injectIOS-<%= pkg.version %>-<%= timestamp %>.js': [
            'public/inject/injectIOS.js'
          ],
          'public/dist/test-<%= pkg.version %>-<%= timestamp %>.js': [
            'public/test/test.js'
          ],
          'public/dist/error-<%= pkg.version %>-<%= timestamp %>.js': [
            'public/error/*.js'
          ]
        }
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      compress: {
        files: {
          'public/dist/style-<%= pkg.version %>-<%= timestamp %>.css': [
            'public/css/*/*.css'
          ],
          'public/dist/error-<%= pkg.version %>-<%= timestamp %>.css': [
            'public/error/*.css'
          ],
          'public/dist/shopping-<%= pkg.version %>-<%= timestamp %>.css': [
            'public/shopping/*.css'
          ],
          'public/dist/rule-<%= pkg.version %>-<%= timestamp %>.css': [
            'public/rule/*.css'
          ],
          'public/dist/pointsTeach-<%= pkg.version %>-<%= timestamp %>.css': [
            'public/pointsTeach/*.css'
          ],
          'public/dist/test-<%= pkg.version %>-<%= timestamp %>.css': [
            'public/test/*.css'
          ],
          'public/dist/hongbao-<%= pkg.version %>-<%= timestamp %>.css': [
            'public/hongbao/*.css'
          ],
          'public/dist/pointBill-<%= pkg.version %>-<%= timestamp %>.css': [
            'public/pointBill/*.css'
          ]
        }
      }
    },
    copy: {
      dev: {
        src: 'public/conf/config-dev.js',
        dest: 'public/dist/config-<%= pkg.version %>-<%= timestamp %>.js'
      },
      release: {
        src: 'public/conf/config-release.js',
        dest: 'public/dist/config-<%= pkg.version %>-<%= timestamp %>.js'
      },
      favicon:{
        src: 'public/favicon.ico',
        dest: 'public/dist/favicon.ico'
      },
      img:{
        expand: true,
        src: 'public/img/*',
        dest: 'public/dist/img/',
        filter: 'isFile',
        flatten: true
      }
    },
    htmlbuild: {
      shopping: {
        path: 'public',
        src: '<%= htmlbuild.shopping.path %>/shopping/shopping.html',
        dest: 'public/dist/',
        options: {
          beautify: true,
          prefix: '',
          relative: true,
          styles: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/style-<%= pkg.version %>-<%= timestamp %>.css',
              '<%= htmlbuild.shopping.dest %>/shopping-<%= pkg.version %>-<%= timestamp %>.css'
            ]
          },
          scripts: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/app-<%= pkg.version %>-<%= timestamp%>.js',
              '<%= htmlbuild.shopping.dest %>/config-<%= pkg.version %>-<%= timestamp%>.js',
              '<%= htmlbuild.shopping.dest %>/shopping-<%= pkg.version %>-<%= timestamp %>.js'
            ]
          }
        }
      },
      hongbao: {
        src: '<%= htmlbuild.shopping.path %>/hongbao/hongbao.html',
        dest: 'public/dist/',
        options: {
          beautify: true,
          prefix: '',
          relative: true,
          styles: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/style-<%= pkg.version %>-<%= timestamp %>.css',
              '<%= htmlbuild.shopping.dest %>/hongbao-<%= pkg.version %>-<%= timestamp %>.css'
            ]
          },
          scripts: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/app-<%= pkg.version %>-<%= timestamp %>.js',
              '<%= htmlbuild.shopping.dest %>/config-<%= pkg.version %>-<%= timestamp%>.js',
              '<%= htmlbuild.shopping.dest %>/hongbao-<%= pkg.version %>-<%= timestamp %>.js'
            ]
          }
        }
      },
      rule: {
        src: '<%= htmlbuild.shopping.path %>/rule/rule.html',
        dest: 'public/dist/',
        options: {
          beautify: true,
          prefix: '',
          relative: true,
          styles: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/style-<%= pkg.version %>-<%= timestamp %>.css',
              '<%= htmlbuild.shopping.dest %>/rule-<%= pkg.version %>-<%= timestamp %>.css'
            ]
          },
          scripts: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/app-<%= pkg.version %>-<%= timestamp %>.js',
              '<%= htmlbuild.shopping.dest %>/config-<%= pkg.version %>-<%= timestamp%>.js',
              '<%= htmlbuild.shopping.dest %>/rule-<%= pkg.version %>-<%= timestamp %>.js'
            ]
          }
        }
      },
      pointBill:{
        src: '<%= htmlbuild.shopping.path %>/pointBill/pointBill.html',
        dest: 'public/dist/',
        options: {
          beautify: true,
          prefix: '',
          relative: true,
          styles: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/style-<%= pkg.version %>-<%= timestamp %>.css',
              '<%= htmlbuild.shopping.dest %>/pointBill-<%= pkg.version %>-<%= timestamp %>.css'
            ]
          },
          scripts: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/app-<%= pkg.version %>-<%= timestamp %>.js',
              '<%= htmlbuild.shopping.dest %>/config-<%= pkg.version %>-<%= timestamp%>.js',
              '<%= htmlbuild.shopping.dest %>/pointBill-<%= pkg.version %>-<%= timestamp %>.js'
            ]
          }
        }
      },
      error: {
        src: '<%= htmlbuild.shopping.path %>/error/error.html',
        dest: 'public/dist/',
        options: {
          beautify: true,
          prefix: '',
          relative: true,
          styles: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/error-<%= pkg.version %>-<%= timestamp %>.css'
            ]
          },
          scripts: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/config-<%= pkg.version %>-<%= timestamp%>.js',
              '<%= htmlbuild.shopping.dest %>/app-<%= pkg.version %>-<%= timestamp %>.js',
              '<%= htmlbuild.shopping.dest %>/error-<%= pkg.version %>-<%= timestamp %>.js'
            ]
          }
        }
      },
      test:{
        src: '<%= htmlbuild.shopping.path %>/test/test.html',
        dest: 'public/dist/',
        options: {
          beautify: true,
          prefix: '',
          relative: true,
          styles: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/test-<%= pkg.version %>-<%= timestamp %>.css'
            ]
          },
          scripts: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/config-<%= pkg.version %>-<%= timestamp%>.js',
              '<%= htmlbuild.shopping.dest %>/app-<%= pkg.version %>-<%= timestamp %>.js',
              '<%= htmlbuild.shopping.dest %>/test-<%= pkg.version %>-<%= timestamp %>.js'
            ]
          }
        }
      },
      pointsTeach:{
        src: '<%= htmlbuild.shopping.path %>/pointsTeach/pointsTeach.html',
        dest: 'public/dist/',
        options: {
          beautify: true,
          prefix: '',
          relative: true,
          styles: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/pointsTeach-<%= pkg.version %>-<%= timestamp %>.css'
            ]
          },
          scripts: {
            bundle: [
              '<%= htmlbuild.shopping.dest %>/config-<%= pkg.version %>-<%= timestamp%>.js',
              '<%= htmlbuild.shopping.dest %>/app-<%= pkg.version %>-<%= timestamp %>.js'
            ]
          }
        }
      }
    }
  });

  //grunt task
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-html-build');

  //do task
  //开发编译环境
  //grunt.registerTask('build', ['clean', 'copy:dev','copy:img',,'copy:favicon''uglify', 'cssmin', 'htmlbuild']);
  //测试编译环境
  grunt.registerTask('build', ['clean', 'copy:release', 'copy:img','copy:favicon','uglify', 'cssmin', 'htmlbuild']);
};