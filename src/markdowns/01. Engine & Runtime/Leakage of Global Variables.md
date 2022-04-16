# Leakage of Global Variables

```js
// It asks global scope for height.
// Global scope says: ummm... no but here I just created it for you.
// We call this leakage of global variables.
// Adding 'use strict' to the file prevents this and causes an error.
function weird() {
  height = 50;
}

var heyhey = function doodle() {
  // code here
};

heyhey();
doodle(); // Error! because it is enclosed in its own scope.
```

_Is `height` being created in the variable environment of `weird`? Well, no, and that's because JavaScript is a little bit weird here. This is actually called **leakage of global variables**, because what JavaScript does underneath the hood is that it looks at `height`, it says "This isn't in my nothing's been declared. I haven't seen a `var` or a `const` or a `let` keyword, so I don't have it". Those keywords (`var`, `let`, `const`) tell JavaScript to put those in our variable environment, but it's not there. So it's going to go up the scope chain to the global environment and says "Hey, is there such a thing as a `height`?". And the global environment is going to say "No, I don't have it", but it's not throwing in the air, is it? And that's because the global environment actually sees that this doesn't exist and will create it for you_.

This is something that in the past with JavaScript you could do and it caused a lot of problems, so now we have something like `use strict`. That if I add `use strict` to the top of a page, `use strict` was introduced as a way to prevent JavaScript for doing these weird, unpredictable edge cases because JavaScript was written by a programmer and there's no such thing as a perfect programming language or a perfect program, and `use strict` allows us to avoid these pitfalls that shouldn't happen.

As soon as I used `use strict`, it's going to throw an error that says "Height is not defined" because it's going to go up the scope chain and it's going to say "No, you've never really declared this variable. I have no idea what you're talking about".
