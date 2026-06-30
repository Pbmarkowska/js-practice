/*
Pomóż domownikom... Napisz program, który generuje hasło do Wi-Fi.
W pierwszym i jedynym wierszu wejścia znajduje się jedna liczba (1 ≤ 𝑛 ≤ 1000) oznaczająca ilość składników hasła
Twój program powinien wypisać jedną liczbę – hasło do Wifi. 
Hasło składa się z liczb parzystych, ułożonych po kolei bez
spacji, począwszy od liczby parzystej 2.
Liczbę powtórzeń danej liczby parzystej k określa poprzednia liczba nieparzysta k-1.
Twoje hasło składa się z tylu różnych
liczb parzystych, ile wynosi n.

n - ilość składników hasła
k - liczba parzysta, składnik hasła, ułozona rosnąco (2,4,6...)
k -1 - liczba powtorzen danej liczby parzystej, okreslona przez poprzedzajaca ja liczbe nieparzysta k

parzyste skladniki hasla: 2,4,6,8 -> mamy
nieparzyste skladniki: 1,3,5,7 -> mamy
hasło:
jeśli n = 3, musimy zbudowac haslo 3 skladnikowe (z cyfr 2,4,6)
to hasło, np.: 2144466666

potrzebujemy: jesli podamy n, musimy dostac liczby parzyste od 2 w góre, w zaleznosci od tego jakie jest n
*/

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim();

const buildPassword = (n) => {
  let password = "";

  for (let i = 1; i <= n; i++) {
    const even = i * 2;
    const odd = i * 2 - 1;

    password += String(even).repeat(odd);
  }
  return password;
};

console.log(buildPassword(5));
