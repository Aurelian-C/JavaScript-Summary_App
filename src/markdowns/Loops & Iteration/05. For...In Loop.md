# for...in loop

The JavaScript `for...in` statement loops through the properties of an Object. `for...in` iterates over all **enumerable properties** of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

A `for...in` loop _only iterates over_ **enumerable, non-Symbol properties**. A `for...in` loop iterates over the properties of an object in an **arbitrary order**.

## Syntax

```js
for (variable in object) {
  statement;
}
```

_variable_: a different **property name (key)** is assigned to variable on each iteration.

_object_: object whose non-Symbol **enumerable properties** are iterated over.

## For In Over Arrays

The JavaScript for in statement can also loop over the properties of an Array:

```js
// Syntax
for (variable in array) {
  code;
}

// Example
const numbers = [45, 4, 9, 16, 25];

let txt = '';
for (let x in numbers) {
  txt += numbers[x];
}
```

_Array indexes are just enumerable properties with integer names_ and are otherwise identical to general object properties. There is no guarantee that `for...in` will return the indexes in any particular order. The `for...in` loop statement will return all enumerable properties, including those with non–integer names and those that are inherited. Because the order of iteration is implementation-dependent, iterating over an array may not visit elements in a consistent order. Therefore, it is better to use a for loop with a numeric index (or `Array.prototype.forEach()` or the `for...of` loop) when iterating over arrays where the order of access is important.

Note:

- Do not use `for...in` over an Array if the index **order** is important.
- The index order is implementation-dependent, and array values may not be accessed in the order you expect.
- It is better to use a **`for`** loop, a **`for...of`** loop, or **`Array.forEach()`** when the order is important.

## Iterating over own properties only

If you only want to consider properties attached to the object itself, and not its prototypes, use `getOwnPropertyNames()` or perform a `hasOwnProperty()` check (`propertyIsEnumerable()` can also be used). Alternatively, if you know there won't be any outside code interference, you can extend built-in prototypes with a check method.

The following function illustrates the use of `hasOwnProperty()`: the inherited properties are not displayed.

```js
let triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

let obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Output:
// "obj.color = red"
```

## Why Use `for...in`?

Given that `for...in` is built for iterating object properties, not recommended for use with arrays, and options like `Array.prototype.forEach()` and `for...of` exist, what might be the use of `for...in` at all?

It may be most practically used for debugging purposes, being an easy way to check the properties of an object (by outputting to the console or otherwise). Although arrays are often more practical for storing data, in situations where a key-value pair is preferred for working with data (with properties acting as the "key"), there may be instances where you want to check if any of those keys hold a particular value.
