# Function syntax

JavaScript functions are defined with the `function` keyword. You can use a ==function **declaration**== or a ==function **expression**==.

## Function Declarations

A JavaScript function declaration is defined with the `function` keyword, followed by a **name**, followed by parentheses **()**. Function names can contain letters, digits, underscores, and dollar signs (same rules as variables). The parentheses may include parameter names separated by commas: (**parameter1**, **parameter2**, ...). The code to be executed, by the function, is placed inside curly brackets: {}

Function **parameters** are listed inside the parentheses () in the function definition. Function **arguments** are the **values** received by the function when it is invoked. _Inside the function, the **arguments (the parameters) behave as local variables**_. Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

## Function Expressions

A JavaScript function can also be defined using an **expression**. A function expression can be stored in a variable:

```js
const x = function (a, b) {
  return a * b;
};
```

After a function expression has been stored in a variable, the variable can be used as a function:

```js
const x = function (a, b) {
  return a * b;
};
let z = x(4, 3);
```

The function above is actually an **anonymous function** (_a function without a name_). Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

## Anonymous functions

So far we have just created a function like so:

```js
function myFunction() {
  alert('hello');
}
```

Copy to Clipboard

But you can also create a function that doesn't have a name:

```JS
(function () {
  alert('hello');
})
```

This is called an **anonymous function**, because it has no name. You'll often see anonymous functions when a function expects to receive another function as a parameter. In this case the function parameter is often passed as an anonymous function:

```js
textBox.addEventListener('keydown', function(event) {
  console.log(`You pressed "${event.key}".`);
});
```

## Arrow Functions

If you pass an anonymous function like this, there's an alternative form you can use, called an **arrow function**. Instead of `function(event)`, you write `(event) =>`:

```js
textBox.addEventListener('keydown', (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

If the function only has one line in the curly brackets, you omit the curly brackets:

```js
textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));
```

If the function only takes one parameter, you can also omit the brackets around the parameter:

```js
textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));
```

Finally, if your function needs to return a value, and contains only one line, you can also omit the `return` statement. In the following example we're using the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method of `Array` to double every value in the original array:

```js
const originals = [1, 2, 3];

const doubled = originals.map((item) => item * 2);

console.log(doubled); // [2, 4, 6]
```

Arrow functions allows a **short syntax** for writing **function expressions**. You don't need the function keyword, the return keyword, and the curly brackets.

```js
// ES5
var x = function (x, y) {
  return x * y;
};

// ES6
const x = (x, y) => x * y;
```

Arrow functions do not have their own this. They are not well suited for defining object methods. Arrow functions are not hoisted. They must be defined before they are used. Using const is safer than using var, because a function expression is always constant value. You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

```js
const x = (x, y) => {
  return x * y;
};
```

## 

## References

1. [Function expression - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
2. [Anonymous functions - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#anonymous_functions_and_arrow_functions)
