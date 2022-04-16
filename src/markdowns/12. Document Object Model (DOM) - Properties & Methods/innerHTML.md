# Element.innerHTML

The `Element` property `innerHTML` ==gets== or ==sets== the HTML or XML ==markup== contained within the element.

> **Note**: To insert the HTML into the document rather than replace the contents of an element, use the method `insertAdjacentHTML()`.

The `innerHTML` property can be used to examine the current HTML source of the page, including any changes that have been made since the page was initially loaded.

## Syntax

```js
// Return the innerHTML property
element.innerHTML;

// Set the innerHTML property
element.innerHTML = text;
```

## Return Value

**String** - The HTML content of the element.

## Property Value

**String** - HTML content. Setting the value of `innerHTML` removes all of the element's descendants and replaces them with nodes constructed by parsing the HTML given in the string _htmlString_.

## Reading the HTML contents of an element

Reading innerHTML causes the user agent to serialize the HTML or XML fragment comprised of the element's descendants. The resulting string is returned. This lets you look at the HTML markup of the element's content nodes.

```js
let contents = myElement.innerHTML;
```

> **Note**: The returned HTML or XML fragment is generated based on the current contents of the element, so the markup and formatting of the returned fragment is likely not to match the original page markup.

## Replacing the contents of an element

Setting the value of innerHTML lets you easily replace the existing contents of an element with new content. For example, you can erase the entire contents of a document by clearing the contents of the document's body attribute:

```js
document.body.innerHTML = '';
```

> **Note**: This is a security risk if the string to be inserted might contain potentially malicious content. When inserting user-supplied data you should always consider using `Element.SetHTML()` instead, in order to sanitize the content before it is inserted.

## Appending HTML to an element

Setting the value of innerHTML lets you append new contents to the existing one of an element. For example, we can append a new list item (`<li>`) to the existing list (`<ul>`):

```html
<ul id="list">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
</ul>
```

```js
const list = document.getElementById('list');
list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
```

> **Note**: Using `innerHTML` to append HTML elements (e.g. `el.innerHTML += "<a href='...'>link</a>"`) will result in the removal of any previously set event listeners. That is, after you append any HTML element that way you won't be able to listen to the previously set event listeners.

## Security considerations

It is not uncommon to see `innerHTML` used to insert text into a web page. There is potential for this to become an attack vector on a site, creating a potential security risk.

```js
const name = 'John';
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// ...

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

## The differences between `innerHTML`, `innerText` and `textContent`

|                                      innerHTML                                      |                                                                     innerText                                                                     |                                                    textContent                                                    |
| :---------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
| Return the text content of the element, _including all spacing and inner HTML tags_ | Return the text content of the element and all its children, _without CSS hidden text spacing and tags_, except `<script>` and `<style>` elements | Return the text content of the element and all descendaces, _with spacing and CSS hidden text, but without tags_. |

## Reference

1. [Element.innerHTML - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
2. [innerHTML - w3schools](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)
