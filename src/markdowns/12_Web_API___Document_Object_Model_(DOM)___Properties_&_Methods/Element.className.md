# Element.className

The `className` property  ==gets== or ==sets== the value of the ==class attribute== of the specified element.

> **Note**: The `class` is an **HTML Attribute**, while the `className` is a **DOM Property**.

## Syntax

```js
// Return the className property
element.className

// Set the className property
element.className = class
```

## Property Values

**class** - the class name(s) of an element. Separate multiple classes with spaces.

## Example

```js
// Set the class attribute for an element
element.className = 'myStyle';

// Overwrite an existing class attribute with a new one
element.className = 'newClassName';

// To add new classes, without overwriting existing values, add a space and the new classes
element.className += ' class1 class2';

// Get the class attribute of "myDIV"
let value = document.getElementById('myDIV').className;
```

## References

1. [Element.className - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
2. [className property - w3schools](https://www.w3schools.com/jsref/prop_html_classname.asp)
