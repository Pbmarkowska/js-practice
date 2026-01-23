/*
TASK 1 - Write a for loop that calculates the sum of all numbers from 1 to 10 (inclusive).


let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum = sum + i;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
const sum = numbers.reduce((acc, value) => acc + value);
console.log(sum);
*/

/* 
TASK 2 - Write a for loop that calculates 5!

result = 5 * 4 * 3 * 2 * 1
/

let result = 1;

for (let i = 1; i <= 5; i++) {
    result = result * i;
}

console.log("result", result);

const numbers = [1,2,3,4,5];
const factorial = numbers.reduce((acc, value) => {
    return acc * value;
},1);
console.log("factorial", factorial);

*/

/*
TASK 3 - Znajdź największą liczbę w tej tablicy
Użyj pętli
Wypisz ją w konsoli


const numbers = [3, 7, 2, 9, 12, 4, 6]

let biggestNumber = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (biggestNumber < numbers[i]) {
        biggestNumber = numbers[i]
    }
}

console.log("biggestNumber", biggestNumber);

const biggest = numbers.reduce((acc, value) => {
    if (value > acc) {
        return value;
    }
    return acc;
});

console.log("biggest", biggest);
*/
