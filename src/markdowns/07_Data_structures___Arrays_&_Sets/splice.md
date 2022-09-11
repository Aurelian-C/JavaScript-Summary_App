# Array.prototype.splice()

The `splice()` method ==adds== and/or ==removes== array elements. The `splice()` method ==overwrites== the original array.

> **Note**: To access part of an array **without modifying** it, you can use `slice()`.

## Syntax

```js
array.splice(startIndex)
array.splice(startIndex, deleteCount)
array.splice(startIndex, deleteCount, item1)
array.splice(startIndex, deleteCount, item1, ....., itemN)
```

## Parameters

==**startIndex**== (required) - the ==index at which start to add/remove items==. If greater than the length of the array, `startIndex` will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many elements as items provided. Negative value defines the position from the end of the array.

==**deleteCount**== (optional) - an ==integer== (number) indicating the number of elements in the array to remove from `startIndex`.
If `deleteCount` is omitted, or if its value is equal to or larger than `array.length - startIndex` (that is, if it is equal to or greater than the number of elements left in the array, starting at `startIndex`), then all the elements from `startIndex` to the end of the array will be deleted. However, it must not be omitted if there is any `item1` parameter.
If `deleteCount` is 0 or negative, no elements are removed. In this case, you should specify at least one new element.

==**item1, ..., itemN**== (optional) - the ==elements== to add to the array, beginning from `startIndex`. If you do not specify any elements, `splice()` will only remove elements from the array.

## Return Value

An ==array== containing the removed items (if any). If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

## Example

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// At position 2, add 2 elements:
fruits.splice(2, 0, 'Lemon', 'Kiwi');

// At position 2, remove 2 items:
fruits.splice(2, 2);

// At position 2, add new items, and remove 1 item:
fruits.splice(2, 1, 'Lemon', 'Kiwi');
```

## Reference

1. [splice() method - w3schools](https://www.w3schools.com/jsref/jsref_splice.asp)
2. [Array.prototype.splice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
