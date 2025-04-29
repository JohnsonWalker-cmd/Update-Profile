let editIndex = null;

//selecting dom elements
const userNameInput = document.getElementById("name");
const userEmailInput = document.getElementById("e-mail");
const userAgeInput = document.getElementById("age");
const userLocationInput = document.getElementById("location");

//selecting buttons
const saveButton = document.getElementById("save-btn");
const resetButton = document.getElementById("reset-btn");



const form = document.getElementById("user-form");

// Container to hold cards
const userInfoSection = document.querySelector(".user-info");

const users = [];

form.addEventListener("submit" , (event) => {
  event.preventDefault();

  const name = userNameInput.value;
  const email = userEmailInput.value;
  const age = userAgeInput.value;
  const location = userLocationInput.value;

  //console.log(name);

  const newUser = {name, email, age,location};

  /*users.push(newUser);

  renderUserCard(newUser);*/
  if (editIndex !== null) {
    // We're editing an existing user
    users[editIndex] = newUser;
    updateUserCards(); // Re-render all cards
    editIndex = null; // reset to add mode
  } else {
    // Adding a new user
    users.push(newUser);
    renderUserCard(newUser, users.length - 1);
  }

  

  form.reset();

})

form.addEventListener("reset" , () => {
  userNameInput.value = "";
  userEmailInput.value = "";
  userAgeInput.value = "";
  userLocationInput.value = "";
});

function renderUserCard(user , index){
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  const userName = document.createElement("h2");
  userName.textContent = "Name: " + user.name;

  const userEmail = document.createElement("p");
  userEmail.textContent = "Email: " + user.email;

  const userAge = document.createElement("p");
  userAge.textContent = "Age: " + user.age;

  const userLocation = document.createElement("p");
  userLocation.textContent = "Location: " + user.location;

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => {
    userNameInput.value = user.name;
    userEmailInput.value = user.email;
    userAgeInput.value = user.age;
    userLocationInput.value = user.location;

    editIndex = index;
  });

  userCard.appendChild(userName);
  userCard.appendChild(userEmail);
  userCard.appendChild(userAge);
  userCard.appendChild(userLocation);
  userCard.appendChild(editBtn);

  document.querySelector(".user-info").appendChild(userCard);

}

function updateUserCards() {
  userInfoSection.innerHTML = ""; // Clear
  users.forEach((user, index) => renderUserCard(user, index));
}





//initial user data
/*const userData = {
  name : "Lucy Dumordzi",
  email : "sakajohnson@gmail.com",
  age : 22,
  location: "Accra , Ghana"
}*/

