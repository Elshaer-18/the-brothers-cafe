let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const drinkName = this.getAttribute('data-name');
        const drinkPrice = parseFloat(this.getAttribute('data-price'));
        const drinkType = this.getAttribute('data-type');

        // ≈÷«›… «·„‘—Ê» ≈·Ï «·”·…
        cart.push({ name: drinkName, price: drinkPrice, type: drinkType });

        //  ÕœÌÀ «·⁄—÷
        updateCart();
    });
});

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `${item.name} - ${item.price} Ã‰ÌÂ`;
        cartDiv.appendChild(itemDiv);
        total += item.price;
    });

    document.getElementById('total-price').textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert('Nothing');
    } else {
        alert('Thank you :) !');
        cart = [];
        totalPrice = 0;
        updateCart();
        updateTotal();
    }
}