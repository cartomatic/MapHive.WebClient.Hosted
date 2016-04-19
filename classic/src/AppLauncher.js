//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * App launcher - need to use it here, so the proper azzurra scss is brought in!
     */
    Ext.define('MapHiveHosted.AppLauncher', {
        extend: 'mh.AppLauncher'
    });

}());