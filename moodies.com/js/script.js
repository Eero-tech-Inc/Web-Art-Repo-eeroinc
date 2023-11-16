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

/*const serviceItems = document.querySelector(".header-info");
const popup = document.querySelector(".header-popup-body")
const popupCloseBtn = popup.querySelector(".close-btn");

serviceItems.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase() == "read-btn"){
        const item = event.target.parentElement;
        const h3 = item.querySelector("h3").innerHTML;
        const readMoreCont = item.querySelector(".header-popup").innerHTML;
        popup.querySelector("h3").innerHTML = h3;
        popup.querySelector(".header-popup-body").innerHTML = readMoreCont;

        popupBox();
  } 
})

popupCloseBtn.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
    if (event.target == popup){
        popupBox();
    }
})  

function popupBox(){
    popup.classList.toggle("open");
}*/