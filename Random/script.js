const randomPassword = function () {
  const letters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz!@#$%&";
  let pass = "";
  for (let i = 0; i < 16; i++) {
    pass += letters[Math.floor(Math.random() * 67)];
  }
  return pass;
};

document.querySelector("#gen").addEventListener("click", function () {
  document.querySelector(".result").innerHTML = randomPassword();
});
