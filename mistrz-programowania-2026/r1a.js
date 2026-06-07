/*
Wejście
W pierwszym i jedynym wierszu wejścia znajduje się jedna liczba całkowita ℎ (1 ≤ ℎ ≤ 1012) oznaczająca oryginalną
wysokość szklanki. Szklanka jest wypełniona do połowy wysokości.

Wyjście
Twój program powinien wypisać jedną liczbę całkowitą: minimalną wysokość szklanki (wyrażoną liczbą całkowitą) potrzebną
do przechowania całego płynu.
*/

// import fs from "fs";

// const program = (h) => {
//   return Math.ceil(h / 2);
// };

// const h = Number(fs.readFileSync(0, "utf8"));

// console.log(program(h));

/*
 */
const start = process.hrtime.bigint();

const program = (h) => Math.ceil(h / 2);

console.log(program(9));

const end = process.hrtime.bigint();

console.log(`Czas: ${(end - start) / 1000000n} ms`);

console.log(program(18));
