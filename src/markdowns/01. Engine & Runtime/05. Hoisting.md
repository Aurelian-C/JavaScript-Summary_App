# Hoisting

Hoisting is the **process of putting all _variable_ and _function declarations_ into memory during the compile phase**. In JavaScript, **_functions are fully hoisted_**, **_`var` variables are hoisted and initialized to `undefined`_**, and **_`let` and `const` variables are hoisted but not initialized a value_**. `var` variables are given a memory allocation and initialized a value of `undefined` until they are set to a value in line. So if a `var` variable is used in the code before it is initialized, then it will return `undefined`. However, a function can be called from anywhere in the code base because it is fully hoisted. If `let` and `const` are used before they are declared, then they will throw a reference error because they have not yet been initialized.

```js
// function EXPRESSION gets hoisted as undefined
var sing = function () {
  console.log('uhhhh la la la');
};

// function DECLARATION gets fully hoisted
function sing2() {
  console.log('ohhhh la la la');
}
```

```js
// function declaration gets hoisted
function a() {
  console.log('hi');
}

// function declaration get rewritten in memory
function a() {
  console.log('bye');
}

console.log(a());
// bye
```

```js
// variable declaration gets hoisted as undefined
var favoriteFood = 'grapes';

// function expression gets hoisted as undefined
var foodThoughts = function () {
  // new execution context created favoriteFood = undefined
  console.log(`Original favorite food: ${favoriteFood}`);

  // variable declaration gets hoisted as undefined
  var favoriteFood = 'sushi';
  console.log(`New favorite food: ${favoriteFood}`);
};

foodThoughts();
```

_In the_ **creation phase**, _we have one more step, we have something called_ **hoisting**.

Hoisting is the behavior of _moving the **variables** or **function declarations** to the top of their respective environments during compilation phase_.

**Variables are partially hoisted** and **function declarations are hoisted**. _When I said variables are partially hoisted, we hoist the variable but not the right side, not the actual value, we just assign it to `undefined`. Functions are fully hoisted, that means the function declaration, during the creation phase, are assigned a location and memory and you can think of it this way: where any time we call that function we know where the piece of code inside that function is in memory, so that if we call that function, we can run it and it's working_.

_Hoisting is the JavaScript engine **allocating memory for the variables and functions that it sees in your code during the creation phase before it executes it**. In the creation phase, the JavaScript engine parse our code and if sees `var` or `function` keywords, it's going to hoist them and make space for them in memory_.

> Takeaways: Avoid hoisting when possible. It can cause memory leaks and hard to catch bugs in your code. **Use `let` and `const` as your go to variables**.
