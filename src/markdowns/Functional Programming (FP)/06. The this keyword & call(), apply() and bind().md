# The `this` keyword & `call()`, `apply()` and `bind()`

## All Functions are Methods

In JavaScript all functions are object methods. If a function is not a method of a JavaScript object, it is a function of the global object (Function Invocation & this keyword - The Global Object).

## call() method

The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter).
Method Reuse: with the call() method, you can write a method that can be used on different objects.

```js
const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const person2 = {
  firstName: 'Mary',
  lastName: 'Doe',
};

person.fullName.call(person1); // This will return 'John Doe'
```

## apply() method

The apply() method is similar to the call() method. The difference between call() and apply() are:

- The call() method takes arguments separately.
- The apply() method takes arguments as an array.

Note: The apply() method is very handy if you want to use an array instead of an argument list.
JavaScript Strict Mode: in JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.
