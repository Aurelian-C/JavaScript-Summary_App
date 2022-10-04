const browserEngineAndRuntime = {
  title: 'JavaScript in the Browser: Engine & Runtime',
  sections: [
    {
      sectionTitle: 'Javascript Engine (part 1)',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Engine1.html',
      sectionArticles: [
        {
          articleTitle: 'JavaScript language vs Computer language',
          articleSource: '',
        },
        {
          articleTitle: 'Interpreter and Compiler',
          articleSource: '',
        },
        {
          articleTitle:
            'JIT Compilers (Just In Time Compilers) & Optimized code',
          articleSource: '',
        },
        {
          articleTitle: 'Is JavaScript an interpreted language?',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Javascript Engine (part 2)',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Engine2.html',
      sectionArticles: [
        {
          articleTitle: 'Memory Heap & Call Stack',
          articleSource: '',
        },
        {
          articleTitle: 'Call Stack & Stack Overflow',
          articleSource: '',
        },
        {
          articleTitle:
            'Memory Heap & JavaScript is a Garbage Collection Language & Memory Leaks',
          articleSource: '',
        },
        {
          articleTitle:
            'JavaScript is a Single Threaded Programming Language (Synchronous Language) and the JavaScript Engine have only a single Call Stack & Memory Heap',
          articleSource: '',
        },
        {
          articleTitle:
            'JavaScript Engine is synchronous, it executes code in order, and must finish executing a line of code before moving onto the next one',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Javascript Runtime',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Runtime.html',
      sectionArticles: [
        {
          articleTitle: 'JavaScript Runtime & Asynchronous code',
          articleSource: '',
        },
        {
          articleTitle:
            'JavaScript Runtime provides asynchronous Web APIs, a way of communicating with the JavaScript Engine',
          articleSource: '',
        },
        {
          articleTitle: 'Web APIs & global window object',
          articleSource: '',
        },
        {
          articleTitle: 'Callback Queue vs Job/Microtask Queue & Event Loop',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Execution Context and the Call Stack',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Execution_Context_and_The_Call_Stack.html',
      sectionArticles: [
        {
          articleTitle:
            'Global execution context (global "window" object & "this" keyword)',
          articleSource: '',
        },
        {
          articleTitle:
            'Function execution context ("arguments" & "this" keyword)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Lexical Environment',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Lexical_Environment.html',
      sectionArticles: [
        {
          articleTitle:
            'Where we write code determines the available variables',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Variable Environment',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Variable_Environment.html',
      sectionArticles: [
        {
          articleTitle: 'Variable Environment & Scope Chain',
          articleSource: '',
        },
        {
          articleTitle: 'Global Scope & Local Scope',
          articleSource: '',
        },
        {
          articleTitle:
            'Function Scope (var, let & const) & Block Scope (let & const)',
          articleSource: '',
        },
        {
          articleTitle: 'Variable Environment & Leakage of Global Variables',
          articleSource: '',
        },
        {
          articleTitle:
            'Global variables & polluting the global namespace (having too much data on our global execution environment)',
          articleSource: '',
        },
        {
          articleTitle: 'Global variables & variable collisions',
          articleSource: '',
        },
        {
          articleTitle:
            'Variable collisions & Immediately Invoked Function Expressions (IIFE) & JavaScript Modules',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Hoisting',
      sectionSource: '/src/markdowns/01_Browser_Engine_&_Runtime/Hoisting.html',
      sectionArticles: [
        {
          articleTitle:
            'Compiler appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code',
          articleSource: '',
        },
        {
          articleTitle:
            'Hoisting is happen on every execution context: global & function',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'What is JavaScript?',

      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/What_is_JavaScript.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Activating Strict Mode',
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Activating_Strict_Mode.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Efficient Script Loading: defer & async',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
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
      sectionArticles: [
        {
          articleTitle: 'Static vs Dynamically Typed languages',
          articleSource: '',
        },
        {
          articleTitle: 'Strongly vs Weakly Typed languages',
          articleSource: '',
        },
        {
          articleTitle: 'Primitives vs References Types',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Primitives vs References Types',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Primitives_vs_Objects_(Primitive_vs_Reference_Types).html',
      sectionArticles: [
        {
          articleTitle:
            'Primitive Types (Numbers, Strings, Booleans, null, undefined, Symbol, BigInt)',
          articleSource: '',
        },
        {
          articleTitle: 'Reference Types (Arrays, Objects, Functions)',
          articleSource: '',
        },
        {
          articleTitle:
            'A variable that stores a reference object only stores a pointer, so the address of that place in memory, and not the value itself',
          articleSource: '',
        },
        {
          articleTitle: 'Pass by Value vs Pass by Reference',
          articleSource: '',
        },
        {
          articleTitle: 'Comparing two objects for equality',
          articleSource: '',
        },
        {
          articleTitle:
            'Each object has its own reference location in memory, even is a nested object',
          articleSource: '',
        },
        {
          articleTitle: 'Shallow vs Deep Objects Copy',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Type Coercion',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Type_coercion.html',
      sectionArticles: [
        {
          articleTitle: 'Type Coercion vs Type Conversion',
          articleSource: '',
        },
        {
          articleTitle: 'Implicit and Explicit Conversion',
          articleSource: '',
        },
        {
          articleTitle: 'Type Coercion for Primitive values',
          articleSource: '',
        },
        {
          articleTitle: 'Type Coercion for Objects',
          articleSource: '',
        },
        {
          articleTitle: 'Truthy & Falsy Values',
          articleSource: '',
        },
        {
          articleTitle:
            "One operator that doesn't trigger implicit type coercion is Strict Equality Operator ===",
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Introduction to Variables',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Introduction_to_Variables.html',
      sectionArticles: [
        {
          articleTitle: 'Declaring a variable',
          articleSource: '',
        },
        {
          articleTitle: 'Initializing a variable',
          articleSource: '',
        },
        {
          articleTitle: 'Variable naming rules',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'var',
      sectionSource: '/src/markdowns/02_JavaScript_Types_&_Variables/var.html',
      sectionArticles: [
        {
          articleTitle: '"var" & hoisting',
          articleSource: '',
        },
        {
          articleTitle: '"var" is only function scoped, NOT block scoped',
          articleSource: '',
        },
        {
          articleTitle: '"var" can be redeclared without trigger an error',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'let',
      sectionSource: '/src/markdowns/02_JavaScript_Types_&_Variables/let.html',
      sectionArticles: [
        {
          articleTitle: '"let" & hoisting',
          articleSource: '',
        },
        {
          articleTitle: `"let" can't be used before it's declared`,
          articleSource: '',
        },
        {
          articleTitle: '"let" is function scoped & block scoped',
          articleSource: '',
        },
        {
          articleTitle: `"let" can't be redeclared like "var"`,
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'const',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/const.html',
      sectionArticles: [
        {
          articleTitle: '"const" & hoisting',
          articleSource: '',
        },
        {
          articleTitle: `"const" can't be used before it's declared`,
          articleSource: '',
        },
        {
          articleTitle: '"const" is function scoped & block scoped',
          articleSource: '',
        },
        {
          articleTitle: `"const" must be initialized when it's declared`,
          articleSource: '',
        },
        {
          articleTitle: `"const" can't be changed through reassignment`,
          articleSource: '',
        },
        {
          articleTitle: `"const" can't be redeclared like "var"`,
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Differences between var, let & const',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Differences_between_var_let_&_const.html',
      sectionArticles: [
        {
          articleTitle: 'Declaration, Initialization & Hoisting differences',
          articleSource: '',
        },
        {
          articleTitle: 'Scope differences',
          articleSource: '',
        },
        {
          articleTitle:
            'Duplicate variable declarations (redeclarations) differences',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Statements vs Expressions',
      sectionSource:
        '/src/markdowns/02_JavaScript_Types_&_Variables/Statements_vs_Expressions.html',
      sectionArticles: [
        {
          articleTitle:
            'A statement is an instruction to perform a specific action: creating variables, functions, loops etc.',
          articleSource: '',
        },
        {
          articleTitle:
            'Any unit of code that can be evaluated to a value is an expression',
          articleSource: '',
        },
        {
          articleTitle: 'Expressions produce values',
          articleSource: '',
        },
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
      sectionArticles: [
        {
          articleTitle: 'Operator precedence',
          articleSource: '',
        },
        {
          articleTitle: 'Precedence & Associativity',
          articleSource: '',
        },
        {
          articleTitle: 'Note on grouping vs short-circuiting',
          articleSource: '',
        },
        {
          articleTitle: 'Operators & Type Coercion',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Expressions and operators',
      sectionSource:
        '/src/markdowns/03_Operators/Expressions_and_operators.html',
      sectionArticles: [
        {
          articleTitle: 'Primary expressions',
          articleSource: '',
        },
        {
          articleTitle: 'Left-hand-side expressions',
          articleSource: '',
        },
        {
          articleTitle: 'Increment and decrement',
          articleSource: '',
        },
        {
          articleTitle: 'Unary operators',
          articleSource: '',
        },
        {
          articleTitle: 'Arithmetic operators',
          articleSource: '',
        },
        {
          articleTitle: 'Relational operators',
          articleSource: '',
        },
        {
          articleTitle: 'Equality operators',
          articleSource: '',
        },
        {
          articleTitle: 'Binary logical operators',
          articleSource: '',
        },
        {
          articleTitle: 'Conditional (ternary) operator',
          articleSource: '',
        },
        {
          articleTitle: 'Assignment operators',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Assignment operators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Assignment operator (=)',
          articleSource: '/src/markdowns/03_Operators/Assignment_operator.html',
        },
        {
          articleTitle: 'Addition assignment (+=)',
          articleSource:
            '/src/markdowns/03_Operators/Addition_assignment_operator.html',
        },
        {
          articleTitle: 'Subtraction assignment (-=)',
          articleSource:
            '/src/markdowns/03_Operators/Subtraction_assignment_operator.html',
        },
      ],
    },
    {
      sectionTitle: 'Increment and decrement',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Increment operator (A++ <i>or</i> ++A)',
          articleSource: '/src/markdowns/03_Operators/Increment_operator.html',
        },
        {
          articleTitle: 'Decrement operator (A-- <i>or</i> --A)',
          articleSource: '/src/markdowns/03_Operators/Decrement_operator.html',
        },
      ],
    },
    {
      sectionTitle: 'Unary operators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'typeof',
          articleSource: '',
        },
        {
          articleTitle: 'Unary plus (+)',
          articleSource: '/src/markdowns/03_Operators/Unary_plus_operator.html',
        },
        {
          articleTitle: 'Unary negation (-)',
          articleSource:
            '/src/markdowns/03_Operators/Unary_negation_operator.html',
        },
      ],
    },
    {
      sectionTitle: 'Arithmetic operators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Addition operator (+)',
          articleSource: '/src/markdowns/03_Operators/Addition_operator.html',
        },
        {
          articleTitle: 'Subtraction operator (-)',
          articleSource:
            '/src/markdowns/03_Operators/Subtraction_operator.html',
        },
        {
          articleTitle: 'Division operator (/)',
          articleSource: '',
        },
        {
          articleTitle: 'Multiplication operator (*)',
          articleSource: '',
        },
        {
          articleTitle: 'Remainder operator (%)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Equality operators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Equality operator (==)',
          articleSource: '',
        },
        {
          articleTitle: 'Inequality operator (!=)',
          articleSource: '',
        },
        {
          articleTitle: 'Identity operator (===)',
          articleSource: '',
        },
        {
          articleTitle: 'Nonidentity operator (!==)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Relational operators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Less than operator (<)',
          articleSource: '',
        },
        {
          articleTitle: 'Greater than operator (>)',
          articleSource: '',
        },
        {
          articleTitle: 'Less than or equal operator (<=)',
          articleSource: '',
        },
        {
          articleTitle: 'Greater than or equal operator (>=)',
          articleSource: '',
        },
        {
          articleTitle: 'instanceof',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Binary logical operators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Logical AND (&&)',
          articleSource: '',
        },
        {
          articleTitle: 'Logical OR (||)',
          articleSource: '',
        },
        {
          articleTitle: 'Nullish coalescing operator (??)',
          articleSource:
            '/src/markdowns/03_Operators/Nullish_coalescing_operator.html',
        },
        {
          articleTitle: 'Short Circuiting with && and ||',
          articleSource: '/src/markdowns/03_Operators/Short_Circuiting.html',
        },
      ],
    },
    {
      sectionTitle: 'Optional Chaining operator (?.)',
      sectionSource:
        '/src/markdowns/03_Operators/Optional_Chaining_operator.html',
      sectionArticles: [
        {
          articleTitle: 'Optional chaining with objects',
          articleSource: '',
        },
        {
          articleTitle: 'Optional chaining with function calls',
          articleSource: '',
        },
        {
          articleTitle: 'Optional chaining with expressions',
          articleSource: '',
        },
        {
          articleTitle:
            'With nested structures, it is possible to use optional chaining multiple times',
          articleSource: '',
        },
        {
          articleTitle:
            'The Nullish Coalescing Operator may be used <i>after</i> optional chaining in order to build a default value when none was found',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: `The 'in' operator`,
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
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
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Boolean Logic',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Truthy & Falsy Values',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Beware when comparing Objects & Arrays for equality',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'if, else if, else Statements',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Nesting Conditionals',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'The Switch Statement',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'The Conditional (Ternary) Operator',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
  ],
};

const loops = {
  title: 'Loops & Iteration',
  sections: [
    {
      sectionTitle: 'Intro to Loops',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: '"for" Loop',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Infinite Loops!',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'for...of',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'for...in',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Intro to "while" Loop',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: '"break" and "continue" Keywords',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
  ],
};

const functionalProgramming = {
  title: 'Functional Programming (FP)',
  sections: [
    {
      sectionTitle: 'Functions introduction',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Functions are objects',
          articleSource: '',
        },
        {
          articleTitle: 'Function hoisting',
          articleSource: '',
        },
        {
          articleTitle: 'Functions vs Methods',
          articleSource: '',
        },
        {
          articleTitle: 'Function Expressions: Storing Functions in Variables',
          articleSource: '',
        },
        {
          articleTitle: 'Functions used as variable values',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function syntax',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Function Expressions vs Function Declarations',
          articleSource: '',
        },
        {
          articleTitle: 'Arrow Functions',
          articleSource: '',
        },
        {
          articleTitle: 'Anonymous Functions',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function return statement',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function parameters & arguments',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Parameter Rules',
          articleSource: '',
        },
        {
          articleTitle: 'Default Parameters',
          articleSource: '',
        },
        {
          articleTitle: 'The Arguments Object',
          articleSource: '',
        },
        {
          articleTitle:
            'Arguments are <i>Passed by Value</i> vs Objects are <i>Passed by Reference</i>',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Rest Parameters',
      sectionSource:
        '/src/markdowns/06_Functional_Programming_(FP)/Rest_parameter_and_functions.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Destructuring Parameters',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function invocation',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '"Direct" vs "Indirect" Function Execution',
          articleSource: '',
        },
        {
          articleTitle: 'Invoking a JavaScript Function',
          articleSource: '',
        },
        {
          articleTitle: 'Invoking a Function as a Function',
          articleSource: '',
        },
        {
          articleTitle: 'Tagged templates',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Spread syntax for function calls',
      sectionSource:
        '/src/markdowns/06_Functional_Programming_(FP)/Spread_syntax_and_function_calls.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function invocation & "this" keyword',
      sectionSource:
        '/src/markdowns/06_Functional_Programming_(FP)/Function_invocation_&_this_keyword.html',
      sectionArticles: [
        {
          articleTitle: `"this" is the object that the function is a property of`,
          articleSource: '',
        },
        {
          articleTitle: `The value of "this" is always set when the function is invoked, not when the function is declared`,
          articleSource: '',
        },
        {
          articleTitle: 'All functions are methods',
          articleSource: '',
        },
        {
          articleTitle:
            'Invoking a function as a global object (function without an owner object)',
          articleSource: '',
        },
        {
          articleTitle:
            'Invoking a function as a method (function with an owner object)',
          articleSource: '',
        },
        {
          articleTitle: 'Invoking a function with a Function Constructor',
          articleSource: '',
        },
        {
          articleTitle:
            'The 2 main benefits of "this": gives methods access to their object & execute the same function code for multiple objects',
          articleSource: '',
        },
        {
          articleTitle: `"this" acts as a placeholder for an object, and "this" we'll refer to whichever object called that function/method`,
          articleSource: '',
        },
        {
          articleTitle: `"this" & Dynamic Scope vs Lexical Scope`,
          articleSource: '',
        },
        {
          articleTitle: `"this" is not lexically scoped, it doesn't matter where "this" is write in our code, it matters how the function was called`,
          articleSource: '',
        },
        {
          articleTitle: `"this" & arrow functions `,
          articleSource: '',
        },
        {
          articleTitle: `Arrow functions don't have their own "this". It will lexically bound "this" to the surrounding object`,
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'The "this" keyword & call(), apply() and bind()',
      sectionSource:
        '/src/markdowns/06_Functional_Programming_(FP)/The_this_keyword_&_call__apply__and__bind.html',
      sectionArticles: [
        {
          articleTitle:
            'With call(), apply() and bind() you can assign a different "this" object when calling an existing function. Usually "this" refers to the current object (the calling object).',
          articleSource: '',
        },
        {
          articleTitle:
            'call() method calls the function with a given "this" value and arguments provided individually',
          articleSource: '',
        },
        {
          articleTitle:
            'apply() method is similar to call(), the difference is with apply() you use an array instead of providing arguments individually',
          articleSource: '',
        },
        {
          articleTitle:
            'bind() method creates a new function that, when called, has its "this" set to the provided value, with a given sequence of arguments preceding any provided when the new function is called',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Closures & local vs global variables',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Variable Lifetime',
          articleSource: '',
        },
        {
          articleTitle: 'Nested Functions',
          articleSource: '',
        },
        {
          articleTitle: 'Closures',
          articleSource: '',
        },
        {
          articleTitle: 'Closures & Memory Management',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle:
        'Self-Invoking functions / Immediately Invoked Function Expressions (IIFE)',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Arrow Functions',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Arrow Functions: Implicit Returns',
          articleSource: '',
        },
        {
          articleTitle: 'Arrow Functions and the "this" keyword',
          articleSource: '',
        },
        {
          articleTitle: 'Regular Functions vs Arrow Functions',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Higher-Order Functions',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Functions Accepting Callback Functions',
          articleSource: '',
        },
        {
          articleTitle:
            'A Function Can Be Passed As An Argument To Other Functions',
          articleSource: '',
        },
        {
          articleTitle: 'A Function Can Be Returned By Another Function',
          articleSource: '',
        },
        {
          articleTitle: 'A Function Can Be Assigned As A Value To A Variable',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Callbacks',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Advanced Function Concepts',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Pure Functions & Side-Effects',
          articleSource: '',
        },
        {
          articleTitle: 'Impure vs Pure Functions',
          articleSource: '',
        },
        {
          articleTitle: 'Factory Functions',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Scheme + Java',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Curry',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Partial Application',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Referential Transparency',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Compose',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Pipe',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
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
      sectionArticles: [
        {
          articleTitle: 'What are "Iterables" and "Array-like Objects"?',
          articleSource: '',
        },
        {
          articleTitle: 'Arrays vs Primitive Values',
          articleSource: '',
        },
        {
          articleTitle:
            'An array is a single object that contain multiple values stored in a list',
          articleSource: '',
        },
        {
          articleTitle: 'Creating arrays',
          articleSource: '',
        },
        {
          articleTitle: 'Array constructor',
          articleSource: '',
        },
        {
          articleTitle: 'Array literal notation',
          articleSource: '',
        },
        {
          articleTitle: 'Arrays length property',
          articleSource: '',
        },
        {
          articleTitle: 'Arrays indices',
          articleSource: '',
        },
        {
          articleTitle: 'Accessing and modifying array items',
          articleSource: '',
        },
        {
          articleTitle: 'Accessing every item / Iterating over arrays',
          articleSource: '',
        },
        {
          articleTitle: 'Arrays are reference types',
          articleSource: '',
        },
        {
          articleTitle: 'Nested / multidimensional arrays',
          articleSource: '',
        },
        {
          articleTitle: 'Which data can you store in arrays?',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Destructuring Arrays',
      sectionSource:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Destructuring_arrays.html',
      sectionArticles: [
        {
          articleTitle: 'What is destructuring?',
          articleSource: '',
        },
        {
          articleTitle: 'Binding and assignment',
          articleSource: '',
        },
        {
          articleTitle: 'Default values',
          articleSource: '',
        },
        {
          articleTitle: 'Skipping items',
          articleSource: '',
        },
        {
          articleTitle: 'Swapping variables',
          articleSource: '',
        },
        {
          articleTitle: 'Nested array destructuring',
          articleSource: '',
        },
        {
          articleTitle: 'Rest parameter & array destructuring',
          articleSource: '',
        },
        {
          articleTitle: 'Mixed destructuring',
          articleSource: '',
        },
        {
          articleTitle: 'Destructuring patterns with other syntaxes',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Spread syntax & array literals',
      sectionSource:
        '/src/markdowns/07_Data_structures___Arrays_&_Sets/Spread_syntax_and_arrays.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Rest Pattern in Arrays',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Array Prototype Methods',
      sectionSource: '',
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
      sectionArticles: [
        {
          articleTitle: '',

          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Data structures - Sets',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
  ],
};

const objectsAndMaps = {
  title: 'Data structures: Objects & Maps',
  sections: [
    {
      sectionTitle: 'Introducing JavaScript objects',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: "What's an object?",
          articleSource: '',
        },
        {
          articleTitle: 'Objects vs Primitive Values',
          articleSource: '',
        },
        {
          articleTitle: 'Creating an object - Object literals',
          articleSource: '',
        },
        {
          articleTitle: 'Creating an object - Constructors',
          articleSource: '',
        },
        {
          articleTitle: "Accesing object's properties (. vs [] notation)",
          articleSource: '',
        },
        {
          articleTitle: 'Special Key Names & Square Bracket Property Access',
          articleSource: '',
        },
        {
          articleTitle:
            'Dynamic Property Access & Setting Properties Dynamically',
          articleSource: '',
        },
        {
          articleTitle: 'Adding, modifying & deleting properties',
          articleSource: '',
        },
        {
          articleTitle: 'Shorthand Property Syntax',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: `Object methods and the 'this' keyword`,
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Spread syntax & object literals',
      sectionSource:
        '/src/markdowns/08_Data_structures___Objects_&_Maps/Spread_syntax_and_object_literals.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Rest Pattern in Objects',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Destructuring Objects',
      sectionSource:
        '/src/markdowns/08_Data_structures___Objects_&_Maps/Destructuring_objects.html',
      sectionArticles: [
        {
          articleTitle: 'What is destructuring?',
          articleSource: '',
        },
        {
          articleTitle: 'Why to use object destructuring?',
          articleSource: '',
        },
        {
          articleTitle: 'Binding and assignment',
          articleSource: '',
        },
        {
          articleTitle: 'Default values',
          articleSource: '',
        },
        {
          articleTitle: 'Using different variable names',
          articleSource: '',
        },
        {
          articleTitle: 'Nested object destructuring',
          articleSource: '',
        },
        {
          articleTitle: 'Extracting a dynamic name property',
          articleSource: '',
        },
        {
          articleTitle: 'Rest parameter & object destructuring',
          articleSource: '',
        },
        {
          articleTitle: 'Mixed destructuring',
          articleSource: '',
        },
        {
          articleTitle: 'Destructuring patterns with other syntaxes',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Object Prototype Methods',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'toString()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Object Static Methods',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Object.keys()',
          articleSource: '',
        },
        {
          articleTitle: 'Object.values()',
          articleSource: '',
        },
        {
          articleTitle: 'Object.entries()',
          articleSource: '',
        },
        {
          articleTitle: 'Object.fromEntries() vs Object.entries()',
          articleSource: '',
        },
        {
          articleTitle: 'Object.assign()',
          articleSource: '',
        },
        {
          articleTitle: 'Object.freeze()',
          articleSource: '',
        },
        {
          articleTitle: 'Object.create()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Object descriptors',
      sectionSource: '',
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
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
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
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'What is "Object-Oriented Programming"?',
          articleSource: '',
        },
        {
          articleTitle: 'OOP characteristics',
          articleSource: '',
        },
        {
          articleTitle: '4 fundamental principles of OOP',
          articleSource: '',
        },
        {
          articleTitle: 'Traditional OOP (Classes and Instances)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'OOP in Javascript',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle:
            'Classical OOP: Classes vs OOP in Javascript: Prototypes',
          articleSource: '',
        },
        {
          articleTitle: 'Prototypal Inheritance & The Prototype Chain',
          articleSource: '',
        },
        {
          articleTitle: 'Prototypes and inheritance',
          articleSource: '',
        },
        {
          articleTitle: 'Setting a prototype',
          articleSource: '',
        },
        {
          articleTitle: 'The Prototype Chain and the Global Object',
          articleSource: '',
        },
        {
          articleTitle: 'Shadowing properties',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Constructor Functions',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Syntax',
          articleSource: '',
        },
        {
          articleTitle: 'The prototype property',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'ES6 Classes',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Defining classes',
          articleSource: '',
        },
        {
          articleTitle: 'Class body',
          articleSource: '',
        },
        {
          articleTitle: 'Constructor method',
          articleSource: '',
        },
        {
          articleTitle: 'Classes & Prototypes',
          articleSource: '',
        },
        {
          articleTitle: 'Prototype methods',
          articleSource: '',
        },
        {
          articleTitle: 'Static methods and properties',
          articleSource: '',
        },
        {
          articleTitle: 'Setters and Getters',
          articleSource: '',
        },
        {
          articleTitle: 'Protected Properties and Methods',
          articleSource: '',
        },
        {
          articleTitle: 'Private Class Fields and Methods',
          articleSource: '',
        },
        {
          articleTitle: 'Chaining Methods',
          articleSource: '',
        },
        {
          articleTitle: '"super" keyword',
          articleSource: '',
        },
        {
          articleTitle: '"new" keyword',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Object.create()',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle:
        'More real inheritance than Prototypal Inheritance (Child class and Parent class)',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Prototypes and inheritance',
          articleSource: '',
        },
        {
          articleTitle: 'Inheritance Between "Classes": Constructor Functions',
          articleSource: '',
        },
        {
          articleTitle: 'Inheritance Between "Classes": ES6 Classes',
          articleSource: '',
        },
        {
          articleTitle: 'Inheritance Between "Classes": Object.create',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Standard build-in objects',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Prototypal Inheritance on Built-In Objects',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
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
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Introducing Regular Expressions ("RegEx")',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'String',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Template literals (Template strings)',
          articleSource: '',
        },
        {
          articleTitle: 'indexOf()',
          articleSource: '',
        },
        {
          articleTitle: 'lastIndexOf()',
          articleSource: '',
        },
        {
          articleTitle: 'slice()',
          articleSource: '',
        },
        {
          articleTitle: 'toLowerCase()',
          articleSource: '',
        },
        {
          articleTitle: 'toUpperCase()',
          articleSource: '',
        },
        {
          articleTitle: 'trim()',
          articleSource: '',
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
          articleSource: '',
        },
        {
          articleTitle: 'startsWith()',
          articleSource: '',
        },
        {
          articleTitle: 'endsWith()',
          articleSource: '',
        },
        {
          articleTitle: 'split()',
          articleSource: '',
        },
        {
          articleTitle: 'padStart()',
          articleSource: '',
        },
        {
          articleTitle: 'padEnd()',
          articleSource: '',
        },
        {
          articleTitle: 'repeat()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Number',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Number() & Addition operator (+)',
          articleSource: '',
        },
        {
          articleTitle: 'Number.parseInt()',
          articleSource: '',
        },
        {
          articleTitle: 'Number.parseFloat()',
          articleSource: '',
        },
        {
          articleTitle: 'Number.isNaN()',
          articleSource: '',
        },
        {
          articleTitle: 'Number.isFinite()',
          articleSource: '',
        },
        {
          articleTitle: 'Number.isInteger()',
          articleSource: '',
        },
        {
          articleTitle: 'Number.prototype.toFixed()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Math',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'max()',
          articleSource: '',
        },
        {
          articleTitle: 'min()',
          articleSource: '',
        },
        {
          articleTitle: 'round()',
          articleSource: '',
        },
        {
          articleTitle: 'ceil()',
          articleSource: '',
        },
        {
          articleTitle: 'floor()',
          articleSource: '',
        },
        {
          articleTitle: 'trunc()',
          articleSource: '',
        },
        {
          articleTitle: 'random()',
          articleSource: '',
        },
        {
          articleTitle: 'abs()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'BigInt',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Date',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'new Date()',
          articleSource: '',
        },
        {
          articleTitle: 'Date.now()',
          articleSource: '',
        },
        {
          articleTitle: 'getFullYear()',
          articleSource: '',
        },
        {
          articleTitle: 'getMonth()',
          articleSource: '',
        },
        {
          articleTitle: 'getDate()',
          articleSource: '',
        },
        {
          articleTitle: 'getDay()',
          articleSource: '',
        },
        {
          articleTitle: 'getHours()',
          articleSource: '',
        },
        {
          articleTitle: 'getMinutes()',
          articleSource: '',
        },
        {
          articleTitle: 'getSeconds()',
          articleSource: '',
        },
        {
          articleTitle: 'getTime() vs Convert a date to a number',
          articleSource: '',
        },
        {
          articleTitle: 'toISOString()',
          articleSource: '',
        },
        {
          articleTitle: 'toLocaleString()',
          articleSource: '',
        },
        {
          articleTitle: 'setFullYear()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Intl',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'DateTimeFormat()',
          articleSource: '',
        },
        {
          articleTitle: 'NumberFormat()',
          articleSource: '',
        },
        {
          articleTitle: 'navigator.language',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Error',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'new Error()',
          articleSource: '',
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
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Web APIs',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Microtask Queue (Job Queue)',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Task Queue (Callback Queue)',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Event Loop',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Timers',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'setTimeout()',
          articleSource: '',
        },
        {
          articleTitle: 'clearTimeout()',
          articleSource: '',
        },
        {
          articleTitle: 'setInterval()',
          articleSource: '',
        },
        {
          articleTitle: 'clearInterval()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Working with Http Requests',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'How The Web Works',
          articleSource: '',
        },
        {
          articleTitle: 'Sending a GET Request',
          articleSource: '',
        },
        {
          articleTitle: 'JSON Data & Parsing Data',
          articleSource: '',
        },
        {
          articleTitle: 'Promisifying Http Requests (with XMLHttpRequest)',
          articleSource: '',
        },
        {
          articleTitle: 'Sending Data with a POST Request',
          articleSource: '',
        },
        {
          articleTitle: 'Sending a DELETE Request',
          articleSource: '',
        },
        {
          articleTitle: 'Handling Errors',
          articleSource: '',
        },
        {
          articleTitle: 'Using the fetch() API',
          articleSource: '',
        },
        {
          articleTitle: 'POSTing Data with the fetch() API',
          articleSource: '',
        },
        {
          articleTitle: 'Adding Request Headers',
          articleSource: '',
        },
        {
          articleTitle: 'fetch() & Error Handling',
          articleSource: '',
        },
        {
          articleTitle: 'XMLHttpRequest vs fetch()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Intro to AJAX',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'JSON & XML',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'XMLHttpRequests: The Basics',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'const request = new XMLHttpRequest()',
          articleSource: '',
        },
        {
          articleTitle: 'request.open(‘GET’, ‘url’)',
          articleSource: '',
        },
        {
          articleTitle: 'request.send()',
          articleSource: '',
        },
        {
          articleTitle: 'request.addEventListener(‘load’, function)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'XMLHttpRequests: Chaining Requests',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Welcome to Callback Hell',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Promises and the Fetch API',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'fetch(‘url’)',
          articleSource: '',
        },
        {
          articleTitle: 'response.json()',
          articleSource: '',
        },
        {
          articleTitle: 'response.text()',
          articleSource: '',
        },
        {
          articleTitle:
            'fetch() will always return a promise that need to by handled by consuming it',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Consuming Promises',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '.then(callback function with ‘response’ parameter)',
          articleSource: '',
        },
        {
          articleTitle: 'returning a Promise with response.json()',
          articleSource: '',
        },
        {
          articleTitle: 'returning a Promise with response.text()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Chaining Multiple Promises',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'returning a Promise and handle it outside the chain',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Handling Rejected Promises',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '.catch(callback function with ‘error’ parameter)',
          articleSource: '',
        },
        {
          articleTitle: '.finally(callback function)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Throwing Custom Errors Manually',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'The "Error" Object',
          articleSource: '',
        },
        {
          articleTitle: 'throw new Error()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Building a Simple Promise',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle:
            'new Promise(function(resolve, reject) {      resolve(fulfilled value);  reject(rejected value)  })',
          articleSource: '',
        },
        {
          articleTitle: 'Wrap old callback based functions into Promises',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Consuming Promises with Async/Await',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '‘async’ funtions',
          articleSource: '',
        },
        {
          articleTitle: '‘await’ keyword',
          articleSource: '',
        },
        {
          articleTitle: 'An ‘async function’ will always return a promise',
          articleSource: '',
        },
        {
          articleTitle:
            'Store ‘await’ Promises results in variables like const',
          articleSource: '',
        },
        {
          articleTitle: 'async/ await vs "Raw Promises"',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Multiple Awaits',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Error Handling in Async Functions',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'try {} catch(error) {}',
          articleSource: '',
        },
        {
          articleTitle:
            'Rethrowing an error when you have multiple async funtions',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Returning Values from Async Functions',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'An async function always returns a Promise',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Parallel Vs. Sequential Requests',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Promise.all([ ])',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Other Promise Combinators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Promise.race([ ])',
          articleSource: '',
        },
        {
          articleTitle: 'Promise.allSettled([ ])',
          articleSource: '',
        },
        {
          articleTitle: 'Promise.any([ ])',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: `Top-Level ' await ' (ES2022)`,
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
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
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Document and Window Object',
          articleSource: '',
        },
        {
          articleTitle: "Understanding the DOM and how it's created",
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'DOM Node Types (Node vs Element)',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Live Node Lists vs Static Node Lists',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'HTML Attributes vs DOM Properties',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'DOM Traversing & select DOM elements',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Introduction to DOM Traversing',
          articleSource: '',
        },
        {
          articleTitle: 'document.documentElement',
          articleSource: '',
        },
        {
          articleTitle: 'document.head',
          articleSource: '',
        },
        {
          articleTitle: 'document.body',
          articleSource: '',
        },
        {
          articleTitle: 'getElementById()',
          articleSource: '',
        },
        {
          articleTitle: 'getElementsByTagName()',
          articleSource: '',
        },
        {
          articleTitle: 'getElementsByClassName()',
          articleSource: '',
        },
        {
          articleTitle: 'querySelector() (document/element)',
          articleSource: '',
        },
        {
          articleTitle: 'querySelectorAll() (document/element)',
          articleSource: '',
        },
        {
          articleTitle: 'children',
          articleSource: '',
        },
        {
          articleTitle: 'childNodes',
          articleSource: '',
        },
        {
          articleTitle: 'firstElementChild',
          articleSource: '',
        },
        {
          articleTitle: 'lastElementChild',
          articleSource: '',
        },
        {
          articleTitle: 'firstChild',
          articleSource: '',
        },
        {
          articleTitle: 'lastChild',
          articleSource: '',
        },
        {
          articleTitle: 'closest()',
          articleSource: '',
        },
        {
          articleTitle: 'parentElement',
          articleSource: '',
        },
        {
          articleTitle: 'parentNode',
          articleSource: '',
        },
        {
          articleTitle: 'previousElementSibling',
          articleSource: '',
        },
        {
          articleTitle: 'nextElementSibling',
          articleSource: '',
        },
        {
          articleTitle: 'previousSibling',
          articleSource: '',
        },
        {
          articleTitle: 'nextSibling',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Create, insert & remove DOM elements',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Introduction to create, insert and remove elements',
          articleSource: '',
        },
        {
          articleTitle: 'innerHTML',
          articleSource: '',
        },
        {
          articleTitle: 'insertAdjacentHTML()',
          articleSource: '',
        },
        {
          articleTitle: 'document.createElement()',
          articleSource: '',
        },
        {
          articleTitle: 'append()',
          articleSource: '',
        },
        {
          articleTitle: 'appendChild()',
          articleSource: '',
        },
        {
          articleTitle: 'prepend()',
          articleSource: '',
        },
        {
          articleTitle: 'insertBefore()',
          articleSource: '',
        },
        {
          articleTitle: 'before()',
          articleSource: '',
        },
        {
          articleTitle: 'after()',
          articleSource: '',
        },
        {
          articleTitle: 'insertAdjacentElement()',
          articleSource: '',
        },
        {
          articleTitle: 'replaceWith()',
          articleSource: '',
        },
        {
          articleTitle: 'replaceChild()',
          articleSource: '',
        },
        {
          articleTitle: 'remove()',
          articleSource: '',
        },
        {
          articleTitle: 'removeChild()',
          articleSource: '',
        },
        {
          articleTitle: 'cloneNode()',
          articleSource: '',
        },
        {
          articleTitle: 'Summary: Insert, Replace, Remove',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Text, Styles, Classes & Attributes',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'innerText',
          articleSource: '',
        },
        {
          articleTitle: 'textContent',
          articleSource: '',
        },
        {
          articleTitle: 'insertAdjacentText()',
          articleSource: '',
        },
        {
          articleTitle: 'style',
          articleSource: '',
        },
        {
          articleTitle: 'getComputedStyle()',
          articleSource: '',
        },
        {
          articleTitle: 'className',
          articleSource: '',
        },
        {
          articleTitle: 'classList (add, remove, toggle, contains)',
          articleSource: '',
        },
        {
          articleTitle: 'getAttribute()',
          articleSource: '',
        },
        {
          articleTitle: 'setAttribute()',
          articleSource: '',
        },
        {
          articleTitle: 'setProperty()',
          articleSource: '',
        },
        {
          articleTitle: 'attributes',
          articleSource: '',
        },
        {
          articleTitle: 'value',
          articleSource: '',
        },
        {
          articleTitle: 'src',
          articleSource: '',
        },
        {
          articleTitle: 'alt',
          articleSource: '',
        },
        {
          articleTitle: 'href',
          articleSource: '',
        },
        {
          articleTitle: 'hidden',
          articleSource: '',
        },
        {
          articleTitle: 'id',
          articleSource: '',
        },
        {
          articleTitle: 'tagName',
          articleSource: '',
        },
        {
          articleTitle: 'dataset',
          articleSource: '',
        },
        {
          articleTitle: 'disabled',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Other methods & properties',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'getBoundingClientRect()',
          articleSource: '',
        },
        {
          articleTitle: 'clientHeight',
          articleSource: '',
        },
        {
          articleTitle: 'clientWidth',
          articleSource: '',
        },
        {
          articleTitle: 'offsetHeight',
          articleSource: '',
        },
        {
          articleTitle: 'scrollTo()',
          articleSource: '',
        },
        {
          articleTitle: 'scrollBy()',
          articleSource: '',
        },
        {
          articleTitle: 'scrollIntoView()',
          articleSource: '',
        },
        {
          articleTitle: 'blur()',
          articleSource: '',
        },
        {
          articleTitle: 'focus()',
          articleSource: '',
        },
        {
          articleTitle: 'isEqualNode()',
          articleSource: '',
        },
        {
          articleTitle: 'nodeValue',
          articleSource: '',
        },
        {
          articleTitle: 'Node.contains()',
          articleSource: '',
        },
        {
          articleTitle: 'document.createRange().createContextualFragment()',
          articleSource: '',
        },
        {
          articleTitle: 'select()',
          articleSource: '',
        },
        {
          articleTitle: 'content',
          articleSource: '',
        },
        {
          articleTitle: 'importNode()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Changing Multiple Elements',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
  ],
};

const domEvents = {
  title: 'Document Object Model (DOM) <br>- Events -',
  sections: [
    {
      sectionTitle: 'Introduction to Events',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Different Ways of Listening to Events',
          articleSource: '',
        },
        {
          articleTitle: '2 Ways NOT to Add Events',
          articleSource: '',
        },
        {
          articleTitle: 'Supported Event Types',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'addEventListener() & removeEventListener()',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Event Handler Functions & "this" keyword',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'The Event Object',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'e.preventDefault()',
          articleSource: '',
        },
        {
          articleTitle: 'e.target',
          articleSource: '',
        },
        {
          articleTitle: 'e.currentTarget',
          articleSource: '',
        },
        {
          articleTitle: 'e.composedPath()',
          articleSource: '',
        },
        {
          articleTitle: 'e.stopPropagation()',
          articleSource: '',
        },
        {
          articleTitle: 'e.key',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Event Propagation & Delegation',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Bubbling',
          articleSource: '',
        },
        {
          articleTitle: 'Capturing',
          articleSource: '',
        },
        {
          articleTitle: 'Stop propagation with e.stopPropagation()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Types of Events',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'click',
          articleSource: '',
        },
        {
          articleTitle: 'keypress',
          articleSource: '',
        },
        {
          articleTitle: 'scroll',
          articleSource: '',
        },
        {
          articleTitle: 'mouseover vs mouseenter vs mousemove',
          articleSource: '',
        },
        {
          articleTitle: 'mouseout',
          articleSource: '',
        },
        {
          articleTitle: 'wheel',
          articleSource: `/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___wheel.html`,
        },
        {
          articleTitle: 'input',
          articleSource: '',
        },
        {
          articleTitle: 'change',
          articleSource: '',
        },
        {
          articleTitle: 'hashchange',
          articleSource: '',
        },
        {
          articleTitle: 'load',
          articleSource: '',
        },
        {
          articleTitle: 'blur',
          articleSource: `/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___blur.html`,
        },
      ],
    },
    {
      sectionTitle: 'Keyboard Events',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'keypress',
          articleSource: '',
        },
        {
          articleTitle: 'keyup',
          articleSource: '',
        },
        {
          articleTitle: 'keydown',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Form Events & PreventDefault',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Input & Change Events',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Passing Arguments to Event Handlers',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Events on Multiple Elements',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Lifecycle DOM Events',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
  ],
};

const otherWebAPIs = {
  title: 'Others Web APIs',
  sections: [
    {
      sectionTitle: 'The Intersection Observer API',
      sectionSource: `/src/markdowns/14_Others_Web_APIs/Intersection_Observer_API.html`,
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'navigator',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'navigator.language',
          articleSource: '',
        },
        {
          articleTitle: 'navigator.geolocation.getCurrentPosition()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'localStorage',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'localStorage.setItem()',
          articleSource: '',
        },
        {
          articleTitle: 'localStorage.getItem()',
          articleSource: '',
        },
        {
          articleTitle: 'localStorage.removeItem()',
          articleSource: '',
        },
        {
          articleTitle: 'JSON.stringify()',
          articleSource: '',
        },
        {
          articleTitle: 'JSON.parse()',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'window',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'window.location.reload()',
          articleSource: '',
        },
        {
          articleTitle: 'window.location.hash',
          articleSource: '',
        },
        {
          articleTitle: 'window.location.href',
          articleSource: '',
        },
        {
          articleTitle: 'window.history.pushState()',
          articleSource: '',
        },
        {
          articleTitle: 'window.open(‘url’, ‘_blank’)',
          articleSource: '',
        },
        {
          articleTitle: 'window.pageXOffset vs scrollX',
          articleSource: '',
        },
        {
          articleTitle: 'window.pageYOffset vs scrollY',
          articleSource: '',
        },
        {
          articleTitle: 'window.scrollTo()',
          articleSource: '',
        },
        {
          articleTitle: 'window.innerHeight',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'FormData',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'new FormData()',
          articleSource: '',
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
      sectionArticles: [
        {
          articleTitle: 'Splitting Code in a Sub-optimal Way',
          articleSource: '',
        },
        {
          articleTitle: 'The Module Pattern with IIFE',
          articleSource: '',
        },
        {
          articleTitle: 'CommonJS & AMD Modules',
          articleSource: '',
        },
        {
          articleTitle: 'Exporting and importing in native ES6 Modules',
          articleSource: '',
        },
        {
          articleTitle: 'Named exports/imports in ES6 Modules',
          articleSource: '',
        },
        {
          articleTitle: 'Default exports/imports in ES6 Modules',
          articleSource: '',
        },
        {
          articleTitle: 'Mixed imports in ES6 Modules',
          articleSource: '',
        },
        {
          articleTitle: 'Imports are a Live Connection to Exports',
          articleSource: '',
        },
        {
          articleTitle: 'When Does Module Code Execute?',
          articleSource: '',
        },
        {
          articleTitle: 'Module Scope & "globalThis" object',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Introduction to NPM',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Introduction_to_NPM.html',
      sectionArticles: [
        {
          articleTitle: 'Project Limitations & Why We Need Tools',
          articleSource: '',
        },
        {
          articleTitle: 'Setting Up a npm Project',
          articleSource: '',
        },
        {
          articleTitle: 'Working with npm Packages',
          articleSource: '',
        },
        {
          articleTitle: 'Using Third Party Packages with npm',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Working with JavaScript Libraries',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'What & Why',
          articleSource: '',
        },
        {
          articleTitle: 'Adding Libraries',
          articleSource: '',
        },
        {
          articleTitle: 'Example: Axios Library & Http Requests',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Bundling With Parcel and NPM Scripts',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Bundling_With_Parcel_and_NPM_Scripts.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Configuring Babel and Polyfilling',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Configuring_Babel_and_Polyfilling.html',
      sectionArticles: [
        {
          articleTitle:
            'Compile your modern JavaScript code back to ES5 code with Babel',
          articleSource: '',
        },
        {
          articleTitle: 'What Is "Browser Support" About?',
          articleSource: '',
        },
        {
          articleTitle: 'Determining Browser Support For A JavaScript Feature',
          articleSource: '',
        },
        {
          articleTitle: 'Solution: Feature Detection + Fallback Code',
          articleSource: '',
        },
        {
          articleTitle: 'Solution: Using Polyfills',
          articleSource: '',
        },
        {
          articleTitle: 'Solution: Transpiling Code',
          articleSource: '',
        },
        {
          articleTitle: 'Improvement: Automatically Detect + Add Polyfills',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Version control with Git',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Version_control_with_Git.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Model-View-Controller (MVC) Arhitecture',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Model_View_Controller_(MVC)_Arhitecture.html',
      sectionArticles: [
        {
          articleTitle: 'Why we worry about software arhitecture?',
          articleSource: '',
        },
        {
          articleTitle:
            'The perfect architecture (Structure, Maintainability, Expandability)',
          articleSource: '',
        },
        {
          articleTitle: 'Components of any arhitecture',
          articleSource: '',
        },
        {
          articleTitle: 'How the MVC architecture works in JavaScript',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Refactoring Our Code: The DRY Principle',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Prettier',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Prettier.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Terminal commands',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Terminal_commands.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Markdowns',
      sectionSource:
        '/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Markdowns.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
  ],
};

export const data = [
  browserEngineAndRuntime,
  variablesAndValues,
  operators,
  controlingProgamLogicAndFlow,
  loops,
  functionalProgramming,
  arraysAndSets,
  objectsAndMaps,
  oop,
  standardBuildInObjects,
  asynchronous,
  domManipulation,
  domEvents,
  otherWebAPIs,
  modulesAndTooling,
];
