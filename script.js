document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById('location').innerText = "Geolocation is not supported by this browser.";
    }
});

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById('location').innerText = `Lat: ${lat}, Lon: ${lon}`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Increase quantity
    document.querySelectorAll('.quantity-increase').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            let value = parseInt(input.value);
            if (value < parseInt(input.max)) {
                input.value = value + 1;
            }
        });
    });

    // Decrease quantity
    document.querySelectorAll('.quantity-decrease').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.nextElementSibling;
            let value = parseInt(input.value);
            if (value > parseInt(input.min)) {
                input.value = value - 1;
            }
        });
    });

    // Add to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productInfo = button.parentElement.parentElement;
            const productName = productInfo.querySelector('span').textContent;
            const quantity = productInfo.querySelector('.quantity-input').value;
            alert(`Added ${quantity} of ${productName} to the cart.`);
        });
    });
});



