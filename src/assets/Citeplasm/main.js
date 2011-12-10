//>> pure-amd
// module:
//          citeplasm/main.js
// description:
//          This is the main engine behind the official Citeplasm javascript
//          client.

define ( "Citeplasm/main", [ 'require' ], function ( require ) {
    var Citeplasm = {};

    Citeplasm.init = function () {
        require ( [ 'dojo', 'dijit/form/Button', 'dijit/Toolbar', 'dijit/ToolbarSeparator' ], 
            function ( dojo, Button, Toolbar, ToolbarSeparator ) 
        {
            // create the main toolbar
            Citeplasm.toolbar = new Toolbar( {}, dojo.byId( "toolbar" ) );

            // add the citeplasm logo
            var citeplasmButton = new Button({
                id: "toolbar.citeplasm",
                label: "[CITEPLASM]",
                showLabel: true,
                /*iconClass: "CiteplasmIcon"*/
            });
            Citeplasm.toolbar.addChild ( citeplasmButton );
            Citeplasm.toolbar.addChild ( new ToolbarSeparator({}) );

            // add the default toolbar icons
            var newButton = new Button({
                id: "toolbar.new",
                // note: should always specify a label, for accessibility reasons.
                // Just set showLabel=false if you don't want it to be displayed normally
                label: "New Item",
                showLabel: true,
                iconClass: "dijitEditorIcon dijitEditorIconNewPage"
            });
            Citeplasm.toolbar.addChild ( newButton );
            var driveButton = new Button({
                id: "toolbar.drive",
                // note: should always specify a label, for accessibility reasons.
                // Just set showLabel=false if you don't want it to be displayed normally
                label: "Cloud Drive",
                showLabel: true,
                iconClass: "dijitEditorIcon dijitEditorIconSelectAll"
            });
            Citeplasm.toolbar.addChild ( driveButton );

            // add a separator; windows will appear after this
            Citeplasm.toolbar.addChild ( new ToolbarSeparator({}) );
        } ); // end require
    } // end init

    return Citeplasm;
});
