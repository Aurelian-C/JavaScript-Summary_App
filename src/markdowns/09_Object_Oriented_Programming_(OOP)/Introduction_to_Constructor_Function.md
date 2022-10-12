# Introduction to Constructor Function

==In JavaScript, most things are objects==, from core JavaScript features like arrays to the browser [APIs](https://developer.mozilla.org/en-US/docs/Glossary/API) built on top of JavaScript. You can even create your own objects to encapsulate related functions and variables into efficient packages and act as handy data containers.

An object is a ==collection of related data and/or functionality==. These usually consist of several variables and functions (which are called properties and methods when they are inside objects).

As with many things in JavaScript, creating an object often begins with defining and initializing a variable. The simplest way to create an object is with object literals syntax.

```js
const obj = {}
```

Using object literals is fine when you only need to create one object, but if you have to create more than one, they're seriously inadequate. We have to write out the same code for every object we create, and if we want to change some properties of the object, then we have to remember to update every object.

We would like a way to define the "shape" of an object — the set of methods and the properties it can have — and then create as many objects as we like, just updating the values for the properties that are different.

==Sometimes we need a "**blueprint**" for _creating many objects of the same "type"_==.

## Introducing Constructor Function

```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
```

This function creates and returns a new object each time we call it. The object will have two members:

- a property `name`
- a method `introduceSelf()`.

Note that `createPerson()` takes a parameter `name` to set the value of the `name` property, but the value of the `introduceSelf()` method will be the same for all objects created using this function. This is a very common pattern for creating objects.

Now we can create as many objects as we like, reusing the definition:

```js
const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
```

This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it. A better way is to use a constructor. ==A **constructor** is just a function called using the== [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) ==keyword==. When you call a constructor, it will:

- create a new object
- bind `this` to the new object, so you can refer to `this` in your constructor code
- run the code in the constructor
- return the new object.

Constructors, by convention, ==start with a capital letter== and ==are named for the type of object they create==. So we could rewrite our example like this:

```js
function Person(name) {
  this.name = name;
  let a = 5; //with the Constructor Functions THE ONLY WAY WE CAN ADD PROPERTIES TO AN OBJECT IS WITH THE 'THIS' KEYWORD.
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
```

> **Note**: In the "Prototypal Inheritance: Constructor Function & Prototypes" we will learn that ==we SHOULD NEVER CREATE A METHOD INSIDE OF A CONSTRUCTOR FUNCTION==.
>
> ```js
> // ***** WRONG WAY WITHOUT PROTOTYPE PROPERTY *****
> function Person(name) {
>   this.name = name;
>   this.introduceSelf = function () {
>     console.log(`Hi! I'm ${this.name}.`);
>   };
> }
> // NEVER CREATE A METHOD INSIDE OF A CONSTRUCTOR FUNCTION. That's because imagine we were gonna create a 100 or 1000 or even 10000 of Person objects using this Constructor Function. Then what would happen, is that each of these objects would carry around this function here. So if we had a 1000 objects, we would essentially create a 1000 copies of this function. And so that would be terrible for the performance of our code. But instead to solve this problem, we are gonna use prototypes and prototype inheritance.
> 
> // ***** CORRECT WAY WITH PROTOTYPE PROPERTY *****
> function Person(name) {
>   this.name = name;
> }
> 
> Person.prototype.introduceSelf = function () {
>   console.log(`Hi! I'm ${this.name}.`);
> };
> ```

To call `Person()` as a constructor, we use `new`:

```js
const salva = new Person("Salva");
salva.name;
salva.introduceSelf();

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
```

> **Note**: You can use a function expression or a function declaration to create a Constructor Function, but ==you can't create a Constructor Function with the **arrow function**== because arrow function doesn't have its own `this` keyword and we need that.
>
> In a constructor function `this` does not have a value. It is a substitute for the new object. The value of `this` will become the new object when a new object is created.

## You've been using objects all along

As you've been going through these examples, you have probably been thinking that the dot notation you've been using is very familiar. That's because you've been using it throughout the course! ==Every time we've been working through an example that uses a built-in browser API or JavaScript object, we've been using objects, because such features are built using exactly the same kind of object structures that we've been looking at here==, albeit more complex ones than in our own basic custom examples.

So when you used string methods like:

```js
myString.split(",");
```

You were using a method available on a [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) object. Every time you create a string in your code, that string is automatically created as an instance of `String`, and therefore has several common methods and properties available on it.

When you accessed the document object model using lines like this:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

You were using methods available on a [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object. For each webpage loaded, an instance of `Document` is created, called `document`, which represents the entire page's structure, content, and other features such as its URL. Again, this means that it has several common methods and properties available on it.

The same is true of pretty much any other built-in object or API you've been using — [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), and so on.

==Note that built in objects and APIs don't always create object instances automatically==. As an example, the [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) — which allows modern browsers to fire system notifications — requires you to instantiate a new object instance using the constructor for each notification you want to fire. Try entering the following into your JavaScript console:

```js
const myNotification = new Notification("Hello!");
```

## Summary

==Objects are very useful as structures for **storing related _data_ and _functionality_**== — if you tried to keep track of all the properties and methods in an object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.

We use Constructor Functions to ==**build an object using a function**==. Now, a Constructor Function is actually a completely **normal function**. The only difference between a regular function and a function that we say Constructor Function, is that we call a Constructor Function with the `new` keyword. 

## References

1. [JavaScript object basics - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
2. [Object Constructors - w3schools](https://www.w3schools.com/js/js_object_constructors.asp)
3. [`new` operator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
4. [Function() constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)