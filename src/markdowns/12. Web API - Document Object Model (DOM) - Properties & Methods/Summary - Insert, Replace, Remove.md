# Summary: Insert, Replace, Remove

There are many ways of creating, inserting, replacing and removing DOM elements - here's a summary of the options you have.

## Create & Insert

You got two main options:

1. Provide an HTML snippet (e.g. via `innerHTML`) to a valid HTML snippet and ==let the browser render it==;
2. Create a DOM object in JS code with the help of `document.createElement()` and ==append / insert it manually==. The latter approach has the advantage of giving you ==direct access to the DOM object== (useful for setting its properties or adding event listeners). The downside is that you have to write more code.

> **Important**: Any existing ==content is completely replaced== when using `innerHTML`. If you want to append / insert HTML code, you can use `insertAdjacentHTML()`.

> **Important (no matter how you insert elements)**: Whenever you insert elements, you ==MOVE the element== to that new place if you already inserted it before. It's ==NOT copied== (you can copy an element via `someElement.cloneNode(true)` though).

Insertion methods:

- `innerHTML`
- `insertAdjacentHTML`
- `append()`; browser support is decent but for IE `appendChild()` could be preferred
- `appendChild()`
- `prepend()`; browser support is decent but for IE `insertBefore()` could be preferred
- `insertBefore()`
- `before()` & `after()`; Browser support is okay but IE and Safari don't support it. Consider `insertBefore()` or `insertAdjacentElement()` as substitutes.
- `insertAdjacentElement()`.

## Replace

You can replace elements in the DOM with two main methods:

- `replaceWith()`
- `replaceChild()`

`replaceWith()` is a bit easier to use and has decent browser support - with IE being the exception. To support that as well, consider using `replaceChild()`.

## Remove

You can remove elements with three main methods:

- `someElement.innerHTML = ''` => ==Clears all HTML content== of `someElement` and hence removes any objects rendered in there.
- `someElement.remove()` => ==Removes a single element== (`someElement`) from the DOM. Browser support is good, IE again doesn't like it though. Use `removeChild()` instead.
- `someElement.parentNode.removeChild(someElement)` => ==Removes the provided child element== (NOT the element on which you call it). Provides broad browser support but of course requires a bit more code.

> **Remove Objects from DOM and Memory Leaks**: if you delete/remove an object from the DOM and you have no reference to that object in your code anymore , then JavaScript or the browser will automatically clear everything that is related to that DOM object including any event listeners, so it will clear the event listeners for you automatically.

## What about Text Nodes?

You can easily create & insert text nodes in one go:

```js
someElement.textContent = 'Hi there!';
// This creates and inserts the text node with a content of 'Hi there!'.
```

Want to append to existing text? Just use:

```js
someElement.textContent = someElement.textContent + 'More text!';
```

## Reference

1. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=Cj0KCQjw0umSBhDrARIsAH7FCoeU9W1FhcfHq4JH6InuqwKQdlnXPY4wnIG6-ZrfGPJ6hyB9zTE0NW8aAvGkEALw_wcB)
