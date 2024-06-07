let products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];

let cart = [];

function displayProducts(products) {
    const productSection = document.getElementById('products');
    productSection.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productSection.appendChild(productDiv);
    });
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `<p>${product.name} - $${product.price}</p>`;
        cartItems.appendChild(cartItem);
    });
}

function checkout() {
    alert('Checkout functionality to be implemented.');
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
async function fetchProducts() {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    displayProducts(products);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});
