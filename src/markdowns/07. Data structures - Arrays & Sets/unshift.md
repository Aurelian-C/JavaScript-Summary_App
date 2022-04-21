# Array.prototype.unshift()

The `unshift()` method ==adds== one or more items to the ==beginning== of an array and returns the new length of the array. The `unshift()` method ==overwrites== the original array.

## Syntax

```js
array.unshift(item0);
array.unshift(item0, item1);
array.unshift(item0, item1, /* ... ,*/ itemN);
```

## Parameters

==**itemN**== - the items to add to the front of the array.

> **Note**: if multiple items are passed as parameters, they're inserted in chunk at the beginning of the object, in the exact same order they were passed as parameters.

## Return value

A ==**number**== - the new `length` property of the object upon which the method was called.

## Reference

1. [Array.prototype.unshift() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
2. [unshift() - w3schools](https://www.w3schools.com/jsref/jsref_unshift.asp)
