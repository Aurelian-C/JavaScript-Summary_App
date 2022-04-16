# Bundling With Parcel and NPM Scripts

## Install and configure Parcel:

1. Install `npm i parcel --save-dev`
2. Acces package.json → write `"start": "parcel index.html"` in "script" object → in terminal write `npm run start` or just simple `npm start`
3. Write `"build": "parcel build index.html –dist-dir ./dist"` in "script" object → in terminal write `npm run build`.

If you want to uninstall parcel then you write in the terminal `npm un parcel`. In Parcel 2, before you run the build script, you need to modify `"main": "index.js"` in `"default": "index.js"`.

## Summary:

- Parcel is just another **build tool** which is also on NPM and you need to use NPM to install it.
- A **devDependency** is like a tool that we need to build our application but it's not a dependency that we actually include in our code, so it's simply a tool and so that's why it's called a devDependency because we can use it to develop our project and so therefore it appears in a new field in our package.json file.
- We use Parcel in the terminal because Parcel is basically just another **command line interface**. In order to still be able to use Parcel in the terminal, we have two options: so we can use something called NPX or we can use NPM scripts.
- **With Parcel you don't need to specify the entire path to a library**. In all module bundlers there's no need for specifying the entire path to any module, it’s enough to write the name of the package/module and Parcel will then automatically find the path to the package/module and will import it like when we specified the entire path without us having to manually type the entire path to the package/module.
- **Parcel works with all kinds of assets**, even with HTML, CSS, SASS files, images, svg and of course also all kinds of modules, so not only ES6 modules but this is also going to work with CommonJS modules.
