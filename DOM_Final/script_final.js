// FUntionality dekhna hai to baaki ko comment out karne ka

// ADD ELEMENTS

function addList(li) {
  // Normal or basic way, unoptimised way
  const list = document.createElement("li");
  list.innerHTML = `${li}`;
  document.querySelector(".language").appendChild(list);
}
addList("python");
addList("C++");

function addListOpti(langname) {
  //direct kiya hai yeh use karna hamesha
  const list = document.createElement("li");
  list.appendChild(document.createTextNode(langname));
  document.querySelector(".language").appendChild(list);
}
addListOpti("Ruby");

// EDIT ELEMENTS
const lastele = document.querySelector("li:nth-child(6)");
const newele = document.createElement("li");
newele.textContent = "English";
lastele.replaceWith(newele);

const thirdele = document.querySelector("li:nth-child(3)");
thirdele.outerHTML = "<li>Typerscript</li>";

// REMOVE ELEMENTS

const secondele = document.querySelector("li:nth-child(2)");
secondele.remove();
