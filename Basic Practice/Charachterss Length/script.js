const userInput = document.querySelector(".userinput");
let val = document.querySelector("span");

userInput.addEventListener("input", (e) => {
  let len = e.target.value;
  val.textContent = 20 - len.length;
  console.log(len);
});
