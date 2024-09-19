let cart = [];
let total = 0;

function addToCart(product, price) {
    // Lägg till produkt i varukorgen
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    // Töm varukorgen först
    cartItems.innerHTML = '';
    
    // Lägg till varor i varukorgen
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ${item.price} kr`;
        cartItems.appendChild(li);
    });

    // Uppdatera totalpriset
    totalPrice.textContent = `Totalt: ${total} kr`;
}

function checkout() {

    // Göm varukorgen och visa utcheckningen
    document.querySelector('.cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
}
