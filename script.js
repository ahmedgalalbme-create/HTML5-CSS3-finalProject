var allProducts = [];

// Load products
var request = new XMLHttpRequest();
request.open("GET", "data.json", true);
request.send();

request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var response = JSON.parse(request.responseText);
        allProducts = response.flowerlist;
        renderProducts(allProducts);
    }
};

function renderProducts(products) {
    var container = document.getElementById("products");
    container.innerHTML = "";

    for (var i = 0; i < products.length; i++) {

        var card = document.createElement("div");
        var title = document.createElement("h3");
        var price = document.createElement("h4");
        var img = document.createElement("img");
        var button = document.createElement("button");

        title.textContent = products[i].name;
        price.textContent = "$" + products[i].price;
        img.src = "images/" + products[i].photo;

        button.textContent = "Add to cart";

        // ✅ ADD TO CART
        button.onclick = (function (product) {
            return function () {
                addToCart(product);
            };
        })(products[i]);

        card.append(img, title, price, button);
        container.appendChild(card);

        card.classList.add("product");
        img.classList.add("image");
        button.classList.add("bay");
    }
}

// Add to cart function
function addToCart(product) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

// Search
function serach() {
    var query = document.getElementById("s").value.toLowerCase();
    var filteredProducts = allProducts.filter(function (product) {
        return product.name.toLowerCase().includes(query);
    });
    renderProducts(filteredProducts);
}
