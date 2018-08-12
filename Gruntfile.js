module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            { width: 800, quality: 60, suffix: '_large' }, // 800px is the maximum width
            { width: 800, quality: 60, suffix: '_medium_2x' },
            { width: 600, quality: 60, suffix: '_medium_1x' },
            { width: 800, quality: 60, suffix: '_small_2x' },
            { width: 400, quality: 60, suffix: '_small_1x' },
          ]
        },
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
