document.querySelector("h1").innerHTML="это js";

document.querySelector("img").src="https://i.pinimg.com/736x/f7/e7/00/f7e7004f230191ad9d7904e148995978.jpg";

let paragraph = document.querySelector("p");
let old_text = paragraph.innerText;
paragraph.innerText = old_text + ", это тоже js :D"

let body = document.querySelector("body");
body.innerHTML = body.innerHTML + "<div></div>";

let div = document.querySelector("div");
div.style.width = "100px";
div.style.height = "100px";

div.setAttribute("style", "width:100px; height:100px; border:2px solid #1d1d1d; background: red");

div.innerHTML = "<p>это целый тег js </p>";