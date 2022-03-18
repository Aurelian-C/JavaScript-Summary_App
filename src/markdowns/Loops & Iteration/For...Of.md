# for...of loop

The `for...of` statement creates a _loop iterating_ over **iterable objects**, including: built-in `String`, `Array`, array-like objects (e.g., `arguments` or `NodeList`), `TypedArray`, `Map`, `Set`, and user-defined iterables.

## Syntax

```js
for (variable of iterable) {
  statement;
}
```

_`variable`_: on each iteration a value of a different property is assigned to `variable`. `variable` may be declared with const, let, or var.

_`iterable`_: object whose iterable properties are iterated.

## Closing iterators

In `for...of` loops, abrupt iteration termination can be caused by **`break`**, **`throw`** or **`return`**. In these cases, the iterator is closed.

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}

for (const o of foo()) {
  console.log(o);
  break; // closes iterator, execution continues outside of the loop
}
console.log('done');
```

## Difference between for...of and for...in

Both `for...in` and `for...of` statements iterate over something. The main difference between them is in what they iterate over.

- The `for...in` statement iterates over the **enumerable properties** of an object.
- The `for...of` statement iterates over values that the **iterable object** defines to be iterated over.
