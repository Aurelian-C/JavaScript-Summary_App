# classList

The `Element.classList` is a ==read-only== property that returns a ==live== **DOMTokenList collection** of the ==class attributes== of the element. This can then be used to manipulate the class list.

> **Note**: Using `classList` is a convenient alternative to accessing an element's list of classes as a space-delimited string via `element.className`.

The `classList` property is read-only, but you can use the methods listed below, to add, remove, toggle CSS classes from the list:

| Name       | Description                               |
| :--------- | :---------------------------------------- |
| add()      | Adds one or more tokens to the list       |
| remove()   | Removes one or more tokens from the list  |
| toggle()   | Toggles between tokens in the list        |
| contains() | Returns true if the list contains a class |
| replace()  | Replaces a token in the list              |

## Syntax

```js
element.classList;
```

## Return Value

A **DOMTokenList** representing the contents of the element's `class` attribute. If the `class` attribute is not set or empty, it returns an empty DOMTokenList, i.e. a DOMTokenList with the `length` property equal to `0`.

Although the `classList` property itself is read-only, you can modify its associated DOMTokenList using the `add()`, `remove()`, `replace()`, and `toggle()` methods.

## Examples

```js
// Add
element.classList.add('myStyle', 'anotherClass', 'thirdClass');

// Remove
element.classList.remove('myStyle', 'anotherClass', 'thirdClass');

// Conditional add/remove a class
if (element.classList.contains('mystyle')) {
  element.classList.remove('classOne');
  element.classList.add('classTwo');
}

// Replace
element.classList.replace('myStyle', 'anotherClass');
```

## Reference

1. [Element classList - w3schools](https://www.w3schools.com/jsreF/prop_element_classlist.asp)

2. [Element.classList - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
