let pencil = document.getElementById("pencil").value;
let square = document.getElementById("square").value;
let circle = document.getElementById("circle").value;
let color = document.getElementById("color");
let size = document.getElementById("size");
let canva = document.getElementById("myCanvas");
let ctx = canva.getContext("2d");
var strDataURI = canva.toDataURL();

let isMouseDown = false;
let startx, starty, endx, endy;

/// for line

// canva.addEventListener("mousedown", (event) => {
//     isMouseDown = true;
// });
// canva.addEventListener("mouseup", (event) => {
//     ctx.beginPath();
//     isMouseDown = false;
// });

// canva.addEventListener("mousemove", (event) => {
//     if (isMouseDown) {
//     ctx.lineCap = "round";
//     ctx.lineWidth = size.value;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
//     // ctx.beginPath();
//     ctx.moveTo(event.offsetX, event.offsetY)
//     ctx.strokeStyle = color.value;
//     }
// });

// for circle

// canva.addEventListener("mousedown", (event) => {
//   startx = event.offsetX;
//   starty = event.offsetY;
//   isMouseDown = true;
// });
// canva.addEventListener("mouseup", (event) => {
//   endx = event.offsetX;
//   endy = event.offsetY;
//   isMouseDown = false;
//   ctx.beginPath();
//     ctx.strokeStyle = color.value;
// ctx.lineWidth = size.value;
//   ctx.arc(startx, starty, event.offsetY - starty , 0, 2 * Math.PI);
//   ctx.stroke();
// });

canva.addEventListener("mousedown", (event) => {
  startx = event.offsetX;
  starty = event.offsetY;
  isMouseDown = true;
  console.log(event);
});
// console.log(endy - starty);
// ctx.restore();
// ctx.strokeRect(startx, starty, endx, endy);
canva.addEventListener("mouseup", (event) => {
    endx = event.offsetX;
    endy = event.offsetY;
    isMouseDown = false;
    let  xaxis = endx - startx;
    let  yaxis = endy - starty;
        if (endx === startx && endy === starty) {
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.strokeRect(0, 0, 0, 0);
        ctx.stroke();
    } else {
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.strokeRect(startx, starty, xaxis, yaxis);
        ctx.stroke();
        // ctx.save();
    }
    console.log("startx ",startx);
    startx = "";
    starty = "";
    endx = "";
    endy = "";
});
function getid(a) {
  value = `${a}`;
  console.log(value);
}

//   canva.addEventListener("mousedown", (event) => {
//     console.log(event);
//     startx = event.offsetX;
//     starty = event.offsetY;

//     isMouseDown = true;
//     // ctxCopy = JSON.stringify(ctx);
// });
// canva.addEventListener("mouseup", (event) => {
//   endx = event.offsetX;
//   endy = event.offsetY;
//   isMouseDown = false;

//   // ctx.strokeRect(startx, starty, endx, endy);
//   // ctx.stroke();
// });

// canva.addEventListener('mousemove', (event) => {
//     if (isMouseDown) {

//       // ctx = JSON.parse(ctxCopy)
//         ctx.fillRect(event.offsetX, event.offsetY, size.value, size.value);
//         // ctx.strokeRect(startx, starty, endx, endy);
//         ctx.fillStyle = color.value;
//         ctx.stroke();
//     }

// });

function forReset() {
  ctx.clearRect(0, 0, canva.width, canva.height);
  var w = canva.width;
  canva.width = 0;
  canva.width = w;
}
function forSave() {
  let canvas = document.querySelector("#myCanvas");
  let anchor = document.createElement("a");
  anchor.href = canvas.toDataURL("image/jpg");
  anchor.download = "paint.jpg";
  anchor.click();
}

// // var canvas = document.getElementById("myCanvas");
// // var ctx = canvas.getContext("2d");
// // ctx.moveTo(0, 0);
// // ctx.lineTo(200, 100);
// // ctx.stroke();

// vacanvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.arc(55, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

//for circle
