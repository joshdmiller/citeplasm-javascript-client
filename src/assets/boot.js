/**
 * This file is used to reconfigure parts of the loader at runtime for this application.  
 * 
 * This file must remain outside of any defined package directory at the current time or it will be transformed by the
 * build system into a legacy module.
 */
require({
    // The base path for all packages and modules. This will be overwritten during prod and test builds.
    baseUrl: 'assets/',

    // A list of packages to register.
    packages: [
        { name: 'dojo', location: 'dojo' },
        { name: 'dijit', location: 'dijit' },
        //{ name: 'dojox', location: 'dojox' },
        { name: 'app', location: 'app' },
        { name: 'Citeplasm', location: 'Citeplasm' }
    ]
// Require 'app'. This loads the main application file, app/main.js.
}, [ 'app' ]);
