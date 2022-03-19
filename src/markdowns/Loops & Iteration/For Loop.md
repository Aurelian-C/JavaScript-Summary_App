# For Loop

A `for` loop repeats until a specified condition evaluates to `false`.

## Syntax:

```js
for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
  // statement
}
```

When a for loop executes, the following occurs:

1. `initialExpression` is executed (one time) before the execution of the code block.The initializing expression `initialExpression`, if any, is executed. This expression usually **initializes one or more loop counters**, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
2. The `conditionExpression` defines the condition for executing the code block. The `conditionExpression` expression is evaluated. **If the value of `conditionExpression` is true, the loop statements execute**. If the value of condition is false, the for loop terminates. (If the condition expression is omitted entirely, the condition is assumed to be true.)
3. The `incrementExpression` is executed (every time) after the code block has been executed.

## [initialExpression]

Normally you will use `initialExpression` to initialize the variable used in the loop (let i = 0). This is not always the case, JavaScript doesn't care. **`initialExpression` is optional**. You can initiate many values in `initialExpression` (separated by comma):

```js
for (let i = 0, len = cars.length, text = ''; i < len; i++) {
  text += cars[i] + '<br>';
}
```

You can omit `initialExpression` (like when your values are set before the loop starts):

```js
let i = 2;
let len = cars.length;
let text = '';
for (; i < len; i++) {
  text += cars[i] + '<br>';
}
```

## [conditionExpression]

Often `conditionExpression` is used to evaluate the condition of the initial variable. This is not always the case, JavaScript doesn't care. **`conditionExpression` is also optional**. If `conditionExpression` returns true, the loop will start over again, if it returns false, the loop will end.

Note: If you omit `conditionExpression`, you must provide a **`break`** inside the loop, otherwise the loop will never end. This will crash your browser.

## [incrementExpression]

Often `incrementExpression` increments the value of the initial variable. This is not always the case, JavaScript doesn't care, and **`incrementExpression` is optional**. `incrementExpression` can do anything like negative increment (i--), positive increment (i = i + 15), or anything else. `incrementExpression` can also be omitted (like when you increment your values inside the loop):

```js
let i = 0;
let len = cars.length;
let text = '';
for (; i < len; ) {
  text += cars[i] + '<br>';
  i++;
}
```

## Loop Scope

Using `var` in a loop:

```js
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
```

Using `let` in a loop:

```js
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5
```

In the first example, using `var`, the variable declared in the loop redeclares the variable outside the loop.

In the second example, using `let`, the variable declared in the loop does not redeclare the variable outside the loop.

When `let` is used to declare the i variable in a loop, the i variable will only be visible within the loop.

## `for` Loop & Arrays

## Nested `for` Loops
