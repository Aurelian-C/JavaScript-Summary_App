# The Module Pattern with IIFE

Module Pattern was ==used before ES6 Modules== in order to ==implement modules== in Javascript.

Just like in regular modules, the main goal of the Module Pattern is to ==encapsulate functionality==, to have ==private data== and to ==expose a public API== and the best way of achieving all that is by simply using a function, because ==functions give us private data by default== and ==allow us to return values==, which can become our public API.

We implement Module Pattern by writing a function and usually we write an IIFE (Immediately Invoked Function Expression) and the reason for that is because this way we don't have to call it separately and we can also ensure that it's only called once. So it's very important that _this function is only created once because the goal of this function is not to reuse code by running it multiple times, the only purpose of this function is to create a new scope and return data just once_.

_All the data that IIFE returns need to be stored in a variable because if you don’t do that the return data kind of disappears into nothing_.

```js
const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart.addToCart('apple', 4);
ShoppingCart.addToCart('pizza', 2);

console.log(ShoppingCart2.shippingCost); //on the other hand, the properties that we basically wanted to make private, they are not accessible, so they are undefined.
```

The problem with Module Pattern is that if we wanted one module per file, like we have with ES6 modules, then we would have to create different scripts and link all of them in the HTML file and that then creates a couple of problems, like we have to be careful with the order in which we declare them in HTML, and we would have all of the variables living in the global scope, and finally, we also couldn't bundle them together using a module bundler. So the module pattern that we just learned about does indeed work quite good but it has some limitations and that's exactly the reason why native modules were added to the language in ES6.
