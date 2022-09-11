# Template literals (Template strings)

Template literals are literals delimited with backtick (`) characters, allowing for ==**multi-line** strings==, for ==string **interpolation**== with embedded expressions, and for special constructs called ==**tagged templates**==.

Template literals are sometimes informally called *template strings*, because they are *used most commonly for string interpolation* (to create strings by doing substitution of placeholders). However, *a tagged template literal may not result in a string*; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

## Syntax

```js
// << Untagged >>, these create strings:
// 1. Simple string
`string text`

// 2. Multi-line string
`string text line 1
 string text line 2`

// 3. String interpolation
`string text ${expression} string text`

// << Tagged templates >>, this calls the function "tagFunction" with the template as the first argument and substitution values as subsequent arguments:
tagFunction`string text ${expression} string text`
```

## [Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#description)

Template literals are enclosed by backtick (`) characters instead of double or single quotes.

Along with having normal strings, template literals can also contain other parts called ==placeholders==, which are ==**embedded expressions**== delimited by a dollar sign and curly braces: `${expression}`. The strings and placeholders get passed to a function — either a default function, or a function you supply. The default function (when you don't supply your own) just performs string interpolation to do substitution of the placeholders and then concatenate the parts into a single string.

To supply a function of your own, precede the template literal with a function name; the result is called a **tagged template**. In that case, the template literal is passed to your tag function, where you can then perform whatever operations you want on the different parts of the template literal.

### Multi-line strings

Any newline characters inserted in the source are part of the template literal. Using normal strings, you would have to use the following syntax in order to get multi-line strings:

```js
console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
```

Using template literals, you can do the same with this:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### String interpolation

Without template literals, when you want to combine output from expressions with strings, you'd concatenate them using the "`+`" (addition operator):

```js
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
```

That can be hard to read – especially when you have multiple expressions.

==With template literals, you can avoid the concatenation operator== — and improve the readability of your code — by using placeholders of the form `${expression}` to perform substitutions for embedded expressions:

```js
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

### Tagged templates

A more advanced form of template literals are *tagged* templates. Tags allow you to ==**parse** template literals with a function==. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string. (Alternatively, it can return something completely different, as described in one of the following examples.)

The name of the function used for the tag can be whatever you want.

```js
let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output); // That Mike is a youngster.
```

Tag functions don't even need to return a string!

```js
function template(strings, ...keys) {
  return (function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

let t1Closure = template`${0}${1}${0}!`; //let t1Closure = template(["","","","!"],0,1,0);
t1Closure('Y', 'A'); // "YAY!"

let t2Closure = template`${0} ${'foo'}!`; //let t2Closure = template([""," ","!"],0,"foo");
t2Closure('Hello', {foo: 'World'}); // "Hello World!"

let t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`; //let t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure('foo', {name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
t3Closure({name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
```

## Reference

1. [Template literals (Template strings) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)
