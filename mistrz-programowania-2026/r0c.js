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
const treeList = [i1, i2, i3, i4...]
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

// Rozwiązanie poprawne
