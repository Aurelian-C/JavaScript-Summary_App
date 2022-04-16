# Introduction to JavaScript Operators

An operator `(=,` `+`, `-`, `*`, `/`, `typeof`, etc) allows us to **transform values** or **combine multiple values** and do all kinds of work with values.

There are many categories of operators like mathematical operators, comparison operators, logical operators, assignment operators and many more.

## Type Conversion and Coercion (Explicit & Implicit Type Coercion)

In JavaScript, there is **Explicit Type Coercion** and **Implicit Type Coercion**.

JavaScript variables can be converted to a new variable and another data type:

- by the use of a JavaScript build-in functions (**explicit** type coercion);
- automatically by JavaScript itself (**implicit** type coercion).

**Explicit Type Coercion** is when we **_manually_ convert from one type to another** with help of JavaScript build-in functions (`Number()`, `String()`, `Boolean()`).

```js
const inputYear = '1991';
Number(inputYear);
Number(inputYear) + 18; //2009 (explicit type coercion)
Number('Jonas'); // NaN (this behavior is because it's impossible to convert Jonas to a number
console.log(String(23), 23); // '23' 23
```

Since JavaScript is a weakly-typed language, values can also be **converted between different types automatically**, and it is called **Implicit Type Coercion**. So, Implicit Type Coercion is when JavaScript **_automatically_ converts types behind the scenes** for us. Basically Implicit Type Coercion happens whenever **an operator is dealing with two values that have different types**. JavaScript will then, behind the scenes, convert one of the values to match the other value so that in the end, the operation can be executed.

```js
const inputYear = '1991';
inputYear + 18; // 199118 (implicit type coercion with concatenation)
```

Also, Implicit Type Coercion can be triggered by the surrounding context, like with `if (value) {…}`, where `value` is coerced to boolean. One operator that does not trigger implicit type coercion is `===`, which is called the strict equality operator. The loose equality operator `==` on the other hand does both comparison and type coercion if needed.

```js
console.log('I am ' + 23 + ' years old'); // In JavaScript, the + (plus) operator triggers a coercion to strings, and so whenever there is an operation between a string and the number, the number will be converted to a string.

console.log('23' - '10' - 3); // The - (minus) operator actually triggers the opposite conversion. So in this case, strings are converted to numbers and not the other way around.

console.log('23' * '2'); // Both strings are converted to numbers because that's the only way that the multiplier operator can work.

console.log('23' / '2'); // Both strings are converted to numbers because that's the only way that the divide operator can work.

console.log('23' > '18'); // Both strings are converted to numbers because that's the only way that the logical operator can work.
```

The first rule to know is that JavaScript can only convert 3 types. So we can convert to:

- to string
- to boolean
- to number

Secondly, conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those 3 ways.

## Operator precedence

Operator precedence determines **how operators are parsed** concerning each other. Operators with **higher precedence** become the operands of operators with **lower precedence**.

```js
console.log(3 + 4 * 5); // 3 + 20
// expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// expected output: 36

let a;
let b;

console.log((a = b = 5));
// expected output: 5
```

### Precedence And Associativity

Consider an expression describable by the representation below. Note that both `OP1` and `OP2` are fill-in-the-blanks for Operators.

```js
 a OP1 b OP2 c
```

If `OP1` and `OP2` have **different precedence levels** (see the table below), the **operator with the highest precedence goes first and associativity does not matter**. Observe how multiplication has higher precedence than addition and executed first, even though addition is written first in the code.

```js
console.log(3 + 10 * 2); // logs 23
console.log(3 + 10 * 2); // logs 23 because parentheses here are superfluous
console.log((3 + 10) * 2); // logs 26 because the parentheses change the order
```

The difference in **associativity comes into play when there are multiple operators of the same precedence**. With only one operator or operators of different precedences, associativity doesn't affect the output.

### Note on grouping and short-circuiting

In the table below, **Grouping** is listed as having the highest precedence. However, that does not always mean the expression within the grouping symbols `( … )` is evaluated first, especially when it comes to short-circuiting.

Short-circuiting is jargon for conditional evaluation. For example, in the expression `a && (b + c)`, if `a` is falsy, then the sub-expression `(b + c)` will not even get evaluated, even if it is in parentheses. We could say that the logical conjunction operator `&&` is "short-circuited". Along with logical conjunction, other short-circuited operators include logical disjunction ("OR"), nullish-coalescing, optional chaining, and the conditional operator.

```js
a || b * c; // evaluate `a` first, then produce `a` if `a` is "truthy"
a && b < c; // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

## References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)

2. [JavaScript type coercion explained - freecodecamp.org](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)

3. [Operator precedence - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
