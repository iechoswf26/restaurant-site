// MENU PAGE

/* addEventListener tells the browser to listen to an event. The DOMContentLoaded waits until HTML has fully loaded and the DOM tree has been built so JavaScript can safely access the elements. The function() {loadTable()} runs loadTable() when the page finishes loading. Order of ops: 1) HTML loads, 2) DOM is built, 3) JavaScript runs loadTable(), 4) loadTable() fills table with menu items.
*/

document.addEventListener("DOMContentLoaded", function () {
    if(document.title === "menu") {
        // Each object in the array will be placed in the order that it appears in the addRow function (name, element, price, and category). At this point, this is just a "blueprint" for how the row should be displayed.
        MENU_ITEMS.forEach(item => {
            addRow(item.name, item.element, item.price, item.category)
        });
    }
});

const form = document.forms["customerReservation"];

document.addEventListener("DOMContentLoaded", function() {
    if(document.title === "reservations") {

        document.getElementById("customerReservation").addEventListener("submit", function(event) {
            event.preventDefault();
            validateForm();
        })
    }
})

// Select table body from HTML.
let menuTable = document.querySelector("tbody")

// Use a function called addRow. Pass the following parameters into the function: name, element, price, and category. Then create a new HTML element that represents the table row.
function addRow(name, element, price, category) {
    let row = document.createElement("tr");

// Create the table data (cells) that will fall under name, element, price, and category. In other words, create spots for those sections in the table. At this point, no words have been added to the table yet.
    let tdName = document.createElement("td")
    let tdElement = document.createElement("td")
    let tdPrice = document.createElement("td")
    let tdCategory = document.createElement("td")

// Insert text into the corresponding sections - name, element, price, and category.
    tdName.textContent = name
    tdElement.textContent = element
    tdPrice.textContent = price
    tdCategory.textContent = category

// Add the text to the row that was created.
    row.appendChild(tdName)
    row.appendChild(tdElement)
    row.appendChild(tdPrice)
    row.appendChild(tdCategory)

// Add the row to the table.
    menuTable.appendChild(row);
}

// Display prices in Intl.NumberFormat().
const money = new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD"
});

// Create array of all menu items.
const MENU_ITEMS = [
    {
    id: 1,
    name: "Fire Nation Gyoza",
    element:"Spicy, bold, and full of flavor—perfect nod to the Fire Nation’s fiery cuisine.",
    price: money.format(5.99),
    category: "Appetizer"
    },

    {
    id: 2,
    name: "Air Nomad Edamame Pods",
    element:"Light, healthy, and simple—evoking the airy, peaceful lifestyle of the Air Nomads.",
    price: money.format(3.99),
    category: "Appetizer"
    },

    {
    id: 3,
    name: "Avatar's Tonkotsu",
    element:"Pork Bone Broth, Chashu Pork, Ajitama Egg, Kikurage, Scallions, Sesame Seeds.",
    price: money.format(16.99),
    category: "Dinner"
    },

    {
    id: 4,
    name: "Zuko's Fiery Shoyu",
    element:"Pork Bone Broth, Soy Sauce Blend, Chashu Pork, Ajitama Egg, Menma, Scallions, Nori, Pepper.",
    price: money.format(19.99),
    category: "Dinner"
    },

    {
    id: 5,
    name: "Toph's Earthy Miso",
    element:"Pork Bone Broth, Miso Blend, Goma Pork, Ajitama Egg, Scallions, Napa Cabbage, Bean Sprout, Corn, Sesame Seeds.",
    price: money.format(16.99),
    category: "Lunch"
    },

    {
    id: 6,
    name: "Water Tribe Vegan",
    element:"Almond Milk Tonkotsu, Shroom Abura, Spinach, Assuage Tofu, Scallions, Corn, Kikurage.",
    price: money.format(12.99),
    category: "Lunch"
    },

    {
    id: 7,
    name: "Water",
    element:"Pure water restores balance, refreshing body and spirit.",
    price: money.format(1.00),
    category: "Lunch"
    },

    {
    id: 8,
    name: "Jasmine Air Temple Tea",
    element:"Light, floral, and calming - brewed for peaceful balance.",
    price: money.format(3.99),
    category: "Lunch"
    },

    {
    id: 9,
    name: "White Lotus Brew",
    element:"A smooth, wise blend steeped to quiet the mind and strengthen the spirit.",
    price: money.format(4.99),
    category: "Lunch"
    },

    {
    id: 10,
    name: "Fire Nation Fizz",
    element:"Bright, bold, and sparkling with unstoppable energy.",
    price: money.format(2.99),
    category: "Lunch"
    },

    {
    id: 11,
    name: "Lightning Bolt Lemonade",
    element:"Sweet with a sharp citrus kick — fast, powerful, refreshing.",
    price: money.format(2.99),
    category: "Dinner"
    },

    {
    id: 12,
    name: "Water Tribe Milk Tea",
    element:"Classic milk tea with tapioca pearls — smooth, flowing, and comforting.",
    price: money.format(4.99),
    category: "Dinner"
    },

    {
    id: 13,
    name: "Ember Mango Boba",
    element:"Mango milk tea with golden pearls — sweet heat with a fiery finish.",
    price: money.format(3.99),
    category: "Dinner"
    },

    {
    id: 14,
    name: "Earth Kingdom Matcha Boba",
    element:"Rich matcha with brown sugar pearls — grounded, creamy, and strong.",
    price: money.format(5.99),
    category: "Dinner"
    }];

// RESERVATIONS PAGE

const alertPlaceholder = document.getElementById('alertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

function validateForm() {
    appendAlert("Reservation confirmed!", "success")

    document.getElementById("results").innerHTML = `
        Reservation Confirmed: <br>
        Name: ${first_name} ${last_name} <br>
        Email: ${email} <br>
        Party Size: ${party_size} <br>
        Date: ${date} <br>
        Time: ${time} <br>
        Seating Preference: ${seat_pref}
`;

    let first_name = document.forms["customerReservation"]["first_name"].value;
    if (!first_name) {
        appendAlert("First name is required. Maximum characters: 20.", "danger");
        return;
    }

    let last_name = document.forms["customerReservation"]["last_name"].value;
    if (!last_name) {
        appendAlert("Last name is required. Maximum characters: 20.", "danger");
        return;
    }

    let email = document.forms["customerReservation"]["email"].value;
    if (!email || !email.includes("@")) {
        appendAlert("Enter a valid email.", "danger");
        return;
    }

    let party_size = Number(document.forms["customerReservation"]["party_size"].value);
    if (!party_size || party_size < 1 || party_size > 8) {
        appendAlert("Party size is required. Select a number between 1 - 8.", "danger");
        return;
    }

    let date = document.forms["customerReservation"]["date"].value;
    if (!date) {
        appendAlert("Date is required.", "danger");
        return;
    }

    let time = document.forms["customerReservation"]["time"].value;
    if (!time) {
        appendAlert("Time is required.", "danger");
        return;
    }

    let seat_pref = document.querySelector('input[name="seat_pref"]:checked').value;
    if (!seat_pref) {
        appendAlert("Seating preference is required. Select indoors, outdoors, or bar.", "danger");
        return;
    }

}

console.log("results")

