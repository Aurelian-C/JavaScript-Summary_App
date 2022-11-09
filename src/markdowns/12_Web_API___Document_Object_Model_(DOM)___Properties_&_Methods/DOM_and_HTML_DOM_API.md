# DOM and HMTL DOM API

A document containing HTML is described using the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) interface, which is extended by the HTML specification to include various HTML-specific features. In particular, the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface is enhanced to become [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) and various subclasses, each representing one of (or a family of closely related) elements.

The HTML DOM API provides access to various browser features such as tabs and windows, CSS styles and stylesheets, browser history, and so forth.

==The HTML DOM API is made up of the interfaces that define the functionality of each of the [elements](https://developer.mozilla.org/en-US/docs/Glossary/Element) in [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML), as well as any supporting types and interfaces they rely upon==.

The functional areas included in the HTML DOM API include:

- Access to and control of HTML elements via the [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM).
- Access to and manipulation of form data.
- Interacting with the contents of 2D images and the context of an HTML [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas), for example to draw on top of them.
- Management of media connected to the HTML media elements ([`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)).
- Dragging and dropping of content on webpages.
- Access to the browser navigation history
- Supporting and connective interfaces for other APIs such as [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), and [Server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).

### Structure of an HTML document

![DOM_API](D:\Websites\Projects\Cioloca Aurelian__Javascript Resume\src\img\DOM_API.jpg)

The Document Object Model ([DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM)) is an architecture that describes the structure of a [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document); each document is represented by an instance of the interface [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document). A document, in turn, consists of a hierarchical tree of **nodes**, in which a node is a fundamental record representing a single object within the document (such as an element or text node).

Nodes may be strictly organizational, providing a means for grouping other nodes together or for providing a point at which a hierarchy can be constructed; other nodes may represent visible components of a document. Each node is based on the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface, which provides properties for getting information about the node as well as methods for creating, deleting, and organizing nodes within the DOM.

Nodes don't have any concept of including the content that is actually displayed in the document. They're empty vessels. The fundamental notion of a node that can represent visual content is introduced by the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface. An `Element` object instance represents a single element in a document created using either HTML or an [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML) vocabulary such as [SVG](https://developer.mozilla.org/en-US/docs/Glossary/SVG).

For example, consider a document with two elements, one of which has two more elements nested inside it:

![DOM_structure](D:\Websites\Projects\Cioloca Aurelian__Javascript Resume\src\img\DOM_structure.jpg)

While the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) interface is defined as part of the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) specification, the HTML specification significantly enhances it to add information specific to using the DOM in the context of a web browser, as well as to using it to represent HTML documents specifically.

## References

1. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=Cj0KCQjw0umSBhDrARIsAH7FCoeU9W1FhcfHq4JH6InuqwKQdlnXPY4wnIG6-ZrfGPJ6hyB9zTE0NW8aAvGkEALw_wcB)
1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
1. [Introduction to the DOM - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
1. [The HTML DOM API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)
1. [JavaScript HTML DOM - w3schools](https://www.w3schools.com/js/js_htmldom.asp)
1. [Document - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document)
1. [Node - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node)