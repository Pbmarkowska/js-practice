/*
Wejście
W pierwszym i jedynym wierszu wejścia znajduje się jedna liczba całkowita ℎ (1 ≤ ℎ ≤ 1012) oznaczająca oryginalną
wysokość szklanki. Szklanka jest wypełniona do połowy wysokości.

Wyjście
Twój program powinien wypisać jedną liczbę całkowitą: minimalną wysokość szklanki (wyrażoną liczbą całkowitą) potrzebną
do przechowania całego płynu.
*/

const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").trim();

const h = BigInt(input);

const program = (h) => Math.ceil(h / 2);

program(9);
