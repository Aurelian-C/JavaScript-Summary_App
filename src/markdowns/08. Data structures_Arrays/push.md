# Array.prototype.push()

The `push()` method ==adds== one or more items to the ==end== of an array and returns the new length of the array. The `push()` method ==overwrites== the original array.

> **Note**: The `push()` method relies on a `length` property to determine where to start inserting the given values. If the `length` property cannot be converted into a number, the index used is 0. This includes the possibility of `length` being nonexistent, in which case `length` will also be created.

> **Note**: Although strings are native, Array-like objects, they are not suitable in applications of `push()` method, as strings are immutable.

## Syntax

```js
array.push(item0);
array.push(item0, item1);
array.push(item0, item1, /* ... ,*/ itemN);
```

## Parameters

==**itemN**== - the item(s) to add to the end of the array.

## Return value

A ==**number**== - the new `length` property of the object upon which the method was called.

## Reference

1. [Array.prototype.push() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
2. [push() - w3schools](https://www.w3schools.com/jsref/jsref_push.asp)
