# Model-View-Controller (MVC) in Software Arhitecture

## Why we worry about software arhitecture?

As the development of an application progresses, the codebase might get quite significant, and the need to separate the ==**application logic**== from the ==**user interface**== layer becomes evident. This separation allows asynchronous and rapid development of applications since the backend and frontend engineers can work on the project simultaneously. It also allows developers to write clean and reusable code.

### **Structure** - organize our code

Just like a house, software also needs a structure. Now in software, structure basically means ==how we organize and divide the code into different **modules**, **classes** and **functions**==. So all these will basically hold our code together and give it structure.

### **Maintainability** - change code in the future

When we build a project, we always need to think about the future and keep in mind that the ==project is never really done, it is never finished==. We will always need to change things in the future and we will need to maintain the project and that only works if the project is nicely structured.

### **Expandability** - add new features

We also need to be able to easily add new features.

### The perfect architecture

Now, in order to achieve that perfect architecture, we can of course ==create our **own architecture** from scratch==. However, that only works with a really small projects. But when the project grows more complex, then it's going to be very hard to achieve a good architecture completely on our own.

So instead, we can opt for a well established ==**architecture pattern**== that developers have been using for years, or even for decades. An examples of that are ==**Model View Controller**==, ==**Model View Presenter**==, ==**Flux**==, and many other architectures.

Now these days, in modern web development, many developers actually ==use a **framework**== like React, Angular, Vue or Svelte to take care of the architecture for them. So in this case, developers don't have to think a lot about architectures on their own. And probably this is actually a good idea at a certain point, especially for large scale applications.

However, and this is key, as I said many times before, it is very important that you really know JavaScript before switching to some of these frameworks. And in my opinion, that includes knowing how to implement an architecture by yourself.

## Components of any arhitecture

Now no matter where the architecture comes from and who develops it, there are some ==components that any architecture must have==. Any good architecture has ==a way of separating all these components==, so instead of mixing everything together in one big file and in one big mess.

![arhitecture_components](../../img/arhitecture_components.jpg)

> **Note**: **Business logic** is basically all the ==code that solves the actual business problem==, so that's code that is directly related to what the business does and to what it needs. If your business is WhatsApp, then your business logic will include sending messages. If your business is a bank, then one of the many parts of business logic will be to store transactions but if you business is a budget manager, then your business logic will certainly include calculating taxes, so you get the point. So essentially, business logic is the logic that is really related to solve the problem that the business set out to solve in the first place.

> **Note**: **State** is one of the most important aspects of any web application. The application state is essentially what ==**stores all the data**== about the application that is running in the browser, so the data about the applications front-end basically.
>
> The state should store any data that you might fetch from an API or data that the user inputs, or what page the user is currently viewing and so on. This data should be the so called 'single source of truth', which should be ==kept in sync with the user interface==, so that means that if some data changes in the state then the user interface should reflect that. And the same is true the other way around, so if something changes in the UI, then the state should also change.
>
> Now storing and displaying data and keeping everything in sync is one of the most difficult tasks when building web applications and that's why there are actually many ==state management libraries== like ==**Redux**== or ==**MobX**==. Normaly, in small project, we can keep things very simple and use a simple object to store our entire state (data).

## Model-View-Controller (MVC) Arhitecture

The goal of the MVC architecture is to allow developers to write ==**modular**== and ==**reusable**== code. MVC is a software architecture that _separates program logic into three interconnected components_: **Model**, **View**, and **Controller** components. The reason for this separation is to create an individual representation of data from user input to presentation of data to users. What this means is that the MVC architecture allows developers to separate the way data is collected from users from how data is presented to users.

### How the MVC architecture works in JavaScript

###### Model

The Model is the component that manages the ==**data**== of the application. This is the central part of the MVC architecture, it _receives commands from the Controller_ and executes the input of the user. This component doesn’t rely on the user interface as it gets commands directly from the Controller.

The Model is all about the applications data and so that's why it usually contains the ==**state**== and also the ==**business logic**== that manipulates the state, so these two should be kept closely together. Now, the Model is also what contains the ==**HTTP library**== that might get some data from the web, so like from some API or some back-end. So HTTP library is also about the data and so it also goes into the Model.

###### View

The View component is in charge of the final information that will be represented in the ==**user interface**==. This component _receives input from the user_ and also _displays information from the Controller/Model to the user_. Some inputs from users don’t need to be sent to the Model as they don’t require data management.

###### Controller

The Controller component is the ==**connector** between the Model and View components==. This component is the brain of your application, it is in charge of converting input from View into commands. These commands determine how information is displayed in the View or processed in the Model.

The Controller is what contains the ==**application logic**== and it kind of sits between the Model and the View. It basically creates a bridge between the Model and a View, which in fact should know nothing about each other. So again, the Model and the View will exist completely independent from one another and not even knowing that the other one exists, basically.
In fact, ==one of the big goals of the MVC arhitecture is to actually **separate business logic from application logic**==, which makes developing the application so much easier but as a consequence, we then need something to connect these two parts and so that is the Controller.

### Example

Let's take a look at a typical ==flow of **actions** and of **data**== as soon as some event happens on the user interface, for example a click event.

![mvc_arhitecture](../../img/mvc_arhitecture.jpg)

To start, it's going to be the Controller who will handle that event, because handling an event is doing something in the application and that is clearly part of the application logic.
This click handling might involve updating the user interface and also ask the Model for some data. So we can say that the ==Controller **dispatches tasks** to Model and to the View== or in other words, it controls and orchestrates this entire action, and in fact, the whole application itself.
Now asking the Model for some data might, of course, involve doing an AJAX request to the web, and so that's exactly what the Model does. Then, when the data arrives, the Controller takes the data and sends it to the View. So finally to finish, the View will render that data to the user interface and finish this whole cycle.

Now in the diagram above, you see two types of arrows. So the dotted arrows represent ==**data flow**== between the different parts, while the solid arrows represent actual ==**function calls**== and ==**module imports**==. So analyzing this, we can see that **_it's only the Controller who imports and calls functions from the Model and from the View, but never the other way around_**.
So as I mentioned before, _the Model and View are in fact completely standalone and completely isolated, so again, they don't import each other and they don't even import the Controller_. In fact, they don't even know that the Controller exists. All they do is to basically just sit there waiting to get some instructions from the Controller and this part is pretty important to understand.

## Reference

1. [The Complete JavaScript Course: From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/)
2. [How JavaScript works: modularity and reusability with MVC - sessionstack.com](https://blog.sessionstack.com/how-javascript-works-writing-modular-and-reusable-code-with-mvc-16c65cbd9f64)
