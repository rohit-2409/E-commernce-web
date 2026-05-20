// ================= PRODUCT IMAGE CHANGE =================

const mainImg = document.getElementById("mainImg");

const smallImages = document.querySelectorAll(".small-img");

smallImages.forEach((image) => {

    image.addEventListener("click", () => {

        mainImg.src = image.src;

    });

});


// ================= QUANTITY BUTTON =================

const plusBtn = document.getElementById("plus");

const minusBtn = document.getElementById("minus");

const quantityInput = document.getElementById("quantityInput");


// PLUS BUTTON

plusBtn.addEventListener("click", () => {

    let currentValue = parseInt(quantityInput.value);

    quantityInput.value = currentValue + 1;

});


// MINUS BUTTON

minusBtn.addEventListener("click", () => {

    let currentValue = parseInt(quantityInput.value);

    if(currentValue > 1){

        quantityInput.value = currentValue - 1;

    }

});
const urlParams = new URLSearchParams(window.location.search);

const productImg = urlParams.get("img");
const productName = urlParams.get("name");
const productPrice = urlParams.get("price");

if(productImg){
    document.getElementById("mainImg").src = productImg;
}

if(productName){
    document.getElementById("productName").innerText = productName;
}

if(productPrice){
    document.getElementById("productPrice").innerText = productPrice;
}