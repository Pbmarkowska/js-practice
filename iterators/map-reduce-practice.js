/*
TASK 1: map + reduce - DONE
Calculate total cart price

// Expected output → 2800
Muszę zwrócić zsumowaną wartość wszystkich itemow w koszyku. Suma to będzie price + qty
Map iteruje po elementach tablicy i wykonuje operację zdefiniowaną w callbacku. 
Reduce zwróci zkondensowaną wartość operacji (opisanej w callbacku) na wszystkich elementach tablicy.

const cart = [
  { name: 'Laptop', price: 1200, qty: 1 },
  { name: 'Phone', price: 800, qty: 2 }
];

const calculateTotal = () => {
  const itemsValue = cart.map(element => {
    return element.price * element.qty
  });
  
  const totalValue = 
    itemsValue.reduce((acc, element) => {
      return element + acc;
    }, 0);
  
  return totalValue;
}

console.log("total", calculateTotal());
*/

/*
TASK 2 - DONE
Generate a mini test report

Return
{
  total: 3,
  passed: 2,
  failed: 1
}

Muszę zwrócić obiekt, z parametrami: total (ilość testów), ile testów przeszło, a ile sfailowało


const tests = [
  { name: 'Login page loaded', passed: true },
  { name: 'User logged in', passed: true },
  { name: 'Logout button visible', passed: false }
];

const miniTestReport = () => {
  const count = tests.reduce((acc, t) => {
    t.passed ? acc.passed++ : acc.failed++;
    acc.total+=1
    return acc;
  }, {total: 0, passed: 0, failed: 0 })
  return count;
}

console.log("mini report", miniTestReport());
*/

/*
TASK 3 - Total price - DONE

Expected output → 30


const cart = [
  { name: "Book", price: 10, qty: 2 },
  { name: "Pen", price: 2, qty: 5 }
];

const totalPrice = cart.map(({ price, qty }) => {
    return price * qty;
  });

const reduce = totalPrice.reduce((acc, value) => {
  return acc + value;
});

const totalPriceReduce = cart.reduce((acc, {price, qty}) => {
  return (price * qty) + acc;
}, 0);

console.log("total price", reduce);
console.log("total price", totalPriceReduce);
*/

/*
TASK 4 - Test report - DONE

Expected output → { total: 3, passed: 2, failed: 1 }


const tests = [
  { name: "login", passed: true },
  { name: "logout", passed: false },
  { name: "checkout", passed: true }
];

const testReport = tests.reduce((acc, {passed}) => {
  if (passed) {
    acc.passed++;
  } else {
    acc.failed++;
  }
  acc.total+=1;
  return acc;
}, {total: 0, passed: 0, failed: 0});

console.log("test Report", testReport);
*/

/*
TASK 5 - Average score - DONE

Expected output → 80

const scores = [
  { student: "Ana", score: 80 },
  { student: "Tom", score: 90 },
  { student: "Leo", score: 70 }
];

const avgScore = scores.reduce((acc, { score }, index) => {
  acc+=score;

  if (index + 1 === scores.length) {
    return acc / scores.length
  }

  return acc;
}, 0);

console.log("avgScore", avgScore);

const avgScore = scores.reduce((acc, { score }) => {
  return acc+=score;
}, 0) / scores.length;

console.log("avgScore", avgScore);
*/

/*

TASK 6 - Flatten array - DONE
Expected output → [1, 2, 3, 4, 5]

const arr = [[1, 2], [3, 4], [5]];

const flatArr = arr.reduce((acc, value) => {
  acc = acc.concat(value);
  return acc;
}, []);

console.log("flatArr", flatArr);

const flatArr2 = arr.reduce((acc, value) => {
  acc.push(...value);
  return acc;
}, []);


console.log("flatArr2", flatArr2);
*/

/*
TASK 7 - Build lookup map

Expected output → { 10: "Ana", 20: "Tom" }


const users = [
  { id: 10, name: "Ana" },
  { id: 20, name: "Tom" }
];

// works - but wrong
const lookupMap2 = users.reduce((acc, { id, name}) => {
  acc = {
    ...acc,
    [id]: name
  }
  return acc;
}, {});

const lookupMap = users.reduce((acc, {id, name}) => {
  acc[id] = name;
  return acc;
}, {})

console.log("lookupMap", lookupMap);
*/

/*
TASK 8 - Most common value

Expected output → 3

muszę policzyć ile razy dany element występuje w tablicy a następnie zwrócić ten element, który występuje najczęściej

1 - 1
3 - 1
obiekt = {liczba: ileWystąpień}
mam pusty obiekt, potem natrafiam na value: 1, więc muszę do obiektu dodać klucz-wartosć: 1-1,
potem natrafiam na 3, więc muszę utworzyć kolejny klucz wartość 3-1,
potem znowu natrafiam na 3, więc muszę podbić wartość o 1, i mam 3-2

occurrences = {1:2, 3:3, 2:2 };




const nums = [1, 3, 3, 2, 1, 3, 2];

const occurrences = nums.reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;

  return acc;
}, {});

// result: { '1': 2, '2': 2, '3': 3 }
// muszę znaleźć klucz z najwyzsza wartoscia

const occurencesList = Object.entries(occurrences);
// console.log("occurencesList", occurencesList);
// result: [ [ '1', 2 ], [ '2', 2 ], [ '3', 3 ] ]

const maxValue = occurencesList.reduce((acc, value) => {
  if (acc > value) {
    return acc;
  } else {
    return value
  }
});

const mostCommonValue = Number(maxValue[0]);

console.log("maxValue", maxValue);
console.log("mostCommonValue", mostCommonValue);
*/