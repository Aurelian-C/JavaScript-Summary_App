# HTMLTemplateElement.content

The `HTMLTemplateElement` interface enables access to the contents of an HTML `<template>` element.

The `HTMLTemplateElement.content` property returns a `<template>` element's template contents (a DocumentFragment).

> The HTML `<template>` tag is used as a container to _hold some HTML content **hidden** from the user when the page loads_. The content inside `<template>` can be rendered later with a JavaScript.
>
> You can use the `<template>` tag if you have some HTML code you want to use over and over again, but not until you ask for it. To do this without the `<template>` tag, you have to create the HTML code with JavaScript to prevent the browser from rendering the code.
>
> ```html
> <button onclick="showContent()">Show hidden content</button>
>
> <template>
>   <h2>Flower</h2>
>   <img src="img_white_flower.jpg" width="214" height="204" />
> </template>
>
> <script>
>   function showContent() {
>     var temp = document.getElementsByTagName('template')[0];
>     var clon = temp.content.cloneNode(true);
>     document.body.appendChild(clon);
>   }
> </script>
> ```

## Syntax

```js
// Select <template> tag on HTML
const templateElement = document.querySelector('#foo');

// Import <template> in the JavaScript code
const documentFragment = templateElement.content.cloneNode(true);
// or
const documentFragment = document.importNode(templateElement.content, true);
```

## Reference

1. [HTML <template> Tag - w3schools](https://www.w3schools.com/tags/tag_template.asp)
2. [HTMLTemplateElement - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement)
3. [HTMLTemplateElement.content - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/content)
