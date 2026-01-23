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

*/

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
