# Introducing to Asynchronous JavaScript

JavaScript is a ==**single-threaded** language== and, at the same time, also ==non-blocking, **asynchronous** and concurrent==.

JavaScript is a single-threaded programming language which means ==only one thing can happen at a time==. That is, the JavaScript Engine can only process one statement at a time in a single thread. While the single-threaded languages simplify writing code because you don’t have to worry about the concurrency issues, this also means you can’t perform long operations such as network access without blocking the main thread. Imagine requesting some data from an API; depending upon the situation, the server might take some time to process the request while blocking the main thread making the web page unresponsive.

That’s where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, Promises and `async`/`await`), you can perform long network requests without blocking the main thread. Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

## Single-Thread Language

A single-thread language is one with a ==single Call Stack== and a ==single Memory Heap==. It means that it ==runs only one thing at a time==.

In a single-thread language like JavaScript, browser steps through the code one line at a time, in the order we wrote it. At each point, the browser waits for each line of code to finish its work before going on to the next line. It has to do this because each line depends on the work done in the preceding lines. That makes this a **synchronous program**.

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = 'John';
const greeting = makeGreeting(name);
console.log(greeting); // "Hello, my name is John!"
```

Here, `makeGreeting()` is a ==**synchronous function**== because the caller has to wait for the function to finish its work and return a value before the caller can continue.

> **Note**: JavaScript has only **one threat of execution** and so it can **only do one thing at a time**. There is absolutely no multitasking happening in JavaScript itself.

## Long-running synchronous functions that work in the Call Stack

What if a synchronous function takes a long time? We'll start by looking at the problem with long-running synchronous functions, which make asynchronous programming a necessity. Consider the following code:

```js
let number;
const longRunningTask = function() {
    for (let i = 0; i < 10000000; i++) {
        number = i;
    };
    console.log('2. Long running task has finished...')
};

console.log('1. Start');
longRunningTask();
console.log('3. Finish');

// 1. Start
// 2. Long running task has finished...
// 3. Finish
```

What we should note here is that the browser effectively steps through the program one line at a time, in the order we wrote it, and at each point it waits for the line to finish its work, before going on to the next line. It has to do this, because each line depends on the work that was done in the preceding lines. _You'll find that while our `for` loop is running, our program is completely unresponsive: the user can't type anything, or click anything, or do anything else. This is the basic problem with long-running synchronous functions_. What we would like here is a way that our program can:

- start a long-running operation by calling a function
- have the function start the operation and return right away, so our program can still be responsive to other events
- be notified with the result of the operation, when it eventually completes.

==That's what an **asynchronous function** offers us. Asynchronous programming is a technique that enables your program to start a potentially **long-running task**, and then rather than having to wait until that task has finished, to be able to continue to be **responsive to other events while the long-running task runs**. Once the task is completed, your program is presented with the result==.

## Asynchronous & Web APIs

Browsers provide to JavaScript language Web APIs, so JavaScript can use asynchronous functions.

When you run some JavaScript code in a browser, the JavaScript Engine starts to parse the code. Each line is executed and popped on and off the Call Stack. But, what happen when the JavaScript Engine meet a Web APIs function? ==Web APIs are not something JavaScript Engine recognizes, so the JavaScript Engine knows to pass Web APIs functions to the browser for handle them==. When the browser has finished running its methods, it puts what is needed to be ran by JavaScript into the Callback Queue. The Callback Queue can't be ran until the Call Stack is completely empty. So, the Event Loop is constantly checking the Call Stack to see if it is empty so that it can add anything in the Callback Queue back into the Call Stack. And finally, once it is back in the Call Stack, it is ran and then popped off the stack.

```js
let number;

console.log('1. Start');

setTimeout(function() {
    for (let i = 0; i < 1000000; i++) {
        number = i;
    };
    console.log('2. Long running task has finished...')
}, 1);

console.log('3. Finish');

// 1. Start
// 3. Finish
// 2. Long running task has finished...
```

## Asynchronous & Event handlers

Event handlers are a form of asynchronous programming: you provide a function (the event handler) that will be called, not right away, but whenever the event happens. If "the event" is "the asynchronous operation has completed", then that event could be used to notify the caller about the result of an asynchronous function call. Some early asynchronous APIs used events in just this way.

The [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) API enables you to make HTTP requests to a remote server using JavaScript. Since this can take a long time, it's an asynchronous API, and you get notified about the progress and eventual completion of a request by attaching event listeners to the `XMLHttpRequest` object.

```js
const request = new XMLHttpRequest();
request.open('GET', 'https://someApi.com/endpoint');
request.send();
request.addEventListener('load', function () {
  // statement
});
```

## Asynchronous & Chaining Callbacks: Callback Hell

An event handler is a particular type of callback. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. As we just saw, callbacks used to be the main way asynchronous functions were implemented in JavaScript.

However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions.

```js
const request1 = new XMLHttpRequest();
request.open('GET', 'https://someApi.com/endpoint');
request.send();
request.addEventListener('load', function () {
	const request2 = new XMLHttpRequest();
	request.open('GET', 'https://someApi.com/endpoint');
	request.send();
	request.addEventListener('load', function() {
		const request3 = new XMLHttpRequest();
		request.open('GET', 'https://someApi.com/endpoint');
		request.addEventListener('load', function() {
			//statement
		};
	});
});

// Another example of Callback Hell
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
```

Because we have to call callbacks inside callbacks, we get a deeply nested functions, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).

When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors at each level of the "pyramid", instead of having error handling only once at the top level. For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Synchronous & Asynchronous

In **synchronous** programming, tasks are executed one after another. Each task waits for any previous task to be completed and is executed only then.

In **asynchronous** programming, when one task is executed, you can switch to a different task without waiting for the previous one to be completed.

## What is AJAX?

==A==synchronous ==J==avaScript ==A==nd ==X==ML, while not a technology in itself (is not a programming language), is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a combination of existing technologies together, including [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or [XHTML](https://developer.mozilla.org/en-US/docs/Glossary/XHTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), [XML](https://developer.mozilla.org/en-US/docs/Web/XML), [XSLT](https://developer.mozilla.org/en-US/docs/Web/XSLT), and most importantly the [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object. When these technologies are combined in the AJAX model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

AJAX's most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.

The two major features of AJAX allow you to do the following:

- Make requests to the server without reloading the page
- Receive and work with data from the server

Modern Browsers can use Fetch API instead of the `XMLHttpRequest` Object. The Fetch API interface allows web browser to make HTTP requests to web servers. If you use the `XMLHttpRequest` Object, Fetch can do the same in a simpler way.

## References

1. [Introducing asynchronous JavaScript - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
2. [Asynchronous and Single-threaded JavaScript? Meet the Event Loop - thecodest.co](https://thecodest.co/blog/asynchronous-and-single-threaded-javascript-meet-the-event-loop/)
3. [JavaScript Cheat Sheet: The Advanced Concepts - ZTM](https://zerotomastery.io/cheatsheets/javascript-cheatsheet-the-advanced-concepts/)
4. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
5. [AJAX Introduction - w3schools](https://www.w3schools.com/js/js_ajax_intro.asp)
6. [AJAX - MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
