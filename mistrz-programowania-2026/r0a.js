/*
Wejście
W pierwszym i jedynym wierszu wejścia znajduje się jedna liczba (1 ≤ 𝑛 ≤ 10^12) oznaczająca ilość dni, które uczeń opuścił
w szkole.

Wyjście
Twój program powinien wypisać jedną liczbę całkowitą 𝑛 - ilość działów, które musi nadrobić uczeń.
Dla 3-ech dni nieobecności, uczeń musi nadrobić 4 działy.
W przypadku nieobecności inną liczbę dni, ilość działów do
nadrobienia jest proporcjonalna.

W przypadku gdy ilość działów do nadrobienia nie jest liczbą całkowitą, należy wypisać wynik zaokrąglony do dołu -
najbliższej mniejszej liczby całkowitej.

*/

/*
3 dni = 4 działy

1 dzień = 4/3
*/
const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").trim();

const absenceDays = BigInt(input);
const chapterPerAbsenceDay = Math.floor(4 / 3);

const program = (absenceDays) => absenceDays * chapterPerAbsenceDay;

console.log(program(14));
