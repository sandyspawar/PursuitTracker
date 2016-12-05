1) Open a command prompt in the project's root directory (APM)

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.

4) Type: `npm install angular2-google-maps --save`
    This installs the Angular 2 google map version 0.16.0 or latest.

    make sure you update following entry in system.config.js file.
    'angular2-google-maps/core': 'npm:angular2-google-maps/core/core.umd.js'

5) Type: `npm install angular2-highcharts --save`
    This installs the Angular 2 high charts 0.4.1 or latest.


