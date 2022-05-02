# Error

Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions.

The Error object provides error information when an error occurs.

Runtime errors result in `new Error` objects being created and thrown.

## Error Object Properties

| Property | Description                                 |
| :------- | :------------------------------------------ |
| name     | Sets or returns an error name               |
| message  | Sets or returns an error message (a string) |

## Error types

Besides the generic Error constructor, there are other core error constructors in JavaScript.

| Error Name     | Description                          |
| :------------- | :----------------------------------- |
| EvalError      | Deprecated - use SyntaxError instead |
| RangeError     | A number "out of range" has occurred |
| ReferenceError | An illegal reference has occurred    |
| SyntaxError    | A syntax error has occurred          |
| TypeError      | A type error has occurred            |
| URIError       | An error in encodeURI() has occurred |

## Error() constructor

The Error constructor creates an error object.

### Syntax

```js
new Error();
new Error(message);
new Error(message, options);
new Error(message, fileName);
new Error(message, fileName, lineNumber);
```

### Parameters

==**message**== (optional) - a human-readable description of the error.

==**options**== (optional) - an object that has the following properties:

- cause (optional) - a property indicating the specific cause of the error. When catching and re-throwing an error with a more-specific or useful error message, this property should be used to pass the original error.
- fileName (OptionalNon-Standard) - the value for the fileName property on the created Error object. Defaults to the name of the file containing the code that called the `Error()` constructor.
- lineNumber (OptionalNon-Standard) - the value for the lineNumber property on the created Error object. Defaults to the line number containing the `Error()` constructor invocation.

## Reference

1. [Error Reference - w3schools](https://www.w3schools.com/jsref/jsref_obj_error.asp)
1. [Error - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
1. [Error() constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)
