# Promises and the fetch API

## What is a Promise?

A Promise is an **object** that is used as a **placeholder for the future result** of an **asynchronous operation**. In other words, a Promise is a **container** for an **asynchronously** delivered **value** or a **container** for a future **value**.

> **Note**: the perfect example of a future value is the response coming from an AJAX call. So when we start the AJAX call, there is no value yet, but we know that there will be some value in the future, so we can use a promise to handle this future value.

With Promises we no longer need to rely on _events_ and _callbacks_ passed into asynchronous functions to handle asynchronous results. Instead of _nesting callbacks_, we can **chain promises** for a sequence of asynchronous operations: escaping callback hell.

## The Promise lifecycle

Since promises work with asynchronous operations, promises are **time sensitive**, so they **change over time** and so promises can be in **different states** and this is what they call the cycle of a promise.

![asynchronous-promises1](../../img/asynchronous_promises1.jpg)

In the very beginning, we say that a promise is **pending** and so this is **before any value resulting from the asynchronous task is available**. Now, during this time, the asynchronous task is still doing its work in the background. Then when the task finally finishes, we say that the promise is **settled** and there are **two different types of settled** promises and that's **fulfilled** promises and **rejected** promises.

A fulfilled promise is a promise that has **successfully resulted in a value** just as we expect it, for example, when we use the promise to fetch data from an API, a fulfilled promise successfully got that data and it's now available to being used. On the other hand, a rejected promise means that there has been an **error during the asynchronous task**.

Now these two different states are very important to understand because when we use promises in our code, we will be able to **handle these different states** in order to do something as a result of either a successful promise or a rejected one. Another important thing about promises is that **a promise is only settled once and so from there, the state will remain unchanged forever**, so the **promise was either fulfilled or rejected, but it's impossible to change that state**.

Now, these different states that I showed you here are relevant and useful when we **use a promise to get a result**, which is called, to **consume a promise**. So **we consume a promise when we already have a promise**, for example, the promise that was returned from the `fetch()` function.

But **in order for a promise to exist in the first place, it must first be built, so it must be created**. **In the case of the `fetch` API, it's the `fetch()` function that builds the promise and returns it for us to consume, so in this case, we don't have to build the promise ourselves in order to consume it**. Now, most of the time we will actually just consume promises, which is also the easier and more useful part, but sometimes we also need to build a promise and to not just consume it.

## References

1. [What is a Promise? - medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261#.aa7ubggsy)
