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
          articleTitle: 'Assignment (=)',
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
          articleTitle: 'Increment (A++ <i>or</i> ++A)',
          articleSource: '/src/markdowns/03_Operators/Increment_operator.html',
        },
        {
          articleTitle: 'Decrement (A-- <i>or</i> --A)',
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
          articleSource: '/src/markdowns/03_Operators/typeof_operator.html',
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
        {
          articleTitle: 'Logical NOT (!)',
          articleSource:
            '/src/markdowns/03_Operators/Logical_NOT_operator.html',
        },
      ],
    },
    {
      sectionTitle: 'Arithmetic operators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Addition (+)',
          articleSource: '/src/markdowns/03_Operators/Addition_operator.html',
        },
        {
          articleTitle: 'Subtraction (-)',
          articleSource:
            '/src/markdowns/03_Operators/Subtraction_operator.html',
        },
        {
          articleTitle: 'Division (/)',
          articleSource: '',
        },
        {
          articleTitle: 'Multiplication (*)',
          articleSource: '',
        },
        {
          articleTitle: 'Remainder (%)',
          articleSource: '/src/markdowns/03_Operators/Remainder_operator.html',
        },
      ],
    },
    {
      sectionTitle: 'Equality operators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Equality (==)',
          articleSource: '/src/markdowns/03_Operators/Equality_operator.html',
        },
        {
          articleTitle: 'Inequality (!=)',
          articleSource: '/src/markdowns/03_Operators/Inequality_operator.html',
        },
        {
          articleTitle: 'Identity (===)',
          articleSource: '/src/markdowns/03_Operators/Identity_operator.html',
        },
        {
          articleTitle: 'Nonidentity (!==)',
          articleSource:
            '/src/markdowns/03_Operators/Nonidentity_operator.html',
        },
      ],
    },
    {
      sectionTitle: 'Relational operators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Less than (<)',
          articleSource: '/src/markdowns/03_Operators/Less_than_operator.html',
        },
        {
          articleTitle: 'Greater than (>)',
          articleSource: '/src/markdowns/03_Operators/Less_than_operator.html',
        },
        {
          articleTitle: 'Less than or equal (<=)',
          articleSource: '/src/markdowns/03_Operators/Less_than_operator.html',
        },
        {
          articleTitle: 'Greater than or equal (>=)',
          articleSource: '/src/markdowns/03_Operators/Less_than_operator.html',
        },
        {
          articleTitle: 'instanceof',
          articleSource: '/src/markdowns/03_Operators/instanceof_operator.html',
        },
        {
          articleTitle: 'in',
          articleSource: '/src/markdowns/03_Operators/in_operator.html',
        },
      ],
    },
    {
      sectionTitle: 'Binary logical operators',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Logical AND (&&)',
          articleSource:
            '/src/markdowns/03_Operators/Logical_AND_operator.html',
        },
        {
          articleTitle: 'Logical OR (||)',
          articleSource: '/src/markdowns/03_Operators/Logical_OR_operator.html',
        },
        {
          articleTitle: 'Nullish coalescing (??)',
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
      sectionTitle: 'Conditional (ternary) operator',
      sectionSource:
        '/src/markdowns/03_Operators/Conditional_(ternary)_operator.html',
      sectionArticles: [
        {
          articleTitle: 'Ternary operator vs if...else statement',
          articleSource: '',
        },
        {
          articleTitle: 'Conditional chains',
          articleSource: '',
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
  ],
};

const conditionalStatements = {
  title: 'Conditional statements',
  sections: [
    {
      sectionTitle: 'Statements vs Expressions',
      sectionSource:
        '/src/markdowns/04_Conditional_statements/Statements_vs_Expressions.html',
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
    {
      sectionTitle: 'Truthy & Falsy Values',
      sectionSource:
        '/src/markdowns/04_Conditional_statements/Truthy_&_Falsy_Values.html',
      sectionArticles: [
        {
          articleTitle: 'Type coercion',
          articleSource: '',
        },
        {
          articleTitle: 'Boolean context',
          articleSource: '',
        },
        {
          articleTitle: 'Truthy values & logical AND operator (&&)',
          articleSource: '',
        },
        {
          articleTitle: 'Falsy values & logical OR operator (||)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: '"if...else", "else if" statements',
      sectionSource:
        '/src/markdowns/04_Conditional_statements/if__else__if_else_statements.html',
      sectionArticles: [
        {
          articleTitle: 'Nesting Conditionals',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'The Switch statement',
      sectionSource:
        '/src/markdowns/04_Conditional_statements/The_Switch_Statement.html',
      sectionArticles: [
        {
          articleTitle: 'The Switch Statement & "break" statement',
          articleSource: '',
        },
        {
          articleTitle: 'The Switch Statement & "default" statement',
          articleSource: '',
        },
        {
          articleTitle:
            'The Switch Statement is an alternative to "if...else" chains',
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
      sectionTitle: 'Introduction to Loops & Iteration',
      sectionSource:
        '/src/markdowns/05_Loops_&_Iteration/Introduction_to_Loops_and_Iteration.html',
      sectionArticles: [
        {
          articleTitle: 'Loops offer a way to do something <i>repeatedly</i>',
          articleSource: '',
        },
        {
          articleTitle: 'JavaScript supports <i>different kinds of loops</i>',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: '"for" statement',
      sectionSource: '/src/markdowns/05_Loops_&_Iteration/for_statement.html',
      sectionArticles: [
        {
          articleTitle: 'Avoid infinite loops!',
          articleSource: '',
        },
        {
          articleTitle: 'Nested loops',
          articleSource: '',
        },
        {
          articleTitle: 'Do NOT initialize a function inside of a loop',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: '"for...of" statement',
      sectionSource:
        '/src/markdowns/05_Loops_&_Iteration/for...of_statement.html',
      sectionArticles: [
        {
          articleTitle: '<i>Iterable</i> object',
          articleSource: '',
        },
        {
          articleTitle: 'Destructuring in "for...of" statement',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: '"for...in" statement',
      sectionSource:
        '/src/markdowns/05_Loops_&_Iteration/for...in_statement.html',
      sectionArticles: [
        {
          articleTitle:
            'Iterates over all <i>enumerable properties</i> of an object',
          articleSource: '',
        },
        {
          articleTitle: 'Iterates over the entire prototype chain',
          articleSource: '',
        },
        {
          articleTitle: '"for...in" vs Object.keys()',
          articleSource: '',
        },
        {
          articleTitle: 'Destructuring in "for...in" statement',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: '"while" statement',
      sectionSource: '/src/markdowns/05_Loops_&_Iteration/while_statement.html',
      sectionArticles: [
        {
          articleTitle: 'Avoid infinite loops!',
          articleSource: '',
        },
        {
          articleTitle: 'Do NOT initialize a function inside of a loop',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: '"break" and "continue" statements',
      sectionSource:
        '/src/markdowns/05_Loops_&_Iteration/Break_&_Continue_Statements.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
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
      sectionArticles: [
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
      sectionTitle: 'Higher Order Functions',
      sectionSource: '/src/markdowns/06_Functions/Higher_Order_Functions.html',
      sectionArticles: [
        {
          articleTitle: 'Functions are objects',
          articleSource: '',
        },
        {
          articleTitle: 'Functions are First-class citizen in JavaScript',
          articleSource: '',
        },
        {
          articleTitle:
            'Functions can be assigned to variables and properties of objects',
          articleSource: '',
        },
        {
          articleTitle:
            'A function can be passed as an argument/parameter to other function (callback functions)',
          articleSource: '',
        },
        {
          articleTitle: 'A function can be returned by another function',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Closures & local vs global variables',
      sectionSource:
        '/src/markdowns/06_Functions/Closures_&_local_vs_global_variables.html',
      sectionArticles: [
        {
          articleTitle: 'Variable lifetime',
          articleSource: '',
        },
        {
          articleTitle: 'Nested functions',
          articleSource: '',
        },
        {
          articleTitle: 'Closures & Lexical Environment',
          articleSource: '',
        },
        {
          articleTitle:
            'A closure <i>always return a function/object</i> that <i>references to its surrounding</i>',
          articleSource: '',
        },
        {
          articleTitle: 'Closures & Memory Efficiency',
          articleSource: '',
        },
        {
          articleTitle: 'Closures & Encapsulation',
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
        {
          articleTitle: 'Constructor Functions',
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
        '/src/markdowns/06_Functions/Rest_parameter_and_functions.html',
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
        '/src/markdowns/06_Functions/Spread_syntax_and_function_calls.html',
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
        '/src/markdowns/06_Functions/Function_invocation_&_this_keyword.html',
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
        '/src/markdowns/06_Functions/The_this_keyword_&_call__apply__and__bind.html',
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
      sectionTitle: 'Array.prototype Methods',
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
      sectionTitle: 'Object.prototype Methods',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'toString()',
          articleSource: '',
        },
        {
          articleTitle: 'hasOwnProperty()',
          articleSource: '',
        },
        {
          articleTitle: 'isPrototypeOf()',
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
  title: 'Object-Oriented Programming (OOP)',
  sections: [
    {
      sectionTitle: 'Inspiration of JavaScript: Scheme & Java',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Scheme_&_Java.html',
      sectionArticles: [
        {
          articleTitle:
            'Scheme was a programming language that have <i>closures</i> and the idea of <i>functions as first class citizens</i>',
          articleSource: '',
        },
        {
          articleTitle:
            'In Java community, <i>classes and classical inheritance</i> was really, really important',
          articleSource: '',
        },
        {
          articleTitle:
            'JavaScript was inspired by Scheme and Java, and because of this inspiration we have this multi-paradigm language: functional and object-oriented',
          articleSource: '',
        },
        {
          articleTitle:
            'OOP and Functional Programming are paradigms that allow us to organize code',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Introduction to "traditional" OOP',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Introduction_to_traditional_OOP.html',
      sectionArticles: [
        {
          articleTitle:
            'OOP is a programming paradigm that allow us to organize code',
          articleSource: '',
        },
        {
          articleTitle: 'Traditional OOP: Classes & Instances',
          articleSource: '',
        },
        {
          articleTitle: 'Traditional OOP: Inheritance',
          articleSource: '',
        },
        {
          articleTitle: 'Traditional OOP: Encapsulation',
          articleSource: '',
        },
        {
          articleTitle:
            '4 fundamental principles of OOP: abstraction, encapsulation, inheritance and polymorphism',
          articleSource: '',
        },
        {
          articleTitle:
            'Traditional OOP: Classes & Instances vs JavaScript: Constructors & Prototypes',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'OOP in JavaScript: Objects prototypes',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/OOP_in_JavaScript_Object_prototypes.html',
      sectionArticles: [
        {
          articleTitle:
            'Prototypes are the mechanism by which JavaScript objects inherit features from one another',
          articleSource: '',
        },
        {
          articleTitle:
            'With the help of prototypes objects inherit features from another object, not copy them',
          articleSource: '',
        },
        {
          articleTitle:
            "With Prototypal Inheritance we're being efficient with our memory: the fact that objects can share prototypes means that you can have objects with properties that are pointing to the same place in memory",
          articleSource: '',
        },
        {
          articleTitle:
            'Every object in JavaScript has a built-in property (__proto__) which is called its prototype',
          articleSource: '',
        },
        {
          articleTitle: `The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has "null" for its own prototype`,
          articleSource: '',
        },
        {
          articleTitle: 'Only functions have the prototype property',
          articleSource: '',
        },
        {
          articleTitle:
            "Shadowing properties happens when you define a property in an object, when a property with the same name is defined in the object's prototype",
          articleSource: '',
        },
        {
          articleTitle:
            'Setting a prototype: Object.create(), Constructors and ES6 Classes',
          articleSource: '',
        },
        {
          articleTitle: 'Prototypes and inheritance',
          articleSource: '',
        },
        {
          articleTitle: 'Prototypes & Memory Efficiency',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'What is the difference between __proto__ and prototype?',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Difference_between_proto_and_prototype.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Prototypal Inheritance: Constructor Function & Prototypes',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Prototypal_Inheritance_Constructor_Function.html',
      sectionArticles: [
        {
          articleTitle: 'Factory Functions vs Constructor Function',
          articleSource: '',
        },
        {
          articleTitle:
            'Constructor Function create a "blueprint" for creating many objects of the same "type"',
          articleSource: '',
        },
        {
          articleTitle:
            'We use Constructor Function to build an object using a function',
          articleSource: '',
        },
        {
          articleTitle:
            'A Constructor Function is just a function called using the "new" operator',
          articleSource: '',
        },
        {
          articleTitle:
            'Constructors, by convention, start with a capital letter and are named for the type of object they create',
          articleSource: '',
        },
        {
          articleTitle: `You can't create a Constructor Function with the arrow function because arrow function doesn't have its own "this" keyword`,
          articleSource: '',
        },
        {
          articleTitle: `In a Constructor Function "this" does not have a value. It is a substitute for the new object. The value of "this" will become the new object when a new object is created`,
          articleSource: '',
        },
        {
          articleTitle: 'Setting a prototype with Constructor Function',
          articleSource: '',
        },
        {
          articleTitle:
            'More real inheritance than Prototypal Inheritance (Child and Parent)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Prototypal Inheritance: Object.create() & Prototypes',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Prototypal_Inheritance_Object.create().html',
      sectionArticles: [
        {
          articleTitle: 'Setting a prototype with Object.create()',
          articleSource: '',
        },
        {
          articleTitle:
            'More real inheritance than Prototypal Inheritance (Child and Parent)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Prototypal Inheritance: ES6 Classes & Prototypes',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Prototypal_Inheritance_ES6_Classes.html',
      sectionArticles: [
        {
          articleTitle:
            'A class is not an object, it is a template for creating an object',
          articleSource: '',
        },
        {
          articleTitle:
            'A class encapsulate data with code (methods) to work on that data',
          articleSource: '',
        },
        {
          articleTitle:
            'JavaScript classes are only "syntactic sugar" over Constructor Function',
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
        {
          articleTitle:
            'More real inheritance than Prototypal Inheritance (Child and Parent)',
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
    {
      sectionTitle: 'Object-Oriented vs Functional Programming',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Object-oriented_vs_functional_programming.html',
      sectionArticles: [
        {
          articleTitle: 'Inheritance vs Composition',
          articleSource: '',
        },
        {
          articleTitle:
            'Inheritance problems: tight coupling, fragile base class & hierarchy',
          articleSource: '',
        },
        {
          articleTitle:
            "One of the drawbacks to OOP paradigm and inheritance is that it is based on the fact that things (classes) won't change in the future. We are structuring a class based on what it is",
          articleSource: '',
        },
        {
          articleTitle:
            'With FP we focus and structure our code around "What it has?" or "What it does to data?"',
          articleSource: '',
        },
        {
          articleTitle:
            'FP is more declarative (what to do, not how), and OOP is more imperative (what and how to do something)',
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
      sectionTitle: 'Inspiration of JavaScript: Scheme & Java',
      sectionSource:
        '/src/markdowns/09_Object_Oriented_Programming_(OOP)/Scheme_&_Java.html',
      sectionArticles: [
        {
          articleTitle:
            'Scheme was a programming language that have <i>closures</i> and the idea of <i>functions as first class citizens</i>',
          articleSource: '',
        },
        {
          articleTitle:
            'In Java community, <i>classes and classical inheritance</i> was really, really important',
          articleSource: '',
        },
        {
          articleTitle:
            'JavaScript was inspired by Scheme and Java, and because of this inspiration we have this multi-paradigm language: functional and object oriented',
          articleSource: '',
        },
        {
          articleTitle:
            'OOP and Functional Programming are paradigms that allow us to organize code',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Introduction to Functional Programming',
      sectionSource:
        '/src/markdowns/09A_Functional_Programming_(FP)/Introduction_to_FP.html',
      sectionArticles: [
        {
          articleTitle: 'Pure functions concept',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Functional Programming concepts',
      sectionSource:
        '/src/markdowns/09A_Functional_Programming_(FP)/Functional_programming_concepts.html',
      sectionArticles: [
        {
          articleTitle: 'Pure Functions & Shared State',
          articleSource: '',
        },
        {
          articleTitle: 'Pure Functions & Immutability vs Mutating State',
          articleSource: '',
        },
        {
          articleTitle: 'Pure Functions & Side-Effects',
          articleSource: '',
        },
        {
          articleTitle: 'Pure Functions & Referential transparency',
          articleSource: '',
        },
        {
          articleTitle: 'Idempotence',
          articleSource: '',
        },
        {
          articleTitle: 'Imperative vs Declarative',
          articleSource: '',
        },
        {
          articleTitle: 'Reusability through Higher Order Functions',
          articleSource: '',
        },
        {
          articleTitle: 'Curry',
          articleSource: '',
        },
        {
          articleTitle: 'Partial Application',
          articleSource: '',
        },
        {
          articleTitle: 'Function composition: compose & pipe',
          articleSource: '',
        },
        {
          articleTitle: 'Arity',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'More on Pure Functions',
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'More on Functions Composition',
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
      sectionSource:
        '/src/markdowns/10_Standard_Build-In_Objects/Introduction_to_Standard_Build-in_Objects.html',
      sectionArticles: [
        {
          articleTitle: 'Global objects vs Global Object (window)',
          articleSource: '',
        },
        {
          articleTitle: 'Standard build-in objects by category',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'String',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/String.html',
      sectionArticles: [
        {
          articleTitle:
            'Creating strings as primitives: string literals & String() function',
          articleSource: '',
        },
        {
          articleTitle: 'Creating strings as objects: String() constructor',
          articleSource: '',
        },
        {
          articleTitle:
            'String() function and String() constructor produce different results',
          articleSource: '',
        },
        {
          articleTitle:
            'Character access: You can treat the string as an array-like object, where individual characters correspond to a numerical index',
          articleSource: '',
        },
        {
          articleTitle: 'Comparing strings: strings case-sensitively!',
          articleSource: '',
        },
        {
          articleTitle:
            'String primitives vs String objects: in contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup on the wrapper object instead',
          articleSource: '',
        },
        {
          articleTitle:
            'String coercion: template literals, String() function, + operator',
          articleSource: '',
        },
        {
          articleTitle: 'Long literal strings',
          articleSource: '',
        },
        {
          articleTitle: 'Template literals (Template strings)',
          articleSource: '',
        },
        {
          articleTitle: 'Template literals and Tagged Templates',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'String.prototype properties & methods',
      sectionSource: '',
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
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Number',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/Number.html',
      sectionArticles: [
        {
          articleTitle:
            'Creating numbers as primitives: literal form & Number() function',
          articleSource: '',
        },
        {
          articleTitle: 'Creating numbers as objects: Number() constructor',
          articleSource: '',
        },
        {
          articleTitle:
            'Number() function and Number() constructor produce different results',
          articleSource: '',
        },
        {
          articleTitle:
            'Number primitives vs Number objects: in contexts where a method is to be invoked on a primitive number or a property lookup occurs, JavaScript will automatically wrap the number primitive and call the method or perform the property lookup on the wrapper object instead',
          articleSource: '',
        },
        {
          articleTitle:
            "Number encoding: there are some limits to the stored number's magnitude and precision. Integers can only be represented without loss of precision in the range -253 + 1 to 253 - 1",
          articleSource: '',
        },
        {
          articleTitle:
            'Number coercion: Addition operator (+) & Number() function',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Number Static Methods',
      sectionSource: '',
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
      sectionTitle: 'Number.prototype Methods',
      sectionSource: '',
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
      sectionArticles: [
        {
          articleTitle:
            'Unlike many other global objects, "Math" is not a constructor',
          articleSource: '',
        },
        {
          articleTitle: 'All properties and methods of "Math" are static',
          articleSource: '',
        },
        {
          articleTitle: `"Math" works with the Number type, it doesn't work with BigInt`,
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Math Static Methods',
      sectionSource: '',
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
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Date',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/Date.html',
      sectionArticles: [
        {
          articleTitle:
            'The ECMAScript epoch and timestamps: a JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since the ECMAScript epoch, which is defined as January 1, 1970, UTC (equivalent to the UNIX epoch)',
          articleSource: '',
        },
        {
          articleTitle:
            'Date format and time zone conversions: there are several methods available to obtain a date in various formats, as well as to perform time zone conversions',
          articleSource: '',
        },
        {
          articleTitle:
            'The Date() constructor can create a "Date" instance <i>or</i> return a string representing the current time',
          articleSource: '',
        },
        {
          articleTitle:
            'When Date() is called as a constructor (with the "new" keyword), returns a new "Date" object',
          articleSource: '',
        },
        {
          articleTitle:
            'When Date() is called as a function, returns a string representation of the current date and time',
          articleSource: '',
        },
        {
          articleTitle: '"Date" constructor static method: Date.now()',
          articleSource: '',
        },
        {
          articleTitle:
            'Date.now() returns the numeric value corresponding to the current time — the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Date.prototype Methods',
      sectionSource: '',
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
      sectionArticles: [
        {
          articleTitle:
            'The "Intl" object provides access to several constructors that do language sensitive string comparison, number formatting, and date and time formatting',
          articleSource: '',
        },
        {
          articleTitle:
            'All "Intl" constructors accept "locales" and "options" arguments, for use pattern to identifying locales and determining the one they will actually use',
          articleSource: '',
        },
        {
          articleTitle:
            'You can use "navigator.language" read-only property for setting your "locales" parameter',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Intl.DateTimeFormat()',
      sectionSource:
        '/src/markdowns/10_Standard_Build-In_Objects/Intl.DateTimeFormat.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Intl.NumberFormat()',
      sectionSource:
        '/src/markdowns/10_Standard_Build-In_Objects/Intl.NumberFormat.html',
      sectionArticles: [
        {
          articleTitle: '',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Error',
      sectionSource: '/src/markdowns/10_Standard_Build-In_Objects/Error.html',
      sectionArticles: [
        {
          articleTitle: 'Error types',
          articleSource: '',
        },
        {
          articleTitle: 'Error Constructor',
          articleSource: '',
        },
        {
          articleTitle: 'Error instance properties: message, name, cause',
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

const asynchronous = {
  title: 'Asynchronous',
  sections: [
    {
      sectionTitle: 'How the Web works: HTTP request & responses',
      sectionSource:
        '/src/markdowns/11_Asynchronous/How_the_web_works___HTTP_request_&_responses.html',
      sectionArticles: [
        {
          articleTitle: 'HTTP is a protocol for fetching resources',
          articleSource: '',
        },
        {
          articleTitle:
            'HTTP is the foundation of any data exchange on the web',
          articleSource: '',
        },
        {
          articleTitle:
            'HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response',
          articleSource: '',
        },
        {
          articleTitle: 'Domain Name Server (DNS)',
          articleSource: '',
        },
        {
          articleTitle: 'TCP/IP socket connection',
          articleSource: '',
        },
        {
          articleTitle: 'HTTP Messages: Request & Response',
          articleSource: '',
        },
        {
          articleTitle:
            'HTTP Request: HTTP method, request target, request headers, body',
          articleSource: '',
        },
        {
          articleTitle:
            'HTTP Response: HTTP status code, status message, headers, body',
          articleSource: '',
        },
        {
          articleTitle: 'APIs based on HTTP: XMLHttpRequest & Fetch API',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Introduction to Asynchronous JavaScript',
      sectionSource:
        '/src/markdowns/11_Asynchronous/Introducing_to_Asynchronous_JavaScript.html',
      sectionArticles: [
        {
          articleTitle:
            'JavaScript has only one threat of execution (Call Stack) and so it can only do one thing at a time. There is absolutely no multitasking happening in JavaScript itself.',
          articleSource: '',
        },
        {
          articleTitle:
            'Single-Thread Language problem: long-running synchronous functions that work in the Call Stack',
          articleSource: '',
        },
        {
          articleTitle: 'Asynchronous functions & Web APIs',
          articleSource: '',
        },
        {
          articleTitle: 'Synchronous vs Asynchronous functions',
          articleSource: '',
        },
        {
          articleTitle:
            'Early Asynchronous Programming & Event Handlers: early asynchronous APIs (XMLHttpRequest) used events for asynchronous programming',
          articleSource: '',
        },
        {
          articleTitle:
            'Early Asynchronous Programming & Chaining Callbacks: Callback Hell',
          articleSource: '',
        },
        {
          articleTitle: 'Early Asynchronous Programming: AJAX',
          articleSource: '',
        },
        {
          articleTitle: 'AJAX is not a programming language',
          articleSource: '',
        },
        {
          articleTitle:
            'AJAX use a combination of existing technologies together to communicate with servers',
          articleSource: '',
        },
        {
          articleTitle: 'The XMLHttpRequest API is the core of AJAX',
          articleSource: '',
        },
        {
          articleTitle: 'XML vs JSON',
          articleSource: '',
        },
        {
          articleTitle:
            'Useful JavaScript methods for JSON format: JSON.parse() & JSON.stringify()',
          articleSource: '',
        },
        {
          articleTitle:
            'XMLHttpRequests Chaining Requests: Welcome to Callback Hell',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Promises',
      sectionSource: '/src/markdowns/11_Asynchronous/Promises.html',
      sectionArticles: [
        {
          articleTitle:
            'Traditionally (before promises), asynchronous tasks were designed as callbacks. This lead at the problem known as Callback Hell. A promise allows to transform the callback-based API to a promise-based one',
          articleSource: '',
        },
        {
          articleTitle:
            'A promise is an object returned by an asynchronous function that is used as a placeholder for the future result of that asynchronous operation',
          articleSource: '',
        },
        {
          articleTitle:
            'The promise object provides methods to handle the eventual success or failure of the operation',
          articleSource: '',
        },
        {
          articleTitle:
            'The promise lifecycle: pending -> settled (fulfilled / rejected)',
          articleSource: '',
        },
        {
          articleTitle: 'Build & consume promises',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Building a Promise',
      sectionSource: '/src/markdowns/11_Asynchronous/Building_a_Promise.html',
      sectionArticles: [
        {
          articleTitle:
            'The Promise() constructor is primarily used to wrap functions that do not already support promises',
          articleSource: '',
        },
        {
          articleTitle:
            'If your task is already promise-based, you likely do not need the Promise() constructor',
          articleSource: '',
        },
        {
          articleTitle:
            'the Promise() constructor returns a promise object to which you can attach handlers for consuming the promise',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Consuming a Promise',
      sectionSource: '/src/markdowns/11_Asynchronous/Consuming_a_Promise.html',
      sectionArticles: [
        {
          articleTitle:
            'There is no race condition between an asynchronous operation completing and its handlers being attached',
          articleSource: '',
        },
        {
          articleTitle:
            'Handling Fulfilled Promise: then() method (callback function with "response" parameter)',
          articleSource: '',
        },
        {
          articleTitle:
            'Handling Rejected Promise: catch() method (callback function with "error" parameter)',
          articleSource: '',
        },
        {
          articleTitle:
            'Chaining Multiple Promises: then(), catch() and finally() methods are used to associate further action with a promise that becomes settled. These methods return promises, so they can be chained',
          articleSource: '',
        },
        {
          articleTitle:
            "Always return the result of a promise, otherwise .then() method won't catch the result of the previous promise",
          articleSource: '',
        },
        {
          articleTitle: 'finally() method (callback function)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'The Fetch API',
      sectionSource: '/src/markdowns/11_Asynchronous/Fetch_API.html',
      sectionArticles: [
        {
          articleTitle:
            'The Fetch API provides an interface for fetching resources (including across the network)',
          articleSource: '',
        },
        {
          articleTitle:
            'For making a request and fetching a resource use the fetch() method',
          articleSource: '',
        },
        {
          articleTitle: 'The fetch() method always return a promise',
          articleSource: '',
        },
        {
          articleTitle: `The promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500`,
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'How to consume a promise returned by the fetch() method',
      sectionSource:
        '/src/markdowns/11_Asynchronous/How_to_consume_a_promise_returned_by_fetch_method.html',
      sectionArticles: [
        {
          articleTitle:
            'fetch() will always return a promise that need to be handled by consuming it',
          articleSource: '',
        },
        {
          articleTitle:
            'Read the response returned by fetch() with: Response.json(), Response.text(), Response.formData()',
          articleSource: '',
        },
        {
          articleTitle:
            'Response.json(), Response.text(), Response.formData() always return a promise',
          articleSource: '',
        },
        {
          articleTitle:
            'Throwing Custom Errors Manually: the "Error" Object & throw new Error()',
          articleSource: '',
        },
        {
          articleTitle: 'Rethrowing an error',
          articleSource: '',
        },
        {
          articleTitle:
            'Combining multiple promises with "Promise.all" or "Promise.any" and consume them',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Consuming promises with async/await',
      sectionSource: '/src/markdowns/11_Asynchronous/async_&_await.html',
      sectionArticles: [
        {
          articleTitle: 'async functions',
          articleSource: '',
        },
        {
          articleTitle: 'await operator',
          articleSource: '',
        },
        {
          articleTitle:
            'The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs',
          articleSource: '',
        },
        {
          articleTitle:
            'async/await enables you to write code that uses asynchronous functions but looks like synchronous code',
          articleSource: '',
        },
        {
          articleTitle:
            'async/await help you to avoid the need to explicitly configure promise chains, like you used to do with then() and catch()',
          articleSource: '',
        },
        {
          articleTitle: `Just like a promise chain, "await" forces asynchronous operations to be completed in series. This is necessary if the result of the next operation depends on the result of the last one, but if that's not the case then something like "Promise.all" will be more performant`,
          articleSource: '',
        },
        {
          articleTitle:
            'Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise',
          articleSource: '',
        },
        {
          articleTitle:
            'You can only use "await" inside an "async" function, unless your code is in a JavaScript module',
          articleSource: '',
        },
        {
          articleTitle: 'You can use multiple awaits in an async function',
          articleSource: '',
        },
        {
          articleTitle: 'Store await promises results in variables',
          articleSource: '',
        },
        {
          articleTitle:
            'Error Handling in Async Functions: try {} catch(error) {}',
          articleSource: '',
        },
        {
          articleTitle:
            'Rethrowing an error when you have multiple async functions',
          articleSource: '',
        },
        {
          articleTitle: 'Returning values from async functions',
          articleSource: '',
        },
        {
          articleTitle:
            'async/await is only syntactic sugar over "Raw Promises"',
          articleSource: '',
        },
        {
          articleTitle: 'Top-Level "await" (ES2022)',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Promise.prototype Methods',
      sectionSource: '',
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
  title: 'Document Object Model (DOM) <br>- Properties & Methods -',
  sections: [
    {
      sectionTitle: 'Introduction to the Document Object Model (DOM)',
      sectionSource:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Introduction_to_the_DOM.html',
      sectionArticles: [
        {
          articleTitle: 'The DOM defines a standard for accessing documents',
          articleSource: '',
        },
        {
          articleTitle: 'HTML DOM - standard model for HTML documents',
          articleSource: '',
        },
        {
          articleTitle:
            'The HTML DOM is a programming interface for web documents. It represents the HTML page so that programs can change the document structure, style and content',
          articleSource: '',
        },
        {
          articleTitle:
            'The HTML DOM represents the HTML document as nodes and objects. It is constructed as a tree of objects',
          articleSource: '',
        },
        {
          articleTitle:
            'The HTML DOM connects web pages to scripts or programming languages by representing the structure of a HTML document in memory',
          articleSource: '',
        },
        {
          articleTitle:
            "The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts",
          articleSource: '',
        },
        {
          articleTitle: 'Accessing the DOM: "document" & "window" object',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'DOM Node Types (Node vs Element)',
      sectionSource:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/DOM_Node_Types_(Node_vs_Element).html',
      sectionArticles: [
        {
          articleTitle:
            'Nodes are the objects that make up the DOM, everything in the DOM is a node',
          articleSource: '',
        },
        {
          articleTitle:
            'A DOM document consists of a <i>hierarchy of nodes</i>. Each node can have a parent and/or children',
          articleSource: '',
        },
        {
          articleTitle:
            'Not just HTML tags are treated as nodes objects, but also text, comments etc. Event whitespace that you have for readability reasons in an HTML document is treated as a node',
          articleSource: '',
        },
        {
          articleTitle:
            'DOM Nodes are just JavaScript objects in the end - i.e. reference values. Methods like "querySelector()" or "querySelectorAll()" return the object references (addresses)',
          articleSource: '',
        },
        {
          articleTitle: 'Live Node Lists vs Static Node Lists',
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'HTML Attributes vs DOM Properties',
      sectionSource:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/HTML_attributes_vs_DOM_properties.html',
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
      sectionTitle: 'Introduction to create, insert and remove elements',
      sectionSource:
        '/src/markdowns/12_Web_API___Document_Object_Model_(DOM)___Properties_&_Methods/Introduction_to_create_insert_and_remove_elements.html',
      sectionArticles: [
        {
          articleTitle: `If you have an created or selected element, either because you selected it in the DOM with "querySelector()" or you created it with "createElement()" and that element is already part of the DOM, so it is already rendered, if you then insert it somewhere else in the DOM, that element is NOT COPIED or anything like that, instead the existing element is DETACHED from the place where it was and moved to the new place. This actually makes a lot of sense since objects are reference values as you learned and the DOM objects you're working are normal objects in the end, and therefore if we do something with them and we add them somewhere else, we always work with the same object`,
          articleSource: '',
        },
        {
          articleTitle: `If you want a brand new element, you have to create a brand new one with "document.createElement()". Just keep in mind that inserting the same element multiple times will move it, because we're working with objects and not with some automatically copied things`,
          articleSource: '',
        },
        {
          articleTitle: `Important (no matter how you insert elements): Whenever you insert elements, you MOVE the element to that new place if you already inserted it before. It's NOT COPIED (you can copy an element via "someElement.cloneNode(true)" though)`,
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Create, insert & remove DOM elements',
      sectionSource: '',
      sectionArticles: [
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
