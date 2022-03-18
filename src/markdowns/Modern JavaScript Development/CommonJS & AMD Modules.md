# CommonJS & AMD Modules

Besides native **ES6 Module** and the **Module Pattern**, there are also **other module systems** that have been used by JavaScript in the past, but again, they were **not native Javascript**, so **they relied on some external implementations**, and two examples are **AMD Modules** and **CommonJS** module.

CommonJS modules are important for us because they have been used in **Node.js** for almost all of its existence, so only very recently ES6 Modules have actually been implemented in Node.js. The big consequence of this is that _almost all the modules in the NPM repository, so all these modules that we can use in our own code still use the CommonJS module system_ and the reason for that is that _NPM was originally only intended for Node.js. Only later NPM became the standard repository for the whole JavaScript world_ and so now we are basically stuck with CommonJS and so therefore, you will see probably a lot of CommonJS still around.

Just like ES6 modules, **in CommonJS one file is one module**. And we export something from a module using `export.` and then the name of the export. Now of course, this is not going to work in the browser but it would work in Node.js. The imports are made using:

```js
const { importedValue } = require('./moduleName.js');
```

We _can’t use libraries that uses the commonJS module system without a_ **module bundler**, so we cannot directly import it into our code without a module bundler.
