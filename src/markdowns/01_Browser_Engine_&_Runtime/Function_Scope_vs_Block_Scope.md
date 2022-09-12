# Function Scope vs Block Scope

Most programming languages are block scoped, meaning every time you see a new `{}` (curly braces) is a new lexical environment. However, **JavaScript is function scoped**, _meaning it only creates a new local environment if it sees the keyword `function` on the global scope_. **To give us access to block scope, in ES6 `let` and `const` were added to the language**. _Using these can prevent memory leaks_, but there is still an argument to be made for using `var`.

```js
//Function Scope
function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final', i); // returns final 5
}

//Block Scope
function loop2() {
  for (let i = 0; i < 5; i++) {
    // can access i here
  }
  console.log('final', i); // returns an error here
}

loop();
/*
  1
  2
  3
  4
  final 5
*/

loop2();
// ReferenceError: i is not defined
```

Oh, I get a reference here, "i is not defined" and why is that? Well, because we use `let` and not `var` keyword and we're trying to use `i` outside of its environment, with `let` keyword `i` is block scoped, so the environment that it's in while it's inside of the curly brackets `{}`, so we can't really access it outside of those brackets, so this isn't going to work.

Now, this may have unintended consequences. Maybe you do want to print this properly. So there are cases where the `var` keyword is still useful, but it's nice to know that we now have a way to have block scoping whenever we need it.

_So to review, **block scoping means declaring a variable not just inside a function, but around any curly brackets `{}`**, like `if` statements or loops. Now, the variable itself `let i` is actually still in memory, but the engine just won't allow you to access it before, like it was when we used `var` keyword_.

Remember, **scope means what variables we have access to** and JavaScript has function scope, right? _**Every time we create a function, we create a new execution context which has its own variable environment**_. But you see, most other programming languages have something called block scope, so what's the difference?

```js
// Function scope
function a(5 > 4) {
    var secret = '12345'
};
secret;  //Reference error
// Well, in this case with function scope, we can't access the 'secret'.

// Block scope
if (5 > 4) {
    var secret = '12345'
};
secret;  //12345
```

_Because JavaScript uses function scope, I can actually access the `secret` variable outside the block, because_ **`var` keyword is only functionally scoped, not block scope**, _and that means we only create a new scope, a new environment when `var` is write in a function, not in a block_.

_Now, in most other programming languages, they use block scope and block scope is, well, any time I see a block of code that is in curly brackets `{}`, I'm going to create a new world, a new environment. In other programming languages, if I want to acces `secret` outside of the block, I wouldn't be able to access it like I can with JavaScript and JavaScript saw this behavior with the block scope and said "Hmm, I want to be able to do block scoping too. How can I do that?". Well,_ **with ES6 they introduced the `let` and the `const` keywords and they allow us to use block scoping**.

`let` & `const`: **Variable declarations with `let` and `const` work differently from the `var` variable declaration** and I wanted to take a minute to explain. When a lexical scope is entered and the execution context is created, the engine allocates memory for any `var` variable in that scope and initializes it to `undefined`. The `let` and `const` variables only get initialized on the line they are executed on and only get allocated `undefined` if there is no assignment to the variable. Trying to access a `let` or `const` variable before it is declared or outside of its block without returning it will result in a `Reference Error`.
