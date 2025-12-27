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
TASK 3 - Total price

const cart = [
  { name: "Book", price: 10, qty: 2 },
  { name: "Pen", price: 2, qty: 5 }
];


Expected output → 30
*/

/*
TASK 4 - Test report

const tests = [
  { name: "login", passed: true },
  { name: "logout", passed: false },
  { name: "checkout", passed: true }
];

Expected output → { total: 3, passed: 2, failed: 1 }

*/

/*
TASK 5 - Average score

const scores = [
  { student: "Ana", score: 80 },
  { student: "Tom", score: 90 },
  { student: "Leo", score: 70 }
];

Expected output → 80

*/

/*
TASK 6 - Flatten array


const arr = [[1, 2], [3, 4], [5]];

Expected output → [1, 2, 3, 4, 5]

*/


/*
TASK 7 - Build lookup map

const users = [
  { id: 10, name: "Ana" },
  { id: 20, name: "Tom" }
];

Expected output → { 10: "Ana", 20: "Tom" }

*/

/*
TASK 8 - Most common value

const nums = [1, 3, 3, 2, 1, 3, 2];

Expected output → 3
*/

