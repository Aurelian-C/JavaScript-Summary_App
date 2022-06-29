# Short Circuiting with `&&` and `||`

The two Short-Circuit operators are represented with the symbol `&&` and `||` which can be pronounced as “and “ and “or” respectively. They are basically used to ==**combine expressions**==.

## Using the `&&`operator

==true **&&** statement== _(if the first condition is `true`, the ==statement is executed==)_

==false **&&** statement== _(if the first condition is `false`, the ==statement is **NOT** executed==)_

> **Note:** if we are ==using the **&&** operator to execute a statement==, we want the Boolean Expression to **pass** before the statement would be executed. Therefore, the `&&` operator executes or is equivalent to the `if` block of a conditional statement.
>
> ```js
> // true && statement
> if (true) {
>   //statement is executed
> }
>
> // false && statement
> if (false) {
>   //statement is NOT executed
> }
> ```

## Using the `||` operator

==true **||** statement== (if the first condition is `true`, the ==statement is **NOT** executed==)

==false **||** statement== (if the first condition is `false`, the ==statement is executed==)

> **Note:** if we are ==using the **||** operator to execute a statement==, we want the Boolean Expression to **fail** before the statement would be executed. Therefore the `||` operator executes or is equivalent to the `else` block of a conditional statement.
>
> ```js
> // true || statement
> if (true) {
>   //this statement is executed
> } else {
>   //this statement is NOT executed
> }
>
> // false || statement
> if (false) {
>   //this statement is NOT executed
> } else {
>   //this statement is executed
> }
> ```

## Conclusion

The short-circuit operators are very tricky because they can be used in more than one ways. Therefore, when you see it in an existing code, be sure to detect the intended usage of the programmer. But if you are going to use one, ==be extra careful when using it to execute a statement especially if you are combining two Boolean expressions plus a statement **e.g (Boolean && Boolean && Statement)**==.

## Reference

1. [A Simpler Understanding of the Short-circuit Operators in JavaScript - medium.com](https://medium.com/@ezekielphlat/a-simpler-understanding-of-the-short-circuit-operators-in-javascript-d275a313cef1)
