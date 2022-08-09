// sare (li) ke under 1 (x) bnaya 
let List = document.getElementsByTagName("li");
for (let i = 0; i < List.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  List[i].appendChild(span);
}
// close 1 array he
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
// li pr click ke bad checked krna hai
let ul = document.querySelector('ul');
ul.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {  // LI capital he mil rha he
    e.target.classList.toggle('checked');
    }
  });

  // new li kelye
function newElement() {
  let newli = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  newli.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(newli);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");// x ki text
  span.className = "close";
  span.appendChild(txt);
  newli.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
//lst 1 array he
function removeAll() {
  let lst = document.getElementsByTagName("ul");
  console.log(lst);
  lst[0].innerHTML = "";
}