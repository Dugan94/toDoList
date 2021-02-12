/*let button = document.getElementsByTagName("button")[0]

button.addEventListener("mouseenter", function () {
    console.log("CLICK!!!!");
})*/

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
   let li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
})