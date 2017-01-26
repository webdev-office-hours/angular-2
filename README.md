# angular-2

*Note: This is an evolving repo as I plan to continue adding more features to the Angular 2 demo*

## Steps
**Step 1: Understanding the configuration files and installing the packages we needed.**

We have 3 configuration files to setup our Angular 2 admin template app.
- package.json: contains all the dependencies needed for the app.
- tsconfig.json: setups the Typescript compiler to generate valid JavaScript
- systemjs.config.js: setups the SystemJS module loader

Before we begin creating our app, run the following command to get all of the packages we need
```
npm install 
```
This command will generate the node_modules folder containing all of your packages - it should look like the following

**Current app folder structure for step 1**
```
XYZ-Admin
  node_modules (folder)
  package.json
  systemjs.config.js
  tsconfig.json
```

**Step 2: Create app module**

In the root of your app, create a folder named "app" and inside create a file named "app.module.ts"

Inside your app.module.ts add the following content

**app.module.ts**
```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ BrowserModule]
})
export class AppModule { }
```
**Current app folder structure for step 2**
```
XYZ-Admin
  app
    app.module.ts
  node_modules (folder)
  package.json
  systemjs.config.js
  tsconfig.json
```

**Step 3: Create app component and add it to the app module**

Inside the app folder, create a file named "app.component.ts" and add the following

**app.component.ts**
```
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h1>App Component</h1>
  `
})
export class AppComponent { }
```

**Current app folder structure for step 3**
```
XYZ-Admin
  app
    app.module.ts
    app.component.ts
  node_modules (folder)
  package.json
  systemjs.config.js
  tsconfig.json
```

**Step 4: Let's start our app!**

Inside the app folder, create a file named "main.ts" and add the following

**main.ts**
```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
```
In the root of your app, create a file named "index.html" and add the following

**index.html**
```
<html>
  <head>
    <base href="/">
    <title>Angular 2</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">
    <!-- 1. Load libraries -->
    <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.js"></script>

    <!-- 2. Configure SystemJS -->
    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ 
        console.error(err); 
      });
    </script>
  </head>
  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>
  </body>
</html>
```

**Current app folder structure for step 4**
```
XYZ-Admin
  app
    app.module.ts
    app.component.ts
    main.ts
  node_modules (folder)
  package.json
  systemjs.config.js
  tsconfig.json
  index.html
```

In your terminal, run the following command
```
npm start
```

## Architecture
!["Architecture"] (https://github.com/paulberesuita/XYZ-Admin/blob/master/README/xyz-%20admin-architecture.png "XYZ Admin")

## XYZ Admin Template - In-Progress
!["XYZ Admin Template"] (https://github.com/paulberesuita/XYZ-Admin/blob/master/README/xyz-admin-current.png "XYZ Admin")
