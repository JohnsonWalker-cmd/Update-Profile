let editIndex = null;

const userNameInput = document.getElementById("name");
const userEmailInput = document.getElementById("e-mail");
const userAgeInput = document.getElementById("age");
const userLocationInput = document.getElementById("location");

const saveButton = document.getElementById("save-btn");
const form = document.getElementById("user-form");

const userInfoSection = document.querySelector(".user-info");


const users = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = userNameInput.value.trim();
  const email = userEmailInput.value.trim();
  const age = userAgeInput.value.trim();
  const location = userLocationInput.value.trim();

  const newUser = { name, email, age, location };

  if (editIndex !== null) {
  
    users[editIndex] = newUser;
    updateUserCards();
    editIndex = null;
    saveButton.textContent = "Save changes";
  } else {
  
    users.push(newUser);
    renderUserCard(newUser, users.length - 1);
  }

  form.reset();
});

function renderUserCard(user, index) {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  userCard.innerHTML = `
    <h2>Name: ${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Age: ${user.age}</p>
    <p>Location: ${user.location}</p>
  `;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  editBtn.addEventListener("click", () => {
    userNameInput.value = user.name;
    userEmailInput.value = user.email;
    userAgeInput.value = user.age;
    userLocationInput.value = user.location;

    editIndex = index;
    saveButton.textContent = "Update user";
  });

  userCard.appendChild(editBtn);
  userInfoSection.appendChild(userCard);
}

function updateUserCards() {
  userInfoSection.innerHTML = "";
  users.forEach((user, index) => renderUserCard(user, index));
}

