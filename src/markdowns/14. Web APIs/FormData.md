# FormData()

The **`FormData`** interface provides a way to easily construct a set of **key/value** pairs representing form **fields** and their **values**, which can then be easily sent using the `fetch()` or `XMLHttpRequest.send()` method.

An object implementing `FormData` can directly be used in a `for...of`structure, instead of `entries()`: 

````js
for (var p of myFormData) 
// is equivalent to 
for (var p of myFormData.entries())
````

## Constructor

`FormData()`: Creates a new `FormData` object.

## Syntax

```js
new FormData(form)
```

## Parameters

`form` (optional)

An HTML `<form>` element - when specified, the `FormData` object will be *populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values*. It will also encode file input content.

## References

1. [FormData Interface - MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

2. [FormData() Constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)

   



