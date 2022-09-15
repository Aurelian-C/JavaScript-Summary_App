# Lexical Environment

A lexical environment is basically the scope or environment the JavaScript Engine is currently reading code in. **A new lexical environment is created when curly brackets `{}` are used**, _even nested brackets `{{...}}` create a new lexical environment_. The execution context tells the engine which lexical environment it is currently working in, and the lexical scope determines the available variables.

```js
function one() {
  let isValid = true; // local env
  two(); // new execution context
}

function two() {
  let isValid; // undefined
}

let isValid = false; // global

one();
/*
two() isValid = undefined
 one() isValid = true
  global() isValid = false
------------------------
call stack
*/
```

**Lexical environment is simply _where you write something_**, _because we now know how our JavaScript Engine works. That is, it looks through our code and read through our code and **where we write something is important**. A lexical environment simply means that_.

What is the first lexical environment that we have? Well, _the very first lexical environment is the **global lexical environment**, where we write our code_.

## References

1. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
