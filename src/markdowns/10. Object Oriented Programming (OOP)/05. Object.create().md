# Object.create()

The `Object.create()` method **creates a new object** and **allows you to specify an object that will be used as the new object's prototype**.

## Syntax

```js
Object.create(proto);
Object.create(proto, propertiesObject);

// Example
const personPrototype = {
  greet() {
    console.log('hello!');
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```

Above we create an object `personPrototype`, which has a `greet()` method. We then use `Object.create()` to create a new object with `personPrototype` as its prototype. Now we can call `greet()` on the new object, and the prototype provides its implementation.

## Parameters

### proto

The object which should be the prototype of the newly-created object.

### propertiesObject (optional)

If specified and not `undefined`, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of `Object.defineProperties()`.

## Return value

A new object with the specified prototype object and properties.

## Exceptions

The `proto` parameter has to be either

- `null` or
- an `Object` excluding _primitive wrapper objects_.

```js
oco = Object.create({}); // create a normal object
ocn = Object.create(null); // create a "null" object

console.log(oco); // {} -- Seems normal
console.log(ocn); // {} -- Seems normal here too, so far

oco.p = 1; // create a simple property on normal obj
ocn.p = 0; // create a simple property on "null" obj

console.log(oco); // {p: 1} -- Still seems normal
console.log(ocn); // {p: 0} -- Still seems normal here too. BUT WAIT...

'oco is: ' + oco; // shows "oco is: [object Object]"
'ocn is: ' + ocn; // throws error: Cannot convert object to primitive value

alert(oco); // shows [object Object]
alert(ocn); // throws error: Cannot convert object to primitive value

oco.toString(); // shows [object Object]
ocn.toString(); // throws error: ocn.toString is not a function

oco.valueOf(); // shows {}
ocn.valueOf(); // throws error: ocn.valueOf is not a function

oco.hasOwnProperty('p'); // shows "true"
ocn.hasOwnProperty('p'); // throws error: ocn.hasOwnProperty is not a function

oco.constructor; // shows "Object() { [native code] }"
ocn.constructor; // shows "undefined"
```

> **Note**: With `Object.create()` there are no `prototype` property involved and also no constructor functions and no `new` keyword. So instead, we can use `Object.create()` to essentially **manually set the prototype of an object to any other object that we want**.

References

1. [Object.create() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
2. [Object prototypes - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
