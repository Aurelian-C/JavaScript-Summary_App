# Introduction to The Document Object

What is that DOM thing? Before we ask to that question, let's understand ==what the browser does with the HTML code== which is part of any web page we create and how JavaScript works with that.

## HTML, DOM & JavaScript

So we get ==JavaScript== and we get the ==browser==, these two pieces which ==interact all the time==. Now don't forget that ==JavaScript is a **hosted language**==, that means ==the browser provides the environment for JavaScript to run==, it provides the ==JavaScript Engine== which in the end ==parses and understands all the JavaScript code and executes it==. So the browser provides the Engine, it also provides a bunch of ==APIs==, a bunch of functionalities into which JavaScript can tap so that ==JavaScript can interact with the browser==.

## Understanding the DOM and how it's created

When we work with the loaded and rendered HTML code, the browser parse and render the HTML code and exposes functionality to let JavaScript interact with the rendered HTML. In other words ==the browser exposes a Web API to allow JavaScript to work with the parsed document (HTML)==, and in the end that's called the ==Document Object Model==.

![DOM parsing](../src/img/DOM%20parsing.jpg)

So the DOM in the end is that loaded and rendered HTML code or to be precise, the ==**object representation of that HTML code** which the browser creates behind the scenes into which we can tap with JavaScript==. So JavaScript can work with a bunch of objects which will be exposed to us as JavaScript objects, which in the end represent what the browser rendered or what the browser made of that HTML code which was provided.
So in other words, the browser exposes to you a ==Web API==, a `document` object, which is ==globally available==, which ==is **NOT created by you** but which the **browser exposes to you**== to give you access to all the different ways of ==interacting with the HTML page==.

Now I mentioned the `document`, this is one important piece in working with the loaded HTML code, there also is another important global object and actually, document is a property of that other global object and that's the `window` object.

![document vs window](../src/img/document%20vs%20window.jpg)

Now the difference is that `document` in the end is the root DOM node which the browser exposes to you. That means that this is really ==the topmost entry point to get access to all that rendered HTML code==. So this provides you various methods and functionalities to get access to the elements, to query for HTML elements, to interact with its DOM contents, so to interact with a loaded HTML code.

`window` on the other hand is a ==global object== which as I just said actually has `document` as property, so `window` is ==the real topmost global object made available to you in JavaScript in the browser== and that in the end reflects the active browser window or tab if you want to call it like this. So it's basically your global entry point, your global storage if you want to call it like this for your script, so it gives you ==access to all the features that the browser wants to expose to you==.

## Summary about `window` object

`window` object is ==the topmost object== and this gives you ==access to all the core APIs== that the browser wants to expose to you.

The important thing is that with `window` object, if you're typing some code, you by default have access to everything in `window` which is why you can just type `alert()` like this. Totally correct would be `window.alert()`.

As you see because `window` is this topmost global object which is exposed to you by the browser and there, you have the `alert()` functionality but actually browsers always parse your JavaScript code such that `window.` is automatically added in front of some function if that function can't be found anywhere else, so the browser always looks in the `window` object if you're calling or accessing something, which is why `alert()` works just as well as `window.alert()` would works.

So that `window` object is a really important ==global object== giving you ==access to all the browser APIs== like `alert()`, a bunch of other things and also including the `document` object.

## Reference

1. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=Cj0KCQjw0umSBhDrARIsAH7FCoeU9W1FhcfHq4JH6InuqwKQdlnXPY4wnIG6-ZrfGPJ6hyB9zTE0NW8aAvGkEALw_wcB)
