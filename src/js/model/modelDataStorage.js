const browserEngineAndRuntime = {
  title: 'JavaScript in the Browser: Engine & Runtime',
  sections: [
    {
      sectionTitle: 'Javascript Engine (part 1)',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Engine1.html',
      sectionSummary: [
        '<b>JavaScript language vs Computer language</b>: the communication bridge between JavaScript language and  computer language is JavaScript Engine (V8 for Chrome, SpiderMonkey for Firefox, etc.). The computer understand only 1 and 0, but JavaScript Engine understand the code inside JavaScript file and <i>translate that code</i> to a computer language.',
        "<b>Interpreter & Compiler</b>: in programming, there are generally two ways of translating to computer language. An Interpreter translate and read the JavaScript file line by line, on the fly. Initially, that's how JavaScript worked. It was interpreting, using an Interpreter. A Compiler works ahead of time to create a translation of the JavaScript file, and it compiles down to usually a language that can be understood by our computer.",
        "<b>JIT Compilers (Just In Time Compilers) & Optimized code</b>: browsers started mixing Interpreters and Compilers to make the JavaScript Engine faster. So Interpreter allows us to run the code right away, and the Compiler and Profiler optimize some code as the Interpreter is still running. That's where the JIT Compiler name comes from, because compiles code when Interpreter still running.",
        "By learning this, we will learn how to write optimized code, so that we help out the Profiler and the Compiler to make sure that we're able to run the fastest code possible. We want to write code in a way that helps the Compiler make optimizations, we don't want to work against it and make things slow.",
        "<b>Is JavaScript an interpreted language?</b> Things have evolved over time. We don't have just Interpreters, we also use Compilers to optimize code.",
      ],
    },
    {
      sectionTitle: 'Javascript Engine (part 2)',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Engine2.html',
      sectionSummary: [
        "<b>Memory Heap & Call Stack</b>: with Interpreters and Compilers, we learned that the JavaScript Engine does a lot of work for us, but the biggest thing is actually reading our code and executing it. What do you think the two most important things in these steps are? <br>1. We need a place to store and write information, to store our variables, our objects, our data of our apps. So in other words, a place to allocate memory (Memory Heap). <br>2. We need a place to keep track, line by line, of what's executing (Call Stack). <br>JavaScript Engine use a Call Stack and a Memory Heap when is reading and executing the JavaScript file. We need the Memory Heap as a place to <i>store and write information</i>, and the Call Stack as a place to keep track of where your code is in it's execution, so that we can <i>execute the code in order</i>.",
        "<b>Call Stack & Stack Overflow</b>: if you have only functions that don't have inside any nested functions, on every single time that functions will be called, the Call Stack is going to get pushed on and then popped off. But what happens if we have functions with nested functions inside on them and keep calling functions nested inside of each other, over and over and over, so that we keep growing the Call Stack until it gets larger and larger and larger, until we can't do it anymore? Well, that's called Stack Overflow.",
        "<b>Memory Heap & JavaScript is a Garbage Collection Language & Memory Leaks</b>: is there a way to do something like stack overflow with the Memory Heap? JavaScript is a garbage collected language and this means that JavaScript will automatically clean the Memory Heap of data that is unused, so only the data that is still useful to us remains in the Memory Heap. There are 3 common memory leaks, so you need to avoid them in your application:<br>- global variables;<br>- event listeners that you never remove when you don't need them;<br>- <code>setInterval()</code> functions that have in their body referencing to external objects and we don't stop that intervals",
        "<b>JavaScript is a Single Threaded Programming Language (Synchronous Language) and the JavaScript Engine have only a single Call Stack & Memory Heap</b>: A single threaded programming language execute only one line a code at a time (not do multiple things). The biggest way to check that a language is single threaded is that it has only one Call Stack. This single Call Stack allows us to run code one at a time, we're never running functions in parallel.",
        '<b>JavaScript Engine is synchronous</b>, it executes code in order, and must finish executing a line of code before moving onto the next one. For asynchronous operations, we need to use the JavaScript Runtime.',
      ],
    },
    {
      sectionTitle: 'Javascript Runtime',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Runtime.html',
      sectionSummary: [
        '<b>JavaScript Runtime & asynchronous code</b>: the heart of any JavaScript Runtime is always a JavaScript Engine. Without the JavaScript Engine, there is no JavaScript Runtime, and there is no JavaScript at all. However, JavaScript Engine alone is not enough, because being single threaded (synchronous), if you have code that takes a long, long time to execute, your application will be very, very slow. In order to your application work properly, we also need a JavaScript Runtime that gave access to the Web APIs (ex. DOM, Timers, Fetch API etc.) and implicit to asynchronous code.',
        '<b>Browsers comes in with a JavaScript Engine and a JavaScript Runtime</b>. JavaScript has no idea what the World-Wide-Web or Internet is, JavaScript is only a programming language. On the other hand, the web browsers through Web APIs allows JavaScript to use asynchronous code, so JavaScript can interact with things outside of its world. JavaScript Runtime provides asynchronous Web APIs, a way of communicating with the JavaScript Engine.',
        '<b>Web APIs & global <code>window</code> object</b>: the Web APIs are provided to the JavaScript Engine via global <code>window</code> object. These Web APIs (setIntervals, setTimeout, fetch, localStorage, document object, etc.) are not native to JavaScript language itself, these Web APIs are provided by JavaScript Runtime via <code>window</code> object, so they are native to the browser.',
        "<b>These Web APIs are what we call asynchronous</b>. That means you can instruct these APIs to do something in the background and return data once it's done, meanwhile, we can just continue working on our JavaScript Call Stack and execute functions.",
        "<b>Callback Queue vs Job/Microtask Queue & Event Loop</b>: a typical JavaScript Runtime also includes a so called Callback Queue. This is a data structure that contains all the Web APIs callback functions that are finish to run in the background, and now are ready to be executed by the JavaScript Engine. The Callback Queue cannot be ran until the Call Stack is completely empty. The Event Loop is to constantly checking the Call Stack to see if it is empty, so that it can add anything that's in the Callback Queue into the Call Stack. The Event Loop has the extremely important task of doing coordination between the Call Stack and the callbacks in the Callback Queue, so it is basically who decides exactly when each callback is executed.<br>With ES6 and Promises, a new queue was created, called Job/Microtask Queue, so callbacks related to Promises have a special queue for themselves. Job/Microtask Queue has priority over Callback Queue, so Event Loop gives priority to promises over regular callbacks.",
      ],
    },
    {
      sectionTitle: 'Execution Context and the Call Stack',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Execution_Context_and_The_Call_Stack.html',
      sectionSummary: [
        "<b>Execution Context</b>: while reading through HTML, if the browser encounters JavaScript code to run via a <<code>script</code>> tag or an attribute that contains JavaScript code like <code>onClick</code>, it sends it to its JavaScript Engine. The browser's JavaScript Engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context.",
        `<b>Global & function execution context</b>: when you give your JavaScript file to a browser, the JavaScript Engine start to read and execute the code inside your file, line by line, in order. As the JavaScript Engine starts to read your code, it creates something called the Global Execution Context (GEC). Whenever JavaScript Engine sees a function call in you code, it's going to create something called an Function Execution Context (FEC).
        <br>Code in JavaScript is always ran inside a type of execution context. Execution context is simply the environment within which your code is ran. So any time we run code in JavaScript, it's always going to be part of an execution context, it's part of global or inside of some function that we call.`,
        `<b>Global execution context (global <code>window</code> object & <code>this</code> keyword)</b>: whenever the JavaScript Engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC). The GEC is the base/default Execution Context where all JavaScript code that is <i>not inside of a function</i> gets executed. For every JavaScript file, there can only be one GEC.
        <br>GEC is the very first item on the Call Stack, the first thing the JavaScript Engine does is to create the GEC, and it gives you two things: first thing is a global object <code>window</code> and the other thing is that <code>this</code> keyword in JavaScript.
        <br>To the global object (in our case <code>window</code> object), we can assign variables, we can add functions and we can add different things to this global object.`,
        `<b>Function execution context (<code>arguments</code> & <code>this</code> keyword)</b>: whenever a function is called, the JavaScript Engine creates a different type of Execution Context known as a Function Execution Context (FEC) <i>within</i> the Global Execution Context (GEC) to evaluate and execute the code within that function. Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.
        <br>A function context is created by the JavaScript Engine when it sees a function call. Each function call gets its own execution context.
        <br>FEC give us two things: the <code>arguments</code> objects and the <code>this</code> keyword.
        `,
      ],
    },
    {
      sectionTitle: 'Lexical Environment',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Lexical_Environment.html',
      sectionSummary: [
        '<b>Where we write code is important</b>. Lexical environment is simply <i>where you write code</i>. Where we write code determines the available variables. A new lexical environment is created when curly brackets <code>{}</code> are used, even nested brackets <code>{{...}}</code> create a new lexical environment',
      ],
    },
    {
      sectionTitle: 'Variable Environment',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Variable_Environment.html',
      sectionSummary: [
        '<b>Variable Environment & Scope Chain</b>: each execution context (global/function) has its own variable environment. Each function execution context has a link to its outside world or a link to its parent. Each execution context that is created has a link outside of its lexical environment, called the scope chain. The scope chain gives us access to variables in the parent environment.',
        '<b>Global Scope & Local Scope</b>: the global scope is the outermost scope, so variables declared outside a function are in what we call global scope, and they can be access in any other scope that is inside of the functions, we can always access global scope. Now, local scope is any scope that is local to a function, now variables declared in the local scope are accessible within this scope, as well as any scopes surrounding it. Scope just defines the <i>accessibility of variables in the code</i>, it tells us what we can access, what we can not.',
        '<b>Function Scope (<code>var</code>, <code>let</code> & <code>const</code>) & Block Scope (<code>let</code> & <code>const</code>)</b>: Most programming languages are block scoped, meaning every time you see a new <code>{}</code> (curly braces) is a new lexical environment. However, JavaScript is function scoped, meaning it only creates a new local environment if it sees the keyword <code>function</code> on the global scope. To give us access to block scope, in ES6 <code>let</code> and <code>const</code> were added to the language.',
        '<b>Variable Environment & Leakage of Global Variables</b>',
        '<b>Global variables & polluting the global namespace</b> means that we have too much data on our global execution environment.',
        "<b>Global variables & variable collisions</b> is when we have the same variable/s in multiple scripts, everything gets bunched up together, everything is on the global execution context, and if there's any duplicates variables (variables with the same name) overwrite each other.",
        "<b>Variable collisions & IIFE & JavaScript Modules</b>: with modern JavaScript, we have things like JavaScript Modules and module bundlers. But before we had those things, JavaScript developers used what we know now about the language itself to avoid variable collisions and it's called Immediately Invoked Function Expressions (IIFE). The idea behind IIFE is we can place all library code inside of a local scope (function scope), to avoid any variable collisions.",
      ],
    },
    {
      sectionTitle: 'Hoisting',
      sectionSource: '/src/markdowns/01_Browser_Engine_&_Runtime/Hoisting.html',
      sectionSummary: [
        'Compiler appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.',
        'Hoisting is happen on every execution context: global & function.',
      ],
    },
    {
      sectionTitle: 'What is JavaScript?',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/What_is_JavaScript.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Activating Strict Mode',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Activating_Strict_Mode.html',
      sectionSummary: [
        "JavaScript's Strict Mode, introduced in ECMAScript 5, is a way to opt into a <i>restricted variant of JavaScript</i>, thereby implicitly opting-out of Sloppy Mode.",
        'Strict Mode code and non-Strict Mode code can coexist.',
        `Strict Mode makes several changes to normal JavaScript semantics:
        <br>- Eliminates some JavaScript silent errors by changing them to throw errors;
        <br>- Fixes mistakes that make it difficult for JavaScript Engine to perform optimizations;
        <br>- Prohibits some syntax likely to be defined in future versions of ECMAScript.
        `,
        "Strict Mode applies to entire scripts or to individual functions. It doesn't apply to block statements enclosed in <code>{}</code> braces; attempting to apply it to such contexts does nothing.",
      ],
    },
    {
      sectionTitle:
        'Efficient Script Loading: <code>defer</code> & <code>async</code>',
      sectionSource: '',
      sectionSummary: [],
    },
  ],
};

const variablesAndValues = {
  title: 'JavaScript Types and Variables',
  sections: [
    {
      sectionTitle: 'JavaScript Types',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/JavaScript_Types.html',
      sectionSummary: [
        'All programming languages have types. That is the building blocks that allow us to write in that language. We can have numbers, strings, booleans and many more.',
        "<b>Static vs Dynamically Typed languages</b>: JavaScript is a dynamic language with dynamic types. Variables in JavaScript are not directly associated with any particular value type, and <i>any variable can be assigned (and re-assigned) values of all types</i>. With a statically typed language we have to declare the variables explicitly before using them. Dynamically typed languages are not bound to this constraint, they're not bound to a particular type. TypeScript allows us to make JavaScript to behave like a statically typed language.",
        '<b>Strongly vs Weakly Typed languages</b>: JavaScript is also a weakly typed language, which means it allows implicit <i>type conversion</i> when an operation involves mismatched types, instead of throwing type errors.',
        "<b>Primitive vs Reference Types</b>: all types, except objects types (objects, arrays, functions), define immutable values (that is, values which can't be changed). Primitive types store the value itself, but reference types store a pointer, so the address of that place in memory, not the value itself.",
      ],
    },
    {
      sectionTitle: 'Primitives vs References Types',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Primitives_vs_Objects_(Primitive_vs_Reference_Types).html',
      sectionSummary: [
        '<b>Primitive Types (Numbers, Strings, Booleans, null, undefined, Symbol, BigInt)</b>: primitive types store the value itself.',
        '<b>Reference Types (Arrays, Objects, Functions)</b>: a variable that stores a reference object only stores a pointer, so the address of that place in memory, and not the value itself.',
        '<b>Pass by Value vs Pass by Reference</b>: the key difference between primitive and reference values is that when you copy a variable that holds a primitive value, which means you assign it to a new one, then the value is actually copied. When you copy a variable that holds a reference value, you copy the pointer address of that place in memory, not the value itself.',
        'Each object has its own reference location in memory, even is a nested object.',
        '<b>Comparing two objects for equality</b>: two objects, even though they hold the same data, are two different distinct objects stored in different places, so at different addresses in memory. Because that when you compare two objects, you compare the addresses where they stored.',
        'Primitive values are the core building blocks that hold your data, objects (and arrays) are helpful for organizing and working with that data.',
        `<b>Shallow vs Deep Objects Copy</b>
        <br>Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.
        <br>A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.`,
      ],
    },
    {
      sectionTitle: 'Type Coercion',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Type_coercion.html',
      sectionSummary: [
        '<b>Type Coercion vs Type Conversion</b>: Type coercion is the <i>automatic or implicit conversion of values from one data type to another (such as strings to numbers)</i>. Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.',
        `<b>Implicit and Explicit Type Coercion</b>
        <br>Implicit Type Coercion comes with a behavior called string concatenation. String concatenation is because <code>+</code> operator also supports strings, not only numbers. Keep in mind that only arithmetic operator <code>+</code> supports strings though, <code>-</code>, <code>*</code> and <code>/</code> does NOT support strings.
        <br>Since JavaScript is a weakly-typed language, values can also be converted between different types automatically, and it is called implicit type coercion. It usually happens when you apply operators to values of different types:: <code>"5" + 9; //59</code>. Implicit type coercion can also be triggered by the surrounding context, like with <code>if (value) {…}</code>, where <code>value</code> is coerced to boolean.
        <br>When a developer expresses the intention to convert between types by writing the appropriate code, like <code>Number(value)</code>, it's called explicit type coercion (or type casting): <code>Number("5") + 9; //9</code>
        <br> One operator that doesn't trigger implicit type coercion is Strict Equality Operator <code>===</code>
        `,
        `<b>Type Coercion for Primitive values</b>
        <br>The first rule to know is there are only 3 types of conversion in JavaScript:
        <br>- to string;
        <br>- to number;
        <br>- to boolean;
        <br>Secondly, conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those 3 ways.
        <br>String conversion: to <i>explicitly</i> convert values to a string apply the <code>String()</code> function. <i>Implicit</i> coercion is triggered by the binary <code>+</code> operator, when any operand is a string.
        <br>Number conversion: for an <i>explicit</i> conversion just apply the <code>Number()</code> function. <i>Implicit</i> conversion is tricky, because it's triggered in more cases (for more details read the entire article).
        <br>Boolean conversion: to <i>explicitly</i> convert a value to a boolean apply the <code>Boolean()</code> function. <i>Implicit</i> conversion happens in logical context, or is triggered by logical operators ( <code>||</code> <code>&&</code> <code>!</code>).
        `,
        '<b>Type Coercion for Objects</b>: when it comes to objects and engine encounters expression like <code>[1] + [2,3]</code>, first it needs to convert an object to a primitive value, which is then converted to the final type. And remember "Type Coercion for Primitive Values" that there are still only three types of conversion: string, numeric and boolean.',
        'Truthy & Falsy Values',
        'Whatever you get from a user, from a HTML input in your JavaScript, code will always be a string (text).',
      ],
    },
    {
      sectionTitle: 'Introduction to Variables',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Introduction_to_Variables.html',
      sectionSummary: [
        'A variable is a <b>container for a value</b>.',
        'One special thing about variables is that they can contain just about anything — not just strings and numbers. Variables can also contain complex data and even entire functions.',
        "<b>Variables aren't the values themselves; they are containers for values</b>.",
        "<b>Declaring a variable</b>: to use a variable, you've first got to create it — more accurately, we call this declaring the variable. To do this, we type the keyword <code>let</code>, <code>const</code> or <code>var</code> followed by the name you want to call your variable.",
        "<b>Initializing a variable</b>: once you've declared a variable, you can initialize it with a value.",
        '<b>Updating a variable</b>: once a variable has been initialized with a value, you can change (or update) that value by giving it a different value.',
        '<b>Variable naming rules</b>: you can call a variable pretty much anything you like, but there are limitations. Generally, you should stick to just using <i>Latin characters</i> (0-9, a-z, A-Z) and the <i>underscore character</i>. A safe convention to stick to is so-called <i>"lower camel case"</i>.',
        '<b>Variables are case sensitive</b> — so <code>myage</code> is a different variable from <code>myAge</code>.',
      ],
    },
    {
      sectionTitle: 'var',
      sectionSource: '/src/markdowns/02_JavaScript_Types_&_Variables/var.html',
      sectionSummary: [
        'The <code>var</code> statement declares a <i>function-scoped</i> or <i>globally-scoped</i> variable, optionally initializing it to a value.',
        `<b><code>var</code> & hoisting</b>: <code>var</code> declarations, wherever they occur, are processed before any code is executed because <code>var</code> declarations are hoisted. Variables declared using <code>var</code> are created before any code is executed in a process known as hoisting. Their initial value is <code>undefined</code>. <b>This behavior called hoisting means that the variable declaration is moved to the top of the <i>function</i> or <i>global code</i></b>.
        <br>Because <code>var</code> declarations are processed before any code is executed, declaring a variable with <code>var</code> anywhere in the code is equivalent to declaring it at the top. This also means that <i>a <code>var</code> variable can appear to be used before it's declared</i>.
        `,
        "<b>Only a variable's declaration is hoisted, not its initialization</b>. The initialization happens only when the assignment statement is reached. Until then the variable remains <code>undefined</code> (but declared).",
        'In the global context, a variable declared using <code>var</code> is added as a non-configurable <b>property of the global <code>window</code> object</b>.',
        '<code>var</code> is only function scoped, NOT block scoped.',
        '<code>var</code> can be redeclared without trigger an error.',
      ],
    },
    {
      sectionTitle: 'let',
      sectionSource: '/src/markdowns/02_JavaScript_Types_&_Variables/let.html',
      sectionSummary: [
        'The <code>let</code> statement declares a <b>block-scoped local variable</b>, optionally initializing it to a value.',
        "<code>let</code> can't be used before it's declared.",
        '<code>let</code> is function scoped & block scoped.',
        'Just like <code>const</code>, the <code>let</code> does not create properties of the <code>window</code> object when declared globally.',
        "<code>let</code> can't be redeclared like <code>var</code>.",
      ],
    },
    {
      sectionTitle: 'const',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/const.html',
      sectionSummary: [
        'The <code>const</code> statement declares a <b>block-scoped local variable</b>.',
        '<code>const</code> is function scoped & block scoped.',
        "<code>const</code> <i>must be initialized when it's declared</i>.",
        "<code>const</code> can't be used before it's declared.",
        "The value of a <code>const</code> <i>can't be changed through reassignment</i> and <i>can't be redeclared</i> like <code>var</code> or <code>let</code>. However, if a constant is an object or array its properties or items can be updated or removed.",
      ],
    },
    {
      sectionTitle: 'Differences between var, let & const',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Differences_between_var_let_&_const.html',
      sectionSummary: [
        `<b>Declaration, initialization & hoisting differences</b>
        <br>If <code>var</code> and <code>let</code> are not initialized at declaration, initial value is <code>undefined</code>. An initializer for a <code>const</code> variable is required; you must specify its value in the same statement in which it's declared.
        <br>Variables declared with <code>let</code> and <code>const</code> are hoisted but, unlike <code>var</code>, are not initialized with a default value.
        `,
        `<b>Scope differences</b>
        <br><code>let</code> and <code>const</code> allows you to declare variables that are limited to the scope of a block statement or expression on which it is used, unlike the <code>var</code> keyword, which declares a variable globally or locally to an entire function, regardless of block scope.
        `,
        `<b>Duplicate variable declarations (redeclarations) differences</b>
        <br>Duplicate variable declarations using <code>var</code> will not trigger an error, even in "strict mode", and the variable will not lose its value, unless another assignment is performed.
        `,
        `<b>Non-configurable property of the global <code>window</code> object</b>
        <br>In the global context, a variable declared using <code>var</code> is added as a non-configurable property of the global object but <code>let</code> and <code>const</code> does not create properties of the <code>window</code> object when declared globally.
        `,
        "You can following the principle about when to use <code>let</code> and when to use <code>const</code>: use <code>const</code> <i>when you can</i>, and use <code>let</code> <i>when you have to</i>. This means that <b>if you can initialize a variable when you declare it and don't need to reassign it later, make it a constant</b>.",
      ],
    },
  ],
};

const operators = {
  title: 'Operators',
  sections: [
    {
      sectionTitle: 'Introduction to JavaScript Operators',
      sectionSource:
        '/src/markdowns/03_Operators/Introduction_to_Javascript_Operators.html',
      sectionSummary: [
        'An operator allows us to <i>transform values</i> or <i>combine multiple values</i> and do all kinds of work with values. ',
        '<b>Operator precedence</b> determines <i>how operators are parsed concerning each other</i>. Operators with <i>higher precedence</i> become the operands of operators with <i>lower precedence</i>.',
        '<b>Precedence & Associativity</b>: operators are first grouped by <i>precedence</i>, and then, for adjacent operators that have the same precedence, by <i>associativity</i>. When operators have <i>different precedence levels</i>, the operator with the highest precedence goes first and associativity does not matter. Associativity comes into play when there are multiple operators of the same precedence.',
        'Note on <b>grouping vs short-circuiting</b>: grouping <code>( … )</code> is listed as having the highest precedence. However, that does not always mean the expression within the grouping symbols <code>( … )</code> is evaluated first, especially when it comes to short-circuiting. Short-circuiting is jargon for <i>conditional evaluation</i>. For example, in the expression <code>a && (b + c)</code>, if <code>a</code> is falsy, then the sub-expression <code>(b + c)</code> will not even get evaluated, even if it is grouped and therefore has higher precedence than <code>&&</code>.',
        '<b>Operators & Type Coercion</b>: some operators like <code>+</code> trigger type coercion, because <code>+</code> operator also supports strings, not only numbers.',
      ],
    },
    {
      sectionTitle: 'Expressions and operators',
      sectionSource:
        '/src/markdowns/03_Operators/Expressions_and_operators.html',
      sectionSummary: [
        `Some of JavaScript expressions & operators:
        <br>- Primary expressions
        <br>- Left-hand-side expressions
        <br>- Increment and decrement
        <br>- Unary operators
        <br>- Arithmetic operators
        <br>- Relational operators
        <br>- Equality operators
        <br>- Binary logical operators
        <br>- Assignment operators
      `,
      ],
    },
    {
      sectionTitle: 'Assignment operators',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Assignment <code>=</code>',
          articleSource: '/src/markdowns/03_Operators/Assignment_operator.html',
          articleSummary: [
            'Assignment operator is used to <b>assign a value to a variable</b>.',
            'Chaining the assignment operator is possible in order to <b>assign a single value to multiple variables</b>.',
          ],
        },
        {
          articleTitle: 'Addition assignment <code>+=</code>',
          articleSource:
            '/src/markdowns/03_Operators/Addition_assignment_operator.html',
          articleSummary: [
            'The addition assignment operator <b>adds the value of the right operand</b> to a variable and <b>assigns the result</b> to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.',
          ],
        },
        {
          articleTitle: 'Subtraction assignment <code>-=</code>',
          articleSource:
            '/src/markdowns/03_Operators/Subtraction_assignment_operator.html',
          articleSummary: [
            'The subtraction assignment operator <b>subtracts the value of the right operand</b> from a variable and <b>assigns the result</b> to the variable.',
            'Concatenation is not possible with <code>-=</code> operator, only <code>+</code> and <code>+=</code> operators trigger type coercion.',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Increment and decrement',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Increment <code>A++</code> or <code>++A</code>',
          articleSource: '/src/markdowns/03_Operators/Increment_operator.html',
          articleSummary: [
            'The increment operator <i>increments (adds one to)</i> its operand and <i>returns the value</i> before or after the increment, depending on where the operator is placed.',
            'If used <b>postfix</b>, with operator after operand (for example, <code>x++</code>), the increment operator increments and <b>returns the value <i>before</i> incrementing</b>.',
            'If used <b>prefix</b>, with operator before operand (for example, <code>++x</code>), the increment operator increments and <b>returns the value <i>after</i> incrementing</b>.',
          ],
        },
        {
          articleTitle: 'Decrement <code>A--</code> or <code>--A</code>',
          articleSource: '/src/markdowns/03_Operators/Decrement_operator.html',
          articleSummary: [
            'The decrement operator <i>decrements (subtracts one from)</i> its operand and i>returns the value</i> before or after the decrement, depending on where the operator is placed.',
            'If used <b>postfix</b>, with operator after operand (for example, <code>x--</code>), the decrement operator decrements and <b>returns the value <i>before</i> decrementing</b>.',
            'If used <b>prefix</b>, with operator before operand (for example, <code>--x</code>), the decrement operator decrements and <b>returns the value <i>after</i> decrementing</b>.',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Unary operators',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'typeof',
          articleSource: '/src/markdowns/03_Operators/typeof_operator.html',
          articleSummary: [
            "The <code>typeof</code> operator <i>returns a string indicating the type</i> of the operand's value",
          ],
        },
        {
          articleTitle: 'Unary plus <code>+</code>',
          articleSource: '/src/markdowns/03_Operators/Unary_plus_operator.html',
          articleSummary: [
            "The unary plus operator <code>+</code> <i>precedes its operand and evaluates to its operand but <u>attempts to convert it into a number</u>, if it isn't already</i>. If it cannot parse a particular value, it will evaluate to <code>NaN</code>.",
            'Although unary negation <code>-</code> also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number.',
          ],
        },
        {
          articleTitle: 'Unary negation <code>-</code>',
          articleSource:
            '/src/markdowns/03_Operators/Unary_negation_operator.html',
          articleSummary: [
            'The unary negation operator <code>-</code> <i>precedes its operand and negates it</i>. It <i>can convert a non-number into a number</i>.',
          ],
        },
        {
          articleTitle: 'Logical NOT <code>!</code>',
          articleSource:
            '/src/markdowns/03_Operators/Logical_NOT_operator.html',
          articleSummary: [
            'The logical NOT <code>!</code> operator <i>takes truth to falsity and vice versa</i>.',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Arithmetic operators',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Addition <code>+</code>',
          articleSource: '/src/markdowns/03_Operators/Addition_operator.html',
          articleSummary: [
            'The addition operator <code>+</code> produces the <i>sum of numeric operands</i> or <i>string concatenation</i>.',
          ],
        },
        {
          articleTitle: 'Subtraction <code>-</code>',
          articleSource:
            '/src/markdowns/03_Operators/Subtraction_operator.html',
          articleSummary: [
            'The subtraction operator <code>-</code> subtracts the two operands, producing their difference.',
            '<i>Concatenation is not possible with <code>-</code> operator</i>, only <code>+</code> and <code>+=</code> operators trigger type coercion.',
          ],
        },
        {
          articleTitle: 'Division <code>/</code>',
          articleSource: '',
        },
        {
          articleTitle: 'Multiplication <code>*</code>',
          articleSource: '',
        },
        {
          articleTitle: 'Remainder <code>%</code>',
          articleSource: '/src/markdowns/03_Operators/Remainder_operator.html',
          articleSummary: [
            'The remainder operator <code>%</code> <i>returns the remainder left over when one operand is divided by a second operand</i>.',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Equality operators',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Equality <code>==</code>',
          articleSource: '/src/markdowns/03_Operators/Equality_operator.html',
          articleSummary: [
            'The equality operator <code>==</code> <i>checks whether its two operands are equal, returning a Boolean result</i>.',
            'Unlike the strict equality <code>===</code> operator, it attempts to <i><u>convert</u> and <u>compare</u> operands that are of different types</i>.',
            'Strict equality <code>===</code> operator does not attempt type conversion. Instead, the <i>strict equality operator always considers operands of different types to be different</i>.',
          ],
        },
        {
          articleTitle: 'Inequality <code>!=</code>',
          articleSource: '/src/markdowns/03_Operators/Inequality_operator.html',
          articleSummary: [
            'The inequality operator <code>!=</code> <i>checks whether its two operands are not equal, returning a Boolean result</i>.',
            'Unlike the strict inequality <code>!==</code> operator, it attempts to <i><u>convert</u> and <u>compare</u> operands that are of different types</i>.',
          ],
        },
        {
          articleTitle: 'Identity <code>===</code>',
          articleSource: '/src/markdowns/03_Operators/Identity_operator.html',
          articleSummary: [
            'The strict equality operator <code>===</code> <i>checks whether its two operands are equal, returning a Boolean result</i>.',
            'Strict equality <code>===</code> operator does not attempt type conversion. Instead, the <i>strict equality operator always considers operands of different types to be different</i>.',
          ],
        },
        {
          articleTitle: 'Nonidentity <code>!==</code>',
          articleSource:
            '/src/markdowns/03_Operators/Nonidentity_operator.html',
          articleSummary: [
            'The strict inequality operator <code>!==</code> <i>checks whether its two operands are not equal, returning a Boolean result</i>.',
            'The strict inequality operator <i>always considers operands of different types to be different</i>.',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Relational operators',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Less than <code><</code>',
          articleSource: '/src/markdowns/03_Operators/Less_than_operator.html',
          articleSummary: [
            'The less than <code><</code> operator returns <code>true</code> if the left operand is less than the right operand, and <code>false</code> otherwise.',
            '<i>Comparisons always coerce their operands to primitives</i>. This means the same object may end up having different values within one comparison expression.',
          ],
        },
        {
          articleTitle: 'Greater than <code>></code>',
          articleSource: '/src/markdowns/03_Operators/Less_than_operator.html',
          articleSummary: [
            'The greater than <code>></code> operator returns <code>true</code> if the left operand is greater than the right operand, and <code>false</code> otherwise.',
            '<i>Comparisons always coerce their operands to primitives</i>. This means the same object may end up having different values within one comparison expression.',
          ],
        },
        {
          articleTitle: 'Less than or equal <code><=</code>',
          articleSource: '/src/markdowns/03_Operators/Less_than_operator.html',
          articleSummary: [
            'The less than or equal <code><=</code> operator returns <code>true</code> if the left operand is less than or equal to the right operand, and <code>false</code> otherwise.',
            '<i>Comparisons always coerce their operands to primitives</i>. This means the same object may end up having different values within one comparison expression.',
          ],
        },
        {
          articleTitle: 'Greater than or equal <code>>=</code>',
          articleSource: '/src/markdowns/03_Operators/Less_than_operator.html',
          articleSummary: [
            'The greater than or equal <code>>=</code> operator returns <code>true</code> if the left operand is greater than or equal to the right operand, and <code>false</code> otherwise.',
            '<i>Comparisons always coerce their operands to primitives</i>. This means the same object may end up having different values within one comparison expression.',
          ],
        },
        {
          articleTitle: 'instanceof',
          articleSource: '/src/markdowns/03_Operators/instanceof_operator.html',
          articleSummary: [
            'The <code>instanceof</code> operator <i>tests to see if the <code>prototype</code> property of a constructor appears anywhere in the prototype chain of an object</i>. The return value is a boolean value.',
          ],
        },
        {
          articleTitle: 'in',
          articleSource: '/src/markdowns/03_Operators/in_operator.html',
          articleSummary: [
            'The <code>in</code> operator returns <code>true</code> if the <u>specified property</u> is in the <i>specified object</i> or <i>its prototype chain</i>.',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Binary logical operators',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Logical AND <code>&&</code>',
          articleSource:
            '/src/markdowns/03_Operators/Logical_AND_operator.html',
          articleSummary: [
            'The logical AND <code>&&</code> operator for a set of boolean operands will be <code>true</code> <i>only if <u>all</u> the operands are</i> <code>true</code>. Otherwise it will be <code>false</code>.',
            'More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.',
            'Logical AND <code>&&</code> evaluates operands from left to right.',
            `<b>Operator precedence</b>
            <br>The AND operator has a <i>higher precedence than the OR operator</i>, meaning the <code>&&</code> operator is <i>executed before the <code>||</code> operator</i>.`,
            `<b>Short-circuit evaluation</b>
            <br>The logical <code>&&</code> expression is a <u>short-circuit operator</u>. As <i>each operand is converted to a boolean</i>, if the result of one conversion is found to be <code>false</code>, the <code>&&</code> operator stops and <i>returns the original value of that falsy operand</i>; it does not evaluate any of the remaining operands.`,
          ],
        },
        {
          articleTitle: 'Logical OR <code>||</code>',
          articleSource: '/src/markdowns/03_Operators/Logical_OR_operator.html',
          articleSummary: [
            'The logical OR <code>||</code> operator (logical disjunction) for a set of operands is <code>true</code> <i>only if <u>one or more</u> of its operands is</i> <code>true</code>.',
            `<b>Operator precedence</b>
            <br>The AND operator has a <i>higher precedence than the OR operator</i>, meaning the <code>&&</code> operator is <i>executed before the <code>||</code> operator</i>.`,
            `<b>Short-circuit evaluation</b>
            <br>The logical <code>||</code> expression is a <u>short-circuit operator</u>. As <i>each operand is converted to a boolean</i>, if the result of one conversion is found to be <code>true</code>, the <code>||</code> operator stops and <i>returns the original value of that truthy operand</i>; it does not evaluate any of the remaining operands.`,
          ],
        },
        {
          articleTitle: 'Nullish coalescing <code>??</code>',
          articleSource:
            '/src/markdowns/03_Operators/Nullish_coalescing_operator.html',
          articleSummary: [
            'The nullish coalescing <code>??</code> operator is a logical operator that <i>returns its right-hand side operand when its left-hand side operand is <code>null</code> or <code>undefined</code>, and otherwise returns its left-hand side operand</i>.',
          ],
        },
        {
          articleTitle:
            'Short Circuiting with <code>&&</code> and <code>||</code>',
          articleSource: '/src/markdowns/03_Operators/Short_Circuiting.html',
          articleSummary: [
            'The two Short-Circuit operators are represented with the symbol <code>&&</code> and <code>||</code>. <i>They are basically used to <u>combine expressions</u></i>.',
            'Although short-circuit operators are basically used to combine expressions, <i>you can use them to <u>execute statements conditionally</u></i>.',
            `<b>Using the <code>&&</code> operator</b>
            <br><code>true && statement</code> (if the first condition is <code>true</code>, the <i>statement is executed</i>)
            <br><code>false && statement</code> (if the first condition is <code>false</code>, the <i>statement is NOT executed</i>)`,
            `<b>Using the <code>||</code> operator</b>
            <br><code>true || statement</code> (if the first condition is <code>true</code>, the <i>statement is NOT executed</i>)
            <br><code>false || statement</code> (if the first condition is <code>false</code>, the <i>statement is executed</i>)`,
            'Short-circuit operators can also be used as a Ternary or Conditional operator.',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Conditional (ternary) operator',
      sectionSource:
        '/src/markdowns/03_Operators/Conditional_(ternary)_operator.html',
      sectionSummary: [
        'The conditional (ternary) operator is the <i>only JavaScript operator that takes three operands</i>: a condition followed by a question mark <code>?</code>, then an expression to execute if the condition is truthy followed by a colon <code>:</code>, and finally the expression to execute if the condition is falsy.',
        'This operator is frequently used as an alternative to an <code>if...else</code> statement.',
        'The Conditional (Ternary) operator is mostly used to <i>assigns a value to a variable based on some condition</i>.',
        'The ternary operator is right-associative, which means it can be "chained".',
      ],
    },
    {
      sectionTitle: 'Optional Chaining operator <code>?.</code>',
      sectionSource:
        '/src/markdowns/03_Operators/Optional_Chaining_operator.html',
      sectionSummary: [
        "The optional chaining <code>?.</code> operator <i>accesses an object's property or calls a function</i>. If the object is <code>undefined</code> or <code>null</code>, <i>it returns <code>undefined</code> instead of throwing an error</i>.",
        `<b>Optional chaining with objects & function calls</b>
        <br>The <code>?.</code> operator is like the <code>.</code> chaining operator, except that <i>instead of causing an error if a reference is nullish (<code>null</code> or <code>undefined</code>), the expression short-circuits with a return value of <code>undefined</code>. When used with function calls, it returns <code>undefined</code> if the given function does not exist</i>.`,
        `<b>Optional chaining with expressions</b>
        <br>You can also use the optional chaining operator with bracket notation, which allows passing an expression as the property name: <code>const name = obj?.['property-name']</code>.`,
        'With nested structures, it is possible to use <code>?.</code> operator multiple times.',
        'The <code>?.</code> operator may be used after optional chaining in order to build a default value when none was found.',
      ],
    },
  ],
};

const conditionalStatements = {
  title: 'Conditional statements',
  sections: [
    {
      sectionTitle: 'Statements vs Expressions',
      sectionSource:
        '/src/markdowns/04_Conditional_statements/Statements_vs_Expressions.html',
      sectionSummary: [
        '<i>Any unit of code that can be evaluated to a value is an expression</i>. Since <i>expressions produce values</i>, they can appear anywhere in a program where JavaScript expects a value, such as the arguments of a function invocation.',
        `JavaScript has the following <b>expression categories</b>:
        <br>- <i>arithmetic</i> expressions (expressions that evaluate to a numeric value)
        <br>- <i>string</i> expressions (expressions that evaluate to a string)
        <br>- <i>logical</i> expressions (expressions that evaluate to the Boolean value <code>true</code> or <code>false</code>)
        <br>- <i>primary</i> expressions (refer to stand alone expressions such as literal values, certain keywords and variable values)
        <br>- <i>assignment</i> expressions (when expressions use the <code>=</code> operator to assign a value to a variable, it is called an assignment expression)
        <br>- <i>left-hand-side</i> expressions (expressions that can appear on the left side of an assignment expression)
        <br>- <i>expressions with side effects</i> (as we just saw with assignment expressions, expressions with side effects are those that result in a change or a side effect such as setting or modifying the value of a variable through the assignment operator <code>=</code>, function call, incrementing or decrementing the value of a variable)
        `,
        '<i>A statement is an instruction to perform a specific action</i>: creating variables, functions, loops etc.',
        `Statements in JavaScript can be classified into the following <b>categories</b>:
        <br>- <i>declaration</i> statements (such type of statements create variables and functions by using the <code>var</code>, <code>let</code> or <code>const</code> and function statements respectively)
        <br>- <i>expression</i> statements (wherever JavaScript expects a statement, you can also write an expression. Such statements are referred to as expression statements. But the reverse does not hold. You cannot use a statement in the place of an expression)
        <br>- <i>conditional</i> statements (conditional statements execute statements based on the value of an expression. Examples of conditional statements includes the <code>if..else</code> and <code>switch</code> statements)
        <br>- <i>loops</i> and <i>jumps</i> (Looping statements includes the following statements: <code>while</code>, <code>do/while</code>, <code>for</code> and <code>for...in</code>. Jump statements are used to make the JavaScript interpreter jump to a specific location within the program. Examples of jump statements includes <code>break</code>, <code>continue</code>, <code>return</code> and <code>throw</code>)
        <br>- <i>function declarations</i>
        `,
      ],
    },
    {
      sectionTitle: 'Truthy & Falsy Values',
      sectionSource:
        '/src/markdowns/04_Conditional_statements/Truthy_&_Falsy_Values.html',
      sectionSummary: [
        `<b>Boolean context & Type coercion</b>
        <br>In JavaScript, a truthy value is a value that is considered <code>true</code> when encountered in a <i>Boolean context</i>. JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.`,
        '<i>JavaScript uses type coercion in Boolean contexts</i>.',
        `All values are truthy unless they are defined as falsy. That is, <i>all values are truthy except</i>:
        <br>- <code>false</code>
        <br>- <code>0</code>, <code>-0</code>, <code>0n</code>
        <br>- empty string <code>""</code>
        <br>- <code>null</code>
        <br>- <code>undefined</code>
        <br>- <code>NaN</code>
        `,
      ],
    },
    {
      sectionTitle:
        '<code>if{...} else{...}</code>, <code>else if</code> statements',
      sectionSource:
        '/src/markdowns/04_Conditional_statements/if__else__if_else_statements.html',
      sectionSummary: [
        "When you're writing code, <i>you don't always want to execute exactly the same code top to bottom</i>. Sometimes you have some condition that should be met for some code to be executed, and execute some other code if the condition is not met.",
        '<i>Conditional statements</i> are used to perform <i>different actions</i> based on <i>different conditions</i>.',
        `In JavaScript we have the following conditional statements:
        <br>- <code>if</code>
        <br>- <code>else</code>
        <br>- <code>else if</code>
        <br>- <code>switch</code>
        `,
        'The <code>if</code> statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional <code>else</code> clause will be executed.',
        'Multiple <code>if...else</code> statements can be nested to create an <code>else if</code> clause.',
      ],
    },
    {
      sectionTitle: 'The <code>switch</code> statement',
      sectionSource:
        '/src/markdowns/04_Conditional_statements/The_Switch_Statement.html',
      sectionSummary: [
        'The <code>switch</code> statement is used to perform <i>different actions</i> based on <i>different conditions</i>. Use the <code>switch</code> statement to <i>select one of many code blocks to be executed.</i>',
        `This is how it works:
        <br>- The <code>switch</code> expression is <i>evaluated once</i>
        <br>- The value of the expression is <i>compared</i> with the values of each case
        <br>- <i>If there is a match</i>, the associated block of code is executed
        <br>- <i>If there is no match</i>, the default code block is executed`,
        `<b>The <code>switch</code> statement & <code>break</code> statement</b>
        <br><i>When JavaScript reaches a <code>break</code> keyword, it breaks out of the <code>switch</code> block</i>. This will stop the execution inside the <code>switch</code> block.`,
        `<b>The <code>switch</code> statement & <code>default</code> statement</b>
        <br>The <code>default</code> keyword <i>specifies the code to run if there is <u>no case match</u></i>.`,
        `<b>Switching details</b>
        <br>-If <i>multiple cases matches a expression value</i>, the first case is selected
        <br>-If <i>no matching cases are found</i>, the program continues to the <code>default</code> label
        <br>-If <i>no <code>default</code> label is found</i>, the program continues to the statement(s) <u>after</u> the <code>switch</code>.`,
        '<code>switch</code> cases use strict comparison <code>===</code>.',
        'The <code>switch</code> statement is an alternative to <code>if{...} else{...}</code> chains.',
      ],
    },
  ],
};

const loops = {
  title: 'Loops & Iteration',
  sections: [
    {
      sectionTitle: 'Introduction to Loops & Iteration',
      sectionSource:
        '/src/markdowns/05_Loops_&_Iteration/Introduction_to_Loops_and_Iteration.html',
      sectionSummary: [
        ' Loops can <i>execute a block of code a number of times</i>. Loops are handy, if you want to <i>run the same code over and over again, each time with a different value</i>.',
        'There are <i>many different kinds of loops</i>, but they all essentially do the same thing: they <i>repeat</i> an action some number of times.',
        'The various loop mechanisms offer <i>different ways to determine the start and end points of the loop</i>.',
        `JavaScript supports <b>different kinds of loops</b>:
        <br>- <b><code>for</code></b> loops through a block of code a number of times (repeats until a specified condition evaluates to <code>false</code>)
        <br>- <b><code>for...of</code></b> loops through the values of an <u>iterable</u> object (creates a loop iterating over iterable objects:  <code>Array</code>, <code>Map</code>, <code>Set</code>, <code>arguments</code> object and so on)
        <br>- <b><code>for...in</code></b> loops through the <u>properties</u> of an object (iterates a specified variable over all the enumerable properties of an object)
        <br>- <b><code>while</code></b> loops through a block of code <u>while a specified condition</u> is <code>true</code> (executes its statements as long as a specified condition evaluates to <code>true</code>)
        <br>- <b><code>break</code></b> breaks out of a loop
        <br>- <b><code>continue</code></b> skips a value in a loop (restart a <code>while</code>, <code>do-while</code>, <code>for</code> or <code>label</code> statement)
        `,
      ],
    },
    {
      sectionTitle: '<code>for</code> statement',
      sectionSource: '/src/markdowns/05_Loops_&_Iteration/for_statement.html',
      sectionSummary: [
        'A <code>for</code> statement <i><u>repeats until</u> a specified condition evaluates to <code>false</code></i>.',
        'The <code>for</code> statement creates a loop that consists of <i>three <u>optional</u> expressions</i>, enclosed in parentheses and separated by semicolons <code>;</code>, followed by a statement (usually a block statement) to be executed in the loop.',
        `<b>Nested loops</b>
        <br>A nested loop has <i>one loop inside of another</i>. When a loop is nested inside another loop, the inner loop runs many times inside the outer loop. <i>The inner loop must finish all of its iterations before the outer loop can continue to its next iteration</i>.
        `,
        'Avoid infinite loops!',
        'Do NOT initialize a function inside of a loop.',
      ],
    },
    {
      sectionTitle: '<code>for...of</code> statement',
      sectionSource:
        '/src/markdowns/05_Loops_&_Iteration/for...of_statement.html',
      sectionSummary: [
        'The <code>for...of</code> statement <i>loops through the <u>values</u> of an <u>iterable object</u></i>, including: built-in <code>String</code>, <code>Array</code>, array-like objects (e.g., <code>arguments</code> or <code>NodeList</code>), <code>TypedArray</code>, <code>Map</code>, <code>Set</code>, and user-defined iterables.',
        'A <code>for...of</code> loop operates on the values sourced from an iterable one by one in <i>sequential order. Each iteration creates a new variable</i>. Reassigning the variable inside the loop body does not affect the original value in the iterable.',
        'You can use destructuring in <code>for...of</code> statement.',
        `<b>Closing or skip iterators</b>
        <br><code>break</code> exits the loop and goes to the first statement after the loop body, while <code>continue</code> skips the rest of the statements of the current iteration and proceeds to the next iteration.
        <br>In <code>for...of</code> loops, abrupt iteration termination can be caused by <code>break</code>, <code>throw</code> or <code>return</code>. In these cases, the iterator is closed.`,
        `<b>Difference between <code>for...of</code> and <code>for...in</code></b>
        <br>Both <code>for...of</code> and <code>for...in</code> statements iterate over something. The main difference between them is in what they iterate over:
        <br>- The <code>for...of</code> statement iterates over values that the <i>iterable object</i> defines to be iterated over
        <br>- The <code>for...in</code> statement iterates over the <i>enumerable properties</i> of an object`,
      ],
    },
    {
      sectionTitle: '<code>for...in</code> statement',
      sectionSource:
        '/src/markdowns/05_Loops_&_Iteration/for...in_statement.html',
      sectionSummary: [
        '<code>for...in</code> <i>iterates over all <u>enumerable properties</u> of an object that are keyed by strings</i> (ignoring ones keyed by Symbols), including <i>inherited enumerable properties (iterates over the entire prototype chain)</i>.',
        'A <code>for...in</code> loop <i><u>only</u> iterates over <u>enumerable, non-symbol properties</u></i>.',
        'A <code>for...in</code> loop iterates over the properties of an object in an <i>arbitrary order</i>. Do not use <code>for...in</code> to iterate an array if the index order is important. Use a <code>for</code> loop instead.',
        `<b><code>for...in</code> iterates over the entire prototype chain</b>
        <br><code>for...in</code> loop will iterate over all enumerable properties of the object itself and those the object inherits from its prototype chain.`,
        `<b><code>for...in</code> vs <code>Object.keys()</code></b>
        <br>If you only want to consider <i>properties attached to the <u>object itself</u> (iterating over own properties only) and not its prototypes</i>, you can use <code>Object.keys(myObject)</code>. <code>Object.keys(myObject)</code> returns an array of a given object's own enumerable string-keyed property names.`,
        `<b><code>for...in</code> over arrays</b>
        <br>Array indexes are just <i>enumerable properties with integer names</i> and are otherwise identical to general object properties. There is no guarantee that <code>for...in</code> will return the indexes in any particular order. Therefore, it is better to use a <code>for</code> loop with a numeric index (or <code>Array.prototype.forEach()</code> or the <code>for...of</code> loop) when iterating over arrays where the order of access is important.`,
        'You can use destructuring in <code>for...in</code> statement.',
        `<b>Why NOT use <code>for...in</code>?</b>
        <br>Many JavaScript style guides and linters recommend against the use of <code>for...in</code>, because it <i>iterates over the entire prototype chain</i> which is rarely what one wants, and may be a confusion with the more widely-used <code>for...of</code> loop.`,
      ],
    },
    {
      sectionTitle: '<code>while</code> statement',
      sectionSource: '/src/markdowns/05_Loops_&_Iteration/while_statement.html',
      sectionSummary: [
        'The <code>while</code> loop loops through a block of code <i>as long as a specified condition is <code>true</code></i>. The condition is evaluated before executing the statement.',
        `<b>Avoid infinite loops!</b>
        <br>Make sure the condition in a loop eventually becomes <code>false</code> — otherwise, the loop will never terminate!`,
        'Do NOT initialize a function inside of a loop!',
      ],
    },
    {
      sectionTitle: '<code>break</code> and <code>continue</code> statements',
      sectionSource:
        '/src/markdowns/05_Loops_&_Iteration/Break_&_Continue_Statements.html',
      sectionSummary: [
        'The <code>break</code> statement <i>"jumps <u>out</u>"</i> of a loop.',
        'The <code>continue</code> statement <i>"jumps <u>over</u>"</i> one iteration in the loop. The <code>continue</code> statement <i>breaks one iteration</i> (in the loop) if a specified condition occurs, and continues with the next iteration in the loop.',
        `In contrast to the <code>break</code> statement, <code>continue</code> does not terminate the execution of the loop entirely, but instead:
        <br>- in a <code>while</code> loop, it jumps back to the condition
        <br>- in a <code>for</code> loop, it jumps to the update expression`,
      ],
    },
  ],
};

const functions = {
  title: 'Functions',
  sections: [
    {
      sectionTitle: 'Functions introduction',
      sectionSource: '',
      sectionSummary: [
        'Function hoisting',
        'Functions vs Methods',
        'Function expressions: storing functions in variables',
        'Functions used as variable values',
      ],
    },
    {
      sectionTitle: 'Higher Order Functions',
      sectionSource: '/src/markdowns/06_Functions/Higher_Order_Functions.html',
      sectionSummary: [
        'Functions are objects',
        'Functions are first-class citizen in JavaScript',
        'Functions can be assigned to variables and properties of objects',
        'A function can be passed as an argument/parameter to other function (callback functions)',
        'A function can be returned by another function',
      ],
    },
    {
      sectionTitle: 'Function syntax',
      sectionSource: '',
      sectionSummary: [
        'Function expressions vs Function declarations',
        'Arrow functions',
        'Anonymous functions',
        'Constructor Functions',
      ],
    },
    {
      sectionTitle: 'Function parameters & arguments',
      sectionSource: '',
      sectionSummary: [
        'Parameter rules',
        'Default parameters',
        'The <code>arguments</code> object',
        'Arguments are passed by value vs Objects are passed by reference',
      ],
    },
    {
      sectionTitle: 'Function <code>return</code> statement',
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Function invocation',
      sectionSource: '',
      sectionSummary: [
        '"Direct" vs "Indirect" Function Execution',
        'Invoking a JavaScript Function',
        'Invoking a Function as a Function',
        'Tagged templates',
      ],
    },
    {
      sectionTitle: 'Function invocation & <code>this</code> keyword',
      sectionSource:
        '/src/markdowns/06_Functions/Function_invocation_&_this_keyword.html',
      sectionSummary: [
        `<code>this</code> is the object that the function is a property of`,
        `The value of <code>this</code> is always set when the function is invoked, not when the function is declared`,
        'All functions are methods',
        'Invoking a function as a global object (function without an owner object)',
        'Invoking a function as a method (function with an owner object)',
        'Invoking a function with a Function Constructor',
        'The 2 main benefits of <code>this</code>: gives methods access to their object & execute the same function code for multiple objects',
        `<code>this</code> acts as a placeholder for an object, and <code>this</code> we'll refer to whichever object called that function/method`,
        `<code>this</code> & Dynamic Scope vs Lexical Scope`,
        `<code>this</code> is not lexically scoped, it doesn't matter where <code>this</code> is write in our code, it matters how the function was called`,
        `<code>this</code> & arrow functions `,
        `Arrow functions don't have their own <code>this</code>. It will lexically bound <code>this</code> to the surrounding object`,
      ],
    },
    {
      sectionTitle:
        'The <code>this</code> keyword & <code>call()</code>, <code>apply()</code> and <code>bind()</code>',
      sectionSource:
        '/src/markdowns/06_Functions/The_this_keyword_&_call__apply__and__bind.html',
      sectionSummary: [
        'With <code>call()</code>, <code>apply()</code> and <code>bind()</code> you can assign a different <code>this</code> object when calling an existing function. Usually <code>this</code> refers to the current object (the calling object).',
        '<code>call()</code> method calls the function with a given <code>this</code> value and arguments provided individually',
        '<code>apply()</code> method is similar to <code>call()</code>, the difference is with <code>apply()</code> you use an array instead of providing arguments individually',
        '<code>bind()</code> method creates a new function that, when called, has its <code>this</code> set to the provided value, with a given sequence of arguments preceding any provided when the new function is called',
      ],
    },
    {
      sectionTitle: 'Arrow functions',
      sectionSource: '',
      sectionSummary: [
        'Arrow functions: implicit returns',
        'Arrow functions and the <code>this</code> keyword',
        'Regular functions vs arrow functions',
      ],
    },
    {
      sectionTitle:
        'Self-Invoking functions / Immediately Invoked Function Expressions (IIFE)',
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Closures & local vs global variables',
      sectionSource:
        '/src/markdowns/06_Functions/Closures_&_local_vs_global_variables.html',
      sectionSummary: [
        'Variable lifetime',
        'Nested functions',
        'Closures & lexical environment',
        'A closure always return a function/object that references to its surrounding',
        'Closures & memory efficiency',
        'Closures & encapsulation',
      ],
    },
    {
      sectionTitle: 'Rest parameters',
      sectionSource:
        '/src/markdowns/06_Functions/Rest_parameter_and_functions.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Destructuring parameters',
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Spread syntax for function calls',
      sectionSource:
        '/src/markdowns/06_Functions/Spread_syntax_and_function_calls.html',
      sectionSummary: [],
    },
  ],
};

const arraysAndSets = {
  title: 'Data structures: Arrays & Sets',
  sections: [
    {
      sectionTitle: 'Introduction to Arrays',
      sectionSource:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Introduction_to_Arrays.html',
      sectionSummary: [
        'What are "Iterables" and "Array-like Objects"?',
        'Arrays vs Primitive Values',
        'An array is a single object that contain multiple values stored in a list',
        'Creating arrays',
        'Array constructor',
        'Array literal notation',
        'Arrays <code>length</code> property',
        'Arrays indices',
        'Accessing and modifying array items',
        'Accessing every item / iterating over arrays',
        'Arrays are reference types',
        'Nested / multidimensional arrays: Objects are not really located "inside" arrays. They might appear to be "inside" in code, but each object in an array is a separate value.',
        'Which data can you store in arrays?',
      ],
    },
    {
      sectionTitle: 'Destructuring Arrays',
      sectionSource:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Destructuring_arrays.html',
      sectionSummary: [
        'What is destructuring?',
        'Binding and assignment',
        'Default values',
        'Skipping items',
        'Swapping variables',
        'Nested array destructuring',
        'Rest parameter & array destructuring',
        'Mixed destructuring',
        'Destructuring patterns with other syntaxes',
      ],
    },
    {
      sectionTitle: 'Spread syntax & array literals',
      sectionSource:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Spread_syntax_and_arrays.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Rest Pattern in Arrays',
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: '<code>Array.prototype</code> Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'push()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/push.html',
        },
        {
          articleTitle: 'unshift()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/unshift.html',
        },
        {
          articleTitle: 'pop()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/pop.html',
        },
        {
          articleTitle: 'shift()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/shift.html',
        },
        {
          articleTitle: 'splice()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/splice.html',
        },
        {
          articleTitle: 'reverse()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/reverse.html',
        },
        {
          articleTitle: 'sort()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/sort.html',
        },
        {
          articleTitle: 'fill()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/fill.html',
        },
        {
          articleTitle: 'map()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/map.html',
        },
        {
          articleTitle: 'filter()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/filter.html',
        },
        {
          articleTitle: 'slice()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/slice.html',
        },
        {
          articleTitle: 'concat()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/concat.html',
        },
        {
          articleTitle: 'flat()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/flat.html',
        },
        {
          articleTitle: 'flatMap()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/flatMap.html',
        },
        {
          articleTitle: 'indexOf()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/indexOf.html',
        },
        {
          articleTitle: 'lastIndexOf()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/lastIndexOf.html',
        },
        {
          articleTitle: 'findIndex()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/findIndex.html',
        },
        {
          articleTitle: 'find()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/find.html',
        },
        {
          articleTitle: 'includes()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/includes.html',
        },
        {
          articleTitle: 'some()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/some.html',
        },
        {
          articleTitle: 'every()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/every.html',
        },
        {
          articleTitle: 'join()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/join.html',
        },
        {
          articleTitle: 'reduce()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/reduce.html',
        },
        {
          articleTitle: 'forEach()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/forEach.html',
        },
        {
          articleTitle: 'entries()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/entries.html',
        },
        {
          articleTitle: 'Chaining Methods in JavaScript',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Array Static Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Array.isArray()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/Array.isArray.html',
        },
        {
          articleTitle: 'Array.from()',
          articleSource:
            '/src/markdowns/07_Data_structures___Arrays_&_Sets/Array.from.html',
        },
      ],
    },
    {
      sectionTitle: 'Which array method to use?',
      sectionSource:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Which_array_method_to_use.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Data structures - Sets',
      sectionSource: '',
      sectionSummary: [],
    },
  ],
};

const objectsAndMaps = {
  title: 'Data structures: Objects & Maps',
  sections: [
    {
      sectionTitle: 'Introducing JavaScript objects',
      sectionSource: '',
      sectionSummary: [
        "What's an object?",
        'Objects vs Primitive Values',
        'Creating an object - Object literals',
        'Creating an object - Constructors',
        "Accesing object's properties <code>.</code> vs <code>[]</code> notation",
        'Special key names & square bracket property access',
        'Dynamic property access & setting properties dynamically',
        'Adding, modifying & deleting properties',
        'Shorthand property syntax',
        'Nesting objects: Objects are not really nested. An object can appears "nested" in another object but "nesting" is an inaccurate way to think about how objects behave. When the code executes, there is no such thing as a "nested" object. You are really looking at two different objects because every single object is different, even it is nested inside another object.',
      ],
    },
    {
      sectionTitle: `Object methods and the <code>this</code> keyword`,
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Spread syntax & object literals',
      sectionSource:
        '/src/markdowns/08_Data_structures___Objects_&_Maps/Spread_syntax_and_object_literals.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Rest Pattern in Objects',
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Destructuring Objects',
      sectionSource:
        '/src/markdowns/08_Data_structures___Objects_&_Maps/Destructuring_objects.html',
      sectionSummary: [
        'What is destructuring?',
        'Why to use object destructuring?',
        'Binding and assignment',
        'Default values',
        'Using different variable names',
        'Nested object destructuring',
        'Extracting a dynamic name property',
        'Rest parameter & object destructuring',
        'Mixed destructuring',
        'Destructuring patterns with other syntaxes',
      ],
    },
    {
      sectionTitle: '<code>Object.prototype</code> Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'toString()',
          articleSource:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object.prototype.toString.html',
        },
        {
          articleTitle: 'hasOwnProperty()',
          articleSource:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object.prototype.hasOwnProperty.html',
        },
        {
          articleTitle: 'isPrototypeOf()',
          articleSource:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object.prototype.isPrototypeOf.html',
        },
      ],
    },
    {
      sectionTitle: 'Object Static Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Object.keys()',
          articleSource:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object.keys.html',
        },
        {
          articleTitle: 'Object.values()',
          articleSource:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object.values.html',
        },
        {
          articleTitle: 'Object.entries()',
          articleSource:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object.entries.html',
        },
        {
          articleTitle: 'Object.fromEntries() vs Object.entries()',
          articleSource:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object.fromEntries.html',
        },
        {
          articleTitle: 'Object.assign()',
          articleSource:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object.assign.html',
        },
        {
          articleTitle: 'Object.freeze()',
          articleSource:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object.freeze.html',
        },
        {
          articleTitle: 'Object.create()',
          articleSource:
            '/src/markdowns/08_Data_structures___Objects_&_Maps/Object.create.html',
        },
      ],
    },
    {
      sectionTitle: 'Object descriptors',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Object.getOwnPropertyDescriptor()',
          articleSource: '',
        },
        {
          articleTitle: 'Object.defineProperty()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Data structures - Maps',
      sectionSource: '',
      sectionSummary: [],
    },
  ],
};

const oop = {
  title: 'Object-Oriented Programming (OOP)',
  sections: [
    {
      sectionTitle: 'Inspiration of JavaScript: Scheme & Java',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Scheme_&_Java.html',
      sectionSummary: [
        'Scheme was a programming language that have closures and the idea of functions as first class citizens',
        'In Java community, classes and classical inheritance was really, really important',
        'JavaScript was inspired by Scheme and Java, and because of this inspiration we have this multi-paradigm language: functional and object-oriented',
        'OOP and Functional Programming are paradigms that allow us to organize code',
      ],
    },
    {
      sectionTitle: 'Introduction to "traditional" OOP',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Introduction_to_traditional_OOP.html',
      sectionSummary: [
        'OOP is a programming paradigm that allow us to organize code',
        'Traditional OOP: Classes & Instances',
        'Traditional OOP: Inheritance',
        'Traditional OOP: Encapsulation',
        '4 fundamental principles of OOP: abstraction, encapsulation, inheritance and polymorphism',
        'Traditional OOP: Classes & Instances vs JavaScript: Constructors & Prototypes',
      ],
    },
    {
      sectionTitle: 'OOP in JavaScript: Objects prototypes',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/OOP_in_JavaScript_Object_prototypes.html',
      sectionSummary: [
        'Prototypes are the mechanism by which JavaScript objects inherit features from one another',
        'With the help of prototypes objects inherit features from another object, not copy them',
        "With Prototypal Inheritance we're being efficient with our memory: the fact that objects can share prototypes means that you can have objects with properties that are pointing to the same place in memory",
        'Every object in JavaScript has a built-in property <code>__proto__</code> which is called its prototype',
        `The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype`,
        'Only functions have the prototype property',
        "Shadowing properties happens when you define a property in an object, when a property with the same name is defined in the object's prototype",
        'Setting a prototype: <code>Object.create()</code>, Constructors and ES6 Classes',
        'Prototypes and inheritance',
        'Prototypes & memory efficiency',
      ],
    },
    {
      sectionTitle:
        'What is the difference between <code>__proto__</code> and prototype?',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Difference_between_proto_and_prototype.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Prototypal Inheritance: Constructor Function & Prototypes',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Prototypal_Inheritance_Constructor_Function.html',
      sectionSummary: [
        'Factory Functions vs Constructor Function',
        'Constructor Function create a "blueprint" for creating many objects of the same "type"',
        'We use Constructor Function to build an object using a function',
        'A Constructor Function is just a function called using the <code>new</code> operator',
        'Constructors, by convention, start with a capital letter and are named for the type of object they create',
        `You can't create a Constructor Function with the arrow function because arrow function doesn't have its own <code>this</code> keyword`,
        `In a Constructor Function <code>this</code> does not have a value. It is a substitute for the new object. The value of <code>this</code> will become the new object when a new object is created`,
        'Setting a prototype with Constructor Function',
        'More real inheritance than Prototypal Inheritance (Child and Parent)',
      ],
    },
    {
      sectionTitle:
        'Prototypal Inheritance: <code>Object.create()</code> & Prototypes',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Prototypal_Inheritance_Object.create().html',
      sectionSummary: [
        'Setting a prototype with <code>Object.create()</code>',
        'More real inheritance than Prototypal Inheritance (Child and Parent)',
      ],
    },
    {
      sectionTitle: 'Prototypal Inheritance: ES6 Classes & Prototypes',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Prototypal_Inheritance_ES6_Classes.html',
      sectionSummary: [
        'A class is not an object, it is a template for creating an object',
        'A class encapsulate data with code (methods) to work on that data',
        'JavaScript classes are only "syntactic sugar" over Constructor Function',
        'Class body',
        'Constructor method',
        'Classes & Prototypes',
        'Prototype methods',
        'Static methods and properties',
        'Setters and Getters',
        'Protected Properties and Methods',
        'Private Class Fields and Methods',
        'Chaining Methods',
        '<code>super</code> keyword',
        '<code>new</code> keyword',
        'More real inheritance than Prototypal Inheritance (Child and Parent)',
      ],
    },
    {
      sectionTitle: 'Prototypal Inheritance on Built-In Objects',
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Object-Oriented vs Functional Programming',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Object-oriented_vs_functional_programming.html',
      sectionSummary: [
        'Inheritance vs Composition',
        'Inheritance problems: tight coupling, fragile base class & hierarchy',
        "One of the drawbacks to OOP paradigm and inheritance is that it is based on the fact that things (classes) won't change in the future. We are structuring a class based on what it is",
        'With FP we focus and structure our code around "What it has?" or "What it does to data?"',
        'FP is more declarative (what to do, not how), and OOP is more imperative (what and how to do something)',
      ],
    },
  ],
};

const functionalProgramming = {
  title: 'Functional Programming (FP)',
  sections: [
    {
      sectionTitle: 'Inspiration of JavaScript: Scheme & Java',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Scheme_&_Java.html',
      sectionSummary: [
        'Scheme was a programming language that have closures and the idea of functions as first class citizens',
        'In Java community, classes and classical inheritance was really, really important',
        'JavaScript was inspired by Scheme and Java, and because of this inspiration we have this multi-paradigm language: functional and object oriented',
        'OOP and Functional Programming are paradigms that allow us to organize code',
      ],
    },
    {
      sectionTitle: 'Introduction to Functional Programming',
      sectionSource:
        '/src/markdowns/09A_Functional_Programming_(FP)/Introduction_to_FP.html',
      sectionSummary: ['Pure functions concept'],
    },
    {
      sectionTitle: 'Functional Programming concepts',
      sectionSource:
        '/src/markdowns/09A_Functional_Programming_(FP)/Functional_programming_concepts.html',
      sectionSummary: [
        'Pure Functions & Shared State',
        'Pure Functions & Immutability vs Mutating State',
        'Pure Functions & Side-Effects',
        'Pure Functions & Referential transparency',
        'Idempotence',
        'Imperative vs Declarative',
        'Reusability through Higher Order Functions',
        'Curry',
        'Partial Application',
        'Function composition: compose & pipe',
        'Arity',
      ],
    },
    {
      sectionTitle: 'More about Pure Functions',
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: 'More about Functions Composition',
      sectionSource: '',
      sectionSummary: [],
    },
  ],
};

const standardBuildInObjects = {
  title: 'Standard Build-In Objects',
  sections: [
    {
      sectionTitle: 'Introduction to Standard Build-in Objects',
      sectionSource:
        '/src/markdowns/10_Standard_Build-In_Objects/Introduction_to_Standard_Build-in_Objects.html',
      sectionSummary: [
        'Global objects vs Global Object <code>window</code>',
        'Standard build-in objects by category',
      ],
    },
    {
      sectionTitle: 'String',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/String.html',
      sectionSummary: [
        'Creating strings as primitives: string literals & <code>String()</code> function',
        'Creating strings as objects: <code>String()</code> constructor',
        '<code>String()</code> function and <code>String()</code> constructor produce different results',
        'Character access: You can treat the string as an array-like object, where individual characters correspond to a numerical index',
        'Comparing strings: strings case-sensitively!',
        'String primitives vs String objects: in contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup on the wrapper object instead',
        'String coercion: template literals, <code>String()</code> function, <code>+</code> operator',
        'Long literal strings',
        'Template literals (Template strings)',
        'Template literals and Tagged Templates',
      ],
    },
    {
      sectionTitle: '<code>String.prototype</code> properties & methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'length',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.length.html',
        },
        {
          articleTitle: 'indexOf()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.indexOf.html',
        },
        {
          articleTitle: 'lastIndexOf()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.lastIndexOf.html',
        },
        {
          articleTitle: 'slice()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.slice.html',
        },
        {
          articleTitle: 'toLowerCase() & toUpperCase()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.toLowerCase_&_toUpperCase.html',
        },
        {
          articleTitle: 'trim()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.trim.html',
        },
        {
          articleTitle: 'replace()',
          articleSource: '',
        },
        {
          articleTitle: 'replaceAll()',
          articleSource: '',
        },
        {
          articleTitle: 'includes()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.includes.html',
        },
        {
          articleTitle: 'startsWith() & endsWith()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.startsWith_&_endsWith.html',
        },
        {
          articleTitle: 'split()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.split.html',
        },
        {
          articleTitle: 'padStart() & padEnd()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.padStart_&_padEnd.html',
        },
        {
          articleTitle: 'repeat()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/String.repeat.html',
        },
      ],
    },
    {
      sectionTitle: 'Regular Expressions ("RegEx")',
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Number',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/Number.html',
      sectionSummary: [
        'Creating numbers as primitives: literal form & <code>Number()</code> function',
        'Creating numbers as objects: <code>Number()</code> constructor',
        '<code>Number()</code> function and <code>Number()</code> constructor produce different results',
        'Number primitives vs Number objects: in contexts where a method is to be invoked on a primitive number or a property lookup occurs, JavaScript will automatically wrap the number primitive and call the method or perform the property lookup on the wrapper object instead',
        "Number encoding: there are some limits to the stored number's magnitude and precision. Integers can only be represented without loss of precision in the range -253 + 1 to 253 - 1",
        'Number coercion: Addition operator <code>+</code> & <code>Number()</code> function',
      ],
    },
    {
      sectionTitle: 'Number Static Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Number.parseInt()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.parseInt.html',
        },
        {
          articleTitle: 'Number.parseFloat()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.parseFloat.html',
        },
        {
          articleTitle: 'Number.isNaN()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.isNaN.html',
        },
        {
          articleTitle: 'Number.isFinite()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.isFinite.html',
        },
        {
          articleTitle: 'Number.isInteger()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.isInteger.html',
        },
      ],
    },
    {
      sectionTitle: '<code>Number.prototype</code> Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'toFixed()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Number.prototype.toFixed.html',
        },
      ],
    },
    {
      sectionTitle: 'Math',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/Math.html',
      sectionSummary: [
        'Unlike many other global objects, Math is not a constructor',
        'All properties and methods of Math are static',
        `Math works with the Number type, it doesn't work with BigInt`,
      ],
    },
    {
      sectionTitle: 'Math Static Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Math.max()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Math.max.html',
        },
        {
          articleTitle: 'Math.min()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Math.min.html',
        },
        {
          articleTitle: 'Math.round()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Math.round.html',
        },
        {
          articleTitle: 'Math.floor()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Math.floor.html',
        },
        {
          articleTitle: 'Math.ceil()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Math.ceil.html',
        },
        {
          articleTitle: 'Math.trunc()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Math.trunc.html',
        },
        {
          articleTitle: 'Math.random()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Math.random.html',
        },
        {
          articleTitle: 'Math.abs()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Math.abs.html',
        },
      ],
    },
    {
      sectionTitle: 'BigInt',
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Date',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/Date.html',
      sectionSummary: [
        'The ECMAScript epoch and timestamps: a JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since the ECMAScript epoch, which is defined as January 1, 1970, UTC (equivalent to the UNIX epoch)',
        'Date format and time zone conversions: there are several methods available to obtain a date in various formats, as well as to perform time zone conversions',
        'The <code>Date()</code> constructor can create a Date instance or return a string representing the current time',
        'When <code>Date()</code> is called as a constructor (with the <code>new</code> keyword), returns a new Date object',
        'When <code>Date()</code> is called as a function, returns a string representation of the current date and time',
        'Date constructor static method: <code>Date.now()</code>',
        '<code>Date.now()</code> returns the numeric value corresponding to the current time — the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored',
      ],
    },
    {
      sectionTitle: '<code>Date.prototype</code> Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'getFullYear()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getFullYear.html',
        },
        {
          articleTitle: 'getMonth()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getMonth.html',
        },
        {
          articleTitle: 'getDate()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getDate.html',
        },
        {
          articleTitle: 'getDay()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getDay.html',
        },
        {
          articleTitle: 'getHours()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getHours.html',
        },
        {
          articleTitle: 'getMinutes()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getMinutes.html',
        },
        {
          articleTitle: 'getSeconds()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getSeconds.html',
        },
        {
          articleTitle: 'getTime()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.getTime.html',
        },
        {
          articleTitle: 'toISOString()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.toISOString.html',
        },
        {
          articleTitle: 'toLocaleString()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.toLocaleString.html',
        },
        {
          articleTitle: 'setFullYear()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/Date.setFullYear.html',
        },
      ],
    },
    {
      sectionTitle: 'Internationalization API (Intl)',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/Intl.html',
      sectionSummary: [
        'The Intl object provides access to several constructors that do language sensitive string comparison, number formatting, and date and time formatting',
        'All Intl constructors accept locales and options arguments, for use pattern to identifying locales and determining the one they will actually use',
        'You can use <code>navigator.language</code> read-only property for setting your locales parameter',
      ],
    },
    {
      sectionTitle: 'Intl.DateTimeFormat()',
      sectionSource:
        '/src/markdowns/10_Standard_Build-In_Objects/Intl.DateTimeFormat.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Intl.NumberFormat()',
      sectionSource:
        '/src/markdowns/10_Standard_Build-In_Objects/Intl.NumberFormat.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Error',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/Error.html',
      sectionSummary: [
        'Error types',
        'Error Constructor',
        'Error instance properties: message, name, cause',
      ],
    },
    {
      sectionTitle: 'FormData',
      sectionSource:
        '/src/markdowns/10_Standard_Build-In_Objects/FormData.html',
      sectionSummary: [
        'The <code>FormData</code> interface provides a way to easily <i>construct a set of <u>key/value pairs</u> representing form <u>fields</u> and their <u>values</u>, which can then be easily sent using the <code>fetch()</code> or <code>XMLHttpRequest.send()</code> method</i>.',
        "The <code>FormData()</code> Constructor takes as an <b>optional parameter an HTML <<span>form</span>> element</b>. When optional parameter is specified, the <code>FormData</code> object will be <i>populated with the form's current keys/values using the <u>name property</u> of each element for the keys and their submitted value for the values</i>. It will also encode file input content.",
        '<code>FormData()</code> object has a series of instance methods that helps you append, delete, set or return keys/values from your <code>FormData()</code> object.',
        'You can easily extract all the data that is inside a `FormData` into an JavaScript object with the help of spread operator & <code>Object.fromEntries</code>.',
      ],
      sectionArticles: [
        {
          articleTitle: 'new FormData()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'JSON',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/JSON.html',
      sectionSummary: [
        'Unlike most global objects, JSON is not a constructor',
        'JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is based upon JavaScript syntax, but is distinct from JavaScript: most of JavaScript is not JSON',
      ],
    },
    {
      sectionTitle: 'JSON Static Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'JSON.stringify()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/JSON.stringify.html',
        },
        {
          articleTitle: 'JSON.parse()',
          articleSource:
            '/src/markdowns/10_Standard_Build-In_Objects/JSON.parse.html',
        },
      ],
    },
  ],
};

const asynchronous = {
  title: 'Asynchronous',
  sections: [
    {
      sectionTitle: 'How the Web works: HTTP request & responses',
      sectionSource:
        '/src/markdowns/11_Asynchronous/How_the_web_works___HTTP_request_&_responses.html',
      sectionSummary: [
        'HTTP is a protocol for fetching resources',
        'HTTP is the foundation of any data exchange on the web',
        'HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response',
        'Domain Name Server (DNS)',
        'TCP/IP socket connection',
        'HTTP Messages: Request & Response',
        'HTTP Request: HTTP method, request target, request headers, body',
        'HTTP Response: HTTP status code, status message, headers, body',
        'APIs based on HTTP: XMLHttpRequest & Fetch API',
      ],
    },
    {
      sectionTitle: 'Introduction to Asynchronous JavaScript',
      sectionSource:
        '/src/markdowns/11_Asynchronous/Introducing_to_Asynchronous_JavaScript.html',
      sectionSummary: [
        'JavaScript has only one threat of execution (Call Stack) and so it can only do one thing at a time. There is absolutely no multitasking happening in JavaScript itself.',
        'Single-Thread Language problem: long-running synchronous functions that work in the Call Stack',
        'Asynchronous functions & Web APIs',
        'Synchronous vs Asynchronous functions',
        'Early Asynchronous Programming & Event Handlers: early asynchronous APIs XMLHttpRequest used events for asynchronous programming',
        'Early Asynchronous Programming & Chaining Callbacks: Callback Hell',
        'Early Asynchronous Programming: AJAX',
        'AJAX is not a programming language',
        'AJAX use a combination of existing technologies together to communicate with servers',
        'The XMLHttpRequest API is the core of AJAX',
        'XML vs JSON',
        'Useful JavaScript methods for JSON format: <code>JSON.parse()</code> & <code>JSON.stringify()</code>',
        'XMLHttpRequests Chaining Requests: Welcome to Callback Hell',
      ],
    },
    {
      sectionTitle: 'Promises',
      sectionSource: '/src/markdowns/11_Asynchronous/Promises.html',
      sectionSummary: [
        'Traditionally (before promises), asynchronous tasks were designed as callbacks. This lead at the problem known as Callback Hell. A promise allows to transform the callback-based API to a promise-based one',
        'A promise is an object returned by an asynchronous function that is used as a placeholder for the future result of that asynchronous operation',
        'The promise object provides methods to handle the eventual success or failure of the operation',
        'The promise lifecycle: pending -> settled (fulfilled / rejected)',
        'Build & consume promises',
      ],
    },
    {
      sectionTitle: 'Building a Promise',
      sectionSource: '/src/markdowns/11_Asynchronous/Building_a_Promise.html',
      sectionSummary: [
        'The <code>Promise()</code> constructor is primarily used to wrap functions that do not already support promises',
        'If your task is already promise-based, you likely do not need the <code>Promise()</code> constructor',
        'The <code>Promise()</code> constructor returns a promise object to which you can attach handlers for consuming the promise',
      ],
    },
    {
      sectionTitle: 'Consuming a Promise',
      sectionSource: '/src/markdowns/11_Asynchronous/Consuming_a_Promise.html',
      sectionSummary: [
        'There is no race condition between an asynchronous operation completing and its handlers being attached',
        'Handling Fulfilled Promise: <code>.then()</code> method (callback function with response parameter)',
        'Handling Rejected Promise: <code>.catch()</code> method (callback function with error parameter)',
        'Chaining Multiple Promises: <code>.then()</code>, <code>.catch()</code> and <code>.finally()</code> methods are used to associate further action with a promise that becomes settled. These methods return promises, so they can be chained',
        "Always return the result of a promise, otherwise <code>.then()</code> method won't catch the result of the previous promise",
        '<code>.finally()</code> method (callback function)',
      ],
    },
    {
      sectionTitle: 'The Fetch API',
      sectionSource: '/src/markdowns/11_Asynchronous/Fetch_API.html',
      sectionSummary: [
        'The Fetch API provides an interface for fetching resources (including across the network)',
        'For making a request and fetching a resource use the <code>fetch()</code> method',
        'The <code>fetch()</code> method always return a promise',
        `The promise returned from <code>fetch()</code> won't reject on HTTP error status even if the response is an HTTP 404 or 500`,
      ],
    },
    {
      sectionTitle:
        'How to consume a promise returned by the <code>fetch()</code> method',
      sectionSource:
        '/src/markdowns/11_Asynchronous/How_to_consume_a_promise_returned_by_fetch_method.html',
      sectionSummary: [
        '<code>fetch()</code> will always return a promise that need to be handled by consuming it',
        'Read the response returned by <code>fetch()</code> with: <code>Response.json()</code>, <code>Response.text()</code>, <code>Response.formData()</code>',
        '<code>Response.json()</code>, <code>Response.text()</code>, <code>Response.formData()</code> always return a promise',
        'Throwing Custom Errors Manually: the Error Object & <code>throw new Error()</code>',
        'Rethrowing an error',
        'Combining multiple promises with <code>Promise.all</code> or <code>Promise.any</code> and consume them',
      ],
    },
    {
      sectionTitle:
        'Consuming promises with <code>async</code>/<code>await</code>',
      sectionSource: '/src/markdowns/11_Asynchronous/async_&_await.html',
      sectionSummary: [
        '<code>async</code> functions',
        '<code>await</code> operator',
        'The purpose of <code>async</code>/<code>await</code> is to simplify the syntax necessary to consume promise-based APIs',
        '<code>async</code>/<code>await</code> enables you to write code that uses asynchronous functions but looks like synchronous code',
        '<code>async</code>/<code>await</code> help you to avoid the need to explicitly configure promise chains, like you used to do with <code>.then()</code> and <code>.catch()</code>',
        `Just like a promise chain, <code>await</code> forces asynchronous operations to be completed in series. This is necessary if the result of the next operation depends on the result of the last one, but if that's not the case then something like <code>Promise.all</code> will be more performant`,
        '<code>async</code> functions always return a promise. If the return value of an <code>async</code> function is not explicitly a promise, it will be implicitly wrapped in a promise',
        'You can only use <code>await</code> inside an <code>async</code> function, unless your code is in a JavaScript module',
        'You can use multiple <code>await</code> in an <code>async</code> function',
        'Store <code>await</code> promises results in variables',
        'Error Handling in <code>async</code> Functions: <code>try{...} catch(error){...}</code>',
        'Rethrowing an error when you have multiple <code>async</code> functions',
        'Returning values from <code>async</code> functions',
        '<code>async</code>/<code>await</code> is only syntactic sugar over "Raw Promises"',
        'Top-Level <code>await</code> (ES2022)',
      ],
    },
    {
      sectionTitle: '<code>Promise.prototype</code> Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'then()',
          articleSource:
            '/src/markdowns/11_Asynchronous/Promise.prototype.then.html',
        },
        {
          articleTitle: 'catch()',
          articleSource:
            '/src/markdowns/11_Asynchronous/Promise.prototype.catch.html',
        },
        {
          articleTitle: 'finally()',
          articleSource:
            '/src/markdowns/11_Asynchronous/Promise.prototype.finally.html',
        },
      ],
    },
    {
      sectionTitle: 'Promise Static Methods',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Promise.resolve()',
          articleSource: '/src/markdowns/11_Asynchronous/Promise.resolve.html',
        },
        {
          articleTitle: 'Promise.reject()',
          articleSource: '/src/markdowns/11_Asynchronous/Promise.reject.html',
        },
        {
          articleTitle: 'Promise.all()',
          articleSource: '/src/markdowns/11_Asynchronous/Promise.all.html',
        },
        {
          articleTitle: 'Promise.allSettled()',
          articleSource:
            '/src/markdowns/11_Asynchronous/Promise.allSettled.html',
        },
        {
          articleTitle: 'Promise.any()',
          articleSource: '/src/markdowns/11_Asynchronous/Promise.any.html',
        },
        {
          articleTitle: 'Promise.race()',
          articleSource: '/src/markdowns/11_Asynchronous/Promise.race.html',
        },
      ],
    },
    {
      sectionTitle: 'Timers',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'setTimeout()',
          articleSource:
            '/src/markdowns/11_Asynchronous/Timers__setTimeout.html',
        },
        {
          articleTitle: 'clearTimeout()',
          articleSource:
            '/src/markdowns/11_Asynchronous/Timers__clearTimeout.html',
        },
        {
          articleTitle: 'setInterval()',
          articleSource:
            '/src/markdowns/11_Asynchronous/Timers__setInterval.html',
        },
        {
          articleTitle: 'clearInterval()',
          articleSource:
            '/src/markdowns/11_Asynchronous/Timers__clearInterval.html',
        },
      ],
    },
  ],
};

const domManipulation = {
  title:
    'Web APIs <br> Document Object Model (DOM) <br> - Properties & Methods -',
  sections: [
    {
      sectionTitle: 'Introduction to Web APIs',
      sectionSource:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Introduction_to_Web_APIs.html',
      sectionSummary: [
        'An API (Application Programming Interface) is a software intermediary (interface) that allows two applications to talk to each other',
        'In Web development, we have Web APIs that are build into the browser, and we have external Web APIs called Third Party APIs',
        'In both cases, a Web API is an interface that allows two applications to talk to each other: JavaScript - Browser or JavaScript - Server',
      ],
    },
    {
      sectionTitle: 'Introduction to the Document Object Model (DOM)',
      sectionSource:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Introduction_to_the_DOM.html',
      sectionSummary: [
        'The DOM defines a standard for accessing different types of documents (XML, HTML, etc.)',
        'The DOM is built using multiple APIs that work together',
        'When it comes to HTML document, HTML DOM API adds support for representing HTML documents to the core DOM',
        'The DOM is a programming interface for web documents (HTML documents). It represents the HTML document so that programs can change the document structure, style and content',
        'The DOM connects web pages to scripts or programming languages by representing the structure of a HTML document in memory, as an object-oriented representation',
        'The DOM model is constructed as a tree of objects. Each branch of the tree ends in a node, and each node contains objects. This means that DOM objects are simply objects (objects are reference values)',
        "The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts",
        'Accessing the DOM: <code>document</code> & <code>window</code> object',
        'DOM Interfaces: interfaces & objects',
      ],
    },
    {
      sectionTitle: 'How DOM API is organized behind the scenes',
      sectionSource:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/How_the_DOM_API_is_organized_behind_the_scenes.html',
      sectionSummary: [
        'The DOM API is made up of the interfaces that define the functionality of each of the elements in HTML',
        'The majority of the interfaces that comprise the HTML DOM API map almost one-to-one to individual HTML elements, or to a small group of elements with similar functionality',
      ],
    },
    {
      sectionTitle: 'DOM Node Types (Node vs Element)',
      sectionSource:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/DOM_Node_Types_(Node_vs_Element).html',
      sectionSummary: [
        'Nodes are the objects that make up the DOM, everything in the DOM is a node',
        'A DOM document consists of a hierarchy of nodes. Each node can have a parent and/or children',
        'Not just HTML tags are treated as nodes objects, but also text, comments etc. Even whitespace that you have for readability reasons in an HTML document is treated as a node',
        'DOM Nodes are just JavaScript objects in the end - i.e. reference values. Methods like <code>querySelector()</code> or <code>querySelectorAll()</code> return the object references (addresses)',
        'Live Node Lists vs Static Node Lists',
      ],
    },
    {
      sectionTitle: 'HTML Attributes vs DOM Properties',
      sectionSource:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTML_attributes_vs_DOM_properties.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'DOM Traversing & select DOM elements',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Introduction to DOM Traversing',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Introduction_to_DOM_Traversing.html',
        },
        {
          articleTitle: 'document.documentElement',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.documentElement.html',
        },
        {
          articleTitle: 'document.head',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.head.html',
        },
        {
          articleTitle: 'document.body',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.body.html',
        },
        {
          articleTitle: 'document.getElementById()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.getElementById.html',
        },
        {
          articleTitle: 'getElementsByTagName() -> (document/element)',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/getElementsByTagName.html',
        },
        {
          articleTitle: 'getElementsByClassName() -> (document/element)',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/getElementsByClassName.html',
        },
        {
          articleTitle: 'querySelector() -> (document/element)',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/querySelector.html',
        },
        {
          articleTitle: 'querySelectorAll() -> (document/element)',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/querySelectorAll.html',
        },
        {
          articleTitle: 'Element.children',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.children.html',
        },
        {
          articleTitle: 'Node.childNodes',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.childNodes.html',
        },
        {
          articleTitle: 'Element.firstElementChild',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.firstElementChild.html',
        },
        {
          articleTitle: 'Element.lastElementChild',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.lastElementChild.html',
        },
        {
          articleTitle: 'Node.firstChild',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.firstChild.html',
        },
        {
          articleTitle: 'Node.lastChild',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.lastChild.html',
        },
        {
          articleTitle: 'Element.closest()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.closest.html',
        },
        {
          articleTitle: 'Node.parentElement',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.parentElement.html',
        },
        {
          articleTitle: 'Node.parentNode',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.parentNode.html',
        },
        {
          articleTitle: 'Element.previousElementSibling',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.previousElementSibling.html',
        },
        {
          articleTitle: 'Element.nextElementSibling',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.nextElementSibling.html',
        },
        {
          articleTitle: 'Node.previousSibling',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.previousSibling.html',
        },
        {
          articleTitle: 'Node.nextSibling',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.nextSibling.html',
        },
      ],
    },
    {
      sectionTitle: 'Tips & tricks for create, insert and remove elements',
      sectionSource:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Tips_for_create_insert_and_remove_elements.html',
      sectionSummary: [
        `If you have a created or selected element, either because you selected it in the DOM with <code>querySelector()</code> or you created it with <code>createElement()</code> and that element is already part of the DOM, so it is already rendered, if you then insert it somewhere else in the DOM, that element is NOT COPIED or anything like that, instead the existing element is DETACHED from the place where it was and moved to the new place. This actually makes a lot of sense since objects are reference values as you learned, and the DOM objects you're working are normal objects in the end, and therefore if we do something with them and we add them somewhere else, we always work with the same object`,
        `If you want a brand new element, you have to create a brand new one with <code>document.createElement()</code>. Just keep in mind that inserting the same element multiple times will move it, because we're working with objects and not with some automatically copied things`,
        `Important (no matter how you insert elements): whenever you insert elements, you MOVE the element to that new place, if you already inserted it before. It's NOT COPIED (you can copy an element via <code>Node.cloneNode(true)</code> though)`,
      ],
    },
    {
      sectionTitle: 'Create, insert & remove DOM elements',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Element.innerHTML',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.innerHTML.html',
        },
        {
          articleTitle: 'Element.insertAdjacentHTML()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.insertAdjacentHTML.html',
        },
        {
          articleTitle: 'document.createElement()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.createElement.html',
        },
        {
          articleTitle: 'Element.append()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.append.html',
        },
        {
          articleTitle: 'Node.appendChild()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.appendChild.html',
        },
        {
          articleTitle: 'Element.prepend()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.prepend.html',
        },
        {
          articleTitle: 'Node.insertBefore()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.insertBefore.html',
        },
        {
          articleTitle: 'Element.before()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.before.html',
        },
        {
          articleTitle: 'Element.after()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.after.html',
        },
        {
          articleTitle: 'Element.insertAdjacentElement()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.insertAdjacentElement.html',
        },
        {
          articleTitle: 'Element.replaceWith()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.replaceWith.html',
        },
        {
          articleTitle: 'Node.replaceChild()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.replaceChild.html',
        },
        {
          articleTitle: 'Element.remove()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.remove.html',
        },
        {
          articleTitle: 'Node.removeChild()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.removeChild.html',
        },
        {
          articleTitle: 'Node.cloneNode()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.cloneNode.html',
        },
      ],
    },
    {
      sectionTitle: 'Text, Styles, Classes & Attributes',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'HTMLElement.innerText',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.innerText.html',
        },
        {
          articleTitle: 'Node.textContent',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.textContent.html',
        },
        {
          articleTitle: 'Element.insertAdjacentText()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.insertAdjacentText.html',
        },
        {
          articleTitle: 'HTMLElement.style',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.style.html',
        },
        {
          articleTitle: 'Element.className',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.className.html',
        },
        {
          articleTitle: 'Element.classList (add, remove, toggle, contains)',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.classList.html',
        },
        {
          articleTitle: 'Element.getAttribute()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.getAttribute.html',
        },
        {
          articleTitle: 'Element.setAttribute()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.setAttribute.html',
        },
        {
          articleTitle: 'Element.attributes',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.attributes.html',
        },
        {
          articleTitle: 'HTMLDataElement.value',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLDataElement.value.html',
        },
        {
          articleTitle: 'HTMLMediaElement.src',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLMediaElement.src.html',
        },
        {
          articleTitle: 'HTMLImageElement.alt',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLImageElement.alt.html',
        },
        {
          articleTitle: 'HTMLAnchorElement.href',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLAnchorElement.href.html',
        },
        {
          articleTitle: 'HTMLElement.hidden',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.hidden.html',
        },
        {
          articleTitle: 'Element.tagName',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.tagName.html',
        },
        {
          articleTitle: 'HTMLElement.dataset',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.dataset.html',
        },
        {
          articleTitle: 'HTMLSelectElement.disabled',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLSelectElement.disabled.html',
        },
      ],
    },
    {
      sectionTitle: 'Other methods & properties',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Element.getBoundingClientRect()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.getBoundingClientRect.html',
        },
        {
          articleTitle: 'Element.clientHeight',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.clientHeight.html',
        },
        {
          articleTitle: 'Element.clientWidth',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.clientWidth.html',
        },
        {
          articleTitle: 'HTMLElement.offsetHeight',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.offsetHeight.html',
        },
        {
          articleTitle: 'Element.scrollTo()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.scrollTo.html',
        },
        {
          articleTitle: 'Element.scrollBy()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.scrollBy.html',
        },
        {
          articleTitle: 'Element.scrollIntoView()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Element.scrollIntoView.html',
        },
        {
          articleTitle: 'HTMLElement.blur()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.blur.html',
        },
        {
          articleTitle: 'HTMLElement.focus()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLElement.focus.html',
        },
        {
          articleTitle: 'Node.isEqualNode()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.isEqualNode.html',
        },
        {
          articleTitle: 'Node.nodeValue',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.nodeValue.html',
        },
        {
          articleTitle: 'Node.contains()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Node.contains.html',
        },
        {
          articleTitle: 'document.createRange().createContextualFragment()',
          articleSource: '',
        },
        {
          articleTitle: 'HTMLInputElement.select()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLInputElement.select.html',
        },
        {
          articleTitle: 'HTMLTemplateElement.content',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTMLTemplateElement.content.html',
        },
        {
          articleTitle: 'document.importNode()',
          articleSource:
            '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/document.importNode.html',
        },
      ],
    },
    {
      sectionTitle: 'Changing Multiple Elements',
      sectionSource: '',
      sectionSummary: [],
    },
  ],
};

const domEvents = {
  title: 'Web APIs <br> Document Object Model (DOM) <br> - Events -',
  sections: [
    {
      sectionTitle: 'Introduction to Events',
      sectionSource:
        '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Introduction_to_events.html',
      sectionSummary: [
        'Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them',
        'In the case of the Web, events are fired inside the browser window, and tend to be attached to a specific item that resides in it',
        'Web events are NOT part of the core JavaScript language — they are defined as part of the APIs built into the browser',
        'To react to an event, you attach an event handler to it. Event handler is a block of code that runs when the event fires',
        'Event listeners vs Event handlers: the listener listens out for the event happening, and the handler is the code that is run in response to it happening',
        'Supported Event Types',
      ],
    },
    {
      sectionTitle: 'Event handling',
      sectionSource:
        '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Event_handling.html',
      sectionSummary: [
        '2 ways NOT to add events: event handler properties & inline event handlers',
        'The recommended mechanism for register event listeners: <code>addEventListener()</code>',
        '<code>addEventListener()</code> method allows you to add many events to the same element, without overwriting existing events',
        '<code>addEventListener()</code> method allows you to add event listeners on any HTML DOM object, such as HTML elements, the HTML document, the window object, or other objects that support events, like the <code>xmlHttpRequest</code> object',
        'The value of <code>this</code> within the handler function',
        'Getting data into and out of an event listener',
      ],
    },
    {
      sectionTitle: 'The Event Object',
      sectionSource:
        '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/The_Event_object.html',
      sectionSummary: [
        `Sometimes, inside an event handler function, you'll see a parameter specified with a name such as <code>event</code>, <code>evt</code> or <code>e</code>. This is called the Event object, and it is automatically passed to event handlers to provide extra features and information`,
        'The parameter <code>e</code>/<code>evt</code>/<code>event</code> is an Event object, and it represents the event being fired which caused your function to be executed',
        'The parameter <code>e</code>/<code>evt</code>/<code>event</code> only exists when an event happens',
        'Most event objects have a standard set of properties and methods available on the Event object, but some event objects add extra properties that are relevant to that particular type of event',
        'When an event occurs in HTML, the event belongs to a certain <code>event</code> object. All <code>event</code> objects are based on the Event object',
        'Submit event & <code>e.preventDefault()</code>',
        '<code>Event.target</code> vs <code>Event.currentTarget</code>',
      ],
    },
    {
      sectionTitle: 'Event Propagation & Delegation',
      sectionSource:
        '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Event_propagation_&_delegation.html',
      sectionSummary: [
        'Event propagation is a way of defining the element order when an event occurs',
        'Event propagation: capturing phase, target phase & bubbling phase',
        'Event bubbling and capture are terms that describe phases in how the browser handles events targeted at nested elements',
        "In capturing phase the outer most element's event is handled first and then the inner",
        "In bubbling phase the inner most element's event is handled first and then the outer",
        'With the <code>addEventListener()</code> method you can specify the propagation type by using the <code>useCapture</code> parameter: <code>false</code> - bubbling phase vs <code>true</code> - capturing phase',
        'Stop propagation with <code>e.stopPropagation()</code>',
        'Not all events bubble',
      ],
    },
    {
      sectionTitle: 'Types of Events',
      sectionSource:
        '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events.html',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'Element: <code>click</code>',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___click.html',
        },
        {
          articleTitle: 'Element: <code>blur</code>',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___blur.html',
        },
        {
          articleTitle: 'Element: <code>wheel</code>',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___wheel.html',
        },
        {
          articleTitle: 'Document & Element: <code>scroll</code>',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___scroll.html',
        },
        {
          articleTitle:
            'Mouse Events: <code>mouseout</code>, <code>mouseover</code>, <code>mouseenter</code> & <code>mousemove</code>',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___mouse.html',
        },
        {
          articleTitle:
            'Keyboard Events: <code>keyup</code>, <code>keydown</code>, <code>keypress</code>(deprecated)',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___keyboard.html',
        },
        {
          articleTitle: 'HTMLElement: <code>input</code>',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___input.html',
        },
        {
          articleTitle: 'HTMLElement: <code>change</code>',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___change.html',
        },
        {
          articleTitle: 'HTMLFormElement: <code>submit</code>',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___submit.html',
        },
        {
          articleTitle: 'Window: <code>hashchange</code>',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___hashchange.html',
        },
        {
          articleTitle: 'Window: <code>load</code>',
          articleSource:
            '/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___load.html',
        },
      ],
    },
  ],
};

const otherWebAPIs = {
  title: 'Other Web APIs',
  sections: [
    {
      sectionTitle: 'The Intersection Observer API',
      sectionSource:
        '/src/markdowns/14_Others_Web_APIs/Intersection_Observer_API.html',
      sectionSummary: [
        "The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element, or with a top-level document's viewport",
        'The Intersection Observer API lets code register a callback function that is executed whenever an element they wish to monitor enters or exits another element (or the viewport)',
      ],
    },
    {
      sectionTitle: 'Navigator',
      sectionSource: '/src/markdowns/14_Others_Web_APIs/Navigator.html',
      sectionSummary: [
        'The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities',
        '<code>navigator.language</code>',
        '<code>navigator.languages</code>',
        '<code>navigator.geolocation.getCurrentPosition()</code>',
        '<code>navigator.geolocation.watchPosition()</code>',
        '<code>navigator.geolocation.clearWatch()</code>',
      ],
    },
    {
      sectionTitle: 'Storage',
      sectionSource: '/src/markdowns/14_Others_Web_APIs/Storage.html',
      sectionSummary: [
        "The Storage interface provides access to a particular domain's session or local storage",
        'The <code>localStorage</code> read-only property of the window interface allows you to access a Storage object',
        '<code>localStorage.setItem()</code>',
        '<code>JSON.stringify()</code>',
        '<code>localStorage.getItem()</code>',
        '<code>JSON.parse()</code>',
        '<code>localStorage.removeItem()</code>',
        '<code>localStorage.clear()</code>',
      ],
    },
    {
      sectionTitle: 'Location',
      sectionSource: '/src/markdowns/14_Others_Web_APIs/Location.html',
      sectionSummary: [
        'The <code>window.location</code> & <code>document.location</code> read-only properties returns a Location object, which contains information about the URL of the document and provides methods for changing that URL and loading another URL',
        '<code>window.location.href</code>',
        '<code>window.location.pathname</code>',
        '<code>window.location.hash</code>',
        '<code>window.location.reload()</code>',
      ],
    },
    {
      sectionTitle: 'History',
      sectionSource: '/src/markdowns/14_Others_Web_APIs/History.html',
      sectionSummary: [
        'The History object allows manipulation of the browser session history',
        '<code>window.history.pushState()</code>',
      ],
    },
    {
      sectionTitle: 'AbortController',
      sectionSource: '/src/markdowns/14_Others_Web_APIs/AbortController.html',
      sectionSummary: [
        'The <code>AbortController</code> interface represents a controller object that allows you to <i>abort one or more Web requests as and when desired</i>.',
        'You can create a new <code>AbortController</code> object using the <code>AbortController()</code> constructor.',
        `Instance properties & methods:
        <br>- the <code>signal</code> property: read-only property which can be used to communicate with/abort a DOM request as desired
        <br>- the <code>abort()</code> method: aborts a DOM request before it has completed. This is able to abort fetch requests, the consumption of any response bodies, or streams
        `,
        'When <code>abort()</code> is called, the <code>fetch()</code> promise rejects with an <code>Error</code> of type <code>DOMException</code>, with name <i><code>AbortError</code></i>.',
      ],
    },
    {
      sectionTitle: 'window',
      sectionSource: '',
      sectionSummary: [],
      sectionArticles: [
        {
          articleTitle: 'window.open()',
          articleSource: '/src/markdowns/14_Others_Web_APIs/window.open.html',
        },
        {
          articleTitle: 'window.pageXOffset vs window.scrollX',
          articleSource:
            '/src/markdowns/14_Others_Web_APIs/window.scrollX.html',
        },
        {
          articleTitle: 'window.pageYOffset vs window.scrollY',
          articleSource:
            '/src/markdowns/14_Others_Web_APIs/window.scrollY.html',
        },
        {
          articleTitle: 'window.scrollTo()',
          articleSource:
            '/src/markdowns/14_Others_Web_APIs/window.scrollTo.html',
        },
        {
          articleTitle: 'window.innerHeight',
          articleSource:
            '/src/markdowns/14_Others_Web_APIs/window.innerHeight.html',
        },
        {
          articleTitle: 'window.getComputedStyle()',
          articleSource:
            '/src/markdowns/14_Others_Web_APIs/window.getComputedStyle.html',
        },
      ],
    },
  ],
};

const modulesAndTooling = {
  title: 'Modern JavaScript Development: Modules and Tooling',
  sections: [
    {
      sectionTitle: 'Introducing to JavaScript Modules',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Introducing_to_JavaScript_modules.html',
      sectionSummary: [
        'Splitting Code in a Sub-optimal Way',
        'The Module Pattern with IIFE',
        'CommonJS & AMD Modules',
        'Exporting and importing in native ES6 Modules',
        'Named exports/imports in ES6 Modules',
        'Default exports/imports in ES6 Modules',
        'Mixed imports in ES6 Modules',
        'Imports are a Live Connection to Exports',
        'When Does Module Code Execute?',
        'Module Scope & "globalThis" object',
      ],
    },
    {
      sectionTitle: 'Introduction to NPM',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Introduction_to_NPM.html',
      sectionSummary: [
        'Project Limitations & Why We Need Tools',
        'Setting Up a npm Project',
        'Working with npm Packages',
        'Using Third Party Packages with npm',
      ],
    },
    {
      sectionTitle: 'Working with JavaScript Libraries',
      sectionSource: '',
      sectionSummary: [
        'What & Why',
        'Adding Libraries',
        'Example: Axios Library & Http Requests',
      ],
    },
    {
      sectionTitle: 'Bundling With Parcel and NPM Scripts',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Bundling_with_Parcel_and_NPM_Scripts.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Configuring Babel and Polyfilling',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Configuring_Babel_and_Polyfilling.html',
      sectionSummary: [
        'Compile your modern JavaScript code back to ES5 code with Babel',
        'What Is "Browser Support" About?',
        'Determining Browser Support For A JavaScript Feature',
        'Solution: Feature Detection + Fallback Code',
        'Solution: Using Polyfills',
        'Solution: Transpiling Code',
        'Improvement: Automatically Detect + Add Polyfills',
      ],
    },
    {
      sectionTitle: 'Version control with Git',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Version_control_with_Git.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Model-View-Controller (MVC) Arhitecture',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Model_View_Controller_(MVC)_Arhitecture.html',
      sectionSummary: [
        'Why we worry about software arhitecture?',
        'The perfect architecture (Structure, Maintainability, Expandability)',
        'Components of any arhitecture',
        'How the MVC architecture works in JavaScript',
      ],
    },
    {
      sectionTitle: 'Refactoring Our Code: The DRY Principle',
      sectionSource: '',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Prettier',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Prettier.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Terminal commands',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Terminal_commands.html',
      sectionSummary: [],
    },
    {
      sectionTitle: 'Markdowns',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Markdowns.html',
      sectionSummary: [],
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
