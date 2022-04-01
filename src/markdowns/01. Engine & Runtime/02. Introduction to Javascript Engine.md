# Introduction to JavaScript Engine

**JavaScript Engine is a 'program' that executes JavaScript code**. Any JavaScript engine (ex. V8 for Google Chrome) always contains a **Call Stack** and a **Memory Heap**. The Call Stack is **where our code is actually executed, using something called execution contexts**. The Memory Heap is an unstructured memory pool which **stores all the objects that our application needs**.

![javascript-engine](../../img/javascript-engine.jpg)

Almost everyone that has worked with JavaScript has heard of the **V8 engine, the idea of the JavaScript Engine**, and most people know that **JavaScript is a single threaded language** that it uses a **Callback Queue**. You may also hear phrases like **JavaScript is an interpreted language**. What is this engine that we speak of? If I write some code like `const isHappy = true;`, how does the computer read this code?

If I gave a computer with a CPU a file that is a JavaScript file and I tell it "Read this file and do something for me", the computer only understands 1 and 0 at the end of the day, so **the computer doesn't really know what JavaScript is**. So how are we able to communicate using a JavaScript file so that the computer do something for me? And this is the first step in our learning, and that is the JavaScript Engine. **By having a JavaScript Engine, it allows you to give this engine the JavaScript file and this engine is going to understand the Javascript file and tell the computer what to do**. In a sense, you just created a **translator** so you can communicate with somebody that doesn't know your language, and this special engine called **JavaScript Engine understands JavaScript**. Our computer finally understands us because of this JavaScript Engine.

But do you think there's one JavaScript Engine or many JavaScript Engines? Well, **there are a ton of engines and they're called ECMAScript engines**. So any time we use an engine, we're able to give it a JavaScript file and this JavaScript file gets understood by the engine and it allows this engine to communicate and tell the machine, the computer, to do what we ask it to do with JavaScript.

Now, these engines are written by programmers, for example, **V8 engine is written in C++**, but why do people write these engines? 2008 marked a really pivotal moment in history when it comes to JavaScript because V8 was released by Google. Before then, most browsers used engines that were very basic, which meant that JavaScript was a little bit slow. You see, Google had this problem, they had something called Google Maps and Google Maps, as you know, requires a lot of power, and all the previous engines before V8 would make Google Maps very, very slow on the browser. So with Google Maps and their own Chrome browser, they said, we're going to **write our own JavaScript Engine, the V8 engine, so that JavaScript runs way faster** on the browser than it's done previously and in 2008 they released V8.

_But what is inside this engine, this magical machine that understands JavaScript, it reads our code and then it runs this code? Let's get into that in the upcoming lecture, JavaScript Runtime._

So we know that this thing called the JavaScript engine takes our written JavaScript code and does some magic to tell the computer to do what we want it to do. So what's happening inside of this engine, and here's the tricky part, as we know this engine can be built by anybody. Yes, that means you can build your own JavaScript engine, but it's a lot of work and at the end of the day it's just a program. And the V8 engine, which is the most popular, most common, and some would say the fastest JavaScript Engine that the Chrome browser and Node.js uses, this engine is written in C++, a low level programming language.

What problem or problems do you see with everybody creating their own engines in JavaScript? Can we just create our own engine and all of a sudden, boom, there it is, we have our JavaScript Engine? Well, yes, you can definitely do that, but remember our list on wikipedia, how it was called **ECMAScript engines and not JavaScript engines**. That's because if everybody can just create a JavaScript engine, it'll just be total chaos, which is why ECMAScript was created. It tells people "Hey, here's the standard and how you should do things in JavaScript and how it should work", and **ECMAScript is the governing body of JavaScript that essentially decides how the language should be standardized**, so it tells engine creators "This is how JavaScript should work", but internally, how you build the engine is up to you as long as it conforms to the standards.

**A JavaScript engine is a computer program that you give JavaScript code to and it tells the computer how to execute it. Basically a translator for the computer between JavaScript and a language that the computer understands**. But what happens inside of the engine? Well, that depends on the engine. There are many JavaScript Engines out there and typically they are created by web browser vendors. All engines are standardized by ECMA Script or ES.

> Nifty Snippet: 2008 was a pivotal moment for JavaScript when Google created the **Chrome V8 Engine**. The V8 engine is an open source high performance JavaScript engine, **written in C++** and **used in the Chrome browser** and **powers Node JS**. The performance outmatched any engine that came before it mainly because it **combines 2 parts of the engine, the interpreter and the compiler**. Today, all major engines use this same technique.

## Memory Heap & Call Stack

The JavaScript Engine does a lot of work for us, but 2 of the biggest jobs are reading and executing the code. We need **a place to store and write our data** and **a place to keep track line by line of what's executing**. That's where the **Call Stack** and the **Memory Heap** come in.

The Memory Heap is **a place to store and write information** so that we can use our memory appropriately. It is **a place to allocate, use, and remove memory as needed**.

```js
// Tell the memory heap to allocate memory for a number
const number = 11;

// Allocate memory for a string
const string = 'some text';

// Allocate memory for an object and it's values
const person = {
  first: 'Brittney',
  last: 'Postma',
};
```

The Call Stack **keeps track of where we are in the code, so we can run the program in order**. Things are placed into the Call Stack on top and removed as they are finished. It **runs in a first in last out mode. Each call stack can point to a location inside the Memory Heap**.

```js
function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

debugger;
calculate();
```

What is a program? Well, a program has to do some simple things. It has to **allocate memory**, otherwise we wouldn't be able to have variables or even have a file on our computer. It also has to **parse and execute scripts**, which means read and run commands.

The Javascript engine consists of two parts, a **Memory Heap** and a **Call Stack**. The **Memory Heap _is where the memory allocation happens_** and the **Call Stack _is where your code is read and executed_**, Call Stack tells you where you are in the program.

_We learned that the JavaScript engine does a lot of work for us, but the biggest thing is actually reading our code and executing it_. And what do you think the two most important things in this step are? That is, one, _we need a place to store and write information, that is to store our variables, our objects, our data of our apps and a place to actually run and keep track of what's happening line by line on our code_. Well, we use **Call Stack** and **Memory Heap** for that.

**We need the Memory Heap as a place to store and write information**, _because at the end of the day all programs are just read and write operations, that way we have a place to allocate memory, use memory and release memory_. And two, **with the Call Stack, we need a place to keep track of where we are in the code so that we can run the code in order**. And with these two things, the JavaScript engine is able to do that.

So to review the **Memory Heap _is where the memory allocation happens_** and the **Call Stack _is where the engine keeps track of where your code is in its execution_**.

**We can think of Call Stack as a region in memory which operates in first-in/last-out mode**.

_The Call Stack stores functions and variables as your code executes at each entry state of the stack, also called the stack frame and it runs in a first-in/last-out mode, that is the first one in is the last one getting popped up. And we can keep adding to the stack and eventually it pops, pops, pops all the function calls until we are done with our commands and we use the Memory Heap to actually point to different variables, objects and data that we store so that we know where to look. And by the way, this is the way it works in most programming languages, we have calls stacks and memory heaps and these are the two locations that JavaScript remembers._

_Now, since every JavaScript engine has different implementations, where variables are allocated is not 100% the same all the time. So a good way to think about it is this s**imple variables can usually be stored on the stack** and **data structures like objects, arrays and functions are stored in Memory Heap**_.

## References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)

2. [Understanding the JavaScript runtime environment - medium.com](https://medium.com/@gemma.stiles/understanding-the-javascript-runtime-environment-4dd8f52f6fca)
