# Exporting and Importing in native ES6 Modules

- In moduleName.js names, it's also a convention to use ==camelCase== names.

- ES6 Modules are ==native== to JavaScript.

- There is no need to use the `defer` attribute when loading a module script; ==modules are deferred automatically==.

- Module features are imported into the scope of a single script — they ==aren't available in the global scope==. Therefore, you will only be able to access imported features in the script they are imported into, and you won't be able to access them from the JavaScript console, for example.

- Normal code (without asynchronous code) inside imports are executed first, so before the code in the module that we make the imports.

- All the importing statements are ==hoisted== to the top and because this we usually write all the imports statements at the top of the file.

- All modules are executed in ==Strict Mode by default==, so you don't need to write 'use strict' at the beginning of the module.

- Understand how to export and import values between modules.

- You can ==import a module without importing any value==.

- ==When you use Parcel you can omit the .js extension== because with Parcel ES6 modules also work without that ( import './moduleName'; ).

- We can say that a module exports kind of a public API because everything else that we don’t export stays private inside of the module.

- Imports are a ==live connection== to exports (imports are not copies of the export).
