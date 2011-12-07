// module:
//          citeplasm/main.js
// description:
//          This is the main engine behind the official Citeplasm javascript
//          client.

define ( "citeplasm", [ 'require' ], function ( require ) {
    var citeplasm = {};

    citeplasm.init = function () {
        require ( [ 'dojo', 'dijit/form/Button', 'dijit/Toolbar', 'dijit/ToolbarSeparator' ], 
            function ( dojo, Button, Toolbar, ToolbarSeparator ) 
        {
            // create the main toolbar
            citeplasm.toolbar = new Toolbar( {}, dojo.byId( "toolbar" ) );

            // add the citeplasm logo
            var citeplasmButton = new Button({
                id: "toolbar.citeplasm",
                label: "[CITEPLASM]",
                showLabel: true,
                /*iconClass: "CiteplasmIcon"*/
            });
            citeplasm.toolbar.addChild ( citeplasmButton );
            citeplasm.toolbar.addChild ( new ToolbarSeparator({}) );

            // add the default toolbar icons
            var newButton = new Button({
                id: "toolbar.new",
                // note: should always specify a label, for accessibility reasons.
                // Just set showLabel=false if you don't want it to be displayed normally
                label: "New Item",
                showLabel: true,
                iconClass: "dijitEditorIcon dijitEditorIconNewPage"
            });
            citeplasm.toolbar.addChild ( newButton );
            var driveButton = new Button({
                id: "toolbar.drive",
                // note: should always specify a label, for accessibility reasons.
                // Just set showLabel=false if you don't want it to be displayed normally
                label: "Cloud Drive",
                showLabel: true,
                iconClass: "dijitEditorIcon dijitEditorIconSelectAll"
            });
            citeplasm.toolbar.addChild ( driveButton );

            // add a separator; windows will appear after this
            citeplasm.toolbar.addChild ( new ToolbarSeparator({}) );
        } ); // end require
    } // end init

    return citeplasm;
});
