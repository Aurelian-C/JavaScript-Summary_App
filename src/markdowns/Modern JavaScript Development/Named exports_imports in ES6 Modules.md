# Named exports/imports in ES6 Modules

_Export/import multiple things_ with **`{}`** & _change name of exports/imports_ using **`as`** (with **Named Imports** you have to give to imports values the _same name as name you defined in export module_ and you have to _put them inside curly braces_).

Import all the exports of a module at the same time with `*` and `as` by creating a **module object** (when we import everything from a module with `*` the convention is to use the first letter of the namespace as capital letter, just like in classes. This will create a namespace for all of the values exported from that module, so basically this we'll create an object containing everything that is exported from the module).
