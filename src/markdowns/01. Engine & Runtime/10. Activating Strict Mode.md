# Activating Strict Mode

JavaScript's strict mode, introduced in ECMAScript 5, is a way to opt in to a **restricted variant of JavaScript**, thereby implicitly opting-out of "sloppy mode".

> **Note**: Sometimes you'll see the default, **non-strict mode referred to as sloppy mode**. This isn't an official term, but be aware of it, just in case.

Strict mode isn't just a subset: it intentionally has **different semantics from normal code**. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. **Strict mode code and non-strict mode code can coexist**, so scripts can opt into strict mode incrementally.

Strict mode makes **several changes to normal JavaScript semantics**:

- **Eliminates some JavaScript silent errors** by changing them to throw errors.
- **Fixes mistakes that make it difficult for JavaScript engines to perform optimizations**: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
- **Prohibits some syntax** likely to be defined in future versions of ECMAScript.

Strict mode makes it easier for us developers to **avoid accidental errors**, so basically it helps us introduce the bugs into our code and that's because of 2 reasons:

- first, **strict mode forbids us to do certain things**;
- second, it will actually **create visible errors for us in certain situations** in which without strict mode JavaScript will simply fail silently without letting us know that we did a mistake.

Strict mode convert mistakes or bad syntax into errors. If we have any code before 'use strict' then strict mode will not be activated. Comments are allowed because JavaScript will just ignore them.

## Invoking strict mode

Strict mode applies to **entire scripts** or to **individual functions**. It **doesn't apply to block statements enclosed in `{}` braces**; attempting to apply it to such contexts does nothing.

### Strict mode for scripts

To invoke strict mode for an entire script, put the exact statement `"use strict";` (or `'use strict';`) **before any other statements**.

```js
// Whole-script strict mode syntax
'use strict';
var v = "Hi! I'm a strict mode script!";
```

### Strict mode for functions

To invoke strict mode for a function, put the exact statement` "use strict";` (or `'use strict';`) in the function's body **before any other statements**.

```js
// With strict mode enabled
function strict() {
  // Function-level strict mode syntax
  'use strict';
  function nested() {
    return 'And so am I!';
  }
  return "Hi!  I'm a strict mode function!  " + nested();
}

// With strict mode disabled
function notStrict() {
  return "I'm not strict.";
}
```

### Strict mode for modules

ECMAScript 2015 introduced JavaScript modules and therefore a 3rd way to enter strict mode. The entire contents of JavaScript modules are **automatically in strict mode**, with no statement needed to initiate it.

```js
function strict() {
  // because this is a module, I'm strict by default
}
export default strict;
```

### Strict mode for classes

All parts of ECMAScript classes are strict mode code, including both class declarations and class expressions — and so also including all parts of class bodies.

## Changes in strict mode

Strict mode changes both **syntax** and **runtime behavior**.

Changes generally fall into these categories:

- changes converting mistakes into errors (as syntax errors or at runtime);
- changes simplifying how the particular variable for a given use of a name is computed;
- changes simplifying `eval` and `arguments`;
- changes making it easier to write "secure" JavaScript;
- changes anticipating future ECMAScript evolution.

### Converting mistakes into errors

Strict mode **changes some previously-accepted mistakes into errors**. JavaScript was designed to be easy for novice developers, and sometimes it gives operations which should be errors non-error semantics. Sometimes this fixes the immediate problem, but sometimes this creates worse problems in the future. Strict mode treats these mistakes as errors so that they're discovered and promptly fixed.

First, strict mode **makes it impossible to accidentally create global variables**. In normal JavaScript mistyping a variable in an assignment creates a new property on the global object and continues to "work" (although future failure is possible: likely, in modern JavaScript).

```js
'use strict';
mistypeVariable = 17; // Assuming no global variable mistypeVariable exists this line throws a ReferenceError due to the misspelling of variable
```

Second, strict mode **makes assignments which would otherwise silently fail to throw an exception**. For example, `NaN` is a non-writable global variable. In normal code assigning to `NaN` does nothing; the developer receives no failure feedback. In strict mode assigning to `NaN` throws an exception. Any assignment that silently fails in normal code (assignment to a non-writable global or property, assignment to a getter-only property, assignment to a new property on a non-extensible object) will throw in strict mode:

```js
'use strict';

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError
```

Third, strict mode **makes attempts to delete undeletable properties throw** (where before the attempt would have no effect):

```js
'use strict';
delete Object.prototype; // throws a TypeError
```

Fourth, strict mode **requires that function parameter names be unique**. In normal code the last duplicated argument hides previous identically-named arguments. Those previous arguments remain available through `arguments[i]`, so they're not completely inaccessible. Still, this hiding makes little sense and is probably undesirable (it might hide a typo, for example), so in strict mode duplicate argument names are a syntax error:

```js
function sum(a, a, c) {
  // !!! syntax error
  'use strict';
  return a + a + c; // wrong if this code ran
}
```

Fifth, a strict mode in ECMAScript 5 forbids a 0-prefixed octal literal or octal escape sequence. Outside strict mode, a number beginning with a 0, such as `0644`, is interpreted as an octal number (`0644 === 420`), if all digits are smaller than 8. Octal escape sequences, such as "`\45`", which is equal to "`%`", can be used to represent characters by extended-ASCII character code numbers in octal. In strict mode, this is a syntax error. In ECMAScript 2015, octal literals are supported by prefixing a number with "`0o`"; for example:

```js
var a = 0o10; // ES2015: Octal
```

Novice developers sometimes believe a leading zero prefix has no semantic meaning, so they might use it as an alignment device — but this changes the number's meaning! A leading zero syntax for the octal is rarely useful and can be mistakenly used, so strict mode makes it a syntax error:

```js
'use strict';
var sum =
  015 + // !!! syntax error
  197 +
  142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Sixth, strict mode in ECMAScript 2015 forbids setting properties on primitive values. Without strict mode, setting properties is ignored (no-op), with strict mode, however, a `TypeError` is thrown.

```js
(function () {
  'use strict';

  false.true = ''; // TypeError
  (14).sailing = 'home'; // TypeError
  'with'.you = 'far away'; // TypeError
})();
```

In ECMAScript 5 strict-mode code, duplicate property names were considered a `SyntaxError`. With the introduction of computed property names, making duplication possible at runtime, ECMAScript 2015 removed that restriction.

```js
'use strict';
var o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

## Simplifying variable uses

Strict mode simplifies how variable names map to particular variable definitions in the code. Many compiler optimizations rely on the ability to say that variable _X_ is stored in _that_ location: this is critical to fully optimizing JavaScript code. JavaScript sometimes makes this basic mapping of name to variable definition in the code impossible to perform until runtime. Strict mode removes most cases where this happens, so the compiler can better optimize strict mode code.

## References

1. [Strict mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

2. [Transitioning to strict mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
