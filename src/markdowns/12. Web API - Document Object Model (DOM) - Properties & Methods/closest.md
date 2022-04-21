# Element.closest()

The `closest()` method searches ==**up** the DOM tree==. This method ==traverses the Element and its parents== (heading toward the document root) until it finds a node that matches the provided selector string.

The method ==starts at the **element itself**, then the **anchestors**== (parent, grandparent, ...) until a match is found. Will return itself or the matching ancestor. If no match is found, it returns `null`.

## Syntax

```
element.closest(CSSselectors)
```

## Parameters

**CSSselectors** (required) - one or more (comma separeted) CSS selectors to match.

## Return Value

**Object** - the ==closest ancestor== element, or the ==element itself==, that matches the specified CSS selector(s). If no matches are found, ==null== is returned.

## Reference

1. [Element.closest() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
2. [closest() method - w3schools](https://www.w3schools.com/jsref/met_element_closest.asp)
