// other creative tasks

/*
TASK 1




const labels = ["edit", "coedit"]

const changeLabels = () => { 
    let buttonLabel; 
    const luck = Math.floor(Math.random() * 2);  
    if (luck === 1) {
        buttonLabel = "edit"
    } else {
        buttonLabel = "coedit"
    } return buttonLabel;
}

const determineLabel = () => Math.random() < 0.5 ? "edit" : "coedit"
const determineLabel2 = () => {
    const index = Math.random() < 0.5 ? 0 : 1;
    return labels[index];
}

const determineLabel3 = () => labels[Math.floor(Math.random() * labels.length)]

console.log(determineLabel3());
*/

/*
TASK 2
Napisz funkcję w JavaScript, która: Przyjmuje tablicę liczb. Zwraca nową tablicę z tylko liczbami parzystymi mniejszymi niż 10.


const numbers = [2,3,4,5,6,29,23,12]

const filterEvenLessThan10 = (numbers) => {
    return numbers.filter(value => value <10 && value % 2 === 0)
}

console.log("filter", filterEvenLessThan10(numbers));
*/

/*
TASK 3
Masz stronę z listą elementów:

<ul id="products">
  <li class="product" data-price="50">Product A</li>
  <li class="product" data-price="120">Product B</li>
  <li class="product" data-price="30">Product C</li>
</ul>

Napisz w WebDriverIO funkcję, która:
Pobiera wszystkie elementy .product
Zwraca tablicę tylko tych produktów, które mają data-price < 100
Możesz użyć async/await i metod WebDriverIO takich jak $$, getAttribute().



class Products {
    get products() {
        return $$("li.product")
    }

    async getCheapProductsV1() {
        const productsList = this.products
        const cheapProducts = [];

        for (const product of productsList) {
            const price = Number(await product.getAttribute("data-price"));
            if (price < 100) {
                cheapProducts.push(product)
            }
        }
        return cheapProducts;
    }

    async getCheapProductsV2() {
        const productsList = this.products;

        const cheapProducts = await Promise.all(
            productsList.map(async (product) => {
                const price = Number(await product.getAttribute("data-price"));
                if (price < 100) {
                    return product;
                } else {
                    return null;
                }
            })
        )
        // return cheapProducts.filter(p => p !== null);
        return cheapProducts.filter(Boolean);
    }
}
*/

/*
TASK 4

Napisz funkcję getActiveAdultUsers(users), która: 
- zwróci tylko aktywnych użytkowników
- którzy mają 18 lat lub więcej
- wynik ma być tablicą imion (stringi)

Napisz funkcję averageAge(users), która:
- obliczy średni wiek wszystkich użytkowników
- zwróci liczbę zaokrągloną do 2 miejsc po przecinku

Napisz funkcję validateUsers(users), która:
- sprawdzi, czy każdy użytkownik ma:
- id jako number
- name jako string
- age jako number
- isActive jako boolean

jeśli coś się nie zgadza → zwróć false
jeśli wszystko OK → true

Napisz funkcję findUserByName(users, name), która:
- zwróci obiekt użytkownika, jeśli istnieje
- jeśli nie → zwróci null


const users = [
  { name: "Anna", age: 28, isActive: true, id: 1 },
  { id: 2, name: "Bartek", age: 17, isActive: false },
  { id: 3, name: "Celina", age: 34, isActive: true },
  { id: 4, name: "Daniel", age: 22, isActive: false },
  { name: "Ewa", age: 19, isActive: true, id: 5 },
];

const activeUsers = () => users.filter(user => user.isActive && user.age >= 18).map(user => user.name);

console.log("activeUsers", activeUsers());

const averageAge = users.reduce((acc, { age }) => age + acc, 0)/users.length;
const rounded = Number(averageAge.toFixed(2));

console.log("averageAge", averageAge);
console.log("rounded", rounded);

const expectedSchema = {
    "id": "number",
    "name": "string",
    "age": "number",
    "isActive": "boolean"
}

const validateSchema = () => users.every((user) => 
    Object.entries(expectedSchema).every(([key, type]) => key in user && typeof user[key] === type));

console.log("validateSchema", validateSchema());


const validateUsers = () => users.every((user) => {
    return (
        "id" in user &&
        "name" in user &&
        "age" in user &&
        "isActive" in user &&

        typeof user.id === "number" &&
        typeof user.name === "string" &&
        typeof user.age === "number" &&
        typeof user.isActive === "boolean"
    )
});

console.log("validateUsers", validateUsers());

const findUserByName = (name) => users.find(user => user.name === name) || null;

console.log("findUserByName", findUserByName("dupa"));
*/