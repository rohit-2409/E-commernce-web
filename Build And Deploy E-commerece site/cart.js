// ======================
// ADD TO CART
// ======================

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach((button) => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        const product = {

            id: button.dataset.id,
            name: button.dataset.name,
            price: Number(button.dataset.price),
            image: button.dataset.image,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = cart.find(item => item.id === product.id);

        if(existingProduct){

            existingProduct.quantity += 1;

        } else {

            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product Added To Cart");

    });

});

// ======================
// DISPLAY CART
// ======================

const cartContainer = document.getElementById("cart-items");

if(cartContainer){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    displayCart();

    function displayCart(){

        cartContainer.innerHTML = "";

        let total = 0;

        cart.forEach((item, index) => {

            total += item.price * item.quantity;

            cartContainer.innerHTML += `

            <tr>

                <td>
                    <a href="#" onclick="removeItem(${index})">
                        <i class="fa-solid fa-xmark"></i>
                    </a>
                </td>

                <td>
                    <img src="${item.image}" width="80">
                </td>

                <td>${item.name}</td>

                <td>$${item.price}</td>

                <td>
                    <input 
                        type="number"
                        value="${item.quantity}"
                        min="1"
                        onchange="updateQuantity(${index}, this.value)"
                    >
                </td>

                <td>$${item.price * item.quantity}</td>

            </tr>

            `;
        });

        document.getElementById("grand-total").innerText = "$" + total;
    }

    // REMOVE PRODUCT

    window.removeItem = function(index){

        cart.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cart));

        displayCart();
    }

    // UPDATE QUANTITY

    window.updateQuantity = function(index, quantity){

        cart[index].quantity = Number(quantity);

        localStorage.setItem("cart", JSON.stringify(cart));

        displayCart();
    }

}