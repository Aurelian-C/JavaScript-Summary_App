# Object.assign()

The `Object.assign()` method ==**copies** all enumerable own **properties**== from one or more source objects to a target object. It ==returns the modified target object==.

## Syntax

```js
Object.assign(target, ...sources);
```

## Parameters

==**target**== - the target object — what to apply the sources properties to, which is returned after it is modified.
==**sources**== - the source object(s) — objects containing the properties you want to apply.

## Return value

The target object.

## Some considerations about `Object.assign()`

Properties in the target object are ==**overwritten** by properties in the sources if they have the **same key**==. Later sources' properties overwrite earlier ones.

The `Object.assign()` method ==only copies **enumerable** and **own** properties== from a source object to a target object. It uses `[[Get]]` on the source and `[[Set]]` on the target, so it will invoke _getters_ and _setters_. Therefore it assigns properties, versus copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain _getters_.

> **Note**: For copying property definitions (including their enumerability) into prototypes, use `Object.getOwnPropertyDescriptor()` and `Object.defineProperty()` instead.

## Example

Cloning an object

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Warning for Deep Clone

For deep cloning, we need to use alternatives, because `Object.assign()` copies property values.

## Reference

1. [Object.assign() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
