# Array.isArray()

The `Array.isArray()` method determines whether the passed value is an Array. This method returns `true` if an object is an array, otherwise `false`.

> **Note**: `Array.isArray()` is a ==static property== of the JavaScript Array object. You can only use it as `Array.isArray()`. Using `x.isArray()`, where `x` is an array will return `undefined`.

## Syntax

```js
Array.isArray(value);
```

## Parameters

==**value**== - the value to be checked.

## Return value

`true` if the value is an Array; otherwise, `false`.

## Example

```js
// All following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// All following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });
```

## Reference

1. [Array.isArray() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
2. [Array.isArray() - w3schools](https://www.w3schools.com/jsref/jsref_isarray.asp)
