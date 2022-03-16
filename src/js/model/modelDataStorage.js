const pattern = {
  title: 'Main Ttile',
  sections: [
    {
      sectionTitle: 'Section Title',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const engineAndRuntime = {
  title: 'Engine & Runtime',
  sections: [
    {
      sectionTitle: 'Javascript Engine',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `Javascript Engine is a 'program' that executes JavaScript code. Any JavaScript engine (ex. V8 for Google Chrome) always contains a Call Stack and a Memory Heap. The Call Stack is where our code is actually executed, using something called execution contexts. The Memory Heap is an unstructured memory pool which stores all the objects that our application needs.`,
        `Almost everyone that has worked with JavaScript has heard of the <b>V8 engine, the idea of the JavaScript engine</b>, and most people know that <b>JavaScript is a single threaded language</b> that it uses a <b>Callback Queue</b>. You may also hear phrases like <b>JavaScript is an interpreted language</b>. What is this engine that we speak of? If I write some code like ' const isHappy = true;  ', how does the computer read this code?`,
        `If I gave a computer with a CPU a file that is a JavaScript file and I tell it 'Read this file and do something for me', the computer only understands 1 and 0 at the end of the day, so <b>the computer doesn't really know what JavaScript is</b>. So how are we able to communicate using a JavaScript file so that the computer do something for me? And this is the first step in our learning, and that is the JavaScript engine, <b>by having a JavaScript engine, it allows you to give this engine the JavaScript file and this engine is going to understand the Javascript file and tell the computer what to do</b>. <i>In a sense, you just created a translator so you can communicate with somebody that doesn't know your language</i>, and <b>this special engine called JavaScript Engine understands JavaScript</b>. Our computer finally understands us because of this JavaScript engine.`,
        `But do you think there's one JavaScript engine or many JavaScript engines? Well, <b>there are a ton of engines and they're called ECMAScript engines</b>. So any time we use an engine, we're able to give it a JavaScript file and this JavaScript file gets understood by the engine and it allows this engine to communicate and tell the machine, the computer, to do what we ask it to do with JavaScript.`,
        `Now, these engines are written by programmers, for example, <b>V8 engine is written in C++</b>, but why do people write these engines? 2008 marked a really pivotal moment in history when it comes to JavaScript because V8 was released by Google. Before then, most browsers used engines that were very basic, which meant that JavaScript was a little bit slow. You see, Google had this problem, they had something called Google Maps and Google Maps, as you know, requires a lot of power, and all the previous engines before V8 would make Google Maps very, very slow on the browser. So with Google Maps and their own Chrome browser, they said, we're going to <b>write our own JavaScript engine, the V8 engine, so that JavaScript runs way faster</b> on the browser than it's done previously and in 2008 they released V8.`,
        `<i>But what is inside this engine, this magical machine that understands JavaScript, it reads our code and then it runs this code? Let's get into that in the upcoming lecture, JavaScript Runtime</i>.`,
        `So we know that this thing called the JavaScript engine takes our written JavaScript code and does some magic to tell the computer to do what we want it to do. So what's happening inside of this engine, and here's the tricky part, as we know this engine can be built by anybody. Yes, that means you can build your own JavaScript engine, but it's a lot of work and at the end of the day it's just a program. And the V8 engine, which is the most popular, most common, and some would say the fastest JavaScript engine that the Chrome browser and Node.js uses, this engine is written in C++, a low level programming language.`,
        `What problem or problems do you see with everybody creating their own engines in JavaScript? Can we just create our own engine and all of a sudden, boom, there it is, we have our JavaScript engine? Well, yes, you can definitely do that, but remember our list on wikipedia, how it was called <b>ECMAScript engines and not JavaScript engines</b>. That's because if everybody can just create a JavaScript engine, it'll just be total chaos, which is why ECMAScript was created. It tells people 'Hey, here's the standard and how you should do things in JavaScript and how it should work', and <b>ECMAScript is the governing body of JavaScript that essentially decides how the language should be standardized</b>, so it tells engine creators 'This is how JavaScript should work', but internally, how you build the engine is up to you as long as it conforms to the standards.`,
        `A JavaScript engine is a computer program that you give JavaScript code to and it tells the computer how to execute it. Basically a translator for the computer between JavaScript and a language that the computer understands. But what happens inside of the engine? Well, that depends on the engine. There are many JavaScript Engines out there and typically they are created by web browser vendors. All engines are standardized by ECMA Script or ES.`,
        `<b>Nifty Snippet</b>: 2008 was a pivotal moment for JavaScript when Google created the <b>Chrome V8 Engine</b>. The V8 engine is an open source highperformance JavaScript engine, <b>written in C++</b> and <b>used in the Chrome browser</b> and <b>powers Node JS</b>. The performance outmatched any engine that came before it mainly because it <b>combines 2 parts of the engine, the interpreter and the compiler</b>. Today, all major engines use this same technique.`,
      ],
      sectionArticles: [
        {
          articleTitle:
            'Interpreter/Compiler/JIT Compiler and Writing Optimized Code',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `<img src="../src/img/Interpreter_Compiler_JIT_Compiler.jpg">`,
            `<b>The Parser</b>: Parsing is the <b>process of analyzing the source code</b>, checking it for errors, and breaking it up into parts.`,
            `<b>The Interpreter</b>: An interpreter directly <b>executes each line of code line by line, without requiring them to be compiled into a machine language program</b>. Interpreters can use different strategies to increase performance. They can parse the source code and execute it immediately, translate it into more efficient machine code, execute precompiled code made by a compiler, or some combination of these. <b>In the V8 engine, the interpreter outputs bytecode</b>.`,
            `<b>The Compiler</b>: The compiler works ahead of time to convert instructions into a machine-code or lowerlevel form so that they can be read and executed by a computer. It <b>runs all of the code and tries to figure out what the code does and then compiles it down into another language that is easier for the computer to read</b>.`,
            `<b>The Combo</b>In modern engines, the <b>interpreter starts reading the code line by line</b> while the <b>profiler watches for frequently used code and flags then passes is to the compiler to be optimized</b>. In the end, the JavaScript engine takes the bytecode the interpreter outputs and mixes in the optimized code the compiler outputs and then gives that to the computer. This is called <b>'Just in Time'</b> or <b>JIT Compiler</b>.`,
            `Let's talk about <b>interpreters</b> and <b>compilers</b>, which, as we can see, are important pieces in our JavaScript engine.`,
            `You see, <b>in programming, there are generally two ways of translating to machine language or something that our computers can understand</b> and what we're going to talk about here actually applies to most programming languages, not just JavaScript, Python, Java, C++, any language you can think of is going to use some of these concepts, so it's very important.`,
            `Let's start with the first one, the interpreter. <b>With an interpreter, what we do is we <i>translate and read the files line by line</i></b>.`,
            `A <b>compiler</b>, unlike an interpreter, <b><i>doesn't translate on the fly</i></b>. What it does is it <b><i>works ahead of time to create a translation of what code we've just written and it compiles down to usually a language that can be understood by our machines. A compiler take one pass through the code and try to understand what the code does</i></b>. And it's going to take the program in JavaScript or any type of language and write a new program in your new language, let's say to programming language.`,
            'So <i>compiler tries to understand what we want to do and takes our language and changes it into something else and this usually happens into something called a lower level language, such as machine code</i>. Now, in some respects, all languages have to be interpreted and compiled because it has to run (it has to be interpreted) and it also has to most likely get translated into something low level like machine code.',
            `But the main takeaways is this: <b>there are two ways to run JavaScript using an interpreter or a compiler</b>. Now, I know it's still a little bit fuzzy, but if I ask you, why would we want to do one over the other? What are the pros and cons on each? What do you think that is? Why would you pick one over the other?`,
            `<b>Babel + TypeScript</b>: Have you heard of Babel or TypeScript? They are heavily used in the Javascript ecosystem and you should now have a good idea of what they are: <b>Babel is a Javascript compiler that takes your modern JS code and returns  browser compatible JS (older JS code). Typescript is a superset of Javascript that compiles down to Javascript. Both of these do exactly what compilers do: take one language and convert into a different one!</b>`,
            `Let's have a look at the pros and cons of each: First off, <b>interpreters are quick to get up and running</b>, right? Because if we want to run a Javascript code, with an interpreter we don't have to convert the code into another language, like language acts like I showed you with a compiler. There's no compilation step before you can start running your code, you just give the code to an interpreter and the interpreter starts translating their first line and just runs the code for us. Because of this, an interpreter is a natural fit for something like JavaScript and JavaScript originally was created for the browser, so being able to interpret JavaScript and run it as fast as possible. Well, that was ideal and this is exactly why it JavaScript used interpreters at the beginning, but there's a cons with using an interpreter. And this is the same problem that Google had back in the day when they had Google Maps running a lot of JavaScript, but it will get slower and slower and slower because <b>the problem with interpreters is that when you're running the same code more than once, for example, if you're in a loop where we're running a piece of code over and over and over, even though it gives us the same result, it can get really, really slow. The compiler actually helps us here. It takes a little bit more time to start up because it has to go through that compilation step at the beginning, go through our code, understand it and split it out into a another language. But the compiler will be smart enough that when it sees code like loop over a thing and the loop has the same inputs returning the same outputs, well, it can actually just simplify that code</b>.`,
            `<b>What if instead of using the compiler and interpreter, we combine these two and create something called a JIT compiler or Just In Time compiler? And this is exactly what browsers started doing, browser's started mixing compilers, specifically these JIT compilers for Just In Time compilation to make the engines faster</b>.`,
            `So is JavaScript an interpreted language? I mean, yes, initially when JavaScript first came out, you had JavaScript engines such as Spider Monkey that interpreted JavaScript to bytecode and that engine was able to run inside of our browsers to tell our computers what to do but things have evolved. <i>Now we don't have just interpreters, we also use compilers to optimize the code</i>. So this is a common misconception when somebody says JavaScript is an interpreted language. Yes, there is some truth to it but it actually depends on the implementation, you can make an implementation of JavaScript, of the JavaScript engine that perhaps only compiles.`,
            `We want to write <b>code that helps the compiler make its optimizations</b>, not work against it making the engine slower.`,
            `Why do we just learn all of this? Well, because now we know a critical part in being a JavaScript programmer, <b>we want to write code in a way that helps the compiler make optimizations</b>. We don't want to work against it and make things slow throughout the rest of the course. We're going to learn different ways to write efficient code. But I want to give you some basic things to watch out for when working with JavaScript Engine. Now, keep in mind that most of these things I'm going to show you will seem like things you don't really use or see that much anymore, and that's because most developers don't use them, since they can be bad for optimisations. But it never hurts to know what they are. It doesn't mean that you should never use them, but that the use cases for them are very rare. So here's the list: eval(), arguments, for... in, with, detele`,
          ],
        },
        {
          articleTitle: 'Memoization',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            'Memoization is a way to <b>cache a return value of a function based on its parameters</b>. This makes the function that takes a long time run much faster after one execution. If the parameter changes, it will still have to reevaluate the function.',
            '<img src="../src/img/memoization.jpg">',
          ],
        },
        {
          articleTitle: 'Memory Heap & Call Stack',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `The JavaScript engine does a lot of work for us, but 2 of the biggest jobs are reading and executing it. We need <b>a place to store and write our data</b> and <b>a place to keep track line by line of what's executing</b>. That's where the <b>Call Stack</b> and the <b>Memory Heap</b> come in.`,
            `The Memory Heap is <b>a place to store and write information</b> so that we can use our memory appropriately. It is <b>a place to allocate, use, and remove memory as needed</b>.`,
            `<img src="../src/img/memory_heap.jpg">`,
            `The Call Stack <b>keeps track of where we are in the code, so we can run the program in order</b>. Things are placed into the Call Stack on top and removed as they are finished. It <b>runs in a first in last out mode. Each call stack can point to a location inside the Memory Heap</b>`,
            `<img src="../src/img/call_stack.jpg">`,
            `What is a program? Well, a program has to do some simple things. It has to <b>allocate memory</b>, otherwise we wouldn't be able to have variables or even have a file on our computer. It also has to <b>parse and execute scripts</b>, which means read and run commands.`,
            `The Javascript engine consists of two parts, a <b>Memory Heap</b> and a <b>Call Stack</b>. The <b>Memory Heap<i> is where the memory allocation happens</i> and the Call Stack <i>is where your code is read and executed</i></b>, Call Stack tells you where you are in the program.`,
            `<i>We learned that the JavaScript engine does a lot of work for us, but the biggest thing is actually reading our code and executing it</i>. And what do you think the two most important things in this step are? That is, one, <i>we need a place to store and write information, that is to store our variables, our objects, our data of our apps and a place to actually run and keep track of what's happening line by line on our code</i>.  Well, we use <b>Call Stack</b> and <b>Memory Heap</b> for that.`,
            `<b>We need the Memory Heap as a place to store and write information</b>, <i>because at the end of the day all programs are just read and write operations, that way we have a place to allocate memory, use memory and release memory</i>. And two, <b>with the Call Stack, we need a place to keep track of where we are in the code so that we can run the code in order</b>. And with these two things, the JavaScript engine is able to do that.`,
            `So to review the <b>Memory Heap is where the memory allocation happens</b> and the <b>Call Stack is where the engine keeps track of where your code is in its execution</b>.`,
            `<b>We can think of Call Stack as a region in memory which operates in first-in/last-out mode.</b>`,
            `<i>The Call Stack stores functions and variables as your code executes at each entry state of the stack, also called the stack frame and it runs in a first-in/last-out mode, that is the first one in is the last one getting popped up. And we can keep adding  to the stack and eventually it pops, pops, pops all the function calls until we are done with our commands and we use the Memory Heap to actually point to different variables, objects and data that we store so that we know where to look. And by the way, this is the way it works in most programming languages, we have calls stacks and memory heaps and these are the two locations that JavaScript remembers</i>.`,
            `<i>Now, since every JavaScript engine has different implementations, where variables are allocated is not 100% the same all the time. So a good way to think about it is this</i> <b>simple variables can usually be stored on the stack</b> and <b>data structures like objects, arrays and functions are stored in Memory Heap</b>.`,
          ],
        },
        {
          articleTitle: 'Memory Leaks & Stack Overflow',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `<b>Memory leaks</b> happen when you have <b>unused memory</b>, such as variables that are declared globally but you don't use them, but they's still there. Well, <i>by having unused memory just laying around, it fills up the Memory Heap</i> and that's why you might hear why global variables are bad. Global variables are bad because if we don't forget to clean up after ourselves, we fill up the Memory Heap and eventually the browser will not be able to work.`,
            `So what happens if you keep calling functions that are nested inside each other? When this happens it’s called a <b>stack overflow</b>. Example below:`,
            `<img src="../src/img/recursion.jpg">`,
            `<i>What stack overflow means? Well, stack overflow is this when a stack is overflowing, kind of like we talked about Memory Leaks and how the Memory Heap of a JavaScript engine can overflow. Well, with stack overflow, this happens when the Call Stack just gets bigger and bigger and bigger until it just doesn't have enough space anymore</i>.`,
            `<i>What happens if we keep calling functions nested inside of each other over and over and over so that we keep growing the Call Stack until it gets larger and larger and larger and larger and larger, until we can do it anymore? Well, that's called</i><b>stack overflow</b>.`,
            `<b>Recursion is a <i>function calling itself</i></b>, there are some cases where things like recursion is quite useful, but that's something beyond the scope of this course and it's something I teach in my other courses for data structures and algorithms. But <b>recursion is one of the most common ways to create a stack overflow</b> or a lot of functions nested inside of each other to create that stack that keeps growing and growing and growing. In this case, if I run inception function, it's going to keep adding things onto the stack more and more and more. So what do you think happens if I run the inception function? I get an error like <b>Uncaught RangeError: Maximum call stack size exceeded</b>. Now back in the day with Chrome, it wouldn't give you this error and the browser will eventually just crash, but in order to prevent the browser from crashing, if it reaches a limit, it's going to print out this error saying, hey, you've just created a stack overflow.`,
            `Let's create our own memory leak: const array = []; for (let i = 5; i > 1, i++) { array.push(i-1) }`,
            `Now, when I run this code above, what's going to happen is we're going to run an infinite loop and we fill up our memory and there's nothing left for us to use and well, we're going to crash the browser. Now, this was a silly example, and most likely you're not going to do in your programs, but there are <b>3 common memory leaks</b> that happened that I want to show you so you can avoid them in your application.`,
            `<b>The first one is global variables</b>. <i>If I just keep adding variables to my environment, well, we're adding more and more pieces of memory</i>.`,
            `<b>The second one is event listeners</b>. Now, <i>the event listeners is one of the most common ways to leak memory and that is you add an event listeners and you never remove them when you don't need them</i>, so that you keep adding, keep adding, keep adding event listeners and because they're just there in the background, you forget about them and next thing you know, you create a memory leak. This happens a lot, especially if you go back and forth between single page applications where you're not removing the event listeners off the page and as a user goes back and forth, back and forth, the memory keeps increasing more and more as more event listeners are added.`,
            `<b>The thirth one is setInterval()</b>. <i>This setInterval(), unless we clear it and stop it, is going to keep running and running and running</i>.`,
            `<i>Just something to be aware of that <b>memory is limited</b>. That is when it comes to Call Stack and Memory Heap. Those are two places that JavaScript remembers or stores memory and we have limited use of them</i>. So for us to write efficient code, we have to be conscious to not have stack overflow or a memory leak and to manage that memory well.`,
          ],
        },
        {
          articleTitle: 'Garbage Collection',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `JavaScript is a garbage collected language. If you allocate memory inside of a function, JavaScript will automatically remove it from the memory heap when the function is done being called.`,
            `JavaScript completes garbage collection with a <b>mark</b> and <b>sweep</b> method.`,
            `<img src="../src/img/garbage_collection.jpg">`,
            `In the example above a <b>memory leak</b> is created. <b>By changing the variable person from an object to a string, it leaves the values of first and last in the memory heap and does not remove it</b>. This can be avoided by trying to keep variables out of the global namespace, only instantiate variables inside of functions when possible. JavaScript is <b>a single threaded language</b>, meaning only one thing can be executed at a time. It only has one call stack and therefore it is a <b>synchronous</b> language.`,
          ],
        },
        {
          articleTitle: 'Single Threaded Model',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `Each browser has its own version of <b>JavaScript Runtime</b> with a set of <b>Web API's</b>, methods that developers can access from the <b>window object</b>. <b>In a synchronous language, only one thing can be done at a time</b>. Imagine an alert on the page, blocking the user from accessing any part of the page until the OK button is clicked. If everything in JavaScript that took a significant amount of time, blocked the browser, then we would have a pretty bad user experience. This is where <b>concurrency</b> and the <b>event loop</b> come in.`,
          ],
        },
      ],
    },
    {
      sectionTitle: 'Javascript Runtime',
      sectionLinks: [
        {
          linkTitle: 'Understanding the JavaScript runtime environment',
          linkSource:
            'https://medium.com/@gemma.stiles/understanding-the-javascript-runtime-environment-4dd8f52f6fca',
        },
      ],
      sectionExplanations: [
        `Javascript is a <b>single threaded language</b>. This means it has one Call Stack and one Memory Heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next.`,
        `<b>The heart of any JavaScript Runtime is always a JavaScript Engine. Without an engine there is no runtime and there is no JavaScript at all</b>.`,
        `However, <i><b>the engine alone is not enough</i>. In order to work properly, we also need access to the <i>web APIs</i> (ex. DOM, Timers, Fetch API etc)</b>.`,
        `So essentially <b>web APIs are functionalities provided to the engine, but which are actually not part of the JavaScript language itself</b>. <i>JavaScript simply gets access to these APIs through the global window object</i>.`,
        `A typical JavaScript runtime also includes a so called <b>callback queue. This is a data structure that contains all the callback functions that are ready to be executed</b>. For example we attach event handler functions to DOM elements like a button to react to certain events, and these event handler functions are also called callback functions. So as the event happens, for example a click, the callback function will be called. And here is how that actually works behind the scenes: so the first thing that actually happens after the event is that the callback function is put into the callback queue. Then when the stack is empty the callback function is passed to the call stack so that it can be executed (this happens by something called the <b>event loop</b>). <i><b>So basically the event loop takes callback functions from the callback queue and puts them in the call stack so that they can be executed. The event loop only runs once the call stack is empty and the entire Javascript file has been run once</b></i>.`,
        `JavaScript is a single threaded language that can be non blocking. It has one Call Stack and it does one thing at a time. In order to not block the single thread, it can be <i><b>asynchronous with callback functions</b> and these callback functions gets run in the background through the Callback queue and then the Event Loop bring it back into the Call Stack</i>.`,
      ],
      sectionArticles: [
        {
          articleTitle: 'Web APIs',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Global Object (window object)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Event Loop & Callback Queue',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `When you run some JavaScript code in a browser, <b>the engine starts to parse the code. Each line is executed and popped on and off the call stack</b>. But, what about Web API's? Web API's are not something JavaScript recognizes, so the parser knows to pass it off to the browser for it to handle. When the browser has finished running its method, it puts what is needed to be ran by JavaScript into the <b>callback queue</b>. <b>The callback queue cannot be ran until the call stack is completely empty</b>. So, the <b>event loop</b> is constantly checking the call stack to see if it is empty so that it can add anything in the callback queue back into the call stack. And finally, once it is back in the call stack, it is ran and then popped off the stack.`,
            `<img src="../src/img/event_loop.jpg">`,
            `In the last example above, we get the same output. How does this work if it waits 0 seconds? The JavaScript engine will still send off the setTimeout() to the Web API to be ran and it will then go into the callback queue and wait until the call stack is empty to be ran. So, we end up with the exact same end point.`,
            `<b>Nifty Snippet</b>: Until 2009, JavaScript was only run inside of the browser. That is when Ryan Dahl decided it would be great if we could use JavaScript to build things outside the browser. He used C and C++ to build an executable (exe) program called Node JS. Node JS is a JavaScript runtime environment built on Chrome's V8 engine that uses C++ to provide the event loop and callback queue needed to run asynchronous operations.`,
            `<img src="../src/img/event_loop_nodejs.jpg">`,
          ],
        },
        {
          articleTitle: 'Job Queue or Microtask Queue',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `The <b>job queue</b> or <b>microtask queue</b> came about with promises in ES6. With promises we needed <b>another callback queue that would give higher priority to promise calls</b>. The JavaScript engine is going to <b>check the job queue before the callback queue</b>.`,
            `<img src="../src/img/job_queue.jpg">`,
          ],
        },
      ],
    },
    {
      sectionTitle: 'Execution Context and the Call Stack',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `Code in JavaScript is always ran inside a type of <b>execution context</b>. Execution context is simply the environment within which your code is ran. There are <i>2 types of execution context in JavaScript</i>, <b>global</b> or <b>function</b>. There are <i>2 stages as well to each context</i>, <b>the creation</b> and <b>executing phase</b>. As the <i>JavaScript engine starts to read your code, it creates something called the</i><b>Global Execution Context</b>.`,
        `How do we run code in JavaScript? Well, we assign variables and then we run functions, right? That's all we really do in a language.`,
        `<i>Initially, our JavaScript engine is going to create a</i><b>global execution context</b>, we don't see this, it's underneath the hood, but it's saying 'Hey, here's the JavaScript file for you, just start reading it for me', <i>and on top of global execution context, that's when we start adding functions calls and then eventually, as these execution context (execution context for the functions calls) get popped off, the last thing that remains is the global execution context. And when the final line of our code runs and we're done with the JavaScript engine, global execution context is going to get popped off the stack</i>.`,
        `So just from what we've learned, if I tell you whenever code is run in JavaScript, it is run inside of an execution context, is that a true statement or a false statement? Well, it's true because <b><i>any time we run code in JavaScript, it's always going to be part of an execution context</i>. That is, it's part of global or inside of some function that we call it</b>.`,
        `<b>Global execution context is the very first item on the stack, the first thing the JavaScript engine does is to create the global execution context</b> and it gives you two things: first thing is a <b>global object</b> and the other thing is that <b>'this' keyword</b> in JavaScript.`,
        `<i>But to start things off, global execution context gives us these two things right off the JavaScript engine starts up. So let's test this assumption. If what I just told you is correct, that means I can just give an empty file to the browser and I should have a global object and the 'this' keyword already defined without me having to do anything</i>.`,
        `<i>So I get these two things that 'this' keyword and 'window' without even writing a piece of JavaScript, because the browser has created a global execution context for me. And <b>you might be asking yourself, are these the same thing, ' window === this '? Well, that's true, that's the very first step that the JavaScript engine does for us, the JavaScript engine is going to create these two objects</b></i>.`,
        `<b><i>To the global object (in our case 'window' object), we can assign variables, we can add functions</i> and we can add different things to this global object</b>. And by the way, if we're using something like Node.js, the global object wouldn't be 'window', instead, it will be called 'global'.`,
        'So once we have done what we call a creation phase in our JavaScript engine, we then have <b>a second phase and that second phase is called the <i>execution phase, where you actually run your code</i></b>.',
        `<i>Now, we're going to expand on this a little bit, but to review <b>when code is run on the JavaScript engine a global execution context is created, and when you run a function, a new execution context is added, a function execution context</b>, and we start running our code until everything gets popped up the stack and all of our code is run</i>.`,
        `Keep in mind, <b>each execution context has its own variable environment</b>.`,
      ],
      sectionArticles: [
        {
          articleTitle: 'Global execution context',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `Creation Phase <br>1. Global Object created (in the browser the global object is <b>'window'</b>)<br>2. Initializes <b>this</b> keyword to global`,
            `Executing Phase <br>3. <b>Variable Environment</b> created - memory space for var variables and functions created <br>4. <b>Initializes all variables</b> to <i>undefined</i> (also known as <b>hoisting</b>) and places them with any functions into memory`,
            `<img src="../src/img/execution_phase.jpg">`,
          ],
        },
        {
          articleTitle: 'Function execution Context',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `A function context is created by the JavaScript engine <b>when it sees a function call</b>. Each <b>function gets its own execution context</b>.`,
            `Creation Phase <br>1. <b>Argument object</b> created with any arguments (on each execution context we create a new arguments object)<br>2. Sets <b>this</b> to the global object unless in strict mode, where it's undefined`,
            `Executing Phase <br>3. <b>Variable Environment</b> created - <i>memory space for variable and functions created</i> <br>4. <b>Initializes all variables</b> to <i>undefined</i> and places them into memory with any new functions`,
            `<img src="../src/img/execution_context_function1.jpg">`,
            `<img src="../src/img/execution_context_function2.jpg">`,
            `The keyword arguments can be dangerous to use in your code as is. In ES6, a few methods were introduced that can help better use arguments.`,
            `We don't really get arguments in the global object, do we? If I run arguments in the console, I'll get an error 'Argument is not defined' because, well, <b>arguments is only available to us when we create a new execution context with a function</b>.`,
            'All right, so we got the arguments object but you might remember something from our previous videos? <b>Remember when we talked about how to help the JavaScript engine optimize our code, and I told you not to use arguments?</b>',
            `<i>Now, I said that 'argument' is a little bit dangerous to use. Why is that? Well, because <b>'arguments' looks like an array, but it's not really an array</b>, so there are many things that you can do with the arguments keyword that might make the compiler or the JavaScript engine less able to optimize your code because <b>you can't really use array methods on arguments</b>. And with the new JavaScript, they introduced a few little tools that we can use so that we avoid using arguments because there are some cases where we might want to iterate or loop through arguments instead of just accessing them regularly</i>.`,
            `<i>One way to go about it is to say ' console.log(Array.from(arguments)) ' and Array.from() method will create an array from whatever we give it</i>.`,
            `<i>Another way is to use the spread operator</i>.`,
            `<b>So with modern JavaScript, you most likely want to avoid arguments, it's one of those tricky things that was initially added to JavaScript that caused a lot of problems and headache</b>. <i>But using the techniques that I've shown you, we can actually convert arguments into an array like object so that when you do those operations, it'll be helpful for you</i>.`,
          ],
        },
      ],
    },
    {
      sectionTitle: 'Hoisting',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `Hoisting is the <b>process of putting all <i>variable</i> and <i>function declarations</i> into memory during the compile phase</b>. In JavaScript, <i>functions are fully hoisted</i>, <i>var variables are hoisted and initialized to undefined</i>, and <i>let and const variables are hoisted but not initialized a value</i>. Var variables are given a memory allocation and initialized a value of undefined until they are set to a value in line. So if a var variable is used in the code before it is initialized, then it will return undefined. However, a function can be called from anywhere in the code base because it is fully hoisted. If let and const are used before they are declared, then they will throw a reference error because they have not yet been initialized.`,
        `<img src="../src/img/hoisting1.jpg">`,
        `<img src="../src/img/hoisting2.jpg">`,
        `<img src="../src/img/hoisting3.jpg">`,
        `<i>In the creation phase, we have one more step, we have something called hoisting</i>.`,
        `Hoisting is the behavior of <b>moving the <i>variables</i> or <i>function declarations</i> to the top of their respective environments during compilation phase</b>.`,
        `<b><i>Variables are partially hoisted</i></b> and <b><i>function declarations are hoisted</i></b>. <i>When I said variables are partially hoisted, we hoist the variable but not the right side, not the actual value, we just assign it to 'undefined'. Functions are fully hoisted, that means the function declaration, during the creation phase, are assigned a location and memory and you can think of it this way: where any time we call that function we know where the piece of code inside that function is in memory, so that if we call that function, we can run it and it's working</i>.`,
        `<b>Hoisting is the JavaScript engine <i>allocating memory for the variables and functions that it sees in your code during the creation phase before it executes it</i>. In the creation phase, the JavaScript engine parse our code and if sees var or function keywords, it's going to hoist them and make space for them in memory</b>.`,
        `<b>Takeaways</b>: Avoid hoisting when possible. It can cause memory leaks and hard to catch bugs in your code. Use let and const as your go to variables.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Lexical Environment',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `A lexical environment is basically the scope or environment the engine is currently reading code in. <b>A new lexical environment is created when curly brackets {} are used</b>, even nested brackets {{...}} create a new lexical environment. The execution context tells the engine which lexical environment it is currently working in and the lexical scope determines the available variables.`,
        `<img src="../src/img/lexical_environment.jpg">`,
        `<i>Lexical environment is simply <b>where you write something</b>, because we now know how our JavaScript engine works. That is, it looks through our code and read through our code and <b>where we write something is important</b></i>. A lexical environment simply means that.`,
        `What is the first lexical environment that we have? Well, <b>the very first lexical environment is the global lexical environment, where we write our code</b>.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Scope Chain',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `<img src="../src/img/scope_chain1.jpg">`,
        `Each environment context that is created has a link outside of its lexical environment called the scope chain. <b>The scope chain gives us access to variables in the parent environment</b>`,
        `<img src="../src/img/scope_chain2.jpg">`,
        `In this example, all the functions have access to the global variable x, but trying to access a variable from another function would return an error. The example below will show how the scope chain links each function.`,
        `<img src="../src/img/scope_chain3.jpg">`,
        `In this example, you can see that the functions only <i>get access to the variables in their parent container, not a child</i>. <b>The scope chain only links down the call stack, so you almost have to think of it in reverse. It goes up to the parent, but down the call stack</b>.`,
        `<img src="../src/img/scope_chain4.jpg">`,
        `We learned that the <b>global scope is the outermost scope</b>, so <b>variables declared outside a function are in what we call global scope</b> and they can be access in any other scope that is inside of the functions, we can always access global scope.`,
        `Now, <b>local scope, that is any scope that is local to a function</b>, now <b>variables declared in this local scope are accessible within this scope as well as any scopes surrounding it</b>.`,
        `<i>And that's scope is, it just <b>defines the accessibility of variables and functions in the code</b>, it tells us what we can access, what we can not</i>.`,
        `<i>By the way, remember how I told you that eval() and the 'with' statement are not a good idea, it doesn't help our JavaScript engine optimize our code? Well, it's because of the issues that it has with scope, because with eval() and 'with' you can actually change how scope and scope chain work internally in JavaScript</i>.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Leakage of Global Variables',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `<img src="../src/img/leakage_of_global_variables.jpg">`,
        `<i>Is 'height' being created in the variable environment of 'weird'? Well, no, and that's because JavaScript is a little bit weird here. This is actually called</i> <b>leakage of global variables</b>, <i>because what JavaScript does underneath the hood is that it looks at 'height', it says 'This isn't in my nothing's been declared. I haven't seen a var or a const or a let keyword, so I don't have it'. Those keywords (var, let, const) tell JavaScript to put those in our variable environment, but it's not there. So it's going to go up the scope chain to the global environment and says 'Hey, is there such a thing as a height?'. And the global environment is going to say 'No, I don't have it', but it's not throwing in the air, is it? And that's because the global environment actually sees that this doesn't exist and will create it for you</i>.`,
        `This is something that in the past with JavaScript you could do and it caused a lot of problems, so now we have something like <b>'use strict'</b>. That if I add 'use strict' to the top of a page,  'use strict' was introduced as a way to prevent JavaScript for doing these weird, unpredictable edge cases because JavaScript was written by a programmer and there's no such thing as a perfect programming language or a perfect program, and 'use strict' allows us to avoid these pitfalls that shouldn't happen.`,
        `As soon as I used 'use strict', it's going to throw an error that says 'Height is not defined' because it's going to go up the scope chain and it's going to say 'No, you've never really declared this variable. I have no idea what you're talking about'.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Function Scope vs Block Scope',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `Most programming languages are block scoped, meaning every time you see a new { } (curly braces) is a new lexical environment. However, <b>JavaScript is function scoped</b>, <i>meaning it only creates a new local environment if it sees the keyword function on the global scope</i>. <b>To give us access to block scope, in ES6 let and const were added to the language</b>. <i>Using these can prevent memory leaks</i>, but there is still an argument to be made for using var.`,
        `<img src="../src/img/scope_function_vs_block.jpg">`,
        `Oh, I get a reference here, 'i' is not defined and why is that? Well, because we use 'let' and not 'var' keyword and we're trying to use 'i' outside of its environment, with 'let' keyword 'i' is block scoped, so the environment that it's in while it's inside of the curly brackets {}, so we can't really access it outside of those brackets, so this isn't going to work.`,
        `Now, this may have unintended consequences. Maybe you do want to print this properly. So there are cases where the 'var' keyword is still useful, but it's nice to know that we now have a way to have block scoping whenever we need it.`,
        `<i>So to review, <b>block scoping means declaring a variable not just inside a function, but around any curly brackets {}</b>, like if statements or loops. Now, the variable itself 'let i' is actually still in memory, but the engine just won't allow you to access it before, like it was when we used 'var' keyword</i>.`,
        `Remember, <b>scope means what variables we have access to</b> and JavaScript has function scope, right? <b><i>Every time we create a function, we create a new execution context which has its own variable environment</i></b>. But you see, most other programming languages have something called block scope, so what's the difference?`,
        `<img src="../src/img/scope_function_vs_block1.jpg">`,
        `<i>Because JavaScript uses function scope, I can actually access the 'secret' variable outside the block, because <b>var keyword in only functionally scoped, not block scope</b>, and that means we only create a new scope, a new environment when var is write in a function, not in a block</i>.`,
        `<i>Now, in most other programming languages, they use block scope and block scope is, well, any time I see a block of code that is in curly brackets {}, I'm going to create a new world, a new environment. In other programming languages, if I want to acces 'secret' outside of the block, I wouldn't be able to access it like I can with JavaScript and JavaScript saw this behavior with the block scope and said 'Hmm, I want to be able to do block scoping too. How can I do that?'. Well, <b>with ES6 they introduced the 'let' and the 'const' keywords and they allow us to use block scoping</b></i>.`,
        `<b>let</b> & <b>const</b>: <b><i>Variable declarations with let and const work differently from the var variable declaration</i></b> and I wanted to take a minute to explain. When a lexical scope is entered and the execution context is created, the engine allocates memory for any var variable in that scope and initializes it to undefined. The let and const variables only get initialized on the line they are executed on and only get allocated undefined if there is no assignment to the variable. Trying to access a let or const variable before it is declared or outside of its block without returning it will result in a Reference Error.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Global Variables & Variable Collisions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Activating Strict Mode',
      sectionLinks: [
        {
          linkTitle: 'Strict mode',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Efficient Script Loading: defer & async',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const variablesValues = {
  title: 'Variables, Values and Primitive/Reference Types',
  sections: [
    {
      sectionTitle: 'Statements vs Expressions',
      sectionLinks: [
        {
          linkTitle: 'JavaScript Expressions and Statements',
          linkSource: `https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Static vs Dynamically Typed',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        "JavaScript has dynamic typing: we don't have to manually define the data type of the value stored in a variable (value has type, NOT variable!). Instead, data types are determined automatically.",
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Strongly vs Weakly Typed',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Variables & Values',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'var, let & const',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Primitive Types',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Numbers',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Strings & Template Literals',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Booleans',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Null',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Undefined',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Reference Types',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Arrays',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Objects',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Functions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Primitives vs. Objects (Primitive vs. Reference Types)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Pass by Value vs Pass by Reference',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const operators = {
  title: 'Operators',
  sections: [
    {
      sectionTitle: 'Type Conversion and Coercion',
      sectionLinks: [
        {
          linkTitle: 'Type coercion explained',
          linkSource: `https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Operator precedence',
      sectionLinks: [
        {
          linkTitle: 'Operator precedence',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Expressions and operators',
      sectionLinks: [
        {
          linkTitle: 'Expressions and operators',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Assignment operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Assignment operator (=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Addition assignment (+=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Subtraction assignment (-=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Increment and decrement',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Postfix increment operator (A++)',
          articleLinks: [
            {
              linkTitle: 'The increment operator (++)',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Postfix decrement operator (A--)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Prefix increment operator (++A)',
          articleLinks: [
            {
              linkTitle: 'The increment operator (++)',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Prefix decrement operator(--A)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Unary operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'typeof',
          articleLinks: [
            {
              linkTitle: 'The typeof operator',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'plus operator (+)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'negation operator (-)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Arithmetic operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Addition operator (+)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Subtraction operator (-)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Division operator (/)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Multiplication operator (*)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Remainder operator (%)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Binary logical operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Logical AND (&&)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Logical OR (||)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Short Circuiting with && and ||',
          articleLinks: [
            {
              linkTitle:
                'A Simpler Understanding of the Short-circuit Operators in JavaScript',
              linkSource: `https://medium.com/@ezekielphlat/a-simpler-understanding-of-the-short-circuit-operators-in-javascript-d275a313cef1`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Nullish coalescing operator (??)',
          articleLinks: [
            {
              linkTitle: 'Nullish coalescing operator (??)',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Equality operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Equality operator (==)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Inequality operator (!=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Identity operator (===)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Nonidentity operator (!==)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Relational operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'instanceof',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Less than operator (<)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Greater than operator (>)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Less than or equal operator (<=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Greater than or equal operator (>=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Optional chaining (?.)',
      sectionLinks: [
        {
          linkTitle: 'Optional chaining (?.)',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Remainder (%)',
      sectionLinks: [
        {
          linkTitle: 'Remainder (%)',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Conditional (ternary) operator',
      sectionLinks: [
        {
          linkTitle: 'Conditional (ternary) operator',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const controlingProgamLogicAndFlow = {
  title: 'Controlling Program Logic and Flow',
  sections: [
    {
      sectionTitle: 'Taking Decisions in JavaSript',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Boolean Logic',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'If Statements',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Else If',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Else',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Nesting Conditionals',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Truthy & Falsy Values',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Logical operators (&&, ||, !)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Comparison Operators (== vs ===)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'The Switch Statement',
      sectionLinks: [
        {
          linkTitle: 'Switch',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch`,
        },
        {
          linkTitle: 'Switch Statement',
          linkSource: `https://www.w3schools.com/js/js_switch.asp`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'The Conditional (Ternary) Operator',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const loops = {
  title: 'Loops',
  sections: [
    {
      sectionTitle: 'Intro to Loops',
      sectionLinks: [
        {
          linkTitle: 'Loops and iteration',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'For Loop',
      sectionLinks: [
        {
          linkTitle: 'For Loop',
          linkSource: `https://www.w3schools.com/js/js_loop_for.asp`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Infinite Loops!',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'For Loop & Arrays',
      sectionLinks: [
        {
          linkTitle: `forEach vs for Loops in JavaScript: What's the Difference?`,
          linkSource: `https://alligator.io/js/foreach-vs-for-loops/`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Nested For Loops',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Intro to While Loop',
      sectionLinks: [
        {
          linkTitle: 'While loop',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Break and Continue Keywords',
      sectionLinks: [
        {
          linkTitle: 'Break and Continue Keywords',
          linkSource: `https://www.w3schools.com/js/js_break.asp`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'For...Of',
      sectionLinks: [
        {
          linkTitle: 'for...of statement',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Comparing For and For...Of',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'For...Of with Objects',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'For...In',
      sectionLinks: [
        {
          linkTitle: 'for...in statement',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle:
        'Looping Objects: Object.keys(), Object.values() and Object.entries()',
      sectionLinks: [
        {
          linkTitle: 'Object.keys() method',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys`,
        },
        {
          linkTitle: 'Object.values() method',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values`,
        },
        {
          linkTitle: 'Object.entries() method',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const dataStructuresArrays = {
  title: 'Data structures: Arrays',
  sections: [
    {
      sectionTitle: 'Intro to Arrays and Reference Types',
      sectionLinks: [
        {
          linkTitle: 'Array object',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Creating Arrays',
      sectionLinks: [
        {
          linkTitle: 'Array() constructor',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Using Const with Arrays',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Array Indices',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Modifying Arrays',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Working with Nested Arrays',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Spread in Array Literals',
      sectionLinks: [
        {
          linkTitle: 'Spread syntax (...)',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax`,
        },
        {
          linkTitle: 'How to Use the Spread Operator (…) in JavaScript',
          linkSource: `https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Rest Pattern in Arrays',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Destructuring Arrays',
      sectionLinks: [
        {
          linkTitle: 'ES6 Destructuring: The Complete Guide',
          linkSource: `https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f`,
        },
        {
          linkTitle: 'Destructuring assignment',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Nested destructuring & skipping items',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Switching variables with destructuring',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Destructuring & Default Values',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Variables assignment with destructuring',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Array Methods (mutate original array)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'push() --- add to original (end)',
          articleLinks: [
            {
              linkTitle: 'Array push()',
              linkSource: `https://www.w3schools.com/jsref/jsref_push.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'unshift() --- add to original (start)',
          articleLinks: [
            {
              linkTitle: 'Array unshift()',
              linkSource: `https://www.w3schools.com/jsref/jsref_unshift.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'pop() --- remove from original(end)',
          articleLinks: [
            {
              linkTitle: 'Array pop()',
              linkSource: `https://www.w3schools.com/jsref/jsref_pop.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'shift() --- remove from original(start)',
          articleLinks: [
            {
              linkTitle: 'Array shift()',
              linkSource: `https://www.w3schools.com/jsref/jsref_shift.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'splice() --- remove from original(any)',
          articleLinks: [
            {
              linkTitle: 'Array splice()',
              linkSource: `https://www.w3schools.com/jsref/jsref_splice.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'reverse() --- others',
          articleLinks: [
            {
              linkTitle: 'Array reverse()',
              linkSource: `https://www.w3schools.com/jsref/jsref_reverse.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'sort() --- others',
          articleLinks: [
            {
              linkTitle: 'Array sort()',
              linkSource: `https://www.w3schools.com/jsref/jsref_sort.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'fill() --- others',
          articleLinks: [
            {
              linkTitle: 'Array fill()',
              linkSource: `https://www.w3schools.com/jsref/jsref_fill.asp`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Array Methods (a new array)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'map() --- computed from original',
          articleLinks: [
            {
              linkTitle: 'Array map()',
              linkSource: `https://www.w3schools.com/jsref/jsref_map.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'filter() --- filtered using condition',
          articleLinks: [
            {
              linkTitle: 'Array filter()',
              linkSource: `https://www.w3schools.com/jsref/jsref_filter.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'slice() --- copy portion/entire of original',
          articleLinks: [
            {
              linkTitle: 'Array slice()',
              linkSource: `https://www.w3schools.com/jsref/jsref_slice_array.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'concat() --- adding original to other',
          articleLinks: [
            {
              linkTitle: 'Array concat()',
              linkSource: `https://www.w3schools.com/jsref/jsref_concat_array.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'flat() & flatMap() --- flattening the original',
          articleLinks: [
            {
              linkTitle: 'Array.prototype.flat()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat`,
            },
            {
              linkTitle: 'Array.prototype.flatMap()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Array Methods (an array index)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'indexOf() --- based on value',
          articleLinks: [
            {
              linkTitle: 'Array indexOf()',
              linkSource: `https://www.w3schools.com/jsref/jsref_indexof_array.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'findIndex() --- based on test condition',
          articleLinks: [
            {
              linkTitle: 'Array findIndex()',
              linkSource: `https://www.w3schools.com/jsref/jsref_findindex.asp`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Array Methods (an array element)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'find() --- based on test condition',
          articleLinks: [
            {
              linkTitle: 'Array find()',
              linkSource: `https://www.w3schools.com/jsref/jsref_find.asp`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Array Methods (know if array includes)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'includes() --- based on value',
          articleLinks: [
            {
              linkTitle: 'Array includes()',
              linkSource: `https://www.w3schools.com/jsref/jsref_includes_array.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'some() --- based on test condition',
          articleLinks: [
            {
              linkTitle: 'Array some()',
              linkSource: `https://www.w3schools.com/jsref/jsref_some.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'every() --- based on test condition',
          articleLinks: [
            {
              linkTitle: 'Array every()',
              linkSource: `https://www.w3schools.com/jsref/jsref_every.asp`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Array Methods (a new string)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'join() --- based on separator string',
          articleLinks: [
            {
              linkTitle: 'Array join()',
              linkSource: `https://www.w3schools.com/jsref/jsref_join.asp`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Array Methods (to transform to value)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'reduce() --- based on accumulator',
          articleLinks: [
            {
              linkTitle: 'Array reduce()',
              linkSource: `https://www.w3schools.com/jsref/jsref_reduce.asp`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Array Methods (to just loop array)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle:
            'forEach() --- based on callback ((Does not create a new array, just loops over it)',
          articleLinks: [
            {
              linkTitle: 'Array forEach()',
              linkSource: `https://www.w3schools.com/jsref/jsref_foreach.asp`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Array Methods (others array methods)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Array.isArray()',
          articleLinks: [
            {
              linkTitle: 'Array.isArray() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Array.from()',
          articleLinks: [
            {
              linkTitle: 'Array.from() static method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Array.entries()',
          articleLinks: [
            {
              linkTitle: 'Array.prototype.entries()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'The Magic of Chaining Methods',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const dataStructuresObjects = {
  title: 'Data structures: Objects',
  sections: [
    {
      sectionTitle: 'Introducing JavaScript objects',
      sectionLinks: [
        {
          linkTitle: 'Introducing JavaScript objects',
          linkSource: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Dot vs. Bracket Notation',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Enhanced Object Literals',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Properties Shorthand Syntax',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Method Shorthand Syntax',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Computed Properties',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Spread in Object Literals',
      sectionLinks: [
        {
          linkTitle: 'Spread syntax (...)',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax`,
        },
        {
          linkTitle: 'How to Use the Spread Operator (…) in JavaScript',
          linkSource: `https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Rest Pattern in Objects',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Destructuring Objects',
      sectionLinks: [
        {
          linkTitle: 'ES6 Destructuring: The Complete Guide',
          linkSource: `https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f`,
        },
        {
          linkTitle: 'Destructuring assignment',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment`,
        },
        {
          linkTitle: 'How to Use Object Destructuring in JavaScript',
          linkSource: `https://dmitripavlutin.com/javascript-object-destructuring/`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Nested Destructuring',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle:
            'Destructuring & Default Values & Using Different Variable Names',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Destructuring Assignment',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Variables assignment with destructuring',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle:
            'Unpacking properties from objects passed as a function parameter',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Adding Methods to Objects',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Using THIS keyword in methods',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'THIS: Invocation Context',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Object methods',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Object.fromEntries() vs Object.entries()',
          articleLinks: [
            {
              linkTitle: 'Object.fromEntries() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries`,
            },
            {
              linkTitle: 'Object.entries() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Object.assign()',
          articleLinks: [
            {
              linkTitle: 'Object.assign() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Object.freeze()',
          articleLinks: [
            {
              linkTitle: 'Object.freeze() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Object.create()',
          articleLinks: [
            {
              linkTitle: 'Object.create() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const dataStructuresSets = {
  title: 'Data structures: Sets',
  sections: [
    {
      sectionTitle: 'Intro to Sets',
      sectionLinks: [
        {
          linkTitle: 'Set object',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const dataStructuresMaps = {
  title: 'Data structures: Maps',
  sections: [
    {
      sectionTitle: 'Intro to Maps',
      sectionLinks: [
        {
          linkTitle: 'Map object',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const oop = {
  title: 'Object Oriented Programming (OOP)',
  sections: [
    {
      sectionTitle: 'Introduction to OOP',
      sectionLinks: [
        {
          linkTitle: 'Classes in JavaScript',
          linkSource: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Java',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: '4 Principles of OOP',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Abstraction',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Encapsulation',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Inheritance',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Polymorphism',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Factory Functions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Constructor Functions',
      sectionLinks: [
        {
          linkTitle: 'Object Constructors',
          linkSource: `https://www.w3schools.com/js/js_object_constructors.asp`,
        },
        {
          linkTitle: 'Function() constructor',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'this keyword',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'new keyword',
          articleLinks: [
            {
              linkTitle: 'The new operator',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Prototype',
          articleLinks: [
            {
              linkTitle: 'Object prototypes',
              linkSource: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Prototypal Inheritance and The Prototype Chain',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Object.create()',
      sectionLinks: [
        {
          linkTitle: 'Object.create() method',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'ES6 Classes - Syntactical Sugar',
      sectionLinks: [
        {
          linkTitle: 'Classes',
          linkSource: `https://www.w3schools.com/js/js_classes.asp`,
        },
        {
          linkTitle: 'Classes',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Setters and Getters',
          articleLinks: [
            {
              linkTitle: 'Object Accessors',
              linkSource: `https://www.w3schools.com/js/js_object_accessors.asp`,
            },
            {
              linkTitle: 'The get syntax',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get`,
            },
            {
              linkTitle: 'The set syntax',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Static Methods',
          articleLinks: [
            {
              linkTitle: 'The static keyword',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Extends, Super and Subclasses',
          articleLinks: [
            {
              linkTitle: 'JavaScript Class extends',
              linkSource: `https://www.w3schools.com/jsref/jsref_class_extends.asp`,
            },
            {
              linkTitle: 'The extends keyword',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends`,
            },
            {
              linkTitle: 'The super keyword',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super`,
            },
            {
              linkTitle: 'JavaScript Class super',
              linkSource: `https://www.w3schools.com/jsref/jsref_class_super.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Encapsulation: Protected Properties and Methods',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Encapsulation: Private Class Fields and Methods',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Inheritance Between "Classes":',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Constructor Functions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Object.create()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'ES6 Classes',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Standard build-in objects',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Prototypal Inheritance on Built-In Objects',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const standardBuildInObjects = {
  title: 'Standard Build-In Objects',
  sections: [
    {
      sectionTitle: 'Introduction to Standard Build-in Objects',
      sectionLinks: [
        {
          linkTitle: 'Standard built-in objects',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Regular expressions',
      sectionLinks: [
        {
          linkTitle: 'Regular expressions',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'String',
      sectionLinks: [
        {
          linkTitle: 'String object',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'indexOf()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.indexOf()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'lastIndexOf()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.lastIndexOf()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'slice()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.slice()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'toLowerCase()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.toLowerCase()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'toUpperCase()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.toUpperCase()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'trim()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.trim()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'replace()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.replace()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'replaceAll()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.replaceAll()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'includes()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.includes()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'startsWith()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.startsWith()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'endsWith()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.endsWith()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'split()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.split()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'padStart()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.padStart()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'padEnd()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.padEnd()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'repeat()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.repeat()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Number',
      sectionLinks: [
        {
          linkTitle: 'Number constructor',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Number() & Addition operator (+)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Number.parseInt()',
          articleLinks: [
            {
              linkTitle: 'Number.parseInt() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Number.parseFloat()',
          articleLinks: [
            {
              linkTitle: 'Number.parseFloat() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Number.isNaN()',
          articleLinks: [
            {
              linkTitle: 'Number.isNaN() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Number.isFinite()',
          articleLinks: [
            {
              linkTitle: 'Number.isFinite() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Number.isInteger()',
          articleLinks: [
            {
              linkTitle: 'Number.isInteger() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'toFixed()',
          articleLinks: [
            {
              linkTitle: 'toFixed() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Math',
      sectionLinks: [
        {
          linkTitle: 'Math build-in object',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'max()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.max()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'min()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.min()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'round()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.round()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'ceil()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.ceil()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'floor()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.floor()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'trunc()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.trunc()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'random()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.random()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'abs()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.abs()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'BigInt',
      sectionLinks: [
        {
          linkTitle: 'BigInt value',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Date',
      sectionLinks: [
        {
          linkTitle: 'Date objects',
          linkSource:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date',
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'new Date()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Date.now()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'getFullYear()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getFullYear()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getMonth()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getMonth()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getDate()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getDate()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getDay()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getDay()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getHours()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getHours()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getMinutes()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getMinutes()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getSeconds()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getSeconds()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getTime() vs Convert a date to a number',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getTime()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'toISOString()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.toISOString()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'setFullYear()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.setFullYear()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Intl',
      sectionLinks: [
        {
          linkTitle: 'Intl object',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'DateTimeFormat()',
          articleLinks: [
            {
              linkTitle: 'Intl.DateTimeFormat() constructor',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat`,
            },
            {
              linkTitle: 'ISO Language Code Table',
              linkSource: `http://www.lingoes.net/en/translator/langcode.htm`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'NumberFormat()',
          articleLinks: [
            {
              linkTitle: 'Intl.NumberFormat() constructor',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat`,
            },
            {
              linkTitle: 'ISO Language Code Table',
              linkSource: `http://www.lingoes.net/en/translator/langcode.htm`,
            },
            {
              linkTitle: 'ISO 4217',
              linkSource: `https://en.wikipedia.org/wiki/ISO_4217`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'navigator.language',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const functionalProgramming = {
  title: 'Functional Programming (FP)',
  sections: [
    {
      sectionTitle: 'Introduction to FP',
      sectionLinks: [
        {
          linkTitle:
            'Master the JavaScript Interview: What is Functional Programming?',
          linkSource: `https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Function Declarations vs. Expressions',
      sectionLinks: [
        {
          linkTitle: 'Functions',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Introducing Arguments',
      sectionLinks: [
        {
          linkTitle: 'The arguments object',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'How Passing Arguments Works: Value vs. Reference',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Functions With Multiple Args',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'The Arguments Object',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Default Parameters',
      sectionLinks: [
        {
          linkTitle: 'Default parameters',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Rest Parameters',
      sectionLinks: [
        {
          linkTitle: 'Rest parameters',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Destructuring Parameters',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Function invocation',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'this keyword',
      sectionLinks: [
        {
          linkTitle: 'this keyword',
          linkSource: `https://www.w3schools.com/js/js_this.asp`,
        },
        {
          linkTitle: 'this keyword',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this`,
        },
      ],
      sectionExplanations: [
        `<b>this</b> is the <b>object</b> that the <b>function</b> is a property of (<i><b>the 'this' keyword acts as a placeholder</b> and we'll refer to whichever object called that method 'window' object or other object)</i>.`,
        `There that's simple right? Well, maybe not, what does that mean? Back in Execution Context, we talked about how the <i>JavaScript engine creates the global execution context and <b>initializes this to the global window object</b></i>.`,
        `<img src="../src/img/this1.jpg">`,
        `In the example above, it is easy to understand that this is equal to the window object, but what about inside of function a? Well, what object is function a apart of? In the dev tools, if you expand the window object and scroll down the list, <i>you will see a() is a method on the window object</i>. By calling a(), you are essentially saying window.a() to the console.`,
        `<img src="../src/img/this2.jpg">`,
        `<b>this</b> refers to <b>whatever is on the left of the . (dot) when calling a method</b>`,
        `<img src="../src/img/this3.jpg">`,
        `Still confused? Try this:`,
        `<img src="../src/img/this4.jpg">`,
        `Another way to look at <b>this</b> is to check <b>which object called it</b>.`,
        `<img src="../src/img/this5.jpg">`,
        `Here is <b>this</b> 4 ways: <br>1. <b>new keyword</b> binding - the <i>new keyword changes the meaning of this</i> to be <i>the object that is being created</i>. <br>2. <b>implicit binding</b> - <i>'this' refers to the object that is calling it</i>. It is implied, without doing anything it's just how the language works. <br>3. <b>explicit binding</b> - using the <i>'bind' keyword to change the meaning of 'this'</i>. <br>4. <b>arrow functions as methods</b> - <i>'this' is lexically scoped, refers to it's current surroundings and no further</i>. However, if 'this' is inside of a method's function, it falls out of scope and belongs to the window object. To correct this, you can use a higher order function to return an arrow function that calls 'this'.`,
        `<img src="../src/img/this6.jpg">`,
        `<i>When the global execution context starts during the creation phase, we create the 'global object' and 'this' and they equal each other. In this case, <b>the 'window' object is our global object</b></i>.`,
        `So what if we do something like:`,
        `<img src="../src/img/this7.jpg">`,
        `If I run a() what do you think the answer will be? Well, we get 'window', so 'this' is equal to window and why is that? Remember the definition, <b>'this is the object that the function is a property of'. That means we're calling window.a() and running it</b>, <i>that's what we're doing above with calling a(). So what is the object that the function a() is a property of? Well, the function a() is a property of the 'window' object, so that's what 'this' is, it's the 'window'</i>.`,
        `<img src="../src/img/this8.jpg">`,
        `<i><b>'use strict' was added to JavaScript as a way for us to avoid the common mistakes that can happen with JavaScript</b>, when the language was originally designed, it wasn't perfect and there were bits and pieces of mistake and things like 'use strict' allow us to not have this kind of errors where 'this' refers to the 'window' object.  And 'use strict' can be added at the beginning, the first line of a function or the beginning of our script</i>.`,
        `<b><i>The 'this' keyword acts as a placeholder<i> and we'll refer to whichever object called that method ('window' object or other object)</b>.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Lexical vs Dynamic Scope',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `A big gotcha for a lot of people working with *this is when a function is ran inside of another function. It gets a little confusing, but we can remember who called the function.`,
        `<img src="../src/img/lexical_dynamic_scope_this1.jpg">`,
        `<b>Functions inside of method</b> <i>is, well, a function inside of a function. That means <b>'this' keyword is not assigned to the object itself, but actually to the 'window' object</b></i>.`,
        `In the example above, the obj called sing() and then anotherFunc() was called within the sing() function. In JavaScript, that function defaults to the Window object. It happens because <b>everything in JavaScript is lexically scoped except for the this keyword. <i>It doesn't matter where it is written, it matters how it is called</i></b>. Changing anotherFunc() instead to an arrow function will fix this problem, as seen below. <i>Arrow functions do not bind or set their own context for this. If this is used in an arrow function, it is taken from the outside. Arrow functions also have no arguments created as functions do</i>.`,
        `<img src="../src/img/lexical_dynamic_scope_this2.jpg">`,
        `Okay, last example to really solidify our knowledge of <b>this</b>.`,
        `<img src="../src/img/lexical_dynamic_scope_this3.jpg">`,
        `This is unlike anything we've seen before. I remember when I told you about lexical scope, lexical environment, how the compiler knew right away without running any piece of code what variables functions had access to? It almost looks like <b>lexical scope doesn't work with 'this', it doesn't really matter where we write 'this' in the piece of code, all that matters is how 'this' gets called during invocation. Who calls it? <i>It matters how the function was called, like a regular function or like a method</i></b>.`,
        `<img src="../src/img/lexical_dynamic_scope_this4.jpg">`,
        `<b>The 'this' keyword is not lexically scoped, it doesn't matter where 'this' is write in our code, it matters <i>how the function was called</i></b>.`,
        `<i>Everything in JavaScript is actually lexically scoped, how you write it determines what we have available, except for the 'this' keyword. <b>The 'this' keyword is actually dynamically scoped</b>, it doesn't matter where 'this' is written, it matters how the function was called</i>.`,
        `<b>Arrow functions are lexically bound, <i>arrow functions</i> has a lexical 'this' behavior unlike <i>normal functions</i></b>.`,
        `If I change the anotherFunc with an arrow function I solve the problem of 'this' target the window object.`,
        `<img src="../src/img/lexical_dynamic_scope_this5.jpg">`,
        `Before ES6 arrow function, we can make this:`,
        `<img src="../src/img/lexical_dynamic_scope_this6.jpg">`,
        `Because we return ' anotherFunc.bind(this) ' outside of anotherFunc, 'this' is going to refer to the object.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'this – call(), apply(), bind()',
      sectionLinks: [
        {
          linkTitle: 'Function.prototype.call()',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call`,
        },
        {
          linkTitle: 'Function.prototype.apply()',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply`,
        },
        {
          linkTitle: 'Function.prototype.bind()',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind`,
        },
      ],
      sectionExplanations: [
        `In order for us to <b>manipulate the 'this' keyword</b>, there are 3 important methods (call, apply and bind).`,
        `Underneath the hood, all functions use call() when invoking a function. Let me show you what I mean.`,
        `<img src="../src/img/this_call1.jpg">`,
        `<b>Underneath the hood, in JavaScript, when I do a() to invoke the function, <i>all functions when created have this property called call() that allows us to call the function</i></b>, <i>so a() is just a shorthand that we can use</i>.`,
        `<b>Call</b> is a method of an object that <i>can substitute a different object than the one it is written on</i>. In this example below call is used to borrow the heal method from the wizard and is used on the archer (which is actually pointing this to archer), with the optional arguments added.`,
        `<img src="../src/img/this_call.jpg">`,
        `<b>Apply</b> is <i>almost identical to call</i>, except that instead of a comma separated list of arguments, <b>it takes an array of arguments</b>.`,
        `<img src="../src/img/this_apply.jpg">`,
        `Unlike call and apply, <b>bind</b> does not run the method it is used on, but rather returns a new function that can then be called later. bind() <b>returns a new function</b> with a certain context and parameters, and it's <b>usually used when we want a function to be called later on</b>, with a certain type of context or a certain type of 'this' keyword.`,
        `<img src="../src/img/this_bind.jpg">`,
        `So to review, call() and apply(), when are they useful? Well, <b>call() and apply() are useful for <i>borrowing methods from an object</i></b>, while <b>bind() is useful for us to <i>call functions later on</i></b> with a certain context or certain 'this' keyword.`,
      ],
      sectionArticles: [
        {
          articleTitle: 'Currying with bind()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `Currying is <b>breaking down a function with <i>multiple arguments</i> into one or more functions that each accept a <i>single argument</i></b>. <br><img src="../src/img/currying_bind1.jpg">`,
            `Exercise 1: Find the largest number in an array <br><img src="../src/img/currying_bind2.jpg">`,
            `Exercise 2: How would you fix this?<br><img src="../src/img/currying_bind3.jpg">`,
          ],
        },
      ],
    },
    {
      sectionTitle: 'Arrow Functions',
      sectionLinks: [
        {
          linkTitle: 'Arrow function expressions',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Arrow Functions: Implicit Returns',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Arrow Functions and THIS keyword',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Regular Functions vs. Arrow Functions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Immediately Invoked Function Expressions (IIFE)',
      sectionLinks: [
        {
          linkTitle: 'IIFE (Immediately Invoked Function Expression)',
          linkSource: `https://developer.mozilla.org/en-US/docs/Glossary/IIFE`,
        },
      ],
      sectionExplanations: [
        `Immediately Invoked Function Expression or more simply IIFE is <b>a JavaScript function that runs as soon as it is defined</b>. Can also be referred to as a Self-Executing Anonymous Function.`,
        `<img src="../src/img/iife.jpg">`,
        `We already know this code and we should already understand what the JavaScript engine is going to do with this code, you see IIFE are common JavaScript design pattern use by a lot of popular libraries, especially back in the day like jQuery or even BackboneJS, <b>the idea was using this IIFE code pattern, we can place all library code inside of local scope to avoid any namespace collisions</b>.`,
        `<img src="../src/img/iife1.jpg">`,
        `So let's have a look one by one. <i>The first thing we're doing is we're saying with this brackets () 'Hey, this isn't a function declaration, it's a function expression', because the JavaScript engine won't see function as the first item on the line, instead it's going to see these brackets (). So this brackets () will automatically makes it into a function expression</i>. And then after we've done that, we've created an anonymous function because there's no name attached to the function and then we immediately invoke it.`,
        `Now, what's the benefit in doing this IIFE? You see, since the anonymous function within this, if he is a function expression and it's not being assigned to any global variables, no global property is really being created. And all of the properties created inside this IIFE are going to be scoped inside IIFE, so it's only going to be available inside this IIFE, but not outside.`,
        `<b>Takeaways</b>: Avoid polluting the global namespace or scope when possible.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Spread for Function Calls',
      sectionLinks: [
        {
          linkTitle: 'Spread syntax (...)',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax`,
        },
        {
          linkTitle: 'How to Use the Spread Operator (…) in JavaScript',
          linkSource: `https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'The Return Statement',
      sectionLinks: [
        {
          linkTitle: 'return statement',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Closures',
      sectionLinks: [
        {
          linkTitle: 'Closures',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Higher-Order Functions',
      sectionLinks: [
        {
          linkTitle: 'First-class Function',
          linkSource: `https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function`,
        },
        {
          linkTitle: 'Higher-Order Functions',
          linkSource: `https://eloquentjavascript.net/05_higher_order.html`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Functions Accepting Callback Functions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle:
            'A Function Can Be Passed As An Argument To Other Functions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'A Function Can Be Returned By Another Function',
          articleLinks: [
            {
              linkTitle:
                'JavaScript Functions → Returning Functions from Functions',
              linkSource: `https://medium.com/@iampika/part-6-javascript-functions-returning-functions-from-functions-429a3d9a55d1`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'A Function Can Be Assigned As A Value To A Variable',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Callbacks',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Functions vs Objects',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Scheme + Java',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Curry',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Partial Application',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Pure Functions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Referential Transparency',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Compose',
      sectionLinks: [
        {
          linkTitle:
            'A quick introduction to pipe() and compose() in JavaScript',
          linkSource: `https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Pipe',
      sectionLinks: [
        {
          linkTitle:
            'A quick introduction to pipe() and compose() in JavaScript',
          linkSource: `https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const asynchronous = {
  title: 'Asynchronous',
  sections: [
    {
      sectionTitle: 'Introduction to Asynchronous Javascript',
      sectionLinks: [
        {
          linkTitle: 'Asynchronous JavaScript',
          linkSource: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous`,
        },
        {
          linkTitle: 'Introducing asynchronous JavaScript',
          linkSource: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing`,
        },
        {
          linkTitle:
            'Asynchronous and Single-threaded JavaScript? Meet the Event Loop',
          linkSource: `https://thecodest.co/blog/asynchronous-and-single-threaded-javascript-meet-the-event-loop/`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Web APIs',
      sectionLinks: [
        {
          linkTitle: 'Web APIs - Introduction',
          linkSource: `https://www.w3schools.com/js/js_api_intro.asp`,
        },
        {
          linkTitle: 'Web APIs',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Microtask Queue (Job Queue)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Task Queue (Callback Queue)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Event Loop',
      sectionLinks: [
        {
          linkTitle:
            'Asynchronous and Single-threaded JavaScript? Meet the Event Loop',
          linkSource: `https://thecodest.co/blog/asynchronous-and-single-threaded-javascript-meet-the-event-loop/`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Timers',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'setTimeout()',
          articleLinks: [
            {
              linkTitle: 'The global setTimeout() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/setTimeout`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'clearTimeout()',
          articleLinks: [
            {
              linkTitle: 'The global clearTimeout() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'setInterval()',
          articleLinks: [
            {
              linkTitle: 'The global setInterval() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/setInterval`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'clearInterval()',
          articleLinks: [
            {
              linkTitle: 'The global clearInterval() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/clearInterval`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Intro to AJAX',
      sectionLinks: [
        {
          linkTitle: 'AJAX Introduction',
          linkSource: `https://www.w3schools.com/js/js_ajax_intro.asp`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'JSON & XML',
      sectionLinks: [
        {
          linkTitle: 'JSON - Introduction',
          linkSource: `https://www.w3schools.com/js/js_json_intro.asp`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'XMLHttpRequests: The Basics',
      sectionLinks: [
        {
          linkTitle: 'Using XMLHttpRequest',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'const request = new XMLHttpRequest()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'request.open(‘GET’, ‘url’)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'request.send()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'request.addEventListener(‘load’, function)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'XMLHttpRequests: Chaining Requests',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Welcome to Callback Hell',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Promises and the Fetch API',
      sectionLinks: [
        {
          linkTitle: 'Using Promises',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises`,
        },
        {
          linkTitle: 'Promise object',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise`,
        },
        {
          linkTitle: 'Fetch API',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'fetch(‘url’)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle:
            'fetch() will always return a promise that need to by handled by consuming it',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Consuming Promises',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '.then(callback function with ‘response’ parameter)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'returning a Promise with response.json()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'returning a Promise with response.text()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Chaining Promises',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'returning a Promise and handle it outside the chain',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Handling Rejected Promises',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '.catch(callback function with ‘error’ parameter)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: '.finally(callback function)',
          articleLinks: [
            {
              linkTitle: 'Promise.prototype.finally()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Throwing Errors Manually',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'throw new Error()',
          articleLinks: [
            {
              linkTitle: 'The throw statement',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw`,
            },
            {
              linkTitle: 'Error objects',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Building a Simple Promise',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle:
            'new Promise(function(resolve, reject) {      resolve(fulfilled value);  reject(rejected value)  })',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Wrap old callback based functions into Promises',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Consuming Promises with Async/Await',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '‘async’ funtions',
          articleLinks: [
            {
              linkTitle: 'The async function',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: '‘await’ keyword',
          articleLinks: [
            {
              linkTitle: 'The await operator',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'An ‘async function’ will always return a promise',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle:
            'Store ‘await’ Promises results in variables like const',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Multiple Awaits',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Error Handling in Async Functions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'try {} catch(error) {}',
          articleLinks: [
            {
              linkTitle: 'The try...catch statement',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle:
            'Rethrowing an error when you have multiple async funtions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Returning Values from Async Functions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'An async function always returns a Promise',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Parallel Vs. Sequential Requests',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Promise.all([ ])',
          articleLinks: [
            {
              linkTitle: 'The try...catch statement',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Other Promise Combinators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Promise.race([ ])',
          articleLinks: [
            {
              linkTitle: 'The Promise.race() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Promise.allSettled([ ])',
          articleLinks: [
            {
              linkTitle: 'The Promise.allSettled() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Promise.any([ ])',
          articleLinks: [
            {
              linkTitle: 'The Promise.any() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: `Top-Level ' await ' (ES2022)`,
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `Top-Level 'await' work only in modules. With ES2022 you can use 'await' keyword outside of an 'async function', but only in modules.`,
        `If one module imports a module which has a Top-Level 'await', then the importing module will wait for the imported module to finish the blocking code. So Top-Level 'await' is in fact blocking the execution not only in the imported module, but also in the module that is importing the imported module.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const domManipulation = {
  title: 'Document Object Model (DOM) <br>- Properties & Methods -',
  sections: [
    {
      sectionTitle: 'Introduction to The Document Object',
      sectionLinks: [
        {
          linkTitle: 'DOM Intro - w3schools',
          linkSource: `https://www.w3schools.com/js/js_htmldom.asp`,
        },
        {
          linkTitle: 'Introduction to the DOM',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction`,
        },
        {
          linkTitle: 'Document interface',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document`,
        },
        {
          linkTitle: 'DOM Node interface',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node`,
        },
        {
          linkTitle: 'Element',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element`,
        },
        {
          linkTitle: `What's the Difference between DOM Node and Element?`,
          linkSource: `https://dmitripavlutin.com/dom-node-element/`,
        },
      ],
      sectionExplanations: [
        `What is the DOM?
        <br>The Document Object Model (DOM) is a programming interface for web documents. It <b>represents the page so that programs can change the document structure, style and content</b>. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. The DOM is <b>automatically created by the browser</b> as soon as the HTML page loads. The DOM is built using multiple APIs that work together so the DOM, DOM methods and DOM properties are actually <b>part of something called the Web APIs</b>. Now, besides the DOM, there are actually a ton more Web APIs, such as Timers, the Fetch API and many more.`,
        `A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an <b>object-oriented representation of the web page</b>, it can be modified with a scripting language such as JavaScript. <b>All of the properties, methods and events available for manipulating and creating web pages are organized into objects</b>.`,
        `The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript. <b>The DOM is not part of the JavaScript language</b>, but is instead a Web API used to build websites. <b>The DOM was designed to be independent of any particular programming language</b>, making the structural representation of the document available from a single, consistent API. Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language, even Python.`,
        `<b>With the HTML DOM, JavaScript can <i>access</i> and <i>change</i> all the elements of an HTML document</b>. The HTML DOM model is constructed as a <b>tree of Objects</b>:`,
        `<img src="../src/img/dom_tree-of-objects.jpg">`,
        `With the object model, JavaScript gets all the power it needs to create dynamic HTML:
        <br>➣ JavaScript can <b><i>change</i></b> all the HTML elements in the page
        <br>➣ JavaScript can <b><i>change</i></b> all the HTML attributes in the page
        <br>➣ JavaScript can <b><i>change</i></b> all the CSS styles in the page
        <br>➣ JavaScript can <b><i>remove</i></b> existing HTML elements and attributes
        <br>➣ JavaScript can <b><i>add</i></b> new HTML elements and attributes
        <br>➣ JavaScript can <b><i>react</i></b> to all existing HTML events in the page
        <br>➣ JavaScript can <b><i>create</i></b> new HTML events in the page`,
        `What is the DOM?
        <br>➣ The DOM is a W3C (World Wide Web Consortium) standard.
        <br>➣ The DOM defines a standard for accessing documents.
        `,
        `What is the HTML DOM Document?
        <br>The HTML DOM is a standard <b>object</b> model and <b>programming interface</b> for HTML. It defines:
        <br>➣ The HTML elements as <b>objects</b>
        <br>➣ The <b>properties</b> of all HTML elements
        <br>➣ The <b>methods</b> to access all HTML elements
        <br>➣ The <b>events</b> for all HTML elements
        <br>In other words: The HTML DOM is a standard for how to get, change, add or delete HTML elements.
        <br>The <b>HTML DOM Document object is the owner of all other objects in your web page</b>. The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object (ex: document.getElementById(id)).`,
        `The DOM Programming Interface
        <br>The HTML DOM can be accessed with JavaScript (and with other programming languages). <b>In the DOM, all HTML elements are defined as objects</b>. The programming interface is the properties and methods of each object.
        <br>➣ HTML <b>DOM methods</b> are <b><i>actions</i></b> you can perform (on HTML Elements).
        <br>➣ HTML <b>DOM properties</b> are <b><i>values</i></b> (of HTML Elements) that you can set or change.`,
        `Finding HTML Objects:
        <br>➣ The first HTML DOM Level 1 (1998), defined 11 HTML objects, object collections, and properties. These are still valid in HTML5.
        <br>➣ Later, in HTML DOM Level 3, more objects, collections, and properties were added.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'HTML DOM Elements',
      sectionLinks: [
        {
          linkTitle: 'HTML DOM Elements - w3schools',
          linkSource: 'https://www.w3schools.com/js/js_htmldom_elements.asp',
        },
      ],
      sectionExplanations: [
        `Finding HTML Elements:
        <br>Often, with JavaScript, you want to <b>manipulate HTML elements</b>. To do so, you have to <b>find the elements first</b>. There are several ways to do this:
        <br>➣ Finding HTML elements by <b><i>id</i></b>
        <br>➣ Finding HTML elements by <b><i>tag name</i></b>
        <br>➣ Finding HTML elements by <b><i>class name</i></b>
        <br>➣ Finding HTML elements by <b><i>CSS selectors</b> (id, class names, types, attributes, values of attributes, combinators, * , etc)</i>
        <br>➣ Finding HTML elements by <b><i>HTML object collections</i></b>
        <br><i>If the element is found, <b>the method will return the element as an object (in element)</b>. If the element is not found, element will contain <b>null</b></i>.`,
        `After you find the element, the HTML DOM allows JavaScript to change the content, style of HTML elements. HTML DOM also allows JavaScript to react to HTML events.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'HTML DOM Nodes & Node Lists',
      sectionLinks: [
        {
          linkTitle: `What's the Difference between DOM Node and Element?`,
          linkSource: 'https://dmitripavlutin.com/dom-node-element/',
        },
      ],
      sectionExplanations: [
        `The Document Object Model (DOM) is an interface that treats HTML or XML document as a tree structure, where <b>each node is an object of the document</b>. DOM also provides a set of methods to query the tree, alter the structure, style. DOM also uses the term <i>element</i>: which is quite similar to a node. So, what's the difference between a DOM node and an element? Let's find out!`,
        `<b>What's a DOM node?</b>
        <br>The key to understanding the difference between a node and an element is to understand what a node is. From a higher viewpoint, a DOM document consists of a hierarchy of nodes. Each node can have a parent and/or children. Let's look at the following HTML document:
        <br><img src="../src/img/node-vs-element1.jpg">
        <br>The document contains the following hierarchy of nodes:
        <br><img src="../src/img/node-vs-element2.jpg">
        <br>'html' is a node in the document tree. It has 2 children: 'head' and 'body' nodes.
        <br>'body' is also a node having 3 children: a comment '!-- Page Body --', heading 'h2', and paragraph 'p'. The parent of the 'body' node is 'html' node.
        <br>The tags in the HTML document represent a node, what's interesting is that regular text is also a node. The paragraph node 'p' has 1 child: the text node "Thank you for visiting my web page!".`,
        `<b>Note Types</b>
        <br>How can you distinguish these different types of nodes? The answer lays in the DOM Node interface, particularly in the Node.nodeType property. Node.nodeType can have one of the following values that represents the type of the node:
        <br>➣ Node.ELEMENT_NODE
        <br>➣ Node.ATTRIBUTE_NODE
        <br>➣ Node.TEXT_NODE
        <br>➣ Node.CDATA_SECTION_NODE
        <br>➣ Node.PROCESSING_INSTRUCTION_NODE
        <br>➣ Node.COMMENT_NODE
        <br>➣ Node.DOCUMENT_NODE
        <br>➣ Node.DOCUMENT_TYPE_NODE
        <br>➣ Node.DOCUMENT_FRAGMENT_NODE
        <br>➣ Node.NOTATION_NODE
        <br>The constants meaningfully indicate the node type: for example Node.ELEMENT_NODE represents an element node, Node.TEXT_NODE represents a text node, Node.DOCUMENT_NODE the document node, and so on.`,
        `<b>What is a NodeList?</b>
        <br>➣ A NodeList object is a list (collection) of nodes extracted from a document. 
        <br>➣ A NodeList object is almost the same as an HTMLCollection object. 
        <br>➣ Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName(). 
        <br>➣ All browsers return a NodeList object for the property childNodes. 
        <br>➣ Most browsers return a NodeList object for the method querySelectorAll().`,
        `DOM Element:
        <br>After getting a good grasp of what a DOM node is, now is the time to differentiate the DOM node and element.
        <br>If you get well the node term, then the answer is obvious: <b>an element is a node of a specific type — element (Node.ELEMENT_NODE)</b>. Along with types like document, comment, text, etc.
        <br>In simple words, <b>an element is a node that's written using a tag in the HTML document</b> ('html', 'head', 'title', 'body', 'h2', 'p' are all elements because they are represented by tags.
        <br>The document type, the comment, the text nodes aren't elements because they are not written with tags:
        <br><img src="../src/img/node-vs-element3.jpg">
        <br>Node is constructor of a node, and HTMLElement is a constructor of an element in JavaScript DOM. A paragraph, being a node and also an element, is an instance of both Node and HTMLElement`,
        `<b>Summary:</b>
        <br>➣ A DOM document is a hierarchical collection of nodes. Each node can have a parent and/or children.
        <br>➣ Understanding the difference between a DOM node and an element is easy if you understand what a node is.      
        <br>➣ Nodes have types, the element type being one of them. The element is represented by a tag in the HTML document.      
        <br><i>Quiz: What type of node never has a parent node?</i>`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'HTML DOM Collections',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Select DOM elements & DOM Traversing',
      sectionLinks: [
        {
          linkTitle: 'Traversing the DOM with JavaScript',
          linkSource: `https://zellwk.com/blog/dom-traversals/`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'document.documentElement',
          articleLinks: [
            {
              linkTitle: 'Document.documentElement',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'document.head',
          articleLinks: [
            {
              linkTitle: 'Document.head',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/head`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'document.body',
          articleLinks: [
            {
              linkTitle: 'Document.body',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/body`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getElementById()',
          articleLinks: [
            {
              linkTitle: 'Document.getElementById()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getElementsByTagName()',
          articleLinks: [
            {
              linkTitle: 'Document.getElementsByTagName()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getElementsByClassName()',
          articleLinks: [
            {
              linkTitle: 'Document.getElementsByClassName()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'querySelector() (document/element)',
          articleLinks: [
            {
              linkTitle: 'Document.querySelector()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'querySelectorAll() (document/element)',
          articleLinks: [
            {
              linkTitle: 'Document.querySelectorAll()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'children',
          articleLinks: [
            {
              linkTitle: 'Element.children',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/children`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'childNodes',
          articleLinks: [
            {
              linkTitle: 'Node.childNodes',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'firstElementChild',
          articleLinks: [
            {
              linkTitle: 'Element.firstElementChild',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'lastElementChild',
          articleLinks: [
            {
              linkTitle: 'Element.lastElementChild',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'firstChild',
          articleLinks: [
            {
              linkTitle: 'Node.firstChild',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'lastChild',
          articleLinks: [
            {
              linkTitle: 'Node.lastChild',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'closest()',
          articleLinks: [
            {
              linkTitle: 'Element.closest()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/closest`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'parentElement',
          articleLinks: [
            {
              linkTitle: 'Node.parentElement',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'parentNode',
          articleLinks: [
            {
              linkTitle: 'Node.parentNode',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'previousElementSibling',
          articleLinks: [
            {
              linkTitle: 'Element.previousElementSibling',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'nextElementSibling',
          articleLinks: [
            {
              linkTitle: 'Element.nextElementSibling',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'previousSibling',
          articleLinks: [
            {
              linkTitle: 'Node.previousSibling',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'nextSibling',
          articleLinks: [
            {
              linkTitle: 'Node.nextSibling',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Create, insert & remove DOM elements',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'document.createElement()',
          articleLinks: [
            {
              linkTitle: 'Document.createElement()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'prepend()',
          articleLinks: [
            {
              linkTitle: 'Element.prepend()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'append()',
          articleLinks: [
            {
              linkTitle: 'Element.append()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/append`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'before()',
          articleLinks: [
            {
              linkTitle: 'Element.before()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/before`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'after()',
          articleLinks: [
            {
              linkTitle: 'Element.after()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/after`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'insertAdjacentHTML()',
          articleLinks: [
            {
              linkTitle: 'Element.insertAdjacentHTML()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'insertAdjacentText()',
          articleLinks: [
            {
              linkTitle: 'Element.insertAdjacentText()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'cloneNode()',
          articleLinks: [
            {
              linkTitle: 'Node.cloneNode()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'remove()',
          articleLinks: [
            {
              linkTitle: 'Element.remove()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/remove`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'innerHTML',
          articleLinks: [
            {
              linkTitle: 'Element.innerHTML',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'innerText',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.innerText',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'textContent',
          articleLinks: [
            {
              linkTitle: 'Node.textContent',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Styles, Attributes & Classes',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'style',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.style',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getComputedStyle()',
          articleLinks: [
            {
              linkTitle: 'Window.getComputedStyle()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'setProperty()',
          articleLinks: [
            {
              linkTitle: 'CSSStyleDeclaration.setProperty()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'setAttribute()',
          articleLinks: [
            {
              linkTitle: 'Element.setAttribute()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getAttribute()',
          articleLinks: [
            {
              linkTitle: 'Element.getAttribute()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'alt',
          articleLinks: [
            {
              linkTitle: 'HTMLImageElement.alt',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'src',
          articleLinks: [
            {
              linkTitle: 'HTMLMediaElement.src',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'href',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'hidden',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.hidden',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'value',
          articleLinks: [
            {
              linkTitle: 'DOMTokenList.value',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/value`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'dataset',
          articleLinks: [
            {
              linkTitle: 'Using data attributes',
              linkSource: `https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes`,
            },
            {
              linkTitle: 'Using Dataset in JavaScript',
              linkSource: `https://medium.com/@adamkearney124/using-dataset-in-javascript-5331af3ec6c3`,
            },
            {
              linkTitle: 'HTMLElement.dataset',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'classList (add, remove, toggle, contains)',
          articleLinks: [
            {
              linkTitle: 'Element.classList',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/classList`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'className',
          articleLinks: [
            {
              linkTitle: 'Element.className',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/className`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Other methods & properties',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'clientHeight',
          articleLinks: [
            {
              linkTitle: 'Element.clientHeight',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'clientWidth',
          articleLinks: [
            {
              linkTitle: 'Element.clientWidth',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'offsetHeight',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.offsetHeight',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'getBoundingClientRect()',
          articleLinks: [
            {
              linkTitle: 'Element.getBoundingClientRect()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'scrollIntoView()',
          articleLinks: [
            {
              linkTitle: 'Element.scrollIntoView()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'blur()',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.blur()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'focus()',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.focus()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'attributes',
          articleLinks: [
            {
              linkTitle: 'Element.attributes',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'isEqualNode()',
          articleLinks: [
            {
              linkTitle: 'Node.isEqualNode()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'nodeValue',
          articleLinks: [
            {
              linkTitle: 'Node.nodeValue',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'Node.contains()',
          articleLinks: [
            {
              linkTitle: 'Node.contains()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/contains`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'document.createRange().createContextualFragment()',
          articleLinks: [
            {
              linkTitle: 'Document.createRange()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createRange`,
            },
            {
              linkTitle: 'Range.createContextualFragment()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Changing Multiple Elements',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const events = {
  title: 'Document Object Model (DOM) <br>- Events -',
  sections: [
    {
      sectionTitle: 'Introduction to Events',
      sectionLinks: [
        {
          linkTitle: 'Introduction to events',
          linkSource: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events`,
        },
        {
          linkTitle: 'HTML DOM Events',
          linkSource: `https://www.w3schools.com/js/js_htmldom_events.asp`,
        },
        {
          linkTitle: 'Event reference',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/Events`,
        },
      ],
      sectionExplanations: [
        `Events are <b>actions <i>or</i> occurrences</b> that happen in the system you are programming, which <b>the system tells you about so your code can react to them</b>. For example, if the user clicks a button on a webpage, you might want to react to that action by displaying an information box. In this article, we discuss some important concepts surrounding events, and look at how they work in browsers`,
        `In the case of the Web, <i>events are fired inside the browser window</i>, and <i>tend to be attached to a specific item that resides in it</i>. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur. For example:
        <br>➣ The user selects a certain element or hovers the cursor over a certain element.
        <br>➣ The user chooses a key on the keyboard.
        <br>➣ The user resizes or closes the browser window.
        <br>➣ A web page finishes loading.
        <br>➣ A form is submitted.
        <br>➣ A video is played, paused, or finishes.
        <br>➣ An error occurs.
        <br>You can gather from this that there are a lot of events that can be fired (<a href="https://developer.mozilla.org/en-US/docs/Web/Events">Event reference</a>).`,
        `<b>To react to an event, you attach an <i>event handler</i> to it</b>. <b>Event handler</b> <i>is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are</i> <b>registering an event handler</b>. Note: <b>Event handlers</b> are sometimes called <b>event listeners</b> — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The <b>listener</b> <i>listens out for the event happening</i>, and the <b>handler</b> <i>is the code that is run in response to it happening</i>.`,
        `<b>Note</b>: Web events are not part of the core JavaScript language — they are defined as part of the APIs built into the browser.`,
        `Objects that can fire events have an addEventListener() method, that takes at least two arguments: the <b>name of the event</b> and <b>a function to handle the event</b>.`,
        `It's not just web pages:
        <br><b>Events are not unique to JavaScript</b> — most programming languages have some kind of event model, and the way the model works often differs from JavaScript's way. In fact, the event model in JavaScript for web pages differs from the event model for JavaScript as it is used in other environments. For example, Node.js is a very popular JavaScript runtime that enables developers to use JavaScript to build network and server-side applications. The Node.js event model relies on listeners to listen for events and emitters to emit events periodically — it doesn't sound that different, but the code is quite different, making use of functions like on() to register an event listener, and once() to register an event listener that unregisters after it has run once. You don't need to understand anything about other such environments at this stage in your learning; we just wanted to make it clear that events can differ in different programming environments.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'addEventListener() & removeEventListener()',
      sectionLinks: [
        {
          linkTitle: 'HTML DOM Element addEventListener()',
          linkSource: `https://www.w3schools.com/jsref/met_element_addeventlistener.asp`,
        },
        {
          linkTitle: 'EventTarget.addEventListener()',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`,
        },
        {
          linkTitle: 'EventTarget.removeEventListener()',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener`,
        },
      ],
      sectionExplanations: [
        `addEventListener():
        <br>The recommended mechanism for adding event handlers in web pages is the addEventListener() method. Inside the addEventListener() function, we specify two parameters: the name of the event we want to register this handler for, and the code that comprises the handler function we want to run in response to it.`,
        `It is fine to make the handler function a separate named function, like this:
        <br><img src="../src/img/event_listener1.jpg">
        <br>➣ The addEventListener() method attaches an event handler to the specified element.
        <br>➣ The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
        <br>➣ You can add many event handlers to one element.
        <br>➣ You can add many event handlers of the same type to one element, i.e two "click" events.
        <br>➣ You can add event listeners to any DOM object not only HTML elements. i.e the window object.
        <br>➣ The addEventListener() method makes it easier to control how the event reacts to bubbling.
        <br>When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup. You can easily remove an event listener by using the removeEventListener() method.`,
        `The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, or its children, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).`,
        `removeEventListener():
        <br>If you've added an event handler using addEventListener(), you can remove it again using the removeEventListener() method. For example, this would remove the changeBackground() event handler:
        <br><img src="../src/img/event_listener2.jpg">
        <br>For simple, small programs, cleaning up old, unused event handlers isn't necessary, but for larger, more complex programs, it can improve efficiency. Also, the ability to remove event handlers allows you to have the same button performing different actions in different circumstances: all you have to do is add or remove handlers.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: '2 Ways NOT to Add Events',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `We <b>recommend that you <i>use addEventListener() to register event handlers</i></b>. It's the most powerful method and scales best with more complex programs. However, there are two other ways of registering event handlers that you might see: <b>event handler properties</b> and <b>inline event handlers</b>.`,
        `<b>Event handler properties</b>
        <br>Objects (such as buttons) that can fire events also usually have properties whose name is 'on' followed by the name of the event. For example, elements have a property 'onclick'. This is called an <i>event handler property</i>. To listen for the event, you can assign the handler function to the property.
        <br><img src="../src/img/events1.jpg">
        <br>You can also set the handler property to a named function:
        <br><img src="../src/img/events2.jpg">
        <br>With event handler properties, you can't add more than one handler for a single event. For example, you can call addEventListener('click', handler) on an element multiple times, with different functions specified in the second argument:
        <br><img src="../src/img/events3.jpg">
        <br>This is impossible with event handler properties because any subsequent attempts to set the property will overwrite earlier ones:
        <br><img src="../src/img/events4.jpg">`,
        `<b>Inline event handlers — don't use these</b>
        <br>You might also see a pattern like this in your code:
        <br><img src="../src/img/events5.jpg">
        <br><img src="../src/img/events6.jpg">
        <br>The earliest method of registering event handlers found on the Web involved event handler HTML attributes (or inline event handlers) like the one shown above - the attribute value is literally the JavaScript code you want to run when the event occurs. The above example invokes a function defined inside a 'script' element on the same page, but you could also insert JavaScript directly inside the attribute, for example:
        <br><img src="../src/img/events7.jpg">
        <br>You can find HTML attribute equivalents for many of the event handler properties; however, you shouldn't use these — they are considered bad practice. It might seem easy to use an event handler attribute if you are doing something really quick, but they quickly become unmanageable and inefficient.
        <br>For a start, it is not a good idea to mix up your HTML and your JavaScript, as it becomes hard to read. Keeping your JavaScript separate is a good practice, and if it is in a separate file you can apply it to multiple HTML documents.
        <br>Even in a single file, inline event handlers are not a good idea. One button is OK, but what if you had 100 buttons? You'd have to add 100 attributes to the file; it would quickly turn into a maintenance nightmare. With JavaScript, you could easily add an event handler function to all the buttons on the page no matter how many there were, using something like this:
        <br><img src="../src/img/events8.jpg">
        <br>Finally, many common server configurations will disallow inline JavaScript, as a security measure. <b>You should never use the HTML event handler attributes</b> — those are outdated, and using them is bad practice.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'The Event Object',
      sectionLinks: [
        {
          linkTitle: 'Event reference',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/Events`,
        },
        {
          linkTitle: 'HTML DOM Event Objects',
          linkSource: `https://www.w3schools.com/jsref/obj_events.asp`,
        },
        {
          linkTitle:
            'What exactly is the parameter e (event) and why pass it to JavaScript functions?',
          linkSource: `https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'e.preventDefault()',
          articleLinks: [
            {
              linkTitle: 'Event.preventDefault()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'e.target',
          articleLinks: [
            {
              linkTitle: 'Event.target',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Event/target`,
            },
            {
              linkTitle: 'target Event Property',
              linkSource: `https://www.w3schools.com/jsref/event_target.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'e.currentTarget',
          articleLinks: [
            {
              linkTitle: 'Event.currentTarget',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget`,
            },
            {
              linkTitle: 'currentTarget Event Property',
              linkSource: `https://www.w3schools.com/jsref/event_currenttarget.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'e.composedPath()',
          articleLinks: [
            {
              linkTitle: 'Event.composedPath()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'e.stopPropagation()',
          articleLinks: [
            {
              linkTitle: 'stopPropagation() Event Method',
              linkSource: `https://www.w3schools.com/jsref/event_stoppropagation.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'e.key',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Event Propagation & Delegation',
      sectionLinks: [
        {
          linkTitle: 'What is event bubbling and capturing?',
          linkSource: `https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing`,
        },
        {
          linkTitle: 'Event order',
          linkSource: `https://www.quirksmode.org/js/events_order.html`,
        },
        {
          linkTitle: 'Event Propagation & Event delegation',
          linkSource: `https://medium.com/@marjuhirsh/event-propagation-event-delegation-7d3db1baf02a`,
        },
        {
          linkTitle: 'stopPropagation() Event Method',
          linkSource: `https://www.w3schools.com/jsref/event_stoppropagation.asp`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Bubbling',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Capturing',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Types of Events',
      sectionLinks: [
        {
          linkTitle: 'HTML DOM Events',
          linkSource: `https://www.w3schools.com/jsref/dom_obj_event.asp`,
        },
        {
          linkTitle: 'Event reference',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/Events`,
        },
      ],
      sectionExplanations: [
        `Some events, such as click, are available on nearly any element. Others are more specific and only useful in certain situations: for example, the play event is only available on some elements, such as 'video' tag.`,
      ],
      sectionArticles: [
        {
          articleTitle: '‘click’ event',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: '‘keypress’ event',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: '‘scroll’ event',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: '‘mouseover’ event',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: '‘mouseout’ event',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: '‘change’ event',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: '‘hashchange’ event',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: '‘load’ event',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: '‘input’ event',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Keyboard Events',
      sectionLinks: [
        {
          linkTitle: 'KeyboardEvent',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'keypress',
          articleLinks: [
            {
              linkTitle: 'Document: keypress event',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'keyup',
          articleLinks: [
            {
              linkTitle: 'Document: keyup event',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'keydown',
          articleLinks: [
            {
              linkTitle: 'Document: keydown event',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Form Events & PreventDefault',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Input & Change Events',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Passing Arguments to Event Handlers',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Events on Multiple Elements',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Lifecycle DOM Events',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const webAPIs = {
  title: 'Web APIs',
  sections: [
    {
      sectionTitle: 'The Intersection Observer API',
      sectionLinks: [
        {
          linkTitle: 'Intersection Observer API',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'navigator',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'navigator.language',
          articleLinks: [
            {
              linkTitle: 'Navigator.language',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'navigator.geolocation.getCurrentPosition()',
          articleLinks: [
            {
              linkTitle: 'Geolocation API',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'localStorage',
      sectionLinks: [
        {
          linkTitle: 'Window.localStorage',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'localStorage.setItem()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'localStorage.getItem()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'localStorage.removeItem()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'JSON.stringify()',
          articleLinks: [
            {
              linkTitle: 'JSON.stringify()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'JSON.parse()',
          articleLinks: [
            {
              linkTitle: 'JSON.parse()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'window',
      sectionLinks: [
        {
          linkTitle: 'Window interface',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'window.location.reload()',
          articleLinks: [
            {
              linkTitle: 'The Window.location read-only property',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/location`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'window.location.hash',
          articleLinks: [
            {
              linkTitle: 'The Window.location read-only property',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/location`,
            },
            {
              linkTitle: 'The hash property',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Location/hash`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'window.history.pushState()',
          articleLinks: [
            {
              linkTitle: 'The Window.history read-only property',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/history`,
            },
            {
              linkTitle: 'The history.pushState() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/History/pushState`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'window.open(‘url’, ‘_blank’)',
          articleLinks: [
            {
              linkTitle: `The Window interface's open() method`,
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/open`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'window.pageXOffset vs scrollX',
          articleLinks: [
            {
              linkTitle:
                'The read-only scrollX property of the Window interface',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'window.pageYOffset vs scrollY',
          articleLinks: [
            {
              linkTitle:
                'The read-only scrollY property of the Window interface',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'window.scrollTo()',
          articleLinks: [
            {
              linkTitle: 'Window.scrollTo()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'window.innerHeight',
          articleLinks: [
            {
              linkTitle:
                'The read-only innerHeight property of the Window interface',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'FormData',
      sectionLinks: [
        {
          linkTitle: 'FormData interface',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/FormData`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'new FormData()',
          articleLinks: [
            {
              linkTitle: 'The FormData() constructor',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData`,
            },
          ],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const modulesAndTooling = {
  title: 'Modern JavaScript Development: Modules and Tooling',
  sections: [
    {
      sectionTitle: 'Introducing to Javascript Modules',
      sectionLinks: [
        {
          linkTitle: 'JavaScript modules',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules`,
        },
        {
          linkTitle: 'CommonJS …what, why and how',
          linkSource: `https://medium.com/@cgcrutch18/commonjs-what-why-and-how-64ed9f31aa46`,
        },
        {
          linkTitle: 'Understanding ES6 Modules',
          linkSource: `https://www.sitepoint.com/understanding-es6-modules/`,
        },
        {
          linkTitle:
            'How JavaScript works: the module pattern + comparing CommonJS, AMD, UMD, and ES6 Modules',
          linkSource: `https://blog.sessionstack.com/how-javascript-works-the-module-pattern-comparing-commonjs-amd-umd-and-es6-modules-437f77548437`,
        },
        {
          linkTitle: 'ES6 In Depth: Modules',
          linkSource: `https://hacks.mozilla.org/2015/08/es6-in-depth-modules/`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Exporting and Importing in native ES6 Modules',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `In moduleName.js names, it's also a convention to use camelCase names.`,
        `ES6 Modules are native to Javascript.`,
        `There is no need to use the defer attribute when loading a module script; modules are deferred automatically.`,
        `Module features are imported into the scope of a single script — they aren't available in the global scope. Therefore, you will only be able to access imported features in the script they are imported into, and you won't be able to access them from the JavaScript console, for example.`,
        `Normal code (without asynchronous code) inside imports are executed first, so before the code in the module that we make the imports.`,
        `All the importing statements are hoisted to the top and because this we usually write all the imports statements at the top of the file.`,
        `All modules are executed in 'strict mode' by default, so you don't need to write 'use strict' at the beginning of the module.`,
        `Understand how to export and import values between modules.`,
        `You can import a module without importing any value.`,
        `When you use Parcel you can omit the .js because with Parcel ES6 modules also work without the extension ( import './moduleName'; ).`,
        `We can say that a module exports kind of a public API because everything else that we don’t export stays private inside of the module.`,
        `Imports are a live connection to exports (imports are not copies of the export).`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Named exports/imports in ES6 Modules',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `Export/import multiple things with {} & change name of exports/imports using ‘as’ (with Named Imports you have to give to imports values the same name as name you defined in export module and you have to put them inside curly braces).`,
        `Import all the exports of a module at the same time with * and 'as' by creating a module object (when we import everything from a module with * the convention is to use the first letter of the namespace as capital letter, just like in classes. This will create a namespace for all of the values exported from that module, so basically this we'll create an object containing everything that is exported from the module).`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Default exports/imports in ES6 Modules',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `Use only one default export per module`,
        `When you import a default export you can imported without {} and you can give any name that you want. We can give to default import any name that we want because default export don't have a name.`,
        `Default Export is designed to make it easy to have a default function provided by a module, and also helps JavaScript modules to interoperate with existing CommonJS and AMD module systems.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'The Module Pattern with IIFE',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `Module Pattern was used before ES6 Modules in order to implement modules in Javascript.`,
        `Just like in regular modules, the main goal of the Module Pattern is to encapsulate functionality, to have private data and to expose a public API and the best way of achieving all that is by simply using a function, because functions give us private data by default and allow us to return values, which can become our public API.`,
        `We implement Module Pattern by writing a function and usually we write an IIFE (Immediately Invoked Function Expression) and the reason for that is because this way we don't have to call it separately and we can also ensure that it's only called once. So it's very important that this function is only created once because the goal of this function is not to reuse code by running it multiple times, the only purpose of this function is to create a new scope and return data just once.`,
        `All the data that IIFE returns need to be stored in a variable because if you don’t do that the return data kind of disappears into nothing.`,
        `The problem with Module Pattern is that if we wanted one module per file, like we have with ES6 modules, then we would have to create different scripts and link all of them in the HTML file and that then creates a couple of problems, like we have to be careful with the order in which we declare them in HTML, and we would have all of the variables living in the global scope, and finally, we also couldn't bundle them together using a module bundler. So the module pattern that we just learned about does indeed work quite good but it has some limitations and that's exactly the reason why native modules were added to the language in ES6.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'CommonJS & AMD Modules',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `Besides native ES6 Module and the Module Pattern, there are also other module systems that have been used by JavaScript in the past, but again, they were not native Javascript, so they relied on some external implementations, and two examples are AMD Modules and CommonJS module.`,
        `CommonJS modules are important for us because they have been used in Node.js for almost all of its existence, so only very recently ES6 Modules have actually been implemented in Node.js. The big consequence of this is that almost all the modules in the NPM repository, so all these modules that we can use in our own code still use the CommonJS module system  and the reason for that is that NPM was originally only intended for Node.js. Only later NPM became the standard repository for the whole JavaScript world and so now we are basically stuck with CommonJS and so therefore, you will see probably a lot of CommonJS still around.`,
        `Just like ES6 modules, in CommonJS one file is one module. And we export something from a module using ' export. ' and then the name of the export. Now of course, this is not going to work in the browser but it would work in Node.js. The imports are made using <  const { importedValue } = require('./moduleName.js');   >.`,
        `We can’t use libraries that uses the commonJS module system without a module bundler, so we cannot directly import it into our code without a module bundler.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Introduction to NPM',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `If you want to use NPM you need to install Node.js first, because NPM comes together with Node.js.`,
        `<b>NPM steps to install a package</b>:
        <br>1. Checking if we actually have NPM installed ' <b>npm -v</b> ' . If you get any number in the terminal and it doesn't matter which one, then you're good. If you don’t get any number and want to use NPM you need to install Node.js first, because NPM comes together with Node.js.
        <br>2. In each project in which we want to use NPM, we need to start by initializing it ' npm init ' . Is important that before you run ' <b>npm init</b> ' make sure that you are in your actual application folder.
        <br>3. ' npm init ' creates automatically <b>package.json</b> and <b>node_modules</b> folder
        <br>4. Install a package ' <b>npm install <i>packageName</i></b> ' or ' <b>npm i <i>packageName</i></b> '`,
        `<b>NPM shortcuts</b>:
        <br>1.  npm <b>-v</b>
        <br>2.  npm <b>init</b>
        <br>3.  npm <b>i</b> packageName   or   npm i packageName --save-dev         
        `,
        `<b>What is NPM?</b> <br>- Node Package Manager. <br>- Pre-installed with Node.js. <br>- NPM it's both a software on our computer and a package repository. <br>- Easily install modules/packages on your system.<br>- Modules are basically Javascript libraries. <br>- Makes it easy for developers to share & reuse code.`,
        `<b>Why we actually need something like NPM? Why do we actually need a way of managing packages or dependencies in our project?</b>
        <br>- Back in the day before we had NPM, we used to include external libraries right into our HTML, so basically using the script tag and this would then expose a global variable that we could use. This actually creates a couple of problems, at least in a big project.
        <br>- First, it doesn't make much sense having the html loading all our javascript, that is just really messy. <br>- Second, many times we would actually download a library file to our computer directly, for example, a jQuery JavaScript file but then whenever a new version would come out, we would have to manually go to the site, download the new version, change the file in our file system manually and then include it in the HTML again, maybe with some other name, with some other version number.
        <br>- And a third reason is that before NPM there simply wasn't a single repository that contained all the packages that we might need and so this made it even worse and more difficult to manually download libraries and manage them on our computers`,
        `<b>package.json file</b>
        <br>- Stores the entire configuration of our project.
        <br>- Manifest file that have all your app info.
        <br>- List dependencies (name & version).
        <br>- Specify if versions should be updated.
        <br>- Create NPM scripts.
        <br>- Easily create with 'npm init'.`,
        `<b>node_modules folder</b>
        <br>- Contains everything about package.json dependecies, and of course the more packages we install they will all get stored into the node_modules folder.
        <br>- Manifest file that have all your app info.
        <br>- List dependencies (name & version).
        <br>- Specify if versions should be updated.
        <br>- Create NPM scripts.
        <br>- Easily create with 'npm init'.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Bundling With Parcel and NPM Scripts',
      sectionLinks: [
        {
          linkTitle: 'Parcel - The zero configuration build tool for web',
          linkSource: `https://parceljs.org/`,
        },
      ],
      sectionExplanations: [
        `Parcel is just another build tool which is also on NPM and you need to use NPM to install it.`,
        `A devDependency is like a tool that we need to build our application but it's not a dependency that we actually include in our code, so it's simply a tool and so that's why it's called a devDependency because we can use it to develop our project and so therefore it appears in a new field in our package.json file.`,
        `We use Parcel in the terminal because Parcel is basically just another command line interface. In order to still be able to use Parcel in the terminal, we have two options: so we can use something called NPX or we can use NPM scripts.`,
        `With Parcel you don't need to specify the entire path to a library. In all module bundlers there's no need for specifying the entire path to any module, it’s enough to write the name of the package/module and Parcel will then automatically find the path to the package/module and will import it like when we specified the entire path without us having to manually type the entire path to the package/module.`,
        `Parcel works with all kinds of assets, even with HTML, CSS, SASS files, images, svg and of course also all kinds of modules, so not only ES6 modules but this is also going to work with CommonJS modules.`,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Configuring Babel and Polyfilling',
      sectionLinks: [
        {
          linkTitle: 'Babel is a JavaScript compiler',
          linkSource: `https://babeljs.io/`,
        },
      ],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Version control with Git',
      sectionLinks: [
        { linkTitle: 'Git', linkSource: `https://git-scm.com/` },
        {
          linkTitle: 'Git cheat sheet',
          linkSource: `https://education.github.com/git-cheat-sheet-education.pdf`,
        },
      ],
      sectionExplanations: [
        `<b>Configure git and create a repository + .gitignore for specify folders/files that you don't want into your repository</b>
        <br>1. git init
        <br>2.1. You need to have an account on Github or any other service that is similar to GitHub in order to store our local repository in the cloud.
        <br>2.1. git config --global user.name GithubUsername
        <br>2.2. git config --global user.email e-mailAdress
      `,
        `Before steps below we need to have in our directory created the .gitignore file. If VScode didn't create it automatically for you, then you need to create this file manually.`,
        `<b>Commit files to repository</b>
        <br>3. git status
        <br>4. git add -A
        <br>5. git commit -m “commitMessage”
        `,
        `<b>Restore a previous commit</b>   or   <b>restore a commit by ids</b>
        <br>6.1. git log
        <br>6.2. git reset --hard HEAD   or   git reset --hard idOfCommit
        `,
        `<b>Create, switch and merge a branch</b>
        <br>7.1. git branch (list branch/s that you currently have)
        <br>7.2. git branch nameOfBranch (create)
        <br>7.3. git checkout nameOfBranch (switch)
        <br>7.4. git merge nameOfBranch (merge)
        `,
        `<b>Share</b>   &   <b>update</b>
        <br>7.1. git remote add origin https://github.com/GithubUsername/projectName.git
        <br>(with this code we let our local repository know about this https://github.com/GithubUsername/projectName.git remote repository)
        <br>7.2. git push origin [name of branch you want to push. ex: master]
        <br>(we can now push code to this remote branch, which remember is called "origin", and of course, you could give this “origin” another name, but "origin" is simply the standard name)
        `,
        `<b>Delete branch locally</b>   &   <b>remotely</b>
        <br>7.1. git branch -d localBranchName (delete branch locally)
        <br>7.2. git push origin --delete remoteBranchName (delete branch remotely)
        `,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Refactoring Our Code: The DRY Principle',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Prettier',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `Steps to install and format Prettier:
        <br>1. Install the extension globally
        <br>2. Settings → Default Formatter → select Prettier
        <br>3. Settings → Format on Save
        <br>4. Create .prettierrc with you own preferences
        <br>// prettier-ignore
      `,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Terminal commands',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        `dir = show you the contents of the current folder.
        <br>cd .. = we can go up and down the file tree.
        <br>cd ../.. = move up two levels.
        <br>cd folderName = move into a folder. Remember Tab key for autocomplete!
        <br>cd /d D:╲ = change the drive
        <br>mkdir folderName = create a folder.
        <br>rmdir folderName = delete a empty folder.
        <br>edit fileName.js = create a file.
        <br>edit fileName1.js fileName2.js fileName3.js = create multiple files at once.
        <br>del fileName.js = delete a file.
        <br>mv fileName.js ../ = move a file to the parent folder.
        <br>clear = clear the terminal.
      `,
      ],
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

export const data = [
  engineAndRuntime,
  variablesValues,
  operators,
  controlingProgamLogicAndFlow,
  loops,
  dataStructuresArrays,
  dataStructuresObjects,
  dataStructuresSets,
  dataStructuresMaps,
  oop,
  standardBuildInObjects,
  functionalProgramming,
  asynchronous,
  domManipulation,
  events,
  webAPIs,
  modulesAndTooling,
];
