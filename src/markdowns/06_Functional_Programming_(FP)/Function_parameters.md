# Function parameters

Some functions require **parameters to be specified when you are invoking them** — these are values that need to be included inside the function parentheses, which it needs to do its job properly. Parameters are sometimes called arguments, properties, or even attributes.

As an example, the browser's built-in `Math.random()` function doesn't require any parameters. When called, it always returns a random number between 0 and 1:

```js
const myNumber = Math.random();
```

The browser's built-in string replace() function however needs two parameters — the substring to find in the main string, and the substring to replace that string with:

```js
const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
```

Sometimes parameters are optional — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior. As an example, the array `join()` function's parameter is optional:

```js
const myArray = ['I', 'love', 'chocolate', 'frogs'];

const madeAString = myArray.join(' '); // returns 'I love chocolate frogs'
const madeAnotherString = myArray.join(); // returns 'I,love,chocolate,frogs'
```

A JavaScript function does not perform any checking on parameter values (arguments). Earlier in this chapter, you learned that functions can have parameters. Function **parameters** are the names listed in the function definition. Function **arguments** are the real values passed to (and received by) the function.

## Parameter Rules

- JavaScript function definitions do not specify data types for parameters.
- JavaScript functions do not perform type checking on the passed arguments.
- JavaScript functions do not check the number of arguments received.
- When you need to specify multiple parameters, they are separated by commas.

## Default Parameters

Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed. If a function is called with missing arguments (less than declared), the missing values are set to `undefined`. Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter.

In the past, the general strategy for setting defaults was to test parameter values in the `function` body and assign a value if they are `undefined`.

```js
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
}
```

With default parameters in ES2015, checks in the `function` body are no longer necessary.

```js
function myFunction(x, y = 2) {
  // function code
}
```

### Passing `undefined` vs. other falsy values

In the example below, at the second function call, even if the first argument is set explicitly to `undefined` (though not `null` or other falsy values), the value of the `num` argument is still the default.

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)

// test with other falsy values:
test(''); // 'string' (num is set to '')
test(null); // 'object' (num is set to null)
```

### Evaluated at call time

The default argument is evaluated at _call time_. So, unlike (for example) Python, a new object is created each time the function is called.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], not [1, 2]
```

### Earlier parameters are available to later default parameters

Parameters defined earlier (to the left) are available to later default parameters:

```js
function greet(name, greeting, message = greeting + ' ' + name) {
  return [name, greeting, message];
}

greet('David', 'Hi'); // ["David", "Hi", "Hi David"]
greet('David', 'Hi', 'Happy Birthday!'); // ["David", "Hi", "Happy Birthday!"]
```

### Parameters without defaults after default parameters

Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

### Destructured parameter with default value assignment

You can use default value assignment with the destructuring assignment notation. A common way of doing that is to assign an empty object/array to the destructured object/array; for example: `[x = 1, y = 2] = []` . By doing it that way, you make it possible to pass an empty array/object to the function and still have those values prefilled:

```js
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// Works the same for objects:
function preFilledObject({ z = 3 } = {}) {
  return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2
```

## The Arguments Object

JavaScript functions have a built-in object called the arguments object. The argument object contains an array of the arguments used when the function was called (invoked). This way you can simply use a function to find (for instance) the highest value in a list of numbers:

```js
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
```

If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

## Arguments are _Passed by Value_ vs Objects are _Passed by Reference_

The parameters, in a function call, are the function's arguments. JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations. If a function changes an argument's value, it does not change the parameter's original value. Changes to arguments are not visible (reflected) outside the function.

In JavaScript, object references are values. Because of this, objects will behave like they are passed by reference: If a function changes an object property, it changes the original value. Changes to object properties are visible (reflected) outside the function.

References

1. [Functions — reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

2. [Default parameters - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
