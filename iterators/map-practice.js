/*
TASK 1 - DONE

Extract text, return array of strings

Table of objects, objects have property: text.
For each object I need to take text property value and push to the new table.

const elements = [
    { text: 'Login' },
    { text: 'Register' },
    { text: 'Logout' }
];

const textLabels = () => elements.map(element => element.text)

console.log("textElements", textLabels());

Conclusions:
* When using fat arrow syntax/arrow function expression, {} not required, but desired for readability

*/

/*
TASK 2 - DONE
Normalize UI texts, remove spaces, all lowercase, return array of strings


const labels = [
    { text: '  USER NAME ' },
    { text: ' Password' },
    { text: 'Email ' }
  ];

  const textLabels = () => labels.map(element => element.text.toLowerCase().trim());

  console.log("textLabels", textLabels());
*/

/*
TASK 3 - DONE
Convert raw UI data into assertion-ready objects
Return array with price bool type


const rows = [
    { name: 'Laptop', price: '$1200' },
    { name: 'Phone', price: '$800' }
  ];

  const devices1 = () => rows.map(element => ({"name": element.name, "price": Number(element.price.replace('$', ''))}));
  
  const devices2 = () => rows.map(({name, price}) => ({name, price: Number(price.replace('$', ''))}));

  console.log("devices2", devices2());
*/

/*
TASK 4 - DONE
Create boolean results for visibility checks, return array

const elements = [
    { id: 'title', visible: true },
    { id: 'price', visible: false },
    { id: 'button', visible: true }
  ];

  const visibility = () => elements.map(element => element.visible);
  const getVisibility = () => elements.map(({visible}) => visible);

  console.log("getVisibility", getVisibility());
*/

/*
TASK 4 - Utwórz nową tablicę, w której każda liczba jest pomnożona przez 2

const numbers = [1, 2, 3, 4, 5]

const multiplied = numbers.map(value => value * 2);
*/

/*
TASK 5 - Utwórz nową tablicę, która zawiera tylko imiona użytkowników


const users = [
  { name: "Anna", age: 25 },
  { name: "Piotr", age: 30 },
  { name: "Kasia", age: 28 }
];

const names = users.map(user => user.name);
console.log("names", names);
*/


/*
TASK 6
Utwórz nową tablicę obiektów w formacie:
[
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" }
]


const response = {
  data: [
    { id: 1, title: "Laptop", price: 3000 },
    { id: 2, title: "Mouse", price: 100 },
    { id: 3, title: "Keyboard", price: 250 }
  ]
};

const newData = response.data.map(object => {
  return {
    id: object.id,
    name: object.title
  }
});

console.log("newData", newData);
*/