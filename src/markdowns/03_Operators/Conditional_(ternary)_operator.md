# Conditional (Ternary) operator

Expression = any unit of code that can be evaluated to a value. JavaScript evaluates expressions from left to right.

Statement = an instruction to perform a specific action. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. JavaScript programs are actually a sequence of statements.

```js
// Expressions
3 + 4; //this is an expression because produce a value
1991; //this is an expression because produce a value
true && false && !false; //this is an expression because produce a value

// Statements
if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
```

JavaScript contains a Conditional (Ternary) operator that **assigns a value to a variable based on some condition**. _The ternary operator is not thought as a replacement of if/else statement. We still need if/else all the time_. For example when we have bigger blocks of code that we need to execute based on a condition. In that case the ternary operator is not gonna work.

The ternary operator is in fact an operator, just as the name says. Remember that an operator always produces a value, so in other words **an operator is an expression, not a statment**. So what this means is that if we have a value, we can then assign that value to a variable. So with this we can make the ternary operator really useful to basically **conditionally declare variables**.

```js
// With ternary operator
const drink = age >= 18 && age <= 65 ? 'wine' : 'water';

// With if/else statement (without ternary operator)
let drink;
if (age >= 18 && age <= 65) {
  drink = 'wine';
} else {
  drink = 'water';
}
```

Ternary operator is an expression because produce a value vs if/else is a statement.
