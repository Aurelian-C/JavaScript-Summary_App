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

## Spread in array literals

### A more powerful array literal

Without `spread` syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of `push()`, `splice()`, `concat()`, etc. With `spread` syntax this becomes much more succinct:

```js
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]
```

> Note: just like `spread` for functions argument lists, `...` can be used anywhere in the array literal, and may be used more than once.

### Copy an array

```js
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected
```

> Note: Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays, as the following example shows. (The same is true with Object.assign() and spread syntax)
>
> ```js
> let a = [[1], [2], [3]];
> let b = [...a];
>
> b.shift().shift();
> //  1
>
> //  Oh no!  Now array 'a' is affected as well:
> a;
> //  [[], [2], [3]]
> ```

### A better way to concatenate arrays

`Array.prototype.concat()` is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

With spread syntax this becomes:

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
//  arr1 is now [0, 1, 2, 3, 4, 5]
// Note: Not to use const otherwise, it will give TypeError (invalid assignment)
```

`Array.prototype.unshift()` is often used to insert an array of values at the start of an existing array. Without spread syntax, this is done as:

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);

//  arr1 is now [3, 4, 5, 0, 1, 2]
```

With spread syntax, this becomes:

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2]
```

> Note: Unlike `unshift()`, this creates a new `arr1`, and does not modify the original `arr1` array in-place.

## References

1. [Spread syntax (...) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
