const chapterPattern = {
  chapterTitle: '',
  sections: [],
};

const sectionPattern = {
  title: '',
  titleSource: '',
  titleSnippets: [],
  titleLinks: [{ linkTitle: '', linkSource: '' }],
  titleArticles: [
    {
      articleTitle: '',
      articleSource: '',
      articleSnippets: [],
      articleLinks: [{ linkTitle: '', linkSource: '' }],
    },
  ],
};

const browser_engine_runtime = {
  chapterTitle: 'JavaScript in the Browser: Engine & Runtime',
  sections: [
    {
      title: 'Browsers Engine',
      titleSource: ``,
      titleSnippets: [
        'Interpreter/Compiler/JIT Compiler and Writing Optimized Code',
        'Memoization',
        'Memory Heap & Call Stack',
        'Memory Leaks & Stack Overflow',
        'Garbage Collection',
        'Single Threaded Model',
      ],
      titleLinks: [{ linkTitle: '', linkSource: '' }],
      titleArticles: [
        {
          articleTitle: '',
          articleSource: '',
          articleSnippets: [],
          articleLinks: [{ linkTitle: '', linkSource: '' }],
        },
      ],
    },
  ],
};

// *********************************************************************
// *************************** Old Structure ***************************
const browserEngineAndRuntime = {
  title: 'JavaScript in the Browser: Engine & Runtime',
  sections: [
    {
      sectionTitle: 'Javascript Engine (part 1)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Engine1.html',
      sectionArticles: [
        {
          articleTitle: 'JavaScript language vs Computer language',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Interpreter and Compiler',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'JIT Compilers (Just In Time Compilers) & Optimized code',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Is JavaScript an interpreted language?',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Javascript Engine (part 2)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Engine2.html',
      sectionArticles: [
        {
          articleTitle: 'Memory Heap & Call Stack',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Call Stack & Stack Overflow',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'Memory Heap & JavaScript is a Garbage Collection Language & Memory Leaks',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'JavaScript is a Single Threaded Programming Language (Synchronous Language) and the JavaScript Engine have only a single Call Stack & Memory Heap',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'JavaScript Engine is synchronous, it executes code in order, and must finish executing a line of code before moving onto the next one',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Browsers_Runtime.html',
      sectionArticles: [
        {
          articleTitle: 'JavaScript Runtime & Asynchronous code',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'JavaScript Runtime provides asynchronous Web APIs, a way of communicating with the JavaScript Engine',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Web APIs & global window object',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Callback Queue vs Job/Microtask Queue & Event Loop',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Execution Context and the Call Stack',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Execution_Context_and_The_Call_Stack.html',
      sectionArticles: [
        {
          articleTitle:
            'Global execution context (global "window" object & "this" keyword)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'Function execution context ("arguments" & "this" keyword)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Lexical Environment',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Lexical_Environment.html',
      sectionArticles: [
        {
          articleTitle:
            'Where we write code determines the available variables',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Variable Environment',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource:
        '/src/markdowns/01_Browser_Engine_&_Runtime/Variable_Environment.html',
      sectionArticles: [
        {
          articleTitle: 'Variable Environment & Scope Chain',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Hoisting',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '/src/markdowns/01_Browser_Engine_&_Runtime/Hoisting.html',
      sectionArticles: [
        {
          articleTitle:
            'Compiler appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'Hoisting is happen on every execution context: global & function',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Leakage of Global Variables',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function Scope vs Block Scope',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Global Variables & Variable Collisions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Efficient Script Loading: defer & async',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
  ],
};

const variablesAndValues = {
  title: 'Variables, Values & Primitive/Reference Types',
  sections: [
    {
      sectionTitle: 'Statements vs Expressions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Static vs Dynamically Typed',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Strongly vs Weakly Typed',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Variables & Values',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'var',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'const',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'let',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Primitives vs References Types (Primitives vs Objects)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle:
            'Primitive Types (Numbers, Strings, Booleans, null, undefined, Symbol)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Reference Types (Arrays, Objects, Functions)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Pass by Value vs Pass by Reference',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: 'Type Conversion and Coercion',
          articleLinks: [
            {
              linkTitle: 'Type coercion explained',
              linkSource: `https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Operator precedence',
          articleLinks: [
            {
              linkTitle: 'Operator precedence',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Expressions and operators',
      sectionLinks: [
        {
          linkTitle: 'Expressions and operators',
          linkSource:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators',
        },
      ],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: 'Primary expressions',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Left-hand-side expressions',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Increment and decrement',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Unary operators',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Arithmetic operators',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Relational operators',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Equality operators',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Binary logical operators',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Conditional (ternary) operator',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Optional Chaining operator',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Assignment operators',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Assignment operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Assignment operator (=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Addition assignment (+=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Subtraction assignment (-=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
      ],
    },
    {
      sectionTitle: 'Increment and decrement',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Postfix increment operator (A++)',
          articleLinks: [
            {
              linkTitle: 'The increment operator (++)',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Postfix decrement operator (A--)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Prefix increment operator (++A)',
          articleLinks: [
            {
              linkTitle: 'The increment operator (++)',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Prefix decrement operator(--A)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
      ],
    },
    {
      sectionTitle: 'Unary operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'typeof',
          articleLinks: [
            {
              linkTitle: 'The typeof operator',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'plus operator (+)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'negation operator (-)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
      ],
    },
    {
      sectionTitle: 'Arithmetic operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Addition operator (+)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Subtraction operator (-)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Division operator (/)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Multiplication operator (*)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Remainder operator (%)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
      ],
    },
    {
      sectionTitle: 'Binary logical operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Logical AND (&&)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Logical OR (||)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
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
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Nullish coalescing operator (??)',
          articleLinks: [
            {
              linkTitle: 'Nullish coalescing operator (??)',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
      ],
    },
    {
      sectionTitle: 'Equality operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Equality operator (==)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Inequality operator (!=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Identity operator (===)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Nonidentity operator (!==)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
      ],
    },
    {
      sectionTitle: 'Relational operators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'instanceof',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Less than operator (<)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Greater than operator (>)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Less than or equal operator (<=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Greater than or equal operator (>=)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
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
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: `The 'in' operator`,
      sectionLinks: [
        {
          linkTitle: 'in operator',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in`,
        },
      ],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Boolean Logic',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'if, else if, else Statements',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Nesting Conditionals',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Truthy & Falsy Values',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Logical operators (&&, ||, !)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Comparison Operators (== vs ===)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'The Conditional (Ternary) Operator',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionLinks: [
        {
          linkTitle: 'Loops and iteration',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration`,
        },
      ],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Infinite Loops!',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionTitle: 'Function introduction',
      sectionLinks: [
        {
          linkTitle:
            'Master the JavaScript Interview: What is Functional Programming?',
          linkSource: `https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function syntax',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Function Declarations',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Function Expressions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Arrow Functions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function parameters',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Parameter Rules',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Default Parameters',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'The Arguments Object',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'Arguments are <i>Passed by Value</i> vs Objects are <i>Passed by Reference</i>',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function invocation',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Invoking a JavaScript Function',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Invoking a Function as a Function',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Tagged templates',
          articleLinks: [
            {
              linkTitle: 'Tagged templates',
              linkSource:
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates',
            },
          ],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function invocation & this keyword',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: `What is 'this'?`,
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'The Global Object',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Invoking a Function as a Method',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Invoking a Function with a Function Constructor',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'The this keyword & call(), apply() and bind()',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'All Functions are Methods',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'call() method',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'apply() method',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function return statement',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Functions used as variable values',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Closures & local vs global variables',
      sectionLinks: [
        {
          linkTitle: '',
          linkSource: '',
        },
      ],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: 'Variable Lifetime',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Nested Functions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Closures',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Function hoisting',
      sectionLinks: [
        {
          linkTitle: '',
          linkSource: '',
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle:
        'Self-Invoking functions / Immediately Invoked Function Expressions (IIFE)',
      sectionLinks: [
        {
          linkTitle: '',
          linkSource: '',
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Functions are objects',
      sectionLinks: [
        {
          linkTitle: '',
          linkSource: '',
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Destructuring Parameters',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Lexical vs Dynamic Scope',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Currying with bind()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Arrow Function',
      sectionLinks: [
        {
          linkTitle: 'Arrow function expressions',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Arrow Function: Implicit Returns',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Arrow Function and THIS keyword',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Regular Functions vs. Arrow Functions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Functions Accepting Callback Functions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'A Function Can Be Passed As An Argument To Other Functions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'A Function Can Be Assigned As A Value To A Variable',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Callbacks',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Functions vs Objects',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Scheme + Java',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Curry',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Partial Application',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Pure Functions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Referential Transparency',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'What is an array?',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Creating arrays',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Array constructor',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Array literal notation',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Arrays length property',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Arrays indices',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Manipulation arrays',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Arrays are reference types',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Accessing every item / Iterating over arrays',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Nested / multidimensional arrays',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Rest Pattern in Arrays',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Array Methods',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'push()',
          articleLinks: [
            {
              linkTitle: 'Array push()',
              linkSource: `https://www.w3schools.com/jsref/jsref_push.asp`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'unshift()',
          articleLinks: [
            {
              linkTitle: 'Array unshift()',
              linkSource: `https://www.w3schools.com/jsref/jsref_unshift.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'pop()',
          articleLinks: [
            {
              linkTitle: 'Array pop()',
              linkSource: `https://www.w3schools.com/jsref/jsref_pop.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'shift()',
          articleLinks: [
            {
              linkTitle: 'Array shift()',
              linkSource: `https://www.w3schools.com/jsref/jsref_shift.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'splice()',
          articleLinks: [
            {
              linkTitle: 'Array splice()',
              linkSource: `https://www.w3schools.com/jsref/jsref_splice.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'reverse()',
          articleLinks: [
            {
              linkTitle: 'Array reverse()',
              linkSource: `https://www.w3schools.com/jsref/jsref_reverse.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'sort()',
          articleLinks: [
            {
              linkTitle: 'Array sort()',
              linkSource: `https://www.w3schools.com/jsref/jsref_sort.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'fill()',
          articleLinks: [
            {
              linkTitle: 'Array fill()',
              linkSource: `https://www.w3schools.com/jsref/jsref_fill.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'map()',
          articleLinks: [
            {
              linkTitle: 'Array map()',
              linkSource: `https://www.w3schools.com/jsref/jsref_map.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'filter()',
          articleLinks: [
            {
              linkTitle: 'Array filter()',
              linkSource: `https://www.w3schools.com/jsref/jsref_filter.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'slice()',
          articleLinks: [
            {
              linkTitle: 'Array slice()',
              linkSource: `https://www.w3schools.com/jsref/jsref_slice_array.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'concat()',
          articleLinks: [
            {
              linkTitle: 'Array concat()',
              linkSource: `https://www.w3schools.com/jsref/jsref_concat_array.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'flat() & flatMap()',
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
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'indexOf()',
          articleLinks: [
            {
              linkTitle: 'Array indexOf()',
              linkSource: `https://www.w3schools.com/jsref/jsref_indexof_array.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'lastIndexOf()',
          articleLinks: [
            {
              linkTitle: 'Array lastIndexOf()',
              linkSource: `https://www.w3schools.com/jsref/jsref_lastindexof_array.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'findIndex()',
          articleLinks: [
            {
              linkTitle: 'Array findIndex()',
              linkSource: `https://www.w3schools.com/jsref/jsref_findindex.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'find()',
          articleLinks: [
            {
              linkTitle: 'Array find()',
              linkSource: `https://www.w3schools.com/jsref/jsref_find.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'includes()',
          articleLinks: [
            {
              linkTitle: 'Array includes()',
              linkSource: `https://www.w3schools.com/jsref/jsref_includes_array.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'some()',
          articleLinks: [
            {
              linkTitle: 'Array some()',
              linkSource: `https://www.w3schools.com/jsref/jsref_some.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'every()',
          articleLinks: [
            {
              linkTitle: 'Array every()',
              linkSource: `https://www.w3schools.com/jsref/jsref_every.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'join()',
          articleLinks: [
            {
              linkTitle: 'Array join()',
              linkSource: `https://www.w3schools.com/jsref/jsref_join.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'reduce()',
          articleLinks: [
            {
              linkTitle: 'Array reduce()',
              linkSource: `https://www.w3schools.com/jsref/jsref_reduce.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'forEach()',
          articleLinks: [
            {
              linkTitle: 'Array forEach()',
              linkSource: `https://www.w3schools.com/jsref/jsref_foreach.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Array.isArray()',
          articleLinks: [
            {
              linkTitle: 'Array.isArray() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Array.from()',
          articleLinks: [
            {
              linkTitle: 'Array.from() static method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Array.entries()',
          articleLinks: [
            {
              linkTitle: 'Array.prototype.entries()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Which array method to use?',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'The Magic of Chaining Methods',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Data structures - Sets',
      sectionLinks: [
        {
          linkTitle: 'Set',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set`,
        },
        {
          linkTitle: 'Set',
          linkSource: `https://www.w3schools.com/js/js_object_sets.asp`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionLinks: [
        {
          linkTitle: 'Introducing JavaScript objects',
          linkSource: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Creating an object - Object literals',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Creating an object - Constructors',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Accesing an object (. vs [] notation)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Modifying an object',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'ES6 enhanced object literals',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: `Object methods and the 'this' keyword`,
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Rest Pattern in Objects',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Object methods',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Object.keys()',
          articleLinks: [
            {
              linkTitle: 'Object.keys() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Object.values()',
          articleLinks: [
            {
              linkTitle: 'Object.values() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Object.entries()',
          articleLinks: [
            {
              linkTitle: 'Object.entries() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
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
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Object.assign()',
          articleLinks: [
            {
              linkTitle: 'Object.assign() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Object.freeze()',
          articleLinks: [
            {
              linkTitle: 'Object.freeze() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Object.create()',
          articleLinks: [
            {
              linkTitle: 'Object.create() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Object.prototype.toString()',
          articleLinks: [
            {
              linkTitle: 'Object.prototype.toString() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Object descriptors',
      sectionLinks: [
        {
          linkTitle: 'Object.getOwnPropertyDescriptor()',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor`,
        },
        {
          linkTitle: 'Object.defineProperty()',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Object.getOwnPropertyDescriptor()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Object.defineProperty()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Data structures - Maps',
      sectionLinks: [
        {
          linkTitle: 'Map',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map`,
        },
        {
          linkTitle: 'Maps',
          linkSource: `https://www.w3schools.com/js/js_object_maps.asp`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionLinks: [
        {
          linkTitle: 'Classes in JavaScript',
          linkSource: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'OOP characteristics',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: '4 fundamental principles of OOP',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Traditional OOP (Classes and Instances)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'OOP in Javascript',
      sectionLinks: [
        {
          linkTitle: '',
          linkSource: '',
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle:
            'Classical OOP: Classes vs OOP in Javascript: Prototypes',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Prototypal Inheritance & The Prototype Chain',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Prototypes and inheritance',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Setting a prototype',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Shadowing properties',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Constructor Functions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Syntax',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'The prototype property',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'ES6 Classes',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Defining classes',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Class body',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Constructor method',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Prototype methods',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Static methods and properties',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Setters and Getters',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Protected Properties and Methods',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Private Class Fields and Methods',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Chaining Methods',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Object.create()',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle:
        'More real inheritance than Prototypal Inheritance (Child class and Parent class)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Prototypes and inheritance',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Inheritance Between "Classes": Constructor Functions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Inheritance Between "Classes": ES6 Classes',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Inheritance Between "Classes": Object.create',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Standard build-in objects',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Prototypal Inheritance on Built-In Objects',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionLinks: [
        {
          linkTitle: 'Standard built-in objects',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Template literals (Template strings)',
          articleLinks: [
            {
              linkTitle: 'Template literals (Template strings)',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'indexOf()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.indexOf()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'lastIndexOf()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.lastIndexOf()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'slice()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.slice()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'toLowerCase()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.toLowerCase()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'toUpperCase()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.toUpperCase()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'trim()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.trim()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'replace()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.replace()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'replaceAll()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.replaceAll()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'includes()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.includes()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'startsWith()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.startsWith()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'endsWith()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.endsWith()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'split()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.split()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'padStart()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.padStart()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'padEnd()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.padEnd()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'repeat()',
          articleLinks: [
            {
              linkTitle: 'String.prototype.repeat()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat`,
            },
          ],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Number() & Addition operator (+)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Number.parseInt()',
          articleLinks: [
            {
              linkTitle: 'Number.parseInt() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Number.parseFloat()',
          articleLinks: [
            {
              linkTitle: 'Number.parseFloat() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Number.isNaN()',
          articleLinks: [
            {
              linkTitle: 'Number.isNaN() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Number.isFinite()',
          articleLinks: [
            {
              linkTitle: 'Number.isFinite() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Number.isInteger()',
          articleLinks: [
            {
              linkTitle: 'Number.isInteger() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'toFixed()',
          articleLinks: [
            {
              linkTitle: 'toFixed() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed`,
            },
          ],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'max()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.max()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'min()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.min()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'round()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.round()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'ceil()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.ceil()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'floor()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.floor()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'trunc()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.trunc()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'random()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.random()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'abs()',
          articleLinks: [
            {
              linkTitle: 'Static function Math.abs()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs`,
            },
          ],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Date',
      sectionLinks: [
        {
          linkTitle: 'Date objects',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'new Date()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Date.now()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'getFullYear()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getFullYear()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'getMonth()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getMonth()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'getDate()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getDate()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'getDay()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getDay()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'getHours()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getHours()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'getMinutes()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getMinutes()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'getSeconds()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getSeconds()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'getTime() vs Convert a date to a number',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.getTime()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'toISOString()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.toISOString()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'toLocaleString()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.toLocaleString()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'setFullYear()',
          articleLinks: [
            {
              linkTitle: 'Date.prototype.setFullYear()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear`,
            },
          ],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
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
          articleText: [],
          articleSource: '',
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
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'navigator.language',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Error',
      sectionLinks: [
        {
          linkTitle: 'Error',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'new Error()',
          articleLinks: [
            {
              linkTitle: 'Error() constructor',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error`,
            },
          ],
          articleText: [],
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Microtask Queue (Job Queue)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Task Queue (Callback Queue)',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Timers',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'setTimeout()',
          articleLinks: [
            {
              linkTitle: 'The global setTimeout() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/setTimeout`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'clearTimeout()',
          articleLinks: [
            {
              linkTitle: 'The global clearTimeout() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'setInterval()',
          articleLinks: [
            {
              linkTitle: 'The global setInterval() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/setInterval`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'clearInterval()',
          articleLinks: [
            {
              linkTitle: 'The global clearInterval() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/clearInterval`,
            },
          ],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'const request = new XMLHttpRequest()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'request.open(‘GET’, ‘url’)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'request.send()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'request.addEventListener(‘load’, function)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'XMLHttpRequests: Chaining Requests',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Welcome to Callback Hell',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'fetch(‘url’)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'response.json()',
          articleLinks: [
            {
              linkTitle: 'Response.json()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Response/json`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'response.text()',
          articleLinks: [
            {
              linkTitle: 'Response.text()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Response/text`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'fetch() will always return a promise that need to by handled by consuming it',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Consuming Promises',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '.then(callback function with ‘response’ parameter)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'returning a Promise with response.json()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'returning a Promise with response.text()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Chaining Promises',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'returning a Promise and handle it outside the chain',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Handling Rejected Promises',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '.catch(callback function with ‘error’ parameter)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: '.finally(callback function)',
          articleLinks: [
            {
              linkTitle: 'Promise.prototype.finally()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Throwing Errors Manually',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
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
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Building a Simple Promise',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle:
            'new Promise(function(resolve, reject) {      resolve(fulfilled value);  reject(rejected value)  })',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Wrap old callback based functions into Promises',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Consuming Promises with Async/Await',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '‘async’ funtions',
          articleLinks: [
            {
              linkTitle: 'The async function',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: '‘await’ keyword',
          articleLinks: [
            {
              linkTitle: 'The await operator',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'An ‘async function’ will always return a promise',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'Store ‘await’ Promises results in variables like const',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Multiple Awaits',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Error Handling in Async Functions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'try {} catch(error) {}',
          articleLinks: [
            {
              linkTitle: 'The try...catch statement',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'Rethrowing an error when you have multiple async funtions',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Returning Values from Async Functions',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'An async function always returns a Promise',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Parallel Vs. Sequential Requests',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Promise.all([ ])',
          articleLinks: [
            {
              linkTitle: 'The try...catch statement',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Other Promise Combinators',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Promise.race([ ])',
          articleLinks: [
            {
              linkTitle: 'The Promise.race() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Promise.allSettled([ ])',
          articleLinks: [
            {
              linkTitle: 'The Promise.allSettled() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Promise.any([ ])',
          articleLinks: [
            {
              linkTitle: 'The Promise.any() method',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: `Top-Level ' await ' (ES2022)`,
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'DOM Node Types (Node vs Element)',
      sectionLinks: [
        {
          linkTitle: `What's the Difference between DOM Node and Element?`,
          linkSource: 'https://dmitripavlutin.com/dom-node-element/',
        },
      ],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Live Node Lists vs Static Node Lists',
      sectionLinks: [
        {
          linkTitle: '',
          linkSource: '',
        },
      ],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'HTML Attributes vs DOM Properties',
      sectionLinks: [
        {
          linkTitle: '',
          linkSource: '',
        },
      ],
      sectionText: [],
      sectionSource: ``,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'DOM Traversing & select DOM elements',
      sectionLinks: [
        {
          linkTitle: 'Traversing the DOM with JavaScript',
          linkSource: `https://zellwk.com/blog/dom-traversals/`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Introduction to DOM Traversing',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'document.documentElement',
          articleLinks: [
            {
              linkTitle: 'Document.documentElement',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'document.head',
          articleLinks: [
            {
              linkTitle: 'Document.head',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/head`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'document.body',
          articleLinks: [
            {
              linkTitle: 'Document.body',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/body`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'getElementById()',
          articleLinks: [
            {
              linkTitle: 'Document.getElementById()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'getElementsByTagName()',
          articleLinks: [
            {
              linkTitle: 'Document.getElementsByTagName()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'getElementsByClassName()',
          articleLinks: [
            {
              linkTitle: 'Document.getElementsByClassName()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'querySelector() (document/element)',
          articleLinks: [
            {
              linkTitle: 'Document.querySelector()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'querySelectorAll() (document/element)',
          articleLinks: [
            {
              linkTitle: 'Document.querySelectorAll()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'children',
          articleLinks: [
            {
              linkTitle: 'Element.children',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/children`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'childNodes',
          articleLinks: [
            {
              linkTitle: 'Node.childNodes',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'firstElementChild',
          articleLinks: [
            {
              linkTitle: 'Element.firstElementChild',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'lastElementChild',
          articleLinks: [
            {
              linkTitle: 'Element.lastElementChild',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'firstChild',
          articleLinks: [
            {
              linkTitle: 'Node.firstChild',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'lastChild',
          articleLinks: [
            {
              linkTitle: 'Node.lastChild',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'closest()',
          articleLinks: [
            {
              linkTitle: 'Element.closest()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/closest`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'parentElement',
          articleLinks: [
            {
              linkTitle: 'Node.parentElement',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'parentNode',
          articleLinks: [
            {
              linkTitle: 'Node.parentNode',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'previousElementSibling',
          articleLinks: [
            {
              linkTitle: 'Element.previousElementSibling',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'nextElementSibling',
          articleLinks: [
            {
              linkTitle: 'Element.nextElementSibling',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'previousSibling',
          articleLinks: [
            {
              linkTitle: 'Node.previousSibling',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'nextSibling',
          articleLinks: [
            {
              linkTitle: 'Node.nextSibling',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
      ],
    },
    {
      sectionTitle: 'Create, insert & remove DOM elements',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Introduction to create, insert and remove elements',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'innerHTML',
          articleLinks: [
            {
              linkTitle: 'Element.innerHTML',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'insertAdjacentHTML()',
          articleLinks: [
            {
              linkTitle: 'Element.insertAdjacentHTML()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'document.createElement()',
          articleLinks: [
            {
              linkTitle: 'Document.createElement()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'append()',
          articleLinks: [
            {
              linkTitle: 'Element.append()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/append`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'appendChild()',
          articleLinks: [
            {
              linkTitle: 'Node.appendChild()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'prepend()',
          articleLinks: [
            {
              linkTitle: 'Element.prepend()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'insertBefore()',
          articleLinks: [
            {
              linkTitle: 'Node.insertBefore()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'before()',
          articleLinks: [
            {
              linkTitle: 'Element.before()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/before`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'after()',
          articleLinks: [
            {
              linkTitle: 'Element.after()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/after`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'insertAdjacentElement()',
          articleLinks: [
            {
              linkTitle: 'Element.insertAdjacentElement()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'replaceWith()',
          articleLinks: [
            {
              linkTitle: 'Element.replaceWith()',
              linkSource: `https://developer.mozilla.org/en-US/docs/web/api/element/replacewith`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'replaceChild()',
          articleLinks: [
            {
              linkTitle: 'Node.replaceChild()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'remove()',
          articleLinks: [
            {
              linkTitle: 'Element.remove()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/remove`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'removeChild()',
          articleLinks: [
            {
              linkTitle: 'Node.removeChild()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'cloneNode()',
          articleLinks: [
            {
              linkTitle: 'Node.cloneNode()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Summary: Insert, Replace, Remove',
          articleLinks: [
            {
              linkTitle: '',
              linkSource: '',
            },
          ],
          articleText: [],
          articleSource: ``,
        },
      ],
    },
    {
      sectionTitle: 'Text, Styles, Classes & Attributes',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'innerText',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.innerText',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'textContent',
          articleLinks: [
            {
              linkTitle: 'Node.textContent',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'insertAdjacentText()',
          articleLinks: [
            {
              linkTitle: 'Element.insertAdjacentText()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'style',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.style',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'getComputedStyle()',
          articleLinks: [
            {
              linkTitle: 'Window.getComputedStyle()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'className',
          articleLinks: [
            {
              linkTitle: 'Element.className',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/className`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'classList (add, remove, toggle, contains)',
          articleLinks: [
            {
              linkTitle: 'Element.classList',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/classList`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'getAttribute()',
          articleLinks: [
            {
              linkTitle: 'Element.getAttribute()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'setAttribute()',
          articleLinks: [
            {
              linkTitle: 'Element.setAttribute()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'setProperty()',
          articleLinks: [
            {
              linkTitle: 'CSSStyleDeclaration.setProperty()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'attributes',
          articleLinks: [
            {
              linkTitle: 'Element.attributes',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'value',
          articleLinks: [
            {
              linkTitle: 'DOMTokenList.value',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/value`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'src',
          articleLinks: [
            {
              linkTitle: 'HTMLMediaElement.src',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'alt',
          articleLinks: [
            {
              linkTitle: 'HTMLImageElement.alt',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'href',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'hidden',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.hidden',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'id',
          articleLinks: [
            {
              linkTitle: 'Element.id',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/id`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'tagName',
          articleLinks: [
            {
              linkTitle: 'Element.tagName',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName`,
            },
          ],
          articleText: [],
          articleSource: ``,
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
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'disabled',
          articleLinks: [
            {
              linkTitle: 'HTMLSelectElement.disabled',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
      ],
    },
    {
      sectionTitle: 'Other methods & properties',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'getBoundingClientRect()',
          articleLinks: [
            {
              linkTitle: 'Element.getBoundingClientRect()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'clientHeight',
          articleLinks: [
            {
              linkTitle: 'Element.clientHeight',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'clientWidth',
          articleLinks: [
            {
              linkTitle: 'Element.clientWidth',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'offsetHeight',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.offsetHeight',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'scrollTo()',
          articleLinks: [
            {
              linkTitle: 'Element.scrollTo()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'scrollBy()',
          articleLinks: [
            {
              linkTitle: 'Element.scrollBy()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'scrollIntoView()',
          articleLinks: [
            {
              linkTitle: 'Element.scrollIntoView()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'blur()',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.blur()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'focus()',
          articleLinks: [
            {
              linkTitle: 'HTMLElement.focus()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'isEqualNode()',
          articleLinks: [
            {
              linkTitle: 'Node.isEqualNode()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'nodeValue',
          articleLinks: [
            {
              linkTitle: 'Node.nodeValue',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'Node.contains()',
          articleLinks: [
            {
              linkTitle: 'Node.contains()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Node/contains`,
            },
          ],
          articleText: [],
          articleSource: ``,
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
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'select()',
          articleLinks: [
            {
              linkTitle: 'HTMLInputElement.select()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'content',
          articleLinks: [
            {
              linkTitle: 'HTMLTemplateElement.content',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/content`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
        {
          articleTitle: 'importNode()',
          articleLinks: [
            {
              linkTitle: 'Document.importNode()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode`,
            },
          ],
          articleText: [],
          articleSource: ``,
        },
      ],
    },
    {
      sectionTitle: 'Changing Multiple Elements',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: '2 Ways NOT to Add Events',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
          linkTitle: `What exactly is the parameter e (event) and why pass it to JavaScript functions?`,
          linkSource: `https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions`,
        },
      ],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'e.preventDefault()',
          articleLinks: [
            {
              linkTitle: 'Event.preventDefault()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault`,
            },
          ],
          articleText: [],
          articleSource: '',
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
          articleText: [],
          articleSource: '',
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
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'e.composedPath()',
          articleLinks: [
            {
              linkTitle: 'Event.composedPath()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'e.stopPropagation()',
          articleLinks: [
            {
              linkTitle: 'stopPropagation() Event Method',
              linkSource: `https://www.w3schools.com/jsref/event_stoppropagation.asp`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'e.key',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'Bubbling',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Capturing',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Stop propagation with e.stopPropagation()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'click',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'keypress',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'scroll',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'mouseover vs mouseenter vs mousemove',
          articleLinks: [
            {
              linkTitle: 'mouseover vs mouseenter vs mousemove',
              linkSource: `https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseenter_mouseover#:~:text=mouseenter%20and%20mouseover.-,The%20mouseover%20event%20triggers%20when%20the%20mouse%20pointer%20enters%20the,moved%20over%20the%20div%20element.`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'mouseout',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'wheel',
          articleLinks: [
            {
              linkTitle: 'Element: wheel event',
              linkSource:
                'https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event',
            },
          ],
          articleText: [],
          articleSource: `/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___wheel.html`,
        },
        {
          articleTitle: 'input',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'change',
          articleLinks: [
            {
              linkTitle: 'HTMLElement: change event',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'hashchange',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'load',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'blur',
          articleLinks: [
            {
              linkTitle: 'Element: blur event',
              linkSource:
                'https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event',
            },
          ],
          articleText: [],
          articleSource: `/src/markdowns/13_Web_API___Document_Object_Model_(DOM)___Events/Types_of_events___blur.html`,
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'keypress',
          articleLinks: [
            {
              linkTitle: 'Document: keypress event',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'keyup',
          articleLinks: [
            {
              linkTitle: 'Document: keyup event',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'keydown',
          articleLinks: [
            {
              linkTitle: 'Document: keydown event',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Form Events & PreventDefault',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Input & Change Events',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Passing Arguments to Event Handlers',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Events on Multiple Elements',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Lifecycle DOM Events',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
      sectionLinks: [
        {
          linkTitle: 'Intersection Observer API',
          linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API`,
        },
      ],
      sectionText: [],
      sectionSource: `/src/markdowns/14_Others_Web_APIs/Intersection_Observer_API.html`,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'navigator',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'navigator.language',
          articleLinks: [
            {
              linkTitle: 'Navigator.language',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'navigator.geolocation.getCurrentPosition()',
          articleLinks: [
            {
              linkTitle: 'Geolocation API',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API`,
            },
          ],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'localStorage.setItem()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'localStorage.getItem()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'localStorage.removeItem()',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'JSON.stringify()',
          articleLinks: [
            {
              linkTitle: 'JSON.stringify()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify`,
            },
          ],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'JSON.parse()',
          articleLinks: [
            {
              linkTitle: 'JSON.parse()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse`,
            },
          ],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'window.location.reload()',
          articleLinks: [
            {
              linkTitle: 'The Window.location read-only property',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/location`,
            },
          ],
          articleText: [],
          articleSource: '',
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
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'window.location.href',
          articleLinks: [
            {
              linkTitle: 'The Window.location read-only property',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/location`,
            },
            {
              linkTitle: 'The location property',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Location/href`,
            },
          ],
          articleText: [],
          articleSource: '',
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
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'window.open(‘url’, ‘_blank’)',
          articleLinks: [
            {
              linkTitle: `The Window interface's open() method`,
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/open`,
            },
          ],
          articleText: [],
          articleSource: '',
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
          articleText: [],
          articleSource: '',
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
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'window.scrollTo()',
          articleLinks: [
            {
              linkTitle: 'Window.scrollTo()',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo`,
            },
          ],
          articleText: [],
          articleSource: '',
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
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: 'new FormData()',
          articleLinks: [
            {
              linkTitle: 'The FormData() constructor',
              linkSource: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData`,
            },
          ],
          articleText: [],
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Exporting and Importing in native ES6 Modules',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: `/src/markdowns/15_Modern_JavaScript_Development___Modules_and_Tooling/Exporting_and_Importing_in_native_ES6_Modules.html`,
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Named exports/imports in ES6 Modules',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Default exports/imports in ES6 Modules',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'The Module Pattern with IIFE',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'CommonJS & AMD Modules',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Introduction to NPM',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Model-View-Controller (MVC) Arhitecture',
      sectionLinks: [
        {
          linkTitle: 'Model-View-Controller (MVC) Arhitecture',
          linkSource: `https://blog.sessionstack.com/how-javascript-works-writing-modular-and-reusable-code-with-mvc-16c65cbd9f64`,
        },
      ],
      sectionText: [],
      sectionSource: `/src/markdowns/15. Modern JavaScript Development - Modules and Tooling/Model-View-Controller (MVC) Arhitecture.html`,
      sectionArticles: [
        {
          articleTitle: 'Why we worry about software arhitecture?',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle:
            'The perfect architecture (Structure, Maintainability, Expandability)',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'Components of any arhitecture',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
        {
          articleTitle: 'How the MVC architecture works in JavaScript',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
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
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Refactoring Our Code: The DRY Principle',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Prettier',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Terminal commands',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
          articleSource: '',
        },
      ],
    },
    {
      sectionTitle: 'Markdowns',
      sectionLinks: [{ linkTitle: '', linkSource: '' }],
      sectionText: [],
      sectionSource: '',
      sectionArticles: [
        {
          articleTitle: '',
          articleLinks: [{ linkTitle: '', linkSource: '' }],
          articleText: [],
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
