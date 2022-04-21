# Array.prototype.entries()

The `entries()` method ==returns a new **Array Iterator** object== that contains the key/value pairs for each index in the array. The `entries()` method does ==**not change** the original array==.

## Syntax

```js
array.entries();
```

## Return value

A new ==Array iterator== object (an array with key/value pairs).

## Examples

Iterating with index and element

```js
const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

Using a `for...of` loop

```js
const array = ['a', 'b', 'c'];
const arrayEntries = array.entries();

for (let element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## Reference

1. [Array.prototype.entries() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
2. [entries() - w3schools](https://www.w3schools.com/jsref/jsref_entries.asp)
