const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
//   console.log(parent.children[i].innerText);
// // }
// parent.children[2].style.color = "red";
// parent.children[4].style.border = " 5px solid brown";
// parent.children[4].style.width = " 100px";
// parent.children[4].style.hover.color = "yellow ";

// console.log(parent.children[4]);

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayOne = document.querySelector(".day");
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);
// console.log(dayOne.previousElementSibling);

// console.log("NODES: ", parent.childNodes);

const div = document.createElement("div");
div.className = "main";
// div.id = "id!";
div.setAttribute("id", "id1");
div.style.marginTop = "30px";
div.style.border = "6px dotted blue";
div.style.display = "flex";
div.style.textAlign = "center";
div.style.justifyContent = "center";

// div.textContent = "MOHIT TUMANE";
const addtext = document.createTextNode("Mohit Tumane is Boy");
div.appendChild(addtext);
console.log(div);
document.body.appendChild(div);
