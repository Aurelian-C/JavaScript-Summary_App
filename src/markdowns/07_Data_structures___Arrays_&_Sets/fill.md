## Array.prototype.fill()

The `fill()` method ==**changes all elements** in an array to a **static value**==, from a ==start index== (default 0) to an ==end index== (default `array.length`). It ==returns the **modified array**==.

> **Note**: Using `Array.prototype.fill()` on an empty array would not modify it as the array has nothing to be modified. To use `Array.prototype.fill()` when declaring an array, make sure to assign slots to the array.

The `fill()` method:

- fills specified elements in an array with a value;
- overwrites the original array;
- Start and end position can be specified. If not, all elements will be filled.

## Syntax

```js
array.fill(value);
array.fill(value, start);
array.fill(value, start, end);
```

## Parameters

==**value**== - value to fill the array with. (Note all elements in the array will be this exact value.) If the value is an object, each slot in the array will reference that object.

==**start**== (optional) - start index (inclusive), default 0.

==**end**== (optional) - end index (exclusive), default `arr.length`.

## Return value

The ==**modified** array==, filled with value.

## Reference

1. [Array.prototype.fill() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
2. [fill() - w3schools](https://www.w3schools.com/jsref/jsref_fill.asp)
