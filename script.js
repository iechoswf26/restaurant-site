/* addEventListener tells the browser to listen to an event. The DOMContentLoaded waits until HTML has fully loaded and the DOM tree has been built so JavaScript can safely access the elements. The function() {loadTable()} runs loadTable() when the page finishes loading. Order of ops: 1) HTML loads, 2) DOM is built, 3) JavaScript runs loadTable(), 4) loadTable() fills table with menu items.
*/

document.addEventListener("DOMContentLoaded", function () {
    menuTable()
});

/* Concept for Creating Table in JavaScript:
1. Select table body.
2. Create an array of menu items.
3. Loop through items.
4. Create a <tr> for each item.
5. Insert the data into the table.
 */

// Concept Step 1: Select table body from HTML.
let menuTable = document.querySelector("tbody")

// Concept Step 2: Create array of all menu items.

const MENU_ITEMS = [

    {
    id: 1,
    name: "Fire Nation Gyoza",
    element:"Spicy, bold, and full of flavor—perfect nod to the Fire Nation’s fiery cuisine.",
    price:5.99,
    category: "Dinner"
    },

    {
    id: 2,
    name: "Air Nomad Edamame Pods",
    element:"Light, healthy, and simple—evoking the airy, peaceful lifestyle of the Air Nomads.",
    price: 3.99,
    category: "Dinner"

    },

    {
    id: 3,
    name: "Avatar's Tonkotsu",
    element:"Pork Bone Broth, Chashu Pork, Ajitama Egg, Kikurage, Scallions, Sesame Seeds.",
    price: 16.99,
    category: "Dinner"

    },

    {
    id: 4,
    name: "Zuko's Fiery Shoyu",
    element:"Pork Bone Broth, Soy Sauce Blend, Chashu Pork, Ajitama Egg, Menma, Scallions, Nori, Pepper.",
    price: 19.99,
    category: "Dinner"

    },

    {
    id: 5,
    name: "Toph's Earthy Miso",
    element:"Pork Bone Broth, Miso Blend, Goma Pork, Ajitama Egg, Scallions, Napa Cabbage, Bean Sprout, Corn, Sesame Seeds.",
    price: 16.99,
    category: "Lunch"

    },

    {
    id: 6,
    name: "Water Tribe Vegan",
    element:"Almond Milk Tonkotsu, Shroom Abura, Spinach, Assuage Tofu, Scallions, Corn, Kikurage.",
    price: 12.99,
    category: "Lunch"

    },

    {
    id: 7,
    name: "Water",
    element:"Pure water restores balance, refreshing body and spirit.",
    price: 1.00,
    category: "Lunch"

    },

    {
    id: 8,
    name: "Jasmine Air Temple Tea",
    element:"Light, floral, and calming - brewed for peaceful balance.",
    price: 3.99,
    category: "Lunch"

    },

    {
    id: 9,
    name: "White Lotus Brew",
    element:"A smooth, wise blend steeped to quiet the mind and strengthen the spirit.",
    price: 4.99,
    category: "Lunch"

    },

    {
    id: 10,
    name: "Fire Nation Fizz",
    element:"Bright, bold, and sparkling with unstoppable energy.",
    price: 2.99,
    category: "Lunch"

    },

    {
    id: 11,
    name: "Lightning Bolt Lemonade",
    element:"Sweet with a sharp citrus kick — fast, powerful, refreshing.",
    price: 2.99,
    category: "Dinner"

    },

    {
    id: 12,
    name: "Water Tribe Milk Tea",
    element:"Classic milk tea with tapioca pearls — smooth, flowing, and comforting.",
    price: 4.99,
    category: "Dinner"

    },

    {
    id: 13,
    name: "Ember Mango Boba",
    element:"Mango milk tea with golden pearls — sweet heat with a fiery finish.",
    price: 3.99,
    category: "Dinner"

    },

    {
    id: 14,
    name: "Earth Kingdom Matcha Boba",
    element:"Rich matcha with brown sugar pearls — grounded, creamy, and strong.",
    price: 5.99,
    category: "Dinner"

    }];

//Concept Step 3: Declare a variable that will store the array, menuItems.
let arrayMenuItems = [menuItems];

//Concept Step 4a: Each item in the array will be stored under name, element, price, and category. At this point, this is just a "blueprint" for how the row should be displayed.
arrayMenuItems.forEach(item => {
    addRow(item.name, item.element, item.price, item.category)
})

//Concept Step 4b: Use a function called addRow. Pass the following parameters into the function: name, element, price, and category. Then create a new HTML element that represents the table row.
function addRow(name, element, price, category) {
    let row = document.createElement("tr");

// Concept Step 4c: Create the table data (cells) that will fall under name, element, price, and category. In other words, create spots for those sections in the table. At this point, no words have been added to the table yet.
    let tdName = document.createElement("td")
    let tdElement = document.createElement("td")
    let tdPrice = document.createElement("td")
    let tdCategory = document.createElement("td")

// Concept Step 4d: Insert text into the corresponding section - name, element, price, and category.
    tdName.textContent = name
    tdElement.textContent = element
    tdPrice.textContent = price
    tdCategory.textContent = category

// Concept Step 4e: Add the text to the row that was created.
    row.appendChild(tdName)
    row.appendChild(tdElement)
    row.appendChild(tdPrice)
    row.appendChild(tdCategory)

//Concept Step 4f: Add the row to the table.
    menuTable.appendChild(row);
}



// function makeTable() {
//     const tbody=document.getElementById("example")
//     MENU_ITEMS.forEach(item => {
//         let row = document.createElement("tr")
//         row.innerHTML = `<td>${item.name}</td>
//             <td>${item.element}</td>
//             <td>${item.price}</td>`
//         console.log(item)
//         tbody.appendChild(row)
//     })
// }

