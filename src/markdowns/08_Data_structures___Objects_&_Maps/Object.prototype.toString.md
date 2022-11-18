# Object.prototype.toString()

The `toString()` method ==returns an object as a string. It returns `"[object Object]"` if it cannot return a string==. This method does not change the original object.

> **Note**: `Object.toString()` always returns the object constructor.

Every JavaScript object has a `toString()` method. The `toString()` method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string. Normally, you will not use it in your own code.

## Syntax

```js
toString()
```

## Parameters

By default `toString()` takes no parameters. However, objects that inherit from `Object` may override it with their own implementations that do take parameters. For example, the [`Number.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) and [`BigInt.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) methods take an optional `radix` parameter.

## Return value

A string representing the object.

## Description

JavaScript calls the `toString` method to [convert an object to a primitive value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#type_coercion). You rarely need to invoke the `toString` method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

This method is called in priority by [string conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), but [numeric conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and [primitive conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) call `valueOf()` in priority. However, because the base [`Object.prototype.valueOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) method returns an object, the `toString()` method is usually called in the end, unless the object overrides `valueOf()`. For example, `+[1]` returns `1`, because its [`Array.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) method returns `"1"`, which is then converted to a number.

==All objects that inherit from `Object.prototype` (that is, all except [`null`-prototype objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) inherit the `toString()` method==. 

## References

1. [Object.prototype.toString() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
2. [JavaScript Object toString() - w3schools](https://www.w3schools.com/jsref/jsref_object_tostring.asp)