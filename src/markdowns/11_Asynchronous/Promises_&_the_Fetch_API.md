# Promises and the fetch API

## What is a Promise?

==A Promise is an **object** that is used as a **placeholder for the future result** of an **asynchronous operation**. In other words, a Promise is a **container** for an **asynchronously** delivered **value** or a **container** for a future **value**==.

> **Note**: The perfect example of a future value is the response coming from an AJAX call. So when we start the AJAX call, there is no value yet, but we know that there will be some value in the future, so we can use a promise to handle this future value.

With Promises we no longer need to rely on _events_ and _callbacks_ passed into asynchronous functions to handle asynchronous results. ==Instead of _nesting callbacks_, we can **chain promises** for a sequence of asynchronous operations: escaping callback hell==.

## The Promise lifecycle

Since Promises work with asynchronous operations, Promises are ==time sensitive==, so they ==change over time==, and so Promises can be in ==different states== and this is what they call the cycle of a Promise.

![asynchronous-promises1](../../img/asynchronous_promises1.jpg)

In the very beginning, we say that a Promise is ==**pending**== and so this is ==before any value resulting from the asynchronous task is available==. Now, during this time, the asynchronous task is still doing its work in the background. Then when the task finally finishes, we say that the Promise is ==**settled**== and there are ==two different types of settled== Promises and that's ==fulfilled== Promises and ==rejected== Promises.

==A fulfilled Promise is a Promise that has **successfully resulted in a value**== just as we expect it, for example, when we use the Promise to fetch data from an API, a fulfilled Promise successfully got that data and it's now available to being used. On the other hand, ==a rejected Promise means that there has been an **error during the asynchronous task**==.

Now these two different states are very important to understand because when we use Promises in our code, we will be able to ==handle these different states== in order to do something as a result of either a successful Promise or a rejected one. Another important thing about Promises is that ==**a Promise is only settled once and so from there, the state will remain unchanged forever**==, so the ==Promise was either fulfilled or rejected, but it's impossible to change that state==.

Now, these different states that I showed you here are relevant and useful when we ==use a Promise to get a result, which is called, to **consume a Promise**. So we consume a Promise when we already have a Promise==, for example, the Promise that was returned from the `fetch()` function.

But ==in order for a Promise to exist in the first place, it must first be built, so it must be created. In the case of the `fetch` API, it's the `fetch()` function that builds the Promise and returns it for us to consume, so in this case, we don't have to build the Promise ourselves in order to consume it==. Now, most of the time we will actually just consume Promises, which is also the easier and more useful part, but sometimes we also need to build a Promise and to not just consume it.

## References

1. [What is a Promise? - medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261#.aa7ubggsy)
1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
