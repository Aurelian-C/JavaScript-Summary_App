# Closures & local vs global variables

Variables declared within a JavaScript function, become LOCAL to the function. Local variables can only be accessed from within the function. Since local variables are only recognized inside their functions, variables with the same name can be used in different functions. Local variables are created when a function starts, and deleted when the function is completed.

## Local vs global variables

JavaScript variables can belong to the local or global scope. Global variables can be made local (private) with closures. A function can access all variables defined inside (local variables) and outside (global variables) the function. In a web page, global variables belong to the window object.

Global variables can be used (and changed) by all scripts in the page (and in the window). A local variable can only be used inside the function where it is defined, it is hidden from other functions and other scripting code. Global and local variables with the same name are different variables, modifying one does not modify the other.

Note: Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

## Variable Lifetime

Global variables live until the page is discarded, like when you navigate to another page or close the window. Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished. Suppose you want to use a variable for counting something, and you want this counter to be available to all functions. You could use a global variable, and a function to increase the counter:

```js
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
```

There is a problem with the solution above: Any code on the page can change the counter, without calling add(). The counter should be local to the add() function, to prevent other code from changing it.

## Nested Functions

All functions have access to the global scope. In fact, in JavaScript, all functions have access to the scope "above" them. JavaScript supports nested functions. Nested functions have access to the scope "above" them. In this example, the inner function plus() has access to the counter variable in the parent function:

```js
function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}
```

This could have solved the counter dilemma, if we could reach the plus() function from the outside. We also need to find a way to execute counter = 0 only once. We need a closure.

## Closures

Remember self-invoking functions? What does this function do?

```js
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

// the counter is now 3
```

Example Explained

- The variable add is assigned to the return value of a self-invoking function.
- The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
- This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
- This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
- The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

Note: A closure is a function having access to the parent scope, even after the parent function has closed.
