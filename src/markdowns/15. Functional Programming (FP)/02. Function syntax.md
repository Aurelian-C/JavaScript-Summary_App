# Function syntax

JavaScript functions are defined with the `function` keyword. You can use a function declaration or a function expression.

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

## Arrow Functions

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
