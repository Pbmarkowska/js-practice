// reduce exercises

/*
TASK 1 - Sum all numbers - DONE

Expected output → 30


const nums = [5, 10, 15];

const sum = nums.reduce((acc, num) => acc + num);

console.log("sum", sum);
*/

/* 
TASK 2 - Count occurrences - DONE

Expected output → { a: 3, b: 2, c: 1 }


const letters = ["a", "b", "a", "c", "b", "a"];

const occurrences = letters.reduce((acc, value ) => {
    if (acc[value]) {
      acc[value] = acc[value] + 1;
    } else {
      acc[value] = 1;
    }
    return acc;
}, {});

console.log("occurs", occurrences);
*/

/* 
TASK 3 - Group by property - DONE

Expected output → { 20: ["Ana", "Tom"], 30: ["Leo"] }

Muszę zwrócić obiekt, w którym property to number z obiektu z tablicy people z przypisaną do niego wartością, będącą tablicą
z imionami (name), w których age jest taki sam


const people = [
  { name: "Ana", age: 20 },
  { name: "Tom", age: 20 },
  { name: "Leo", age: 30 }
];

const groupByProperty = people.reduce((acc, { name, age}) => {
  if (!acc[age]) {
    acc[age] = []
  }
  acc[age].push(name);
  return acc;
},{});

console.log("groupBy", groupByProperty);
*/

/*
TASK 4 - Find max value - DONE

Expected output → 9

Tablica ma określoną długość - jest w niej ileś elementów. Interesuje mnie największy element, 
czyli muszę sprawdzić czy dany element jest większy niz kazdy pozostały.

initialValue - moze bc 0, jesli wiem, ze wartosci sa tylko dodatnie
jesli moga byc ujemne, lepiej nie podawac initialValue, iteracja zacznie sie defaultowo od pierwszego elementu.


const nums = [3, 9, 2, 7];

const maxValue = nums.reduce((acc, value) => {
  if (acc > value) {
    return acc;
  } else {
    return value;
  }
});

console.log("maxValue", maxValue);
*/

/*
TASK 5 - Build an object that counts how many times each number appears. - DONE

Output:
const numbersCount = {"1": 1, "2": 2, "3":3...}


const numbers = [1, 2, 2, 3, 3, 3, 4];

const numbersCount = numbers.reduce((acc, value) => {
  if (acc[value]) {
    acc[value] = acc[value] + 1
  } else {
    acc[value] = 1;
  }
  return acc;
}, {});

console.log("numbersCount", numbersCount);
*/

/*
TASK 6  - Powtórka

// Sum all the numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, value) => acc + value);
console.log("sum", sum);

// Expected output: {apple: 3, banana: 2, orange: 1}
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, value) => {
  // if (acc[value]) {
  //   acc[value] = acc[value] + 1;
  // } else {
  //   acc[value] = 1;
  // }
  // return acc;

  acc = (acc[value] || 0) + 1
  return acc
},{});

console.log("fruitCount", fruitCount)

// Flatten the array
const arrays = [[1, 2], [3, 4], [5]];

const singleArray = arrays.reduce((acc, value) => {
  // acc = acc.concat(value);
  // return acc;

  acc.push(...value);
  return acc;
},[]);

console.log("singleArray", singleArray);

const cart = [
  { name: 'Book', price: 20 },
  { name: 'Pen', price: 5 },
  { name: 'Notebook', price: 15 }
];

// Count total cart value
const totalCartValue = cart.reduce((acc, value) => {
  acc = value.price + acc;
  return acc;
}, 0);

console.log("totalCartValue", totalCartValue);


// Group by role
/*
Expected output:
{
  admin: [
    { name: 'Anna', role: 'admin' },
    { name: 'Kasia', role: 'admin' }
  ],
  user: [
    { name: 'Bartek', role: 'user' },
    { name: 'Tomek', role: 'user' }
  ]
}

const users = [
  { name: 'Anna', role: 'admin' },
  { name: 'Bartek', role: 'user' },
  { name: 'Kasia', role: 'admin' },
  { name: 'Tomek', role: 'user' }
];

const grouppedByRole = users.reduce((acc, { name, role}) => {
  if (!acc[role]) {
    acc[role] = []
  }

  acc[role].push({name, role});
  
  return acc;
},{})

console.log("grouppeByRole", grouppedByRole);
*/