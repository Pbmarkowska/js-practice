/*
Stwórz nową tablicę newNumbers, w której dodasz liczbę 0 na początku, a wszystkie elementy z numbers po niej.
*/

const numbers = [1, 2, 3, 4, 5];

const newNumbers = [0, ...numbers];

console.log("newNumbers", newNumbers);

/*
Połącz je w jedną tablicę combined używając spread operatora.
 */

const arr1 = ["a", "b"];
const arr2 = ["c", "d"];

const combined = [...arr1, ...arr2];

console.log("combined", combined);

/*
Stwórz nowy obiekt personCopy, który będzie dokładną kopią person, ale z dodatkową właściwością city: 'Warsaw'.
*/

const person = { name: "Alice", age: 25 };

const personCopy = { ...person, city: "Warsaw" };

console.log("personCopy", personCopy);

/*
Stwórz nowy obiekt newSettings, który zmieni fontSize na 16, zachowując resztę właściwości.
*/

const settings = { theme: "dark", fontSize: 14 };

const newSettings = { ...settings, fontSize: 16 };

console.log("newSettings", newSettings);

/*
Wywołaj sum używając tablicy nums = [1, 2, 3] i spread operatora.
 */

const nums = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

const result = sum(...nums);
console.log("result", result);

/*
Połącz je w jeden obiekt config, gdzie właściwości z override nadpisują defaults.
*/

const defaults = { host: "localhost", port: 8000 };
const override = { port: 3000 };

const config = { ...defaults, ...override };
console.log("config", config);
