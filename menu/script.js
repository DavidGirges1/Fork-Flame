document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".fork-but");
    const allMenuItems = document.querySelectorAll(".menu-item, .product-details");
    const cartButtons = document.querySelectorAll(".fa-cart-shopping");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    const showOfferBtn = document.getElementById('showOfferBtn');
    const offerTable = document.getElementById('offerTable');

    let itemCount = 0;
    let totalPrice = 0;

    const ding = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_5c214d432d.mp3");

    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            allMenuItems.forEach((item) => {
                if (category === "ALL" || category === item.getAttribute("data-category")) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".menu-item");
            if (!card) {
                console.error("Cart button is not within a .menu-item element.");
                return;
            }

            const nameElement = card.querySelector("h3");
            const name = nameElement ? nameElement.innerText : "Unknown Item";

            const priceElement = card.querySelector(".price");
            const priceText = priceElement ? priceElement.innerText : "$0";
            const price = parseFloat(priceText.replace(/[^\d.-]/g, ''));

            itemCount++;
            totalPrice += price;

            if (cartCount) cartCount.textContent = itemCount;
            if (cartTotal) cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

            ding.play();

            Swal.fire({
                title: '🛒 Added!',
                html: `<strong>${name}</strong><br><span style="color:#ff9800;font-size:18px;">+ $${price.toFixed(2)}</span>`,
                icon: 'success',
                showConfirmButton: false,
                timer: 1200,
                background: '#1f1f1f',
                color: 'white',
            });
        });
    });

    if (showOfferBtn && offerTable) {
        showOfferBtn.addEventListener('click', function () {
            allMenuItems.forEach((item) => {
                item.style.display = "none";
            });
            offerTable.style.display = 'table';
        });
    } else {
        console.warn("Show Offer Button or Offer Table not found.");
    }
});

const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
document.head.appendChild(script);