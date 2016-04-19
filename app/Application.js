(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Just a customised generic app entry point
     */
    Ext.define('MapHiveHosted.Application', {
        extend: 'mh.Application',

        requires: [
            'MapHiveHosted.AppLauncher'
        ],

        //here goes a custom app launcher class. If not overridden, it will default to mh.AppLauncher
        //Note: in this case MapHiveHosted.AppLauncher just inherits from mh.AppLauncher and is used instead as
        //this is needed  so the proper azzurra scss is brought in!
        appLauncher: 'MapHiveHosted.AppLauncher'
    });
}());