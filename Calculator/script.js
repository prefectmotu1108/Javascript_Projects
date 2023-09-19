const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && btnValue !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = " ";
  } else if (btnValue === "DEL") {
    //agar DEL press kiya to last char remove karna hai
    output = output.toString().slice(0, -1);
  } else {
    if (output === " " && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
//adding event listner to buttons, calling calculate() on click
//niche wala foreach lagane se jo key apan click karre wo console me display hori
// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => console.log(e.target.dataset.value));
// });

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
