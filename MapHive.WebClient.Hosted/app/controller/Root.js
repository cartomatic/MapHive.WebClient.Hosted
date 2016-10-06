//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Created by info_000 on 30-Sep-16.
     */
    Ext.define('MapHive.controller.Root', {
        extend: 'mh.controller.Root',

        /**
         * Called when the controller is created
         */
        init: function(){
            //first make sure to init the base stuff!
            this.superclass.init.call(this);
        },

        /**
         * A simple override - hgis does not use a standard cfg, so needs to needs to suppress the default cfg call
         */
        getUserConfiguration: function(){
            this.fireGlobal('root::launchapp');
        }

    });
}());