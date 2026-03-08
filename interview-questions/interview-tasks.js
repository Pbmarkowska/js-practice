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

/*
Napisz funkcję, która zwróci true jeśli dana liczba jest potęgą 2 i false jeśli tak nie jest
Kazda potega dwojki w systemie binarnym ma dokladnie jeden bit ustawiony na 1


const isPowerOfTwo = (number) => {
  return number > 0 && (number & (number - 1)) === 0;
};

console.log(isPowerOfTwo(8));
*/

/*
Co zwróci ponizszy kod?
let num = 10 -> deklaracja zmiennej w scopie globalnym
let num = 20 -> deklaracja zmiennej w scopie lokalnym
zmienne z let mają zakres blokowy
num zostało uzyte zanim zostalo zainicjalizowane, stad ReferenceError


let num = 10;

const foo = () => {
  console.log(num);
  let num = 20;
};

foo();
*/

/*
Co zwroci typeof null i dlaczego

typeof null zwroci object, to historyczny blad w Javascript, ktory nigdy nie zostal naprawiony ze wzgledu na kompatybilnosc wsteczna
W pierwszej wersji silnika Javascript wartosci byly przechowywane jako tagged values. Pierwsze bity okreslały typ danych, czyli np.
object - 000
int - 001
string - 010
bool - 011

Null było zapisane jako 00000000 - czyli same zera, a tag 000 oznaczał obiekt, więc tak interpreter go rozpoznawał.
*/

/*
Callstack 
JS wykonuje kod synchronicznie, linia po linii. Callstack to struktura LIFO: Last In, First Out.


function first() {
  console.log("First starts");
  second();
  console.log("First ends");
}

function second() {
  console.log("Second runs");
}

first();
*/

/*
Napisz funkcję, która zwróci jedyną nieparzystą liczbę


const array = [2, 4, 6, 7, 12];

function findOdd(integers) {
  return integers.filter((number) => {
    return number % 2 !== 0;
  });
}

console.log(findOdd(array));
*/

/*
Wyjaśnij callstack: microtasks vs macrotasks.
Program wypisze: start, end, promise, timeout
Kolejność jest następująca:
1. Kod synchroniczny
2. Wszystkie microtasks
3. Jeden macrotask
4. Znowu microtasks


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
*/
