var cartItems = []; // Array to store cart items
//load items from l storage
let stringCartItems = localStorage.getItem("cart");
cartItems = JSON.parse(stringCartItems);



        var total = 0; // Total price of items in the cart
        
        // Function to add item to cart
        function addToCart(product, price) {
            alert('Added ' + product + ' to cart!');
            var quantity = 1; // Default quantity
            var totalPrice = price * quantity; // Calculate total price for this item

            // Check if item is already in the cart
            var existingItem = cartItems.find(item => item.product === product);
            if (existingItem) {
                // If item exists, update quantity and total price
                existingItem.quantity += quantity;
                existingItem.totalPrice += totalPrice;
            } else {
                // If item doesn't exist, add it to the cart
                cartItems.push({ product: product, price: price, quantity: quantity, totalPrice: totalPrice });
            }

            let stringCartItems = JSON.stringify(cartItems);
            localStorage.setItem("cart", stringCartItems);
        }
        var slideIndex = 1;
        showSlides(slideIndex);
    
        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
    
        // Thumbnail image controls
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
    
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        }