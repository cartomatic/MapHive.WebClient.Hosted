(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Lock screen used to lock the UI from user interaction; adds item to centered vbox layout
     */
    Ext.define('MapHiveHosted.view.auth.Auth', {
        extend: 'mh.module.auth.Auth',

        requires: [
        ],


        //this can be wrapped into a config property, but does not have to
        'loginView|setUI': 'blue-panel',
        'btnForgotPass|setUI': 'orange-button',
        'btnForgotPass|setScale': 'medium',
        'btnLogin|setUI': 'green-button',
        'btnLogin|setScale': 'medium',

        /**
         * Called when the view is created
         */
        constructor: function(config){

            //first make sure to init the base stuff!
            this.superclass.constructor.call(this);
        }
    });
}());