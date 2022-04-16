# Live Node Lists vs Static Node Lists

## What is a NodeList?

- A `NodeList` object is a list (collection) of nodes extracted from a document.
- A `NodeList` object is almost the same as an `HTMLCollection` object.
- Some (older) browsers return a `NodeList` object instead of an `HTMLCollection` for methods like `getElementsByClassName()`.
- All browsers return a `NodeList` object for the property `childNodes`.
- Most browsers return a `NodeList` object for the method `querySelectorAll()`.

## Static Node List

The Static Node List takes a ==**SNAPSHOT**== of the DOM, of what we select and does ==NOT update== that array-like when that part which we queried in the past changes. Now, that's not necessarily a disadvantage from a performance perspective, from a memory consumption perspective, this might even be better and I also want to highlight that of course ==the individual objects in there array-like are still **reference values**==, so an object in there array-like is still of course a live reference to the DOM objects that are responsible for what we see on the page.

So if I go to let's say `elements[0].textContent = 'One'`, that gets reflected on the screen because the ==items are reference values==, these are pointers at the objects, at the DOM objects in memory, just the overall array-like is just a snapshot build from what I've been selected in the past.

## Live Node List

On the other side, Live Node List is a ==**LIVE**== list array-like which will includes our most recent addition. So `getElementsByClassName()` or `getElementsByTagName()` always gives you array-like objects with live lists which will change when the items you queried in the past change, so when the number of array-like items changes I should say.

That can or cannot be an advantage, often it will not matter to be honest. It could lead to a ==higher memory consumption== if you're managing a lot of such live collections which change all the time but again, that will also probably only matter in rare niche cases but for the most part, `querySelectorAll()` simply should be used because it is more flexible, supports richer queries and therefore often is a common choice if you want to query for multiple items.

## Reference

1. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=Cj0KCQjw0umSBhDrARIsAH7FCoeU9W1FhcfHq4JH6InuqwKQdlnXPY4wnIG6-ZrfGPJ6hyB9zTE0NW8aAvGkEALw_wcB)
