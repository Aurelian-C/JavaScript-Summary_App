# `break` and `continue` statements

The `break` statement **"jumps out"** of a loop.

The `continue` statement **"jumps over"** one iteration in the loop.

## The `break` statement

The `break` statement can also be used to **jump out of a loop**:

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += 'The number is ' + i + '<br>';
}

// In the example above, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.
```

# The `continue` statement

The `continue` statement **breaks one iteration** (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

```js
// This example skips the value of 3:
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += 'The number is ' + i + '<br>';
}
```

## References

[`break` & `continue` statements - w3schools](https://www.w3schools.com/js/js_break.asp)
