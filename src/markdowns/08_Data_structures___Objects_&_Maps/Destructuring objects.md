# Destructuring objects

Before we dive into the **_what_** and **_how_** of destructuring I think the **_why_** should be considered. If you already use TypeScript or a modern JavaScript framework like React, Vue, Preact, Angular, etc, you may already be familiar with destructuring.

## Why Destructuring?

To explain the why of destructuring, we will consider a scenario which most of us might be familiar with or might have come across at one time or the other when coding in JavaScript. Imagine we have the data of a student including scores in three subjects(_Maths, English, Science_) represented in an object and we need to display some information based on this data. We could end up with something that looks like this:

```js
const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
    science: 85,
  },
};

function displaySummary(student) {
  console.log('Hello, ' + student.name);
  console.log('Your Maths score is ' + (student.scores.maths || 0));
  console.log('Your English score is ' + (student.scores.english || 0));
  console.log('Your Science score is ' + (student.scores.science || 0));
}

displaySummary(student);
// Hello, John Doe
// Your Maths score is 74
// Your English score is 63
// Your Science score is 85
```

With the above code snippet, we would achieve the desired result. However, there are a few caveats to writing code this way. One of which is — you can easily make a typo and instead of writing `scores.english` for example, you write `score.english` which will result in an error. Again, if the `scores` object we are accessing is deeply nested in another object, the object access chain becomes longer which could mean more typing. These may not seem to be much an issue, but with destructuring we can do the same in a more expressive and compact syntax.

## What is Destructuring?

Destructuring simply implies **breaking down a complex structure into simpler parts**. In JavaScript, _this complex structure is usually an object or an array_. With the destructuring syntax, you can _**extract smaller fragments from arrays and objects**_. **Destructuring syntax can be used for _variable declaration_ or _variable assignment_**. You can also handle nested structures by using **nested destructuring syntax**.

Using destructuring, the function from our previous snippet will look like this:

```js
function displaySummary({
  name,
  scores: { maths = 0, english = 0, science = 0 },
}) {
  console.log('Hello, ' + name);
  console.log('Your Maths score is ' + maths);
  console.log('Your English score is ' + english);
  console.log('Your Science score is ' + science);
}
```

What we saw in that last snippet is a form of _**object destructuring**_ being used as an assignment to a function. Basically, you use an **object literal on the left-hand-side of an assignment expression** for object destructuring:

```js
const student = {
  firstname: 'Glad',
  lastname: 'Chinda',
  country: 'Nigeria',
};

const { firstname, lastname, country } = student;

console.log(firstname, lastname, country); // Glad Chinda Nigeria
```

Here we used object destructuring syntax to assign values to three variables: `firstname`, `lastname` and `country` using the values from their corresponding keys on the student object. This is the most basic form of object destructuring.

**The same syntax can be used in variable assignment** as follows:

```js
// Initialize local variables
let country = 'Canada';
let firstname = 'John';
let lastname = 'Doe';

const student = {
  firstname: 'Glad',
  lastname: 'Chinda',
  country: 'Nigeria',
};

// Reassign firstname and lastname using destructuring
// Enclose in a pair of parentheses, since this is an assignment expression
({ firstname, lastname } = student);

// country remains unchanged (Canada)
console.log(firstname, lastname, country); // Glad Chinda Canada
```

The above snippet shows how to use object destructuring to assign new values to local variables. Notice that we had to **use a pair of enclosing parentheses () in the assignment expression**. If omitted, the destructuring object literal will be taken to be a block statement, which will lead to an error because a block cannot appear at the left-hand-side of an assignment expression.

## Default Values

Trying to assign a variable corresponding to a key that does not exist on the destructured object will cause the value `undefined` to be assigned instead. You can pass **default values** that will be assigned to such variables instead of undefined. Here is a simple example.

```js
const person = {
  name: 'John Doe',
  country: 'Canada',
};

// Assign default value of 25 to age if undefined
const { name, country, age = 25 } = person;

// Here I am using ES6 template literals
console.log(`I am ${name} from ${country} and I am ${age} years old.`);

// I am John Doe from Canada and I am 25 years old.'
```

Here we assigned a default value of `25` to the `age` variable. Since the `age` key does not exist on the `person` object, 25 is assigned to the `age` variable instead of `undefined`.

## Using Different Variable Names

So far, we have been assigning to variables that have the same name as the corresponding object key. You can assign to a different variable name using this syntax: `[object_key]:[variable_name]`. You can also pass default values using the syntax: `[object_key]:[variable_name] = [default_value]`:

```js
const person = {
  name: 'John Doe',
  country: 'Canada',
};

// Assign default value of 25 to years if age key is undefined
const { name: fullname, country: place, age: years = 25 } = person;

// Here I am using ES6 template literals
console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);

// I am John Doe from Canada and I am 25 years old.'
```

Here we created three local variables namely: `fullname`, `place` and `years` that map to the `name`, `country` and `age` keys respectively of the `person` object. Notice that we specified a default value of 25 for the `years` variable in case the `age` key is missing on the `person` object.

## Nested Object Destructuring

Referring back to our initial destructuring example, we recall that the `scores` object is nested in the `student` object. Let’s say we want to assign the _Maths_ and _Science_ scores to local variables. The following code snippet shows how we can use nested object destructuring to do this:

```js
const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
  },
};

// We define 3 local variables: name, maths, science
const {
  name,
  scores: { maths, science = 50 },
} = student;

console.log(
  `${name} scored ${maths} in Maths and ${science} in Elementary Science.`
);

// John Doe scored 74 in Maths and 50 in Elementary Science.
```

Here, we defined three local variables: `name`, `maths` and `science`. Also, we specified a default value of `50` for `science` in case it does not exist in the nested `scores` object. Notice that, `scores` is not defined as a variable. Instead, we use nested destructuring to extract the `maths` and `science` values from the nested `scores` object.

**When using nested object destructuring, be careful to avoid using an empty nested object literal**. Though it is valid syntax, it actually does no assignment. For example, the following destructuring does absolutely no assignment.

```js
// This does no assignment
// Because of the empty nested object literal ({})
const {
  scores: {},
} = student;
```

## Extracting a dynamic name property

You can extract to variables properties with a dynamic name (the property name is known at runtime):

```js
const { [propName]: identifier } = expression;
```

`propName` expression should evaluate to a property name (usually a string), and the `identifier` should indicate the variable name created after the destructuring. The second `expression` should evaluate to the object you'd like to destructure.

An equivalent code without object destructuring:

```js
const identifier = expression[propName];
```

Let's look at an example where `prop` holds the property name:

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
};
const prop = 'name';
const { [prop]: name } = hero;
name; // => 'Batman'
```

`const { [prop]: name } = hero` is an object destructuring that assigns to variable `name` the value `hero[prop]`, where `prop` is a variable holding the property name.

## Rest object after destructuring

The `rest` syntax is useful to collect the remaining properties after the destructuring:

```js
const { identifier, ...rest } = expression;
```

Where `identifier` is the name of the property to access and `expression` should evaluate to an object.

After the destructuring, the variable `identifier` contains the property value. `rest` variable is a plain object with the remaining properties.

For example, let's extract the property `name`, but keep the rest of the properties:

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
};
const { name, ...realHero } = hero;
realHero; // => { realName: 'Bruce Wayne' }
```

The destructuring `const { name, ...realHero } = hero` extracts the property `name`.

At the same time, the remaining properties (`realName` in this case) are collected into the variable `realHero: { realName: 'Bruce Wayne' }`.

## Mixed Destructuring

There are cases when you are working with a pretty complex object/array structure and you need to assign some values from it to local variables. A good example would be an object with several deeply nested objects and arrays. In cases like this, you can use a combination of object destructuring and array destructuring to target certain parts of the complex structure as required.

```js
const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207],
  },
};

// Observe how mix of object and array destructuring is being used here
// We are assigning 5 variables: name, country, city, lat, lng
const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
```

## References

1. [ES6 Destructuring: The Complete Guide - codeburst.io](https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f)

2. [How to Use Object Destructuring in JavaScript - Dmitri Pavlutin](https://dmitripavlutin.com/javascript-object-destructuring/#7-extracting-a-dynamic-name-property)
