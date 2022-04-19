# Array.prototype.findIndex()

The `findIndex()` method ==returns== the ==index of the first element== in the array that satisfies the provided ==testing function==. Otherwise, it returns ==-1==, indicating that no element passed the test.

The `findIndex()` method:

- ==executes a function for each array element==;
- does not execute the function for empty array elements;
- does ==not change the original== array.

> Note: if you want to returns the **value** of an array element, instead of its **index**, use `find()` method.

## Syntax

```js
// Arrow function
array.findIndex((element) => { ... } )
array.findIndex((element, index) => { ... } )
array.findIndex((element, index, array) => { ... } )

// Callback function
array.findIndex(callbackFn)
array.findIndex(callbackFn, thisArg)

// Inline callback function
array.findIndex(function(element) { ... })
array.findIndex(function(element, index) { ... })
array.findIndex(function(element, index, array){ ... })
array.findIndex(function(element, index, array) { ... }, thisArg)
```

## Parameters

==**callbackFn**== - a function to execute on each value in the array until the function returns `true`, indicating that the satisfying element was found. The function is called with the following arguments:

- **element** - the current element being processed in the array;
- **index** - the index of the current element being processed in the array;
- **array** - the array `findIndex()` was called upon.
- **thisArg** (optional) - optional object to use as `this` when executing `callbackFn`.

The callback ==**must** return a **truthy value** to indicate a matching element has been found==.

## Return value

The ==index of the first element== in the array that passes the test. Otherwise, ==-1==.

> Note: if the index of the first element in the array that passes the test is 0, the return value of `findIndex()` will be interpreted as Falsy in conditional statements.

## Some considerations about `findIndex()` method

The `findIndex()` method executes the `callbackFn` function ==once for every index== in the array until it finds the one where `callbackFn` returns a truthy value. If such an element is found, `findIndex()` immediately returns the ==element's index==. If `callbackFn` never returns a truthy value (or the array's `length` is 0), `findIndex()` returns ==-1==.

> **Note**: Unlike other array methods such as `Array.some()`, `callbackFn` is run ==even for indexes with unassigned values==.

If a `thisArg` parameter is passed to `findIndex()`, it will be used as the `this` inside each invocation of the `callbackFn`. If it is not provided, then `undefined` is used.

The range of elements processed by `findIndex()` is set before the first invocation of `callbackFn`. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`. `callbackFn` will not process the elements appended to the array after the call to `findIndex()` begins. If an existing, unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time `findIndex()` visits the element's index. Elements that are deleted are still visited.

## Reference

1. [Array.prototype.findIndex() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
2. [findIndex() - w3schools](https://www.w3schools.com/jsref/jsref_findindex.asp)
