(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Just a customised generic app entry point
     */
    Ext.define('MapHiveHosted.Application', {
        extend: 'mh.Application',

        //here goes a custom app launcher class. If not overridden, it will default to mh.AppLauncher
        //appLauncher: ''
    });
}());