var cartItems = []; // Array to store cart items
        var total = 0; // Total price of items in the cart
function updateCartDisplay() {
    var cartTable = document.getElementById('cart-items');
    var cartTotal = document.getElementById('total');
    var cartHtml = '';
    total = 0; // Reset total

    
    let stringCartItems = localStorage.getItem("cart");
    cartItems = JSON.parse(stringCartItems);
    // Loop through cart items and generate HTML for each item
    cartItems.forEach(function(item) {
        cartHtml += '<tr>';
        cartHtml += '<td>' + item.product + '</td>';
        cartHtml += '<td>$' + item.price.toFixed(2) + '</td>';
        cartHtml += '<td>' + item.quantity + '</td>';
        cartHtml += '<td>$' + item.totalPrice.toFixed(2) + '</td>';
        cartHtml += '</tr>';
        total += item.totalPrice; // Update total
    });

    // Update HTML for cart items and total
    cartTable.innerHTML = cartHtml;
    cartTotal.textContent = 'Total: $' + total.toFixed(2);
}

updateCartDisplay();

function clearCart() {
    // Clear cartItems array
    cartItems = [];
    localStorage.setItem('cart', "[]");
    window.location.reload();
}