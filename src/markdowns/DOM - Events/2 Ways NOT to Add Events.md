We **recommend that you use `addEventListener()` to register event handlers**. It's the most powerful method and scales best with more complex programs. However, there are two other ways of registering event handlers that you might see: **event handler properties** and inline **event handlers**.

# Event handler properties

Objects (such as buttons) that can fire events also usually have properties whose name is `on` followed by the name of the event. For example, elements have a property `onclick`. This is called an _event handler property_. To listen for the event, you can assign the handler function to the property.

```js
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
```

You can also set the handler property to a named function:

```js
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

With event handler properties, you can't add more than one handler for a single event. For example, you can call addEventListener('click', handler) on an element multiple times, with different functions specified in the second argument:

```js
element.addEventListener('click', function1);
element.addEventListener('click', function2);
```

This is impossible with event handler properties because any subsequent attempts to set the property will overwrite earlier ones:

```js
element.onclick = function1;
element.onclick = function2;
```

# Inline event handlers — don't use these

You might also see a pattern like this in your code:

```js
function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

The earliest method of registering event handlers found on the Web involved event handler HTML attributes (or inline event handlers) like the one shown above - the attribute value is literally the JavaScript code you want to run when the event occurs. The above example invokes a function defined inside a 'script' element on the same page, but you could also insert JavaScript directly inside the attribute, for example:

```js
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

You can find HTML attribute equivalents for many of the event handler properties; however, you shouldn't use these — they are considered bad practice. It might seem easy to use an event handler attribute if you are doing something really quick, but they quickly become unmanageable and inefficient.

For a start, it is not a good idea to mix up your HTML and your JavaScript, as it becomes hard to read. Keeping your JavaScript separate is a good practice, and if it is in a separate file you can apply it to multiple HTML documents.
Even in a single file, inline event handlers are not a good idea. One button is OK, but what if you had 100 buttons? You'd have to add 100 attributes to the file; it would quickly turn into a maintenance nightmare. With JavaScript, you could easily add an event handler function to all the buttons on the page no matter how many there were, using something like this:

```js
const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', bgChange);
}
```

Finally, many common server configurations will disallow inline JavaScript, as a security measure. **You should never use the HTML event handler attributes** — those are outdated, and using them is bad practice.
