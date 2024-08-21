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

    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').innerText = `City: ${data.city}`;
        })
        .catch(error => {
            document.getElementById('location').innerText = "Unable to fetch location.";
            console.error('Error:', error);
        });
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



