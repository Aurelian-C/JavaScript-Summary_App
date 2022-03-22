# Spread syntax (...) and functions

`spread` syntax `...` allows an **iterable** such as an array expression or string to be **expanded** in places where zero or more arguments (for **_function calls_**) or elements (for **_array_** literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for **_object_** literals) are expected.

## Syntax

### For **_function calls_**:

```js
myFunction(...iterableObj); // pass all elements of iterableObj as arguments to function myFunction
```

### For **_array_** literals:

```js
[...iterableObj, '4', 'five', 6]; // combine two arrays by inserting all elements from iterableObj
```

### For **_object_** literals:

```js
let objClone = { ...obj }; // pass all key:value pairs from an object
```

## `spread` syntax vs `rest` syntax (parameters)

`rest` _syntax looks exactly like_ `spread` _syntax_. In a way, `rest` _syntax is the opposite of_ `spread` _syntax_. `spread` syntax **"expands" an array into its elements**, while `rest` syntax **collects multiple elements and "condenses" them into a single element**.

## Spread in function calls

### Replace `apply()`

It is common to use `Function.prototype.apply()` in cases where you want to use the elements of an array as arguments to a function.

```js
function myFunction(x, y, z) {}
let args = [0, 1, 2];
myFunction.apply(null, args);
```

With `spread` syntax the above can be written as:

```js
function myFunction(x, y, z) {}
let args = [0, 1, 2];
myFunction(...args);
```

Any argument in the argument list can use `spread` syntax, and the `spread` syntax can be **used multiple times**.

```js
function myFunction(v, w, x, y, z) {}
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

### Apply for new operator

When calling a constructor with `new` it's not possible to **directly** use an array and `apply()` (`apply()` does a `[[Call]]` and not a `[[Construct]]`). However, an array can be easily used with new thanks to `spread` syntax:

```js
let dateFields = [1970, 0, 1]; // 1 Jan 1970
let d = new Date(...dateFields);
```

## Spread with many values

When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit. See `apply()` for more details.

## References

1. [Spread syntax (...) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
