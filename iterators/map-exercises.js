/* map exercises

TASK 1 - Double the numbers

const nums = [1, 2, 3, 4];

const doubleNums = nums.map(number => number * 2);

console.log("doubled nums", doubleNums);
*/

/* 
TASK 2 - Extract property

Expected output → ["Ana", "Tom", "Leo"]


const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Tom" },
    { id: 3, name: "Leo" }
  ];

  const names = users.map(element => element.name);

  console.log("names", names);
  */

  /*
  TASK 3 - Format strings

  Expected output → ["Ana", "Tom", "Leo"]
  

  const names = ["ana", "tom", "leo"];

  const capitalized = names.map(element => element.charAt(0).toUpperCase() + element.slice(1));
  const capitalized1 = names.map(element => `${element.charAt(0).toUpperCase()}${element.slice(1)}`);

  console.log("capitalized", capitalized1);
  */

  /*
  TASK 4 - Add derived field

  Expected output → [{ name, price, priceWithTax }]
  tax = 20%

  Muszę dodać do kazdego obiektu nowe property: priceWithTax.
  Cena z podatkiem ma wynieść cena podstawowa + 20%.
  

  const products = [
    { name: "Book", price: 10 },
    { name: "Pen", price: 2 }
  ];

  const taxedProducts = products.map(product => {
    return {
        ...product, 
        "priceWithTax": product.price * 1.2
    }
  });
    
  console.log("taxed", taxedProducts);
  

  const products = [
    { name: "Book", price: 10 },
    { name: "Pen", price: 2 }
  ];

  products.map(product => {

  });

  products.mapt(function(product) {
    
  });
  */

  /*
  TASK 5 - Create a new array that contains only the users’ names in uppercase.
  const userNames = [ 'ALICE', 'BOB'...];

  */

  const users = [
  { id: 1, name: "alice", age: 25 },
  { id: 2, name: "bob", age: 30 },
  { id: 3, name: "charlie", age: 28 }
];

const userNames = users.map(({ name }) => name.toUpperCase());
console.log("userNames", userNames)