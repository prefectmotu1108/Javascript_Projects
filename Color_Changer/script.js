const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = "black";
        body.style.color = "white";
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        body.style.color = "black";
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "red":
        body.style.backgroundColor = e.target.id;
        break;
      case "purple":
        body.style.backgroundColor = e.target.id;
        break;
      case "orange":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }
    // if (e.target.id === "grey") {
    // } else if (e.target.id === "white") {
    // } else if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    //
    // } else if (e.target.id === "red") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "purple") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "orange") {
    //   body.style.backgroundColor = e.target.id;
    // }
  });
});
