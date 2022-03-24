# More real inheritance than Prototypal Inheritance (Child class and Parent class)

## Prototypes and inheritance

Prototypes are a powerful and very flexible feature of JavaScript, making it possible to **reuse code** and **combine objects**.

In particular they support a version of **inheritance**. **_Inheritance is a feature of Object-Oriented Programming languages that lets programmers express the idea that some objects in a system are more specialized versions of other objects_**.

For example, if we're modeling a school, we might have _professors_ and _students_: they are both _people_, so have some features in common (for example, they both have names), but each might add extra features (for example, _professors_ have a subject that they teach), or might implement the same feature in different ways. In an OOP system we might say that _professors_ and _students_ both **inherit from** _people_.

You can see how in JavaScript, if `Professor` and `Student` objects can have `Person` prototypes, then they can inherit the common properties, while adding and redefining those properties which need to differ.

## Inheritance Between "Classes": Constructor Functions

Over the last couple of lectures, we explored how prototypal inheritance works in JavaScript and we did that using a couple of different techniques. So we used Constructor Functions, ES6 classes and `Object.create()`. Now all of these techniques basically allow objects to inherit methods from its prototype, so to delegate their behavior to their prototype.

Now it's time to turn our attention to more real inheritance. So what I'm talking about is **real inheritance between classes and not just prototypal inheritance between instances and a `prototype` property** like we've been doing so far. And I'm using class terminology because this simply makes it easier to understand what we're gonna do. But of course, you already know that real classes do not exist in JavaScript.

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

## Inheritance Between "Classes": ES6 Classes

Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

To implement inheritance between ES6 classes, we only need two ingredients. We need the `extends` and the `super` keywords.

- The `extends` keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class.

- The `super` keyword refers to the parent class. By calling the `super()` method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

### Syntax

```js
class childClass extends parentClass { ... }
```

When used in a constructor, the `super` keyword appears alone and must be used before the `this` keyword is used. The `super` keyword can also be used to call functions on a parent object.

```js
super(arguments); // calls the parent constructor (only inside the constructor)
super.parentMethod(arguments); // calls a parent method
```

### Examples

```js
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

class Student extends Person {
  // The 'extends' keyword will link to prototype behind the scenes
  constructor(fullName, birthYear, course) {
    // The super() must be used before the `this` keyword is used because this call to the 'super' function is responsible for creating the 'this' keyword in this subclass.
    super(fullName, birthYear); // We don't need to specify the name of the parent class again because that already happened after 'extends' keyword.
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old.`);
  }
}
```

If you do not need any new properties, then you don't even need to bother writing a `constructor` method in the child class.

```js
class Student extends Person {}

const martha = new Student('Martha Jones', 2012);
```

## Inheritance Between "Classes": Object.create()

```js
const Person = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Student = Object.create(Person);

Student.init = function (firstName, birthYear, course) {
  Person.init.call(this, firstName, birthYear);
  this.course = course;
};

Student.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(Student);
jay.init('Jay Smith', 2002, 'Gangster');
jay.introduce();
jay.calcAge();
```

In this version, with `Object.create()`, we don't even worry about constructors anymore and also not about `prototype` properties and not about the `new` operator. So it's really just objects linked to other objects. And it's all really simple and beautiful, if you ask me. In fact, some people think that this pattern is a lot better than basically trying to fake classes in JavaScript, because faking classes in the way that they exist in other languages like Java or C++ is exactly what we do by using Constructor Functions and even ES6 classes. But here, in this technique that I just showed you with `Object.create()`, we are, in fact, not faking classes. All we are doing is simply linking objects together, where some objects then serve as the prototype of other objects. And personally, I wouldn't mind if this was the only way of doing OOP in JavaScript, but as I mentioned earlier, ES6 classes and Constructor Functions are actually way more used in the real world.

References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
2. [JavaScript Class extends - w3schools](https://www.w3schools.com/jsref/jsref_class_extends.asp)
3. [extends keyword - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
4. [JavaScript Class super - w3schools](https://www.w3schools.com/jsref/jsref_class_super.asp)
5. [super keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
