let pencil = document.getElementById("pencil").value;
let square = document.getElementById("square").value;
let circle = document.getElementById("circle").value;
let color = document.getElementById("color");
let size = document.getElementById("size");
let canva = document.getElementById("myCanvas");
let ctx = canva.getContext("2d");
var strDataURI = canva.toDataURL();

let isMouseDown = false;
let startx ,
  starty ,
  endx ,
  endy ;

// canva.addEventListener("mousedown", (event) => {
//   isMouseDown = true;
//   startx = event.offsetX;
//   starty = event.offsetY;
// });
// canva.addEventListener("mouseup", (event) => {
//   isMouseDown = false;
//   endx = event.offsetX;
//   endy = event.offsetY;
// });
// canva.addEventListener("mousemove", (event) => {
//   if (isMouseDown) {
//     // console.log(startx, starty, endx, endy);
//     // ctx.moveTo(startx, starty);
//     // ctx.lineTo(endx, endy);
//     // ctx.stroke();

//     ctx.fillStyle = color.value;
//     ctx.fillRect(event.offsetX, event.offsetY, size.value, size.value);
//   }
// });

canva.addEventListener("mousedown", (event) => {
  startx = event.offsetX;
  starty = event.offsetY;
});
canva.addEventListener("mouseup", (event) => {
  endx = event.offsetX;
  endy = event.offsetY;

  
  ctx.strokeRect(startx, starty, endx, endy);
  ctx.stroke();
});
startx = "";
starty = "";
endx = "";
endy = "";
function forReset() {
      ctx.clearRect(0, 0, canva.width, canva.height);
      var w = canva.width;
      canva.width = 0;
      canva.width = w;
    }
    function forSave() {
          console.log(canva.toDataURL());
          document.getElementById("savedImage").href = `${canva.toDataURL()}`;
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
        //   ctx.arc(startx, starty, 40, 0, 2 * Math.PI);