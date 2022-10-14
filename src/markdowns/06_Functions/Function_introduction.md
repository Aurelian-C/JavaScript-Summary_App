# Function introduction

Programs are simply assigning memory, for example assigning a value to a variable, and then running a function for the program to do something with those variables. That's all programs are, and without functions, our programs wouldn't do anything.

Functions are an important concept in all programming languages.

## What is a function?

A JavaScript function is a **block of code** designed to perform a particular task. A JavaScript function is **executed when "something" invokes it (calls it)**.

Functions allow you to **store a piece of code that does a single task inside a defined block**, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times.

## Why Functions?

- You can **reuse code**: Define the code once, and use it many times.
- You can **use the same code many times with different arguments, to produce different results**.

## Built-in browser functions

We've made use of functions built in to the browser a lot. Every time we manipulated a text string, for example:

```js
onst myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
```

Or every time we manipulated an array:

```js
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
```

Or every time we generated a random number:

```js
const myNumber = Math.random();
```

The JavaScript language has many **built-in functions** to **allow you to do useful things _without having to write all that code yourself_**. In fact, some of the code you are calling when you **invoke** (_a fancy word for run, or execute_) a built-in browser function couldn't be written in JavaScript — many of these functions are calling parts of the background browser code, which is written largely in low-level system languages like C++, not web languages like JavaScript. Bear in mind that some built-in browser functions are not part of the core JavaScript language — some are defined as part of browser APIs, which build on top of the default language to provide even more functionality.

## Functions versus methods

Functions that are **part of objects** are called **methods**.

Probably you've seen a lot of **custom functions** in your JavaScript learning journey — **functions defined in your code, not inside the browser**. _Anytime you saw a custom name with parentheses straight after it, you were using a custom function_.

Functions can contain whatever code you like — you can even call other functions from inside functions.

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

References

1. [Functions — reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
