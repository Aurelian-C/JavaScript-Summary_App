# Introduction to NPM

If you want to use NPM you need to install Node.js first, because NPM comes together with Node.js.

## NPM steps to install a package:

1. Checking if we actually have NPM installed **`npm -v`** . If you get any number in the terminal and it doesn't matter which one, then you're good. If you don’t get any number and want to use NPM you need to install Node.js first, because NPM comes together with Node.js.
2. In each project in which we want to use NPM, we need to start by initializing it **`npm init`** . Is important that before you run `npm init` make sure that you are in your actual application folder.
3. `npm init` creates automatically **package.json** and **node_modules** folder
4. Install a package **`npm install packageName`** or **`npm i packageName`**

## NPM shortcuts:

1. `npm -v`
2. `npm init`
3. `npm i packageName` or `npm i packageName --save-dev`

## What is NPM?

- Node Package Manager.
- Pre-installed with Node.js.
- NPM it's both a software on our computer and a package repository.
- Easily install modules/packages on your system.
- Modules are basically Javascript libraries.
- Makes it easy for developers to share & reuse code.

## Why we actually need something like NPM? Why do we actually need a way of managing packages or dependencies in our project?

- Back in the day before we had NPM, we used to include external libraries right into our HTML, so basically using the script tag and this would then expose a global variable that we could use. This actually creates a couple of problems, at least in a big project.
- First, it doesn't make much sense having the html loading all our javascript, that is just really messy.
- Second, many times we would actually download a library file to our computer directly, for example, a jQuery JavaScript file but then whenever a new version would come out, we would have to manually go to the site, download the new version, change the file in our file system manually and then include it in the HTML again, maybe with some other name, with some other version number.
- And a third reason is that before NPM there simply wasn't a single repository that contained all the packages that we might need and so this made it even worse and more difficult to manually download libraries and manage them on our computers

## package.json file

- Stores the entire configuration of our project.
- Manifest file that have all your app info.
- List dependencies (name & version).
- Specify if versions should be updated.
- Create NPM scripts.
- Easily create with 'npm init'.

## node_modules folder

- Contains everything about package.json dependecies, and of course the more packages we install they will all get stored into the node_modules folder.
- Manifest file that have all your app info.
- List dependencies (name & version).
- Specify if versions should be updated.
- Create NPM scripts.
- Easily create with 'npm init'.
