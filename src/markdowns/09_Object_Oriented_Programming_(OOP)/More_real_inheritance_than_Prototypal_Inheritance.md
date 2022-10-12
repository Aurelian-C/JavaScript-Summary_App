## More real inheritance than Prototypal Inheritance (Child class and Parent class)

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

## References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
2. [JavaScript Class extends - w3schools](https://www.w3schools.com/jsref/jsref_class_extends.asp)
3. [extends keyword - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
4. [JavaScript Class super - w3schools](https://www.w3schools.com/jsref/jsref_class_super.asp)
5. [super keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
