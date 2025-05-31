// تحميل SweetAlert2
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
document.head.appendChild(script);

// صوت عند الإضافة
const ding = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_5c214d432d.mp3");

let itemCount = 0;
let totalPrice = 0;
let menuItems;

window.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".fa-cart-shopping");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  menuItems = document.querySelectorAll(".product-details");

  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-details");
      const name = card.querySelector("h1").innerText || "Item";
      const priceText = card.querySelector(".price").innerText || "$0";
      const price = parseFloat(priceText.replace('$', ''));

      itemCount++;
      totalPrice += price;

      cartCount.textContent = itemCount;
      cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

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
});