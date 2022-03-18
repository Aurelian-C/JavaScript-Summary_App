# Function invocation

## Invoking a JavaScript Function

The code inside a function is not executed when the function is defined. The code inside a function is executed when the function is invoked. It is common to use the term "call a function" instead of "invoke a function". It is also common to say "call upon a function", "start a function", or "execute a function". In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.

The code inside the function will execute when "something" invokes (calls) the function:

- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)
  The () Operator Invokes the Function: accessing a function without () will return the function object instead of the function result.

## Invoking a Function as a Function

```js
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2); // Will return 20
```

The function above does not belong to any object. But in JavaScript there is always a default global object. In HTML the default global object is the HTML page itself, so the function above "belongs" to the HTML page. In a browser the page object is the browser window. The function above automatically becomes a window function.

Note: This is a common way to invoke a JavaScript function, but not a very good practice. Global variables, methods, or functions can easily create name conflicts and bugs in the global object. myFunction() and window.myFunction() is the same function:

```js
function myFunction(a, b) {
  return a * b;
}
window.myFunction(10, 2); // Will return 20
```
