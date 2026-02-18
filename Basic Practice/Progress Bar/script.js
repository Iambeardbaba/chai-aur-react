const bar = document.querySelector(".bar");
const progress = document.querySelector("span");

const targetWidth = 100;
const duration = 5000; // 5 seconds
let startTime = null;

function animate(currentTime) {
  if (!startTime) startTime = currentTime;

  const elapsed = currentTime - startTime;

  const currentWidth = Math.min(
    (elapsed / duration) * targetWidth,
    targetWidth,
  );

  bar.style.width = currentWidth + "%";
  progress.textContent = Math.round(currentWidth);

  if (elapsed < duration) {
    requestAnimationFrame(animate);
  }
}

// Start the animation
requestAnimationFrame(animate);
