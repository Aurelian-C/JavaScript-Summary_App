# Prototypal Inheritance: Constructor Function & Prototypes

==Constructor Function in JavaScript provide us with something like a class definition, enabling us to define the "shape" of an object, including any methods it contains, in a single place. Prototypes can be used in Constructor Function, too. For example, if a method is defined on a constructor's== `prototype` ==property, then all objects created using that constructor get that method via their prototype, and we don't need to define it in the constructor==.

In traditional class-based OOP, classes and objects are two separate constructs, and objects are always created as instances of classes. Also, there is a distinction between the feature used to define a class (the class syntax itself) and the feature used to instantiate an object (a constructor). In JavaScript, we can and often do create objects without any separate class definition, either using a function or an object literal. This can make working with objects much more lightweight than it is in classical OOP.

Although a prototype chain looks like an inheritance hierarchy and behaves like it in some ways, it's different in others. When a subclass is instantiated, a single object is created which combines properties defined in the subclass with properties defined further up the hierarchy. ==With prototyping, each level of the hierarchy is represented by a separate object, and they are linked together via the== `__proto__` ==property. The prototype chain's behavior is less like inheritance and more like **delegation**. Delegation is a programming pattern where an object, when asked to perform a task, can perform the task itself or ask another object (its **delegate**) to perform the task on its behalf==. In many ways, delegation is a more flexible way of combining objects than inheritance (for one thing, it's possible to change or completely replace the delegate at run time).

That said, ==Constructor Function and prototypes can be used to implement traditional class-based OOP patterns in JavaScript==. But using them directly to implement features like inheritance is tricky, so JavaScript provides extra features, layered on top of the prototype model, that map more directly to the concepts of class-based OOP.

## Setting a prototype with Constructor Function

```js
// ***** WRONG WAY WITHOUT PROTOTYPE PROPERTY *****
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  let a = 5; //with the Constructor Functions THE ONLY WAY WE CAN ADD PROPERTIES TO AN OBJECT IS WITH THE 'THIS' KEYWORD.

  // NEVER DO THIS. YOU SHOULD NEVER CREATE A METHOD INSIDE OF A CONSTRUCTOR FUNCTION. That's because imagine we were gonna create a 100 or 1000 or even 10000 of Person objects using this Constructor Function. Then what would happen, is that each of these objects would carry around this function here. So if we had a 1000 objects, we would essentially create a 1000 copies of this function. And so that would be terrible for the performance of our code. But instead to solve this problem, we are gonna use prototypes and prototype inheritance.
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

> Note: ==Every function in JavaScript automatically has a property called **prototype** and that includes Constructor Functions. Every object that's created by a Constructor Function will get access to all the methods and properties that we define on the Constructor Function== `prototype` ==property==.
>
> Every function that we create gets the `prototype` property, but ==only Constructor Functions actually have used for this **prototype object**==.

```js
Person.prototype;	// {constructor: f}
jonas.prototype;	// undefined. Why is that? Remember that only functions have access to the prototype and jonas is not a function, jonas is an object.

Person.isPrototypeOf(jonas); // false. Why is that? This is a little tricky but Person is a Constructor Function. Instead, will need to check Person.prototype which is the object that contains all the properties and methods we have available on Person.

Person.prototype.isPrototypeOf(jonas); // true
```

We just observed that the `jonas` and `matilda` objects are kind of somehow connected to the `Person`, that's why they can have access the methods and properties that are located inside the `prototype` property of `Person`. But how and why does this actually work? Well, it works because ==**any object always has access to the methods and properties from its prototype**== and the prototype of `jonas` and `matilda` is `Person.prototype`.

```js
jonas.__proto__ === Person.prototype; // true; So shouldn't Person.prototype be the prototype of Person? Well, actually, no. So this is the confusing part, Person.prototype is actually not the prototype of Person, but instead it is what's gonna be used as the prototype of all the objects that are created with the Person Constructor Function.

Person.prototype.isPrototypeOf(jonas);		// true
Person.prototype.isPrototypeOf(matilda);	// true
Person.prototype.isPrototypeOf(Person);		// false
```

In classical OOP, an object created from a class is called an instance, right? Now we didn't technically create a class above because as I say, ==**JavaScript doesn't really have classes in the sense of traditional OOP**==. However, we did create an object from a Constructor Function. ==Constructor Functions have been used since the beginning of JavaScript to kind of **simulate classes**==. So therefore we can still say that `jonas` is an instance of `Person` and the same goes for `matilda`. In fact, there is even an operator that we can use to test for that:

```js
jonas instanceof Person; // true
```

Just note that ==Constructor Function are not really a feature of the JavaScript language. Instead, they are simply a **pattern** that has been developed by other developers and now everyone simply uses this==. The real magic when you create an object from the Constructor Functions is the `new` operator, so the most important thing to understand from this lecture is really these 4 steps:

1. New `{}` (empty object) is created
2. When function is called, `this` = `{}` (`this` is set to that new empty object)
3. `{}` linked to `prototype`
4. function automatically return `{}`

## More real inheritance than Prototypal Inheritance (Child and Parent)

#### Prototypes and inheritance

Prototypes are a powerful and very flexible feature of JavaScript, making it possible to ==reuse code== and ==combine objects==. Now prototypal inheritance basically allow objects to inherit methods from its prototype, so to delegate their behavior to their prototype.

Up until now we explored how to set a prototype and how prototypal inheritance works in JavaScript. Now it's time to turn our attention to more real inheritance. So what I'm talking about is **real inheritance between classes and not just prototypal inheritance between instances and a `prototype` property** like we've been doing so far. And I'm using class terminology because this simply makes it easier to understand what we're gonna do. But of course, you already know that real classes do not exist in JavaScript.

```js
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
```

Usually we want a child class to have the same functionality as the parent class, but with some additional functionality, and so usually we pass in the same arguments, but then also some additional ones.

```js
// Wrong way
const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
```

Right now this part of the code above is basically a simple copy of the `Person` Constructor Function, so of the class that we want to be the parent class, right? As you know, **having duplicate code is never a good idea**:

- First because it violates the **DRY principle** ("Don't repeat yourself");
- Second and even worse in this case is that imagine that the implementation of `Person` changes in the future, then that change will not be reflected in the `Student`.

```js
// Correct way
const Student = function (firstName, birthYear, course) {
  Person3.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); // With this code, the Student.prototype object is now an object that inherits from Person.prototype
```

> **Note**: It's important to defining prototypes manually exactly after you build the child Constructor Function because we need to create a connection between child Constructor (`Student.prototype`) and parent Constructor (`Object.create(Person.prototype)`) before we add any more methods to the `prototype` object of child Constructor (`Student`) and that's because `Object.create()` will return an empty object and so at this point `Student.prototype` is empty and so then onto that empty object we can add new methods.

After you establish the connection between child `prototype` property and parent `prototype` property you can add new methods to the child Constructor.

```js
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
```

## Summary

In particular prototypes support a version of **inheritance**. Inheritance is a feature of OOP languages that lets programmers express the idea that some objects in a system are more specialized versions of other objects.

For example, if we're modeling a school, we might have *professors* and *students*: they are both *people*, so have some features in common (for example, they both have names), but each might add extra features (for example, professors have a subject that they teach), or might implement the same feature in different ways. In an OOP system we might say that professors and students both **inherit from** people.

You can see how in JavaScript, if `Professor` and `Student` objects can have `Person` prototypes, then they can inherit the common properties, while adding and redefining those properties which need to differ.

## References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
1. [Object-oriented programming - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)