# Spread syntax (...) and arays

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

## Spread in object literals

Spread in object literal will **copies own enumerable properties from a provided object onto a new object**.

Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than `Object.assign()`.

```js
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

Note that `Object.assign()` triggers `setters`, whereas spread syntax doesn't.

Note that you cannot replace or mimic the `Object.assign()` function:

```js
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = (...objects) => ({ ...objects });

let mergedObj1 = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

In the above example, the spread syntax does not work as one might expect: it spreads an _array_ of arguments into the object literal, due to the rest parameter.

## Only for iterables

Spread syntax (other than in the case of spread properties) can only be applied to **iterable** objects like `Array`, or with iterating functions such as `map()`, `reduce()`, and `assign()`.

**Many objects are not iterable**, including `Object`:

```js
let obj = { key1: 'value1' };
let array = [...obj]; // TypeError: obj is not iterable
```

To use spread syntax with these objects, you will need to provide an iterator function.

## References

1. [Spread syntax (...) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
