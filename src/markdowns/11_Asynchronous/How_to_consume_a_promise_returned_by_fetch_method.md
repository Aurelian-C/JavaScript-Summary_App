# How to consume a promise returned by the `fetch()` method

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
```

Here we are:

1. Calling the `fetch()` API, and assigning the return value to the `fetchPromise` variable
2. Immediately after, logging the `fetchPromise` variable. This should output something like: `Promise { <state>: "pending" }`, telling us that we have a `Promise` object, and it has a `state` whose value is `"pending"`. The `"pending"` state means that the fetch operation is still going on.
3. Passing a handler function into the Promise's **`then()`** method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object, which contains the server's response.
4. Logging a message that we have started the request.

The complete output should be something like:

```
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Note that `Started request…` is logged before we receive the response. Unlike a synchronous function, `fetch()` returns while the request is still going on, enabling our program to stay responsive. The response shows the `200` (OK) [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), meaning that our request succeeded.

This probably seems a lot like the example in the last article, where we added event handlers to the [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object. Instead of that, we're passing a handler into the `then()` method of the returned promise.

## Chaining promises

With the `fetch()` API, once you get a `Response` object, you need to call another function to get the response data. In this case, we want to get the response data as JSON, so we would call the [`json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) method of the `Response` object. It turns out that `json()` is also asynchronous. So this is a case where we have to call two successive asynchronous functions.

We need also to check that the server accepted and was able to handle the request, before we try to read it. We'll do this by checking the status code in the response and throwing an error if it wasn't "OK":

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
```

`then()` itself returns a promise, which will be completed with the result of the function passed to it.

## Catching errors

This brings us to the last piece: how do we handle errors? The `fetch()` API can throw an error for many reasons (for example, because there was no network connectivity or the URL was malformed in some way) and we are throwing an error ourselves if the server returned an error.

To support error handling, `Promise` objects provide a [`catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) method. This is a lot like `then()`: you call it and pass in a handler function. However, while the handler passed to `then()` is called when the asynchronous operation *succeeds*, the handler passed to `catch()` is called when the asynchronous operation *fails*.

If you add `catch()` to the end of a promise chain, then it will be called when any of the asynchronous function calls fails. So you can implement an operation as several consecutive asynchronous function calls, and have a single place to handle all errors.

```js
const fetchPromise = fetch('bad-url');

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
```

## Promise terminology

Promises come with some quite specific terminology that it's worth getting clear about.

First, a promise can be in one of three states:

- **pending**: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to `fetch()`, and the request is still being made.
- **fulfilled**: the asynchronous function has succeeded. When a promise is fulfilled, its `then()` handler is called.
- **rejected**: the asynchronous function has failed. When a promise is rejected, its `catch()` handler is called.

Note that what "succeeded" or "failed" means here is up to the API in question: for example, `fetch()` considers a request successful if the server returned an error like [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404), but not if a network error prevented the request being sent.

Sometimes, we use the term **settled** to cover both **fulfilled** and **rejected**.

A promise is **resolved** if it is settled, or if it has been "locked in" to follow the state of another promise.

## Combining multiple promises

The promise chain is what you need when your operation consists of several asynchronous functions, and you need each one to complete before starting the next one. But there are other ways you might need to combine asynchronous function calls, and the `Promise` API provides some helpers for them.

Sometimes, you need all the promises to be fulfilled, but they don't depend on each other. In a case like that, it's much more efficient to start them all off together, then be notified when they have all fulfilled. The [`Promise.all()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) method is what you need here. It takes an array of promises and returns a single promise.

The promise returned by `Promise.all()` is:

- fulfilled when and if *all* the promises in the array are fulfilled. In this case, the `then()` handler is called with an array of all the responses, in the same order that the promises were passed into `all()`.
- rejected when and if *any* of the promises in the array are rejected. In this case, the `catch()` handler is called with the error thrown by the promise that rejected.

```js
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });
```

Here, we're making three `fetch()` requests to three different URLs. If they all succeed, we will log the response status of each one. If any of them fail, then we're logging the failure.

With the URLs we've provided, all the requests should be fulfilled, although for the second, the server will return `404` (Not Found) instead of `200` (OK) because the requested file does not exist. So the output should be:

```js
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

If we try the same code with a badly formed URL, like this:

```js
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });
```

Then we can expect the `catch()` handler to run, and we should see something like:

```js
Failed to fetch: TypeError: Failed to fetch
```

Sometimes, you might need any one of a set of promises to be fulfilled, and don't care which one. In that case, you want [`Promise.any()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any). This is like `Promise.all()`, except that it is fulfilled as soon as any of the array of promises is fulfilled, or rejected if all of them are rejected:

```js
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });
```

Note that in this case we can't predict which fetch request will complete first.

These are just two of the extra `Promise` functions for combining multiple promises. To learn about the rest, see the [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) reference documentation.

## References

1. [How to use promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
2. [`fetch()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
3. [Response - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response)
4. [`Response.json()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
5. [`Response.text()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/text)
6. [`throw` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
7. [Error - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)