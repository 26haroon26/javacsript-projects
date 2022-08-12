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
//canva.addEventListener("mousedown", (event) => {
//     startx = event.offsetX;
//     starty = event.offsetY;
//     isMouseDown = true;
// });
// canva.addEventListener("mouseup", (event) => {
//     endx = event.offsetX;
//     endy = event.offsetY;
//     isMouseDown = false;
//     let  radius = event.offsetY - starty;
//     console.log(radius);
//     if (radius < 0) {
//         radius =  starty - event.offsetY;
//         ctx.beginPath();
//         ctx.strokeStyle = color.value;
//         ctx.lineWidth = size.value;
//         ctx.arc(startx, starty,radius , 0, 2 * Math.PI);
//         ctx.stroke();    
//     }else{
//         ctx.beginPath();
//         ctx.strokeStyle = color.value;
//         ctx.lineWidth = size.value;
//         ctx.arc(startx, starty,radius , 0, 2 * Math.PI);
//         ctx.stroke();
//     }
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


// for rectangle

// canva.addEventListener("mousedown", (event) => {
//     startx = event.offsetX;
//     starty = event.offsetY;
//     isMouseDown = true;
//     console.log(event);
// });
// // console.log(endy - starty);
// // ctx.restore();
// // ctx.strokeRect(startx, starty, endx, endy);
// canva.addEventListener("mouseup", (event) => {
//     endx = event.offsetX;
//     endy = event.offsetY;
//     isMouseDown = false;
//     let  xaxis = endx - startx;
//     let  yaxis = endy - starty;
//         if (endx === startx && endy === starty) {
//         ctx.strokeStyle = color.value;
//         ctx.lineWidth = size.value;
//         ctx.strokeRect(0, 0, 0, 0);
//         ctx.stroke();
//     } else {
//         ctx.strokeStyle = color.value;
//         ctx.lineWidth = size.value;
//         ctx.strokeRect(startx, starty, xaxis, yaxis);
//         ctx.stroke();
//         // ctx.save();
//     }
//     console.log("startx ",startx);
//     startx = "";
//     starty = "";
//     endx = "";
//     endy = "";
// });


let pencilMouseDown=(event) => {
    isMouseDown = true;
}
let pencilMouseUp = (event) => {
    ctx.beginPath();
    isMouseDown = false;
}
let pencilMouseMove = (event) => {
    if (isMouseDown) {
        ctx.lineCap = "round";
        ctx.lineWidth = size.value;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        // ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY)
        ctx.strokeStyle = color.value;
    }
}
let circleMouseDown = (event) => {
    startx = event.offsetX;
    starty = event.offsetY;
    isMouseDown = true;
}
let circleMouseUp= (event) => {
    endx = event.offsetX;
    endy = event.offsetY;
    isMouseDown = false;
    let radius = event.offsetY - starty;
    console.log(radius);
    if (radius < 0) {
        radius = starty - event.offsetY;
        ctx.beginPath();
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.arc(startx, starty, radius, 0, 2 * Math.PI);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.arc(startx, starty, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}



function act(toolName) {
    canva.removeEventListener("mousedown",  pencilMouseDown);
    canva.removeEventListener("mousedown",  circleMouseDown);
    canva.removeEventListener("mouseup", pencilMouseUp);
    canva.removeEventListener("mouseup", circleMouseUp);
    canva.removeEventListener("mousemove", pencilMouseMove);

    switch (toolName) {
        case "pencil":
            /// for line

            canva.addEventListener("mousedown",pencilMouseDown );
            canva.addEventListener("mouseup",pencilMouseUp );
            canva.addEventListener("mousemove", pencilMouseMove);
            break;

        case "circle":
            // for circle

            canva.addEventListener("mousedown",circleMouseDown);
            canva.addEventListener("mouseup",circleMouseUp );

            break


        default:
            break;
    }
}


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





<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
</head>

<body>
    <div id="flex">

        <form action="#">
            <i id="pencil" onclick="act('pencil')" class="fa-solid fa-pencil"></i>
            <i id="square" onclick="act('square')" class="fa-solid fa-square"></i>
            <i id="circle" onclick="act('circle')" class="fa-solid fa-circle"></i>
            <label for="color">Color</label>
            <input type="color" name="color" id="color" >
            <label for="size">Size</label>
            <input type="range" name="size" id="size" value="6">
        </form>
        <div id="forimage">
            <button onclick="forReset()">Reset</button>
            <button onclick="forSave()">Save</button>
        </div>
    </div>
    
    <canvas id="myCanvas" width="600px" height="600px">
    </canvas>
    <script src="index.js"></script>


</body>

</html> 






<!-- <!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title>Canvas Test</title>
</head>
<body>
<header> </header>
<nav> </nav>
<section>

<div>
<canvas id="canvas" width="600" height="600">
This text is displayed if your browser does not support HTML5 Canvas.
</canvas>
</div>

<script type="text/javascript">
var canvas;
var ctx;

function init() {
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
draw();
}


function draw() {

ctx.fillStyle = '#FA6900';
// ctx.shadowOffsetX = 9;
// ctx.shadowOffsetY = 9;
// ctx.shadowBlur    = 7;
ctx.shadowColor   = 'rgba(204, 204, 204, 0.5)';
ctx.fillRect(0,0,30,150);
// ctx.save();

ctx.fillStyle = '#E0E4CD';
// ctx.shadowOffsetX = 10;
// ctx.shadowOffsetY = 10;
// ctx.shadowBlur    = 4;
ctx.shadowColor   = 'rgba(204, 204, 204, 0.5)';
ctx.fillRect(30,0,30,150);
ctx.save();

ctx.fillStyle = '#A7DBD7';
// ctx.shadowOffsetX = 15;
// ctx.shadowOffsetY = 15;
// ctx.shadowBlur    = 4;
// ctx.shadowColor   = 'rgba(204, 204, 204, 0.5)';
ctx.fillRect(60,0,45,150);
// ctx.save();

ctx.restore();
ctx.beginPath();
ctx.arc(185, 75, 22, 0, Math.PI*2, true);
console.log(ctx.arc(185, 75, 22, 0, Math.PI*2, true));
ctx.closePath();
ctx.fill();

ctx.restore();
ctx.beginPath();
ctx.arc(260, 75, 15, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

ctx.restore();
ctx.beginPath();
ctx.arc(305, 75, 20, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();
}

init();
</script>
</section>
<aside> </aside>
<footer> </footer>
</body>
</html> -->
