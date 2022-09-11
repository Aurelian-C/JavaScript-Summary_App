# The `while` Loop

The `while` loop loops through a block of code as long as a specified **condition is true**.

The `while` statement creates a loop that executes a specified statement as long _as the test condition evaluates to true_. The condition is evaluated before executing the statement.

## Syntax

```js
while (condition) {
  statement;
}
```

_condition_: an expression evaluated before each pass through the loop. If this condition **evaluates to true**, `statement` is executed. When condition **evaluates to false**, execution continues with the `statement` after the while loop.

_statement_: an optional statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement {} to group those statements.

Note: Use the **`break`** statement to _stop a loop before condition evaluates to true_.

```js
// Example:
while (i < 10) {
  text += 'The number is ' + i;
  i++;
}

// If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
```

## Difference between `for` and `while`

A `while` loop is much the same as a `for` loop, with `initialExpression` and `incrementExpression` omitted.

```js
// The loop in this example uses a for loop to collect the car names from the cars array:
const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
let i = 0;
let text = '';

for (; cars[i]; ) {
  text += cars[i];
  i++;
}

// The loop in this example uses a while loop to collect the car names from the cars array:
const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
let i = 0;
let text = '';

while (cars[i]) {
  text += cars[i];
  i++;
}
```

## References

1. [`while` loop - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
2. [`while` loop - w3schools](https://www.w3schools.com/js/js_loop_while.asp)
