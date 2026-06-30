/*
W sklepie ustawiono 𝑛 choinek od lewej do prawej w kolejności rosnącej wysokości (i-ta choinka od lewej ma 𝑖 metrów wysokości).
Jeśli znajdziesz choinkę o swojej wysokości, dostaniesz ją za darmo!
Możesz podejść do dowolnej i-tej choinki i sprawdzić, czy jesteś od niej wyższy, niższy, czy jest dokładnie odpowiednia.
Twoim celem jest znaleźć darmową choinkę przy jak najmniejszej liczbie porównań.

dane:
// in cm
const myHeight: boolean = 153

// i.height = n
const i1 = {
    height: n
}

lista jest posortowana (wyszukiwanie liniowe odpada - nieefektywne)
const treeList = [1i, 2i, 3a, 4i...i]
treeList.length: n (1 ≤ 𝑛 ≤ 10^18)

szukane:
return: boolean
true if myHeight = i[index].height
false otherwise
*/

/*
// liczba choinek w tablicy
let n = 5;

// mój wzrost
let myHeight = 4;

// pusta lista choinek
const treeList = [];
console.log("treList", treeList);

// zapewłnienie listy choinek obiektami z właściwością height
while (treeList.length < n) {
  treeList.push({
    name: `tree_` + Number(treeList.length + 1),
    id: treeList.length + 1,
    height: treeList.length + 1,
  });
}
console.log("treList", treeList);
// posortowanie listy choinek rosnąco względem właściwości height;

const treeListSorted = treeList.sort((a, b) => a.height - b.height);
console.log("treeListSorted", treeListSorted);
*/

/*
// sprawdzaj wszystkie choinki po kolei, a jeśli wzrost choinki jest równy mojemu wzrostowi, zwróć index
const getFreeTree = () => {
  let winIndex;
  for (let i = 0; i < treeList.length; i++) {
    if (treeList[i].height === myHeight) {
      winIndex = i;
      console.log(`You have a free tree at index ${i}`);
      return winIndex;
    }
  }
  console.log("No tree free");
  return -1;
};

// wywołanie funkcji
getFreeTree();

*/

/*
const findFreeTree = (treeList) => {
  let findResult;
  if (!Array.isArray(treeList)) return undefined;
  return (findResult = treeList.find((element) => element.height === myHeight));
};

console.log(findFreeTree(treeList));
*/

/*
Rozwiązanie poprawne
wysokość choinki = x
moja wysokość = h
spośród listy choinek chcemy znaleźć tą, która spełni ten warunek x === h
mogę pytać ? x i otrzymam x < h, x > h albo x = h

Jakiego wzorca uzyc: wyszukiwanie binarne 
Dzielimy zakres na pół
w zakresie: 1...n
l = 1 -> lewa granica, 1 najmniejsza wartość
r = n -> prawa granica, n największa wartość

mid = (1 + n)/2 -> srodek przedzialu

lista jest posortowana
pytamy:  ? mid

czyli:
jeśli h < mid -> szukamy w lewej częsci tablicy r = mid - 1
jesli h > mid -> szykamy w prawej czesci r = mid + 1
jesli h = mid -> odpowiedz znaleziona

h ∈ [1, n]
zamiast pytać po kolei, za kazdym razem odrzucam polowe mozliwosci
*/

const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// liczba choinek
let n;

// za kadym razem, gdy przyjdzie nowa linia tekstu, zrób coś
rl.on("line", (line) => {
  if (!n) {
    n = BigInt(line.trim());
    solve();
  }
});

// zadaj pytanie o choinkę i poczekaj na odpowiedź, nasłuchuj tylko raz na kolejną linię tekstu
function ask(x) {
  return new Promise((resolve) => {
    console.log(`? ${x}`);
    process.stdout.flush();
    rl.once("line", (ans) => {
      resolve(ans.trim());
    });
  });
}

async function solve() {
  let l = 1n;
  let r = n;

  while (l <= r) {
    let mid = (l + r) / 2n;

    const res = await ask(mid);

    if (res === "=") {
      return;
    } else if (res === "<") {
      r = mid - 1n;
    } else {
      l = mid + 1;
    }
  }
}
