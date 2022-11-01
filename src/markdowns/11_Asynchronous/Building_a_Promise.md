# Building a Promise

We build a Promise with the help of a `Promise()` constructor. ==The **`Promise`** constructor is primarily used to wrap functions that do not already support promises==.

> If your task is already promise-based, you likely do not need the `Promise()` constructor.
>
> A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.

In an ideal world, all asynchronous functions would already return promises. Unfortunately, some APIs still expect success and/or failure callbacks to be passed in the old way. The most obvious example is the [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) function.

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Mixing old-style callbacks and promises is problematic. ==If `saySomething()` fails or contains a programming error, nothing catches it. `setTimeout` is to blame for this. Luckily we can wrap `setTimeout` in a promise==. Best practice is to wrap problematic functions at the lowest possible level, and then never call them directly again:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Basically, the `Promise` constructor takes an executor function that lets us resolve or reject a promise manually. Since `setTimeout()` doesn't really fail, we left out reject in this case.

> [`Promise.resolve()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) and [`Promise.reject()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) are shortcuts to manually create an already resolved or rejected promise.

## Syntax

```js
const executor = function(resolve, reject) {
    if (true) {
        resolve(value);
    } else {
        reject(reason);
    }
};

const myPromise = new Promise(executor); // Promise() can only be constructed with new. Attempting to call it without new throws a TypeError.
```

## Parameters

#### `executor`

A function to be executed by the constructor. It receives two functions as parameters: `resolve` and `reject`. Any errors thrown in the `executor` will cause the promise to be rejected, and the return value will be neglected.

The `resolve` and `reject` functions accept a single parameter of any type:

```js
resolve(value)	// call on resolved
reject(reason)	// call on rejected
```

The `resolve` `value` parameter can be another promise object, in which case the promise gets dynamically inserted into the [promise chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises). The `reject` has semantics close to the [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) statement, so `reason` is typically an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) instance. If either `value` or `reason` is omitted, the promise is fulfilled/rejected with `undefined`.

## Description

==When called via `new`, the `Promise` constructor _returns a promise object_==. The promise object will become *resolved* when either of the functions `resolve` or `reject` are invoked.

About the `executor`, it's important to understand the following:

- The `executor` return value is ignored. `return` statements within the `executor` merely impacts control flow and alters whether a part of the function is executed, but does not have any impact on the promise's fulfillment value
- If an error is thrown in the `executor`, the promise is rejected

## Summary typical flow

1. ==`executor` typically wraps some asynchronous operation which provides a callback-based API==
2. ==The callback (the one passed to the original callback-based API) is defined within the `executor` code, so it has access to the `resolve` and `reject`==
3. Once `resolve` or `reject` is called, the promise's state moves from "pending" to either "fulfilled" or "rejected"
4. The `Promise` object (asynchronously) invokes any further handlers associated by `.then(handleFulfilled)` or `.catch(handleRejected)`
5. ==The argument passed to `resolve` or `reject` (the fulfillment value or rejection reason), is passed to the invocation of `handleFulfilled` or `handleRejected` as an input parameter==

```js
const executor = function(resolve, reject) {
    if (true) {
        resolve(value);
    } else {
        reject(reason);
    }
};

const myPromise = new Promise(executor);

myPromise
	.then((value) => {
    	// statement
	})
 	.catch((reason) => {
    	// statement
	})
```

## References

1. [Promise - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
1. [What is a Promise? - medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261#.aa7ubggsy)
1. [Using Promises - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)