// 1. Use 'const' for elements that don't change
const form = document.querySelector(".profile-form");
const main = document.querySelector("#main");

// 2. Optimization: Use Event Delegation or the Form's Submit event
// 'submit' is better than 'click' because it handles 'Enter' key naturally
const handleSubmit = (e) => {
  e.preventDefault();

  // 3. Extract values using FormData (Cleaner than 4 separate querySelectors)
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // 4. Create elements only when needed to save memory
  // We use a Fragment to minimize Reflows
  createProfileCard(data);

  e.target.reset(); // Clear form after submission
};

const createProfileCard = ({ name, occ, pic, info }) => {
  // 5. Template Literals are much more readable than 10x document.createElement
  const cardHTML = `
    <article class="displayCard">
      <img class="profile-img" src="${pic || "default.jpg"}" alt="${name}'s Profile" />
      <h2 class="displayName">${name}</h2>
      <p class="displayOcc"><strong>${occ}</strong></p>
      <p class="displayInfo">${info}</p>
    </article>
  `;

  // 6. Insert into DOM (using insertAdjacentHTML is faster than innerHTML)
  main.insertAdjacentHTML("beforeend", cardHTML);
};

form.addEventListener("submit", handleSubmit);
