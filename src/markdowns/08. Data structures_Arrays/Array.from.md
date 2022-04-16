# Array.from()

The `Array.from()` **static method** creates a new, **shallow-copied** Array instance from an **array-like** or **iterable object**.

```js
Array.from('foo'); // ["f", "o", "o"]

Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
```

`Array.from()` lets you create `Array`s from:

- array-like objects (objects with a `length` property and indexed elements); or
- iterable objects

`Array.from()` has an optional parameter `mapFn`, which allows you to execute a [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function on each element of the array being created. 

More clearly, `Array.from(obj, mapFn, thisArg)` has the same result as `Array.from(obj).map(mapFn, thisArg)`, except that it does not create an intermediate array, and *mapFn* only receives two arguments (*element*, *index*).

## Syntax
```js
// Arrow function
Array.from(arrayLike, (element) => { /* ... */ } )
Array.from(arrayLike, (element, index) => { /* ... */ } )

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function
Array.from(arrayLike, function mapFn(element) { /* ... */ })
Array.from(arrayLike, function mapFn(element, index) { /* ... */ })
Array.from(arrayLike, function mapFn(element) { /* ... */ }, thisArg)
Array.from(arrayLike, function mapFn(element, index) { /* ... */ }, thisArg)
```

## Parameters

`arrayLike`: An array-like or iterable object to convert to an array.

`mapFn` (optional): Map function to call on every element of the array.

`thisArg` (optional): Value to use as `this` when executing `mapFn`.

## Return value

A new [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) instance.

## References

1. [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

   
