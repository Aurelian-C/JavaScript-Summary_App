# Static vs Dynamically Typed

## Dynamic typing

JavaScript is a "dynamically typed language", which means that, unlike some other languages, you don't need to specify what data type a variable will contain (numbers, strings, arrays, etc).

For example, if you declare a variable and give it a value enclosed in quotes, the browser treats the variable as a string:

```js
let myString = 'Hello';
```

Even if the value enclosed in quotes is just digits, it is still a string — not a number — so be careful:

```js
let myNumber = '500'; // oops, this is still a string
typeof myNumber;

myNumber = 500; // much better — now this is a number
typeof myNumber;
```

You'll notice that we are using a special operator called `typeof` — this returns the data type of the variable you type after it.

## References

1. [Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
