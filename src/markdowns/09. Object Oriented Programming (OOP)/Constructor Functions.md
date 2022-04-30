# Constructor Functions

Constructor functions:

- Technique to ==**create objects from a function**==;
- This is how built-in objects like Arrays, Maps or Sets are actually implemented.

We can use Constructor Functions to ==**build an object using a function**==. Now, a Constructor Function is actually a completely **normal function**. The only difference between a regular function and a function that we say Constructor Function, is that ==we call a Constructor Function with the **new** operator==. 

You can use a function expression or a function declaration to create a Constructor Function, but ==you can't create a Constructor Function with the **arrow function**== because arrow function doesn't have its own `this` keyword and we need that.

In OOP there is a ==convention== that Constructor Functions always start with a ==capital letter== and in fact, other built-in constructors like `Array` or `String` follow that convention. Constructor Functions is a ==**pattern**== that developers came up with and so now we just simply follow that pattern.

## Syntax

```js
// ***** WRONG WAY WITHOUT PROTOTYPE PROPERTY *****
const Person = function (firstName, birthYear) {
  // Instance properties (the properties firstName and birthYear will be available on all the instances that are created through this Constructor Function)
  this.firstName = firstName;
  this.birthYear = birthYear;

  let a = 5; //with the Constructor Functions THE ONLY WAY WE CAN ADD PROPERTIES TO AN OBJECT IS WITH THE 'THIS' KEYWORD.

  // NEVER DO THIS. YOU SHOULD NEVER CREATE A METHOD INSIDE OF A CONSTRUCTOR FUNCTION. That's because imagine we were gonna create a 100 or 1000 or even 10000 of Person objects using this Constructor Function. Then what would happen, is that each of these objects would carry around this function here. So if we had a 1000 objects, we would essentially create a 1000 copies of this function. And so that would be terrible for the performance of our code. But instead to solve this problem, we are gonna use prototypes and prototype inheritance just like we discussed in the last video.
  this.calcYears = function () {
    console.log(2037 - this.birthYear);
  };
};

// ***** CORRECT WAY WITH PROTOTYPE PROPERTY *****
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcYears = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = 'Homo sapiens';

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
```

Only one `calcYears()` function and `species` property exists, but then all of the objects that are created using `Person` Constructor Function can basically reuse the `calcYears()` and `species` on themselves. So, the `this` keyword, in each of them, is as always set to the object that is calling the method.

> Note: ==Every function in JavaScript automatically has a property called **prototype** and that includes Constructor Functions==. Every object that's created by a Constructor Function will get access to all the methods and properties that we define on the Constructor Function `prototype` property.
>
> Every function that we create gets the `prototype` property, but ==only Constructor Functions actually have used for this **prototype object**==.

```js
Person.prototype; //{constructor: f}
jonas.prototype; //undefined. Why is that? Remember that only functions have access to the prototype and jonas is not a function, jonas is an object.

Person.isPrototypeOf(jonas); //false. Why is that? This is a little tricky but Person is a Constructor Function. Instead, will need to check Person.prototype which is the object that contains all the properties and methods we have available on Person.

Person.prototype.isPrototypeOf(jonas); //true
```

We just observed that the `jonas` and `matilda` objects are kind of somehow connected to the `Person`. That's why they can have access the methods and properties that are located inside the `prototype` property of `Person`. But how and why does this actually work? Well, it works because **any object always has access to the methods and properties from its prototype** and the prototype of `jonas` and `matilda` is `Person.prototype`.

```js
jonas.__proto__ === Person.prototype; //true; So shouldn't Person.prototype be the prototype of Person? Well, actually, no. So this is the confusing part, Person.prototype is actually not the prototype of Person, but instead it is what's gonna be used as the prototype of all the objects that are created with the Person Constructor Function.

Person.prototype.isPrototypeOf(jonas); //true
Person.prototype.isPrototypeOf(matilda); //true
Person.prototype.isPrototypeOf(Person); //false
```

In classical OOP, an object created from a class is called an instance, right? Now we didn't technically create a class above because as I say, **JavaScript doesn't really have classes in the sense of traditional OOP**. However, we did create an object from a Constructor Function. _Constructor Functions have been used since the beginning of JavaScript to kind of_ **simulate classes**. So therefore we can still say that `jonas` is an instance of `Person` and the same goes for `matilda`. In fact, there is even an operator that we can use to test for that.

```js
jonas instanceof Person; //true
```

Just note that **Constructor Function are not really a feature of the JavaScript language**. Instead, they are simply a **pattern** that has been developed by other developers and now everyone simply uses this. The real magic when you create an object from the Constructor Functions is the `new` operator, so the most important thing to understand from this lecture is really these 4 steps:

1. New `{}` (empty object) is created
2. When function is called, `this` = `{}` (`this` is set to that new empty object)
3. `{}` linked to `prototype`
4. function automatically return `{}`

References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
