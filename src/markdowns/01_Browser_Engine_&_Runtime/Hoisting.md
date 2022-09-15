# Hoisting

Hoisting refers to the process whereby the interpreter appears to move the ==**declaration of functions**==, ==**variables**== or ==**classes**== to the top of their scope, prior to execution of the code.

Hoisting allows functions to be safely used in code before they are declared.

Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.

## Function hoisting

One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

```js
catName("Tiger"); // "My cat's name is Tiger"

function catName(name) {
  console.log(`My cat's name is ${name}`);
}

// Without hoisting you would have to write the same code like this
function catName(name) {
  console.log(`My cat's name is ${name}`);
}

catName("Tiger"); // "My cat's name is Tiger"
```

## Variable hoisting

Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

However, ==JavaScript only hoists declarations, not initializations!== This means that initialization doesn't happen until the associated line of code is executed, even if the variable was originally initialized then declared, or declared and initialized in the same line. Until that point in the execution is reached, the variable has its *default* initialization (`undefined` for a variable declared using `var`, otherwise uninitialized).

Below are some examples showing _what can happen if you use a variable before it is declared_.

### ```var``` hoisting

Here we declare and then initialize the value of a `var` after using it. The default initialization of the `var` is `undefined`.

```js
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.
```

The same thing happens if we declare and initialize the variable in the same line.

```js
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.
```

### ```let``` and ```const``` hoisting

Variables declared with `let` and `const` are also ==hoisted== but, unlike `var`, are ==not initialized with a default value==. An exception will be thrown if a variable declared with `let` or `const` is read before it is initialized.

```js
console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization
```

Note that it is the order in which code is *executed* that matters, not the order in which it is written in the source file. The code will succeed provided the line that initializes the variable is executed before any line that reads it.

### ```class``` hoisting

Classes defined using a ==**class declaration** are hoisted==, which means that JavaScript has a reference to the class. However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will throw a `ReferenceError`.



### Function and class expression hoisting

[Function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) and [class expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_expressions) are ==not hoisted==.

The expressions evaluate to a function or class (respectively). They are typically then assigned to a variable or passed to other functions. In this case, the variable declaration is hoisted and the expression is its initialization. Therefore the expressions are not evaluated until the relevant line is executed.

## References

1. [Hoisting - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
2. [JavaScript Hoisting - w3schools](https://www.w3schools.com/js/js_hoisting.asp)
