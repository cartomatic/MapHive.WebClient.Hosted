//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * App launcher - need to use it here, so the proper azzurra scss is brought in!
     */
    Ext.define('MapHiveHosted.AppLauncher', {

        requires: [
            'Ext.tip.QuickTipManager',
            'MapHiveHosted.view.main.Viewport',
            'mh.module.appBar.AppBar'
        ],

        constructor: function(config){

            Ext.QuickTips.init();

            //init the GUI
            Ext.create('MapHiveHosted.view.main.Viewport', {
                dockedItems: [
                    //standardised app top tbar
                    {
                        xtype: 'mh-app-bar'
                    }
                ]
            });

        }
    });

}());