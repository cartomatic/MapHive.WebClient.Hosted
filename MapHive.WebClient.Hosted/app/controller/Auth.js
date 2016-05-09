//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Created by domin on 4/22/2016.
     */
    Ext.define('MapHive.controller.Auth', {
        extend: 'mh.controller.Auth',

        //could also be wrapped into config property
        authUi: 'MapHiveHosted.view.auth.Auth',

        /**
         * Called when the controller is created
         */
        init: function(){
            //first make sure to init the base stuff!
            this.superclass.init.call(this);
        }

    });

}());