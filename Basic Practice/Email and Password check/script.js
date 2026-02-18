const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailInp = document.querySelector("#email");
const passwordInp = document.querySelector("#password");
const displayText = document.querySelector(".displayText");
const btn = document.querySelector(".btn");

const handleSubmit = () => {
  const emailVal = emailInp.value;
  console.log(emailVal);
  const passwordVal = passwordInp.value;
  console.log(passwordVal);
  const emailanswer = emailRegex.test(emailVal);
  const passwordanswer = passwordRegex.test(passwordVal);

  displayText.style.display = "block";

  if (emailanswer && passwordanswer) {
    displayText.textContent = "Everything is correct!";
  } else {
    if (!emailanswer) {
      displayText.textContent = "Invalid Email format";
    } else if (!passwordanswer) {
      displayText.textContent =
        "Password must be 8+ chars with uppercase, number, and symbol.";
    }
  }
};

btn.addEventListener("click", handleSubmit);
