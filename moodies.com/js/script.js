// cart
let cartIcon = document.querySelector(".read-btn");
let cart = document.querySelector(".header-popup-body");
let closeCart = document.querySelector(".close-btn");

// open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};
