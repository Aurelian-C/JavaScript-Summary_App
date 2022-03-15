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

const javascriptEngineAndRuntime = {
  title: 'JavaScript Engine & Runtime',
  sections: [
    {
      sectionTitle: 'Javascript Engine',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [
        "Javascript Engine is a 'program' that executes JavaScript code. Any JavaScript engine (ex. V8 for Google Chrome) always contains a Call Stack and a Memory Heap. The Call Stack is where our code is actually executed, using something called execution contexts. The Memory Heap is an unstructured memory pool which stores all the objects that our application needs.",
        "Almost everyone that has worked with JavaScript has heard of the <b>V8 engine, the idea of the JavaScript engine</b>, and most people know that <b>JavaScript is a single threaded language</b> that it uses a <b>Callback Queue</b>. You may also hear phrases like <b>JavaScript is an interpreted language</b>. What is this engine that we speak of? If I write some code like ' const isHappy = true;  ', how does the computer read this code?",
        "If I gave a computer with a CPU a file that is a JavaScript file and I tell it 'Read this file and do something for me', the computer only understands 1 and 0 at the end of the day, so <b>the computer doesn't really know what JavaScript is</b>. So how are we able to communicate using a JavaScript file so that the computer do something for me? And this is the first step in our learning, and that is the JavaScript engine, <b>by having a JavaScript engine, it allows you to give this engine the JavaScript file and this engine is going to understand the Javascript file and tell the computer what to do</b>. <i>In a sense, you just created a translator so you can communicate with somebody that doesn't know your language</i>, and <b>this special engine called JavaScript Engine understands JavaScript</b>. Our computer finally understands us because of this JavaScript engine.",
        "But do you think there's one JavaScript engine or many JavaScript engines? Well, <b>there are a ton of engines and they're called ECMAScript engines</b>. So any time we use an engine, we're able to give it a JavaScript file and this JavaScript file gets understood by the engine and it allows this engine to communicate and tell the machine, the computer, to do what we ask it to do with JavaScript.",
        "Now, these engines are written by programmers, for example, <b>V8 engine is written in C++</b>, but why do people write these engines? 2008 marked a really pivotal moment in history when it comes to JavaScript because V8 was released by Google. Before then, most browsers used engines that were very basic, which meant that JavaScript was a little bit slow. You see, Google had this problem, they had something called Google Maps and Google Maps, as you know, requires a lot of power, and all the previous engines before V8 would make Google Maps very, very slow on the browser. So with Google Maps and their own Chrome browser, they said, we're going to <b>write our own JavaScript engine, the V8 engine, so that JavaScript runs way faster</b> on the browser than it's done previously and in 2008 they released V8.",
        "<i>But what is inside this engine, this magical machine that understands JavaScript, it reads our code and then it runs this code? Let's get into that in the upcoming lecture, JavaScript Runtime</i>.",
        "So we know that this thing called the JavaScript engine takes our written JavaScript code and does some magic to tell the computer to do what we want it to do. So what's happening inside of this engine, and here's the tricky part, as we know this engine can be built by anybody. Yes, that means you can build your own JavaScript engine, but it's a lot of work and at the end of the day it's just a program. And the V8 engine, which is the most popular, most common, and some would say the fastest JavaScript engine that the Chrome browser and Node.js uses, this engine is written in C++, a low level programming language.",
        "What problem or problems do you see with everybody creating their own engines in JavaScript? Can we just create our own engine and all of a sudden, boom, there it is, we have our JavaScript engine? Well, yes, you can definitely do that, but remember our list on wikipedia, how it was called <b>ECMAScript engines and not JavaScript engines</b>. That's because if everybody can just create a JavaScript engine, it'll just be total chaos, which is why ECMAScript was created. It tells people 'Hey, here's the standard and how you should do things in JavaScript and how it should work', and <b>ECMAScript is the governing body of JavaScript that essentially decides how the language should be standardized</b>, so it tells engine creators `This is how JavaScript should work`, but internally, how you build the engine is up to you as long as it conforms to the standards.",
        'A JavaScript engine is a <u>computer program</u> that you give JavaScript code to and it tells the computer how to execute it. Basically a <u>translator for the computer</u> between JavaScript and a language that the computer understands. But what happens inside of the engine? Well, that depends on the engine. There are many JavaScript Engines out there and typically they are created by web browser vendors. All engines are standardized by ECMA Script or ES.',
        '<b>Nifty Snippet</b>: 2008 was a pivotal moment for JavaScript when Google created the <b>Chrome V8 Engine</b>. The V8 engine is an open source highperformance JavaScript engine, <b>written in C++</b> and <b>used in the Chrome browser</b> and <b>powers Node JS</b>. The performance outmatched any engine that came before it mainly because it <b>combines 2 parts of the engine, the <u>interpreter</u> and the <u>compiler</u></b>. Today, all major engines use this same technique.',
      ],
      sectionArticles: [
        {
          articleTitle:
            'Interpreter/Compiler/JIT Compiler and Writing Optimized Code',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            '<b>The Parser</b>: Parsing is the <b>process of analyzing the source code</b>, checking it for errors, and breaking it up into parts.',
            '<b>The Interpreter</b>: An interpreter directly <b>executes each line of code line by line, without requiring them to be compiled into a machine language program</b>. Interpreters can use different strategies to increase performance. They can parse the source code and execute it immediately, translate it into more efficient machine code, execute precompiled code made by a compiler, or some combination of these. <b>In the V8 engine, the interpreter outputs bytecode</b>.',
            '<b>The Compiler</b>: The compiler works ahead of time to convert instructions into a machine-code or lowerlevel form so that they can be read and executed by a computer. It <b>runs all of the code and tries to figure out what the code does and then compiles it down into another language that is easier for the computer to read</b>.',
            "<b>The Combo</b>In modern engines, the <b>interpreter starts reading the code line by line</b> while the <b>profiler watches for frequently used code and flags then passes is to the compiler to be optimized</b>. In the end, the JavaScript engine takes the bytecode the interpreter outputs and mixes in the optimized code the compiler outputs and then gives that to the computer. This is called <b>'Just in Time'</b> or <b>JIT Compiler</b>.",
            "Let's talk about <b>interpreters</b> and <b>compilers</b>, which, as we can see, are important pieces in our JavaScript engine.",
            "You see, <b>in programming, there are generally <u>two ways of translating to machine language</u> or something that our computers can understand</b> and what we're going to talk about here actually applies to most programming languages, not just JavaScript, Python, Java, C++, any language you can think of is going to use some of these concepts, so it's very important.",
            "Let's start with the first one, the interpreter. <b>With an <u>interpreter</u>, what we do is we <i>translate and read the files line by line</i></b>.",
            "A <b><u>compiler</u></b>, unlike an interpreter, <b><i>doesn't translate on the fly</i></b>. What it does is it <b><i>works ahead of time to create a translation of what code we've just written and it compiles down to usually a language that can be understood by our machines. A compiler take one pass through the code and try to understand what the code does</i></b>. And it's going to take the program in JavaScript or any type of language and write a new program in your new language, let's say to programming language.",
            'So <i>compiler tries to understand what we want to do and takes our language and changes it into something else and this usually happens into something called a lower level language, such as machine code</i>. Now, in some respects, all languages have to be interpreted and compiled because it has to run (it has to be interpreted) and it also has to most likely get translated into something low level like machine code.',
            "But the main takeaways is this: <b>there are two ways to run JavaScript using an <u>interpreter</u> or a <u>compiler</u></b>. Now, I know it's still a little bit fuzzy, but if I ask you, why would we want to do one over the other? What are the pros and cons on each? What do you think that is? Why would you pick one over the other?",
            '<b>Babel + TypeScript</b>: Have you heard of Babel or TypeScript? They are heavily used in the Javascript ecosystem and you should now have a good idea of what they are: <b>Babel is a Javascript compiler that takes your modern JS code and returns  browser compatible JS (older JS code). Typescript is a superset of Javascript that compiles down to Javascript. Both of these do exactly what compilers do: take one language and convert into a different one!</b>',
            "Let's have a look at the pros and cons of each: First off, <b>interpreters are quick to get up and running</b>, right? Because if we want to run a Javascript code, with an interpreter we don't have to convert the code into another language, like language acts like I showed you with a compiler. There's no compilation step before you can start running your code, you just give the code to an interpreter and the interpreter starts translating their first line and just runs the code for us. Because of this, an interpreter is a natural fit for something like JavaScript and JavaScript originally was created for the browser, so being able to interpret JavaScript and run it as fast as possible. Well, that was ideal and this is exactly why it JavaScript used interpreters at the beginning, but there's a cons with using an interpreter. And this is the same problem that Google had back in the day when they had Google Maps running a lot of JavaScript, but it will get slower and slower and slower because <b>the problem with interpreters is that when you're running the same code more than once, for example, if you're in a loop where we're running a piece of code over and over and over, even though it gives us the same result, it can get really, really slow. The compiler actually helps us here. It takes a little bit more time to start up because it has to go through that compilation step at the beginning, go through our code, understand it and split it out into a another language. But the compiler will be smart enough that when it sees code like loop over a thing and the loop has the same inputs returning the same outputs, well, it can actually just simplify that code</b>.",
            "<b>What if instead of using the compiler and interpreter, we combine these two and create something called a <u>JIT compiler</u> or Just In Time compiler? And this is exactly what browsers started doing, browser's started mixing compilers, specifically these JIT compilers for Just In Time compilation to make the engines faster</b>.",
            "So is JavaScript an interpreted language? I mean, yes, initially when JavaScript first came out, you had JavaScript engines such as Spider Monkey that interpreted JavaScript to bytecode and that engine was able to run inside of our browsers to tell our computers what to do but things have evolved. <i>Now we don't have just interpreters, we also use compilers to optimize the code</i>. So this is a common misconception when somebody says JavaScript is an interpreted language. Yes, there is some truth to it but it actually depends on the implementation, you can make an implementation of JavaScript, of the JavaScript engine that perhaps only compiles.",
            'We want to write <b>code that helps the compiler make its optimizations</b>, not work against it making the engine slower.',
            "Why do we just learn all of this? Well, because now we know a critical part in being a JavaScript programmer, <b>we want to write code in a way that helps the compiler make optimizations</b>. We don't want to work against it and make things slow throughout the rest of the course. We're going to learn different ways to write efficient code. But I want to give you some basic things to watch out for when working with JavaScript Engine. Now, keep in mind that most of these things I'm going to show you will seem like things you don't really use or see that much anymore, and that's because most developers don't use them, since they can be bad for optimisations. But it never hurts to know what they are. It doesn't mean that you should never use them, but that the use cases for them are very rare. So here's the list: eval(), arguments, for... in, with, detele",
          ],
        },
        {
          articleTitle: 'Memory Heap & Call Stack',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            "The JavaScript engine does a lot of work for us, but 2 of the biggest jobs are reading and executing it. We need <b>a place to store and write our data</b> and <b>a place to keep track line by line of what's executing</b>. That's where the <b>Call Stack</b> and the <b>Memory Heap</b> come in.",
            'The Memory Heap is <b>a place to <u>store and write information</u></b> so that we can use our memory appropriately. It is <b>a place to allocate, use, and remove memory as needed</b>.',
            'The Call Stack <b>keeps track of where we are in the code, so we can run the program in order</b>. Things are placed into the Call Stack on top and removed as they are finished. It <b>runs in a first in last out mode. <u>Each call stack can point to a location inside the Memory Heap</u></b>',
            "What is a program? Well, a program has to do some simple things. It has to <b>allocate memory</b>, otherwise we wouldn't be able to have variables or even have a file on our computer. It also has to <b>parse and execute scripts</b>, which means read and run commands.",
            'The Javascript engine consists of two parts, a <b>Memory Heap<b> and a <b>Call Stack<b>. The <b><u>Memory Heap</u><i>is where the memory allocation happens</i> and the <u>Call Stack</u> <i>is where your code is read and executed</i></b>, Call Stack tells you where you are in the program.',
            "<i>We learned that the JavaScript engine does a lot of work for us, but the biggest thing is actually reading our code and executing it</i>. And what do you think the two most important things in this step are? That is, one, <i>we need a place to store and write information, that is to store our variables, our objects, our data of our apps and a place to actually run and keep track of what's happening line by line on our code</i>.  Well, we use <b>Call Stack</b> and <b>Memory Heap</b> for that.",
            '<b>We need the Memory Heap as a place to <u>store and write information</u></b>, <i>because at the end of the day all programs are just read and write operations, that way we have a place to allocate memory, use memory and release memory</i>. And two, <b>with the Call Stack, we need a place to <u>keep track of where we are in the code</u> so that we can run the code in order</b>. And with these two things, the JavaScript engine is able to do that.',
            'So to review the <b>Memory Heap is where the memory allocation happens</b> and the <b>Call Stack is where the engine keeps track of where your code is in its execution</b>.',
            '<b>We can think of Call Stack as a region in memory which operates in first-in/last-out mode.</b>',
            '<i>The Call Stack stores functions and variables as your code executes at each entry state of the stack, also called the stack frame and it runs in a first-in/last-out mode, that is the first one in is the last one getting popped up. And we can keep adding  to the stack and eventually it pops, pops, pops all the function calls until we are done with our commands and we use the Memory Heap to actually point to different variables, objects and data that we store so that we know where to look. And by the way, this is the way it works in most programming languages, we have calls stacks and memory heaps and these are the two locations that JavaScript remembers</i>.',
            '<i>Now, since every JavaScript engine has different implementations, where variables are allocated is not 100% the same all the time. So a good way to think about it is this</i> <b>simple variables can usually be stored on the stack</b> and <b>data structures like objects, arrays and functions are stored in Memory Heap</b>.',
          ],
        },
        {
          articleTitle: 'Memory Leaks & Stack Overflow',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            "<b>Memory leaks</b> happen when you have <b><u>unused memory</u></b>, such as variables that are declared globally but you don't use them, but they's still there. Well, <i>by having unused memory just laying around, it fills up the Memory Heap</i> and that's why you might hear why global variables are bad. Global variables are bad because if we don't forget to clean up after ourselves, we fill up the Memory Heap and eventually the browser will not be able to work.",
            'So what happens if you keep calling functions that are nested inside each other? When this happens it’s called a <b>stack overflow</b>. Example below:',
            '<img src="../src/img/recursion.jpg">',
            "<i>What stack overflow means? Well, stack overflow is this when a stack is overflowing, kind of like we talked about Memory Leaks and how the Memory Heap of a JavaScript engine can overflow. Well, with stack overflow, this happens when the Call Stack just gets bigger and bigger and bigger until it just doesn't have enough space anymore</i>.",
            "<i>What happens if we keep calling functions nested inside of each other over and over and over so that we keep growing the Call Stack until it gets larger and larger and larger and larger and larger, until we can do it anymore? Well, that's called</i><b>stack overflow</b>.",
            "<b><u>Recursion</u> is a <i>function calling itself</i></b>, there are some cases where things like recursion is quite useful, but that's something beyond the scope of this course and it's something I teach in my other courses for data structures and algorithms. But <b>recursion is one of the most common ways to create a stack overflow</b> or a lot of functions nested inside of each other to create that stack that keeps growing and growing and growing. In this case, if I run inception function, it's going to keep adding things onto the stack more and more and more. So what do you think happens if I run the inception function? I get an error like <b>Uncaught RangeError: Maximum call stack size exceeded</b>. Now back in the day with Chrome, it wouldn't give you this error and the browser will eventually just crash, but in order to prevent the browser from crashing, if it reaches a limit, it's going to print out this error saying, hey, you've just created a stack overflow.",
            "Let's create our own memory leak: const array = []; for (let i = 5; i > 1, i++) { array.push(i-1) }",
            "Now, when I run this code above, what's going to happen is we're going to run an infinite loop and we fill up our memory and there's nothing left for us to use and well, we're going to crash the browser. Now, this was a silly example, and most likely you're not going to do in your programs, but there are <b>3 common memory leaks</b> that happened that I want to show you so you can avoid them in your application.",
            "<b>The first one is <u>global variables</u></b>. <i>If I just keep adding variables to my environment, well, we're adding more and more pieces of memory</i>.",
            "<b>The second one is <u>event listeners</u></b>. Now, <i>the event listeners is one of the most common ways to leak memory and that is you add an event listeners and you never remove them when you don't need them</i>, so that you keep adding, keep adding, keep adding event listeners and because they're just there in the background, you forget about them and next thing you know, you create a memory leak. This happens a lot, especially if you go back and forth between single page applications where you're not removing the event listeners off the page and as a user goes back and forth, back and forth, the memory keeps increasing more and more as more event listeners are added.",
            '<b>The thirth one is setInterval()</b>. <i>This setInterval(), unless we clear it and stop it, is going to keep running and running and running</i>.',
            '<i>Just something to be aware of that <b>memory is limited</b>. That is when it comes to Call Stack and Memory Heap. Those are two places that JavaScript remembers or stores memory and we have limited use of them</i>. So for us to write efficient code, we have to be conscious to not have stack overflow or a memory leak and to manage that memory well.',
          ],
        },
        {
          articleTitle: 'Garbage Collection',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            '<u>JavaScript is a garbage collected language</u>. If you allocate memory inside of a function, JavaScript will automatically remove it from the memory heap when the function is done being called.',
            'JavaScript completes garbage collection with a <b>mark</b> and <b>sweep</b> method.',
            '<img src="../src/img/garbage_collection.jpg">',
            'In the example above a <b>memory leak</b> is created. <b>By changing the variable person from an object to a string, it leaves the values of first and last in the memory heap and does not remove it</b>. This can be avoided by trying to <u>keep variables out of the global namespace, only instantiate variables inside of functions when possible</u>. JavaScript is <b>a single threaded language</b>, meaning only one thing can be executed at a time. It only has one call stack and therefore it is a <b>synchronous</b> language.',
          ],
        },
        {
          articleTitle: 'Single Threaded Model',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            "Each browser has its own version of <b>JavaScript Runtime</b> with a set of <b>Web API's</b>, methods that developers can access from the <b><u>window object</u></b>. <b>In a synchronous language, only one thing can be done at a time</b>. Imagine an alert on the page, blocking the user from accessing any part of the page until the OK button is clicked. If everything in JavaScript that took a significant amount of time, blocked the browser, then we would have a pretty bad user experience. This is where <b>concurrency</b> and the <b>event loop</b> come in.",
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
        'Javascript is a <u><b>single threaded language</b></u>. This means it has <u>one Call Stack</u> and <u>one Memory Heap</u>. As expected, it executes code in order and must finish executing a piece code before moving onto the next.',
        '<b>The heart of any JavaScript <u>Runtime</u> is always a JavaScript <u>Engine</u>. Without an engine there is no runtime and there is no JavaScript at all</b>.',
        'However, <i><b><u>the engine alone is not enough</i>. In order to work properly, we also need access to the <i>web APIs</i></u> (ex. DOM, Timers, Fetch API etc)</b>.',
        'So essentially <b>web APIs are functionalities provided to the engine, but which are actually not part of the JavaScript language itself</b>. <i>JavaScript simply gets access to these APIs through the global window object</i>.',
        'A typical JavaScript runtime also includes a so called <b><u>callback queue</u>. This is a data structure that contains all the callback functions that are ready to be executed</b>. For example we attach event handler functions to DOM elements like a button to react to certain events, and these event handler functions are also called callback functions. So as the event happens, for example a click, the callback function will be called. And here is how that actually works behind the scenes: so the first thing that actually happens after the event is that <u>the callback function is put into the callback queue</u>. Then <u>when the stack is empty the callback function is passed to the call stack</u> so that it can be executed (this happens by something called the <b>event loop</b>). <i><b>So basically the <u>event loop</u> takes <u>callback functions</u> from the <u>callback queue</u> and puts them in the <u>call stack</u> so that they can be executed. The event loop only runs once the call stack is empty and the entire Javascript file has been run once</b></i>.',
        'JavaScript is a single threaded language that can be non blocking. It has one Call Stack and it does one thing at a time. In order to not block the single thread, it can be <i><b>asynchronous with callback functions</b> and these callback functions gets run in the background through the Callback queue and then the Event Loop bring it back into the Call Stack</i>.',
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
          articleTitle: 'Callback Queue',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Job Queue or Microtask Queue',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle: 'Event Loop',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
    {
      sectionTitle: 'Execution Context and the Call Stack',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle: 'Global execution context',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            'Creation Phase (Global Object + this keyword + Hoisting)',
            'Executing Phase (Variable Environment + Initializes all variables)',
          ],
        },
        {
          articleTitle: 'Function execution Context',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            'Creation Phase (Argument object + this keyword + Hoisting)',
            'Executin Phase (Variable Environment + Initializes all variables)',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Lexical Environment',
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
      sectionTitle: 'Function Scope vs Block Scope',
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
      sectionTitle: 'Leakage of Global Variables',
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
    {
      sectionTitle: 'Scope Chain',
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
  title: 'Variables, Values and Primitive/Reference Types in JavaScript',
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

const javascriptOperators = {
  title: 'JavaScript Operators',
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
      sectionTitle: 'Dynamic vs Lexical Scope',
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

const asynchronousJavascript = {
  title: 'Asynchronous JavaScript',
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
      sectionTitle: 'Top-Level ‘ await ‘ (ES2022)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionExplanations: [],
      sectionArticles: [
        {
          articleTitle:
            'Top-Level ‘await’ work only in modules. With ES2022 you can use ‘await’ keyword outside of an ‘async function’, but only in modules.',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
        {
          articleTitle:
            'If one module imports a module which has a Top-Level ’ await ’, then the importing module will wait for the imported module to finish the blocking code. So Top-Level ‘ await ‘ is in fact blocking the execution not only in the imported module, but also in the module that is importing the imported module.',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [],
        },
      ],
    },
  ],
};

const domManipulation = {
  title: 'Document Object Model (DOM)',
  sections: [
    {
      sectionTitle: 'The Document Object',
      sectionLinks: [
        {
          linkTitle: 'Introduction to the DOM',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction`,
        },
        {
          linkTitle: 'HTML DOM',
          linkSource: `https://www.w3schools.com/js/js_htmldom.asp`,
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
        'The DOM is automatically created by the browser as soon as the HTML page loads.',
        'The DOM, DOM methods and DOM properties are actually part of something called the web APIs. Now, besides the DOM, there are actually a ton more web APIs, such as Timers, the Fetch API and many more.',
      ],
      sectionArticles: [
        {
          articleTitle: 'DOM Methods (actions you can perform)',
          articleLinks: [
            {
              linkTitle: 'HTML DOM Methods',
              linkSource: `https://www.w3schools.com/js/js_htmldom_methods.asp`,
            },
          ],
          articleExplanations: [],
        },
        {
          articleTitle: 'DOM Properties (values that you can set or change)',
          articleLinks: [
            {
              linkTitle: 'HTML DOM Methods',
              linkSource: `https://www.w3schools.com/js/js_htmldom_methods.asp`,
            },
          ],
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
  title: 'JavaScript Events',
  sections: [
    {
      sectionTitle: 'Introduction to Events',
      sectionLinks: [
        {
          linkTitle: 'Introduction to events',
          linkSource: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events`,
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
      sectionTitle: '2 Ways NOT to Add Events',
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
      sectionTitle: 'Types of Events and Event Handlers',
      sectionLinks: [
        {
          linkTitle: 'HTML DOM Events',
          linkSource: `https://www.w3schools.com/jsref/dom_obj_event.asp`,
        },
      ],
      sectionExplanations: [],
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
        `All modules are executed in ‘strict mode’ by default, so you don’t need to write ‘use strict’ at the beginning of the module.`,
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
        'Export/import multiple things with {} & change name of exports/imports using ‘as’ (with Named Imports you have to give to imports values the same name as name you defined in export module and you have to put them inside curly braces).',
        `Import all the exports of a module at the same time with * and ‘as’ by creating a module object (when we import everything from a module with * the convention is to use the first letter of the namespace as capital letter, just like in classes. This will create a namespace for all of the values exported from that module, so basically this we'll create an object containing everything that is exported from the module).`,
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
        `When you import a default export you can imported without {} and you can give any name that you want. We can give to default import any name that we want because default export don’t have a name.`,
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
      ],
      sectionArticles: [
        {
          articleTitle: `What is NPM? `,
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `Node Package Manager.`,
            `Pre-installed with Node.js.`,
            `NPM it's both a software on our computer and a package repository.`,
            `Easily install modules/packages on your system.`,
            `Modules are basically Javascript libraries.`,
            `Makes it easy for developers to share & reuse code.`,
          ],
        },
        {
          articleTitle: `Why we actually need something like NPM. Why do we actually need a way of managing packages or dependencies in our project? `,
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `Back in the day before we had NPM, we used to include external libraries right into our HTML, so basically using the script tag and this would then expose a global variable that we could use. This actually creates a couple of problems, at least in a big project.`,
            `First, it doesn't make much sense having the html loading all our javascript, that is just really messy.`,
            `Second, many times we would actually download a library file to our computer directly, for example, a jQuery JavaScript file but then whenever a new version would come out, we would have to manually go to the site, download the new version, change the file in our file system manually and then include it in the HTML again, maybe with some other name, with some other version number.`,
            `And a third reason is that before NPM there simply wasn't a single repository that contained all the packages that we might need and so this made it even worse and more difficult to manually download libraries and manage them on our computers`,
          ],
        },
        {
          articleTitle: `package.json file`,
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `Stores the entire configuration of our project.`,
            `Manifest file that have all your app info.`,
            `List dependencies (name & version).`,
            `Specify if versions should be updated.`,
            `Create NPM scripts.`,
            `Easily create with 'npm init'.`,
          ],
        },
        {
          articleTitle: `node_modules folder`,
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleExplanations: [
            `Contains everything about package.json dependecies, and of course the more packages we install they will all get stored into the node_modules folder.`,
            `Manifest file that have all your app info.`,
            `List dependencies (name & version).`,
            `Specify if versions should be updated.`,
            `Create NPM scripts.`,
            `Easily create with 'npm init'.`,
          ],
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
        'Parcel is just another build tool which is also on NPM and you need to use NPM to install it.',
        `A devDependency is like a tool that we need to build our application but it's not a dependency that we actually include in our code, so it's simply a tool and so that's why it's called a devDependency because we can use it to develop our project and so therefore it appears in a new field in our package.json file.`,
        'We use Parcel in the terminal because Parcel is basically just another command line interface. In order to still be able to use Parcel in the terminal, we have two options: so we can use something called NPX or we can use NPM scripts.',
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
  ],
};

export const data = [
  javascriptEngineAndRuntime,
  variablesValues,
  javascriptOperators,
  controlingProgamLogicAndFlow,
  loops,
  dataStructuresArrays,
  dataStructuresObjects,
  dataStructuresSets,
  dataStructuresMaps,
  oop,
  standardBuildInObjects,
  functionalProgramming,
  asynchronousJavascript,
  domManipulation,
  events,
  webAPIs,
  modulesAndTooling,
];
