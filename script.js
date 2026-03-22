let menuTable;

document.addEventListener("DOMContentLoaded", function() {
    if (document.title === "menu") {

        // menuTable and addRow function
        menuTable = document.querySelector("#menu-table")

        function addRow(name, element, price, category) {

            let row = document.createElement("tr");

            let tdName = document.createElement("td")
            let tdElement = document.createElement("td")
            let tdPrice = document.createElement("td")
            let tdCategory = document.createElement("td")
            let tdQuantity = document.createElement("td")

            // Since a column has not been created for tdCartButton, the tdCartButton will be added to tdQuantity.
            let tdCartButton = document.createElement("button")

            tdName.textContent = name
            tdElement.textContent = element
            tdPrice.textContent = price
            tdCategory.textContent = category

            // Insert cart info under tdCartButton.
            tdCartButton.textContent = "cart"

            // Add the text to the row that was created.
            row.appendChild(tdName)
            row.appendChild(tdElement)
            row.appendChild(tdPrice)
            row.appendChild(tdCategory)
            row.appendChild(tdQuantity)

            // Select is not visible yet; it does not have any options.
            let select = document.createElement("select")
            select.classList.add("form-select")

            // Under the quantity header on menu table, add options (numbers 1 through 5) to the <select> tag.
            for (let i = 1; i <= 5; i++) {
                let option = document.createElement("option")
                option.value = i
                option.textContent = i
                select.appendChild(option)
            }
            tdQuantity.appendChild(select)

            // Append tdCartButton to tdQuantity.
            tdQuantity.appendChild(tdCartButton)

            // Add the row to the table.
            menuTable.appendChild(row);

            // The headers, name, element, price, and category are nested under "item."
            let item = {name, element, price, category}


            // Run the following function when the tdCartButton is clicked.
            tdCartButton.addEventListener("click", function (event) {

                // event.target is the actual element that was clicked. previousSibling refers to the element before the clicked element in the DOM. The .value refers to a previous input (e.g. quantity of 3).
                // console.log(event.target.previousSibling.value)
                //Stores the value (e.g. quantity of 30 into variable, quantityToAddToCart).
                // let quantityToAddToCart = event.target.previousSibling.value;

                let quantityToAddToCart = select.value;

                // Add item to cart with selected quantity.
                addToCart(item, quantityToAddToCart)
            })
        }

        // Query dropdown-item in HTML and store it as a variable called dropdownItems.
        const dropdownItems = document.querySelectorAll(".dropdown-item")

        // Loop through dropdownItems. Whenever the user clicks an item from dropdownItems perform 3 events.
        dropdownItems.forEach(dropDownItem => {
            dropDownItem.addEventListener("click", function (event) {

                event.preventDefault();

                const selectedCategory = this.getAttribute("data-category")

                filterMenuCategory(selectedCategory)
            })
        })


        // Display prices in Intl.NumberFormat().
        const money = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        });

        // Create array of all menu items.
        const MENU_ITEMS = [
            {
                id: 1,
                name: "Fire Nation Gyoza",
                element: "Spicy, bold, and full of flavor—perfect nod to the Fire Nation’s fiery cuisine.",
                price: money.format(5.99),
                category: "Appetizer",
            },

            {
                id: 2,
                name: "Air Nomad Edamame Pods",
                element: "Light, healthy, and simple—evoking the airy, peaceful lifestyle of the Air Nomads.",
                price: money.format(3.99),
                category: "Appetizer",
            },

            {
                id: 3,
                name: "Avatar's Tonkotsu",
                element: "Pork Bone Broth, Chashu Pork, Ajitama Egg, Kikurage, Scallions, Sesame Seeds.",
                price: money.format(16.99),
                category: "Dinner",
            },

            {
                id: 4,
                name: "Zuko's Fiery Shoyu",
                element: "Pork Bone Broth, Soy Sauce Blend, Chashu Pork, Ajitama Egg, Menma, Scallions, Nori, Pepper.",
                price: money.format(19.99),
                category: "Dinner",
            },

            {
                id: 5,
                name: "Toph's Earthy Miso",
                element: "Pork Bone Broth, Miso Blend, Goma Pork, Ajitama Egg, Scallions, Napa Cabbage, Bean Sprout, Corn, Sesame Seeds.",
                price: money.format(16.99),
                category: "Lunch",
            },

            {
                id: 6,
                name: "Water Tribe Vegan",
                element: "Almond Milk Tonkotsu, Shroom Abura, Spinach, Assuage Tofu, Scallions, Corn, Kikurage.",
                price: money.format(12.99),
                category: "Lunch",
            },

            {
                id: 7,
                name: "Water",
                element: "Pure water restores balance, refreshing body and spirit.",
                price: money.format(1.00),
                category: "Lunch",
            },

            {
                id: 8,
                name: "Jasmine Air Temple Tea",
                element: "Light, floral, and calming - brewed for peaceful balance.",
                price: money.format(3.99),
                category: "Lunch",
            },

            {
                id: 9,
                name: "White Lotus Brew",
                element: "A smooth, wise blend steeped to quiet the mind and strengthen the spirit.",
                price: money.format(4.99),
                category: "Lunch",
            },

            {
                id: 10,
                name: "Fire Nation Fizz",
                element: "Bright, bold, and sparkling with unstoppable energy.",
                price: money.format(2.99),
                category: "Lunch",
            },

            {
                id: 11,
                name: "Lightning Bolt Lemonade",
                element: "Sweet with a sharp citrus kick — fast, powerful, refreshing.",
                price: money.format(2.99),
                category: "Dinner",
            },

            {
                id: 12,
                name: "Water Tribe Milk Tea",
                element: "Classic milk tea with tapioca pearls — smooth, flowing, and comforting.",
                price: money.format(4.99),
                category: "Dinner",
            },

            {
                id: 13,
                name: "Ember Mango Boba",
                element: "Mango milk tea with golden pearls — sweet heat with a fiery finish.",
                price: money.format(3.99),
                category: "Dinner",
            },

            {
                id: 14,
                name: "Earth Kingdom Matcha Boba",
                element: "Rich matcha with brown sugar pearls — grounded, creamy, and strong.",
                price: money.format(5.99),
                category: "Dinner",
            }];

        // Filter function for MENU_ITEMs categories
        function filterMenuCategory(category) {

            // Clear "temporary" table.
            menuTable.innerHTML = "";

            // Create variable called filteredItems.
            let filteredItems = category === "All"
                ? MENU_ITEMS
                : MENU_ITEMS.filter(item => item.category === category)

            // Step 2: Rebuild the "temporary" table.
            filteredItems.forEach(item => {
                addRow(item.name, item.element, item.price, item.category)
            })
        }

        filterMenuCategory("All");

        // Add item and quantity to cart.

        function addToCart(item, quantity) {
            quantity = Number(quantity)
            if (quantity <=0) {
                alert("Select at least 1 item.")
                return;
            }

            const cart = JSON.parse(localStorage.getItem("cart")) || []

            // Check if item already exists in cart
            let existingItem = cart.find(i => i.item.name === item.name)

            if (existingItem) {
                existingItem.quantity += quantity
            } else {
                const newItem = {item, quantity}
                cart.push(newItem);
            }

            // Save items in cart to local storage.
            localStorage.setItem('cart', JSON.stringify(cart));

            // Print a statement indicating which items have been added and of what quantity to cart.
            console.log(`Added ${quantity} of ${item.name} to cart`)

        }
    }


// CART PAGE
    if (document.title === "cart") {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        let cartTable = document.querySelector("#cart-tbody")

        const money = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        })

        function addCartRow(item, quantity) {
            let row = document.createElement("tr")

            let tdName = document.createElement("td")
            let tdQuantity = document.createElement("td")
            let tdPrice = document.createElement("td")
            let tdLineTotal = document.createElement("td")

            tdName.textContent = item.name
            tdQuantity.textContent = quantity

            // Convert price string to number.
            tdPrice.textContent = price

            // Line total = price * quantity
            tdLineTotal.textContent = money.format(item.price * quantity)

            row.appendChild(tdName)
            row.appendChild(tdQuantity)
            row.appendChild(tdPrice)
            row.appendChild(tdLineTotal)

            cartTable.appendChild(row)
        }

        let subtotal = 0;
        cart.forEach(cartItem => {
            addCartRow(cartItem.name, cartItem.quantity, cartItem.price)

            //Convert price string to number (removes $ sign)
            subtotal += cartItem.item.price * cartItem.quantity
        })

        // Calculate Tax
        const tax = subtotal * 0.08;

        // Grand Total
        const grandTotal = subtotal + tax;

        // Update DOM
        document.getElementById("subtotal").textContent = money.format(subtotal)
        document.getElementById("tax").textContent = money.format(tax)
        document.getElementById("grand-total").textContent = money.format(grandTotal)

        const cancelOrderBtn = document.getElementById("cancel-order");
        const confirmCancelBtn = document.getElementById("confirm-cancel");

        // Bootstrap modal
        const cancelModal = new bootstrap.Modal(document.getElementById("cancelOrderModal"));

        // Show modal on clicking Cancel Order
        cancelOrderBtn.addEventListener("click", () => {
            cancelModal.show();
        });

        // Confirm cancel: clear cart and reload
        confirmCancelBtn.addEventListener("click", () => {
            localStorage.removeItem("cart");
            location.reload();
            cancelModal.hide();
        });

    }

// RESERVATION PAGE

    if (document.title === "reservations") {

        const form = document.forms["customerReservation"];

        document.getElementById("customerReservation").addEventListener("submit", function (event) {

            event.preventDefault();

            validateForm();
        })

        const alertPlaceholder = document.getElementById('alertPlaceholder')

        function appendAlert(message, type) {
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
            let errorCount = 0
            let first_name = document.forms["customerReservation"]["first_name"].value;
            if (!first_name || first_name.length > 20) {
                alertPlaceholder.innerHTML = "";
                appendAlert("First name is required. Maximum characters: 20.", "danger");
                errorCount++
            }

            let last_name = document.forms["customerReservation"]["last_name"].value;
            if (!last_name) {
                appendAlert("Last name is required. Maximum characters: 20.", "danger");
                errorCount++;
            }

            let email = document.forms["customerReservation"]["email"].value;
            if (!email || !email.includes("@")) {
                appendAlert("Enter a valid email.", "danger");
                errorCount++;
            }

            let party_size = Number(document.forms["customerReservation"]["party_size"].value);
            if (!party_size || party_size < 1 || party_size > 8) {
                appendAlert("Party size is required. Select a number between 1 - 8.", "danger");
                errorCount++;
            }

            let date = document.forms["customerReservation"]["date"].value;
            if (!date) {
                appendAlert("Date is required.", "danger");
                errorCount++;
            }

            let time = document.forms["customerReservation"]["time"].value;
            if (!time) {
                appendAlert("Time is required.", "danger");
                errorCount++;
            }

            let seatPrefInput = document.querySelector('input[name="seat_pref"]:checked')
            let seat_pref = seatPrefInput ? seatPrefInput.value : null;
            if (!seat_pref) {
                appendAlert("Seating preference is required. Select indoors, outdoors, or bar.", "danger");
                errorCount++;
            }

            if (errorCount <= 0) {
                appendAlert("Reservation confirmed!", "success")

                document.getElementById("results").innerHTML = `
        Reservation Confirmed: <br>
        Name: ${first_name} ${last_name} <br>
        Email: ${email} <br>
        Party Size: ${party_size} <br>
        Date: ${date} <br>
        Time: ${time} <br>
        Seating Preference: ${seat_pref} <br>
        `;
            }
        }
    }
})



