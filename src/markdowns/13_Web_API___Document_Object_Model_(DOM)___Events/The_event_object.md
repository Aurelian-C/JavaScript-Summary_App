# The Event Object

Sometimes, inside an event handler function, you'll see a parameter specified with a name such as `event`, `evt`, or `e`. This is called the **event object**, and it is automatically passed to event handlers to provide extra features and information.

> **Note:** You can use any name you like for the event object — you just need to choose a name that you can then use to reference it inside the event handler function. `e`/`evt`/`event` is most commonly used by developers because they are short and easy to remember. It's always good to be consistent — with yourself, and with others if possible.

Most event objects have a standard set of properties and methods available on the event object; see the [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) object reference for a full list.

Some event objects add extra properties that are relevant to that particular type of event. For example, the [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) event fires when the user presses a key. Its event object is a [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent), which is a specialized `Event` object with a `key` property that tells you which key was pressed:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);
```

## Preventing default behavior

Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default. The most common example is that of a web form, for example, a custom registration form. When you fill in the details and click the submit button, the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a "success message" page of some kind (or the same page, if another is not specified).

The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the submission to the server and give an error message saying what's wrong and what needs to be done to put things right. Some browsers support automatic form data validation features, but since many don't, you are advised to not rely on those and implement your own validation checks. Let's look at a simple example.

First, a simple HTML form that requires you to enter your first and last name:

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

Now some JavaScript — here we implement a very simple check inside a handler for the [`submit`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) event (the submit event is fired on a form when it is submitted) that tests whether the text fields are empty. If they are, we call the [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) function on the event object — which stops the form submission — and then display an error message in the paragraph below our form to tell the user what's wrong:

```js
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});
```



## References

1. [Introduction to events - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
2. [Creating and triggering events - MDN](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)
3. [What exactly is the parameter e (event) and why pass it to JavaScript functions? - stackoverflow.com](https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions)
4. [Event.preventDefault() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
5. [Event.target - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
6. [target Event Property - MDN](https://www.w3schools.com/jsref/event_target.asp)
7. [Event.currentTarget - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)
8. [currentTarget Event Property - w3schools](https://www.w3schools.com/jsref/event_currenttarget.asp)
9. [Event.composedPath() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath)

