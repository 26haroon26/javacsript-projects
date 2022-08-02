let changeImage = document.getElementById("change");
let imageName = document.getElementById("imageName");
//    changeImage.addEventListener('click',imageChange);
let num = 3;
let num1 = 0;
function imageChange(event) {
  
  if (num1 == 3) {
    num1 = 0;
  }
  if (100 >= event.offsetX) {
      if (num <= 0) {
          num = 3;
        }
        changeImage.src = `image${num}.jpg`;
        imageName.innerText = `Image  ${num}`;
        num--;
  } else {
    num1++;
    changeImage.src = `image${num1}.jpg`;
    imageName.innerText = `Image  ${num1}`;
  }
}
