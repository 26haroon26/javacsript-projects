let product_amount = document.getElementById("product_amount");
let total_cart_amt = document.getElementById("total_cart_amt");
let shipping_amount = document.getElementById("shipping_amount");
let discount_code1 = document.getElementById("discount_code1");
let error_trw = document.getElementById("error_trw");

const decreaseNumber = (incdec, itemPrice) => {
  let itemval = document.getElementById(incdec);
  let Price = document.getElementById(itemPrice);
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Negative quantity is not allowed");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = "#fff";
    itemval.style.color = "#000";
    Price.innerText = parseInt(Price.innerText) - 15;
    product_amount.innerText = parseInt(product_amount.innerText) - 15;
    total_cart_amt.innerText =
      parseInt(product_amount.innerText) + parseInt(shipping_amount.innerText);
  }
};
const increaseNumber = (incdec, itemPrice) => {
  let itemval = document.getElementById(incdec);
  let Price = document.getElementById(itemPrice);
  if (itemval.value >= 5) {
    itemval.value = 5;
    alert("max 5 allowed");
    itemval.style.background = "red";
    itemval.style.color = "#fff";
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    Price.innerText = parseInt(Price.innerText) + 15;
    product_amount.innerText = parseInt(product_amount.innerText) + 15;
    total_cart_amt.innerText =
      parseInt(product_amount.innerText) + parseInt(shipping_amount.innerText);
  }
};
const discount_code = () => {
  let totalCurrentAmt = parseInt(total_cart_amt.innerText);
  if (discount_code1.value === "awesome") {
    total_cart_amt.innerText = totalCurrentAmt - 15;
    error_trw.innerText = "Hurrah! code is valid";
  } else {
    error_trw.innerText = "Try Again! Valid code is awesome";
  }
  discount_code1.value = "";
};
