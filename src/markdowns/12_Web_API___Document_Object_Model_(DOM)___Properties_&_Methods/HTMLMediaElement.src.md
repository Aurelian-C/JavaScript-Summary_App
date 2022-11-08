# HTMLMediaElement.src

The `src` property **sets** or **returns the value** of the `src` attribute of an image. The required `src` attribute specifies the URL of an image.

> **Note**: The `src` property can be changed at any time. However, the new image inherits the `height` and `width` attributes of the original image, if not new `height` and `width` properties are specified.

## Syntax

```js
// Return the src property:
imageObject.src;

// Set the src property:
imageObject.src = URL;
```

> Note: URL possible values:
>
> - An absolute URL - points to another web site (like src="http://www.example.com/default.htm")
> - A relative URL - points to a file within a web site (like src="default.htm")

## Reference

1. [Image src Property - w3schools](https://www.w3schools.com/jsref/prop_img_src.asp)

2. [HTMLMediaElement.src - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src)
