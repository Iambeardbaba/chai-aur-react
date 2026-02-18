const big = document.querySelector(".bigone");
const mid = document.querySelector(".middleone");
const small = document.querySelector(".smallone");
const btn = document.querySelector(".btn");

btn.addEventListener(
  "click",
  () => {
    console.log("Button Clicked");
  },
  true,
);

big.addEventListener(
  "click",
  () => {
    console.log("Big One Clicked");
  },
  true,
);

mid.addEventListener(
  "click",
  () => {
    console.log("Middle One Clicked");
  },
  true,
);

small.addEventListener(
  "click",
  () => {
    console.log("Small One Clicked");
  },
  true,
);
