## Runtime

JavaScript is an **interpreted language**, not a compiled one. This means that it **needs an interpreter which converts the JavaScript code to a machine code**. There are several types of **interpreters** (known as **Engines**). The most popular browser engines are V8 (Chrome), Quantum (Firefox) and WebKit (Safari).

**A JavaScript Runtime is basically a container which includes all the different pieces that are necessary to execute JavaScript code**. The heart of every JavaScript Runtime is the Engine (V8, Quantum, WebKit, etc.), so in Engine code is actually executed and the objects are stored in memory.

Each engine contains a **Memory Heap**, a **Call Stack**, a **Web API**, a **Callback Queue** and an **Event Loop**, all implemented in its own way for faster and safer interpretation of the JavaScript code.

A stack is a continuous region of memory, **allocating local context for each executed function**. A heap is a much larger region, **storing everything allocated dynamically**. A Call Stack is a data structure which basically **records where we are in the program**.

Next we have the **Web APIs** environment. These are some APIs provided to the Engine, but which are actually **not part of the JavaScript language itself**, so that's things like the DOM, Timers, the fetch API, the geolocation API and so on and so forth.

Next up, there is the **Callback Queue**, and this is a data structure that holds all the ready to be executed callback functions that are attached to some event that has occurred. Finally, whenever the Call Stack is empty, the **Event Loop** takes callbacks from the Callback Queue and puts them into Call Stack so that they can be executed.

So the **Event Loop is the essential piece that makes asynchronous behavior possible in JavaScript**. It's the reason why we can have a non blocking concurrency model in JavaScript.

![asynchronous_runtime](D:\Websites\Projects\Cioloca Aurelian__Javascript Resume\src\img\asynchronous_runtime.jpg)

Each browser has its own version of **JavaScript Runtime** with a set of **Web API's**, methods that developers can access from the `window` object.