# Intersection Observer API

The Intersection Observer API provides a way to **asynchronously** observe **changes** in the **intersection** of a **target element** with an **ancestor element** or with a top-level document's **viewport**.

## History of implementing intersection detection

Historically, **detecting visibility of an element**, or the **relative visibility of two elements in relation to each other**, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish. As the web has matured, the need for this kind of information has grown. **Intersection information** is needed for many reasons, such as:

- Lazy-loading of images or other content as a page is scrolled.
- Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
- Reporting of visibility of advertisements in order to calculate ad revenues.
- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.

**Implementing intersection detection** in the past involved event handlers and loops calling methods like `Element.getBoundingClientRect()` to build up the needed information for every element affected. Since all this code runs on the main thread, even one of these can cause **performance problems**. When a site is loaded with these tests, things can get downright ugly.

Consider a web page that uses infinite scrolling. It uses a vendor-provided library to manage the advertisements placed periodically throughout the page, has animated graphics here and there, and uses a custom library that draws notification boxes and the like. Each of these has its own intersection detection routines, all running on the main thread. The author of the web site may not even realize this is happening, since they may know very little about the inner workings of the two libraries they are using. As the user scrolls the page, these intersection detection routines are firing constantly during the scroll handling code, resulting in an experience that leaves the user frustrated with the browser, the web site, and their computer.

## Intersection Observer API

The Intersection Observer API lets code register a **callback function** that is **executed whenever an element they wish to monitor enters or exits another element (or the viewport)**, or **when the amount by which the two intersect changes by a requested amount**. This way, sites no longer need to do anything on the main thread to watch for this kind of element intersection, and the browser is free to optimize the management of intersections as it sees fit.

One thing the Intersection Observer API can't tell you: the exact number of pixels that overlap or specifically which ones they are; however, it covers the much more common use case of "If they intersect by somewhere around N%, I need to do something".

## Intersection observer concepts and usage

The Intersection Observer API allows you to **configure a callback** that is called when either of these circumstances occur:

- A **target element** _intersects_ either the device's **viewport** or a **specified element**. That specified element is called the **root element** or root for the purposes of the Intersection Observer API.
- The first time the observer is initially asked to watch a target element.

Typically, you'll want to watch for intersection changes with regard to the target element's closest scrollable ancestor, or, if the target element isn't a descendant of a scrollable element, the device's viewport.

Whether you're using the viewport or some other element as the root, the API works the same way, executing a callback function you provide whenever the visibility of the target element changes so that it crosses desired amounts of intersection with the root.

## Creating an intersection observer

You create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other:

```js
const callback = function (entries, observer) {
  const [entry] = entries;
  console.log(entries);
  console.log(entry)
};

const options = {
  root: document.querySelector('#idElement'),
  rootMargin: '0px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);

observer.observe(targetElement);
```

### Intersection observer callback

 The `callback` function will get called with two arguments and that's the **entries** and the **observer object** itself (`new IntersectionObserver()`).

The callback receives a list of `IntersectionObserverEntry` objects and the observer:

```js
const callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

The list of entries received by the callback includes one entry for each target which reported a change in its intersection status. Check the value of the `isIntersecting` property to see if the entry represents an element that currently intersects with the root.

The `callback` function will get called each time that the **observed element** _(target element) is intersecting the_ **root element** _at the threshold that we defined, no matter if we are scrolling up or down_.

### Intersection observer options

The `options` object passed into the `IntersectionObserver()` constructor let you control the circumstances under which the observer's callback is invoked. It has the following fields:

###### `root`

The element that is used as the viewport for **checking visibility of the target**. Must be the **ancestor of the target**. Defaults to the browser viewport if not specified or if `null`.

###### rootMargin

Margin around the root. Can have values similar to the CSS `margin` property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.

###### threshold

Either a single **number** or an **array of numbers** which indicate at **what percentage of the target's visibility the observer's callback should be executed**.
If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. **The default is 0** (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
A threshold of 1.0 means that when 100% of the target is visible within the element specified by the `root` option, the callback is invoked.

### Targeting an element to be observed

Once you have created the observer, you need to give it a target element to watch:

```js
let target = document.querySelector('#listItem');
observer.observe(targetElement);

// the callback we setup for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Whenever the target meets a threshold specified for the `IntersectionObserver`, the callback is invoked.  Also, note that if you specified the `root` option, **the target must be a descendant of the root element**.

## Intersection change callbacks

When the amount of a target element which is visible within the root element crosses one of the visibility thresholds, the `IntersectionObserver` object's callback is executed. The callback receives as input an array of all of `IntersectionObserverEntry` objects, one for each threshold which was crossed, and a reference to the `IntersectionObserver` object itself.

Each entry in the list of thresholds is an `IntersectionObserverEntry` object describing one threshold that was crossed; that is, each entry describes how much of a given element is intersecting with the root element, whether or not the element is considered to be intersecting or not, and the direction in which the transition occurred.

## Interfaces

###### `IntersectionObserver`

The primary interface for the Intersection Observer API. Provides methods for creating and managing an observer which can watch any number of target elements for the same intersection configuration. Each observer can asynchronously observe changes in the intersection between one or more target elements and a shared ancestor element or with their top-level Document's viewport. The ancestor or viewport is referred to as the root.

###### `IntersectionObserverEntry`

Describes the intersection between the target element and its root container at a specific moment of transition. Objects of this type can only be obtained in two ways: as an input to your `IntersectionObserver` callback, or by calling `IntersectionObserver.takeRecords()`.

## References

1. [Intersection Observer API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
