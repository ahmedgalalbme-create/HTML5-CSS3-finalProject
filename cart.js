var cart = JSON.parse(localStorage.getItem("cart")) || [];
var container = document.getElementById("cartProducts");

if (cart.length === 0) {
    container.innerHTML = "<h2>Your cart is empty</h2>";
} else {
    cart.forEach(function (product, index) {

        var card = document.createElement("div");
        var title = document.createElement("h3");
        var price = document.createElement("h4");
        var img = document.createElement("img");
        var removeBtn = document.createElement("button");

        title.textContent = product.name;
        price.textContent = "$" + product.price;
        img.src = "images/" + product.photo;

        removeBtn.textContent = "Remove";
        removeBtn.onclick = function () {
            removeFromCart(index);
        };

        card.append(img, title, price, removeBtn);
        container.appendChild(card);

        card.classList.add("product");
        img.classList.add("image");
        removeBtn.classList.add("bay");
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}
