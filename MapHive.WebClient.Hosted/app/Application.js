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

        defaultToken : 'dashboard',

        //global shared controllers - they fire up automatically
        controllers: [
            //use the default root
            'mh.controller.Root',

            //use the customised Root
            'MapHive.controller.Auth',

            'mh.controller.Splash'
        ],
        
        //here goes a custom app launcher class. If not overridden, it will default to mh.AppLauncher
        //Note: in this case MapHiveHosted.AppLauncher just inherits from mh.AppLauncher and is used instead as this is needed  so the proper azzurra scss is brought in!
        appLauncher: 'MapHiveHosted.AppLauncher',

        onLaunchApp: function(){

            //first make sure the base does what's required!

            //note: need to drilldown 2 levels, as in fact, this will be an instance of the app defined and launched in the app.js! this is needed, as the core functionality is borrowed from the generic mh.Application
            this.superclass.superclass.onLaunchApp.call(this);

            //start the external route watcher - this will watch changes advised by a parent, and pass own changes to a parent
            this.fireGlobal('root:watchexternalroutes', {host: true});
        }

    });
}());