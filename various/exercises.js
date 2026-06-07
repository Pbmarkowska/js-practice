/*
const cart = [
  { name: "Laptop", price: 3500, quantity: 1 },
  { name: "Myszka", price: 120, quantity: 2 },
  { name: "Klawiatura", price: 250, quantity: 1 },
  { name: "Monitor", price: 900, quantity: 2 },
];

Napisz funkcję getTotal(cart), która:

zwróci całkowitą wartość koszyka
uwzględni quantity


const cart = [
  { name: "Laptop", price: 3500, quantity: 1 },
  { name: "Myszka", price: 120, quantity: 2 },
  { name: "Klawiatura", price: 250, quantity: 1 },
  { name: "Monitor", price: 900, quantity: 2 },
];

const getTotalCart = (cart) =>
  cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

const getTotalCart2 = (cart) =>
  cart
    .map(({ price, quantity }) => price * quantity)
    .reduce((acc, value) => acc + value, 0);

console.log("getTotalCard", getTotalCart(cart));
console.log("getTotalCard", getTotalCart2(cart));
*/
