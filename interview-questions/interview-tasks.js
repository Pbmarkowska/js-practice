/*
Zwróć obiekt z podsumowaniem:

* total – liczba wszystkich testów
* passed – liczba testów zakończonych sukcesem
* failed – liczba testów zakończonych porażką
* passRate – procent testów passed (np. 60)
* Zwróć nazwę najdłużej trwającego testu, który nie przeszedł (failed).
* Zwróć tablicę nazw testów (name), które trwały krócej niż 100 ms.

Wymagania:
użyj map / filter / reduce
nie modyfikuj oryginalnej tablicy


const tests = [
  { name: 'Login test', status: 'passed', duration: 120 },
  { name: 'Checkout test', status: 'failed', duration: 300 },
  { name: 'Search test', status: 'passed', duration: 80 },
  { name: 'Profile test', status: 'failed', duration: 200 },
  { name: 'Logout test', status: 'passed', duration: 50 }
];

const passedTestsCount = tests.filter((test) => test.status === 'passed').length
const failedTestsCount = tests.filter((test) => test.status === 'failed').length

const testResults = {
    total: tests.length,
    passed: passedTestsCount,
    failed: failedTestsCount,
    passRate: Math.round(passedTestsCount/tests.length * 100)
}

console.log("testResults", testResults);

const failedMax = tests.filter((test) => test.status === 'failed').reduce((acc, value) => {
    if (value.duration > acc.duration) {
        return value;
    } else {
        return acc;
    }
}).name;

console.log("failedMax", failedMax);

const fastest = tests.reduce((acc, value) => {
    if (value.duration < 100) {
        acc.push(value.name)
    }
    return acc;
}, []);

console.log("fastests", fastest);
*/

/*

Napisz pętlę, która tworzy nową tablicę tylko z liczbami parzystymi.

const numbers = [1,2,3,4,5,6,7,8,9,10]

const even = numbers.reduce((acc, value) => {
    if (value % 2 === 0) {
        acc.push(value);
    }
    return acc;
},[]);

console.log("even", even);

*/

/*
"Automation"
Napisz pętlę, która odwróci litery w słowie.


const word = "Automation";
let reversed = "";

for (let i = 0; i < word.length; i++) {
    reversed = word[i] + reversed
}

console.log(reversed)
*/

/*
Napisz pętlę, która zsumuje wszystkie liczby w tablicy


const numbers = [5, 10, 15, 20, 25]

const sum = numbers.reduce((acc, value) => acc+=value);

console.log("sum", sum);
*/


/*
Napisz pętlę, która tworzy nową tablicę z liczbami większymi niż 10.

const numbers = [12, 7, 9, 20, 5, 18]

const greaterThan10 = numbers.filter(n => n > 10);

console.log("greaterThan10", greaterThan10);
*/