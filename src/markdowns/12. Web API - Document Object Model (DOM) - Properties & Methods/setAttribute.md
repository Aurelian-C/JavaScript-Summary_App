# Element.setAttribute()

Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

> **Note**: It is possible to add a style attribute with a value to an element, but it is not recommended because it can overwrite other properties in the style attribute.
>
> ```js
> // NO:
> element.setAttribute('style', 'background-color:red;');
>
> // YES:
> element.style.backgroundColor = 'red';
> ```

> **Note**: To get the current value of an attribute, use `getAttribute()`; to remove an attribute, call `removeAttribute()`.

## Syntax

```js
Element.setAttribute(name, value);
```

## Parameters

- **name** (required) - the name of the attribute
- **value** (required) - the new attribute value

## Reference

1. [Element.setAttribute() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
2. [setAttribute() method - w3schools](https://www.w3schools.com/jsref/met_element_setattribute.asp)
