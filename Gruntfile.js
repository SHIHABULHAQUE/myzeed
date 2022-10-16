/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-war');
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),
        war: {
            target: {
                options: {
                    war_dist_folder: 'build', /* Folder where grunt generate the WAR. */
                     war_name: 'myzeed',
                    webxml_display_name: 'FIN'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'dist/myzeed-demo',
                        src: ['**'],
                        dest: ''
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', ['war']);
};
