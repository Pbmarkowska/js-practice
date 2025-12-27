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