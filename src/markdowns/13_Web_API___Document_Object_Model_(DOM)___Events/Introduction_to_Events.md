# Introduction to Events

Events are **actions** or **occurrences** that happen in the system you are programming, which **the system tells you about so your code can react to them**. For example, if the user clicks a button on a webpage, you might want to react to that action by displaying an information box. In this article, we discuss some important concepts surrounding events, and look at how they work in browsers

In the case of the Web, _events are fired inside the browser window, and tend to be attached to a specific item that resides in it_. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur. For example:

- The user selects a certain element or hovers the cursor over a certain element;
- The user chooses a key on the keyboard;
- The user resizes or closes the browser window;
- A web page has loaded;
- A form is submitted;
- An input field is changed
- A video is played, paused, or finishes;
- An error occurs.
  You can gather from this that there are a lot of events that can be fired:

  1. [Event reference - MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

  2. [DOM Events - w3schools](https://www.w3schools.com/jsref/dom_obj_event.asp)

_To react to an event, you_ **attach an event handler** _to it_. **Event handler** _is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires. When such ==a block of code is defined to run in response to an event==, we say we are_ **registering an event handler**.

> Note:
>
> - Event handlers are sometimes called **event listeners** — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The **==listener==** _listens out for the event happening_, and the **==handler==** _is the code that is run in response to it happening_.
> - ==**Web events are NOT part of the core JavaScript language** — they are defined as part of the APIs built into the browser==.

Objects that can fire events have an ```addEventListener()``` method, that takes at least two arguments: the **==name of the event==** and a **==function to handle the event==**.

## It's not just web pages:

**Events are not unique to JavaScript** — most programming languages have some kind of event model, and the way the model works often differs from JavaScript's way. In fact, the event model in JavaScript for web pages differs from the event model for JavaScript as it is used in other environments. For example, Node.js is a very popular JavaScript runtime that enables developers to use JavaScript to build network and server-side applications. The Node.js event model relies on listeners to listen for events and emitters to emit events periodically — it doesn't sound that different, but the code is quite different, making use of functions like on() to register an event listener, and once() to register an event listener that unregisters after it has run once. You don't need to understand anything about other such environments at this stage in your learning; we just wanted to make it clear that events can differ in different programming environments.

# References

1. [Introduction to events - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

2. [DOM Events - w3schools](https://www.w3schools.com/js/js_htmldom_events.asp)

3. [Event reference - MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

4. [DOM Events - w3schools](https://www.w3schools.com/jsref/dom_obj_event.asp)
