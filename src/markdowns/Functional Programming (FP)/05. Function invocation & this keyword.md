# Function invocation & `this` keyword

## What is 'this'?

In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called). The this keyword refers to different objects depending on how it is used:

- In an object method, this refers to the object.
- Alone, this refers to the global object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), apply(), and bind() can refer this to any object.
  Note: this is not a variable, this is a keyword. You cannot change the value of this.

## The Global Object

When a function is called without an owner object, the value of this becomes the global object. In a web browser the global object is the browser window. This example returns the window object as the value of this:

```js
let x = myFunction(); // x will be the window object

function myFunction() {
  return this;
}
```

Invoking a function as a global function, causes the value of this to be the global object. Using the window object as a variable can easily crash your program.

## Invoking a Function as a Method

In JavaScript you can define functions as object methods. The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):

```js
const myObject = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
myObject.fullName(); // Will return "John Doe"
```

The fullName method is a function (method). The function (method) belongs to the myObject object. myObject is the owner of the function (method). The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.
Note: Invoking a function as an object method, causes the value of this to be the object itself.

## Invoking a Function with a Function Constructor

If a function invocation is preceded with the new keyword, it is a constructor invocation. It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:

```js
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

// This creates a new object
const myObj = new myFunction('John', 'Doe');

// This will return "John"
myObj.firstName;
```

A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.

Note: the this keyword in the constructor does not have a value. The value of this will be the new object created when the function is invoked.
