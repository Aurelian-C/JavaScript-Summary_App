const browserEngineAndRuntime = {
  name: 'JavaScript in the Browser: Engine & Runtime',
  sections: [
    {
      title: 'Javascript Engine (part 1)',
      id: 'javascript-engine-part-1',
      source:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Engine1.html',
      summary: [
        `<h3>JavaScript language vs Computer language</h3>
        <p>The communication bridge between JavaScript language and  computer language is JavaScript Engine (V8 for Chrome, SpiderMonkey for Firefox, etc.). The computer understand only 1 and 0, but JavaScript Engine understand the code inside JavaScript file and <i>translate that code</i> to a computer language.</p>`,
        `<h3>Interpreter & Compiler</h3>
        <p>In programming, there are generally two ways of translating to computer language. An Interpreter translate and read the JavaScript file line by line, on the fly. Initially, that's how JavaScript worked. It was interpreting, using an Interpreter. A Compiler works ahead of time to create a translation of the JavaScript file, and it compiles down to usually a language that can be understood by our computer.</p>`,
        `<h3>JIT Compilers (Just In Time Compilers) & Optimized code</h3>
        <p>Browsers started mixing Interpreters and Compilers to make the JavaScript Engine faster. So Interpreter allows us to run the code right away, and the Compiler and Profiler optimize some code as the Interpreter is still running. That's where the JIT Compiler name comes from, because compiles code when Interpreter still running.</p>
        <p>By learning this, we will learn how to write optimized code, so that we help out the Profiler and the Compiler to make sure that we're able to run the fastest code possible. We want to write code in a way that helps the Compiler make optimizations, we don't want to work against it and make things slow.</p>`,
        `<h3>Is JavaScript an interpreted language?</h3>
        <p>Things have evolved over time. We don't have just Interpreters, we also use Compilers to optimize code.</p>`,
      ],
    },
    {
      title: 'Javascript Engine (part 2)',
      id: 'javascript-engine-part-2',
      source:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Engine2.html',
      summary: [
        `<h3>Memory Heap & Call Stack</h3>
        <ul>With Interpreters and Compilers, we learned that the JavaScript Engine does a lot of work for us, but the biggest thing is actually reading our code and executing it. What do you think the two most important things in these steps are?
        <li>1. We need a place to store and write information, to store our variables, our objects, our data of our apps. So in other words, a place to allocate memory (Memory Heap).</li>
        <li>2. We need a place to keep track, line by line, of what's executing (Call Stack).</li>
        <ul>
        <p>JavaScript Engine use a Call Stack and a Memory Heap when is reading and executing the JavaScript file. We need the Memory Heap as a place to <i>store and write information</i>, and the Call Stack as a place to keep track of where your code is in it's execution, so that we can <i>execute the code in order</i>.</p>`,
        `<h3>Call Stack & Stack Overflow</h3>
        <p>If you have only functions that don't have inside any nested functions, on every single time that functions will be called, the Call Stack is going to get pushed on and then popped off. But what happens if we have functions with nested functions inside on them and keep calling functions nested inside of each other, over and over and over, so that we keep growing the Call Stack until it gets larger and larger and larger, until we can't do it anymore? Well, that's called Stack Overflow.</p>`,
        `<h3>Memory Heap & JavaScript is a Garbage Collection Language & Memory Leaks</h3>
        <ul>Is there a way to do something like stack overflow with the Memory Heap? JavaScript is a garbage collected language and this means that JavaScript will automatically clean the Memory Heap of data that is unused, so only the data that is still useful to us remains in the Memory Heap. There are 3 common memory leaks, so you need to avoid them in your application:
        <li>- global variables;</li>
        <li>- event listeners that you never remove when you don't need them;</li>
        <li>- <code>setInterval()</code> functions that have in their body referencing to external objects and we don't stop that intervals.</li>
        </ul>`,
        `<h3>JavaScript is a Single Threaded Programming Language (Synchronous Language) and the JavaScript Engine have only a single Call Stack & Memory Heap</h3>
        <p>A single threaded programming language execute only one line a code at a time (not do multiple things). The biggest way to check that a language is single threaded is that it has only one Call Stack. This single Call Stack allows us to run code one at a time, we're never running functions in parallel.</p>`,
        `<h3>JavaScript Engine is synchronous</h3>
        <p>JavaScript Engine executes code in order, and must finish executing a line of code before moving onto the next one. For asynchronous operations, we need to use the JavaScript Runtime.</p>`,
      ],
    },
    {
      title: 'Javascript Runtime',
      id: 'javascript-runtime',
      source:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Runtime.html',
      summary: [
        `<h3>What is JavaScript Runtime?</h3>
        <p>JavaScript runtime refers to <i>the environment in which JavaScript code is executed. It consists of the <u>JavaScript engine</u> and the <u>runtime libraries</u>. The JavaScript engine is responsible for interpreting and executing the code, while the runtime libraries provide additional functionality that is not inherent to the language itself</i>.</p>
        <p><i>In web development, browsers act as JavaScript runtimes.</i> Each browser has its own JavaScript engine (e.g., V8 in Chrome, SpiderMonkey in Firefox, JavaScriptCore in Safari) that interprets and executes JavaScript code. These engines are designed to optimize the performance of JavaScript in a browser environment.</p>
        <p><i>Outside of the browser, there are other environments where JavaScript can run. For example, Node.js is a server-side JavaScript runtime that allows developers to run JavaScript on the server.</i> Node.js uses the V8 JavaScript engine, the same engine that Chrome uses.</p>
        <p>In summary, <i>a JavaScript runtime is the environment that provides the necessary components for executing JavaScript code</i>, including the JavaScript engine and runtime libraries. It can be a web browser, a server-side environment like Node.js, or other specialized environments.</p>
        `,
        `<h3>JavaScript Runtime & asynchronous code</h3>
        <p>The heart of any JavaScript Runtime is always a JavaScript Engine. Without the JavaScript Engine, there is no JavaScript Runtime, and there is no JavaScript at all. However, JavaScript Engine alone is not enough, because being single threaded (synchronous), if you have code that takes a long, long time to execute, your application will be very, very slow. In order to your application work properly, we also need a JavaScript Runtime that gave access to the Web APIs (ex. DOM, Timers, Fetch API etc.) and implicit to asynchronous code.</p>`,
        `<h3>Browsers comes in with a JavaScript Engine and a JavaScript Runtime</h3>
        <p>JavaScript has no idea what the World-Wide-Web or Internet is, JavaScript is only a programming language. On the other hand, the web browsers through Web APIs allows JavaScript to use asynchronous code, so JavaScript can interact with things outside of its world. JavaScript Runtime provides asynchronous Web APIs, a way of communicating with the JavaScript Engine.</p>`,
        `<h3>Web APIs & global <code>window</code> object</h3>
        <p>the Web APIs are provided to the JavaScript Engine via global <code>window</code> object. These Web APIs (setIntervals, setTimeout, fetch, localStorage, document object, etc.) are not native to JavaScript language itself, these Web APIs are provided by JavaScript Runtime via <code>window</code> object, so they are native to the browser.</p>`,
        `<h3>These Web APIs are what we call asynchronous</h3>
        <p>That means you can instruct these APIs to do something in the background and return data once it's done, meanwhile, we can just continue working on our JavaScript Call Stack and execute functions.</p>`,
        `<h3>Callback Queue vs Job/Microtask Queue & Event Loop</h3>
        <p>A typical JavaScript Runtime also includes a so called Callback Queue. This is a data structure that contains all the Web APIs callback functions that are finish to run in the background, and now are ready to be executed by the JavaScript Engine. The Callback Queue cannot be ran until the Call Stack is completely empty. The Event Loop is to constantly checking the Call Stack to see if it is empty, so that it can add anything that's in the Callback Queue into the Call Stack. The Event Loop has the extremely important task of doing coordination between the Call Stack and the callbacks in the Callback Queue, so it is basically who decides exactly when each callback is executed.</p>
        <p>With ES6 and Promises, a new queue was created, called Job/Microtask Queue, so callbacks related to Promises have a special queue for themselves. Job/Microtask Queue has priority over Callback Queue, so Event Loop gives priority to promises over regular callbacks.</p>`,
      ],
    },
    {
      title: 'Execution Context and the Call Stack',
      id: 'execution-context-and-the-call-stack',
      source:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Execution_Context_and_The_Call_Stack.html',
      summary: [
        `<h3>Execution Context</h3>
        <p>While reading through HTML, if the browser encounters JavaScript code to run via a <<code>script</code>> tag or an attribute that contains JavaScript code like <code>onClick</code>, it sends it to its JavaScript Engine. The browser's JavaScript Engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context.</p>`,
        `<h3>Global & function execution context</h3>
        <p>When you give your JavaScript file to a browser, the JavaScript Engine start to read and execute the code inside your file, line by line, in order. As the JavaScript Engine starts to read your code, it creates something called the Global Execution Context (GEC). Whenever JavaScript Engine sees a function call in you code, it's going to create something called an Function Execution Context (FEC).</p>
        <p>Code in JavaScript is always ran inside a type of execution context. Execution context is simply the environment within which your code is ran. So any time we run code in JavaScript, it's always going to be part of an execution context, it's part of global or inside of some function that we call.</p>`,
        `<h3>Global execution context (global <code>window</code> object & <code>this</code> keyword)</h3>
        <p>Whenever the JavaScript Engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC). The GEC is the base/default Execution Context where all JavaScript code that is <i>not inside of a function</i> gets executed. For every JavaScript file, there can only be one GEC.</p>
        <p>GEC is the very first item on the Call Stack, the first thing the JavaScript Engine does is to create the GEC, and it gives you two things: first thing is a global object <code>window</code> and the other thing is that <code>this</code> keyword in JavaScript.</p>
        <p>To the global object (in our case <code>window</code> object), we can assign variables, we can add functions and we can add different things to this global object.</p>`,
        `<h3>Function execution context (<code>arguments</code> & <code>this</code> keyword)</h3>
        <p>Whenever a function is called, the JavaScript Engine creates a different type of Execution Context known as a Function Execution Context (FEC) <i>within</i> the Global Execution Context (GEC) to evaluate and execute the code within that function. Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.</p>
        <p>A function context is created by the JavaScript Engine when it sees a function call. Each function call gets its own execution context.</p>
        <p>FEC give us two things: the <code>arguments</code> objects and the <code>this</code> keyword.</p>
        `,
      ],
    },
    {
      title: 'Lexical Environment',
      id: 'lexical-environment',
      source:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Lexical_Environment.html',
      summary: [
        `<h3>Where we write code is important</h3>
        <p>Lexical environment is simply <i>where you write code</i>. Where we write code determines the available variables. A new lexical environment is created when curly brackets <code>{}</code> are used, even nested brackets <code>{{...}}</code> create a new lexical environment.</p>`,
      ],
    },
    {
      title: 'Variable Environment',
      id: 'variable-environment',
      source:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Variable_Environment.html',
      summary: [
        `<h3>Variable Environment & Scope Chain</h3>
        <p>Each execution context (global/function) has its own variable environment. Each function execution context has a link to its outside world or a link to its parent. Each execution context that is created has a link outside of its lexical environment, called the scope chain. The scope chain gives us access to variables in the parent environment.</p>`,
        `<h3>Global Scope & Local Scope</h3>
        <p>The global scope is the outermost scope, so variables declared outside a function are in what we call global scope, and they can be access in any other scope that is inside of the functions, we can always access global scope. Now, local scope is any scope that is local to a function, now variables declared in the local scope are accessible within this scope, as well as any scopes surrounding it. Scope just defines the <i>accessibility of variables in the code</i>, it tells us what we can access, what we can not.</p>`,
        `<h3>Function Scope (<code>var</code>, <code>let</code> & <code>const</code>) & Block Scope (<code>let</code> & <code>const</code>)</h3>
        <p>Most programming languages are block scoped, meaning every time you see a new <code>{}</code> (curly braces) is a new lexical environment. However, JavaScript is function scoped, meaning it only creates a new local environment if it sees the keyword <code>function</code> on the global scope. To give us access to block scope, in ES6 <code>let</code> and <code>const</code> were added to the language.</p>`,
        `<h3>Variable Environment & Leakage of Global Variables</h3>`,
        `<h3>Global variables & polluting the global namespace</h3>
        <p>This means that we have too much data on our global execution environment.</p>`,
        `<h3>Global variables & variable collisions</h3>
        <p>This is when we have the same variable/s in multiple scripts, everything gets bunched up together, everything is on the global execution context, and if there's any duplicates variables (variables with the same name) overwrite each other.</p>`,
        `<h3>Variable collisions & IIFE & JavaScript Modules</h3>
        <p>With modern JavaScript, we have things like JavaScript Modules and module bundlers. But before we had those things, JavaScript developers used what we know now about the language itself to avoid variable collisions and it's called Immediately Invoked Function Expressions (IIFE). The idea behind IIFE is we can place all library code inside of a local scope (function scope), to avoid any variable collisions.</p>`,
      ],
    },
    {
      title: 'Hoisting',
      id: 'hoisting',
      source: '/src/markdowns/01_Browser_Engine_&_Runtime/Hoisting.html',
      summary: [
        `<p>Compiler appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.</p>`,
        `<p>Hoisting is happen on every execution context: global & function.</p>`,
      ],
    },
    {
      title: 'What is JavaScript?',
      id: 'what-is-javascript',
      source:
        '/src/markdowns/01_Browser_Engine_&_Runtime/What_is_JavaScript.html',
      summary: [],
    },
    {
      title: 'Activating Strict Mode',
      id: 'activating-strict-mode',
      source:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Activating_Strict_Mode.html',
      summary: [
        `<p>JavaScript's Strict Mode, introduced in ECMAScript 5, is a way to opt into a <i>restricted variant of JavaScript</i>, thereby implicitly opting-out of Sloppy Mode.</p>`,
        `<p>Strict Mode code and non-Strict Mode code can coexist.</p>`,
        `<ul>Strict Mode makes several changes to normal JavaScript semantics:
        <li>- Eliminates some JavaScript silent errors by changing them to throw errors;</li>
        <li>- Fixes mistakes that make it difficult for JavaScript Engine to perform optimizations;</li>
        <li>- Prohibits some syntax likely to be defined in future versions of ECMAScript.</li>
        <ul>
        `,
        `<p>Strict Mode applies to entire scripts or to individual functions. It doesn't apply to block statements enclosed in <code>{}</code> braces; attempting to apply it to such contexts does nothing.</p>`,
      ],
    },
    {
      title:
        'Efficient Script Loading: <code>defer</code> & <code>async</code>',
      id: 'efficient-script-loading-defer-async',
      source: '',
      summary: [],
    },
  ],
};

const variablesAndValues = {
  name: 'JavaScript Types and Variables',
  sections: [
    {
      title: 'JavaScript Types',
      id: 'javascript-types',
      source:
        '/src/markdowns/02_JavaScript_Types_&_Variables/JavaScript_Types.html',
      summary: [
        `All programming languages have types. That is the building blocks that allow us to write in that language. We can have numbers, strings, booleans and many more.`,
        `<h3>Static vs Dynamically Typed languages</h3>
        <p>JavaScript is a dynamic language with dynamic types. Variables in JavaScript are not directly associated with any particular value type, and <i>any variable can be assigned (and re-assigned) values of all types</i>. With a statically typed language we have to declare the variables explicitly before using them. Dynamically typed languages are not bound to this constraint, they're not bound to a particular type. TypeScript allows us to make JavaScript to behave like a statically typed language.</p>
        `,
        `<h3>Strongly vs Weakly Typed languages</h3>
        <p>JavaScript is also a weakly typed language, which means it allows implicit <i>type conversion</i> when an operation involves mismatched types, instead of throwing type errors.</p>
        `,
        `<h3>Primitive vs Reference Types</h3>
        <p>All types, except objects types (objects, arrays, functions), define immutable values (that is, values which can't be changed). Primitive types store the value itself, but reference types store a pointer, so the address of that place in memory, not the value itself.</p>`,
      ],
    },
    {
      title: 'Primitives vs References Types',
      id: 'primitives-vs-references-types',
      source:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Primitives_vs_Objects_(Primitive_vs_Reference_Types).html',
      summary: [
        `<h3>Primitive Types (Numbers, Strings, Booleans, null, undefined, Symbol, BigInt)</h3>
        <p>Primitive types store the value itself.</p>`,
        `<h3>Reference Types (Arrays, Objects, Functions)</h3>
        <p>A variable that stores a reference object only stores a pointer, so the address of that place in memory, and not the value itself.</p>`,
        `<h3>Pass by Value vs Pass by Reference</h3>
        <ul>The key difference between primitive and reference values is that when you copy a variable that holds a primitive value, which means you assign it to a new one, then the value is actually copied. When you copy a variable that holds a reference value, you copy the pointer address of that place in memory, not the value itself.
        <li>- when you pass a primitive value to a function, you're passing a copy of the value;</li>
        <li>- when you pass an array to a function, you're passing a reference to the array. Changes made to the array within the function affect the original array.</li>
        <p><i>Each object has its own reference location in memory, even is a nested object.</i></p>
        </ul>
        `,
        `<h3>Comparing two objects for equality</h3>
        <ul>Two objects, even though they hold the same data, are two different distinct objects stored in different places, so at different addresses in memory. Because that when you compare two objects, you compare the addresses where they stored:
        <li>- with primitive values, <i>equality is based on the value itself</i>;</li>
        <li>- with arrays (and other objects), <i>equality is based on reference, not the content</i>. Two arrays (objects) with the same content are not considered equal unless they refer to the same array (object) in memory.</li>
        </ul>
        <p>Primitive values are the core building blocks that hold your data, objects (and arrays) are helpful for organizing and working with that data.</p>`,
        `<h3>Shallow vs Deep Objects Copy</h3>
        <p>Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.</p>
        <p>A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.</p>`,
      ],
    },
    {
      title: 'Type Coercion',
      id: 'type-coercion',
      source:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Type_coercion.html',
      summary: [
        `<h3>Type Coercion vs Type Conversion</h3>
        <p>Type coercion is the <i>automatic or implicit conversion of values from one data type to another (such as strings to numbers)</i>. Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.</p>`,
        `<h3>Implicit and Explicit Type Coercion</h3>
        <p>Implicit Type Coercion comes with a behavior called string concatenation. String concatenation is because <code>+</code> operator also supports strings, not only numbers. Keep in mind that only arithmetic operator <code>+</code> supports strings though, <code>-</code>, <code>*</code> and <code>/</code> does NOT support strings.</p>
        <p>Since JavaScript is a weakly-typed language, values can also be converted between different types automatically, and it is called implicit type coercion. It usually happens when you apply operators to values of different types:: <code>"5" + 9; //59</code>. Implicit type coercion can also be triggered by the surrounding context, like with <code>if (value) {…}</code>, where <code>value</code> is coerced to boolean.</p>
        <p>When a developer expresses the intention to convert between types by writing the appropriate code, like <code>Number(value)</code>, it's called explicit type coercion (or type casting): <code>Number("5") + 9; //9</code></p>
        <p>One operator that doesn't trigger implicit type coercion is Strict Equality Operator <code>===</code></p>
        `,
        `<h3>Type Coercion for Primitive values</h3>
        <ul>The first rule to know is there are only 3 types of conversion in JavaScript:
        <li>- to string;</li>
        <li>- to number;</li>
        <li>- to boolean;</li>
        </ul>
        <p>Secondly, conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those 3 ways.</p>
        <p>String conversion: to <i>explicitly</i> convert values to a string apply the <code>String()</code> function. <i>Implicit</i> coercion is triggered by the binary <code>+</code> operator, when any operand is a string.</p>
        <p>Number conversion: for an <i>explicit</i> conversion just apply the <code>Number()</code> function. <i>Implicit</i> conversion is tricky, because it's triggered in more cases (for more details read the entire article).</p>
        <p>Boolean conversion: to <i>explicitly</i> convert a value to a boolean apply the <code>Boolean()</code> function. <i>Implicit</i> conversion happens in logical context, or is triggered by logical operators ( <code>||</code> <code>&&</code> <code>!</code>).</p>
        `,
        `<h3>Type Coercion for Objects</h3>
        <p>When it comes to objects and engine encounters expression like <code>[1] + [2,3]</code>, first it needs to convert an object to a primitive value, which is then converted to the final type. And remember "Type Coercion for Primitive Values" that there are still only three types of conversion: string, numeric and boolean.</p>`,
        `<h3>Truthy & Falsy Values</h3>`,
        `<b>Whatever you get from a user, from a HTML input in your JavaScript, code will always be a string (text).</b>`,
      ],
    },
    {
      title: 'Introduction to Variables',
      id: 'introduction-to-variables',
      source: `/src/markdowns/02_JavaScript_Types_&_Variables/Introduction_to_Variables.html`,
      summary: [
        `<p>A variable is a <b>container for a value</b>.</p>`,
        `<p>One special thing about variables is that they can contain just about anything — not just strings and numbers. Variables can also contain complex data and even entire functions.</p>`,
        `<p>Variables aren't the values themselves; they are containers for values.</p>`,
        `<h3>Declaring a variable</h3>
        <p>To use a variable, you've first got to create it — more accurately, we call this declaring the variable. To do this, we type the keyword <code>let</code>, <code>const</code> or <code>var</code> followed by the name you want to call your variable.</p>`,
        `<h3>Initializing a variable</h3>
        <p>Once you've declared a variable, you can initialize it with a value.</p>`,
        `<h3>Updating a variable</h3>
        <p>Once a variable has been initialized with a value, you can change (or update) that value by giving it a different value.</p>`,
        `<h3>Variable naming rules</h3>
        <p>You can call a variable pretty much anything you like, but there are limitations. Generally, you should stick to just using <i>Latin characters</i> (0-9, a-z, A-Z) and the <i>underscore character</i>. A safe convention to stick to is so-called <i>"lower camel case"</i>.</p>`,
        `<h3>Variables are case sensitive</h3>
        <p>So <code>myage</code> is a different variable from <code>myAge</code>.</p>`,
      ],
    },
    {
      title: 'var',
      id: 'var',
      source: '/src/markdowns/02_JavaScript_Types_&_Variables/var.html',
      summary: [
        `<p>The <code>var</code> statement declares a <i>function-scoped</i> or <i>globally-scoped</i> variable, optionally initializing it to a value.</p>`,
        `<h3><code>var</code> & hoisting</h3>
        <p><code>var</code> declarations, wherever they occur, are processed before any code is executed because <code>var</code> declarations are hoisted. Variables declared using <code>var</code> are created before any code is executed in a process known as hoisting. Their initial value is <code>undefined</code>. <b>This behavior called hoisting means that the variable declaration is moved to the top of the <i>function</i> or <i>global code</i></b>.</p>
        <p>Because <code>var</code> declarations are processed before any code is executed, declaring a variable with <code>var</code> anywhere in the code is equivalent to declaring it at the top. This also means that <i>a <code>var</code> variable can appear to be used before it's declared</i>.</p>
        `,
        `<h3>Only a variable's declaration is hoisted, not its initialization</h3>
        <p>The initialization happens only when the assignment statement is reached. Until then the variable remains <code>undefined</code> (but declared).</p>`,
        `<p>In the global context, a variable declared using <code>var</code> is added as a non-configurable <b>property of the global <code>window</code> object</b>.</p>`,
        `<p><code>var</code> is only function scoped, NOT block scoped.</p>`,
        `<p><code>var</code> can be redeclared without trigger an error.</p>`,
      ],
    },
    {
      title: 'let',
      id: 'let',
      source: '/src/markdowns/02_JavaScript_Types_&_Variables/let.html',
      summary: [
        `<p>The <code>let</code> statement declares a <b>block-scoped local variable</b>, optionally initializing it to a value.</p>`,
        `<p><code>let</code> can't be used before it's declared.</p>`,
        `<p><code>let</code> is function scoped & block scoped.</p>`,
        `<p>Just like <code>const</code>, the <code>let</code> does not create properties of the <code>window</code> object when declared globally.</p>`,
        `<p><code>let</code> can't be redeclared like <code>var</code>.</p>`,
      ],
    },
    {
      title: 'const',
      id: 'const',
      source: '/src/markdowns/02_JavaScript_Types_&_Variables/const.html',
      summary: [
        `<p>The <code>const</code> statement declares a <b>block-scoped local variable</b>.</p>`,
        `<p><code>const</code> is function scoped & block scoped.</p>`,
        `<p><code>const</code> <i>must be initialized when it's declared</i>.</p>`,
        `<p><code>const</code> can't be used before it's declared.</p>`,
        `<p>The value of a <code>const</code> <i>can't be changed through reassignment</i> and <i>can't be redeclared</i> like <code>var</code> or <code>let</code>. However, if a constant is an object or array its properties or items can be updated or removed.</p>`,
      ],
    },
    {
      title: 'Differences between var, let & const',
      id: 'differences-between-var-let-const',
      source:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Differences_between_var_let_&_const.html',
      summary: [
        `<h3>Declaration, initialization & hoisting differences</h3>
        <p>If <code>var</code> and <code>let</code> are not initialized at declaration, initial value is <code>undefined</code>. An initializer for a <code>const</code> variable is required; you must specify its value in the same statement in which it's declared.</p>
        <p>Variables declared with <code>let</code> and <code>const</code> are hoisted but, unlike <code>var</code>, are not initialized with a default value.</p>
        `,
        `<h3>Scope differences</h3>
        <p><code>let</code> and <code>const</code> allows you to declare variables that are limited to the scope of a block statement or expression on which it is used, unlike the <code>var</code> keyword, which declares a variable globally or locally to an entire function, regardless of block scope.</p>
        `,
        `<h3>Duplicate variable declarations (redeclarations) differences</h3>
        <p>Duplicate variable declarations using <code>var</code> will not trigger an error, even in "strict mode", and the variable will not lose its value, unless another assignment is performed.</p>
        `,
        `<h3>Non-configurable property of the global <code>window</code> object</h3>
        <p>In the global context, a variable declared using <code>var</code> is added as a non-configurable property of the global object but <code>let</code> and <code>const</code> does not create properties of the <code>window</code> object when declared globally.</p>
        `,
        `<p>You can following the principle about when to use <code>let</code> and when to use <code>const</code>: use <code>const</code> <i>when you can</i>, and use <code>let</code> <i>when you have to</i>. This means that <b>if you can initialize a variable when you declare it and don't need to reassign it later, make it a constant</b>.</p>`,
      ],
    },
  ],
};

const operators = {
  name: 'Operators',
  sections: [
    {
      title: 'Introduction to JavaScript Operators',
      id: 'introduction-to-javascript-operators',
      source:
        '/src/markdowns/03_Operators/Introduction_to_Javascript_Operators.html',
      summary: [
        `<p>An operator allows us to <i>transform values</i> or <i>combine multiple values</i> and do all kinds of work with values.</p>`,
        `<h3>Operator precedence</h3>
        <p>Operator precedence determines <i>how operators are parsed concerning each other</i>. Operators with <i>higher precedence</i> become the operands of operators with <i>lower precedence</i>.</p>`,
        `<h3>Precedence & Associativity</h3>
        <p>Operators are first grouped by <i>precedence</i>, and then, for adjacent operators that have the same precedence, by <i>associativity</i>. When operators have <i>different precedence levels</i>, the operator with the highest precedence goes first and associativity does not matter. Associativity comes into play when there are multiple operators of the same precedence.</p>`,
        `<h3>Note ongrouping vs short-circuiting</h3>
        <p>Grouping <code>( … )</code> is listed as having the highest precedence. However, that does not always mean the expression within the grouping symbols <code>( … )</code> is evaluated first, especially when it comes to short-circuiting. Short-circuiting is jargon for <i>conditional evaluation</i>. For example, in the expression <code>a && (b + c)</code>, if <code>a</code> is falsy, then the sub-expression <code>(b + c)</code> will not even get evaluated, even if it is grouped and therefore has higher precedence than <code>&&</code>.</p>`,
        `<h3>Operators & Type Coercion</h3>
        <p>Some operators like <code>+</code> trigger type coercion, because <code>+</code> operator also supports strings, not only numbers.</p>`,
      ],
    },
    {
      title: 'Expressions and operators',
      id: 'expressions-and-operators',
      source: '/src/markdowns/03_Operators/Expressions_and_operators.html',
      summary: [
        `<p>At a high level, <i>an expression is a valid unit of code that resolves to a value</i>. There are <i>two types of expressions</i>: those <u>that have side effects (such as assigning values)</u> and those <u>that purely evaluate</u>.</p>`,
        `<ul>Some of JavaScript expressions & operators:
        <li>- Primary expressions: <code>this</code>, <code>[]</code>, <code>{}</code>, <code>function</code>, <code>class</code>, <code>async function</code> etc.</li>
        <li>- Left-hand-side expressions: <code>?.</code>, <code>new</code>, <code>super</code> etc.</li>
        <li>- Increment and decrement</li>
        <li>- Unary operators: <code>tyepof</code>, <code>await</code> etc.</li>
        <li>- Arithmetic operators</li>
        <li>- Relational operators: <code>instanceof</code>, <code>in</code> etc.</li>
        <li>- Equality operators</li>
        <li>- Binary logical operators</li>
        <li>- Assignment operators</li>
        </ul>
      `,
      ],
    },
    {
      title: 'Assignment operators',
      id: 'assignment-operators',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Assignment <code>=</code>',
          id: 'operators-assignment',
          source: '/src/markdowns/03_Operators/Assignment_operator.html',
          summary: [
            `<p>Assignment operator is used to <b>assign a value to a variable</b>.</p>`,
            `<p>Chaining the assignment operator is possible in order to <b>assign a single value to multiple variables</b>.</p>`,
          ],
        },
        {
          title: 'Addition assignment <code>+=</code>',
          id: 'operators-addition-assignment',
          source:
            '/src/markdowns/03_Operators/Addition_assignment_operator.html',
          summary: [
            `<p>The addition assignment operator <b>adds the value of the right operand</b> to a variable and <b>assigns the result</b> to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.</p>`,
          ],
        },
        {
          title: 'Subtraction assignment <code>-=</code>',
          id: 'operators-subtraction-assignment',
          source:
            '/src/markdowns/03_Operators/Subtraction_assignment_operator.html',
          summary: [
            `<p>The subtraction assignment operator <b>subtracts the value of the right operand</b> from a variable and <b>assigns the result</b> to the variable.</p>`,
            `<p>Concatenation is not possible with <code>-=</code> operator, only <code>+</code> and <code>+=</code> operators trigger type coercion.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Increment and decrement',
      id: 'increment-and-decrement',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Increment <code>A++</code> or <code>++A</code>',
          id: 'operators-increment',
          source: '/src/markdowns/03_Operators/Increment_operator.html',
          summary: [
            `<p>The increment operator <i>increments (adds one to)</i> its operand and <i>returns the value</i> before or after the increment, depending on where the operator is placed.</p>`,
            `<p>If used <b>postfix</b>, with operator after operand (for example, <code>x++</code>), the increment operator increments and <b>returns the value <i>before</i> incrementing</b>.</p>`,
            `<p>If used <b>prefix</b>, with operator before operand (for example, <code>++x</code>), the increment operator increments and <b>returns the value <i>after</i> incrementing</b>.</p>`,
          ],
        },
        {
          title: 'Decrement <code>A--</code> or <code>--A</code>',
          id: 'operators-decrement',
          source: '/src/markdowns/03_Operators/Decrement_operator.html',
          summary: [
            `<p>The decrement operator <i>decrements (subtracts one from)</i> its operand and i>returns the value</i> before or after the decrement, depending on where the operator is placed.</p>`,
            `<p>If used <b>postfix</b>, with operator after operand (for example, <code>x--</code>), the decrement operator decrements and <b>returns the value <i>before</i> decrementing</b>.</p>`,
            `<p>If used <b>prefix</b>, with operator before operand (for example, <code>--x</code>), the decrement operator decrements and <b>returns the value <i>after</i> decrementing</b>.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Unary operators',
      id: 'unary-operators',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'typeof',
          id: 'operators-typeof',
          source: '/src/markdowns/03_Operators/typeof_operator.html',
          summary: [
            `<p>The <code>typeof</code> operator <i>returns a string indicating the type</i> of the operand's value</p>`,
          ],
        },
        {
          title: 'Unary plus <code>+</code>',
          id: 'operators-unary-plus',
          source: '/src/markdowns/03_Operators/Unary_plus_operator.html',
          summary: [
            `<p>The unary plus operator <code>+</code> <i>precedes its operand and evaluates to its operand but <u>attempts to convert it into a number</u>, if it isn't already</i>. If it cannot parse a particular value, it will evaluate to <code>NaN</code>.</p>`,
            `<p>Although unary negation <code>-</code> also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number.</p>`,
          ],
        },
        {
          title: 'Unary negation <code>-</code>',
          id: 'operators-unary-negation',
          source: '/src/markdowns/03_Operators/Unary_negation_operator.html',
          summary: [
            `<p>The unary negation operator <code>-</code> <i>precedes its operand and negates it</i>. It <i>can convert a non-number into a number</i>.</p>`,
          ],
        },
        {
          title: 'Logical NOT <code>!</code>',
          id: 'operators-logical-not',
          source: '/src/markdowns/03_Operators/Logical_NOT_operator.html',
          summary: [
            `<p>The logical NOT <code>!</code> operator <i>takes truth to falsity and vice versa</i>.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Arithmetic operators',
      id: 'arithmetic-operators',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Addition <code>+</code>',
          id: 'operators-addition',
          source: '/src/markdowns/03_Operators/Addition_operator.html',
          summary: [
            `<p>The addition operator <code>+</code> produces the <i>sum of numeric operands</i> or <i>string concatenation</i>.</p>`,
          ],
        },
        {
          title: 'Subtraction <code>-</code>',
          id: 'operators-subtraction',
          source: '/src/markdowns/03_Operators/Subtraction_operator.html',
          summary: [
            `<p>The subtraction operator <code>-</code> subtracts the two operands, producing their difference.</p>`,
            `<p><i>Concatenation is not possible with <code>-</code> operator</i>, only <code>+</code> and <code>+=</code> operators trigger type coercion.</p>`,
          ],
        },
        {
          title: 'Division <code>/</code>',
          id: 'operators-division',
          source: '',
        },
        {
          title: 'Multiplication <code>*</code>',
          id: 'operators-multiplication',
          source: '',
        },
        {
          title: 'Remainder <code>%</code>',
          id: 'operators-remainder',
          source: '/src/markdowns/03_Operators/Remainder_operator.html',
          summary: [
            `<p>The remainder operator <code>%</code> <i>returns the remainder left over when one operand is divided by a second operand</i>.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Equality operators',
      id: 'equality-operators',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Equality <code>==</code>',
          id: 'oeprators-equality',
          source: '/src/markdowns/03_Operators/Equality_operator.html',
          summary: [
            `<p>The equality operator <code>==</code> <i>checks whether its two operands are equal, returning a Boolean result</i>.</p>`,
            `<p>Unlike the strict equality <code>===</code> operator, it attempts to <i><u>convert</u> and <u>compare</u> operands that are of different types</i>.</p>`,
            `<p>Strict equality <code>===</code> operator does not attempt type conversion. Instead, the <i>strict equality operator always considers operands of different types to be different</i>.</p>`,
          ],
        },
        {
          title: 'Inequality <code>!=</code>',
          id: 'operators-inequality',
          source: '/src/markdowns/03_Operators/Inequality_operator.html',
          summary: [
            `<p>The inequality operator <code>!=</code> <i>checks whether its two operands are not equal, returning a Boolean result</i>.</p>`,
            `<p>Unlike the strict inequality <code>!==</code> operator, it attempts to <i><u>convert</u> and <u>compare</u> operands that are of different types</i>.</p>`,
          ],
        },
        {
          title: 'Identity <code>===</code>',
          id: 'operators-identity',
          source: '/src/markdowns/03_Operators/Identity_operator.html',
          summary: [
            `<p>The strict equality operator <code>===</code> <i>checks whether its two operands are equal, returning a Boolean result</i>.</p>`,
            `<p>Strict equality <code>===</code> operator does not attempt type conversion. Instead, the <i>strict equality operator always considers operands of different types to be different</i>.</p>`,
          ],
        },
        {
          title: 'Nonidentity <code>!==</code>',
          id: 'operators-nonidentity',
          source: '/src/markdowns/03_Operators/Nonidentity_operator.html',
          summary: [
            `<p>The strict inequality operator <code>!==</code> <i>checks whether its two operands are not equal, returning a Boolean result</i>.</p>`,
            `<p>The strict inequality operator <i>always considers operands of different types to be different</i>.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Relational operators',
      id: 'relational-operators',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Less than <code><</code>',
          id: 'operators-less-than',
          source: '/src/markdowns/03_Operators/Less_than_operator.html',
          summary: [
            `<p>The less than <code><</code> operator returns <code>true</code> if the left operand is less than the right operand, and <code>false</code> otherwise.</p>`,
            `<p><i>Comparisons always coerce their operands to primitives</i>. This means the same object may end up having different values within one comparison expression.</p>`,
          ],
        },
        {
          title: 'Greater than <code>></code>',
          id: 'operators-greater-than',
          source: '/src/markdowns/03_Operators/Less_than_operator.html',
          summary: [
            `<p>The greater than <code>></code> operator returns <code>true</code> if the left operand is greater than the right operand, and <code>false</code> otherwise.</p>`,
            `<p><i>Comparisons always coerce their operands to primitives</i>. This means the same object may end up having different values within one comparison expression.</p>`,
          ],
        },
        {
          title: 'Less than or equal <code><=</code>',
          id: 'operators-less-than-or-equal',
          source: '/src/markdowns/03_Operators/Less_than_operator.html',
          summary: [
            `<p>The less than or equal <code><=</code> operator returns <code>true</code> if the left operand is less than or equal to the right operand, and <code>false</code> otherwise.</p>`,
            `<p><i>Comparisons always coerce their operands to primitives</i>. This means the same object may end up having different values within one comparison expression.</p>`,
          ],
        },
        {
          title: 'Greater than or equal <code>>=</code>',
          id: 'operators-greater-than-or-equal',
          source: '/src/markdowns/03_Operators/Less_than_operator.html',
          summary: [
            `<p>The greater than or equal <code>>=</code> operator returns <code>true</code> if the left operand is greater than or equal to the right operand, and <code>false</code> otherwise.</p>`,
            `<p><i>Comparisons always coerce their operands to primitives</i>. This means the same object may end up having different values within one comparison expression.</p>`,
          ],
        },
        {
          title: 'instanceof',
          id: 'operators-instanceof',
          source: '/src/markdowns/03_Operators/instanceof_operator.html',
          summary: [
            `<p>The <code>instanceof</code> operator <i>tests to see if the <code>prototype</code> property of a constructor appears anywhere in the prototype chain of an object</i>. The return value is a boolean value.</p>`,
          ],
        },
        {
          title: 'in',
          id: 'operators-in',
          source: '/src/markdowns/03_Operators/in_operator.html',
          summary: [
            `<p>The <code>in</code> operator returns <code>true</code> if the <u>specified property</u> is in the <i>specified object</i> or <i>its prototype chain</i>.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Binary logical operators',
      id: 'binary-logical-operators',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Logical AND <code>&&</code>',
          id: 'operators-logical-and',
          source: '/src/markdowns/03_Operators/Logical_AND_operator.html',
          summary: [
            `<p>The logical AND <code>&&</code> operator for a set of boolean operands will be <code>true</code> <i>only if <u>all</u> the operands are</i> <code>true</code>. Otherwise it will be <code>false</code>.</p>`,
            `<p>More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.</p>`,
            `<p>Logical AND <code>&&</code> evaluates operands from left to right.</p>`,
            `<h3>Operator precedence</h3>
            <p>The AND operator has a <i>higher precedence than the OR operator</i>, meaning the <code>&&</code> operator is <i>executed before the <code>||</code> operator</i>.</p>`,
            `<h3>Short-circuit evaluation</h3>
            <p>The logical <code>&&</code> expression is a <u>short-circuit operator</u>. As <i>each operand is converted to a boolean</i>, if the result of one conversion is found to be <code>false</code>, the <code>&&</code> operator stops and <i>returns the original value of that falsy operand</i>; it does not evaluate any of the remaining operands.</p>`,
          ],
        },
        {
          title: 'Logical OR <code>||</code>',
          id: 'operators-logical-or',
          source: '/src/markdowns/03_Operators/Logical_OR_operator.html',
          summary: [
            `<p>The logical OR <code>||</code> operator (logical disjunction) for a set of operands is <code>true</code> <i>only if <u>one or more</u> of its operands is</i> <code>true</code>.</p>`,
            `<h3>Operator precedence</h3>
            <p>The AND operator has a <i>higher precedence than the OR operator</i>, meaning the <code>&&</code> operator is <i>executed before the <code>||</code> operator</i>.</p>`,
            `<h3>Short-circuit evaluation</h3>
            <p>The logical <code>||</code> expression is a <u>short-circuit operator</u>. As <i>each operand is converted to a boolean</i>, if the result of one conversion is found to be <code>true</code>, the <code>||</code> operator stops and <i>returns the original value of that truthy operand</i>; it does not evaluate any of the remaining operands.</p>`,
          ],
        },
        {
          title: 'Nullish coalescing <code>??</code>',
          id: 'operators-nullish-coalescing',
          source:
            '/src/markdowns/03_Operators/Nullish_coalescing_operator.html',
          summary: [
            `<p>The nullish coalescing <code>??</code> operator is a logical operator that <i>returns its right-hand side operand when its left-hand side operand is <code>null</code> or <code>undefined</code>, and otherwise returns its left-hand side operand</i>.</p>`,
          ],
        },
        {
          title: 'Short Circuiting with <code>&&</code> and <code>||</code>',
          id: 'operators-short-circuiting',
          source: '/src/markdowns/03_Operators/Short_Circuiting.html',
          summary: [
            `<p>The two Short-Circuit operators are represented with the symbol <code>&&</code> and <code>||</code>. <i>They are basically used to <u>combine expressions</u></i>.</p>`,
            `<p>Although short-circuit operators are basically used to combine expressions, <i>you can use them to <u>execute statements conditionally</u></i>.</p>`,
            `<h3>Using the <code>&&</code> operator</h3>
            <p><code>true && statement</code> (if the first condition is <code>true</code>, the <i>statement is executed</i>)</p>
            <p><code>false && statement</code> (if the first condition is <code>false</code>, the <i>statement is NOT executed</i>)</p>`,
            `<h3>Using the <code>||</code> operator</h3>
            <p><code>true || statement</code> (if the first condition is <code>true</code>, the <i>statement is NOT executed</i>)</p>
            <p><code>false || statement</code> (if the first condition is <code>false</code>, the <i>statement is executed</i>)</p>`,
            `<p>Short-circuit operators can also be used as a Ternary or Conditional operator.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Conditional (ternary) operator',
      id: 'operators-conditional-ternary',
      source: '/src/markdowns/03_Operators/Conditional_(ternary)_operator.html',
      summary: [
        `<p>The conditional (ternary) operator is the <i>only JavaScript operator that takes three operands</i>: a condition followed by a question mark <code>?</code>, then an expression to execute if the condition is truthy followed by a colon <code>:</code>, and finally the expression to execute if the condition is falsy.</p>`,
        `<p>This operator is frequently used as an alternative to an <code>if...else</code> statement.</p>`,
        `<p>The Conditional (Ternary) operator is mostly used to <i>assigns a value to a variable based on some condition</i>.</p>`,
        `<p>The ternary operator is right-associative, which means it can be "chained".</p>`,
      ],
    },
    {
      title: 'Optional Chaining operator <code>?.</code>',
      id: 'operators-optional-chaining',
      source: '/src/markdowns/03_Operators/Optional_Chaining_operator.html',
      summary: [
        `<p>The optional chaining <code>?.</code> operator <i>accesses an object's property or calls a function</i>. If the object is <code>undefined</code> or <code>null</code>, <i>it returns <code>undefined</code> instead of throwing an error</i>.</p>`,
        `<h3>Optional chaining with objects & function calls</h3>
        <p>The <code>?.</code> operator is like the <code>.</code> chaining operator, except that <i>instead of causing an error if a reference is nullish (<code>null</code> or <code>undefined</code>), the expression short-circuits with a return value of <code>undefined</code>. When used with function calls, it returns <code>undefined</code> if the given function does not exist</i>.</p>`,
        `<h3>Optional chaining with expressions</h3>
        <p>You can also use the optional chaining operator with bracket notation, which allows passing an expression as the property name: <code>const name = obj?.['property-name']</code>.</p>`,
        `<p>With nested structures, it is possible to use <code>?.</code> operator multiple times.</p>`,
        `<p>The <code>?.</code> operator may be used after optional chaining in order to build a default value when none was found.</p>`,
      ],
    },
  ],
};

const conditionalStatements = {
  name: 'Conditional statements',
  sections: [
    {
      title: 'Statements vs Expressions',
      id: 'statements-vs-expressions',
      source:
        '/src/markdowns/04_Conditional_statements/Statements_vs_Expressions.html',
      summary: [
        `<p><i>Any unit of code that can be evaluated to a value is an expression</i>. Since <i>expressions produce values</i>, they can appear anywhere in a program where JavaScript expects a value, such as the arguments of a function invocation.</p>`,
        `<ul>JavaScript has the following <b>expression categories</b>:
        <li>- <i>arithmetic</i> expressions (expressions that evaluate to a numeric value)</li>
        <li>- <i>string</i> expressions (expressions that evaluate to a string)</li>
        <li>- <i>logical</i> expressions (expressions that evaluate to the Boolean value <code>true</code> or <code>false</code>)</li>
        <li>- <i>primary</i> expressions (refer to stand alone expressions such as literal values, certain keywords and variable values)</li>
        <li>- <i>assignment</i> expressions (when expressions use the <code>=</code> operator to assign a value to a variable, it is called an assignment expression)</li>
        <li>- <i>left-hand-side</i> expressions (expressions that can appear on the left side of an assignment expression)</li>
        <li>- <i>expressions with side effects</i> (as we just saw with assignment expressions, expressions with side effects are those that result in a change or a side effect such as setting or modifying the value of a variable through the assignment operator <code>=</code>, function call, incrementing or decrementing the value of a variable)</li>
        </ul>
        `,
        `<p><i>A statement is an instruction to perform a specific action</i>: creating variables, functions, loops etc.</p>`,
        `<ul>Statements in JavaScript can be classified into the following <b>categories</b>:
        <li>- <i>declaration</i> statements (such type of statements create variables and functions by using the <code>var</code>, <code>let</code> or <code>const</code> and function statements respectively)</li>
        <li>- <i>expression</i> statements (wherever JavaScript expects a statement, you can also write an expression. Such statements are referred to as expression statements. But the reverse does not hold. You cannot use a statement in the place of an expression)</li>
        <li>- <i>conditional</i> statements (conditional statements execute statements based on the value of an expression. Examples of conditional statements includes the <code>if..else</code> and <code>switch</code> statements)</li>
        <li>- <i>loops</i> and <i>jumps</i> (Looping statements includes the following statements: <code>while</code>, <code>do/while</code>, <code>for</code> and <code>for...in</code>. Jump statements are used to make the JavaScript interpreter jump to a specific location within the program. Examples of jump statements includes <code>break</code>, <code>continue</code>, <code>return</code> and <code>throw</code>)</li>
        <li>- <i>function declarations</i></li>
        </ul>
        `,
      ],
    },
    {
      title: 'Control flow and error handling',
      id: 'control-flow-and-error-handling',
      source:
        '/src/markdowns/04_Conditional_statements/Control_flow_and_error_handling.html',
      summary: [
        `<p>JavaScript supports a compact set of statements, specifically <i>control flow statements</i>, that you can use to incorporate a great deal of interactivity in your application.</p>
        `,
        `<p>The semicolon (<code>;</code>) character is used to separate statements in JavaScript code.</p>`,
      ],
    },
    {
      title: 'Truthy & Falsy Values',
      id: 'truthy-and-falsy-values',
      source:
        '/src/markdowns/04_Conditional_statements/Truthy_&_Falsy_Values.html',
      summary: [
        `<h3>Boolean context & Type coercion</h3>
        <p>In JavaScript, a truthy value is a value that is considered <code>true</code> when encountered in a <i>Boolean context</i>. JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.</p>`,
        `<p><i>JavaScript uses type coercion in Boolean contexts</i>.</p>`,
        `<ul>All values are truthy unless they are defined as falsy. That is, <i>all values are truthy except</i>:
        <li>- <code>false</code></li>
        <li>- <code>0</code>, <code>-0</code>, <code>0n</code></li>
        <li>- empty string <code>""</code></li>
        <li>- <code>null</code></li>
        <li>- <code>undefined</code></li>
        <li>- <code>NaN</code></li>
        </ul>
        `,
      ],
    },
    {
      title: '<code>if{...} else{...}</code>, <code>else if</code> statements',
      id: 'if-else-else-if-statements',
      source:
        '/src/markdowns/04_Conditional_statements/if__else__if_else_statements.html',
      summary: [
        `<p>When you're writing code, <i>you don't always want to execute exactly the same code top to bottom</i>. Sometimes you have some condition that should be met for some code to be executed, and execute some other code if the condition is not met.</p>`,
        `<p><i>Conditional statements</i> are used to perform <i>different actions</i> based on <i>different conditions</i>.</p>`,
        `<ul>In JavaScript we have the following conditional statements:
        <li>- <code>if</code></li>
        <li>- <code>else</code></li>
        <li>- <code>else if</code></li>
        <li>- <code>switch</code></li>
        </ul>
        `,
        `<p>The <code>if</code> statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional <code>else</code> clause will be executed.</p>`,
        `<p>Multiple <code>if...else</code> statements can be nested to create an <code>else if</code> clause.</p>`,
      ],
    },
    {
      title: 'The <code>switch</code> statement',
      id: 'the-switch-statement',
      source:
        '/src/markdowns/04_Conditional_statements/The_Switch_Statement.html',
      summary: [
        `<p>The <code>switch</code> statement is used to perform <i>different actions</i> based on <i>different conditions</i>. Use the <code>switch</code> statement to <i>select one of many code blocks to be executed.</i></p>`,
        `<ul>This is how it works:
        <li>- The <code>switch</code> expression is <i>evaluated once</i></li>
        <li>- The value of the expression is <i>compared</i> with the values of each case</li>
        <li>- <i>If there is a match</i>, the associated block of code is executed</li>
        <li>- <i>If there is no match</i>, the default code block is executed</li>
        </ul>
        `,
        `<h3>The <code>switch</code> statement & <code>break</code> statement</h3>
        <p><i>When JavaScript reaches a <code>break</code> keyword, it breaks out of the <code>switch</code> block</i>. This will stop the execution inside the <code>switch</code> block.</p>`,
        `<h3>The <code>switch</code> statement & <code>default</code> statement</h3>
        <p>The <code>default</code> keyword <i>specifies the code to run if there is <u>no case match</u></i>.</p>`,
        `<h3>Switching details</h3>
        <p>-If <i>multiple cases matches a expression value</i>, the first case is selected</p>
        <p>-If <i>no matching cases are found</i>, the program continues to the <code>default</code> label</p>
        <p>-If <i>no <code>default</code> label is found</i>, the program continues to the statement(s) <u>after</u> the <code>switch</code>.</p>`,
        `<p><code>switch</code> cases use strict comparison <code>===</code>.</p>`,
        `<p>The <code>switch</code> statement is an alternative to <code>if{...} else{...}</code> chains.</p>`,
      ],
    },
  ],
};

const loops = {
  name: 'Loops & Iteration',
  sections: [
    {
      title: 'Introduction to Loops & Iteration',
      id: 'intro-to-loops-and-iteration',
      source:
        '/src/markdowns/05_Loops_&_Iteration/Introduction_to_Loops_and_Iteration.html',
      summary: [
        `<p>Loops can <i>execute a block of code a number of times</i>. Loops are handy, if you want to <i>run the same code over and over again, each time with a different value</i>.</p>`,
        `<p>There are <i>many different kinds of loops</i>, but they all essentially do the same thing: they <i>repeat</i> an action some number of times.</p>`,
        `<p>The various loop mechanisms offer <i>different ways to determine the start and end points of the loop</i>.</p>`,
        `<ul>JavaScript supports <b>different kinds of loops</b>:
        <li>- <b><code>for</code></b> loops through a block of code a number of times (repeats until a specified condition evaluates to <code>false</code>)</li>
        <li>- <b><code>for...of</code></b> loops through the values of an <u>iterable</u> object (creates a loop iterating over iterable objects:  <code>Array</code>, <code>Map</code>, <code>Set</code>, <code>arguments</code> object and so on)</li>
        <li>- <b><code>for...in</code></b> loops through the <u>properties</u> of an object (iterates a specified variable over all the enumerable properties of an object)</li>
        <li>- <b><code>while</code></b> loops through a block of code <u>while a specified condition</u> is <code>true</code> (executes its statements as long as a specified condition evaluates to <code>true</code>)</li>
        <li>- <b><code>break</code></b> breaks out of a loop</li>
        <li>- <b><code>continue</code></b> skips a value in a loop (restart a <code>while</code>, <code>do-while</code>, <code>for</code> or <code>label</code> statement)</li>
        </ul>
        `,
      ],
    },
    {
      title: '<code>for</code> statement',
      id: 'for-statement',
      source: '/src/markdowns/05_Loops_&_Iteration/for_statement.html',
      summary: [
        `<p>A <code>for</code> statement <i><u>repeats until</u> a specified condition evaluates to <code>false</code></i>.</p>`,
        `<p>The <code>for</code> statement creates a loop that consists of <i>three <u>optional</u> expressions</i>, enclosed in parentheses and separated by semicolons <code>;</code>, followed by a statement (usually a block statement) to be executed in the loop.</p>`,
        `<h3>Nested loops</h3>
        <p>A nested loop has <i>one loop inside of another</i>. When a loop is nested inside another loop, the inner loop runs many times inside the outer loop. <i>The inner loop must finish all of its iterations before the outer loop can continue to its next iteration</i>.</p>
        `,
        `<p>Avoid infinite loops!</p>`,
        `<p>Do NOT initialize a function inside of a loop.</p>`,
      ],
    },
    {
      title: '<code>for...of</code> statement',
      id: 'for-of-statement',
      source: '/src/markdowns/05_Loops_&_Iteration/for...of_statement.html',
      summary: [
        `<p>The <code>for...of</code> statement <i>loops through the <u>values</u> of an <u>iterable object</u></i>, including: built-in <code>String</code>, <code>Array</code>, array-like objects (e.g., <code>arguments</code> or <code>NodeList</code>), <code>TypedArray</code>, <code>Map</code>, <code>Set</code>, and user-defined iterables.</p>`,
        `<p>A <code>for...of</code> loop operates on the values sourced from an iterable one by one in <i>sequential order. Each iteration creates a new variable</i>. Reassigning the variable inside the loop body does not affect the original value in the iterable.</p>`,
        `<p>You can use destructuring in <code>for...of</code> statement.</p>`,
        `<h3>Closing or skip iterators</h3>
        <p><code>break</code> exits the loop and goes to the first statement after the loop body, while <code>continue</code> skips the rest of the statements of the current iteration and proceeds to the next iteration.</p>
        <p>In <code>for...of</code> loops, abrupt iteration termination can be caused by <code>break</code>, <code>throw</code> or <code>return</code>. In these cases, the iterator is closed.</p>`,
        `<h3>Difference between <code>for...of</code> and <code>for...in</code></h3>
        <ul>Both <code>for...of</code> and <code>for...in</code> statements iterate over something. The main difference between them is in what they iterate over:
        <li>- The <code>for...of</code> statement iterates over values that the <i>iterable object</i> defines to be iterated over</li>
        <li>- The <code>for...in</code> statement iterates over the <i>enumerable properties</i> of an object</li>
        </ul>
        `,
      ],
    },
    {
      title: '<code>for...in</code> statement',
      id: 'for-in-statement',
      source: '/src/markdowns/05_Loops_&_Iteration/for...in_statement.html',
      summary: [
        `<p><code>for...in</code> <i>iterates over all <u>enumerable properties</u> of an object that are keyed by strings</i> (ignoring ones keyed by Symbols), including <i>inherited enumerable properties (iterates over the entire prototype chain)</i>.</p>`,
        `<p>A <code>for...in</code> loop <i><u>only</u> iterates over <u>enumerable, non-symbol properties</u></i>.</p>`,
        `<p>A <code>for...in</code> loop iterates over the properties of an object in an <i>arbitrary order</i>. Do not use <code>for...in</code> to iterate an array if the index order is important. Use a <code>for</code> loop instead.</p>`,
        `<h3><code>for...in</code> iterates over the entire prototype chain</h3>
        <p><code>for...in</code> loop will iterate over all enumerable properties of the object itself and those the object inherits from its prototype chain.</p>`,
        `<h3><code>for...in</code> vs <code>Object.keys()</code></h3>
        <p>If you only want to consider <i>properties attached to the <u>object itself</u> (iterating over own properties only) and not its prototypes</i>, you can use <code>Object.keys(myObject)</code>. <code>Object.keys(myObject)</code> returns an array of a given object's own enumerable string-keyed property names.</p>`,
        `<h3><code>for...in</code> over arrays</h3>
        <p>Array indexes are just <i>enumerable properties with integer names</i> and are otherwise identical to general object properties. There is no guarantee that <code>for...in</code> will return the indexes in any particular order. Therefore, it is better to use a <code>for</code> loop with a numeric index (or <code>Array.prototype.forEach()</code> or the <code>for...of</code> loop) when iterating over arrays where the order of access is important.</p>`,
        `<p>You can use destructuring in <code>for...in</code> statement.</p>`,
        `<h3>Why NOT use <code>for...in</code>?</h3>
        <p>Many JavaScript style guides and linters recommend against the use of <code>for...in</code>, because it <i>iterates over the entire prototype chain</i> which is rarely what one wants, and may be a confusion with the more widely-used <code>for...of</code> loop.</p>`,
      ],
    },
    {
      title: '<code>while</code> statement',
      id: 'while-statement',
      source: '/src/markdowns/05_Loops_&_Iteration/while_statement.html',
      summary: [
        `<p>The <code>while</code> loop loops through a block of code <i>as long as a specified condition is <code>true</code></i>. The condition is evaluated before executing the statement.</p>`,
        `<h3>Avoid infinite loops!</h3>
        <p>Make sure the condition in a loop eventually becomes <code>false</code> — otherwise, the loop will never terminate!</p>`,
        `<p>Do NOT initialize a function inside of a loop!</p>`,
      ],
    },
    {
      title: '<code>break</code> and <code>continue</code> statements',
      id: 'break-and-continue-statements',
      source:
        '/src/markdowns/05_Loops_&_Iteration/Break_&_Continue_Statements.html',
      summary: [
        `<p>The <code>break</code> statement <i>"jumps <u>out</u>"</i> of a loop.</p>`,
        `<p>The <code>continue</code> statement <i>"jumps <u>over</u>"</i> one iteration in the loop. The <code>continue</code> statement <i>breaks one iteration</i> (in the loop) if a specified condition occurs, and continues with the next iteration in the loop.</p>`,
        `<ul>In contrast to the <code>break</code> statement, <code>continue</code> does not terminate the execution of the loop entirely, but instead:
        <li>- in a <code>while</code> loop, it jumps back to the condition</li>
        <li>- in a <code>for</code> loop, it jumps to the update expression</li>
        </ul>
        `,
      ],
    },
  ],
};

const functions = {
  name: 'Functions',
  sections: [
    {
      title: 'Function introduction',
      id: 'function-introduction',
      source: '/src/markdowns/06_Functions/Function_introduction.html',
      summary: [
        `<p>Programs are simply <i>assigning memory, for example assigning a value to a variable</i>, and then <i>running a function for the program to do something with those variables</i>. That's all programs are, and without functions, our programs wouldn't do anything.</p>
        <p>Functions are an important concept in all programming languages.</p>
        `,
        `<h3>What is a function?</h3>
        <p>A JavaScript function is a <i>block of code</i> designed to <i>perform a particular task</i>.</p>
        <p>Functions allow you to <i>store a piece of code that does a single task inside a defined block</i>, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times.</p>
        `,
        `<h3>Why functions?</h3>
        <ul>
        <li>- You can <i>reuse code</i>: define the code once, and use it many times.</li>
        <li>- You can <i>use the same code many times with <u>different arguments</u>, to produce <u>different results</u></i>.</li>
        </ul>
        `,
        `<h3>Built-in functions</h3>
        <p>The JavaScript language has many built-in functions to <i>allow you to do useful things without having to write all that code yourself</i>.</p>
        <p>In fact, some of the code you are calling when you invoke (a fancy word for run, or execute) a built-in browser function couldn't be written in JavaScript — many of these functions are calling parts of the background browser code, which is written largely in low-level system languages like C++, not web languages like JavaScript. Bear in mind that <i>some built-in browser functions are not part of the core JavaScript language — some are defined as part of browser APIs, which build on top of the default language to provide even more functionality</i>.</p>
        `,
        `<h3>Functions vs Methods</h3>
        <p>Functions that are <i>part of objects</i> are called <i>methods</i>, so <i>a method is a function that is a property of an object</i>.</p>
        `,
        `<h3>Function hoisting</h3>`,
      ],
    },
    {
      title: 'Higher Order Functions',
      id: 'higher-order-functions',
      source: '/src/markdowns/06_Functions/Higher_Order_Functions.html',
      summary: [
        `<p>A programming language is said to have <i><u>first-class functions</u> when functions in that language are <u>treated like any other variable</u></i>.</p>`,
        `<h3>Functions are objects</h3>
        <p>In JavaScript functions are objects. This means we can pass them around, like objects, like things that contain data. So besides just doing things for us and performing actions in our code, we can also store them as data, move them around and have some really interesting applications</p>
        `,
        `<h3>Functions are first-class citizen in JavaScript</h3>
        <ul>Because function are objects, you'll often hear people say that functions are a first-class citizen in JavaScript. What does that mean? Well, it means 3 things:
        <li>- Functions can be <i>assigned to variables and properties of objects</i>. In some languages, I can't do that. I can just run functions to perform actions, but that's it. In JavaScript, I can assign functions to a variable or even an object property, which then becomes a method.</li>
        <li>- A function can be <i>passed as an argument/parameter to other function</i> (<u>callback functions</u>).</li>
        <li>- A function can be <i>returned by another function</i>.</li>
        </ul>
        `,
      ],
    },
    {
      title: 'Function syntax',
      id: 'function-syntax',
      source: '/src/markdowns/06_Functions/Function_syntax.html',
      summary: [
        `<h3>4 kinds of functions</h3>
        <ul>Broadly speaking, JavaScript has <i>four kinds of functions</i>:
        <li>- <i>Regular function</i>: can return anything; always runs to completion after invocation;</li>
        <li>- <i>Async function</i>: returns a <code>Promise</code>; can be paused and resumed with the <code>await</code> operator;</li>
        <li>- Generator function;</li>
        <li>- Async generator function.</li>
        </ul>`,
        `<h3>3 ways to define a function</h3>
        <ul>For every kind of function, there are <i>three ways to define it</i>:
        <li>- Declaration;</li>
        <li>- Expression;</li>
        <li>- Constructor.</li>
        </ul>`,
        `<h3>Special function syntaxes</h3>
        <p>In addition, there are special syntaxes for defining <i>arrow functions</i> and <i>methods</i>, which provide more precise semantics for their usage. <i>Classes</i> are conceptually not functions (because they throw an error when called without <code>new</code>), but they also inherit from <code>Function.prototype</code>, and have <code>typeof MyClass === "function"</code>.</p>
        <p>All syntaxes do approximately the same thing, but there are some subtle behavior differences (read the entire article to see all differences).</p>
        `,
        `<h3>Function declaration vs function expression</h3>
        <p>A JavaScript function declaration is defined with the <i><code>function</code> keyword</i>, followed by a <i>name</i>, followed by parentheses <i>()</i>. Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).</p>
        <p>A JavaScript function can also be defined using an expression. <i>A function expression can be stored in a variable.</i> After a function expression has been stored in a variable, the variable can be used as a function.</p>
        <p>Function expressions are convenient when passing a function as an argument to another function.</p>
        `,
        `<h3>Anonymous functions</h3>
        <p>With function expression you can define anonymous functions. An anonymous function is a <i>function without a name</i>. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.</p>
        <p><i>However, a name can be provided with a function expression.</i> Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces.</p>
        `,
        `<h3>Arrow functions</h3>
        <p>With function expression you can define arrow functions. Arrow functions allows a <i>short syntax</i> for writing function expressions. With arrow functions you don't need the <code>function</code> keyword, and in some cases the <code>return</code> keyword (called implicit returns) and the curly brackets <code>{}</code>.</p>
        <p>Two factors influenced the introduction of arrow functions: shorter syntax and non-binding of <code>this</code> keyword. Arrow functions do not have their own <code>this</code> keyword (the <code>this</code> value of the enclosing execution context is used). <i>They are not well suited for defining object methods.</i></p>
        <p>Arrow functions are <i>not hoisted</i>. They must be defined before they are used.</p>
        `,
        `<h3>Constructor Functions</h3>`,
      ],
    },
    {
      title: 'Function parameters & arguments',
      id: 'function-parameters-and-arguments',
      source:
        '/src/markdowns/06_Functions/Function_parameters_and_arguments.html',
      summary: [
        `<h3>Parameters vs arguments</h3>
        <ul>Parameters and arguments have slightly different meanings:
        <li>- a function <i>parameter</i> it's <i>declared in the bracket-enclosed list of the <u>function's definition</u></i></li>
        <li>- a function <i>argument</i> it's <i>the value that is actually passed to the function in the <u>function call</u></i></li>
        </ul>`,
        `<h3>Arguments are passed by value vs objects are passed by reference</h3>
        <p><i>Arguments are always passed by value and never passed by reference.</i> This means that if a function reassigns a parameter, the value won't change outside the function. <i>More precisely, object arguments are passed by reference</i>, which means if the object's properties are mutated, the change will impact the outside of the function.</p>
        <p><i>Each function parameter is a simple identifier that you can access in the local scope.</i> Function parameters behaves like local variables.</p>
        `,
        `<h3>Three special parameter syntaxes</h3>
        <ul>There are 3 special parameter syntaxes:
        <li>- <i>Default parameters</i> allow formal parameters to be initialized with default values if no value or <code>undefined</code> is passed.</li>
        <li>- The <i>rest parameter</i> allows representing an indefinite number of arguments as an array.</li>
        <li>- <i>Destructuring</i> allows unpacking elements from arrays, or properties from objects, into distinct variables.</li>
        </ul>
        `,
        `<h3>Parameter rules</h3>
        <ul>
        <li>- JavaScript function definitions do not specify data types for parameters;</li>
        <li>- JavaScript functions do not perform type checking on the passed arguments;</li>
        <li>- JavaScript functions do not check the number of arguments received;</li>
        <li>- When you need to specify multiple parameters, they are separated by commas.</li>
        </ul>
        `,
        `<h3>Default parameters</h3>
        <p>In JavaScript, <i>parameters of functions default to <code>undefined</code>. However, in some situations it might be useful to set a different default value.</i> This is exactly what default parameters do. Default function parameters allow named parameters to be initialized with default values if no value or <code>undefined</code> is passed.</p>
        <p>If you're writing a function and want to support optional parameters, you can specify default values by adding <code>=</code> after the name of the parameter, followed by the default value.</p>
        <p>You can use default value assignment with the destructuring assignment notation to set a default value when you use destructuring.</p>
        `,
        `<h3>The <code>arguments</code> object</h3>
        <p>You can refer to a function's arguments within the function by using the <code>arguments</code> object. <code>arguments</code> is an array-like object containing the arguments passed to the currently executing function.</p>
        <p>The <code>arguments</code> variable is "array-like", but not an array. It is array-like in that it has a numbered index and a <code>length</code> property. However, it does not possess all of the array-manipulation methods.</p>
        <p>With modern JavaScript, you most likely want to avoid <code>arguments</code> and use instead of it the spread syntax.</p>
        `,
      ],
    },
    {
      title: 'Function <code>return</code> statement',
      id: 'function-return-statement',
      source: '/src/markdowns/06_Functions/Function_return_statement.html',
      summary: [
        `<p>The <code>return</code> statement <i>ends function execution</i> and <i>specifies a value to be returned to the function caller</i>. The <code>return</code> statement allows you to <i>return an arbitrary value from the function</i>.</p>
        <p>By default, if a function's execution doesn't end at a <code>return</code> statement, or if the <code>return</code> keyword doesn't have an expression after it, then the return value is <code>undefined</code>.</p>
        <p><i>One function call can only return one value</i>, but you can <i>simulate the effect of returning multiple values by returning an object or array</i> and destructuring the result.</p>
        <p>The <code>return</code> statement can only be used within function bodies.</p>
        `,
        `<ul>The <code>return</code> statement has different effects when placed in different functions:
        <li>- In a <i>plain function</i>, the call to that function <u>evaluates to the return value</u>;</li>
        <li>- In an <i>async function</i>, the produced promise is <u>resolved with the returned value</u>.</li>
        </ul>`,
        `<p>If a <code>return</code> statement is executed within a <code>try</code> block, its <code>finally</code> block, if present, is first executed, before the value is actually returned.</p>`,
        `<p>Constructors called with <code>new</code> have a different set of logic to determine their return values.</p>`,
      ],
    },
    {
      title: 'Function invocation',
      id: 'function-invocation',
      source: '/src/markdowns/06_Functions/Function_invocation.html',
      summary: [
        `<p><i><u>Defining</u> a function does not <u>execute</u> it.</i> Defining it names the function and specifies what to do when the function is called. <i>Calling the function actually performs the specified actions with the indicated parameters.</i></p>
        <p><i>The <code>()</code> operator invokes the function</i>: accessing a function without <code>()</code> will return the function object instead of the function result.</p>
        `,
        `<h3>"Direct" vs "Indirect" Function Execution</h3>
        <p>The code inside a function is not executed when the function is defined. The code inside a function is executed when the function is invoked</p>
        <ul>The code inside the function will execute when "something" invokes (calls) the function:
        <li>- When an event occurs (when a user clicks a button);</li>
        <li>- When it is invoked (called) from JavaScript code;</li>
        <li>- Automatically (self invoked).</li>
        </ul>
        `,
        `<h3>Function can call itself (recursion)</h3>
        <p><i>A function can refer to and call itself.</i> A function that calls itself is called a <i>recursive function</i>. In some ways, <i>recursion is analogous to a loop</i>.</p>
        `,
        `<h3>Tagged templates</h3>`,
      ],
    },
    {
      title: 'Function invocation & <code>this</code> keyword',
      id: 'function-invocation-and-this-keyword',
      source:
        '/src/markdowns/06_Functions/Function_invocation_&_this_keyword.html',
      summary: [
        `<h3>What is <code>this</code> keyword?</h3>
        <p><i><code>this</code> is the object that the function is a property of.</i></p>
        <p><i>In JavaScript, the <code>this</code> keyword refers to an object: which object depends on how the function that has the <code>this</code> inside of it is being invoked (used or called).</i></p>
        <p>The <code>this</code> keyword refers to different objects depending on how the function that have <code>this</code> inside of it is used/called/invoked.</p>
        `,
        `<h3>What is the value of <code>this</code>?</h3>
        <p><i>The value of <code>this</code> is always set when the function is invoked</i>, not when the function is declared.</p>
        <ul>The <code>this</code> keyword refers to different objects depending on how the function that have <code>this</code> inside of it is used/called/invoked.
        <li>- In an <i>object method</i>, <code>this</code> refers to the object;</li>
        <li>- <i>Alone</i>, <code>this</code> refers to the global <code>window</code> object;</li>
        <li>- <i>Alone, in Strict Mode</i>, <code>this</code> is <code>undefined</code>;</li>
        <li>- In a <i>function</i>, <code>this</code> refers to the global <code>window</code> object;</li>
        <li>- In a <i>function, in Strict Mode</i>, <code>this</code> is <code>undefined</code>;</li>
        <li>- In an <i>event</i>, <code>this</code> refers to the element that received the event;</li>
        <li>- <i>Arrow function</i> don't have their own <code>this</code>;</li>
        <li>- <i>Methods like <code>call()</code>, <code>apply()</code>, and <code>bind()</code> can refer <code>this</code> to any object.</i></li>
        </ul>
        `,
        `<h3>All functions are methods</h3>
        <p><i>In JavaScript all functions are object methods</i>. If a function is not a method of a JavaScript object, it is a function of the global <code>window</code> object.</p>
        <ul>You can invoke a function:
        <li>- as a global object (function without an owner object);</li>
        <li>- as a method (function with an owner object);</li>
        <li>- with a Function Constructor.</li>
        </ul>
        `,
        `<h3>What is the benefits of <code>this</code>?</h3>
        <ul>The 2 main benefits of <code>this</code>:
        <li>- gives methods access to their object;</li>
        <li>- execute the same function code for multiple objects.</li>
        </ul>
        <p><i><code>this</code> keyword was created to gives methods access to their object.</i> <code>this</code> acts as a placeholder for an object, and <code>this</code> we'll refer to whichever object called that function/method.</p>
        `,
        `<h3><code>this</code> & Dynamic Scope vs Lexical Scope</h3>
        <p>A big gotcha for a lot of people working with <code>this</code> is when a <u>function is ran inside of another function</u>. It gets a little confusing, but we can remember <i>who called the function</i>.</p>
        <p><i><code>this</code> is <u>not lexically scoped</u>, it doesn't matter where <code>this</code> is write in our code, it matters <u>how the function was called</u></i>.</p>
        `,
        `<h3><code>this</code> & arrow functions</h3>
        <p><i>Arrow functions don't have their own <code>this</code></i>. It will lexically bound <code>this</code> to the surrounding object.</p>
        `,
      ],
    },
    {
      title:
        'The <code>this</code> keyword & <code>call()</code>, <code>apply()</code> and <code>bind()</code>',
      id: 'the-this-keyword-and-call-apply-and-bind',
      source:
        '/src/markdowns/06_Functions/The_this_keyword_&_call__apply__and__bind.html',
      summary: [
        `<h3>Manipulate the <code>this</code> keyword</h3>
        <p>Usually <code>this</code> refers to the current object (the calling object). With <code>call()</code>, <code>apply()</code> and <code>bind()</code> <i>you can assign a different <code>this</code> object when calling an existing function</i>.</p>
        <p> With <code>call()</code>, <code>apply()</code> and <code>bind()</code>, <i>you can write a method once, and then inherit it in another object, without having to rewrite the method for the new object</i>.</p>
        `,
        `<h3>Methods behavior</h3>
        <p>- <code>call()</code> method calls the function with a given <code>this</code> value and <i>arguments provided individually</i>;</p>
        <p>- <code>apply()</code> method is similar to <code>call()</code>, the difference is with <code>apply()</code> you<i> use an array instead of providing arguments individually</i>;</p>
        <p>- <code>bind()</code> method <i>creates a new function that, when called, has its <code>this</code> set to the provided value, with a given sequence of arguments preceding any provided when the new function is called</i>.</p>`,
      ],
    },
    {
      title:
        'Self-Invoking functions / Immediately Invoked Function Expressions (IIFE)',
      id: 'self-invoking-functions-immediately-invoked-function-expressions-iife',
      source: '/src/markdowns/06_Functions/Self-Invoked_Functions.html',
      summary: [
        `<p>Function expressions can be made "self-invoking". <i>A self-invoking expression is invoked (started) automatically, without being called (runs as soon as it is defined).</i></p>
        <p>Function expressions will execute automatically if the expression is followed by <code>()</code>. You have to add parentheses around the function to indicate that it is a function expression.</p>
        <p>You cannot self-invoke a function declaration.</p>
        `,
        `<ul>Use cases:
        <li>- Avoid polluting the global namespace;</li>
        <li>- Execute an async function;</li>
        <li>- The module pattern;</li>
        <li>- <code>for</code> loop with <code>var</code> before ES6.</li>
        </ul>`,
      ],
    },
    {
      title: 'Closures',
      id: 'closures',
      source: '/src/markdowns/06_Functions/Closures.html',
      summary: [
        `<h3>Local vs global variables</h3>
        <p>JavaScript variables can belong to the local or global scope. In a web page, <i>global variables belong to the <code>window</code> object</i>.</p>
        <p><i>Variables declared within a JavaScript function, become local to the function.</i> Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.</p>
        <p>Local variables are created when a function starts, and deleted when the function is completed.</p>
        <p>A function can access all variables defined inside it (local variables) and outside it (global variables).</p>
        <p><i>Global variables can be used (and changed) by all scripts in the page (and in the window). A local variable can only be used inside the function where it is defined, it is hidden from other functions and other scripting code. Global and local variables with the same name are different variables, modifying one does not modify the other.</i></p>
        <p>Variables created without a declaration keyword <code>var</code>, <code>let</code> or <code>const</code> are always global, even if they are created inside a function.</p>
        `,
        `<h3>Variable lifetime</h3>
        <p><i>Global variables live until the page is discarded. Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.</i></p>
        `,
        `<h3>Nested functions</h3>
        <p>All functions have access to the global scope. In fact, in JavaScript, <i>all functions have access to the scope "above" them</i>. JavaScript supports nested functions. Nested functions have access to the scope "above" them.</p>
        `,
        `<h3>Closures & lexical environment</h3>
        <p>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, <i>a closure gives you access to an outer function's scope from an inner function</i>.</p>
        <p>In JavaScript, closures are created every time a function is created, at function creation time.</p>
        <p><i>A closure always return a function that references to its surrounding!!! A closure is a function having access to the parent scope, even after the parent function has closed. Closures allow a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared.</i></p>
        `,
        `<h3>Closures & name conflicts</h3>
        <p>When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. <i>More nested scopes take precedence</i>. So, <i>the innermost scope takes the highest precedence</i>, while <i>the outermost scope takes the lowest</i>. This is the scope chain.</p>`,
        `<h3>Closures & memory efficiency</h3>
        <p>Two of the major reasons closures are so beneficial are memory efficiency and encapsulation.</p>
        <p>Using closures makes your code more memory efficient. <i>Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data.</i> This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.</p>
        `,
        `<h3>Closures & encapsulation</h3>
        <p>Encapsulation means the restriction of direct access to some of an object's components. It hides as much as possible of an object's internal parts and only exposes the necessary parts to run.</p>
        <p><i>Closures help us to NOT POLLUTE THE GLOBAL SCOPE!!!</i></p>
        `,
      ],
    },
    {
      title: 'Rest parameters for function definition',
      id: 'rest-parameters-for-function-definition',
      source: '/src/markdowns/06_Functions/Rest_parameter_and_functions.html',
      summary: [
        `<p>The <code>rest</code> parameter syntax <i>allows a function to accept an <u>indefinite number of arguments as an array</u></i>..</p>`,
        `<h3>Don't confuse <code>rest</code> with <code>spread</code></h3>
        <p>The <code>rest</code> operator looks like the <code>spread</code> operator. With <code>spread</code> operator you add three dots (<code>...</code>), but <i>the place where you use the <code>rest</code> operator is different from the <code>spread</code> operator</i>.</p>
        `,
        `<h3>How <code>rest</code> work?</h3>
        <p><i>A <u>function definition</u>'s <u>last parameter</u> can be <u>prefixed with</u> <code>...</code></i>, which will cause all remaining parameters to be placed within an array.</p>
        <p>Only the last parameter in a function definition can be a <code>rest</code> parameter.</p>
        <p>If you only have <code>rest</code> parameter as single function parameter and you call the function with just one argument, the only argument still gets put into an array. If you call the function with no arguments, the <code>rest</code> parameter will give you an empty array.</p>
        `,
        `<h3>The difference between <code>rest</code> parameters and the <code>arguments</code> object</h3>
        <ul>There are 3 main differences between <code>rest</code> parameters and the <code>arguments</code> object:
        <li>- <i>The <code>arguments</code> object is <u>not a real array</u></i>, while <i><code>rest</code> parameters are <u>Array instances</u></i>, meaning Array methods like <code>sort()</code>, <code>map()</code>, <code>forEach()</code> or <code>pop()</code> can be applied on it directly;</li>
        <li>- The <code>arguments</code> object has additional functionality specific to itself (like the <code>callee</code> property);</li>
        <li>- <i>The <code>...restParam</code> bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the <code>...restParam</code>.</i> Whereas the <code>arguments</code> object contains all of the parameters — including the parameters in the <code>...restParam</code> array — bundled into one array-like object.</li>
        </ul>
        <p><code>rest</code> parameters were introduced to reduce the boilerplate code that was commonly used for converting a set of <code>arguments</code> to an array.</p>
        `,
      ],
    },
    {
      title: 'Spread syntax for function calls',
      id: 'spread-syntax-for-function-calls',
      source:
        '/src/markdowns/06_Functions/Spread_syntax_and_function_calls.html',
      summary: [
        `<p>Spread syntax <code>...</code> allows an <i>iterable</i>, such as an <u>array</u> or <u>string</u>, to be <i>expanded</i> in places where zero or more arguments (for <i>function calls</i>) or elements (for <i>array literals</i>) are expected. In an <i>object literal</i> spread syntax allows an <u>object expression to be expanded</u> in places where zero or more key-value pairs are expected.</p>
        <p>spread operator <code>...</code> is an operator that in the end <i>pulls out all elements of an array and gives them to you as a standalone list of elements</i>. Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list.</p>
        <p>Only <u>iterable objects</u>, like arrays, can be spread in array and function parameters.</p>
        <p>When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit.</p>
        `,
        `<h3>Don't confuse <code>spread</code> with <code>rest</code></h3>
        <p>Spread syntax looks exactly like rest syntax. In a way, <i>spread syntax is the opposite of rest syntax</i>. Spread syntax <u>"expands"</u> an array into its elements, while rest syntax collects multiple elements and <u>"condenses"</u> them into a single element.</p>
        `,
      ],
    },
    {
      title: 'Destructuring parameters',
      id: 'destructuring-parameters',
      source:
        '/src/markdowns/06_Functions/Destructuring_function_parameters.html',
      summary: [
        `<p>Destructuring can be applied on function parameters to <i>extract values</i> and <i>assign them to local variables</i>.</p>`,
        `<p>The <i>destructured parameter cannot be omitted (it is required)</i>, otherwise it throws an error.</p>`,
        `<p><i>You can destructure an object directly on function parameters</i> or you can destructure an object inside the function body.</p>`,
      ],
    },
  ],
};

const arraysAndSets = {
  name: 'Data structures: Arrays & Sets',
  sections: [
    {
      title: 'Introduction to Arrays',
      id: 'introduction-to-arrays',
      source:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Introduction_to_Arrays.html',
      summary: [
        `<h3>What is an array?</h3>
        <p>Arrays are a way of <i>storing a <u>list of data</u></i> items under a single variable name. Arrays are <i>collections of data</i> which are <i>ordered</i> by an <i>index value</i>.</p>
        <p>If we didn't have arrays, we'd have to store every data item in a separate variable. This would be much longer to write out, less efficient, and more error-prone.</p>
        `,
        `<h3>Creating arrays: Array literal notation & Array Constructor</h3>
        <p>Arrays can be created with the shorthand syntax of <i>square brackets <code>[]</code></i> and items that are <i>separated by commas <code>,</code></i>. The bracket syntax is called an <i>array literal</i> or <i>array initializer</i>. It's shorter than other forms of array creation, and so is generally preferred.</p>
        <p>Another way to create an array is with the <i>Array constructor</i>. The <i>Array constructor</i> can be used to create an array of a given length, or to create an array with specific elements in it.</p>
        `,
        `<h3>What kind of data you can store in an array?</h3>
        <p>In an array we can store <i>various data types</i> — strings, numbers, objects, functions and even other arrays. <i>We can also mix data types in a single array</i> — we do not have to limit ourselves to storing only numbers in one array, and in another only strings. <i>In arrays we can store even expressions or functions calls that returns a value.</i></p>
        `,
        `<h3>What are "Iterables" and "Array-like Objects"?</h3>`,
        `<h3>Arrays <code>length</code> property</h3>
        <p>You can find out the length of an array (how many items are in it) in exactly the same way as you find out the length (in characters) of a string — by using the <code>length</code> property. <i>The <code>length</code> property is special, it always returns the <u>index of the last element plus one</u></i>.</p>
        <p><i>You can also assign to the <code>length</code> property.</i> Writing a value that is shorter than the number of stored items truncates the array. Writing <code>0</code> empties it entirely.</p>
        `,
        `<h3>Accessing and modifying array items: arrays indices</h3>
        <p><i>Items in an array are numbered, starting from zero.</i> This number is called the item's <i>index</i>. So the first item has index 0, the second has index 1, and so on. You can <i>access individual items in the array using bracket notation <code>[]</code> and supplying the item's index</i>, in the same way that you accessed the letters in a string.</p>
        <ul>Note that an array inside an array is called a <u>multidimensional array</u>. You can access an item inside an array that is itself inside another array by <i>chaining two sets of square brackets together</i>:
        <li><code>const random = ['tree', 795, [0, 1, 2]];</code></li>
        <li><code>random[2][2]; //[0, 1, 2]</code></li>
        </ul>
        `,
        `<h3>Nested / multidimensional arrays</h3>
        <p>Arrays can be assigned as a property of a new or an existing object.</p>
        <p><i>Objects are not really located "inside" arrays. They might appear to be "inside" in code, but each object in an array is a separate value.</i></p>`,
        `<h3>Arrays are reference types: Arrays vs Primitive Values</h3>
        <p>In programming languages, variables can hold different types of data, and these types are often categorized as either primitive types or reference types.</p>
        <p>Primitive values are simple data types that directly store their values in the variable.</p>
        <p>Arrays, on the other hand, are considered reference types. When you create an array and assign it to a variable, the variable doesn't directly contain the array's data. Instead, it holds a reference (memory address) to the location in memory where the array is stored.</p>
        `,
      ],
    },
    {
      title: 'Destructuring Arrays',
      id: 'destructuring-arrays',
      source:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Destructuring_arrays.html',
      summary: [
        `<h3>What is destructuring?</h3>
        <p>The destructuring assignment syntax is a JavaScript expression that makes it possible to <i>unpack values from arrays, or properties from objects, into distinct variables</i>.</p>
        <p><i>Destructuring arrays is a shortcut for assign arrays items to variables.</i> Is a feature that help you to split up an array into variables or constants, which you then can use throughout your code. It simply saves you the extra work of doing this manually and therefore can speed up your development process.</p>
        `,
        `<h3>Binding and assignment patterns</h3>
        <p>Destructuring syntax can be used for <i>variable declaration (also call binding)</i> or <i>variable assignment</i>. You can also handle nested structures by using nested destructuring syntax.</p>
        <ul>In array destructuring, you <i>use an array literal on the left-hand-side of an assignment expression</i>. Each variable name on the array literal maps to the corresponding item at the same index on the destructured array:
        <li><code>const rgb = [255, 200, 0];</code></li>
        <li><code>const [red, green, blue] = rgb;</code></li>
        </ul>
        <ul>For both object and array destructuring, there are <i>two kinds of destructuring patterns: <u>binding</u> pattern and <u>assignment</u> pattern</i>, with slightly different syntaxes:
        <li>- Biding pattern:
          <div><code>const rgb = [255, 200, 0];</code></div>
          <div><code>const [red, green, blue] = rgb;</code></div>
        <li>
        <li>- Assignment pattern:
          <div><code>let red, green, blue;</code></div>
          <div><code>const rgb = [255, 200, 0];</code></div>
          <div><code>[red, green, blue] = rgb;</code></div>
        </li>
        </ul>
        `,
        `<h3>Default values</h3>
        <p>If the number of items in the array is more than the number of local variables passed to the destructuring array literal, then the excess items are not mapped. But if the number of local variables passed to the destructuring array literal exceed the number of items in the array, then each excess local variable will be assigned a value of <code>undefined</code>, except you specify a default value.</p>
        <p>
          <div><code>const rgb = [200];</code></div>
          <div><code>const [red = 255, green, blue = 255] = rgb;</code></div>
        </p>
        `,
        `<h3>Skipping items</h3>
        <p>It is possible to skip some items you don’t want to assign to local variables and only assign the ones you are interested in.</p>
        <p>
          <div><code>const rgb = [200, 255, 100];</code></div>
          <div><code>const [, , blue] = rgb;</code></div>
        </p>
        `,
        `<h3>Swapping variables</h3>
        <p>One very nice application of array destructuring is in swapping local variables.</p>
        <p>
          <div><code>let width = 300;</code></div>
          <div><code>let height = 400;</code></div>
          <div><code>[width, height] = [height, width]</code></div>
        </p>
        `,
        `<h3>Nested array destructuring</h3>
        <p>Just as with objects, you can also do nested destructuring with arrays. <i>The corresponding item must be an array in order to use a nested destructuring array literal to assign items in it to local variables.</i></p>
        <p>
        <div><code>const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];</code></div>
        <div><code>const [hex, [red, green, blue]] = color;</code></div>
        </p>
        `,
        `<h3>Rest parameter & array destructuring</h3>
        <p>Sometimes you may want to assign some items to variables, while ensuring that the remaining items are captured (assigned to another local variable). The new <i>rest parameter</i> syntax (<code>...param</code>) added in ES6 can be used with destructuring to achieve this.</p>
        <p>
        <div><code>const rainbow = ['red', 'orange', 'yellow', 'indigo', 'violet'];</code></div>
        <div><code>const [red, , orange, ...otherColors] = rainbow;</code></div>
        </p>
        <p>The rest parameter, if used, must always appear as the last item in the destructuring array literal otherwise an error will be thrown.</p>
        <ul>You can use array destructuring and the rest parameter syntax to create an array clone:
        <li><code>const rainbow = ['red', 'orange', 'yellow', 'indigo', 'violet'];</code></li>
        <li><code>const [...rainbowClone] = rainbow;</code></li>
        </ul>
        `,
        `<h3>Mixed destructuring</h3>
        <p>There are cases when you are working with a pretty complex object/array structure and you need to assign some values from it to local variables. A good example would be an object with several deeply nested objects and arrays. In cases like this, you can use a combination of object destructuring and array destructuring to target certain parts of the complex structure as required.</p>
        `,
        `<h3>Destructuring patterns with other syntaxes</h3>
        <ul>In many syntaxes where the language binds a variable for you, you can use a destructuring pattern as well. These include:
        <li>- The looping variable of <code>for...in</code> and <code>for...of</code> loops;
        <li>- Function parameters;
        <li>- The <code>catch</code> binding variable.
        </ul>
        `,
      ],
    },
    {
      title: 'Rest Pattern in Arrays',
      id: 'rest-pattern-in-arrays',
      source: '',
      summary: [],
    },
    {
      title: 'Spread syntax & array literals',
      id: 'spread-syntax-and-array-literals',
      source:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Spread_syntax_and_arrays.html',
      summary: [
        `<h3>What is spread syntax?</h3>
      <p>Spread syntax <code>...</code> allows an <i>iterable</i>, such as an <u>array</u> or <u>string</u>, to be <i>expanded</i> in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal spread syntax allows an object expression to be expanded in places where zero or more key-value pairs are expected.</p>
      <p>Spread operator <code>...</code> is an operator that in the end <i>pulls out all elements of an array and gives them to you as a standalone list of elements</i>.</p>
      `,
        `<h3>Spread in array literals</h3>
      <p>You can use spread syntax <i>anywhere in the array literal</i>, and you may be use it <i>more than once</i>.</p>
      `,
        `<h3>Copying an array with spread syntax</h3>
      <p><i>Spread syntax effectively goes one level deep while copying an array.</i> Therefore, it may be unsuitable for copying multidimensional arrays.</p>
      <p>An important thing to keep in mind is when you use the spread operator to copy an array that store inside it items that are reference values (arrays/objects), <i>you are copy the reference value of that items</i>.</p>
      `,
        `<h3>Spread syntax vs rest syntax</h3>
      <p>Spread syntax looks exactly like rest syntax. In a way, <i>spread syntax is the opposite of rest syntax</i>. <p><i>Spread syntax <u>"expands"</u></i> an array into its elements, while <i>rest syntax <u>collects</u></i> multiple elements and "condenses" them into a single element.</p>
      `,
      ],
    },
    {
      title: '<code>Array.prototype</code> Methods',
      id: 'array-prototype-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'push()',
          id: 'array-push()',
          source: '/src/markdowns/07_Data_structures___Arrays_&_Sets/push.html',
          summary: [
            `<p>The <code>push()</code> method <i><u>adds</u> one or more items to the <u>end of an array</u></i> and <i>returns the new length of the array</i>.</p>
            <p>The <code>push()</code> method <i>mutates the original array</i>.</p>
            <ul>he <code>push()</code> method:
            <li>- adds new items <i>to the end</i> of an array;</li>
            <li>- <i>changes the length</i> of the array;</li>
            <li>- <i>returns the new length;</i></li>
            <li>- <i>mutates</i> de original array.</li>
            </ul>
            <p><code>Array.prototype.unshift()</code> has similar behavior to <code>push()</code>, but applied to the start of an array.</p>
            `,
            `<h3>Some considerations about <code>push()</code> method</h3>
            <p>The <code>push()</code> method is a <i>mutating method</i>. <i>It changes the length and the content of <code>this</code></i>.</p>
            <p>In case you want the value of <code>this</code> to be the same, but return a new array with elements appended to the end, you can use <code>arr.concat([element0, element1, /* ... ,*/ elementN])</code> instead.</p>`,
          ],
        },
        {
          title: 'unshift()',
          id: 'array-unshift()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/unshift.html',
          summary: [
            `<p>The <code>unshift()</code> method <i><u>adds</u> one or more items to the <u>beginning of an array</u></i> and <i>returns the new length of the array</i>.</p>
          <p>The <code>unshift()</code> method <i>mutates the original array</i>.</p>
          <ul>The <code>unshift()</code> method:
          <li>- adds new items <i>to the beginning</i> of an array;</li>
          <li>- <i>changes the length</i> of the array;</li>
          <li>- <i>returns the new length;</i></li>
          <li>- <i>mutates</i> de original array.</li>
          </ul>
          <p><i>If multiple items are passed as parameters</i>, they're inserted in chunk at the beginning of the object, in the exact same order they were passed as parameters.</p>
          <p><code>Array.prototype.push()</code> has similar behavior to <code>unshift()</code>, but applied to the end of an array.</p>
          `,
          ],
        },
        {
          title: 'pop()',
          id: 'array-pop()',
          source: '/src/markdowns/07_Data_structures___Arrays_&_Sets/pop.html',
          summary: [
            `<p>The <code>pop()</code> method <i><u>removes</u> the <u>last item</u> from an array</i> and <i>returns that item</i>.</p>
          <p>The <code>pop()</code> method <i>mutates the original array</i>.</p>
          <p><code>Array.prototype.shift()</code> has similar behavior to <code>pop()</code>, but applied to the first element in an array.</p>
          `,
            `<h3>Some considerations about <code>pop()</code> method</h3>
          <p>The <code>pop()</code> method is a <i>mutating method. It changes the length and the content of <code>this</code></i>.</p>
          <p>In case you want the value of <code>this</code> to be the same, but return a new array with the last element removed, you can use <code>arr.slice(0, -1)</code> instead.</p>`,
          ],
        },
        {
          title: 'shift()',
          id: 'array-shift()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/shift.html',
          summary: [
            `<p>The <code>shift()</code> method <i><u>removes</u> the <u>first item</u> from an array</i> and <i>returns that removed item</i>.</p>
          <p>The <code>shift()</code> method <i>mutates the original array</i>.</p>`,
            `<h3>Some considerations about <code>shift()</code> method</h3>
          <p>The <code>shift()</code> method is a <i>mutating method. It changes the length and the content of <code>this</code></i>.</p>
          <p>In case you want the value of <code>this</code> to be the same, but return a new array with the first element removed, you can use <code>arr.slice(1)</code> instead.</p>`,
          ],
        },
        {
          title: 'splice()',
          id: 'array-splice()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/splice.html',
          summary: [
            `<p>The <code>splice()</code> method <i><u>adds</u> and/or <u>removes</u> array elements</i>: <code>array.splice(startIndex, deleteCount, item1)</code></p>
            <p>The <code>splice()</code> method <i>mutates the original array</i>.</p>
            <p>The <code>splice()</code> method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.</p>
            <p><i>To access part of an array <u>without modifying</u> it</i>, you can use <code>Array.prototype.slice()</code>.</p>
            `,
            `<h3>Parameters</h3>
            <ul><code>startIndex</code> (required)
              <li>The <i>index at which start to add/remove items</i>. If greater than the length of the array, <code>startIndex</code> will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many elements as items provided. <i>Negative value defines the position from the end of the array</i>.</li>
            </ul>
            <ul><code>deleteCount</code> (optional)
              <li>An <i>integer (number)</i> indicating the number of elements in the array to remove from <code>startIndex</code>. If <code>deleteCount</code> is 0 or negative, no elements are removed.</li>
            </ul>
            <ul><code>item1, ..., itemN</code> (optional)
            <li><i>The elements to add to the array</i>, beginning from <code>startIndex</code>. If you do not specify any elements, <code>splice()</code> will only remove elements from the array.</li>
            </ul>
            `,
            `<h3>Return Value</h3>
            <p>An <i>array containing the <u>removed items</u> (if any)</i>.</p>`,
          ],
        },
        {
          title: 'reverse()',
          id: 'array-reverse()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/reverse.html',
          summary: [
            `<p>The <code>reverse()</code> method <i>reverses the order</i> of the elements in an array and <i>returns the reference to the same array</i>. The first array element becomes the last, and the last array element becomes the first. The <code>reverse()</code> method <i>mutates the original array</i>.</p>`,
          ],
        },
        {
          title: 'sort()',
          id: 'array-sort()',
          source: '/src/markdowns/07_Data_structures___Arrays_&_Sets/sort.html',
          summary: [
            `<p>The <code>sort()</code> method <i>sorts the elements of an array</i> and <i>returns the sorted array</i>.</p>
            <p>Without passing a <code>compareFn</code> as argument, the default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.</p>
            <p>The <code>sort()</code> <i>mutates the original array</i>.</p>
            `,
            `<h3>Parameters</h3>
            <ul><code>compareFn</code> (optional)
            <li>Specifies a <i><u>function</u> that defines the <u>sort order</u></i>. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.</li>
            </ul>
            `,
          ],
        },
        {
          title: 'fill()',
          id: 'array-fill()',
          source: '/src/markdowns/07_Data_structures___Arrays_&_Sets/fill.html',
          summary: [
            `<p>The <code>fill()</code> method <i><u>changes all elements</u> in an array to a <u>static value</u></i>, from a <i>start index</i> (default 0) to an <i>end index</i> (default <code>array.length</code>): <code>array.fill(value, start, end);</code></p>
          <p><p>The <code>fill()</code> method <i>mutates the original array</i> and <i>returns the modified array</i>.</p>`,
            `<h3>Parameters</h3>
          <ul>value
          <li>Value to fill the array with. Note all elements in the array will be this exact value. If the value is an object, each slot in the array will reference that object.</li>
          </ul>
          <ul>start index (optional)
          <li>Start index (inclusive), default 0.</li>
          </ul>
          <ul>end index (optional) 
          <li>End index (exclusive), default <code>arr.length</code>.</li>
          </ul>
          `,
            `<h3>Some considerations about <code>fill()</code> method</h3>
          <p>The <code>fill()</code> method is a mutating method. It does not alter the length of <code>this</code>, but it will change the content of <code>this</code>.</p>`,
          ],
        },
        {
          title: 'map()',
          id: 'array-map()',
          source: '/src/markdowns/07_Data_structures___Arrays_&_Sets/map.html',
          summary: [
            `<p>The <code>map()</code> method <i>creates a <u>new array</u> populated with the results of calling a provided function on every element in the calling array</i>.</p>
            <ul>The <code>map()</code> method:
              <li>- creates a <i>new array</i> from calling a function for every array element;</li>
              <li>- calls a function <i>once</i> for each element in an array;</li>
              <li>- <i>does not execute the function for empty elements</i>;</li>
              <li>- does <i>not change the original array</i>.</li>
            </ul>
          `,
            `<h3>Some consideration about<code>map()</code> method</h3>
           <ul><code>map()</code> calls a provided <code>callbackFn</code> function once for each element in an array, <u>in order</u>, and <i>constructs a new array from the results. <code>callbackFn</code> is invoked only for indexes of the array which have assigned values (including <code>undefined</code>)</i>. It is not called for missing elements of the array, that is:
            <li>- indexes that have never been set;</li>
            <li>- indexes which have been deleted.</li>
            </ul>
            <ul><i>Since <code>map()</code> builds a new array, using it when you aren't using the returned array is an anti-pattern;</i> use <code>forEach</code> or <code>for...of</code> instead. You shouldn't be using <code>map()</code> if:
            - you're not using the array it returns; and/or
            - you're not returning a value from the callback.
            </ul>
            <p><code>map()</code> does not mutate the array on which it is called (although <code>callbackFn</code>, if invoked, may do so).</p>
            `,
          ],
        },
        {
          title: 'filter()',
          id: 'array-filter()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/filter.html',
          summary: [
            `<p>The <code>filter()</code> method <i>creates a <u>new array</u> with all elements that <u>pass the test</u> implemented by the provided <u>function</u></i>.</p>
            <ul>The <code>filter()</code> method:
            <li>- return a new array filled with elements that pass a test provided by a function;</li>
            <li>- does not execute the function for empty elements;</li>
            <li>- does not mutates the original array.</li>
            </ul>
            `,
            `<h3>Some considerations about <code>filter()</code> method</h3>
            <p><i><code>filter()</code> calls a provided <code>callbackFn</code> function <u>once</u> for each element in an array, and <u>constructs a new array</u> of all the values for which <code>callbackFn</code> returns a value that coerces to <code>true</code>.</i></p>
            <p><code>callbackFn</code> is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. <i>Array elements which do not pass the <code>callbackFn</code> test are skipped and are not included in the new array.</i></p>`,
          ],
        },
        {
          title: 'slice()',
          id: 'array-slice()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/slice.html',
          summary: [
            `<p>The <code>slice()</code> method <i>returns a <u>shallow copy</u></i> of <i>a <u>portion</u> of an array</i> into a new array object selected from <code>startIndex</code> to <code>endIndex</code> (<code>endIndex</code> not included), where <code>startIndex</code> and <code>endIndex</code> represent the index of items in that array: <code>array.slice(startIndex, endIndex)</code></p>
            <ul>The <code>slice()</code> method:
              <li>- returns selected elements in an array, as a new array;</li>
              <li>- selects from a given start index, up to a (not inclusive) given end index;</li>
              <li>- does not mutates the original array.</li>
            </ul>
            `,
            `<h3>Parameters</h3>
            <ul><code>startIndex</code> (optional)
              <li><i>A negative index can be used</i>, indicating an offset from the end of the sequence. <code>array.slice(-2)</code> extracts the last two elements in the sequence.</li>
              <li>If <code>startIndex</code> is greater than the index range of the sequence, an empty array is returned.</li>
            </ul>
            <ul><code>endIndex</code> (optional)
              <li>The <i>index of the <u>first element to exclude</u> from the returned array</i>. <code>slice()</code> extracts up to but not including end.</li>
              <li>If <code>endIndex</code> is omitted, <code>slice()</code> extracts through the end of the sequence (<code>array.length</code>).</li>
            </ul>
            `,
            `<h3>Some consideration about <code>slice()</code> method</h3>
            <ul><code>slice()</code> does not mutates the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:
              <li>- <i>For objects, <code>slice()</code> <u>copies object references</u> into the new array. Both the original and new array refer to the same object.</i> If an object changes, the changes are visible to both the new and original arrays.</li>
              <li>- <i>For strings, numbers and booleans (not <code>String</code>, <code>Number</code> and <code>Boolean</code> objects), <code>slice()</code> <u>copies the values</u> into the new array. Changes to the string, number, or boolean in one array do not affect the other array.</i> If a new element is added to either array, the other array is not affected.</li>
            </ul>
            `,
          ],
        },
        {
          title: 'concat()',
          id: 'array-concat()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/concat.html',
          summary: [
            `<p>The <code>concat()</code> method is used to <i>><u>merge/join</u> two or more arrays</i>: <code>array.concat(item0, item1, ... , itemN)</code></p>
            <p>This method does <i>not change the existing arrays</i>, but instead <i>returns a new array</i>.</p>`,
            `<h3>Parameters</h3>
            <ul><code>itemN</code> (optional) 
              <li>- <i>arrays</i> and/or <i>values</i> to concatenate (merge) into a new array. <i>If all <code>itemN</code> parameters are omitted, <code>concat()</code> returns a shallow copy of the existing array on which it is called.</i></li>
            </ul>`,
            `<h3>Some considerations about <code>concat()</code> method</h3>
            <p>The <code>concat()</code> method <i>creates a new array</i> consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array). <i>It does not recurse into <u>nested array arguments</u></i>.</p>
            <ul>Elements of the original arrays are copied into the new array as follows:
              <li>- <i>For objects, <code>concat()</code> <u>copies object references</u> into the new array. Both the original and new array refer to the same object.</i> If an object changes, the changes are visible to both the new and original arrays.</li>
              <li>- <i>For strings, numbers and booleans (not <code>String</code>, <code>Number</code> and <code>Boolean</code> objects), <code>concat()</code> <u>copies the values</u> into the new array. Changes to the string, number, or boolean in one array do not affect the other array.</i> If a new element is added to either array, the other array is not affected.</li>
          </ul>
            `,
          ],
        },
        {
          title: 'flat()',
          id: 'array-flat()',
          source: '/src/markdowns/07_Data_structures___Arrays_&_Sets/flat.html',
          summary: [
            `<p>The <code>flat()</code> method <i>creates a <u>new array</u> with <u>all sub-array elements concatenated into it</u> recursively up to the <u>specified depth</u></i>: <code>array.flat(depth)</code></p>`,
            `<h3>Parameters</h3>
            <ul>depth (optional)
              <li>The depth level specifying <i>how deep a nested array structure should be flattened</i>. Defaults to 1.</li>
            </ul>
            `,
          ],
        },
        {
          title: 'flatMap()',
          id: 'array-flatMap()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/flatMap.html',
          summary: [
            `<p>The <code>flatMap()</code> method <i>returns a new array</i> formed by applying a given <i>callback function to each element of the array</i>, and <i>then flattening the result by one level</i>: <code>array.flatMap(callbackFn)</code>.</p>
            <p><i><code>flatMap()</code> is identical to a <code>map()</code> followed by a <code>flat()</code> of depth 1</i>, but slightly more efficient than calling those two methods separately.</p>`,
          ],
        },
        {
          title: 'indexOf()',
          id: 'array-indexOf()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/indexOf.html',
          summary: [
            `<p>The <code>indexOf()</code> method <i>returns the <u>first index</u></i> at which a given element can be found in the array, or <code>-1</code> if it is not present: <code>array.indexOf(searchElement, fromIndex)</code></p>
            <p>By default the search starts at the first element and ends at the last (searches from left to right). Negative start values counts from the last element (but still searches from left to right).</p>
            `,
            `<h3>Some considerations about <code>indexOf()</code> method</h3>
            <p><code>indexOf()</code> compares <code>searchElement</code> to elements of the array using <i>strict equality</i> (the same method used by the <code>===</code> or triple-equals operator).</p>
            <p><code>indexOf()</code> <i>works fine for <u>primitive</u></i> values, but <i>not for <u>reference</u></i> values. If you want to <i>search for an index in an array that have reference values items</i> (Objects, Arrays), use <code>Array.prototype.findIndex()</code> method.</p>
            `,
          ],
        },
        {
          title: 'lastIndexOf()',
          id: 'array-lastIndexOf()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/lastIndexOf.html',
          summary: [
            `<p>The <code>lastIndexOf()</code> method <i>returns the <u>last index</u></i> at which a given element can be found in the array, or <code>-1</code> if it is not present. The array is searched backwards, starting at <code>fromIndex</code>: <code>array.lastIndexOf(searchElement, fromIndex)</code></p>
            <p>By default the search starts at the last element and ends at the first. Negative start values counts from the last element (but still searches from right to left).</p>
            `,
            `<h3>Some considerations about <code>lastIndexOf()</code> method</h3>
            <p><code>lastIndexOf()</code> compares <code>searchElement</code> to elements of the array using <i>strict equality</i> (the same method used by the <code>===</code> or triple-equals operator).</p>
            <p><code>lastIndexOf()</code> <i>works fine for <u>primitive</u></i> values, but <i>not for <u>reference</u></i> values.</p>
            `,
          ],
        },
        {
          title: 'findIndex()',
          id: 'array-findIndex()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/findIndex.html',
          summary: [
            `<p>The <code>findIndex()</code> method <i>returns the <u>index of the first element</u></i> in the array that satisfies the provided <i>testing function</i>. Otherwise, it returns <code>-1</code>, indicating that no element passed the test.</p>
            <ul>The <code>findIndex()</code> method:
              <li>- <i>executes a function for each array element</i>;</li>
              <li>- <i>does not execute the function for empty array elements</i>;</li>
              <li>- <i>returns the index (position) of the first element that passes a test</i>;</li>
              <li>- returns <code>-1</code> if no match is found;</li>
              <li>- does <i>not mutates the original array</i>.</li>
            </ul>
            <p>The callback function (test function) povided to <code>findIndex()</code> <i>must return a truthy value</i> to indicate a matching element has been found. The index of this element is then returned by <code>findIndex()</code>.</p>
            <p>NOTE: If you want to <u>returns the value</u> of an array element and <u>not the index</u>, instead of <code>findIndex()</code> use <code>Array.prototype.find()</code> method.</p>
            `,
            `<h3>Some considerations about <code>findIndex()</code> method</h3>
            <p>The <code>findIndex()</code> method <i>executes the <code>callbackFn</code> function <u>once</u> for every index in the array</i> until it finds the one where <code>callbackFn</code> returns a truthy value. If such an element is found, <code>findIndex()</code> immediately returns the <u>element's index</u>. If <code>callbackFn</code> never returns a truthy value (or the array's <code>length</code> is 0), <code>findIndex()</code> returns <code>-1</code>.</p>
            <p><i><code>callbackFn</code> is invoked for <u>every</u> index of the array</i>, not just those with assigned values.</p>
            `,
          ],
        },
        {
          title: 'find()',
          id: 'array-find()',
          source: '/src/markdowns/07_Data_structures___Arrays_&_Sets/find.html',
          summary: [
            `<p>The <code>find()</code> method <i>returns the <u>first element</u></i> in the provided array that satisfies the provided <i>testing function</i>. If no values satisfy the testing function, <code>undefined</code> is returned.</p>
          <ul>The <code>find()</code> method:
          <li>- <i>returns the value of the first element that passes a test</i>;</li>
          <li>- <i>executes a function for each array element</i>;</li>
          <li>- <i>does not execute the function for empty elements</i>;</li>
          <li>- returns <code>undefined</code> if no elements are found;</li>
          <li>- does <i>not mutates the original array</i>.</li>
          </ul>
          <p>IMPORTANT: One important thing about <code>find()</code>, it <i>returns the <u>same object</u> as you have in the array</i>, it does <i><u>not copy</u> it</i> or anything like that. So <code>find()</code> does not create a copy of the element that return.</p>
          `,
            `<h3>Some considerations about <code>find()</code> method</h3>
          <p>The <code>find()</code> method <i>executes the <code>callbackFn</code> function <u>once</u> for each index of the array</i>, until the <code>callbackFn</code> returns a truthy value. If so, <code>find()</code> immediately returns the value of that element. Otherwise, <code>find()</code> returns <code>undefined</code>.</p>
          <p><code>callbackFn</code> is <i>invoked for every index of the array, not just those with assigned values</i>. This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.</p>
          <p>The <code>find()</code> method does <i>not mutate the array</i> on which it is called, but the function provided to <code>callbackFn</code> can.</p>
          `,
            `<h3>Tips</h3>
          <p>- If you need the <i><u>index</u> of the found element</i> in the array, use <code>findIndex()</code>.</p>
          <p>- If you need to find the <i><u>index</u> of a value</i>, use <code>indexOf()</code> (it's similar to <code>findIndex()</code>, but checks each element for equality with the value, instead of using a testing function).</p>
          <p>- If you need to find <i>if a <u>value exists</u> in an array</i>, use <code>includes()</code>. Again, it checks each element for equality with the value, instead of using a testing function.</p>
          <p>- If you need to <i>find if any <u>element</u> satisfies the provided testing function</i>, use <code>some()</code>.</p>
          `,
          ],
        },
        {
          title: 'includes()',
          id: 'array-includes()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/includes.html',
          summary: [
            `<p>The <code>includes()</code> method <i>determines whether an array includes a certain <u>value</u> among its entries</i>, returning <code>true</code> or <code>false</code> as appropriate: <code>array.includes(searchElement, fromIndex)</code>.</p>
            <p>The <code>includes()</code> method is <i>case sensitive</i>.</p>
          <p>NOTE: <code>includes()</code> is <i>only useful for <u>primitive</u> values</i>, because it also just <i>checks <u>values</u></i> like <code>indexOf()</code> does.</p>
          <ul>The <code>includes()</code> method:
          <li>- returns <code>true</code> if an array contains a specified value;</li>
          <li>- returns <code>false</code> if the value is not found;</li>
          <li>- is case sensitive.</li>
          </ul>
          `,
            `<h3>Some considerations about <code>includes()</code> method</h3>
          <p><code>includes()</code> is a great choice if you're not interested in the index and also not interested in the value, but just <i>want to know whether an element is part of the array or not</i>.</p>
          <p><i><code>includes()</code> is similar to <code>array.indexOf(someElement) !== -1</code></i>, but of course <code>includes()</code> is a bit shorter and saves us for that extra comparison.</p>`,
          ],
        },
        {
          title: 'some()',
          id: 'array-some()',
          source: '/src/markdowns/07_Data_structures___Arrays_&_Sets/some.html',
          summary: [
            `<p>The <code>some()</code> method <i>tests whether <u>at least one element</u> in the array <u>passes the test</u> implemented by the <u>provided function</u></i>. It returns <code>true</code> if, in the array, it finds an element for which the provided function returns <code>true</code>; otherwise it returns <code>false</code>. It <i>doesn't mutates the original array</i>.</p>
          <ul>The <code>some()</code> method:
          <li>- checks <i>if any array elements pass a test (provided as a callback function)</i>;</li>
          <li>- executes the callback function once for each array element;</li>
          <li>- if the callback function returns <code>true</code> for one of the array elements, <code>some()</code> returns <code>true</code> and stops;</li>
          <li>- returns <code>false</code> if the function returns <code>false</code> for all of the array elements;</li>
          <li>- <i>does not execute the function for empty array elements</i>;</li>
          <li>- does not mutates the original array.</li>
          </ul>
          <p>NOTE: Calling <code>some()</code> method on an empty array returns <code>false</code> for any condition!</p>
          `,
          ],
        },
        {
          title: 'every()',
          id: 'array-every()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/every.html',
          summary: [
            `<p>The <code>every()</code> method <i>tests whether <u>all elements</u> in the array <u>pass the test</u> implemented by the <u>provided function</u></i>. It <i>returns a Boolean value</i>.</p>
          <ul>The <code>every()</code> method:
          <li>- executes a function for each array element;</li>
          <li>- does not execute the function for empty elements;</li>
          <li>- returns <code>true</code> if the function returns <code>true</code> for all elements;</li>
          <li>- returns <code>false</code> if the function returns <code>false</code> for one element;</li>
          <li>- does not mutates the original array.</li>
          </ul>
          <p>NOTE: Calling <code>every()</code> method on an empty array will return <code>true</code> for any condition!</p>
          `,
          ],
        },
        {
          title: 'join()',
          id: 'array-join()',
          source: '/src/markdowns/07_Data_structures___Arrays_&_Sets/join.html',
          summary: [
            `<p>The <code>join()</code> method <i>creates and <u>returns a new string</u> by concatenating all of the elements in an array (or an Array-Like object), separated by commas (<code>,</code>) or a <u>specified separator string</u></i>. If the array has only one item, then that item will be returned without using the separator.</p>
          <p>NOTE: The string conversions of all array elements are joined into <i>one string</i>.</p>
          <ul>The <code>join()</code> method:
          <li>- returns an array as a string;</li>
          <li>- does not mutates the original array;</li>
          <li>- any separator can be specified. The default is comma <code>,</code>.</li>
          </ul>`,
            `<h3>Some considerations about <code>join()</code> method</h3>
          <p><i>The string conversions of all array elements are joined into <u>one string</u>.</i> If an element is <code>undefined</code>, <code>null</code>, it is converted to an empty string instead of the string "null" or "undefined".</p>
          <p>The <code>join()</code> method is accessed internally by <code>Array.prototype.toString()</code> with no arguments. Overriding <code>join()</code> of an array instance will override its <code>toString()</code> behavior as well.</p>
          <p>When used on sparse arrays, the <code>join()</code> method iterates empty slots as if they have the value <code>undefined</code>.</p>`,
          ],
        },
        {
          title: 'reduce()',
          id: 'array-reduce()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/reduce.html',
          summary: [
            `<p>The <code>reduce()</code> method executes a user-supplied <i>"reducer" callback function</i> on each element of the array, <u>in order</u>, <i>passing in the return value from the calculation on the preceding element</i>. The final result of running the reducer across all elements of the array is a <i>single value</i>.</p>
            <p>The idea behind <code>reduce()</code> method is to <i>reduce an array to a <u>single value</u></i>.</p>
            <ul>The reduce() method:
            <li>- executes a <i>reducer function</i> for array element;</li>
            <li>- <i>returns a single value</i> (the function's accumulated result);</li>
            <li>- does not execute the function for empty array elements;</li>
            <li>- does <i>not change the original</i> array.<li>
            </ul>
            `,
            `<h3>Some considerations about the <code>reduce()</code> method</h3>
            <p>The <code>reduce()</code> method takes two arguments: a <i>callback function</i> and an optional <i>initial value</i>. If an initial value is provided, <code>reduce()</code> calls the "reducer" callback function on each element in the array, in order. If no initial value is provided, <code>reduce()</code> calls the callback function on each element in the array after the first element.</p>
            <p>The <code>reduce()</code> method itself does not mutate the array it is used on. However, it is possible for code inside the callback function to mutate the array.</p>
            <p>The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).</p>
            <p>The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step — until there are no more elements to add.</p>
            `,
          ],
        },
        {
          title: 'forEach()',
          id: 'array-forEach()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/forEach.html',
          summary: [
            `<p>The <code>forEach()</code> method <i>executes a provided function once for each array element</i>. The <code>forEach()</code> method is <i>not executed for empty elements</i>.</p>`,
            `<h3>Some considerations about <code>forEach()</code> method</h3>
            <p><code>forEach()</code> <i>calls a provided <code>callbackFn</code> function <u>once</u> for each element</i> in an array <i>in ascending index order</i>.</p>
            <p>Unlike <code>map()</code> or <code>reduce()</code> methods, <code>forEach()</code> <i>always returns the value <u>undefined</u> and is <u>not chainable</u></i>. The typical use case is to execute side effects at the end of a chain.</p>
            <p><code>forEach()</code> does <i>not mutate the array</i> on which it is called (however, <code>callbackFn</code> may do so).</p>
            <p>There is <i>no way to <u>stop</u> or <u>break</u> a <code>forEach()</code> loop other than by throwing an exception</i>. If you need such behavior, the <code>forEach()</code> method is the wrong tool.</p>
            <p><i><code>forEach()</code> expects a <u>synchronous function</u>. <code>forEach()</code> does <u>not wait for Promises</u>.</i> Make sure you are aware of the implications while using Promises (or async functions) as <code>forEach()</code> callback.</p>
            `,
          ],
        },
        {
          title: 'entries()',
          id: 'array-entries()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/entries.html',
          summary: [
            `<p>The <code>entries()</code> method <i>returns a new <u>Array Iterator</u> object that <u>contains the key/value pairs for each index</u> in the array</i>. The <code>entries()</code> method does <i>not mutates the original array</i>.</p>`,
          ],
        },
        {
          title: 'Chaining Methods in JavaScript',
          id: 'chaining-methods-in-javascript',
          source: '',
        },
      ],
    },
    {
      title: 'Array Static Methods',
      id: 'array-static-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Array.isArray()',
          id: 'array-isArray()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/Array.isArray.html',
          summary: [
            `<p>The <code>Array.isArray()</code> <u>static method</u> <i>determines whether the passed value is an Array</i>: <code>Array.isArray(value)</code>.</p>
            <p><code>Array.isArray()</code> method returns <code>true</code> if an object is an array, otherwise <code>false</code>.</p>`,
            `<p><i>NOTE: <code>Array.isArray()</code> is a <u>static property</u> of the JavaScript <code>Array</code> object. You can only use it as <code>Array.isArray()</code>. Using <code>x.isArray()</code>, where <code>x</code> is an array will return <code>undefined</code>.</i></p>`,
          ],
        },
        {
          title: 'Array.from()',
          id: 'array-from()',
          source:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/Array.from.html',
          summary: [
            `<p>The <code>Array.from()</code> <u>static method</u> <i>creates a new, <u>shallow-copied</u> Array instance from an Array-Like or Iterable object</i>: <code>Array.from('foo'); // ["f", "o", "o"]</code>.</p>`,
            `<ul><i><code>Array.from()</code> has an <u>optional parameter</u> <code>mapFn</code>, which allows you to execute a <code>map()</code> function on each element of the array being created:</i>
              <li><code>Array.from(arrayLike, (element, index) => { ... } )</code></li>
              <li><code>Array.from([1, 2, 3], x => x + x); // [2, 4, 6]</code></li>
            </ul>`,
            `<ul><code>Array.from()</code> method returns an array from:
              <li>- Array-Like objects (objects with a <code>length</code> property and indexed elements);</li>
              <li>- Iterable objects.</li>
            </ul>
            `,
            `<p><i>NOTE: <code>Array.from()</code> is a <u>static property</u> of the JavaScript <code>Array</code> object. You can only use it as <code>Array.from()</code>. Using <code>x.from()</code>, where <code>x</code> is an array will return <code>undefined</code>.</i></p>`,
          ],
        },
      ],
    },
    {
      title: 'Which array method to use?',
      id: 'which-array-method-to-use',
      source:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Which_array_method_to_use.html',
      summary: [`<p></p>`],
    },
    {
      title: 'Data structures - Sets & WeakSet',
      id: 'data-structures-sets-and-weakset',
      source:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Data_structures___Sets.html',
      summary: [
        `<p>In JavaScript, we got <i>three major <u>iterable</u> data structures</i> you could say. We got <i>Arrays</i> but we also got <i>Sets</i> and we got <i>Maps</i>.</p>
        <p>The Set object lets you <i>store <u>unique values</u> of any type</i>, whether primitive values or object references: <code>new Set(iterable)</code>.</p>
        `,
        `<ul>A JavaScript Set:
          <li>- is a collection of unique values;</li>
          <li>- Each value can only occur once in a Set;</li>
          <li>- can hold any value of any data type.</li>
        </ul>
        `,
        `<h3>Set methods & properties</h3>
        <p><code>add()</code> - adds a new element to the Set</p>
        <p><code>delete()</code> - removes an element from a Set</p>
        <p><code>has()</code> - returns <code>true</code> if a value exists</p>
        <p><code>clear()</code> - removes all elements from a Set</p>
        <p><code>forEach()</code> - invokes a callback for each element</p>
        <p><code>values()</code> - returns an Iterator with all the values in a Set</p>
        <p><code>keys()</code> - same as <code>values()</code></p>
        <p><code>entries()</code> - returns an Iterator with the <code>[value, value]</code> pairs from a Set</p>
        <p><code>size</code> - returns the number elements in a Set</p>
        `,
        `<h3>Specialized version of Sets - WeakSet</h3>
        <p>In a Set you can store any value of any data type (strings, numbers, objects etc.). In the case of the WeakSet you can store <i>only <u>object</u> data</i>: <code>new WeakSet(iterable)</code>.</p>
        <p>WeakSet objects are <i>collections of <u>objects</u></i>. Just as with Sets, each object in a WeakSet may occur only once; <i>all objects in a WeakSet's collection are unique</i>.</p>
        <ul>The main differences to the Set object are:
          <li>- WeakSets are <i>collections of <u>objects only</u></i>. They cannot contain arbitrary values of any type, as Sets can.</li>
          <li>- The WeakSet is <u>weak</u>, meaning references to objects in a WeakSet are held weakly. If no other references to an object stored in the WeakSet exist, those objects can be <u>garbage collected</u>.</li>
        </ul>
        <ul>WeakSet methods:
          <li><code>WeakSet.prototype.add(value)</code> - appends <code>value</code> to the WeakSet object.</li>
          <li><code>WeakSet.prototype.delete(value)</code> - removes <code>value</code> from the WeakSet. <code>WeakSet.prototype.has(value)</code> will return <code>false</code> afterwards.</li>
          <li><code>WeakSet.prototype.has(value)</code> - returns a boolean asserting whether <code>value</code> is present in the WeakSet object or not.</li>
        </ul>
        `,
      ],
    },
  ],
};

const objectsAndMaps = {
  name: 'Data structures: Objects & Maps',
  sections: [
    {
      title: 'Introducing JavaScript objects',
      id: 'introducing-javascript-objects',
      source:
        '/src/markdowns/08_Data_structures___Objects_&_Maps/Introducing_JavaScript_objects.html',
      summary: [
        `<p><i>In JavaScript, most things are objects</i>, from core JavaScript features like arrays to the browser APIs built on top of JavaScript. You can even <i>create your own objects to <u>encapsulate related functions and variables</u> into efficient packages and act as handy <u>data containers</u></i>. The object-based nature of JavaScript is important to understand if you want to go further with your knowledge of the language.</p>`,
        `<h3>What's an object?</h3>
        <p>An object is a <i><u>collection</u> of related <u>data</u> and/or <u>functionality</u></i>. These usually consist of several variables and functions (which are called <i>properties</i> and <i>methods</i> when they are inside objects).</p>
        `,
        `<h3>Creating an object</h3>
        <ul>We have two ways to create an object:
          <li>- Object literals</li>
          <li>- Constructors</li>
        </ul>
        `,
        `<h3>Objects and properties</h3>
        <p>A JavaScript object has properties associated with it. <i>A property of an object can be explained as <u>a variable that is attached to the object</u></i>. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. <i>The properties of an object define the <u>characteristics of the object</u></i>.</p>`,
        `<h3>Properties: key/value pair</h3>
        <p>An object is made up of multiple members, each of which has a <i>name (key)</i> and a <i>value</i>. Each key/value pair must be separated by a comma (<code>:</code>), and the key and value in each case are separated by a colon (<code>,</code>).</p>
        <p>The value of an object member can be pretty much anything.</p>
        `,
        `<h3>Accesing object's properties <code>.</code> vs <code>[]</code> notation</h3>
        <ul>You access the properties of an object with a <code>.</code> (dot) or <code>[]</code> (square bracket) notation:
          <li><code>objectName.propertyName</code></li>
          <li><code>objectName['propertyName']</code></li>
        </ul>
        <p>Square bracket notation looks very similar to how you access the items in an array, and it is basically the same thing — <i>instead of using an index number to select an item, you are using the name associated with each member's value</i>. It is no wonder that objects are sometimes called <u>associative arrays</u> — they map strings to values in the same way that arrays map numbers to values.</p>
        <ul>If you have object properties that contains another object, to access these items you just need to chain the extra step onto the end with another dot or square bracket:
          <li><code>objectName.propertyName..propertyName</code></li>
          <li><code>objectName['propertyName']['propertyName']</code></li>
        </ul>
        `,
        `<h3>Dynamic property access & setting properties dynamically</h3>
        <p>One useful aspect of bracket notation is that it can be used to set <i>not only member values dynamically, but member names too</i>.</p>
        `,
        `<h3>Special key names & square bracket property access</h3>
        <p>Like all JavaScript variables, both the object name (which could be a normal variable) and <i>property name are <u>case sensitive</u></i>.</p>
        <p><i>An object property name can be any valid JavaScript string</i>, or anything that can be converted to a string, including the empty string. However, <i>any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation</i>.</p>
        `,
        `<h3>Nested objects</h3>
        <p><i>Objects are not really nested.</i> An object can appears "nested" in another object but <i>"nesting" is an inaccurate way to think about how objects behave. When the code executes, there is no such thing as a "nested" object.</i> You are really looking at two different objects because every single object is different, even it is nested inside another object.</p>`,
      ],
    },
    {
      title: 'Spread & rest syntax & object literals',
      id: 'spread-and-rest-syntax-and-object-literals',
      source:
        '/src/markdowns/08_Data_structures___Objects_&_Maps/Spread_and_rest_syntax_and_object_literals.html',
      summary: [
        `<h3>What is spread syntax?</h3>
      <p>Spread syntax <code>...</code> allows an <i>iterable</i>, such as an <u>array</u> or <u>string</u>, to be <i>expanded</i> in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal spread syntax allows an object expression to be expanded in places where zero or more key-value pairs are expected.</p>
      <p>Spread operator <code>...</code> is an operator that in the end <i>pulls out all properties of an object to be copied in other object</i>.</p>
      `,
        `<h3>Spread syntax vs rest syntax</h3>
      <p>Spread syntax looks exactly like rest syntax. In a way, <i>spread syntax is the opposite of rest syntax</i>. <p><i>Spread syntax <u>"expands"</u></i> object properties into a new object, while <i>rest syntax <u>collects</u></i> multiple properties and "condenses" them into a single object.</p>
      `,
      ],
    },
    {
      title: 'Destructuring Objects',
      id: 'destructuring-objects',
      source:
        '/src/markdowns/08_Data_structures___Objects_&_Maps/Destructuring_objects.html',
      summary: [
        `<h3>What is destructuring?</h3>
        <p>The destructuring assignment syntax is a JavaScript expression that makes it possible to <i>unpack values from arrays, or properties from objects, into distinct variables</i>.</p>`,
        `<h3>Why to use object destructuring?</h3>
        <p><i>Destructuring objects is a shortcut for assign properties from objects to variables.</i> Is a feature that help you to split up an object into variables or constants, which you then can use throughout your code. It simply saves you the extra work of doing this manually and therefore can speed up your development process.</p>
        `,
        `<h3>Binding and assignment</h3>
        <p>Destructuring syntax can be used for <i>variable declaration (also call binding)</i> or <i>variable assignment</i>. You can also handle nested structures by using nested destructuring syntax.</p>
        <ul>For both object and array destructuring, there are <i>two kinds of destructuring patterns: <u>binding</u> pattern and <u>assignment</u> pattern</i>, with slightly different syntaxes:
         <li>- Biding pattern:
            <div><code>const obj = { a: 1, b: { c: 2 } };</code></div>
            <div><code>const { a, b } = obj;</code></div>
          <li>
         <li>- Assignment pattern:
           <div><code>let a, b;</code></div>
            <div><code>const obj = { a: 1, b: { c: 2 } };</code></div>
            <div><code>({ a, b } = obj);</code></div>
          </li>
        </ul>
        <p>NOTE: The parentheses <code>( ... )</code> around the assignment statement are required when using object literal destructuring assignment without a declaration.</p>
        `,
        `<h3>Default values</h3>
        <ul>Trying to assign a variable corresponding to a key that does not exist on the destructured object will cause the value <code>undefined</code> to be assigned instead. You can pass default values that will be assigned to such variables instead of <code>undefined</code>
          <li><code>const person = { name: 'John Doe', country: 'Canada' };</code></li>
          <li><code>const { name, country, age = 25 } = person;</code></li>
        </ul>
        `,
        `<h3>Using different variable names</h3>
        <ul>You can assign to a different variable name using this syntax: <code>[object_key]:[variable_name]</code>. You can also pass default values using the syntax: <code>[object_key]:[variable_name] = [default_value]</code>:
          <li><code>const person = { name: 'John Doe', country: 'Canada' };</code></li>
          <li><code>const { name: fullname, country: place, age: years = 25 } = person;</code></li>
        </ul>
        `,
        `<h3>Nested object destructuring</h3>
        <p>When using nested object destructuring, be careful to <i>avoid using an empty nested object literal. Though it is valid syntax, it actually does no assignment.</i> For example, the following destructuring does absolutely no assignment: <code>const { scores: {} } = student</code>.</p>
        `,
        `<h3>Extracting a dynamic name property</h3>
        <p>You can extract to variables properties with a dynamic name (the property name is known at runtime): <code>const { [propName]: identifier } = expression</code>.</p>
        <p><code>propName</code> expression should evaluate to a property name (usually a string), and the <code>identifier</code> should indicate the variable name created after the destructuring. The second <code>expression</code> should evaluate to the object you'd like to destructure.</p>
        `,
        `<h3>Rest parameter & object destructuring (Rest object after destructuring)</h3>
        <p>The <code>rest</code> syntax is useful to collect the remaining properties after the destructuring: <code>const { identifier, ...rest } = expression</code></p>
        <p>Where <code>identifier</code> is the name of the property to access and <code>expression</code> should evaluate to an object.</p>
        <p>After the destructuring, the variable <code>identifier</code> contains the property value. <code>rest</code> variable is a plain object with the remaining properties.</p>
        `,
        `<h3>Mixed destructuring</h3>
        <p>There are cases when you are working with a pretty complex object/array structure and you need to assign some values from it to local variables. A good example would be an object with several deeply nested objects and arrays. In cases like this, you can use a combination of object destructuring and array destructuring to target certain parts of the complex structure as required.</p>
        `,
        `<h3>Destructuring patterns with other syntaxes</h3>
        <ul>In many syntaxes where the language binds a variable for you, you can use a destructuring pattern as well. These include:
          <li>- The looping variable of <code>for...in</code> and <code>for...of</code> loops;
          <li>- Function parameters;
          <li>- The <code>catch</code> binding variable.
        </ul>
        `,
      ],
    },
    {
      title: '<code>Object.prototype</code> Methods',
      id: 'object-prototype-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'hasOwnProperty()',
          id: 'object-prototype-hasOwnProperty()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_prototype_hasOwnProperty.html',
          summary: [
            `<p>The <code>hasOwnProperty()</code> method <i><u>returns a boolean</u> indicating whether the object has the specified property as its own property (as opposed to inheriting it)</i>: <code>hasOwnProperty(prop)</code></p>
            <p>The <code>hasOwnProperty()</code> method returns <code>true</code> if the specified property is a direct property of the object — even if the value is <code>null</code> or <code>undefined</code>. The method returns <code>false</code> if the property is inherited, or has not been declared at all.</p>
            <p>The method can be called on <u>most</u> JavaScript objects, because most objects descend from <code>Object</code>, and hence inherit its methods.</p>
            `,
          ],
        },
        {
          title: 'isPrototypeOf()',
          id: 'object-prototype-isPrototypeOf()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_prototype_isPrototypeOf.html',
          summary: [
            `<p>The <code>isPrototypeOf()</code> method <i>checks if an object exists in another object's prototype chain</i>: <code>isPrototypeOf(object)</code>.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Object Static Methods',
      id: 'object-static-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Object.keys()',
          id: 'object-keys()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_keys.html',
          summary: [
            `<p>The <code>Object.keys()</code> method <i><u>returns an array</u> of a given object's <u>own enumerable property names</u></i>, iterated in the same order that a normal loop would: <code>Object.keys(obj)</code>.</p>
            <p>The <code>Object.keys()</code> method returns an <i><u>Array Iterator object</u> with the keys of an object</i>. In other words, the <code>Object.keys()</code> method returns an <i>array of strings</i> that represent all the enumerable properties of the given object.</p>
            `,
            `<p>If you want <u>all properties</u> — including non-enumerables — see <code>Object.getOwnPropertyNames()</code>.</p>`,
          ],
        },
        {
          title: 'Object.values()',
          id: 'object-values()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_values.html',
          summary: [
            `<p>The <code>Object.values()</code> method <i>returns an array</i> of a given object's <i>own enumerable property <u>values</u></i>, in the same order as that provided by a <code>for...in</code> loop. (The only difference is that a <code>for...in</code> loop enumerates properties in the prototype chain as well).</p>
            <p><code>Object.values()</code> returns an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by looping over the property values of the object manually.</p>
            `,
          ],
        },
        {
          title: 'Object.entries()',
          id: 'object-entries()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_entries.html',
          summary: [
            `<p>The <code>Object.entries()</code> method <i>returns an array</i> of a given object's own enumerable <i>string-keyed property</i> <code>[key, value]</code> pairs. This is the same as iterating with a <code>for...in</code> loop, except that a <code>for...in</code> loop enumerates properties in the prototype chain as well</p>
            <p>NOTE: <code>Object.entries()</code> returns an array whose elements are arrays corresponding to the enumerable string-keyed property <code>[key, value]</code> pairs found directly upon object.</p>
            `,
          ],
        },
        {
          title: 'Object.fromEntries()',
          id: 'object-fromEntries()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_fromEntries.html',
          summary: [
            `<p>The <code>Object.fromEntries()</code> method <i>transforms a list of key-value pairs into an object</i>.</p>
            <p>The <code>Object.fromEntries()</code> method <i>takes a list of key-value pairs and returns a new object whose properties are given by those entries</i>.</p>
            <p><i><code>Object.fromEntries()</code> performs the reverse of <code>Object.entries()</code>.</i></p>
            `,
          ],
        },
        {
          title: 'Object.assign()',
          id: 'object-assign()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_assign.html',
          summary: [
            `<p>The <code>Object.assign()</code> method <i><u>copies all enumerable own properties</u> from one or more <u>source objects</u> to a <u>target object</u>. It returns the modified target object</i>: <code>Object.assign(target, ...sources)</code>.</p>`,
            `<h3>Parameters</h3>
            <ul><code>target</code>
              <li>The target object — what to apply the sources properties to, which is returned after it is modified.</li>
            </ul>
            <ul><code>sources</code>
              <li>The source object(s) — objects containing the properties you want to apply.</li>
            </ul>
            `,
            `<h3>Return value</h3>
            <p>The target object.</p>`,
            `<h3>Description</h3>
            <p><i>Properties in the target object are <u>overwritten</u> by properties in the sources if they have the <u>same key</u>. Later sources properties overwrite earlier ones.</i></p>
            <p>The <code>Object.assign()</code> method <i>only copies <u>enumerable</u> and <u>own</u> properties</i> from a source object to a target object.</p>
            `,
          ],
        },
        {
          title: 'Object.freeze()',
          id: 'object-freeze()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_freeze.html',
          summary: [
            `<p>The <code>Object.freeze()</code> method <i>freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable</i>.</p>
          <p><i>A frozen object can no longer be changed</i>: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.</p>
          <p><i><code>freeze()</code> returns the same object that was passed in</i>. It does not create a frozen copy.</p>
          <p>Freezing an object is the highest integrity level that JavaScript provides.</p>`,
          ],
        },
        {
          title: 'Object.create()',
          id: 'object-create()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_create.html',
          summary: [
            `<p>The <code>Object.create()</code> method <i><u>creates a new object</u>, using an existing object as the prototype of the newly created object</i>.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Object descriptors',
      id: 'object-descriptors',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Object.getOwnPropertyDescriptor()',
          id: 'object-getOwnPropertyDescriptor()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_getOwnPropertyDescriptor.md.html',
          summary: [
            `<p>The <code>Object.getOwnPropertyDescriptor()</code> method <i><u>returns an object</u> describing the <u>configuration of a specific property</u> on a given object</i> (that is, one directly present on an object and not in the object's prototype chain). <i>The object returned is mutable but mutating it has no effect on the original property's configuration</i>.</p>`,
          ],
        },
        {
          title: 'Object.defineProperty()',
          id: 'object-defineProperty()',
          source:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object_defineProperty.html',
          summary: [
            `<p>The static method <code>Object.defineProperty()</code> <i><u>defines</u> a new property directly on an object, or <u>modifies</u> an existing property on an object, and returns the object</i>.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Data structures - Maps & WeakMap',
      id: 'data-structures-maps-and-weakmap',
      source:
        '/src/markdowns/08_Data_structures___Objects_&_Maps/Data_structures___Maps.html',
      summary: [
        `<p>The Map object holds <i>key-value pairs</i> and remembers the original insertion order of the keys. <i>Any value (both objects and primitive values) may be used as either a key or a value</i>.</p>`,
        `<h3>Specialized version of Maps - WeakMap</h3>
        <p>A WeakMap is a <i><u>collection of key/value</u> pairs whose <u>keys must be objects</u></i>, with values of any arbitrary JavaScript type, and which <i>does <u>not create strong references</u> to its keys</i>. That is, an object's presence as a key in a WeakMap does <i>not prevent the object from being <u>garbage collected</u></i>. Once an object used as a key has been collected, its corresponding values in any WeakMap become candidates for garbage collection as well — as long as they aren't strongly referred to elsewhere.</p>
        `,
      ],
    },
  ],
};

const oop = {
  name: 'Object-Oriented Programming (OOP)',
  sections: [
    {
      title: 'Inspiration of JavaScript: Scheme & Java',
      id: 'inspiration-of-javascript-scheme-and-java',
      source:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Scheme_&_Java.html',
      summary: [
        `Scheme was a programming language that have closures and the idea of functions as first class citizens`,
        `In Java community, classes and classical inheritance was really, really important`,
        `JavaScript was inspired by Scheme and Java, and because of this inspiration we have this multi-paradigm language: functional and object-oriented`,
        `OOP and Functional Programming are paradigms that allow us to organize code`,
      ],
    },
    {
      title: 'Introduction to "traditional" OOP',
      id: 'introduction-to-traditional-oop',
      source:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Introduction_to_traditional_OOP.html',
      summary: [
        `OOP is a programming paradigm that allow us to organize code`,
        `Traditional OOP: Classes & Instances`,
        `Traditional OOP: Inheritance`,
        `Traditional OOP: Encapsulation`,
        `4 fundamental principles of OOP: abstraction, encapsulation, inheritance and polymorphism`,
        `Traditional OOP: Classes & Instances vs JavaScript: Constructors & Prototypes`,
      ],
    },
    {
      title: 'OOP in JavaScript: Objects prototypes',
      id: 'oop-in-javascript-objects-prototypes',
      source:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/OOP_in_JavaScript_Object_prototypes.html',
      summary: [
        `Prototypes are the mechanism by which JavaScript objects inherit features from one another`,
        `With the help of prototypes objects inherit features from another object, not copy them`,
        `With Prototypal Inheritance we're being efficient with our memory: the fact that objects can share prototypes means that you can have objects with properties that are pointing to the same place in memory`,
        `Every object in JavaScript has a built-in property <code>__proto__</code> which is called its prototype`,
        `The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype`,
        `Only functions have the prototype property`,
        `Shadowing properties happens when you define a property in an object, when a property with the same name is defined in the object's prototype`,
        `Setting a prototype: <code>Object.create()</code>, Constructors and ES6 Classes`,
        `Prototypes and inheritance`,
        `Prototypes & memory efficiency`,
      ],
    },
    {
      title:
        'What is the difference between <code>__proto__</code> and prototype?',
      id: 'what-is-the-difference-between-proto-and-prototype',
      source:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Difference_between_proto_and_prototype.html',
      summary: [],
    },
    {
      title: 'Prototypal Inheritance: Constructor Function & Prototypes',
      id: 'prototypal-inheritance-constructor-function-and-prototypes',
      source:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Prototypal_Inheritance_Constructor_Function.html',
      summary: [
        `Factory Functions vs Constructor Function`,
        `Constructor Function create a "blueprint" for creating many objects of the same "type"`,
        `We use Constructor Function to build an object using a function`,
        `A Constructor Function is just a function called using the <code>new</code> operator`,
        `Constructors, by convention, start with a capital letter and are named for the type of object they create`,
        `You can't create a Constructor Function with the arrow function because arrow function doesn't have its own <code>this</code> keyword`,
        `In a Constructor Function <code>this</code> does not have a value. It is a substitute for the new object. The value of <code>this</code> will become the new object when a new object is created`,
        `Setting a prototype with Constructor Function`,
        `More real inheritance than Prototypal Inheritance (Child and Parent)`,
      ],
    },
    {
      title:
        'Prototypal Inheritance: <code>Object.create()</code> & Prototypes',
      id: 'prototypal-inheritance-object-create-and-prototypes',
      source:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Prototypal_Inheritance_Object.create().html',
      summary: [
        'Setting a prototype with <code>Object.create()</code>',
        'More real inheritance than Prototypal Inheritance (Child and Parent)',
      ],
    },
    {
      title: 'Prototypal Inheritance: ES6 Classes & Prototypes',
      id: 'prototypal-inheritance-es6-classes-and-prototypes',
      source:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Prototypal_Inheritance_ES6_Classes.html',
      summary: [
        `A class is not an object, it is a template for creating an object`,
        `A class encapsulate data with code (methods) to work on that data`,
        `JavaScript classes are only "syntactic sugar" over Constructor Function`,
        `Class body`,
        `Constructor method`,
        `Classes & Prototypes`,
        `Prototype methods`,
        `Static methods and properties`,
        `Setters and Getters`,
        `Protected Properties and Methods`,
        `Private Class Fields and Methods`,
        `Chaining Methods`,
        `<code>super</code> keyword`,
        `<code>new</code> keyword`,
        `More real inheritance than Prototypal Inheritance (Child and Parent)`,
      ],
    },
    {
      title: 'Prototypal Inheritance on Built-In Objects',
      id: 'prototypal-inheritance-on-built-in-objects',
      source: '',
      summary: [],
    },
    {
      title: 'Object-Oriented vs Functional Programming',
      id: 'object-oriented-vs-functional-programming',
      source:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Object-oriented_vs_functional_programming.html',
      summary: [
        `Inheritance vs Composition`,
        `Inheritance problems: tight coupling, fragile base class & hierarchy`,
        `One of the drawbacks to OOP paradigm and inheritance is that it is based on the fact that things (classes) won't change in the future. We are structuring a class based on what it is`,
        `With FP we focus and structure our code around "What it has?" or "What it does to data?"`,
        `FP is more declarative (what to do, not how), and OOP is more imperative (what and how to do something)`,
      ],
    },
  ],
};

const functionalProgramming = {
  name: 'Functional Programming (FP)',
  sections: [
    {
      title: 'Inspiration of JavaScript: Scheme & Java',
      id: 'inspiration-of-javascript-scheme-and-java',
      source:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Scheme_&_Java.html',
      summary: [
        `Scheme was a programming language that have closures and the idea of functions as first class citizens`,
        `In Java community, classes and classical inheritance was really, really important`,
        `JavaScript was inspired by Scheme and Java, and because of this inspiration we have this multi-paradigm language: functional and object oriented`,
        `OOP and Functional Programming are paradigms that allow us to organize code`,
      ],
    },
    {
      title: 'Introduction to Functional Programming',
      id: 'introduction-to-functional-programming',
      source:
        '/src/markdowns/09A_Functional_Programming_(FP)/Introduction_to_FP.html',
      summary: ['Pure functions concept'],
    },
    {
      title: 'Functional Programming concepts',
      id: 'functional-programming-concepts',
      source:
        '/src/markdowns/09A_Functional_Programming_(FP)/Functional_programming_concepts.html',
      summary: [
        `Pure Functions & Shared State`,
        `Pure Functions & Immutability vs Mutating State`,
        `Pure Functions & Side-Effects`,
        `Pure Functions & Referential transparency`,
        `Idempotence`,
        `Imperative vs Declarative`,
        `Reusability through Higher Order Functions`,
        `Curry`,
        `Partial Application`,
        `Function composition: compose & pipe`,
        `Arity`,
      ],
    },
    {
      title: 'More about Pure Functions',
      id: 'more-about-pure-functions',
      source: '',
      summary: [],
    },
    {
      title: 'More about Functions Composition',
      id: 'more-about-functions-composition',
      source: '',
      summary: [],
    },
  ],
};

const standardBuildInObjects = {
  name: 'Standard Build-In Objects',
  sections: [
    {
      title: 'Introduction to Standard Build-in Objects',
      id: 'introduction-to-standard-build-in-objects',
      source:
        '/src/markdowns/10_Standard_Build-In_Objects/Introduction_to_Standard_Build-in_Objects.html',
      summary: [
        `<h3>Standard build-in objects vs Global <code>window</code> Object</h3>
        <ul>Standard build-in objects:
          <li>JavaScript provides a set of standard built-in objects that serve various purposes. These objects are available globally and can be used in any part of your code. <i>These objects are part of the JavaScript language</i> specification and are <i>available in all JavaScript environments, not just in web browsers</i>.</li>
        </ul>
        <ul>Global <code>window</code> object:
          <li>In a <u>web browser environment</u>, such as when JavaScript is used in the context of a web page, there is a global object called <code>window</code>. <i>The <code>window</code> object represents the browser window</i> and <i>serves as the global object for JavaScript in the browser environment</i>. It contains properties and methods that are specific to the browser environment.</li>
          <li>NOTE: It's important to note that not all <u>JavaScript environments</u> have a <code>window</code> object. While the <i><code>window</code> object is specific to browsers</i>, similar global objects may exist in other JavaScript environments (e.g., <code>global</code> in Node.js).</li>
        </ul>
        <p>In summary, <i>standard built-in objects are part of the core JavaScript language</i> and provide fundamental functionality, while the <i>global <code>window</code> object is specific to web browsers</i> and provides access to browser-related features.</p>
        `,
      ],
    },
    {
      title: 'String',
      id: 'string',
      source: '/src/markdowns/10_Standard_Build-In_Objects/String.html',
      summary: [
        `<p>The <code>String</code> object is <i>used to represent and manipulate a <u>sequence of characters</u></i>.</p>
        <p>Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their <code>length</code>, to build and concatenate them using the <code>+</code> and <code>+=</code> string operators, checking for the existence or location of substrings with the <code>indexOf()</code> method, or extracting substrings with the <code>substring()</code> method.</p>
        `,
        `<h3>Creating strings</h3> 
        <ul>Strings can be created as:
        <li>- <i>primitives</i>, from string literals;</li>
        <li>- <i>objects</i>, using <code>String()</code> constructor.</li>
        </ul>
        <p>NOTE: <i><u>String function</u> and <u>String constructor</u> produce different results</i>: <code>new String()</code> creates a new <code>String</code> object. When called instead as a function like <code>String()</code>, it performs type conversion to a primitive string.</p>
        <p>WARNING: You should rarely find yourself using <code>String</code> as a constructor.</p>
        `,
        `<h3>Character access</h3>
        <p><i>You can treat the string as an <u>array-like object</u></i>, where individual characters correspond to a numerical index.</p>
        <p>NOTE: <i>Strings are zero-indexed</i>: The index of a string's first character is 0, and the index of a string's last character is the length of the string minus 1.</p>
        `,
        `<h3>Comparing strings</h3>
        <p>All comparison operators, including <code>===</code> and <code>==</code>, compare strings <i>case-sensitively</i>.</p>`,
        `<h3>String primitives vs String objects</h3>
        <p>Note that JavaScript distinguishes between <code>String</code> objects and primitive string values.</p>
        <p>String literals (denoted by double or single quotes) and strings returned from <code>String</code> calls in a non-constructor context (that is, called without using the <code>new</code> keyword) are primitive strings. <i>In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup on the wrapper object instead.</i></p>`,
        `<h3>String coercion</h3>
        <ul>There are several ways to coerce to a string:
          <li>- template literals;</li>
          <li>- <code>String()</code> function;</li>
          <li>- <code>+</code> operator.</li>
        </ul>
        `,
        `<h3>Long literal strings</h3>
        <p>Sometimes, your code will include strings which are very long. Rather than having lines that go on endlessly, or wrap at the whim of your editor, you may wish to specifically <i>break the string into multiple lines in the source code without affecting the actual string contents</i>.</p>
        <p><i>You can use the <code>+</code> operator to append multiple strings together.</i></p>
        `,
        `<h3>Template literals (Template strings)</h3>
        <ul>Template literals are literals delimited with backtick characters, allowing for:
          <li>- <i>multi-line strings</i>;</li>
          <li>- <i>string interpolation</i> with embedded expressions;</li>
          <li>- special constructs called <i>tagged templates</i>.</li>
        </ul>
        `,
        `Template literals and Tagged Templates`,
      ],
    },
    {
      title: '<code>String.prototype</code> properties & methods',
      id: 'string-prototype-properties-and-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'length',
          id: 'string-prototype-length',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.length.html',
          summary: [
            `<p>The <code>length</code> <i><u>read-only</u> property</i> of a string contains the length of the string in <i>UTF-16 code units</i>. This property <i>returns the number of code units in the string</i>.</p>
            <p><i>JavaScript uses UTF-16 encoding</i>, where each Unicode character may be encoded as one or two code units, so it's possible for the value returned by <code>length</code> to not match the actual number of Unicode characters in the string.  For common scripts like Latin, Cyrillic, wellknown CJK characters, etc., this should not be an issue, but if you are working with certain scripts, such as emojis, mathematical symbols, or obscure Chinese characters, you may need to account for the difference between code units and characters.</p>
            `,
          ],
        },
        {
          title: 'indexOf()',
          id: 'string-prototype-indexOf()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.indexOf.html',
          summary: [
            `<p>The <code>indexOf()</code> method, given one argument: <i>a substring to search for</i>, searches the entire calling string, and <i>returns the index of the first occurrence of the specified substring</i>. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number: <code>string.indexOf(searchString, startPosition)</code>.
            </p>
            <p>The <code>indexOf()</code> method is <i>case sensitive</i>. For example, the following expression returns <code>-1</code>: <code>'Blue Whale'.indexOf('blue')</code>.</p>
            `,
          ],
        },
        {
          title: 'lastIndexOf()',
          id: 'string-prototype-lastIndexOf()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.lastIndexOf.html',
          summary: [
            `<p>The <code>lastIndexOf()</code> method, given one argument: a <i>substring to search for</i>, searches the entire calling string, and <i>returns the index of the last occurrence</i> of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number: <code>string.lastIndexOf(searchString, position)</code>.</p>
          <ul>The <code>lastIndexOf()</code> method:
            <li>- <i>returns the index</i> (position) of the last occurrence of a specified value in a string;</li>
            <li>- searches the string from the end to the beginning;</li>
            <li>- <i>returns <code>-1</code> if the value is not found</i>;</li>
            <li>- is <i>case sensitive</i>. For example, the following expression returns <code>-1</code>: <code>'Blue Whale'.lastIndexOf('blue')</code>.</li>
          </ul>
          `,
          ],
        },
        {
          title: 'slice()',
          id: 'string-prototype-slice()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.slice.html',
          summary: [
            `<p>The <code>slice()</code> method <i>extracts a section of a string</i> and <i>returns it as a new string</i>, without modifying the original string: <code>string.slice(indexStart, indexEnd)</code>.</p>
          <ul>The <code>slice()</code> method:
            <li>- extracts a part of a string;</li>
            <li>- returns the extracted part in a new string;</li>
            <li>- does not change the original string;</li>
            <li>- the start and end parameters specifies the part of the string to extract (the first position is 0, the second is 1, ...);</li>
            <li>- <i>a negative number selects from the end of the string.</i></li>
          </ul>`,
          ],
        },
        {
          title: 'toLowerCase() & toUpperCase()',
          id: 'string-prototype-toLowerCase-toUpperCase',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.toLowerCase_&_toUpperCase.html',
          summary: [
            `<p>The <code>toLowerCase()</code> method <i>returns the calling string value converted to lower case</i>. On the other hand, the <code>toUpperCase()</code> method returns the calling string value converted to uppercase. The both methods does not change the original string.</p>
          <p>NOTE: If the value used to attach <code>toLowerCase()</code> or <code>toUpperCase()</code> isn't a string, it will be <i>converted automatically to a string</i>.</p>
          `,
          ],
        },
        {
          title: 'trim()',
          id: 'string-prototype-trim()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.trim.html',
          summary: [
            `<p>The <code>trim()</code> method <i>removes whitespace</i> from both sides of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).</p>
          <p>To return a new string with whitespace trimmed from just one end, use <code>trimStart()</code> or <code>trimEnd()</code>.</p>`,
          ],
        },
        {
          title: 'replace()',
          id: 'string-prototype-replace()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.replace.html',
          summary: [
            `<p><i>The <code>replace()</code> method returns a new string with one, some, or all matches of a <code>pattern</code> replaced by a <code>replacement</code>:</i> <code>string.replace(pattern, replacement).</code></p>
          <p>The <i><code>pattern</code> can be a string or a <code>RegExp</code></i>, and the <i><code>replacement</code> can be a string or a function called for each match. If <code>pattern</code> is a string, only the first occurrence will be replaced.</i> The original string is left unchanged.</p>
          <p>NOTE: To replace all instances, use a regular expression with the <code>g</code> modifier set, or use <code>replaceAll()</code> method instead. A <code>Regexp</code> with the <code>g</code> flag is the only case where <code>replace()</code> replaces more than once.</p>
          `,
          ],
        },
        {
          title: 'replaceAll()',
          id: 'string-prototype-replaceAll()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.replaceAll.html',
          summary: [
            `<p>The <code>replaceAll()</code> method <i>returns a new string</i> with all matches of a <code>pattern</code> replaced by a <code>replacement</code>. The <code>pattern</code> can be a string or a <code>RegExp</code>, and the <code>replacement</code> can be a string or a function to be called for each match: <code>string.replaceAll(pattern, replacement)</code>.</p>
            <p><i>Unlike <code>replace()</code>, this method would replace all occurrences of a string, not just the first one.</i> This is especially useful if the string is not statically known, as calling the <code>RegExp()</code> constructor without escaping special characters may unintentionally change its semantics.</p>
            `,
          ],
        },
        {
          title: 'includes()',
          id: 'string-prototype-includes()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.includes.html',
          summary: [
            `<p>The <code>includes()</code> method <i>performs a <u>case-sensitive search</u> to determine whether one string may be found within another string</i>, returning <code>true</code> or <code>false</code> as appropriate: <code>string.includes(searchString, startPosition)</code></p>`,
          ],
        },
        {
          title: 'startsWith() & endsWith()',
          id: 'string-prototype-startsWith-endsWith',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.startsWith_&_endsWith.html',
          summary: [
            `<ul>The <code>startsWith()</code>/<code>endsWith()</code> methods <i>determines whether a string begins/ends with the characters of a specified string</i>, returning <code>true</code> or <code>false</code> as appropriate:
              <li>- <code>string.startsWith(searchString, startPosition)</code>;</li>
              <li>- <code>string.endsWith(searchString, endPosition)</code>.</li>
            </ul>
            <p>Both methods are <i>case-sensitive</i>.</p>
            `,
          ],
        },
        {
          title: 'split()',
          id: 'string-prototype-split()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.split.html',
          summary: [
            `<p>The <code>split()</code> method takes a <i>pattern</i> and <i>divides a string into an ordered list of substrings</i> by searching for the pattern, puts these substrings into an array, and returns the array: <code>string.split(separator, limit)</code>.</p>
          <ul>The <code>split()</code> method:
            <li>- splits a string into an array of substrings;</li>
            <li>- returns the new array of strings;</li>
            <li>- does not change the original string;</li>
            <li>- if <code>" "</code> is used as separator, the string is split between words.</li>
          </ul>
          `,
            `<h3>Parameters</h3>
          <ul><code>separator</code> (optional) 
            <li><i>The pattern describing where each split should occur.</i> Can be a <u>string</u> or an object with a <code>Symbol.split</code> method — the typical example being a <u>regular expression</u>. If undefined, the original target string is returned wrapped in an array.</li>
          </ul>
          <ul><code>limit</code> (optional)
            <li><i>A non-negative integer specifying a limit on the number of substrings to be included in the array.</i></li>
          </ul>`,
          ],
        },
        {
          title: 'padStart() & padEnd()',
          id: 'string-prototype-padStart-padEnd',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.padStart_&_padEnd.html',
          summary: [
            `<ul>The <code>padStart()</code>/<code>padEnd()</code> method <i>pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length</i>. In the case of <code>padStart()</code> the padding is applied from the <u>start</u> of the current string, for <code>padEnd()</code> the padding is applied from the <u>end</u> of the current string:
              <li>- <code>string.padStart(targetLength, padString)</code>;</li>
              <li>- <code>string.padEnd(targetLength, padString)</code>.</li>
            </ul>`,
          ],
        },
        {
          title: 'repeat()',
          id: 'string-prototype-repeat',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/String.repeat.html',
          summary: [
            `<p>The <code>repeat()</code> method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together: <code>string.repeat(count)</code>.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Regular Expressions (RegEx)',
      id: 'regular-expressions-regex',
      source:
        '/src/markdowns/10_Standard_Build-In_Objects/Regular_expressions_RegEx.html',
      summary: [
        `<h3>What are Regular Expressions ("RegEx") in JavaScript</h3>
      <p>Regular Expressions, often abbreviated as RegEx or RegExp, <i>is a <u>sequence of characters</u> that forms a <u>search patterns</u> used for matching character combinations in strings</i>. In JavaScript, <i><u>regular expressions are objects</u> that provide a powerful and flexible way to search, match, and manipulate text</i>. They are implemented through the <code>RegExp</code> constructor and support a wide range of pattern-matching capabilities.</p>
      <p>Regular expressions are a <i>powerful tool for string manipulation and searching</i>. They are widely used in JavaScript and many other programming languages for tasks such as form validation, text processing, and data extraction.</p>
      `,
      ],
    },
    {
      title: 'Number',
      id: 'number',
      source: '/src/markdowns/10_Standard_Build-In_Objects/Number.html',
      summary: [
        `<p>The <code>Number</code> object is a <i>primitive wrapper object</i> used to represent and manipulate numbers like 37 or -9.25.</p>
        <p>The <i><code>Number</code> constructor</i> contains constants and methods for working with numbers. Values of other types can be converted to numbers using the <i><code>Number()</code> function</i>.</p>
        `,
        `<h3>Creating numbers</h3>
        <ul>Numbers can be created as:
          <li>- <i>primitives</i>, most commonly expressed in literal forms;</li>
          <li>- <i>objects</i>, using <code>Number()</code> constructor.</li>
        </ul>
        <p>NOTE: <i><u>Number function</u> and <u>Number constructor</u> produce different results</i>: <code>new Number()</code> creates a new <code>Number</code> object. When called instead as a function like <code>Number()</code>, it performs type conversion to a primitive number. If <code>Number()</code> can't convert a parameter to a number, will return <code>NaN</code>.</p>
        <p>WARNING: You should rarely find yourself using <code>Number</code> as a constructor.</p>
        `,
        `<h3>Number primitives vs Number objects</h3>
        <p>Note that JavaScript distinguishes between <code>Number</code> objects and primitive number values.</p>
        <p>Number literal forms and numbers returned from <code>Number</code> calls in a non-constructor context (that is, called without using the <code>new</code> keyword) are primitive numbers. <i>In contexts where a method is to be invoked on a primitive number or a property lookup occurs, JavaScript will automatically wrap the primitive number and call the method or perform the property lookup on the wrapper object instead.</i></p>`,
        `<h3>Number encoding</h3>
        <p>The JavaScript <code>Number</code> type is a double-precision 64-bit binary format IEEE 754 value, like <code>double</code> in Java or C#. This means it can represent fractional values, but <i>there are some limits to the stored number's magnitude and precision</i>. Integers can only be represented without loss of precision in the range -253 + 1 to 253 - 1.</p>`,
        `<h3>Number coercion</h3>
        <ul>There are several ways to coerce to a number:
          <li>- Addition operator <code>+</code>;</li>
          <li>- <code>Number()</code> function.</li>
        </ul>
        <p><code>Number.parseFloat()</code> and <code>Number.parseInt()</code> are similar to <code>Number()</code> but only convert strings, and have slightly different parsing rules. For example, <code>parseInt()</code> doesn't recognize the decimal point, and <code>parseFloat()</code> doesn't recognize the <code>0x</code> prefix.</p>
        `,
      ],
    },
    {
      title: 'Number Static Methods',
      id: 'number-static-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Number.parseInt()',
          id: 'number-parseint()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.parseInt.html',
          summary: [
            `<p>The <code>Number.parseInt()</code> method <i>parses a string</i> argument and <i>returns an integer</i> of the specified radix or base: <code>Number.parseInt(string, radix)</code>.</p>
            <p><i>If the first character cannot be converted, <code>NaN</code> is returned.</i> Leading and trailing spaces are ignored. Only the first integer found is returned.</p>
            <ul>The <code>Number.parseInt()</code> method:
              <li>- parses a value as a string and returns the first integer;</li>
              <li>- a <code>radix</code> parameter specifies the number system to use: 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal;</li>
              <li>- if <code>radix</code> is omitted, JavaScript assumes <code>radix</code> 10. If the value begins with "0x", JavaScript assumes <code>radix</code> 16.</li>
            </ul>
            `,
          ],
        },
        {
          title: 'Number.parseFloat()',
          id: 'number-parsefloat()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.parseFloat.html',
          summary: [
            `<p>The <code>Number.parseFloat()</code> method <i>parses a string</i> and <i>returns a floating point number</i>: <code>Number.parseFloat(string)</code>.</p>
          <p><i>If a number cannot be parsed from the string, it returns <code>NaN</code>.</i> Leading and trailing spaces are ignored. Only the first number found is returned.</p>
          `,
          ],
        },
        {
          title: 'Number.isNaN()',
          id: 'number-isnan()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.isNaN.html',
          summary: [
            `<p>The <code>Number.isNaN()</code> method determines whether the passed value is <code>NaN</code> and its type is <code>Number</code>: <code>Number.isNaN(value)</code>.</p>
            <p>This method returns <code>true</code> if the given value is a number with value <code>NaN</code>. Otherwise, returns <code>false</code>.</p>
            `,
          ],
        },
        {
          title: 'Number.isFinite()',
          id: 'number-isfinite()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.isFinite.html',
          summary: [
            `<p>The <code>Number.isFinite()</code> method determines whether the passed value is a finite number: <code>Number.isFinite(value)</code>.</p>
            <p>The boolean value <code>true</code> if the given value is a finite number. Otherwise <code>false</code>.</p>
            `,
          ],
        },
        {
          title: 'Number.isInteger()',
          id: 'number-isinteger()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.isInteger.html',
          summary: [
            `<p>The <code>Number.isInteger()</code> method determines whether the passed value is an integer number: <code>Number.isInteger(value)</code>.</p>
          <p>The boolean value <code>true</code> if the given value is an integer number. Otherwise <code>false</code>.</p>
          `,
          ],
        },
      ],
    },
    {
      title: '<code>Number.prototype</code> Methods',
      id: 'number-prototype-methods',
      source: 'number-prototype-methods',
      summary: [],
      sectionArticles: [
        {
          title: 'toFixed()',
          id: 'number-prototype-tofixed()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.prototype.toFixed.html',
          summary: [
            `<p>The <code>toFixed()</code> method <i>formats a number using fixed-point notation</i>: <code>number.toFixed(digits)</code>.</p>
            <ul>The <code>toFixed()</code> method:
            <li>- converts a number to a string;</li>
            <li>- rounds the string to a specified number of decimals;</li>
            <li>- if the number of decimals are higher than in the number, zeros are added.</li>
            </ul>`,
            `<h3>Parameters</h3>
            <ul><code>digits</code> (optional)
              <li><i>The number of digits to appear after the decimal point</i>; this may be a value between <code>0</code> and <code>20</code>, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as <code>0</code>.</li>
            </ul>
              `,
            `<h3>Return value</h3>
            <p><i>A string</i> representing the given number using fixed-point notation.</p>`,
          ],
        },
      ],
    },
    {
      title: 'Math',
      id: 'math',
      source: '/src/markdowns/10_Standard_Build-In_Objects/Math.html',
      summary: [
        `<p><code>Math</code> is a built-in object that has properties and methods for mathematical constants and functions. <i>It's not a function object.</i></p>
        <p>Unlike many other global objects, <i><code>Math</code> is not a constructor. All properties and methods of <code>Math</code> are static</i>.</p>
        <p><code>Math</code> works with the <code>Number</code> type, it doesn't work with <code>BigInt</code>.</p>
        `,
      ],
    },
    {
      title: 'Math Static Methods',
      id: 'math-static-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Math.max()',
          id: 'math-max()',
          source: '/src/markdowns/10_Standard_Build-In_Objects/Math.max.html',
          summary: [
            `<p>The <code>Math.max()</code> function <i>returns the largest of the numbers</i> given as input parameters, or <code>-Infinity</code> if there are no parameters: <code>Math.max(value0, value1, …, valueN).</code></p>
            <p>Because <i><code>max()</code> is a static method of <code>Math</code></i>, you always use it as <code>Math.max()</code>, rather than as a method of a <code>Math</code> object you created (<code>Math</code> is not a constructor).</p>
            <p><code>Math.max.length</code> is 2, which weakly signals that <i>it's designed to handle at least two parameters</i>.</p>
            `,
          ],
        },
        {
          title: 'Math.min()',
          id: 'math-min()',
          source: '/src/markdowns/10_Standard_Build-In_Objects/Math.min.html',
          summary: [
            `<p>The <code>Math.min()</code> function <i>returns the smallest of the numbers</i> given as input parameters, or <code>Infinity</code> if there are no parameters: <code>Math.min(value0, value1, …, valueN).</code></p>
            <p>Because <i><code>min()</code> is a static method of <code>Math</code></i>, you always use it as <code>Math.min()</code>, rather than as a method of a <code>Math</code> object you created (<code>Math</code> is not a constructor).</p>
            <p><code>Math.min.length</code> is 2, which weakly signals that <i>it's designed to handle at least two parameters</i>.</p>
            `,
          ],
        },
        {
          title: 'Math.round()',
          id: 'math-round()',
          source: '/src/markdowns/10_Standard_Build-In_Objects/Math.round.html',
          summary: [
            `<ul>The <code>Math.round()</code> function <i>returns the value of a number <u>rounded to the nearest integer</u></i>. For example, 2.49 will be rounded down 2, and 2.5 will be rounded up 3:
              <li>- <code>Math.round(number)</code>.</li>
            </ul>
            <p>If the fractional portion of the argument is greater than 0.5, the argument is rounded to the integer with the next higher absolute value. If it is less than 0.5, the argument is rounded to the integer with the lower absolute value. If the fractional portion is exactly 0.5, the argument is rounded to the next integer in the direction of +∞.</p>
            <p>Because <i><code>round()</code> is a static method of <code>Math</code></i>, you always use it as <code>Math.round()</code>, rather than as a method of a <code>Math</code> object you created (<code>Math</code> is not a constructor).</p>`,
          ],
        },
        {
          title: 'Math.floor()',
          id: 'math-floor()',
          source: '/src/markdowns/10_Standard_Build-In_Objects/Math.floor.html',
          summary: [
            `<p>The <code>Math.floor()</code> function <i><u>always rounds down</u> and returns the largest integer less than or equal to a given number</i>: <code>Math.floor(number)</code></p>
            <p>Because <i><code>floor()</code> is a static method of <code>Math</code></i>, you always use it as <code>Math.floor()</code>, rather than as a method of a <code>Math</code> object you created (<code>Math</code> is not a constructor).</p>`,
          ],
        },
        {
          title: 'Math.ceil()',
          id: 'math-ceil()',
          source: '/src/markdowns/10_Standard_Build-In_Objects/Math.ceil.html',
          summary: [
            `<p>The <code>Math.ceil()</code> function <i><u>always rounds up</u> and returns the smaller integer greater than or equal to a given number</i>: <code>Math.ceil(number)</code></p>
            <p>Because <i><code>ceil()</code> is a static method of <code>Math</code></i>, you always use it as <code>Math.ceil()</code>, rather than as a method of a <code>Math</code> object you created (<code>Math</code> is not a constructor).</p>`,
          ],
        },
        {
          title: 'Math.trunc()',
          id: 'math-trunc()',
          source: '/src/markdowns/10_Standard_Build-In_Objects/Math.trunc.html',
          summary: [
            `<p>The <code>Math.trunc()</code> function <i><u>returns the integer part of a number</u> by removing any fractional digits</i>: <code>Math.trunc(number)</code>.</p>
            <p>Unlike the other three <code>Math</code> methods: <code>Math.floor()</code>, <code>Math.ceil()</code> and <code>Math.round()</code>, the way <code>Math.trunc()</code> works is very simple. It <i>truncates (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number</i>.</p>
            <p>Because <i><code>trunc()</code> is a static method of <code>Math</code></i>, you always use it as <code>Math.trunc()</code>, rather than as a method of a <code>Math</code> object you created (<code>Math</code> is not a constructor).</p>`,
          ],
        },
        {
          title: 'Math.random()',
          id: 'math-random()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Math.random.html',
          summary: [
            `<p>The <code>Math.random()</code> function <i>returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1</i>, with approximately uniform distribution over that range — which you can then scale to your desired range: <code>Math.random()</code>.</p>
            <p>NOTE: <i><code>Math.random()</code> does not provide cryptographically secure random numbers.</i> Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the <code>window.crypto.getRandomValues()</code> method.</p>
            <p>Because <i><code>random()</code> is a static method of <code>Math</code></i>, you always use it as <code>Math.random()</code>, rather than as a method of a <code>Math</code> object you created (<code>Math</code> is not a constructor).</p>`,
          ],
        },
        {
          title: 'Math.abs()',
          id: 'math-abs()',
          source: '/src/markdowns/10_Standard_Build-In_Objects/Math.abs.html',
          summary: [
            `<p>The <code>Math.abs()</code> function <i>returns the <u>absolute value</u> of a number</i>: <code>Math.abs(number)</code>.</p>
            <p>Because <i><code>abs()</code> is a static method of <code>Math</code></i>, you always use it as <code>Math.abs()</code>, rather than as a method of a <code>Math</code> object you created (<code>Math</code> is not a constructor).</p>`,
          ],
        },
      ],
    },
    {
      title: 'BigInt',
      id: 'bigint',
      source: '/src/markdowns/10_Standard_Build-In_Objects/BigInt.html',
      summary: [
        `<p>In JavaScript, the <code>BigInt</code> is a <i>numeric primitive</i> that was introduced with ECMAScript 2020 (ES11) to <i>represent integers of arbitrary precision</i>.</p>
        <p>Prior to the introduction of <code>BigInt</code>, JavaScript had a single numeric type called <code>Number</code>, which could represent both integers and floating-point numbers. However, <i>due to the limitations of the double-precision floating-point representation used by <code>Number</code>, it could not accurately represent very large integers or maintain precision for certain operations</i>.</p>
        <p><code>BigInt</code> was introduced to address this limitation by <i>allowing the representation of arbitrarily <u>large integers</u></i>.</p>
        <ul>You can create a <code>BigInt</code> by:
          <li>- appending the <code>n</code> suffix to an integer literal;</li>
          <li>- by using the <code>BigInt()</code> constructor.</li>
        </ul>
        <p>It's important to note that <i>you cannot mix <code>BigInt</code> and regular <code>Number</code> types in arithmetic operations without explicit conversion</i>.</p>
        <p><code>BigInt</code> is particularly useful when dealing with situations where precise integer arithmetic is required, such as cryptography, large integer calculations, or scenarios where the limitations of regular JavaScript numbers become a problem.</p>
        `,
      ],
    },
    {
      title: 'Date',
      id: 'date',
      source: '/src/markdowns/10_Standard_Build-In_Objects/Date.html',
      summary: [
        `<p>The <code>Date</code> object represent a single moment in time in a platform-independent format. <i><code>Date</code> object contain a <code>Number</code> that represents milliseconds since 1 January 1970 UTC.</i></p>`,
        `<h3>The ECMAScript epoch and timestamps</h3>
        <p>A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since the ECMAScript epoch, which is defined as January 1, 1970, UTC (equivalent to the UNIX epoch).</p>`,
        `<h3>Date format and time zone conversions</h3>
        <p>There are several methods available to obtain a <i>date in various formats</i>, as well as to <i>perform time zone conversions</i>.</p>`,
        `<h3><code>Date()</code> constructor vs <code>Date()</code> function</h3>
        <ul><code>Date()</code> can be called with or without <code>new</code> keyword, but with different effects:
          <li>- when <i><code>Date()</code> is called as a constructor</i> (with the <code>new</code> keyword), returns a new <code>Date</code> object.</li>
          <li>- when <i><code>Date()</code> is called as a function</i>, returns a string representation of the current date and time. Any arguments given in a <code>Date()</code> function call (without the <code>new</code> keyword) are ignored.</li>
        </ul>
        `,
        `<h3><code>Date()</code> static method: <code>Date.now()</code></h3>
        <p><code>Date.now()</code> static method on <code>Date()</code> object <i>returns the numeric value corresponding to the current time</i> — the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.</p>
        `,
      ],
    },
    {
      title: '<code>Date.prototype</code> Methods',
      id: 'date-prototype-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'getFullYear()',
          id: 'date-prototype-getfullyear()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getFullYear.html',
          summary: [
            `<p>The <code>getFullYear()</code> method <i>returns the <u>full year (4 digits)</u> of the specified date <u>according to local time</u></i>: <code>new Date().getFullYear()</code>.</p>
            <p>Use this method instead of the <code>getYear()</code> method.</p>`,
          ],
        },
        {
          title: 'getMonth()',
          id: 'date-prototype-getmonth()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getMonth.html',
          summary: [
            `<p>The <code>getMonth()</code> method <i>returns the <u>month (0 to 11)</u> in the specified date <u>according to local time</u>, as a <u>zero-based value</u></i> (where zero indicates the first month of the year): <code>new Date().getMonth()</code>.</p>`,
          ],
        },
        {
          title: 'getDate()',
          id: 'date-prototype-getdate()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getDate.html',
          summary: [
            `<p>The <code>getDate()</code> method <i>returns the <u>day of the month (1 to 31)</u> for the specified date <u>according to local time</u></i>: <code>new Date().getDate()</code>.</p>`,
          ],
        },
        {
          title: 'getDay()',
          id: 'date-prototype-getday()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getDay.html',
          summary: [
            `<p>The <code>getDay()</code> method <i>returns the <u>day of the week (0 to 6)</u> for the specified date <u>according to local time</u>, where 0 represents Sunday</i>: <code>new Date().getDay()</code>.</p>
          <p>For the <u>day of the month</u>, see <code>Date.prototype.getDate()</code>.</p>`,
          ],
        },
        {
          title: 'getHours()',
          id: 'date-prototype-gethours()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getHours.html',
          summary: [
            `<p>The <code>getHours()</code> method <i>returns the <u>hour (0 to 23)</u> for the specified date, <u>according to local time</u></i>: <code>new Date().getHours()</code>.</p>`,
          ],
        },
        {
          title: 'getMinutes()',
          id: 'date-prototype-getminutes()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getMinutes.html',
          summary: [
            `<p>The <code>getMinutes()</code> method <i>returns the <u>minutes (0 to 59)</u> in the specified date <u>according to local time</u></i>: <code>new Date().getMinutes()</code>.</p>`,
          ],
        },
        {
          title: 'getSeconds()',
          id: 'date-prototype-getseconds()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getSeconds.html',
          summary: [
            `<p><p>The <code>getMinutes()</code> method <i>returns the <u>seconds (0 to 59)</u> in the specified date <u>according to local time</u></i>: <code>new Date().getSeconds()</code>.</p></p>`,
          ],
        },
        {
          title: 'getTime()',
          id: 'date-prototype-gettime()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getTime.html',
          summary: [
            `<p>The <code>getTime()</code> method <i>returns the <u>number of milliseconds</u> since the 1 January 1970 00:00:00 (ECMAScript epoch)</i>: <code>new Date().getTime()</code>.</p>
          <p>You can use this method to help assign a date and time to another <code>Date</code> object.</p>`,
            `<h3>Reduced time precision</h3>
          <p>To offer protection against timing attacks and fingerprinting, <i>the precision of <code>new Date().getTime()</code> might get rounded depending on browser settings</i>.</p>`,
          ],
        },
        {
          title: 'toISOString()',
          id: 'date-prototype-toisostring()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.toISOString.html',
          summary: [
            `<p>The <code>toISOString()</code> method <i>returns a <u>date object as a string</u>, using the <u>ISO standard</u></i>: <code>new Date().toISOString()</code>.</p>
            <p>The standard is called ISO-8601 and the format is: <code>YYYY-MM-DDTHH:mm:ss.sssZ</code>.</p>`,
          ],
        },
        {
          title: 'toLocaleString()',
          id: 'date-prototype-tolocalestring()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.toLocaleString.html',
          summary: [
            `<p>The <code>toLocaleString()</code> method <i>returns a <code>Date</code> object as a string, using <u>locale settings</u></i>: <code>new Date().toLocaleString(locales, options)</code>.</p>
          <p><i>The <u>default</u> language depends on the <u>locale setup on your computer</u>.</i></p>
          <p>In implementations with <code>Intl.DateTimeFormat</code> API support, this method simply calls <code>Intl.DateTimeFormat</code>.</p>`,
            `<h3>Parameters</h3>
          <p>The <code>locales</code> and <code>options</code> arguments <i><u>customize</u> the behavior of the function</i> and let applications specify the language whose formatting conventions should be used.</p>
          <ul><code>locales</code> (optional):
            <li>- a <i>string</i> with a BCP 47 language tag, or an <i>array of such strings</i>.</li>
          </ul>
          <ul><code>options</code> (optional):
            <li>- an <i>object</i> adjusting the output format.</li>
          </ul>
          `,
          ],
        },
        {
          title: 'setFullYear()',
          id: 'date-prototype-setfullyear()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.setFullYear.html',
          summary: [
            `<p>The <code>setFullYear()</code> method <i>sets the <u>full year</u> for a specified date <u>according to local time</u>. Returns new <u>timestamp</u></i>: <code>new Date().setFullYear(yearValue, monthValue, dateValue)</code>.</p>`,
            `<h3>Description</h3>  
          <p><i><code>setFullYear()</code> can also set month and day.</i> If you do not specify the <code>monthValue</code> and <code>dateValue</code> parameters, the values returned from the <code>getMonth()</code> and <code>getDate()</code> methods are used.</p>
          <p>If <i>a parameter you specify is outside of the expected range</i>, <code>setFullYear()</code> attempts to update the other parameters and the date information in the <code>Date</code> object accordingly.</p>
          `,
          ],
        },
      ],
    },
    {
      title: 'Internationalization API (Intl)',
      id: 'internationalization-api-intl',
      source: '/src/markdowns/10_Standard_Build-In_Objects/Intl.html',
      summary: [
        `<p>The <code>Intl</code> object is the namespace for the ECMAScript Internationalization API, which provides <i>language sensitive string comparison</i>, <i>number formatting</i>, and <i>date and time formatting</i>. The <code>Intl</code> object provides access to several constructors, as well as functionality common to the internationalization constructors and other language sensitive functions.</p>`,
        `<h3>Locale identification and negotiation</h3>
        <p>The internationalization constructors use a common <i>pattern for identifying locales and determining the one they will actually use: they all accept <code>locales</code> and <code>options</code> arguments</i>, and negotiate the requested locale(s) against the locales they support using an algorithm specified in the <code>options.localeMatcher</code> property.</p>`,
        `<h3><code>locales</code> and <code>options</code> arguments</h3>
        <p>The <code>locales</code> argument is used to <i>determine the locale used in a given operation</i>.</p>
        <p>The <code>options</code> argument must be <i>an object with properties that vary between constructors and functions</i>. If the <code>options</code> argument is not provided or is <code>undefined</code>, default values are used for all properties.</p>
        <p>NOTE: You can use <code>navigator.language</code> read-only property for setting your locales parameter.</p>
        `,
      ],
      sectionArticles: [
        {
          title: 'Intl.DateTimeFormat()',
          id: 'intl-datetimeformat()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Intl.DateTimeFormat.html',
          summary: [
            `<p>The <code>Intl.DateTimeFormat</code> object <i>enables language-sensitive <u>date</u> and <u>time</u> formatting</i>: <code>new Intl.DateTimeFormat(locales, options)</code>.</p>
            <p>NOTE: <i><code>Intl.DateTimeFormat()</code> can be called with or without <code>new</code>.</i> Both create a new <code>Intl.DateTimeFormat</code> instance. However, there's a special behavior when it's called without <code>new</code> and the <code>this</code> value is another <code>Intl.DateTimeFormat</code> instance.</p>
            <p>In basic use <u>without specifying a locale</u>, <code>Intl.DateTimeFormat</code> uses the <u>default locale</u> and <u>default options</u>.</p>
            `,
          ],
        },
        {
          title: 'Intl.NumberFormat()',
          id: 'intl-numberformat()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/Intl.NumberFormat.html',
          summary: [
            `<p>The <code>Intl.NumberFormat</code> object <i>enables language-sensitive <u>number formatting</u></i>.</p>
            <p>NOTE: <i><code>Intl.NumberFormat()</code> can be called with or without <code>new</code>.</i> Both create a new <code>Intl.NumberFormat</code> instance. However, there's a special behavior when it's called without <code>new</code> and the <code>this</code> value is another <code>Intl.NumberFormat</code> instance.</p>
            <p>In basic use <u>without specifying a locale</u>, a formatted string in the <u>default locale</u> and with <u>default options</u> is returned.</p>
            `,
          ],
        },
      ],
    },

    {
      title: 'Error',
      id: 'error',
      source: '/src/markdowns/10_Standard_Build-In_Objects/Error.html',
      summary: [
        `<p><code>Error</code> objects are <i>thrown when runtime errors occur</i>. The <code>Error</code> object can also be <i>used as a base object for user-defined exceptions</i>.</p>
        <p>The <code>Error</code> object <i>provides error information</i> when an error occurs.</p>`,
        `<h3>Error Constructor</h3>
        <p>The <code>Error()</code> constructor creates a new <code>Error</code> object.</p>
        <p>NOTE: <code>Error()</code> can be called with or without <code>new</code>. Both create a new <code>Error</code> instance.</p>
        `,
        `<h3>Error instance properties</h3>
        <p>- <code>message</code>: error message. For user-created <codeError</code> objects, this is the string provided as the constructor's first argument.</p>
        <p>- <code>name</code>: error name. This is determined by the constructor function.</p>
        <p>- <code>cause</code>: Error cause indicating the reason why the current error is thrown — usually another caught error. For user-created <codeError</code> objects, this is the value provided as the <code>cause</code> property of the constructor's second argument.</p>
        `,
      ],
    },
    {
      title: 'FormData',
      id: 'formdata',
      source: '/src/markdowns/10_Standard_Build-In_Objects/FormData.html',
      summary: [
        `<p>The <code>FormData</code> interface provides a way to easily <i>construct a set of <u>key/value pairs</u> representing form <u>fields</u> and their <u>values</u>, which can then be easily sent using the <code>fetch()</code> or <code>XMLHttpRequest.send()</code> method</i>: <code>const formData = new FormData(form)</code></p>`,
        `<h3>Parameters</h3>
        <ul><code>form</code> (optional)
          <li>The <code>FormData()</code> constructor takes as an <i>optional parameter an HTML <<span>form</span>> element</i>. When optional parameter is specified, the <code>FormData</code> object will be <i>populated with the form's current keys/values using the <u>name property</u> of each element for the keys and their submitted value for the values</i>. It will also encode file input content.</li>
        </ul>
        `,
        `<h3>Instance methods</h3>
        <p><code>FormData()</code> object has a series of instance methods that helps you append, delete, set or return keys/values from your <code>FormData()</code> object.</p>`,
        `<h3>Extracting form data</h3>
        <p><i>You can easily extract all the data that is inside a <code>FormData</code> into an JavaScript object with the help of spread operator & <code>Object.fromEntries</code>.</i></p>`,
      ],
    },
    {
      title: 'JSON',
      id: 'json',
      source: '/src/markdowns/10_Standard_Build-In_Objects/JSON.html',
      summary: [
        `<p><i>JSON is a syntax for <u>serializing</u> objects, arrays, numbers, strings, booleans, and <code>null</code>.</i> It is <i>based upon JavaScript syntax, but is distinct from JavaScript</i>: most of JavaScript is not JSON.</p>
        <p>The <code>JSON</code> object contains methods for <u>parsing</u> JavaScript Object Notation (JSON) and <u>converting</u> values to JSON. It can't be called or constructed.</p>
        <p>Unlike most global objects, JSON is not a constructor. <i>All properties and methods of <code>JSON</code> are static</i> (just like the <code>Math</code> object).</p>`,
        `<h3>Static methods</h3>
        <ul><code>JSON.parse()</code>
          <li><i>Parse a piece of string text as JSON</i>, optionally transforming the produced value and its properties, and return the value.</li>
        </ul>
        <ul><code>JSON.stringify()</code>
          <li><i>Return a JSON string corresponding to the specified value</i>, optionally including only certain properties or replacing property values in a user-defined manner.</li>
        </ul>
        `,
      ],
    },
    {
      title: 'JSON Static Methods',
      id: 'json-static-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'JSON.stringify()',
          id: 'json-stringify()',
          source:
            '/src/markdowns/10_Standard_Build-In_Objects/JSON.stringify.html',
          summary: [
            `<p>The <code>JSON.stringify()</code> method <i>converts a <u>JavaScript value</u> to a <u>JSON string</u></i>, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified: <code>JSON.stringify(value, replacer, space)</code>.</p>`,
            `<h3>Parameters</h3>
            <ul><code>value</code>:
              <li>The <u>value</u> to convert to a JSON string.</li>
            </ul>
            <ul><code>replacer</code> (optional):
              <li>A <u>function</u> that alters the behavior of the stringification process,or an <u>array of strings or numbers</u> naming properties of code>value</code> that should be included in the output.</li>
            </ul>
            <ul><code>space</code> (optional):
              <li>A <u>string</u> or <u>number</u> that's used to insert white space (including indentation, line break characters, etc.) into the output JSON string for readability purposes.</li>
            </ul>
            `,
          ],
        },
        {
          title: 'JSON.parse()',
          id: 'json-parse()',
          source: '/src/markdowns/10_Standard_Build-In_Objects/JSON.parse.html',
          summary: [
            `<p>The <code>JSON.parse()</code> method <i>parses a JSON string, constructing the JavaScript value or object described by the string</i>. An optional <u>reviver function</u> can be provided to perform a transformation on the resulting object before it is returned: <code>JSON.parse(text, reviver)</code>.</p>`,
            `<h3>Parameters</h3>
            <ul><code>text</code>:
              <li>The <u>string</u> to parse as JSON.</li>
            </ul>
            <ul><code>reviver</code> (optional):
              <li>If a <u>function</u>, this prescribes how each value originally produced by parsing is transformed before being returned.</li>
            </ul>
            `,
          ],
        },
      ],
    },
  ],
};

const asynchronous = {
  name: 'Asynchronous',
  sections: [
    {
      title: 'How the Web works: HTTP request & responses',
      id: 'how-the-web-works-http-request-responses',
      source:
        '/src/markdowns/11_Asynchronous/How_the_web_works___HTTP_request_&_responses.html',
      summary: [
        `HTTP is a protocol for fetching resources`,
        `HTTP is the foundation of any data exchange on the web`,
        `HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response`,
        `Domain Name Server (DNS)`,
        `TCP/IP socket connection`,
        `HTTP Messages: Request & Response`,
        `HTTP Request: HTTP method, request target, request headers, body`,
        `HTTP Response: HTTP status code, status message, headers, body`,
        `APIs based on HTTP: XMLHttpRequest & Fetch API`,
      ],
    },
    {
      title: 'Introduction to Asynchronous JavaScript',
      id: 'introduction-to-asynchronous-javascript',
      source:
        '/src/markdowns/11_Asynchronous/Introducing_to_Asynchronous_JavaScript.html',
      summary: [
        `JavaScript has only one threat of execution (Call Stack) and so it can only do one thing at a time. There is absolutely no multitasking happening in JavaScript itself.`,
        `Single-Thread Language problem: long-running synchronous functions that work in the Call Stack`,
        `Asynchronous functions & Web APIs`,
        `Synchronous vs Asynchronous functions`,
        `Early Asynchronous Programming & Event Handlers: early asynchronous APIs XMLHttpRequest used events for asynchronous programming`,
        `Early Asynchronous Programming & Chaining Callbacks: Callback Hell`,
        `Early Asynchronous Programming: AJAX`,
        `AJAX is not a programming language`,
        `AJAX use a combination of existing technologies together to communicate with servers`,
        `The XMLHttpRequest API is the core of AJAX`,
        `XML vs JSON`,
        `Useful JavaScript methods for JSON format: <code>JSON.parse()</code> & <code>JSON.stringify()</code>`,
        `XMLHttpRequests Chaining Requests: Welcome to Callback Hell`,
      ],
    },
    {
      title: 'Promises',
      id: 'promises',
      source: '/src/markdowns/11_Asynchronous/Promises.html',
      summary: [
        `Traditionally (before promises), asynchronous tasks were designed as callbacks. This lead at the problem known as Callback Hell. A promise allows to transform the callback-based API to a promise-based one`,
        `A promise is an object returned by an asynchronous function that is used as a placeholder for the future result of that asynchronous operation`,
        `The promise object provides methods to handle the eventual success or failure of the operation`,
        `The promise lifecycle: pending -> settled (fulfilled / rejected)`,
        `Build & consume promises`,
      ],
    },
    {
      title: 'Building a Promise',
      id: 'building-a-promise',
      source: '/src/markdowns/11_Asynchronous/Building_a_Promise.html',
      summary: [
        `The <code>Promise()</code> constructor is primarily used to wrap functions that do not already support promises`,
        `If your task is already promise-based, you likely do not need the <code>Promise()</code> constructor`,
        `The <code>Promise()</code> constructor returns a promise object to which you can attach handlers for consuming the promise`,
      ],
    },
    {
      title: 'Consuming a Promise',
      id: 'consuming-a-promise',
      source: '/src/markdowns/11_Asynchronous/Consuming_a_Promise.html',
      summary: [
        `There is no race condition between an asynchronous operation completing and its handlers being attached`,
        `Handling Fulfilled Promise: <code>.then()</code> method (callback function with response parameter)`,
        `Handling Rejected Promise: <code>.catch()</code> method (callback function with error parameter)`,
        `Chaining Multiple Promises: <code>.then()</code>, <code>.catch()</code> and <code>.finally()</code> methods are used to associate further action with a promise that becomes settled. These methods return promises, so they can be chained`,
        `Always return the result of a promise, otherwise <code>.then()</code> method won't catch the result of the previous promise`,
        `<code>.finally()</code> method (callback function)`,
      ],
    },
    {
      title: 'The Fetch API',
      id: 'the-fetch-api',
      source: '/src/markdowns/11_Asynchronous/Fetch_API.html',
      summary: [
        `<p>The Fetch API provides <i>an interface for <u>fetching resources</u> (including across the network)</i>. It is a more powerful and flexible <i>replacement for <code>XMLHttpRequest</code></i>.</p>
        <p>The Fetch API is <i>completely <code>Promise</code>-based</i>.</p>
        `,
        `<h3>Concepts and usage</h3>
        <p>For making a request and fetching a resource, use the <i><code>fetch()</code> method</i>.</p>
        <ul>The <code>fetch()</code> method takes two parameters:
          <li>- <i>the path to the resource</i> you want to fetch (this parameters is <u>mandatory</u>);</li>
          <li>- <u>optionally</u> second parameters, <i>an <code>init</code> <u>object</u></i> that allows you to control a number of different settings.</li>
        </ul>
        <p>The <code>fetch()</code> method <i>always returns a <code>Promise</code> that resolves to the <code>Response</code> to that request</i> — as soon as the server responds with headers — even if the server response is an HTTP error status.</p>
        <p><i>The promise returned from <code>fetch()</code> won't reject on HTTP error status even if the response is an HTTP <code>404</code> or <code>500</code>.</i> Instead, it will resolve normally (with <code>ok</code> status set to <code>false</code>), and it will <i>only reject on network failure or if anything prevented the request from completing</i>.</p>
        `,
        `<h3>Syntax</h3>
        <ul>
          <li>- <code>fetch(resource)</code></li>
          <li>- <code>fetch(resource, options)</code></li>
        </ul>
        `,
        `<h3><code>resource</code> parameter</h3>
        <p>This defines the resource that you wish to fetch.</p>
        `,
        `<h3><code>options</code> parameter</h3>
        <p>An <i>object</i> containing any <u>custom settings</u> that you want to apply to the request.</p>
        <ul>Some of the possible options are:
          <li>- <i><code>method</code></i>: the request method, e.g., <code>GET</code>, <code>POST</code>. The default is <code>GET</code>.</li>
          <li>- <i><code>headers</code></i>: any headers you want to add to your request, contained within a <code>Headers</code> object or an object literal with <code>String</code> values. Note that some names are forbidden.</li>
          <li>- <i><code>body</code></i>: any body that you want to add to your request. Note that a request using the <code>GET</code> or <code>HEAD</code> method cannot have a body.</li>
        </ul>
        `,
        `<h3>Return value</h3>
        <p><i>A <code>Promise</code></i> that resolves to a <code>Response</code> object or a <code>TypeError</code>.</p>
        `,
      ],
    },
    {
      title:
        'How to consume a promise returned by the <code>fetch()</code> method',
      id: 'how-to-consume-a-promise-returned-by-the-fetch-method',
      source:
        '/src/markdowns/11_Asynchronous/How_to_consume_a_promise_returned_by_fetch_method.html',
      summary: [
        `<code>fetch()</code> will always return a promise that need to be handled by consuming it`,
        `Read the response returned by <code>fetch()</code> with: <code>Response.json()</code>, <code>Response.text()</code>, <code>Response.formData()</code>`,
        `<code>Response.json()</code>, <code>Response.text()</code>, <code>Response.formData()</code> always return a promise`,
        `Throwing Custom Errors Manually: the Error Object & <code>throw new Error()</code>`,
        `Rethrowing an error`,
        `Combining multiple promises with <code>Promise.all</code> or <code>Promise.any</code> and consume them`,
      ],
    },
    {
      title: 'Consuming promises with <code>async</code>/<code>await</code>',
      id: 'consuming-promises-with-async-await',
      source: '/src/markdowns/11_Asynchronous/async_&_await.html',
      summary: [
        `<code>async</code> functions`,
        `<code>await</code> operator`,
        `The purpose of <code>async</code>/<code>await</code> is to simplify the syntax necessary to consume promise-based APIs`,
        `<code>async</code>/<code>await</code> enables you to write code that uses asynchronous functions but looks like synchronous code`,
        `<code>async</code>/<code>await</code> help you to avoid the need to explicitly configure promise chains, like you used to do with <code>.then()</code> and <code>.catch()</code>`,
        `Just like a promise chain, <code>await</code> forces asynchronous operations to be completed in series. This is necessary if the result of the next operation depends on the result of the last one, but if that's not the case then something like <code>Promise.all</code> will be more performant`,
        `<code>async</code> functions always return a promise. If the return value of an <code>async</code> function is not explicitly a promise, it will be implicitly wrapped in a promise`,
        `You can only use <code>await</code> inside an <code>async</code> function, unless your code is in a JavaScript module`,
        `You can use multiple <code>await</code> in an <code>async</code> function`,
        `Store <code>await</code> promises results in variables`,
        `Error Handling in <code>async</code> Functions: <code>try{...} catch(error){...}</code>`,
        `Rethrowing an error when you have multiple <code>async</code> functions`,
        `Returning values from <code>async</code> functions`,
        `<code>async</code>/<code>await</code> is only syntactic sugar over "Raw Promises"`,
        `Top-Level <code>await</code> (ES2022)`,
      ],
    },
    {
      title: '<code>Promise.prototype</code> Methods',
      id: 'promise-prototype-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'then()',
          id: 'promise-prototype-then()',
          source: '/src/markdowns/11_Asynchronous/Promise.prototype.then.html',
        },
        {
          title: 'catch()',
          id: 'promise-prototype-catch()',
          source: '/src/markdowns/11_Asynchronous/Promise.prototype.catch.html',
        },
        {
          title: 'finally()',
          id: 'promise-prototype-finally()',
          source:
            '/src/markdowns/11_Asynchronous/Promise.prototype.finally.html',
        },
      ],
    },
    {
      title: 'Promise Static Methods',
      id: 'promise-static-methods',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Promise.resolve()',
          id: 'promise-resolve()',
          source: '/src/markdowns/11_Asynchronous/Promise.resolve.html',
        },
        {
          title: 'Promise.reject()',
          id: 'promise-reject()',
          source: '/src/markdowns/11_Asynchronous/Promise.reject.html',
        },
        {
          title: 'Promise.all()',
          id: 'promise-all()',
          source: '/src/markdowns/11_Asynchronous/Promise.all.html',
        },
        {
          title: 'Promise.allSettled()',
          id: 'promise-allsettled()',
          source: '/src/markdowns/11_Asynchronous/Promise.allSettled.html',
        },
        {
          title: 'Promise.any()',
          id: 'promise-any()',
          source: '/src/markdowns/11_Asynchronous/Promise.any.html',
        },
        {
          title: 'Promise.race()',
          id: 'promise-race()',
          source: '/src/markdowns/11_Asynchronous/Promise.race.html',
        },
      ],
    },
    {
      title: 'Timers',
      id: 'timers',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'setTimeout()',
          id: 'timers-settimeout()',
          source: '/src/markdowns/11_Asynchronous/Timers__setTimeout.html',
        },
        {
          title: 'clearTimeout()',
          id: 'timers-cleartimeout()',
          source: '/src/markdowns/11_Asynchronous/Timers__clearTimeout.html',
        },
        {
          title: 'setInterval()',
          id: 'timers-setinterval()',
          source: '/src/markdowns/11_Asynchronous/Timers__setInterval.html',
        },
        {
          title: 'clearInterval()',
          id: 'timers-clearinterval()',
          source: '/src/markdowns/11_Asynchronous/Timers__clearInterval.html',
        },
      ],
    },
  ],
};

const domManipulation = {
  name: 'Web APIs <br> Document Object Model (DOM) <br> - Properties & Methods -',
  sections: [
    {
      title: 'Introduction to Web APIs',
      id: 'introduction-to-web-apis',
      source:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Introduction_to_Web_APIs.html',
      summary: [
        `An API (Application Programming Interface) is a software intermediary (interface) that allows two applications to talk to each other`,
        `In Web development, we have Web APIs that are build into the browser, and we have external Web APIs called Third Party APIs`,
        `In both cases, a Web API is an interface that allows two applications to talk to each other: JavaScript - Browser or JavaScript - Server`,
      ],
    },
    {
      title: 'Introduction to the Document Object Model (DOM)',
      id: 'introduction-to-the-document-object-model',
      source:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Introduction_to_the_DOM.html',
      summary: [
        `The DOM defines a standard for accessing different types of documents (XML, HTML, etc.)`,
        `The DOM is built using multiple APIs that work together`,
        `When it comes to HTML document, HTML DOM API adds support for representing HTML documents to the core DOM`,
        `The DOM is a programming interface for web documents (HTML documents). It represents the HTML document so that programs can change the document structure, style and content`,
        `The DOM connects web pages to scripts or programming languages by representing the structure of a HTML document in memory, as an object-oriented representation`,
        `The DOM model is constructed as a tree of objects. Each branch of the tree ends in a node, and each node contains objects. This means that DOM objects are simply objects (objects are reference values)`,
        `The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts`,
        `Accessing the DOM: <code>document</code> & <code>window</code> object`,
        `DOM Interfaces: interfaces & objects`,
      ],
    },
    {
      title: 'How DOM API is organized behind the scenes',
      id: 'how-dom-api-is-organized-behind-the-scenes',
      source:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/How_the_DOM_API_is_organized_behind_the_scenes.html',
      summary: [
        `The DOM API is made up of the interfaces that define the functionality of each of the elements in HTML`,
        `The majority of the interfaces that comprise the HTML DOM API map almost one-to-one to individual HTML elements, or to a small group of elements with similar functionality`,
      ],
    },
    {
      title: 'DOM Node Types (Node vs Element)',
      id: 'dom-node-types',
      source:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/DOM_Node_Types_(Node_vs_Element).html',
      summary: [
        `Nodes are the objects that make up the DOM, everything in the DOM is a node`,
        `A DOM document consists of a hierarchy of nodes. Each node can have a parent and/or children`,
        `Not just HTML tags are treated as nodes objects, but also text, comments etc. Even whitespace that you have for readability reasons in an HTML document is treated as a node`,
        `DOM Nodes are just JavaScript objects in the end - i.e. reference values. Methods like <code>querySelector()</code> or <code>querySelectorAll()</code> return the object references (addresses)`,
        `Live Node Lists vs Static Node Lists`,
      ],
    },
    {
      title: 'HTML Attributes vs DOM Properties',
      id: 'html-attributes-vs-dom-properties',
      source:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTML_attributes_vs_DOM_properties.html',
      summary: [],
    },
    {
      title: 'DOM Traversing & select DOM elements',
      id: 'dom-traversing-&-select-dom-elements',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Introduction to DOM Traversing',
          id: 'introduction-to-dom-traversing',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Introduction_to_DOM_Traversing.html',
        },
        {
          title: 'document.documentElement',
          id: 'document-documentelement',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.documentElement.html',
        },
        {
          title: 'document.head',
          id: 'document-head',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.head.html',
        },
        {
          title: 'document.body',
          id: 'document-body',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.body.html',
        },
        {
          title: 'document.getElementById()',
          id: 'document-getelementbyid()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.getElementById.html',
        },
        {
          title: 'getElementsByTagName() -> (document/element)',
          id: 'document-getelementsbytagname()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/getElementsByTagName.html',
        },
        {
          title: 'getElementsByClassName() -> (document/element)',
          id: 'getelementsbyclassname()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/getElementsByClassName.html',
        },
        {
          title: 'querySelector() -> (document/element)',
          id: 'queryselector()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/querySelector.html',
        },
        {
          title: 'querySelectorAll() -> (document/element)',
          id: 'queryselectorall()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/querySelectorAll.html',
        },
        {
          title: 'Element.children',
          id: 'element-children',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.children.html',
        },
        {
          title: 'Node.childNodes',
          id: 'node-childnodes',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.childNodes.html',
        },
        {
          title: 'Element.firstElementChild',
          id: 'element-firstelementchild',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.firstElementChild.html',
        },
        {
          title: 'Element.lastElementChild',
          id: 'element-lastelementchild',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.lastElementChild.html',
        },
        {
          title: 'Node.firstChild',
          id: 'node-firstchild',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.firstChild.html',
        },
        {
          title: 'Node.lastChild',
          id: 'node-lastchild',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.lastChild.html',
        },
        {
          title: 'Element.closest()',
          id: 'element-closest()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.closest.html',
        },
        {
          title: 'Node.parentElement',
          id: 'node-parentelement',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.parentElement.html',
        },
        {
          title: 'Node.parentNode',
          id: 'node-parentnode',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.parentNode.html',
        },
        {
          title: 'Element.previousElementSibling',
          id: 'element-previouselementsibling',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.previousElementSibling.html',
        },
        {
          title: 'Element.nextElementSibling',
          id: 'element-nextelementsibling',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.nextElementSibling.html',
        },
        {
          title: 'Node.previousSibling',
          id: 'node-previoussibling',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.previousSibling.html',
        },
        {
          title: 'Node.nextSibling',
          id: 'node-nextsibling',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.nextSibling.html',
        },
      ],
    },
    {
      title: 'Tips & tricks for create, insert and remove elements',
      id: 'tricks-for-create-insert-and-remove-elements',
      source:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Tips_for_create_insert_and_remove_elements.html',
      summary: [
        `If you have a created or selected element, either because you selected it in the DOM with <code>querySelector()</code> or you created it with <code>createElement()</code> and that element is already part of the DOM, so it is already rendered, if you then insert it somewhere else in the DOM, that element is NOT COPIED or anything like that, instead the existing element is DETACHED from the place where it was and moved to the new place. This actually makes a lot of sense since objects are reference values as you learned, and the DOM objects you're working are normal objects in the end, and therefore if we do something with them and we add them somewhere else, we always work with the same object`,
        `If you want a brand new element, you have to create a brand new one with <code>document.createElement()</code>. Just keep in mind that inserting the same element multiple times will move it, because we're working with objects and not with some automatically copied things`,
        `Important (no matter how you insert elements): whenever you insert elements, you MOVE the element to that new place, if you already inserted it before. It's NOT COPIED (you can copy an element via <code>Node.cloneNode(true)</code> though)`,
      ],
    },
    {
      title: 'Create, insert & remove DOM elements',
      id: 'create-insert-&-remove-dom-elements',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Element.innerHTML',
          id: 'element-innerhtml',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.innerHTML.html',
        },
        {
          title: 'Element.insertAdjacentHTML()',
          id: 'element-insertadjacenthtml()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.insertAdjacentHTML.html',
        },
        {
          title: 'document.createElement()',
          id: 'document-createelement()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.createElement.html',
        },
        {
          title: 'Element.append()',
          id: 'element-append()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.append.html',
        },
        {
          title: 'Node.appendChild()',
          id: 'node-appendchild()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.appendChild.html',
        },
        {
          title: 'Element.prepend()',
          id: 'element-prepend()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.prepend.html',
        },
        {
          title: 'Node.insertBefore()',
          id: 'node-insertbefore()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.insertBefore.html',
        },
        {
          title: 'Element.before()',
          id: 'element-before()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.before.html',
        },
        {
          title: 'Element.after()',
          id: 'element-after()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.after.html',
        },
        {
          title: 'Element.insertAdjacentElement()',
          id: 'element-insertadjacentelement()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.insertAdjacentElement.html',
        },
        {
          title: 'Element.replaceWith()',
          id: 'element-replacewith()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.replaceWith.html',
        },
        {
          title: 'Node.replaceChild()',
          id: 'node-replacechild()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.replaceChild.html',
        },
        {
          title: 'Element.remove()',
          id: 'element-remove()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.remove.html',
        },
        {
          title: 'Node.removeChild()',
          id: 'node-removechild()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.removeChild.html',
        },
        {
          title: 'Node.cloneNode()',
          id: 'node-clonenode()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.cloneNode.html',
        },
      ],
    },
    {
      title: 'Text, Styles, Classes & Attributes',
      id: 'text-styles-classes-&-attributes',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'HTMLElement.innerText',
          id: 'htmlelement-innertext',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.innerText.html',
        },
        {
          title: 'Node.textContent',
          id: 'node-textcontent',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.textContent.html',
        },
        {
          title: 'Element.insertAdjacentText()',
          id: 'element-insertadjacenttext()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.insertAdjacentText.html',
        },
        {
          title: 'HTMLElement.style',
          id: 'htmlelement-style',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.style.html',
        },
        {
          title: 'Element.className',
          id: 'element-classname',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.className.html',
        },
        {
          title: 'Element.classList (add, remove, toggle, contains)',
          id: 'element-classlist',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.classList.html',
        },
        {
          title: 'Element.getAttribute()',
          id: 'element-getattribute()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.getAttribute.html',
        },
        {
          title: 'Element.setAttribute()',
          id: 'element-setattribute()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.setAttribute.html',
        },
        {
          title: 'Element.attributes',
          id: 'element-attributes',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.attributes.html',
        },
        {
          title: 'CSSStyleDeclaration.setProperty()',
          id: 'cssstyledeclaration-setproperty()',
          source: '',
        },
        {
          title: 'HTMLDataElement.value',
          id: 'htmldataelement-value',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLDataElement.value.html',
        },
        {
          title: 'HTMLMediaElement.src',
          id: 'htmlmediaelement-src',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLMediaElement.src.html',
        },
        {
          title: 'HTMLImageElement.alt',
          id: 'htmlimageelement-alt',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLImageElement.alt.html',
        },
        {
          title: 'HTMLAnchorElement.href',
          id: 'htmlanchorelement-href',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLAnchorElement.href.html',
        },
        {
          title: 'HTMLElement.hidden',
          id: 'htmlelement-hidden',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.hidden.html',
        },
        {
          title: 'Element.tagName',
          id: 'element-tagname',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.tagName.html',
        },
        {
          title: 'HTMLElement.dataset',
          id: 'htmlelement-dataset',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.dataset.html',
        },
        {
          title: 'HTMLSelectElement.disabled',
          id: 'htmlselectelement-disabled',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLSelectElement.disabled.html',
        },
      ],
    },
    {
      title: 'Other methods & properties',
      id: 'other-methods-&-properties',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'Element.getBoundingClientRect()',
          id: 'element-getboundingclientrect()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.getBoundingClientRect.html',
        },
        {
          title: 'Element.clientHeight',
          id: 'element-clientheight',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.clientHeight.html',
        },
        {
          title: 'Element.clientWidth',
          id: 'element-clientwidth',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.clientWidth.html',
        },
        {
          title: 'HTMLElement.offsetHeight',
          id: 'htmlelement-offsetheight',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.offsetHeight.html',
        },
        {
          title: 'Element.scrollTo()',
          id: 'element-scrollto()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.scrollTo.html',
        },
        {
          title: 'Element.scrollBy()',
          id: 'element-scrollby()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.scrollBy.html',
        },
        {
          title: 'Element.scrollIntoView()',
          id: 'element-scrollintoview()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.scrollIntoView.html',
        },
        {
          title: 'HTMLElement.blur()',
          id: 'htmlelement-blur()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.blur.html',
        },
        {
          title: 'HTMLElement.focus()',
          id: 'htmlelement-focus()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.focus.html',
        },
        {
          title: 'Node.isEqualNode()',
          id: 'node-isequalnode()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.isEqualNode.html',
        },
        {
          title: 'Node.nodeValue',
          id: 'node-nodevalue',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.nodeValue.html',
        },
        {
          title: 'Node.contains()',
          id: 'node-contains()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.contains.html',
        },
        {
          title: 'document.createRange().createContextualFragment()',
          id: 'document-createrange()-createcontextualfragment()',
          source: '',
        },
        {
          title: 'HTMLInputElement.select()',
          id: 'htmlinputelement-select()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLInputElement.select.html',
        },
        {
          title: 'HTMLTemplateElement.content',
          id: 'htmltemplateelement-content',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLTemplateElement.content.html',
        },
        {
          title: 'document.importNode()',
          id: 'document-importnode()',
          source:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.importNode.html',
        },
      ],
    },
    {
      title: 'Changing Multiple Elements',
      id: 'changing-multiple-elements',
      source: '',
      summary: [],
    },
  ],
};

const domEvents = {
  name: 'Web APIs <br> Document Object Model (DOM) <br> - Events -',
  sections: [
    {
      title: 'Introduction to Events',
      id: 'introduction-to-events',
      source:
        '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Introduction_to_events.html',
      summary: [
        `Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them`,
        `In the case of the Web, events are fired inside the browser window, and tend to be attached to a specific item that resides in it`,
        `Web events are NOT part of the core JavaScript language — they are defined as part of the APIs built into the browser`,
        `To react to an event, you attach an event handler to it. Event handler is a block of code that runs when the event fires`,
        `Event listeners vs Event handlers: the listener listens out for the event happening, and the handler is the code that is run in response to it happening`,
        `Supported Event Types`,
      ],
    },
    {
      title: 'Event handling',
      id: 'event-handling',
      source:
        '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Event_handling.html',
      summary: [
        `2 ways NOT to add events: event handler properties & inline event handlers`,
        `The recommended mechanism for register event listeners: <code>addEventListener()</code>`,
        `<code>addEventListener()</code> method allows you to add many events to the same element, without overwriting existing events`,
        `<code>addEventListener()</code> method allows you to add event listeners on any HTML DOM object, such as HTML elements, the HTML document, the window object, or other objects that support events, like the <code>xmlHttpRequest</code> object`,
        `The value of <code>this</code> within the handler function`,
        `Getting data into and out of an event listener`,
      ],
    },
    {
      title: 'The Event Object',
      id: 'the-event-object',
      source:
        '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/The_Event_object.html',
      summary: [
        `Sometimes, inside an event handler function, you'll see a parameter specified with a name such as <code>event</code>, <code>evt</code> or <code>e</code>. This is called the Event object, and it is automatically passed to event handlers to provide extra features and information`,
        `The parameter <code>e</code>/<code>evt</code>/<code>event</code> is an Event object, and it represents the event being fired which caused your function to be executed`,
        `The parameter <code>e</code>/<code>evt</code>/<code>event</code> only exists when an event happens`,
        `Most event objects have a standard set of properties and methods available on the Event object, but some event objects add extra properties that are relevant to that particular type of event`,
        `When an event occurs in HTML, the event belongs to a certain <code>event</code> object. All <code>event</code> objects are based on the Event object`,
        `Submit event & <code>e.preventDefault()</code>`,
        `<code>Event.target</code> vs <code>Event.currentTarget</code>`,
      ],
    },
    {
      title: 'Event Propagation & Delegation',
      id: 'event-propagation-and-delegation',
      source:
        '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Event_propagation_&_delegation.html',
      summary: [
        `Event propagation is a way of defining the element order when an event occurs`,
        `Event propagation: capturing phase, target phase & bubbling phase`,
        `Event bubbling and capture are terms that describe phases in how the browser handles events targeted at nested elements`,
        `In capturing phase the outer most element's event is handled first and then the inner`,
        `In bubbling phase the inner most element's event is handled first and then the outer`,
        `With the <code>addEventListener()</code> method you can specify the propagation type by using the <code>useCapture</code> parameter: <code>false</code> - bubbling phase vs <code>true</code> - capturing phase`,
        `Stop propagation with <code>e.stopPropagation()</code>`,
        `Not all events bubble`,
      ],
    },
    {
      title: 'Types of Events',
      id: 'types-of-events',
      source:
        '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events.html',
      summary: [],
      sectionArticles: [
        {
          title: 'Element: <code>click</code>',
          id: 'event-click',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___click.html',
        },
        {
          title: 'Element: <code>blur</code>',
          id: 'event-blur',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___blur.html',
        },
        {
          title: 'Element: <code>wheel</code>',
          id: 'event-wheel',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___wheel.html',
        },
        {
          title: 'Document & Element: <code>scroll</code>',
          id: 'event-scroll',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___scroll.html',
        },
        {
          title:
            'Mouse Events: <code>mouseout</code>, <code>mouseover</code>, <code>mouseenter</code> & <code>mousemove</code>',
          id: 'event-mouse',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___mouse.html',
        },
        {
          title:
            'Keyboard Events: <code>keyup</code>, <code>keydown</code>, <code>keypress</code>(deprecated)',
          id: 'event-keyboard',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___keyboard.html',
        },
        {
          title: 'HTMLElement: <code>input</code>',
          id: 'event-input',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___input.html',
        },
        {
          title: 'HTMLElement: <code>change</code>',
          id: 'event-change',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___change.html',
        },
        {
          title: 'HTMLFormElement: <code>submit</code>',
          id: 'event-submit',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___submit.html',
        },
        {
          title: 'Window: <code>hashchange</code>',
          id: 'event-hashchange',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___hashchange.html',
        },
        {
          title: 'Window: <code>load</code>',
          id: 'event-load',
          source:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___load.html',
        },
      ],
    },
  ],
};

const otherWebAPIs = {
  name: 'Other Web APIs',
  sections: [
    {
      title: 'The Intersection Observer API',
      id: 'the-intersection-observer-api',
      source:
        '/src/markdowns/14_Others_Web_APIs/Intersection_Observer_API.html',
      summary: [
        `The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element, or with a top-level document's viewport`,
        `The Intersection Observer API lets code register a callback function that is executed whenever an element they wish to monitor enters or exits another element (or the viewport)`,
      ],
    },
    {
      title: 'Navigator',
      id: 'api-navigator',
      source: '/src/markdowns/14_Others_Web_APIs/Navigator.html',
      summary: [
        `The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities`,
        `<code>navigator.language</code>`,
        `<code>navigator.languages</code>`,
        `<code>navigator.geolocation.getCurrentPosition()</code>`,
        `<code>navigator.geolocation.watchPosition()</code>`,
        `<code>navigator.geolocation.clearWatch()</code>`,
      ],
    },
    {
      title: 'Storage',
      id: 'api-storage',
      source: '/src/markdowns/14_Others_Web_APIs/Storage.html',
      summary: [
        `The Storage interface provides access to a particular domain's session or local storage`,
        `The <code>localStorage</code> read-only property of the window interface allows you to access a Storage object`,
        `<code>localStorage.setItem()</code>`,
        `<code>JSON.stringify()</code>`,
        `<code>localStorage.getItem()</code>`,
        `<code>JSON.parse()</code>`,
        `<code>localStorage.removeItem()</code>`,
        `<code>localStorage.clear()</code>`,
      ],
    },
    {
      title: 'Location',
      id: 'api-location',
      source: '/src/markdowns/14_Others_Web_APIs/Location.html',
      summary: [
        `The <code>window.location</code> & <code>document.location</code> read-only properties returns a Location object, which contains information about the URL of the document and provides methods for changing that URL and loading another URL`,
        `<code>window.location.href</code>`,
        `<code>window.location.pathname</code>`,
        `<code>window.location.hash</code>`,
        `<code>window.location.reload()</code>`,
      ],
    },
    {
      title: 'History',
      id: 'api-history',
      source: '/src/markdowns/14_Others_Web_APIs/History.html',
      summary: [
        `The History object allows manipulation of the browser session history`,
        `<code>window.history.pushState()</code>`,
      ],
    },
    {
      title: 'AbortController',
      id: 'api-abortcontroller',
      source: '/src/markdowns/14_Others_Web_APIs/AbortController.html',
      summary: [
        `The <code>AbortController</code> interface represents a controller object that allows you to <i>abort one or more Web requests as and when desired</i>.`,
        `You can create a new <code>AbortController</code> object using the <code>AbortController()</code> constructor.`,
        `Instance properties & methods:
        <br>- the <code>signal</code> property: read-only property which can be used to communicate with/abort a DOM request as desired
        <br>- the <code>abort()</code> method: aborts a DOM request before it has completed. This is able to abort fetch requests, the consumption of any response bodies, or streams
        `,
        `When <code>abort()</code> is called, the <code>fetch()</code> promise rejects with an <code>Error</code> of type <code>DOMException</code>, with name <i><code>AbortError</code></i>.`,
      ],
    },
    {
      title: 'window',
      id: 'api-window',
      source: '',
      summary: [],
      sectionArticles: [
        {
          title: 'window.open()',
          id: 'api-window-open()',
          source: '/src/markdowns/14_Others_Web_APIs/window.open.html',
        },
        {
          title: 'window.pageXOffset vs window.scrollX',
          id: 'api-window-pageXOffset-vs-window-scrollX',
          source: '/src/markdowns/14_Others_Web_APIs/window.scrollX.html',
        },
        {
          title: 'window.pageYOffset vs window.scrollY',
          id: 'api-window-pageYOffset-vs-window-scrollY',
          source: '/src/markdowns/14_Others_Web_APIs/window.scrollY.html',
        },
        {
          title: 'window.scrollTo()',
          id: 'api-window-scrollto()',
          source: '/src/markdowns/14_Others_Web_APIs/window.scrollTo.html',
        },
        {
          title: 'window.innerHeight',
          id: 'api-window-innerheight',
          source: '/src/markdowns/14_Others_Web_APIs/window.innerHeight.html',
        },
        {
          title: 'window.getComputedStyle()',
          id: 'api-window-getcomputedstyle',
          source:
            '/src/markdowns/14_Others_Web_APIs/window.getComputedStyle.html',
        },
      ],
    },
  ],
};

const modulesAndTooling = {
  name: 'Modern JavaScript Development: Modules and Tooling',
  sections: [
    {
      title: 'Introducing to JavaScript Modules',
      id: 'introducing-to-javascript-modules',
      source:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Introducing_to_JavaScript_modules.html',
      summary: [
        `Splitting Code in a Sub-optimal Way`,
        `The Module Pattern with IIFE`,
        `CommonJS & AMD Modules`,
        `Exporting and importing in native ES6 Modules`,
        `Named exports/imports in ES6 Modules`,
        `Default exports/imports in ES6 Modules`,
        `Mixed imports in ES6 Modules`,
        `Imports are a Live Connection to Exports`,
        `When Does Module Code Execute?`,
        `Module Scope & "globalThis" object`,
      ],
    },
    {
      title: 'Introduction to NPM',
      id: 'introduction-to-npm',
      source:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Introduction_to_NPM.html',
      summary: [
        `Project Limitations & Why We Need Tools`,
        `Setting Up a npm Project`,
        `Working with npm Packages`,
        `Using Third Party Packages with npm`,
      ],
    },
    {
      title: 'Working with JavaScript Libraries',
      id: 'working-with-javascript-libraries',
      source: '',
      summary: [
        `What & Why`,
        `Adding Libraries`,
        `Example: Axios Library & Http Requests`,
      ],
    },
    {
      title: 'Bundling With Parcel and NPM Scripts',
      id: 'bundling-with-parcel-and-npm-scripts',
      source:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Bundling_with_Parcel_and_NPM_Scripts.html',
      summary: [],
    },
    {
      title: 'Configuring Babel and Polyfilling',
      id: 'configuring-babel-and-polyfilling',
      source:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Configuring_Babel_and_Polyfilling.html',
      summary: [
        `Compile your modern JavaScript code back to ES5 code with Babel`,
        `What Is "Browser Support" About?`,
        `Determining Browser Support For A JavaScript Feature`,
        `Solution: Feature Detection + Fallback Code`,
        `Solution: Using Polyfills`,
        `Solution: Transpiling Code`,
        `Improvement: Automatically Detect + Add Polyfills`,
      ],
    },
    {
      title: 'Version control with Git',
      id: 'version-control-with-git',
      source:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Version_control_with_Git.html',
      summary: [],
    },
    {
      title: 'Model-View-Controller (MVC) Arhitecture',
      id: 'model-view-controller-(mvc)-arhitecture',
      source:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Model_View_Controller_(MVC)_Arhitecture.html',
      summary: [
        `Why we worry about software arhitecture?`,
        `The perfect architecture (Structure, Maintainability, Expandability)`,
        `Components of any arhitecture`,
        `How the MVC architecture works in JavaScript`,
      ],
    },
    {
      title: 'Refactoring Our Code: The DRY Principle',
      id: 'refactoring-our-code:-the-dry-principle',
      source: '',
      summary: [],
    },
    {
      title: 'Prettier',
      id: 'prettier',
      source:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Prettier.html',
      summary: [],
    },
    {
      title: 'Terminal commands',
      id: 'terminal-commands',
      source:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Terminal_commands.html',
      summary: [],
    },
    {
      title: 'Markdowns',
      id: 'markdowns',
      source:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Markdowns.html',
      summary: [],
    },
  ],
};

export const dataStorage = [
  browserEngineAndRuntime,
  variablesAndValues,
  operators,
  conditionalStatements,
  loops,
  functions,
  arraysAndSets,
  objectsAndMaps,
  oop,
  functionalProgramming,
  standardBuildInObjects,
  asynchronous,
  domManipulation,
  domEvents,
  otherWebAPIs,
  modulesAndTooling,
];

const allSections = dataStorage.map(el => el.sections).flat();
export const allArticles = allSections
  .map(el => {
    let subArticles;
    if (el.sectionArticles?.length > 0) {
      subArticles = el.sectionArticles.map(subElement => {
        return {
          title: subElement.title,
          id: subElement.id,
          source: subElement.source,
          summary: subElement.summary,
        };
      });
    }

    if (subArticles) {
      return [
        {
          title: el.title,
          id: el.id,
          source: el.source,
          summary: el.summary,
        },
        ...subArticles,
      ];
    }

    return {
      title: el.title,
      id: el.id,
      source: el.source,
      summary: el.summary,
    };
  })
  .flat();
